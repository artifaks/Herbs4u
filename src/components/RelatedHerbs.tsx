'use client';

import Link from 'next/link';
import PlaceholderImage from './PlaceholderImage';

interface RelatedHerb {
  name: string;
  slug: string;
  imageUrl?: string;
  category?: string;
}

interface RelatedHerbsProps {
  currentHerbName: string;
  relatedHerbs: RelatedHerb[];
}

export default function RelatedHerbs({ currentHerbName, relatedHerbs }: RelatedHerbsProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-serif font-bold mb-6">You Might Also Like</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {relatedHerbs.map((herb, index) => (
          <Link 
            key={index} 
            href={`/herbs/${herb.slug}`} 
            className="group"
          >
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="relative h-32 w-full">
                <PlaceholderImage
                  src={herb.imageUrl || `/images/herbs/${herb.slug}.jpg`}
                  fallbackSrc="/images/herbs/placeholder.jpg"
                  alt={herb.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {herb.name}
                </h3>
                {herb.category && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {herb.category}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
