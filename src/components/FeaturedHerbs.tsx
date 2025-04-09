'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { HerbData } from '@/types/herbs';

export default function FeaturedHerbs() {
  const [featuredHerbs, setFeaturedHerbs] = useState<HerbData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHerbs() {
      try {
        // Fetch all herbs with a high limit to ensure we get everything
        const response = await fetch('/api/herbs?limit=100');
        const data = await response.json();

        if (data && data.herbs && data.herbs.length > 0) {
          // Get a random selection of herbs to feature
          const allHerbs = data.herbs;
          const randomHerbs = [];
          
          // Get 8 random herbs to feature
          const herbCount = Math.min(8, allHerbs.length);
          const selectedIndices = new Set();
          
          while (selectedIndices.size < herbCount) {
            const randomIndex = Math.floor(Math.random() * allHerbs.length);
            if (!selectedIndices.has(randomIndex)) {
              selectedIndices.add(randomIndex);
              randomHerbs.push(allHerbs[randomIndex]);
            }
          }
          
          setFeaturedHerbs(randomHerbs);
        }
      } catch (error) {
        console.error('Error fetching featured herbs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchHerbs();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="herb-card animate-pulse">
            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3"></div>
              <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
              <div className="flex gap-1">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredHerbs.map((herb) => (
        <Link key={herb.id} href={`/herbs/${herb.slug}`}>
          <div className="herb-card h-full hover:translate-y-[-5px]">
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              <Image
                src={herb.imageUrl}
                alt={herb.name}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                onError={(e) => {
                  // Fallback image on error
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/placeholder.jpg';
                }}
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif font-bold">{herb.name}</h3>
                <div className="flex items-center text-yellow-500">
                  <FaStar className="w-4 h-4" />
                  <span className="ml-1 text-sm">{herb.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {herb.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {herb.categories.map((category) => (
                  <span 
                    key={category} 
                    className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
