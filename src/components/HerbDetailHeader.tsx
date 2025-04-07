'use client';

import { useState } from 'react';
import Link from 'next/link';
import HerbImage from './HerbImage';
import { FaStar, FaBookmark, FaSeedling, FaShare, FaHeart } from 'react-icons/fa';

interface HerbDetailHeaderProps {
  name: string;
  scientificName: string;
  description: string;
  imageUrl: string;
  rating: number;
  categories: string[];
}

export default function HerbDetailHeader({
  name,
  scientificName,
  description,
  imageUrl,
  rating,
  categories
}: HerbDetailHeaderProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      <div className="md:w-1/3">
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
          <HerbImage
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      
      <div className="md:w-2/3">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-1">{name}</h1>
            <p className="text-gray-600 dark:text-gray-400 italic mb-2">{scientificName}</p>
          </div>
          <div className="relative">
            <button 
              onClick={() => setShowShareOptions(!showShareOptions)}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FaShare className="w-4 h-4" />
            </button>
            {showShareOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-700">
                <div className="p-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    Copy Link
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    Share on Twitter
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    Share on Facebook
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">{rating.toFixed(1)}</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              href={`/herbs?category=${encodeURIComponent(category)}`}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm hover:bg-primary-200 dark:hover:bg-primary-800/40 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            className={`flex items-center justify-center px-4 py-2 rounded-md transition-colors ${
              isSaved 
                ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 border border-primary-300 dark:border-primary-700' 
                : 'btn-primary'
            }`}
            onClick={() => setIsSaved(!isSaved)}
          >
            {isSaved ? (
              <>
                <FaHeart className="mr-2 text-red-500" />
                Saved to Collection
              </>
            ) : (
              <>
                <FaBookmark className="mr-2" />
                Save to Collection
              </>
            )}
          </button>
          <Link href={`/growing-guide/${name.toLowerCase().replace(/\s+/g, '-')}`} className="btn-outline flex items-center justify-center">
            <FaSeedling className="mr-2" />
            Growing Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
