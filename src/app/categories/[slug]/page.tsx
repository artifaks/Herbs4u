'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { supabase } from '@/lib/supabase';
import SearchBar from '@/components/SearchBar';

// This function is required for static export
export async function generateStaticParams() {
  // For static export, we'll include the most common categories
  return [
    { slug: 'nutritive' },
    { slug: 'medicinal' },
    { slug: 'adaptogenic' },
    { slug: 'nervine' },
    { slug: 'tonic' },
    { slug: 'bitter' },
    { slug: 'aromatic' },
    { slug: 'astringent' },
    { slug: 'demulcent' },
    { slug: 'expectorant' },
    { slug: 'carminative' },
    { slug: 'diuretic' },
    { slug: 'antispasmodic' },
    { slug: 'anti-inflammatory' },
    { slug: 'antimicrobial' },
    { slug: 'antioxidant' },
    { slug: 'immune-support' },
    { slug: 'digestive' },
    { slug: 'respiratory' },
    { slug: 'circulatory' },
    { slug: 'nervine-relaxant' },
    { slug: 'nervine-stimulant' },
    { slug: 'hepatic' },
    { slug: 'alterative' },
    { slug: 'emmenagogue' },
    { slug: 'galactagogue' },
    { slug: 'vulnerary' },
    { slug: 'diaphoretic' },
    { slug: 'febrifuge' },
    { slug: 'hypotensive' },
    { slug: 'laxative' },
    { slug: 'sedative' },
    { slug: 'stimulant' },
    { slug: 'styptic' },
    { slug: 'tonic' },
    { slug: 'vermifuge' }
  ];
}

type Herb = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url: string;
};

type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url: string;
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [category, setCategory] = useState<Category | null>(null);
  const [herbs, setHerbs] = useState<Herb[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCategoryAndHerbs = async () => {
      setLoading(true);
      try {
        // Fetch category details
        const { data: categoryData, error: categoryError } = await supabase
          .from('categories')
          .select('*')
          .eq('slug', params.slug)
          .single();

        if (categoryError) throw categoryError;
        setCategory(categoryData);

        // Fetch herbs in this category
        const { data: herbCategoriesData, error: herbCategoriesError } = await supabase
          .from('herb_categories')
          .select('herb_id')
          .eq('category_id', categoryData.id);

        if (herbCategoriesError) throw herbCategoriesError;

        if (herbCategoriesData.length > 0) {
          const herbIds = herbCategoriesData.map((hc: any) => hc.herb_id);
          
          const { data: herbsData, error: herbsError } = await supabase
            .from('herbs')
            .select('id, name, slug, description, image_url')
            .in('id', herbIds);

          if (herbsError) throw herbsError;
          setHerbs(herbsData);
        }
      } catch (error) {
        console.error('Error fetching category and herbs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndHerbs();
  }, [params.slug]);

  // Filter herbs based on search query
  const filteredHerbs = herbs.filter((herb) => 
    searchQuery === '' || 
    herb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    herb.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="herb-card">
                <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We couldn't find the category you're looking for.
          </p>
          <Link href="/categories" className="btn-primary inline-flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/categories" className="text-primary-600 dark:text-primary-400 inline-flex items-center mb-4 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Categories
        </Link>
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-1/3 lg:w-1/4">
            <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src={category.image_url || '/images/categories/placeholder.jpg'}
                alt={category.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={(e) => {
                  // Fallback image on error
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/categories/placeholder.jpg';
                }}
              />
            </div>
          </div>
          
          <div className="md:w-2/3 lg:w-3/4">
            <h1 className="text-3xl font-serif font-bold mb-3">{category.name}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {category.description}
            </p>
            
            <div className="w-full max-w-lg">
              <SearchBar 
                onSearch={handleSearch} 
                placeholder={`Search within ${category.name}...`}
                showTypeSelector={false}
              />
            </div>
          </div>
        </div>
      </div>
      
      {filteredHerbs.length > 0 ? (
        <div>
          <h2 className="text-2xl font-serif font-bold mb-6">
            {searchQuery ? `Search Results (${filteredHerbs.length})` : `Herbs in ${category.name} (${herbs.length})`}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHerbs.map((herb) => (
              <Link key={herb.id} href={`/herbs/${herb.slug}`}>
                <div className="herb-card h-full hover:translate-y-[-5px]">
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <Image
                      src={herb.image_url || '/images/placeholder.jpg'}
                      alt={herb.name}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        // Fallback image on error
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-serif font-bold mb-2">{herb.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                      {herb.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center">
          <p className="text-lg mb-4">
            {searchQuery 
              ? `No herbs found matching "${searchQuery}" in this category.` 
              : `No herbs found in the ${category.name} category yet.`}
          </p>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="btn-outline"
            >
              Clear Search
            </button>
          )}
        </div>
      )}
    </div>
  );
}
