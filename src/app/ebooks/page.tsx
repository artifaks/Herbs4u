'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import EbookCard from '@/components/EbookCard';
import { supabase } from '@/lib/supabase';

type Ebook = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  file_url: string;
  cover_image_url: string;
  is_premium: boolean;
};

export default function EbooksPage() {
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchEbooks() {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('ebooks')
          .select('*')
          .order('title');
        
        if (error) {
          console.error('Error fetching ebooks:', error);
          return;
        }
        
        if (data) {
          setEbooks(data);
        }
      } catch (error) {
        console.error('Error in fetchEbooks:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEbooks();
  }, []);

  // Fallback to local data if Supabase fetch fails or returns empty
  useEffect(() => {
    if (!loading && ebooks.length === 0) {
      // Fallback ebook data
      const fallbackEbooks = [
        {
          id: 1,
          title: 'Beginner\'s Guide to Herbal Medicine',
          slug: 'beginners-guide',
          description: 'A comprehensive introduction to using herbs safely and effectively.',
          price: 9.99,
          file_url: '/ebooks/beginners-guide.pdf',
          cover_image_url: '/images/ebooks/beginners-guide.jpg',
          is_premium: false
        },
        {
          id: 2,
          title: 'Herbal Remedies for Stress & Anxiety',
          slug: 'stress-anxiety',
          description: 'Natural approaches to managing stress and promoting relaxation.',
          price: 12.99,
          file_url: '/ebooks/stress-anxiety.pdf',
          cover_image_url: '/images/ebooks/stress-anxiety.jpg',
          is_premium: false
        },
        {
          id: 3,
          title: 'Seasonal Immune Support',
          slug: 'immune-support',
          description: 'Strengthen your immune system naturally throughout the year.',
          price: 14.99,
          file_url: '/ebooks/immune-support.pdf',
          cover_image_url: '/images/ebooks/immune-support.jpg',
          is_premium: false
        },
        {
          id: 4,
          title: 'Advanced Herbal Protocols',
          slug: 'advanced-protocols',
          description: 'Expert-level herbal formulations for complex health concerns.',
          price: 19.99,
          file_url: '/ebooks/advanced-protocols.pdf',
          cover_image_url: '/images/ebooks/advanced-protocols.jpg',
          is_premium: true
        },
        {
          id: 5,
          title: 'Herbal Medicine for Women\'s Health',
          slug: 'womens-health',
          description: 'Natural remedies for women\'s health concerns throughout all life stages.',
          price: 14.99,
          file_url: '/ebooks/womens-health.pdf',
          cover_image_url: '/images/ebooks/womens-health.jpg',
          is_premium: false
        },
        {
          id: 6,
          title: 'Herbal First Aid',
          slug: 'herbal-first-aid',
          description: 'Essential herbal remedies for minor injuries and common ailments.',
          price: 9.99,
          file_url: '/ebooks/herbal-first-aid.pdf',
          cover_image_url: '/images/ebooks/herbal-first-aid.jpg',
          is_premium: false
        },
        {
          id: 7,
          title: 'Sacred Herbs: Spiritual & Ceremonial Uses',
          slug: 'sacred-herbs',
          description: 'Explore the rich tradition of herbs in spiritual and ceremonial practices.',
          price: 16.99,
          file_url: '/ebooks/sacred-herbs.pdf',
          cover_image_url: '/images/ebooks/sacred-herbs.jpg',
          is_premium: true
        }
      ];
      
      setEbooks(fallbackEbooks);
    }
  }, [loading, ebooks]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-6">Herbal eBooks</h1>
      
      <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
        Explore our collection of premium eBooks covering various aspects of herbal medicine. 
        From beginner guides to advanced protocols, find the knowledge you need to enhance your 
        herbal practice.
      </p>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((ebook) => (
            <EbookCard 
              key={ebook.id} 
              ebook={ebook} 
              isLoggedIn={!!user}
            />
          ))}
        </div>
      )}
    </div>
  );
}
