'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '@/lib/auth';

type Herb = {
  id: number;
  name: string;
  slug: string;
  scientific_name: string;
  description: string;
  image_url: string;
  created_at: string;
};

export default function ManageHerbsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [herbs, setHerbs] = useState<Herb[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHerbs = async () => {
      if (!user) return;
      
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('herbs')
          .select('id, name, slug, scientific_name, description, image_url, created_at')
          .order('name');
        
        if (error) throw error;
        setHerbs(data || []);
      } catch (error: any) {
        console.error('Error fetching herbs:', error);
        setError(error.message || 'An error occurred while fetching herbs');
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading && user) {
      fetchHerbs();
    }
  }, [user, authLoading]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredHerbs = herbs.filter(herb => 
    herb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    herb.scientific_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    herb.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const confirmDelete = (id: number) => {
    setDeleteConfirm(id);
  };

  const cancelDelete = () => {
    setDeleteConfirm(null);
  };

  const deleteHerb = async (id: number) => {
    try {
      // First delete herb-category relationships
      const { error: relationError } = await supabase
        .from('herb_categories')
        .delete()
        .eq('herb_id', id);
      
      if (relationError) throw relationError;
      
      // Then delete the herb
      const { error: herbError } = await supabase
        .from('herbs')
        .delete()
        .eq('id', id);
      
      if (herbError) throw herbError;
      
      // Update the local state
      setHerbs(herbs.filter(herb => herb.id !== id));
      setDeleteConfirm(null);
    } catch (error: any) {
      console.error('Error deleting herb:', error);
      setError(error.message || 'An error occurred while deleting the herb');
    }
  };

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
            You need to be logged in to access the herb management page.
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
      <Link href="/admin" className="text-primary-600 dark:text-primary-400 inline-flex items-center mb-6 hover:underline">
        <FaArrowLeft className="mr-2" /> Back to Admin Dashboard
      </Link>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-serif font-bold">Manage Herbs</h1>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search herbs..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          </div>
          
          <Link href="/admin/herbs/add" className="btn-primary inline-flex items-center">
            <FaPlus className="mr-2" /> Add New Herb
          </Link>
        </div>
      </div>
      
      {error && (
        <div className="bg-red-100 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 mb-6" role="alert">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}
      
      {loading ? (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
                <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {filteredHerbs.length > 0 ? (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-slate-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Herb
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Scientific Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredHerbs.map((herb) => (
                    <tr key={herb.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 relative">
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            <Image
                              src={herb.image_url || '/images/placeholder.jpg'}
                              alt={herb.name}
                              fill
                              className="rounded-full object-cover"
                              sizes="40px"
                              onError={(e) => {
                                // Fallback image on error
                                const target = e.target as HTMLImageElement;
                                target.src = '/images/placeholder.jpg';
                              }}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {herb.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {herb.slug}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-white italic">
                          {herb.scientific_name || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-white line-clamp-2">
                          {herb.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {deleteConfirm === herb.id ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-red-600 dark:text-red-400">Confirm?</span>
                            <button
                              onClick={() => deleteHerb(herb.id)}
                              className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                            >
                              Yes
                            </button>
                            <button
                              onClick={cancelDelete}
                              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                            >
                              No
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-4">
                            <Link
                              href={`/admin/herbs/edit/${herb.id}`}
                              className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
                              title="Edit herb"
                            >
                              <FaEdit />
                            </Link>
                            <button
                              onClick={() => confirmDelete(herb.id)}
                              className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                              title="Delete herb"
                            >
                              <FaTrash />
                            </button>
                            <Link
                              href={`/herbs/${herb.slug}`}
                              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                              title="View herb page"
                              target="_blank"
                            >
                              View
                            </Link>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center">
              <p className="text-lg mb-4">
                {searchQuery 
                  ? `No herbs found matching "${searchQuery}".` 
                  : 'No herbs found in the database yet.'}
              </p>
              {searchQuery ? (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="btn-outline"
                >
                  Clear Search
                </button>
              ) : (
                <Link href="/admin/herbs/add" className="btn-primary inline-flex items-center">
                  <FaPlus className="mr-2" /> Add Your First Herb
                </Link>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
