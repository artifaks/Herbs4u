'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import HerbImage from '@/components/HerbImage';
import CategoryIcon from '@/components/CategoryIcon';
import { FaStar, FaSearch, FaFilter, FaBalanceScale, FaFlask } from 'react-icons/fa';
import CommonPreparations from '@/components/CommonPreparations';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import CompareSelector from '@/components/CompareSelector';
import HerbCompare from '@/components/HerbCompare';
import HerbPreparationModal from '@/components/HerbPreparationModal';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalHerbs, setTotalHerbs] = useState(0);
  const [selectedHerb, setSelectedHerb] = useState<HerbData | null>(null);
  const [isPreparationModalOpen, setIsPreparationModalOpen] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    async function fetchHerbs() {
      try {
        setLoading(true);
        // Build query params based on filters
        const params = new URLSearchParams();
        if (searchTerm) params.append('search', searchTerm);
        if (selectedCategories.length > 0) {
          selectedCategories.forEach(category => {
            params.append('categories', category);
          });
        }
        params.append('limit', String(itemsPerPage));
        params.append('page', String(currentPage));

        // Fetch herbs from our API
        const response = await fetch(`/api/herbs?${params.toString()}`);
        const data = await response.json();

        if (!data || !data.herbs || data.herbs.length === 0) {
          setHerbs([]);
          setTotalPages(1);
          setTotalHerbs(0);
        } else {
          setHerbs(data.herbs);
          setTotalPages(data.pagination?.totalPages || 1);
          setTotalHerbs(data.pagination?.totalItems || 0);
        }
      } catch (error) {
        console.error('Error fetching herbs:', error);
        setHerbs([]);
      } finally {
        setLoading(false);
      }
    }

    async function fetchCategories() {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        if (data && Array.isArray(data)) {
          setAllCategories(data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchHerbs();
    if (allCategories.length === 0) {
      fetchCategories();
    }
  }, [searchTerm, selectedCategories, currentPage, allCategories.length]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
    setCurrentPage(1); // Reset to first page on category change
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of results
    window.scrollTo({
      top: document.getElementById('herbs-results')?.offsetTop || 0,
      behavior: 'smooth',
    });
  };

  // Helper function to get color class for category tags
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Digestive': 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
      'Calming': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
      'Immune': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
      'Respiratory': 'bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300',
      'Anti-inflammatory': 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
      'Antioxidant': 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
      'Nervine': 'bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300',
      'Tonic': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300',
      'Liver Health': 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300',
      'Detoxification': 'bg-lime-100 dark:bg-lime-900/30 text-lime-800 dark:text-lime-300',
    };
    
    // Find exact or partial match
    const exactMatch = colors[category as keyof typeof colors];
    if (exactMatch) return exactMatch;
    
    const partialMatch = Object.keys(colors).find(key => 
      category.toLowerCase().includes(key.toLowerCase())
    );
    
    if (partialMatch) {
      return colors[partialMatch as keyof typeof colors];
    }
    
    // Default color if no match
    return 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-800 dark:text-white">
          Medicinal Herbs Directory
        </h1>
        <button
          onClick={() => setShowCompareSelector(true)}
          className="flex items-center gap-2 btn-secondary"
        >
          <FaBalanceScale /> Compare Herbs
        </button>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <SearchBar onSearch={handleSearch} />
          </div>
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
          >
            {filtersOpen ? (
              <span>Hide Filters</span>
            ) : (
              <span>Show Filters <FaFilter /></span>
            )}
          </button>
        </div>
      </div>

      <div id="herbs-results" className="flex flex-col md:flex-row gap-6">
        {/* Filters - Sidebar */}
        <div 
          id="category-filters"
          className={`md:w-1/4 ${filtersOpen ? 'block' : 'hidden md:block'} transition-all duration-300 ease-in-out`}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 sticky top-20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Categories</h2>
              {selectedCategories.length > 0 && (
                <button 
                  onClick={() => {
                    setSelectedCategories([]);
                    setCurrentPage(1);
                  }}
                  className="text-sm text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Clear All
                </button>
              )}
            </div>
            <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-2">
              {allCategories.map((category) => (
                <div key={category} className="flex items-center hover:bg-gray-50 dark:hover:bg-slate-700 p-1 rounded-md transition-colors">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(selectedCategories.includes(category) ? selectedCategories.filter((c) => c !== category) : [...selectedCategories, category])}
                    className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`category-${category}`} className="text-gray-700 dark:text-gray-300 flex items-center">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">
                      <CategoryIcon category={category} size={16} />
                    </span>
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Herbs Grid */}
        <div className="md:w-3/4 min-h-[50vh]">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {herbs.map((herb) => (
                <div key={herb.id} className="flex flex-col h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
                  <div className="relative h-48 overflow-hidden">
                    <HerbImage
                      src={herb.imageUrl}
                      alt={herb.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{herb.name}</h3>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{herb.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                      {herb.description}
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {herb.categories.slice(0, 3).map((category, idx) => (
                          <span 
                            key={idx} 
                            className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(category)}`}
                          >
                            {category}
                          </span>
                        ))}
                        {herb.categories.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                            +{herb.categories.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <Link 
                          href={`/herbs/${herb.slug}`} 
                          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
                        >
                          View Details
                        </Link>
                        {herb.preparations && herb.preparations.length > 0 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedHerb(herb);
                                setIsPreparationModalOpen(true);
                              }}
                              className="flex items-center text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium"
                            >
                              <FaFlask className="mr-1" /> Preparation
                            </button>

                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center">
              <p className="text-lg mb-4">No herbs found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategories([]);
                  setCurrentPage(1);
                }}
                className="btn-outline"
              >
                Clear Filters
              </button>
            </div>
          )}
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <nav className="flex flex-wrap items-center justify-center gap-1" aria-label="Pagination">
                <button 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30'}`}
                  aria-label="Previous page"
                >
                  &laquo;
                </button>
                
                {/* Mobile pagination - simplified */}
                <div className="sm:hidden flex items-center gap-2">
                  <span className="text-gray-700 dark:text-gray-300">
                    Page {currentPage} of {totalPages}
                  </span>
                </div>
                
                {/* Desktop pagination - full */}
                <div className="hidden sm:flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    // Show first page, last page, current page, and pages around current
                    .filter(page => 
                      page === 1 || 
                      page === totalPages || 
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    )
                    .map((page, index, array) => {
                      // Add ellipsis where needed
                      const showEllipsisBefore = index > 0 && array[index - 1] !== page - 1;
                      const showEllipsisAfter = index < array.length - 1 && array[index + 1] !== page + 1;
                      
                      return (
                        <React.Fragment key={page}>
                          {showEllipsisBefore && (
                            <span className="px-3 py-1 text-gray-500">...</span>
                          )}
                          
                          <button
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded ${currentPage === page ? 'bg-primary-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                            aria-current={currentPage === page ? 'page' : undefined}
                          >
                            {page}
                          </button>
                          
                          {showEllipsisAfter && (
                            <span className="px-3 py-1 text-gray-500">...</span>
                          )}
                        </React.Fragment>
                      );
                    })}
                </div>
                
                <button 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30'}`}
                  aria-label="Next page"
                >
                  &raquo;
                </button>
              </nav>
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

      {/* Preparation Modal */}
      {selectedHerb && (
        <HerbPreparationModal
          isOpen={isPreparationModalOpen}
          onClose={() => setIsPreparationModalOpen(false)}
          herbName={selectedHerb.name}
          preparations={selectedHerb.preparations || []}
        />
      )}
    </div>
  );
}
