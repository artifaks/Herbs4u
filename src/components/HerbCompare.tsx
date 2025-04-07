'use client';

import { useState, useEffect } from 'react';
import { HerbData } from '@/types/herbs';
import Link from 'next/link';
import HerbImage from './HerbImage';
import { FaStar, FaArrowLeft, FaCheck, FaTimes } from 'react-icons/fa';

interface HerbCompareProps {
  selectedHerbs: string[];
  onClose: () => void;
}

export default function HerbCompare({ selectedHerbs, onClose }: HerbCompareProps) {
  const [herbs, setHerbs] = useState<HerbData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHerbs() {
      try {
        setLoading(true);
        const herbData = await Promise.all(
          selectedHerbs.map(async (slug) => {
            const response = await fetch(`/api/herbs?slug=${slug}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch herb: ${slug}`);
            }
            return response.json();
          })
        );
        setHerbs(herbData);
      } catch (error) {
        console.error('Error fetching herbs for comparison:', error);
        setError('Failed to load one or more herbs for comparison');
      } finally {
        setLoading(false);
      }
    }

    if (selectedHerbs.length > 0) {
      fetchHerbs();
    }
  }, [selectedHerbs]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Herb Comparison</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Herb Comparison</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-700 dark:text-red-300">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Herb Comparison</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FaArrowLeft />
          </button>
        </div>

        {/* Herb Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {herbs.map((herb) => (
            <div key={herb.id} className="text-center">
              <div className="relative h-48 w-full mb-2">
                <HerbImage
                  src={herb.imageUrl || '/images/placeholder.jpg'}
                  alt={herb.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold">{herb.name}</h3>
              <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-1">
                {herb.scientificName}
              </p>
              <div className="flex justify-center items-center mb-2">
                <div className="flex mr-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(herb.rating)
                          ? 'text-yellow-500'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {herb.rating.toFixed(1)}
                </span>
              </div>
              <Link
                href={`/herbs/${herb.slug}`}
                className="text-primary-600 dark:text-primary-400 hover:underline text-sm"
              >
                View Full Details
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison Sections */}
        <div className="space-y-8">
          {/* Categories */}
          <div className="comparison-section">
            <h3 className="text-lg font-bold mb-2 border-b pb-2">Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {herbs.map((herb) => (
                <div key={`${herb.id}-categories`} className="space-y-1">
                  <div className="flex flex-wrap gap-1">
                    {herb.categories.map((category, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="comparison-section">
            <h3 className="text-lg font-bold mb-2 border-b pb-2">Description</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {herbs.map((herb) => (
                <div key={`${herb.id}-description`} className="text-sm">
                  <p>{herb.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="comparison-section">
            <h3 className="text-lg font-bold mb-2 border-b pb-2">Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {herbs.map((herb) => (
                <div key={`${herb.id}-benefits`}>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {herb.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Uses */}
          <div className="comparison-section">
            <h3 className="text-lg font-bold mb-2 border-b pb-2">Common Uses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {herbs.map((herb) => (
                <div key={`${herb.id}-uses`}>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {herb.uses.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Dosage */}
          <div className="comparison-section">
            <h3 className="text-lg font-bold mb-2 border-b pb-2">Recommended Dosage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {herbs.map((herb) => (
                <div key={`${herb.id}-dosage`} className="text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Powder:</p>
                      <p>{herb.dosage.powder}</p>
                    </div>
                    <div>
                      <p className="font-medium">Capsule:</p>
                      <p>{herb.dosage.capsule}</p>
                    </div>
                    <div>
                      <p className="font-medium">Tincture:</p>
                      <p>{herb.dosage.tincture}</p>
                    </div>
                    <div>
                      <p className="font-medium">Tea:</p>
                      <p>{herb.dosage.tea}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warnings */}
          <div className="comparison-section">
            <h3 className="text-lg font-bold mb-2 border-b pb-2">Warnings & Precautions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {herbs.map((herb) => (
                <div key={`${herb.id}-warnings`}>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-700 dark:text-yellow-500">
                    {herb.warnings.map((warning, index) => (
                      <li key={index}>{warning}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Preparation Methods */}
          <div className="comparison-section">
            <h3 className="text-lg font-bold mb-2 border-b pb-2">Preparation Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {herbs.map((herb) => (
                <div key={`${herb.id}-preparations`} className="text-sm">
                  <p className="mb-2">{herb.preparation}</p>
                  
                  {herb.preparations && herb.preparations.length > 0 ? (
                    <div className="space-y-4">
                      {herb.preparations.map((prep, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                          <h4 className="font-medium mb-1">{prep.name}</h4>
                          <div className="mb-2">
                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Ingredients:</p>
                            <ul className="list-disc pl-5 text-xs">
                              {prep.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Instructions:</p>
                            <p className="text-xs">{prep.instructions}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 italic">No specific preparation methods provided.</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Herb Pairings */}
          <div className="comparison-section">
            <h3 className="text-lg font-bold mb-2 border-b pb-2">Herb Pairings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {herbs.map((herb) => (
                <div key={`${herb.id}-pairings`}>
                  {herb.herbPairings && herb.herbPairings.length > 0 ? (
                    <div className="space-y-2">
                      {herb.herbPairings.map((pairing, index) => (
                        <div key={index} className="bg-primary-50 dark:bg-primary-900/20 p-2 rounded-lg">
                          <p className="text-sm font-medium">{pairing.herb}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{pairing.benefit}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 italic text-sm">No herb pairings provided.</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
