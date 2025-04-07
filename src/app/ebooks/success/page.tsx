'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle, FaDownload, FaBookOpen } from 'react-icons/fa';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';

export default function EbookPurchaseSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [ebookDetails, setEbookDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const sessionId = searchParams.get('session_id');
  const ebookSlug = searchParams.get('ebook');
  const isMockCheckout = searchParams.get('mock') === 'true';

  useEffect(() => {
    const verifyPurchase = async () => {
      if (!user) {
        setError('You must be logged in to view this page');
        setLoading(false);
        return;
      }

      if (!sessionId && !ebookSlug) {
        setError('Missing purchase information');
        setLoading(false);
        return;
      }
      
      // Handle mock checkout in development mode
      if (isMockCheckout && process.env.NODE_ENV === 'development') {
        console.log('Development mode: Processing mock checkout');
        
        // Make sure we have a valid ebook slug
        const safeSlug = ebookSlug || 'mock-ebook';
        console.log('Development mode: Using ebook slug:', safeSlug);
        
        try {
          // Get ebook details by slug
          const { data, error } = await supabase
            .from('ebooks')
            .select('*')
            .eq('slug', safeSlug)
            .maybeSingle();
              
          if (error) {
            console.warn('Development mode: Error fetching ebook details, using mock data');
            // Use mock ebook data
            setEbookDetails({
              id: 1,
              title: 'Mock Ebook',
              slug: safeSlug,
              description: 'This is a mock ebook for development purposes',
              price: 9.99,
              file_url: '/ebooks/mock.pdf',
              cover_image_url: '/images/ebooks/placeholder.jpg',
              is_premium: false
            });
          } else if (data) {
            setEbookDetails(data);
            console.log('Development mode: Successfully loaded ebook data');
          } else {
            // Use mock ebook data if no data found
            setEbookDetails({
              id: 1,
              title: 'Mock Ebook',
              slug: safeSlug,
              description: 'This is a mock ebook for development purposes',
              price: 9.99,
              file_url: '/ebooks/mock.pdf',
              cover_image_url: '/images/ebooks/placeholder.jpg',
              is_premium: false
            });
          }
        } catch (err) {
          console.warn('Development mode: Error in mock checkout, using fallback data');
          // Use mock ebook data
          setEbookDetails({
            id: 1,
            title: 'Mock Ebook',
            slug: safeSlug,
            description: 'This is a mock ebook for development purposes',
            price: 9.99,
            file_url: '/ebooks/mock.pdf',
            cover_image_url: '/images/ebooks/placeholder.jpg',
            is_premium: false
          });
        }
        
        setLoading(false);
        return;
      }

      try {
        // If we have a session ID, verify the purchase with Stripe
        if (sessionId) {
          // Verify the purchase with Stripe
          const response = await fetch(`/api/verify-purchase?session_id=${sessionId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          const result = await response.json();
          
          if (!result.success) {
            setError(result.message || 'Failed to verify purchase');
            setLoading(false);
            return;
          }
          
          // If we have a product ID in the result, use it to get the ebook
          if (result.productId) {
            const { data, error } = await supabase
              .from('ebooks')
              .select('*')
              .eq('id', result.productId)
              .maybeSingle();
              
            if (error) {
              console.error('Error fetching ebook details:', error);
              setError('Could not find the purchased ebook');
              setLoading(false);
              return;
            }
            
            if (data) {
              setEbookDetails(data);
            }
          }
        }
        // Get ebook details by slug if no session ID
        else if (ebookSlug) {
          const { data, error } = await supabase
            .from('ebooks')
            .select('*')
            .eq('slug', ebookSlug)
            .maybeSingle();

          if (error) {
            console.error('Error fetching ebook details:', error);
            setError('Could not find the purchased ebook');
            setLoading(false);
            return;
          }

          if (data) {
            setEbookDetails(data);
            
            // Check if the purchase exists
            const { data: existingPurchase, error: checkError } = await supabase
              .from('user_purchases')
              .select('*')
              .eq('user_id', user?.id || '')
              .eq('ebook_id', data.id)
              .maybeSingle();

            if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "no rows returned"
              console.error('Error checking existing purchase:', checkError);
            }

            // Record the purchase if it doesn't exist
            if (!existingPurchase) {
              const { error: insertError } = await supabase
                .from('user_purchases')
                .insert({
                  user_id: user?.id || '',
                  ebook_id: data.id,
                  purchase_date: new Date().toISOString(),
                  amount: data.price,
                  stripe_payment_id: sessionId
                });

              if (insertError) {
                console.error('Error recording purchase:', insertError);
              }
            }
          }
        }

        setLoading(false);
      } catch (err) {
        console.error('Error in verifyPurchase:', err);
        setError('An error occurred while verifying your purchase');
        setLoading(false);
      }
    };

    // Call the async function
    verifyPurchase();
  }, [user, sessionId, ebookSlug, isMockCheckout]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500 mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Verifying your purchase...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6 w-full max-w-2xl">
          <p className="text-red-700 dark:text-red-300">{error}</p>
        </div>
        <Link 
          href="/ebooks" 
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Return to eBooks
        </Link>
      </div>
    );
  }

  if (!ebookDetails) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6 w-full max-w-2xl">
          <p className="text-yellow-700 dark:text-yellow-300">No ebook details found. Please try again.</p>
        </div>
        <Link 
          href="/ebooks" 
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Return to eBooks
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-4">
              <FaCheckCircle className="text-green-600 dark:text-green-400 w-12 h-12" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center mb-6">Thank You for Your Purchase!</h1>
          
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <div className="relative w-40 h-56 flex-shrink-0">
              <img 
                src={ebookDetails.cover_image_url || '/images/ebooks/placeholder.jpg'} 
                alt={ebookDetails.title} 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2">{ebookDetails.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{ebookDetails.description}</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">Price:</span>
                <span>${ebookDetails.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-slate-700/30 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">What's Next?</h3>
            <p className="mb-4">Your purchase has been successfully processed and the ebook is now available for download.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={ebookDetails.file_url} 
                download
                className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <FaDownload /> Download eBook
              </a>
              <Link 
                href="/ebooks" 
                className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg transition-colors"
              >
                <FaBookOpen /> Browse More eBooks
              </Link>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            <p>If you have any questions or need assistance, please contact our support team.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
