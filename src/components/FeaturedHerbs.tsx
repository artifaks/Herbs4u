'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

// This would typically come from an API or database
const featuredHerbs = [
  {
    id: 1,
    name: 'Ashwagandha',
    slug: 'ashwagandha',
    description: 'An adaptogenic herb that helps the body manage stress and promotes overall wellbeing.',
    imageUrl: '/images/herbs/ashwagandha.jpg',
    rating: 4.8,
    categories: ['Stress', 'Energy', 'Sleep'],
  },
  {
    id: 2,
    name: 'Echinacea',
    slug: 'echinacea',
    description: 'Supports the immune system and helps the body fight off infections and colds.',
    imageUrl: '/images/herbs/echinacea.jpg',
    rating: 4.6,
    categories: ['Immunity', 'Wellness'],
  },
  {
    id: 3,
    name: 'Chamomile',
    slug: 'chamomile',
    description: 'Promotes relaxation and healthy sleep, while also supporting digestive health.',
    imageUrl: '/images/herbs/chamomile.jpg',
    rating: 4.7,
    categories: ['Sleep', 'Digestion', 'Stress'],
  },
  {
    id: 4,
    name: 'Turmeric',
    slug: 'turmeric',
    description: 'A powerful anti-inflammatory herb that supports joint health and overall wellness.',
    imageUrl: '/images/herbs/turmeric.jpg',
    rating: 4.9,
    categories: ['Inflammation', 'Joints', 'Immunity'],
  },
];

export default function FeaturedHerbs() {
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
