import { supabase } from './supabase';
import fs from 'fs';
import path from 'path';

export async function setupDatabase() {
  try {
    // First create the exec_sql function if it doesn't exist
    const execSqlPath = path.join(process.cwd(), 'src', 'lib', 'migrations', 'exec_sql.sql');
    const execSqlFunction = fs.readFileSync(execSqlPath, 'utf8');
    
    // Execute the exec_sql function creation directly
    try {
      // Using raw query to create the function
      const { error: functionError } = await supabase.from('_exec_sql_setup').select('*');
      
      // If we get a table doesn't exist error, that's expected
      if (functionError && functionError.code === '42P01') {
        // This is good, now try to create the function with a raw query
        const { error: createFunctionError } = await supabase.rpc('exec_sql', { sql: execSqlFunction });
        
        if (createFunctionError) {
          // If the function doesn't exist yet, we need to create it first
          // We'll use a direct SQL query instead
          const { error: rawError } = await supabase.rpc('exec', { sql: execSqlFunction });
          
          if (rawError) {
            console.error('Error creating exec_sql function:', rawError);
            console.log('Attempting to continue anyway...');
          }
        }
      }
    } catch (functionSetupError) {
      console.error('Error setting up exec_sql function:', functionSetupError);
      console.log('Attempting to continue with database setup anyway...');
    }

    // Read the SQL file
    const sqlPath = path.join(process.cwd(), 'src', 'lib', 'migrations', 'initial_schema.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Execute the SQL
    const { error } = await supabase.rpc('exec_sql', { sql });
    
    if (error) {
      console.error('Error setting up database:', error);
      
      // If the error is that the function doesn't exist, we need to create it first
      if (error.message && error.message.includes('function "exec_sql" does not exist')) {
        console.log('The exec_sql function does not exist. Please create it manually in the Supabase SQL editor using the following SQL:');
        console.log(execSqlFunction);
      }
      
      return false;
    }
    
    console.log('Database setup completed successfully');
    return true;
  } catch (error) {
    console.error('Error setting up database:', error);
    return false;
  }
}

export async function seedCategories() {
  const categories = [
    {
      name: 'Digestion',
      slug: 'digestion',
      description: 'Herbs that support digestive health and comfort',
      image_url: '/images/categories/digestion.jpg',
    },
    {
      name: 'Sleep & Relaxation',
      slug: 'sleep',
      description: 'Natural remedies for better sleep and stress relief',
      image_url: '/images/categories/sleep.jpg',
    },
    {
      name: 'Immunity',
      slug: 'immunity',
      description: 'Strengthen your body\'s natural defenses',
      image_url: '/images/categories/immunity.jpg',
    },
    {
      name: 'Energy & Vitality',
      slug: 'energy',
      description: 'Boost your energy levels naturally',
      image_url: '/images/categories/energy.jpg',
    },
    {
      name: 'Women\'s Health',
      slug: 'womens-health',
      description: 'Herbal support for women\'s wellbeing',
      image_url: '/images/categories/womens-health.jpg',
    },
    {
      name: 'Men\'s Health',
      slug: 'mens-health',
      description: 'Herbs tailored for men\'s health concerns',
      image_url: '/images/categories/mens-health.jpg',
    },
  ];

  for (const category of categories) {
    const { error } = await supabase
      .from('categories')
      .upsert(category, { onConflict: 'slug' });
    
    if (error) {
      console.error(`Error seeding category ${category.name}:`, error);
    }
  }

  console.log('Categories seeded successfully');
}

export async function seedHerbs() {
  const herbs = [
    {
      name: 'Ashwagandha',
      scientific_name: 'Withania somnifera',
      slug: 'ashwagandha',
      description: 'Ashwagandha is an adaptogenic herb that has been used for over 3,000 years to help the body manage stress, boost energy levels, and improve concentration.',
      benefits: [
        'Helps reduce stress and anxiety',
        'May improve sleep quality',
        'Supports immune function',
        'May enhance muscle strength and recovery',
        'Supports cognitive function',
        'May help reduce inflammation'
      ],
      dosage: {
        powder: '1-2 teaspoons (3-6 grams) daily',
        capsule: '300-500 mg, 1-2 times daily',
        tincture: '2-4 ml, 2-3 times daily',
        tea: '1-2 teaspoons of dried root per cup, steep for 10 minutes'
      },
      warnings: [
        'Pregnant or breastfeeding women should avoid use',
        'May interact with thyroid medications',
        'May increase the effects of sedatives',
        'Should be discontinued at least 2 weeks before surgery'
      ],
      history: 'Ashwagandha has been a staple in Ayurvedic medicine for over 3,000 years. Its name means "smell of the horse" in Sanskrit, referring both to its unique smell and its traditional use for imparting the strength and vitality of a horse. In ancient texts, it was classified as a "Rasayana," a group of herbs used to promote physical and mental health, augment resistance to disease, and increase longevity. It was often prescribed for elderly people to rejuvenate body and mind, and for children as a tonic.',
      cultural_background: 'In India, Ashwagandha has been used in traditional households as a general tonic and for addressing various ailments. It holds a sacred place in indigenous medical systems and is often used in religious ceremonies. The herb is mentioned in ancient texts like the Charaka Samhita (100 BC) and is considered one of the most important herbs in Ayurvedic medicine. It was traditionally prepared with milk and honey to enhance its rejuvenating properties.',
      preparation: 'Traditionally, Ashwagandha root is dried and ground into a fine powder. This powder can be mixed with warm milk and honey to make a tonic. In modern times, it\'s commonly consumed as capsules, tablets, or as part of adaptogenic blends. The root can also be tinctured in alcohol or prepared as a decoction.',
      image_url: '/images/herbs/ashwagandha.jpg',
    },
    {
      name: 'Echinacea',
      scientific_name: 'Echinacea purpurea',
      slug: 'echinacea',
      description: 'Echinacea is a powerful herb that supports the immune system and helps the body fight off infections and colds.',
      benefits: [
        'Supports immune system function',
        'May reduce the duration and severity of colds',
        'Has anti-inflammatory properties',
        'May help with upper respiratory infections',
        'Contains antioxidants'
      ],
      dosage: {
        tea: '1-2 teaspoons of dried herb per cup, steep for 10-15 minutes, up to 3 times daily',
        tincture: '2-3 ml, 3 times daily',
        capsule: '300-500 mg, 3 times daily'
      },
      warnings: [
        'Not recommended for people with autoimmune disorders',
        'May interact with immunosuppressant medications',
        'Should not be used continuously for more than 10 days',
        'May cause allergic reactions in people allergic to plants in the daisy family'
      ],
      history: 'Echinacea has been used medicinally for centuries by Native American tribes, including the Lakota, Cheyenne, and Comanche. It was traditionally used for a variety of ailments, including pain relief, snake bites, and as an antiseptic. European settlers adopted its use in the 1800s, and by the early 20th century, it became one of the most popular herbs in America before the advent of antibiotics.',
      cultural_background: 'Native Americans considered Echinacea a sacred plant and used it in healing ceremonies. Different tribes had various methods of preparation and use. The Lakota, for example, used the fresh juice of the root for snake bites, while the Cheyenne chewed the roots for sore throats and used it as a wash for burns and other skin conditions. The plant was so valued that knowledge of its use was passed down through generations as an important part of tribal medicine.',
      preparation: 'Traditionally, the roots, leaves, and flowers of Echinacea were used medicinally. Native Americans would chew the roots, prepare decoctions, or apply the fresh juice to wounds. Today, Echinacea is commonly prepared as a tea, tincture, or in capsule form. For tea, the dried herb is steeped in hot water. Tinctures are made by soaking the plant material in alcohol to extract the beneficial compounds.',
      image_url: '/images/herbs/echinacea.jpg',
    },
    {
      name: 'Chamomile',
      scientific_name: 'Matricaria chamomilla',
      slug: 'chamomile',
      description: 'Chamomile is a gentle herb that promotes relaxation and healthy sleep, while also supporting digestive health.',
      benefits: [
        'Promotes relaxation and sleep',
        'Soothes digestive discomfort',
        'Has anti-inflammatory properties',
        'May help reduce anxiety',
        'Can be used topically for skin conditions',
        'Gentle enough for children'
      ],
      dosage: {
        tea: '1-2 teaspoons of dried flowers per cup, steep for 5-10 minutes, up to 3 times daily',
        tincture: '1-3 ml, 3 times daily',
        capsule: '300-400 mg, 3 times daily'
      },
      warnings: [
        'May cause allergic reactions in people allergic to plants in the daisy family',
        'May interact with blood thinners',
        'May increase drowsiness when combined with sedatives',
        'Avoid during the first trimester of pregnancy in medicinal amounts'
      ],
      history: 'Chamomile has been used as a medicinal herb for thousands of years, dating back to ancient Egypt, Greece, and Rome. The Egyptians dedicated chamomile to their sun god Ra due to its daisy-like flower and used it in embalming processes. The Greeks and Romans used it for its calming properties and as a remedy for various ailments. During the Middle Ages, chamomile was one of the nine sacred herbs used by Anglo-Saxons.',
      cultural_background: 'In European folk medicine, chamomile was known as the "plant\'s physician" because it was believed to help ailing plants growing nearby. It has been a staple in households across Europe for centuries, used not only medicinally but also as a gentle hair lightener and skin soother. In German folk medicine, chamomile tea is known as "alles zutraut" (capable of anything) due to its wide range of uses. The herb was so valued that in some cultures, it was believed to bring good fortune to those who grew it.',
      preparation: 'Traditionally, chamomile flowers are harvested when fully open and then dried for use in teas, tinctures, and poultices. Chamomile tea is the most common preparation, made by steeping the dried flowers in hot water. For skin conditions, cooled chamomile tea can be applied as a compress. Chamomile essential oil is also used in aromatherapy and can be diluted in a carrier oil for topical applications.',
      image_url: '/images/herbs/chamomile.jpg',
    },
    {
      name: 'Turmeric',
      scientific_name: 'Curcuma longa',
      slug: 'turmeric',
      description: 'Turmeric is a powerful anti-inflammatory herb that supports joint health and overall wellness.',
      benefits: [
        'Has potent anti-inflammatory properties',
        'Supports joint health',
        'Contains antioxidants',
        'May support brain health',
        'Promotes healthy digestion',
        'May help with pain management'
      ],
      dosage: {
        powder: '1/2-1 teaspoon daily, often mixed with black pepper for better absorption',
        capsule: '400-600 mg, 3 times daily (standardized to 95% curcuminoids)',
        tea: '1-2 teaspoons of powder or grated fresh root per cup, steep for 10 minutes'
      },
      warnings: [
        'May interact with blood thinners',
        'May lower blood sugar levels',
        'Can cause digestive discomfort in high doses',
        'May stimulate contractions in pregnant women',
        'Can interfere with iron absorption'
      ],
      history: 'Turmeric has been used in India for thousands of years as both a spice and medicinal herb. It was first used as a dye, then as a culinary spice, and eventually for its medicinal properties. In traditional Ayurvedic medicine, turmeric was prescribed for a variety of conditions, including breathing problems, pain, and fatigue. It was also used in religious ceremonies and was considered auspicious and sacred.',
      cultural_background: 'In Indian culture, turmeric is deeply integrated into daily life and religious practices. It is used in Hindu wedding ceremonies where a string dyed with turmeric paste (known as the mangalsutra) is tied around the bride\'s neck to signify marriage. Turmeric paste is also applied to the skin of both bride and groom before the wedding as part of a ritual called haldi ceremony, which is believed to bless and purify the couple. In many South Asian households, turmeric is considered a symbol of prosperity and fertility.',
      preparation: 'Traditionally, turmeric root is harvested, boiled, dried, and ground into a powder. In Ayurvedic medicine, it is often mixed with warm milk and honey (known as "golden milk") to treat coughs, colds, and inflammation. For better absorption, it is typically combined with black pepper or fats. Fresh turmeric root can also be juiced or added to foods. Turmeric powder is a staple in curries and other dishes, not only for flavor but also for its health benefits.',
      image_url: '/images/herbs/turmeric.jpg',
    }
  ];

  for (const herb of herbs) {
    const { data: herbData, error } = await supabase
      .from('herbs')
      .upsert(herb, { onConflict: 'slug' })
      .select('id');
    
    if (error) {
      console.error(`Error seeding herb ${herb.name}:`, error);
      continue;
    }

    // Add herb categories
    if (herbData && herbData.length > 0) {
      const herbId = herbData[0].id;
      let categoryIds = [];

      // Get category IDs based on herb
      switch (herb.slug) {
        case 'ashwagandha':
          const { data: stressCategory } = await supabase
            .from('categories')
            .select('id')
            .eq('slug', 'sleep')
            .single();
          
          const { data: energyCategory } = await supabase
            .from('categories')
            .select('id')
            .eq('slug', 'energy')
            .single();

          if (stressCategory) categoryIds.push(stressCategory.id);
          if (energyCategory) categoryIds.push(energyCategory.id);
          break;
        
        case 'echinacea':
          const { data: immunityCategory } = await supabase
            .from('categories')
            .select('id')
            .eq('slug', 'immunity')
            .single();
          
          if (immunityCategory) categoryIds.push(immunityCategory.id);
          break;
        
        case 'chamomile':
          const { data: sleepCategory } = await supabase
            .from('categories')
            .select('id')
            .eq('slug', 'sleep')
            .single();
          
          const { data: digestionCategory } = await supabase
            .from('categories')
            .select('id')
            .eq('slug', 'digestion')
            .single();
          
          if (sleepCategory) categoryIds.push(sleepCategory.id);
          if (digestionCategory) categoryIds.push(digestionCategory.id);
          break;
        
        case 'turmeric':
          const { data: immunityCategory2 } = await supabase
            .from('categories')
            .select('id')
            .eq('slug', 'immunity')
            .single();
          
          if (immunityCategory2) categoryIds.push(immunityCategory2.id);
          break;
      }

      // Add herb categories
      for (const categoryId of categoryIds) {
        const { error: categoryError } = await supabase
          .from('herb_categories')
          .upsert({
            herb_id: herbId,
            category_id: categoryId
          }, { onConflict: ['herb_id', 'category_id'] });
        
        if (categoryError) {
          console.error(`Error adding category for herb ${herb.name}:`, categoryError);
        }
      }
    }
  }

  console.log('Herbs seeded successfully');
}

export async function seedEbooks() {
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
    }
  ];

  for (const ebook of ebooks) {
    const { error } = await supabase
      .from('ebooks')
      .upsert(ebook, { onConflict: 'slug' });
    
    if (error) {
      console.error(`Error seeding ebook ${ebook.title}:`, error);
    }
  }

  console.log('Ebooks seeded successfully');
}

export async function seedDatabase() {
  await seedCategories();
  await seedHerbs();
  await seedEbooks();
  console.log('Database seeded successfully');
}
