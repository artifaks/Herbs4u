'use client';

import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaSearch } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="text-amber-500 mb-6">
        <FaExclamationTriangle size={64} />
      </div>
      
      <h1 className="text-4xl font-bold mb-4 text-center">Page Not Found</h1>
      
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-lg mb-8">
        We couldn't find the page you're looking for. It might have been moved, 
        deleted, or perhaps never existed in the first place.
      </p>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Looking for something specific?</h2>
        
        <div className="flex flex-col gap-4">
          <Link 
            href="/"
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg transition-colors"
          >
            <FaHome /> Return to Home
          </Link>
          
          <Link 
            href="/herbs"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors"
          >
            <FaSearch /> Browse Herbs
          </Link>
          
          <Link 
            href="/ebooks"
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg transition-colors"
          >
            <FaSearch /> Explore eBooks
          </Link>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
        <p>If you believe this is an error, please contact our support team.</p>
      </div>
    </div>
  );
}
