'use client';

import HerbImage from './HerbImage';
import PlaceholderImage from './PlaceholderImage';
import Link from 'next/link';
import { FaBolt } from 'react-icons/fa';

interface HerbPairingData {
  herb: string;
  benefit: string;
  slug?: string;
}

interface HerbPairingsProps {
  herbName: string;
  pairings: HerbPairingData[];
}

export default function HerbPairings({ herbName, pairings }: HerbPairingsProps) {
  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="flex items-center">
          <FaBolt className="text-amber-500 w-5 h-5 mr-2" />
          <h2 className="text-2xl font-serif font-bold text-gray-800 dark:text-gray-200">Synergistic Herb Pairings</h2>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Recommended Herb Pairings</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Herbs that work synergistically with {herbName}
        </p>

        {pairings.length > 0 ? (
          <div className="space-y-4">
            {pairings.map((pairing, index) => (
              <Link 
                key={index} 
                href={`/herbs/${pairing.slug || pairing.herb.toLowerCase().replace(/\s+/g, '-')}`}
                className="block"
              >
                <div className="flex items-start p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex-shrink-0 mr-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <PlaceholderImage
                        src={`/images/herbs/${pairing.slug || pairing.herb.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                        fallbackSrc="/images/herbs/placeholder.jpg"
                        alt={pairing.herb}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{pairing.herb}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{pairing.benefit}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 italic">No recommended pairings available for this herb.</p>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Other Herbs You Might Like</h3>
        
        <div className="mt-6">
          <div className="flex items-center">
            <span className="text-amber-500 mr-2">✧</span>
            <h3 className="text-lg font-medium">Complementary Herbs</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Example complementary herbs - these would be dynamically generated */}
            <div className="flex items-start p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex-shrink-0 mr-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="text-green-700 dark:text-green-300 font-bold">G</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Ginger + {herbName}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ginger complements {herbName}'s warming and circulatory effects
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex-shrink-0 mr-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="text-red-700 dark:text-red-300 font-bold">H</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Hawthorn + {herbName}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Hawthorn adds heart-strengthening properties to {herbName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
