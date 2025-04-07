'use client';

import { useState, useEffect } from 'react';
import { HerbData } from '@/types/herbs';
import { FaCheck, FaSearch, FaTimes } from 'react-icons/fa';
import HerbImage from './HerbImage';

interface CompareSelectorProps {
  onSelectHerbs: (herbs: string[]) => void;
  onCancel: () => void;
}

export default function CompareSelector({ onSelectHerbs, onCancel }: CompareSelectorProps) {
  const [herbs, setHerbs] = useState<HerbData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedHerbs, setSelectedHerbs] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHerbs() {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (searchTerm) params.append('search', searchTerm);
        params.append('limit', '50'); // Get more herbs for selection

        const response = await fetch(`/api/herbs?${params.toString()}`);
        if (!response.ok) {
          throw new Error('Failed to fetch herbs');
        }
        
        const data = await response.json();
        if (!data || !data.herbs || data.herbs.length === 0) {
          setHerbs([]);
        } else {
          setHerbs(data.herbs);
        }
      } catch (error) {
        console.error('Error fetching herbs:', error);
        setError('Failed to load herbs. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchHerbs();
  }, [searchTerm]);

  const toggleHerbSelection = (slug: string) => {
    if (selectedHerbs.includes(slug)) {
      setSelectedHerbs(selectedHerbs.filter(h => h !== slug));
    } else {
      // Limit to 3 herbs for comparison
      if (selectedHerbs.length < 3) {
        setSelectedHerbs([...selectedHerbs, slug]);
      }
    }
  };

  const handleCompare = () => {
    if (selectedHerbs.length >= 2) {
      onSelectHerbs(selectedHerbs);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Select Herbs to Compare</h2>
          <button
            onClick={onCancel}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search herbs..."
              className="w-full p-3 pl-10 border rounded-lg dark:bg-slate-700 dark:border-slate-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {selectedHerbs.length} of 3 selected (select 2-3 herbs to compare)
            </p>
            <button
              onClick={handleCompare}
              disabled={selectedHerbs.length < 2}
              className={`px-4 py-2 rounded-lg ${
                selectedHerbs.length < 2
                  ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
              }`}
            >
              Compare Selected
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-700 dark:text-red-300">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {herbs.map((herb) => (
              <div
                key={herb.id}
                className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedHerbs.includes(herb.slug)
                    ? 'border-primary-500 dark:border-primary-400 shadow-md'
                    : 'border-gray-200 dark:border-gray-700 hover:shadow-md'
                }`}
                onClick={() => toggleHerbSelection(herb.slug)}
              >
                <div className="relative">
                  <div className="relative h-32 w-full">
                    <HerbImage
                      src={herb.imageUrl || '/images/placeholder.jpg'}
                      alt={herb.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  {selectedHerbs.includes(herb.slug) && (
                    <div className="absolute top-2 right-2 bg-primary-500 text-white p-1 rounded-full">
                      <FaCheck size={12} />
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-medium">{herb.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                    {herb.scientificName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
