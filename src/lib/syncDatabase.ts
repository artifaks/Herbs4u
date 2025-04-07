import { supabase } from './supabase';
import { allHerbs } from '@/data/allHerbs';
import { HerbData } from '@/types/herbs';
import { syncEbooksWithStripe } from './stripe-products';

/**
 * Synchronizes all herbs from the TypeScript files to the Supabase database
 */
export async function syncHerbsToDatabase() {
  console.log(`Starting herb synchronization. Total herbs to sync: ${allHerbs.length}`);
  let successCount = 0;
  let errorCount = 0;

  // Get all categories from the database to map them correctly
  const { data: categoriesData, error: categoriesError } = await supabase
    .from('categories')
    .select('id, slug, name');

  if (categoriesError) {
    console.error('Error fetching categories:', categoriesError);
    return {
      success: false,
      message: 'Failed to fetch categories',
      error: categoriesError
    };
  }

  // Create a map of category names to IDs for easier lookup
  const categoryMap = new Map<string, number>();
  if (categoriesData) {
    categoriesData.forEach((category: { slug: string; name: string; id: number }) => {
      // Map both the slug and the name to the ID for flexible matching
      categoryMap.set(category.slug.toLowerCase(), category.id);
      categoryMap.set(category.name.toLowerCase(), category.id);
    });
  }

  // Process each herb
  for (const herb of allHerbs) {
    try {
      // Convert the herb data to the database format
      const dbHerb = convertHerbToDbFormat(herb);
      
      // Insert or update the herb in the database
      const { data: herbData, error } = await supabase
        .from('herbs')
        .upsert(dbHerb, { onConflict: 'slug' })
        .select('id');
      
      if (error) {
        console.error(`Error syncing herb ${herb.name}:`, error);
        errorCount++;
        continue;
      }

      if (herbData && herbData.length > 0) {
        const herbId = herbData[0].id;
        
        // Sync herb categories
        await syncHerbCategories(herbId, herb.categories, categoryMap);
        
        successCount++;
      }
    } catch (error) {
      console.error(`Error processing herb ${herb.name}:`, error);
      errorCount++;
    }
  }

  console.log(`Herb synchronization complete. Success: ${successCount}, Errors: ${errorCount}`);
  return {
    success: true,
    message: `Synchronized ${successCount} herbs successfully. ${errorCount} errors.`,
    successCount,
    errorCount
  };
}

/**
 * Converts a HerbData object to the database format
 */
function convertHerbToDbFormat(herb: HerbData) {
  return {
    name: herb.name,
    scientific_name: herb.scientificName,
    slug: herb.slug,
    description: herb.description,
    image_url: herb.imageUrl,
    rating: herb.rating,
    benefits: JSON.stringify(herb.benefits),
    uses: JSON.stringify(herb.uses),
    fun_fact: herb.funFact,
    dosage: JSON.stringify(herb.dosage),
    warnings: JSON.stringify(herb.warnings),
    history: herb.history,
    cultural_background: herb.culturalBackground,
    preparation: herb.preparation,
    preparations: JSON.stringify(herb.preparations),
    herb_pairings: JSON.stringify(herb.herbPairings),
    benefits_visualization: JSON.stringify(herb.benefitsVisualization),
    resources: JSON.stringify(herb.resources)
  };
}

/**
 * Syncs herb categories for a specific herb
 */
async function syncHerbCategories(
  herbId: number, 
  categories: string[], 
  categoryMap: Map<string, number>
) {
  // First, get existing categories for this herb
  const { data: existingCategories, error: fetchError } = await supabase
    .from('herb_categories')
    .select('category_id')
    .eq('herb_id', herbId);

  if (fetchError) {
    console.error(`Error fetching existing categories for herb ${herbId}:`, fetchError);
    return {
      success: false,
      error: fetchError
    };
  }

  // Create a set of existing category IDs for easy comparison
  const existingCategoryIds = new Set<number>();
  if (existingCategories) {
    existingCategories.forEach((item: { category_id: number }) => {
      existingCategoryIds.add(item.category_id);
    });
  }

  // Process each category
  for (const category of categories) {
    const categoryLower = category.toLowerCase();
    let categoryId = categoryMap.get(categoryLower);

    // If category doesn't exist, create it
    if (!categoryId) {
      const slug = categoryLower.replace(/\s+/g, '-');
      const { data: newCategory, error: createError } = await supabase
        .from('categories')
        .upsert({
          name: category,
          slug: slug,
          description: `Herbs categorized as ${category}`,
          image_url: '/images/categories/default.jpg'
        }, { onConflict: 'slug' })
        .select('id');

      if (createError) {
        console.error(`Error creating category ${category}:`, createError);
        continue;
      }

      if (newCategory && newCategory.length > 0) {
        categoryId = newCategory[0].id;
        categoryMap.set(categoryLower, categoryId);
      }
    }

    if (categoryId) {
      // Skip if this category is already associated with the herb
      if (existingCategoryIds.has(categoryId)) {
        continue;
      }

      // Add the herb-category association
      const { error: linkError } = await supabase
        .from('herb_categories')
        .upsert({
          herb_id: herbId,
          category_id: categoryId
        }, { onConflict: ['herb_id', 'category_id'] });

      if (linkError) {
        console.error(`Error linking herb ${herbId} to category ${categoryId}:`, linkError);
      }
    }
  }
}

/**
 * Synchronizes ebooks to the database and Stripe
 * This can be expanded if there are TypeScript ebook files to sync
 */
export async function syncEbooksToDatabase() {
  // Currently using the hardcoded ebooks from the seedEbooks function
  const ebooks = [
    {
      title: 'Beginner\'s Guide to Herbal Medicine',
      slug: 'beginners-guide',
      description: 'A comprehensive introduction to using herbs safely and effectively.',
      price: 9.99,
      file_url: '/ebooks/beginners-guide.pdf',
      cover_image_url: '/images/ebooks/beginners-guide.jpg',
      is_premium: false
    },
    {
      title: 'Herbal Remedies for Stress & Anxiety',
      slug: 'stress-anxiety',
      description: 'Natural approaches to managing stress and promoting relaxation.',
      price: 12.99,
      file_url: '/ebooks/stress-anxiety.pdf',
      cover_image_url: '/images/ebooks/stress-anxiety.jpg',
      is_premium: false
    },
    {
      title: 'Seasonal Immune Support',
      slug: 'immune-support',
      description: 'Strengthen your immune system naturally throughout the year.',
      price: 14.99,
      file_url: '/ebooks/immune-support.pdf',
      cover_image_url: '/images/ebooks/immune-support.jpg',
      is_premium: false
    },
    {
      title: 'Advanced Herbal Protocols',
      slug: 'advanced-protocols',
      description: 'Expert-level herbal formulations for complex health concerns.',
      price: 0,
      file_url: '/ebooks/advanced-protocols.pdf',
      cover_image_url: '/images/ebooks/advanced-protocols.jpg',
      is_premium: true
    },
    {
      title: 'Herbal Medicine for Women\'s Health',
      slug: 'womens-health',
      description: 'Natural remedies for women\'s health concerns throughout all life stages.',
      price: 14.99,
      file_url: '/ebooks/womens-health.pdf',
      cover_image_url: '/images/ebooks/womens-health.jpg',
      is_premium: false
    },
    {
      title: 'Herbal First Aid',
      slug: 'herbal-first-aid',
      description: 'Essential herbal remedies for minor injuries and common ailments.',
      price: 9.99,
      file_url: '/ebooks/herbal-first-aid.pdf',
      cover_image_url: '/images/ebooks/herbal-first-aid.jpg',
      is_premium: false
    },
    {
      title: 'Sacred Herbs: Spiritual & Ceremonial Uses',
      slug: 'sacred-herbs',
      description: 'Explore the rich tradition of herbs in spiritual and ceremonial practices.',
      price: 0,
      file_url: '/ebooks/sacred-herbs.pdf',
      cover_image_url: '/images/ebooks/sacred-herbs.jpg',
      is_premium: true
    }
  ];

  console.log(`Starting ebook synchronization. Total ebooks to sync: ${ebooks.length}`);
  let successCount = 0;
  let errorCount = 0;

  // First, sync ebooks to Supabase
  for (const ebook of ebooks) {
    try {
      // Insert or update the ebook in Supabase
      const { data, error } = await supabase
        .from('ebooks')
        .upsert(ebook, { onConflict: 'slug' })
        .select('id');
      
      if (error) {
        console.error(`Error syncing ebook ${ebook.title} to Supabase:`, error);
        errorCount++;
        continue;
      }
      
      // Add the ID to the ebook object if it's a new insertion
      if (data && data.length > 0) {
        (ebook as any).id = data[0].id;
      }
      
      successCount++;
    } catch (err) {
      console.error(`Unexpected error syncing ebook ${ebook.title}:`, err);
      errorCount++;
    }
  }
  
  // Then, sync ebooks to Stripe
  try {
    console.log('Syncing ebooks with Stripe...');
    const stripeResults = await syncEbooksWithStripe(ebooks);
    console.log('Stripe sync results:', stripeResults);
  } catch (err) {
    console.error('Error syncing ebooks with Stripe:', err);
    // Don't fail the entire sync if Stripe sync fails
  }

  console.log(`Ebook synchronization complete. Success: ${successCount}, Errors: ${errorCount}`);
  return {
    success: true,
    message: `Synchronized ${successCount} ebooks successfully. ${errorCount} errors.`,
    successCount,
    errorCount
  };
}

/**
 * Synchronizes both herbs and ebooks to the database
 */
export async function syncAllToDatabase() {
  const herbsResult = await syncHerbsToDatabase();
  const ebooksResult = await syncEbooksToDatabase();

  return {
    herbs: herbsResult,
    ebooks: ebooksResult,
    success: herbsResult.success && ebooksResult.success,
    message: `Herbs: ${herbsResult.message} | Ebooks: ${ebooksResult.message}`
  };
}
