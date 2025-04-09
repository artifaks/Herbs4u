'use client';

import { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { allHerbs } from '@/data/allHerbs';

type SearchBarProps = {
  onSearch?: (query: string) => void;
  initialQuery?: string;
  placeholder?: string;
  showTypeSelector?: boolean;
};

export default function SearchBar({ 
  onSearch, 
  initialQuery = '', 
  placeholder = 'Search for herbs, symptoms, or remedies...', 
  showTypeSelector = true 
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchType, setSearchType] = useState('herb'); // herb, symptom, category
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const suggestionRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  // Common symptoms and conditions for autocomplete
  const commonSymptoms = [
    'Anxiety', 'Stress', 'Insomnia', 'Headache', 'Migraine', 'Inflammation',
    'Digestive Issues', 'Nausea', 'Joint Pain', 'Fatigue', 'Cold', 'Flu',
    'Allergies', 'Skin Irritation', 'Depression', 'Menstrual Cramps', 'Cough',
    'Sore Throat', 'Immune Support', 'Detoxification', 'Liver Support'
  ];
  
  // Common herb categories
  const herbCategories = [
    'Adaptogen', 'Nervine', 'Digestive', 'Immune Support', 'Anti-inflammatory',
    'Antioxidant', 'Women\'s Health', 'Men\'s Health', 'Sleep Support', 'Energy',
    'Respiratory', 'Heart Health', 'Brain Health', 'Skin Health', 'Liver Support'
  ];

  useEffect(() => {
    if (initialQuery !== searchQuery) {
      setSearchQuery(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery);
      } else {
        router.push(`/search?q=${encodeURIComponent(searchQuery)}&type=${searchType}`);
      }
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node) && 
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getSuggestions = (query: string, type: string) => {
    if (!query || query.length < 2) {
      setSuggestions([]);
      return;
    }
    
    setLoading(true);
    const lowerQuery = query.toLowerCase();
    let results: string[] = [];
    
    switch (type) {
      case 'herb':
        // Get herb name suggestions from allHerbs
        results = allHerbs
          .filter(herb => herb.name.toLowerCase().includes(lowerQuery))
          .map(herb => herb.name)
          .slice(0, 7); // Limit to 7 suggestions
        break;
      
      case 'symptom':
        // Filter common symptoms
        results = commonSymptoms
          .filter(symptom => symptom.toLowerCase().includes(lowerQuery))
          .slice(0, 7);
        break;
      
      case 'category':
        // Filter herb categories
        results = herbCategories
          .filter(category => category.toLowerCase().includes(lowerQuery))
          .slice(0, 7);
        break;
    }
    
    setSuggestions(results);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    
    // Get suggestions based on input
    getSuggestions(newQuery, searchType);
    setShowSuggestions(true);
    
    // If onSearch is provided, call it on each keystroke after a small delay
    if (onSearch) {
      const delayDebounceFn = setTimeout(() => {
        onSearch(newQuery);
      }, 300);
      
      return () => clearTimeout(delayDebounceFn);
    }
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    
    if (onSearch) {
      onSearch(suggestion);
    } else {
      router.push(`/search?q=${encodeURIComponent(suggestion)}&type=${searchType}`);
    }
  };
  
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    setSearchType(newType);
    getSuggestions(searchQuery, newType);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden shadow-lg">
        <div className="flex-grow relative">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(searchQuery.length >= 2)}
            placeholder={placeholder}
            className="w-full py-3 px-4 pr-10 text-gray-700 dark:text-white dark:bg-slate-700 focus:outline-none"
            aria-autocomplete="list"
            aria-controls="search-suggestions"
            aria-expanded={showSuggestions}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-gray-500 hover:text-primary-600"
          >
            <FaSearch />
          </button>
          
          {/* Autocomplete suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div 
              ref={suggestionRef}
              id="search-suggestions"
              className="absolute z-10 left-0 right-0 mt-1 bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              role="listbox"
            >
              {suggestions.map((suggestion, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer text-gray-800 dark:text-gray-200 flex items-center"
                  onClick={() => handleSuggestionClick(suggestion)}
                  role="option"
                  aria-selected={false}
                >
                  <FaSearch className="text-gray-400 mr-2 text-sm" />
                  <span>{suggestion}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* Show loading indicator or no results message */}
          {showSuggestions && searchQuery.length >= 2 && suggestions.length === 0 && !loading && (
            <div 
              ref={suggestionRef}
              className="absolute z-10 left-0 right-0 mt-1 bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="px-4 py-2 text-gray-500 dark:text-gray-400">
                No suggestions found
              </div>
            </div>
          )}
        </div>
        {showTypeSelector && (
          <div className="flex">
            <select
              value={searchType}
              onChange={handleTypeChange}
              className="py-3 px-4 bg-gray-100 dark:bg-slate-600 text-gray-700 dark:text-white focus:outline-none border-l border-gray-200 dark:border-gray-700"
            >
              <option value="herb">Herb Name</option>
              <option value="symptom">Symptom</option>
              <option value="category">Category</option>
            </select>
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 font-medium"
            >
              Search
            </button>
          </div>
        )}
        {!showTypeSelector && (
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 font-medium"
          >
            Search
          </button>
        )}
      </div>
    </form>
  );
}
