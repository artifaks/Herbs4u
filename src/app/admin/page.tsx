'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPlus, FaLeaf, FaBook, FaDatabase, FaStore, FaUsers, FaChartLine } from 'react-icons/fa';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';

type Stats = {
  herbCount: number;
  categoryCount: number;
  ebookCount: number;
  userCount: number;
  purchaseCount: number;
};

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const [stats, setStats] = useState<Stats>({
    herbCount: 0,
    categoryCount: 0,
    ebookCount: 0,
    userCount: 0,
    purchaseCount: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return;
      
      setLoading(true);
      try {
        // Fetch herb count
        const { count: herbCount, error: herbError } = await supabase
          .from('herbs')
          .select('*', { count: 'exact', head: true });
        
        // Fetch category count
        const { count: categoryCount, error: categoryError } = await supabase
          .from('categories')
          .select('*', { count: 'exact', head: true });
        
        // Fetch ebook count
        const { count: ebookCount, error: ebookError } = await supabase
          .from('ebooks')
          .select('*', { count: 'exact', head: true });
        
        // Fetch user count (this might require admin privileges)
        let userCount = 0;
        let purchaseCount = 0;
        
        try {
          const { count: usersCount, error: usersError } = await supabase
            .from('user_subscriptions')
            .select('*', { count: 'exact', head: true });
          
          if (!usersError) userCount = usersCount || 0;
          
          const { count: purchasesCount, error: purchasesError } = await supabase
            .from('user_purchases')
            .select('*', { count: 'exact', head: true });
          
          if (!purchasesError) purchaseCount = purchasesCount || 0;
        } catch (error) {
          console.log('Error fetching user stats:', error);
        }
        
        setStats({
          herbCount: herbCount || 0,
          categoryCount: categoryCount || 0,
          ebookCount: ebookCount || 0,
          userCount,
          purchaseCount,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading && user) {
      fetchStats();
    }
  }, [user, authLoading]);

  if (authLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-t-4 border-primary-600 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You need to be logged in to access the admin dashboard.
          </p>
          <Link href="/login" className="btn-primary">
            Log In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-6">Admin Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex items-center">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
            <FaLeaf className="text-primary-600 dark:text-primary-400 text-xl" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Herbs</p>
            <p className="text-2xl font-bold">{loading ? '...' : stats.herbCount}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex items-center">
          <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mr-4">
            <FaDatabase className="text-secondary-600 dark:text-secondary-400 text-xl" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Categories</p>
            <p className="text-2xl font-bold">{loading ? '...' : stats.categoryCount}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex items-center">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
            <FaBook className="text-green-600 dark:text-green-400 text-xl" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">eBooks</p>
            <p className="text-2xl font-bold">{loading ? '...' : stats.ebookCount}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex items-center">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
            <FaUsers className="text-purple-600 dark:text-purple-400 text-xl" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Subscribers</p>
            <p className="text-2xl font-bold">{loading ? '...' : stats.userCount}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex items-center">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
            <FaStore className="text-blue-600 dark:text-blue-400 text-xl" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Purchases</p>
            <p className="text-2xl font-bold">{loading ? '...' : stats.purchaseCount}</p>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Link href="/admin/herbs/add" className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
              <FaPlus className="text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-lg font-bold">Add New Herb</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Add a new herb with detailed information, benefits, and cultural background.
          </p>
        </Link>
        
        <Link href="/admin/categories/add" className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mr-4">
              <FaPlus className="text-secondary-600 dark:text-secondary-400" />
            </div>
            <h3 className="text-lg font-bold">Add New Category</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Create a new herb category to organize your herbal remedies.
          </p>
        </Link>
        
        <Link href="/admin/ebooks/add" className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
              <FaPlus className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold">Add New eBook</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Upload a new eBook for sale or as premium content for subscribers.
          </p>
        </Link>
      </div>
      
      {/* Management Links */}
      <h2 className="text-xl font-bold mb-4">Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/admin/herbs" className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
              <FaLeaf className="text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-lg font-bold">Manage Herbs</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Edit, update, or delete existing herbs in the database.
          </p>
        </Link>
        
        <Link href="/admin/categories" className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mr-4">
              <FaDatabase className="text-secondary-600 dark:text-secondary-400" />
            </div>
            <h3 className="text-lg font-bold">Manage Categories</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Edit or delete herb categories and manage their relationships.
          </p>
        </Link>
        
        <Link href="/admin/ebooks" className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
              <FaBook className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold">Manage eBooks</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage your eBook catalog, update prices, or change availability.
          </p>
        </Link>
        
        <Link href="/admin/users" className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
              <FaUsers className="text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-bold">Manage Users</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            View and manage user accounts and subscription status.
          </p>
        </Link>
        
        <Link href="/admin/sales" className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
              <FaStore className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-bold">Sales & Purchases</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            View purchase history and manage eBook sales.
          </p>
        </Link>
        
        <Link href="/admin/analytics" className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mr-4">
              <FaChartLine className="text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg font-bold">Analytics</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            View site analytics, popular herbs, and subscription metrics.
          </p>
        </Link>
      </div>
    </div>
  );
}
