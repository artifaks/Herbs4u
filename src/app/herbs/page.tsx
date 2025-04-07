'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HerbImage from '@/components/HerbImage';
import { FaStar, FaSearch, FaFilter, FaBalanceScale } from 'react-icons/fa';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import CompareSelector from '@/components/CompareSelector';
import HerbCompare from '@/components/HerbCompare';
import { HerbData } from '@/types/herbs';

export default function HerbsPage() {
  const [herbs, setHerbs] = useState<HerbData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [showCompareSelector, setShowCompareSelector] = useState(false);
  const [showCompareView, setShowCompareView] = useState(false);
  const [herbsToCompare, setHerbsToCompare] = useState<string[]>([]);

  useEffect(() => {
    async function fetchHerbs() {
      try {
        // Build query params based on filters
        const params = new URLSearchParams();
        if (searchTerm) params.append('search', searchTerm);
        if (selectedCategories.length === 1) params.append('category', selectedCategories[0]);
        params.append('limit', '20'); // Set a reasonable limit for performance

        // Fetch herbs from our API
        const response = await fetch(`/api/herbs?${params.toString()}`);
        const data = await response.json();

        if (!data || !data.herbs || data.herbs.length === 0) {
          setHerbs([]);
        } else {
          setHerbs(data.herbs);

          // Extract all unique categories
          const categories = data.herbs.flatMap((herb: HerbData) => herb.categories || []);
          setAllCategories(Array.from(new Set(categories)));
        }
      } catch (error) {
        console.error('Error fetching herbs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchHerbs();
  }, [searchTerm, selectedCategories]);

  const handleSearchChange = (query: string) => {
    setSearchTerm(query);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-serif font-bold">Herbal Remedies</h1>
        <button
          onClick={() => setShowCompareSelector(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
        >
          <FaBalanceScale /> Compare Herbs
        </button>
      </div>

      <div className="mb-8">
        <SearchBar onSearch={handleSearchChange} />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Mobile Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center justify-between w-full bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md"
          >
            <span className="font-medium">Filter by Category</span>
            <FaSearch />
          </button>
        </div>

        {/* Filters - Sidebar */}
        <div className={`md:w-1/4 ${filtersOpen ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 sticky top-20">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <div className="space-y-2">
              {allCategories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(selectedCategories.includes(category) ? selectedCategories.filter((c) => c !== category) : [...selectedCategories, category])}
                    className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`category-${category}`} className="text-gray-700 dark:text-gray-300">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Herbs Grid */}
        <div className="md:w-3/4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
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
          ) : herbs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {herbs.map((herb) => (
                <Link key={herb.id} href={`/herbs/${herb.slug}`}>
                  <div className="herb-card h-full hover:translate-y-[-5px]">
                    <div className="relative h-48 w-full">
                      <HerbImage
                        src={herb.imageUrl || '/images/placeholder.jpg'}
                        alt={herb.name}
                        fill
                        className="object-cover rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-1">{herb.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{herb.description.substring(0, 100)}...</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {herb.categories.slice(0, 3).map((category, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                        {herb.categories.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                            +{herb.categories.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center">
                        <div className="flex mr-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(herb.rating) ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{herb.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center">
              <p className="text-lg mb-4">No herbs found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategories([]);
                }}
                className="btn-outline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Herb Comparison UI */}
      {showCompareSelector && (
        <CompareSelector
          onSelectHerbs={(selectedHerbs) => {
            setHerbsToCompare(selectedHerbs);
            setShowCompareSelector(false);
            setShowCompareView(true);
          }}
          onCancel={() => setShowCompareSelector(false)}
        />
      )}

      {showCompareView && herbsToCompare.length >= 2 && (
        <HerbCompare
          selectedHerbs={herbsToCompare}
          onClose={() => {
            setShowCompareView(false);
            setHerbsToCompare([]);
          }}
        />
      )}
    </div>
  );
}
