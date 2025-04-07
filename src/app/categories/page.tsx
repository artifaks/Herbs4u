'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  herb_count?: number;
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        // Fetch categories
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('categories')
          .select('id, name, slug, description, image_url');

        if (categoriesError) throw categoriesError;

        // Fetch herb counts for each category
        const { data: herbCategoriesData, error: herbCategoriesError } = await supabase
          .from('herb_categories')
          .select('category_id');

        if (herbCategoriesError) throw herbCategoriesError;

        // Count herbs per category
        const categoriesWithCounts = categoriesData.map((category: any) => {
          const herbCount = herbCategoriesData.filter(
            (hc: any) => hc.category_id === category.id
          ).length;
          
          return {
            ...category,
            herb_count: herbCount,
          };
        });

        setCategories(categoriesWithCounts);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-6">Herb Categories</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
        Browse our herbs by category to find natural remedies for specific health concerns. 
        Each category contains herbs carefully selected for their traditional and evidence-based benefits.
      </p>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <Image
                    src={category.image_url || '/images/categories/placeholder.jpg'}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // Fallback image on error
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/categories/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-bold mb-2">{category.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    {category.herb_count} {category.herb_count === 1 ? 'herb' : 'herbs'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
