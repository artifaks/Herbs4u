'use client';

import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    
    // If onSearch is provided, call it on each keystroke after a small delay
    if (onSearch) {
      const delayDebounceFn = setTimeout(() => {
        onSearch(newQuery);
      }, 300);
      
      return () => clearTimeout(delayDebounceFn);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden shadow-lg">
        <div className="flex-grow relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full py-3 px-4 pr-10 text-gray-700 dark:text-white dark:bg-slate-700 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-gray-500 hover:text-primary-600"
          >
            <FaSearch />
          </button>
        </div>
        {showTypeSelector && (
          <div className="flex">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
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
