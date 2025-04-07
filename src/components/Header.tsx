'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaUserCircle, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400">
              Sacred Herb
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/herbs" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              Herbs
            </Link>
            <Link href="/categories" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              Categories
            </Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              Blog
            </Link>
            <Link href="/ebooks" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              eBooks
            </Link>
            <Link href="/pricing" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              Pricing
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              <FaSearch className="w-5 h-5" />
            </button>
            <Link href="/cart" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              <FaShoppingCart className="w-5 h-5" />
            </Link>
            <Link href="/account" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              <FaUserCircle className="w-5 h-5" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/herbs" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Herbs
              </Link>
              <Link 
                href="/categories" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/ebooks" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                eBooks
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
