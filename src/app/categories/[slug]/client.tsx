'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { supabase } from '@/lib/supabase';
import SearchBar from '@/components/SearchBar';

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

export function CategoryClient({ slug }: { slug: string }) {
  const [category, setCategory] = useState<Category | null>(null);
  const [herbs, setHerbs] = useState<Herb[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryAndHerbs = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Fetch category details
        const { data: categoryData, error: categoryError } = await supabase
          .from('categories')
          .select('*')
          .eq('slug', slug)
          .single();

        if (categoryError) {
          console.error('Error fetching category:', categoryError);
          setError('Failed to load category details');
          setLoading(false);
          return;
        }

        setCategory(categoryData);

        // Fetch herbs in this category
        const { data: herbCategoriesData, error: herbCategoriesError } = await supabase
          .from('herb_categories')
          .select('herb_id')
          .eq('category_id', categoryData.id);

        if (herbCategoriesError) {
          console.error('Error fetching herb categories:', herbCategoriesError);
          setError('Failed to load herbs for this category');
          setLoading(false);
          return;
        }

        if (herbCategoriesData.length > 0) {
          const herbIds = herbCategoriesData.map((hc: any) => hc.herb_id);
          
          const { data: herbsData, error: herbsError } = await supabase
            .from('herbs')
            .select('id, name, slug, description, image_url')
            .in('id', herbIds);

          if (herbsError) {
            console.error('Error fetching herbs:', herbsError);
            setError('Failed to load herb details');
            setLoading(false);
            return;
          }
          
          setHerbs(herbsData || []);
        } else {
          setHerbs([]);
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndHerbs();
  }, [slug]);

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
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
          <p className="text-red-700 dark:text-red-300">{error}</p>
        </div>
        <Link href="/categories" className="text-primary-600 hover:text-primary-700 flex items-center gap-2">
          <FaArrowLeft /> Back to Categories
        </Link>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
          <p className="text-yellow-700 dark:text-yellow-300">Category not found</p>
        </div>
        <Link href="/categories" className="text-primary-600 hover:text-primary-700 flex items-center gap-2">
          <FaArrowLeft /> Back to Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/categories" className="text-primary-600 hover:text-primary-700 flex items-center gap-2 mb-6">
        <FaArrowLeft /> Back to Categories
      </Link>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="relative aspect-square overflow-hidden rounded-lg shadow-md mb-4">
            <Image 
              src={category.image_url || '/images/categories/placeholder.jpg'} 
              alt={category.name} 
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{category.description}</p>
          
          <SearchBar 
            onSearch={handleSearch} 
            placeholder={`Search herbs in ${category.name}...`}
          />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-6">
        {searchQuery ? `Search Results (${filteredHerbs.length})` : `Herbs in ${category.name} (${herbs.length})`}
      </h2>
      
      {filteredHerbs.length === 0 ? (
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {searchQuery 
              ? `No herbs found matching "${searchQuery}" in ${category.name}` 
              : `No herbs found in ${category.name}`
            }
          </p>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')} 
              className="mt-4 text-primary-600 hover:text-primary-700"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHerbs.map((herb) => (
            <Link 
              key={herb.id} 
              href={`/herbs/${herb.slug}`}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image 
                  src={herb.image_url || '/images/herbs/placeholder.jpg'} 
                  alt={herb.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{herb.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{herb.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
