'use client';

import { useState, useEffect } from 'react';
import { getEbookPriceId } from '@/lib/stripe-products';
import Image from 'next/image';
import Link from 'next/link';
import { FaLock, FaShoppingCart, FaDownload, FaCheck } from 'react-icons/fa';
import { useAuth } from '@/lib/auth';
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

interface EbookCardProps {
  ebook: Ebook;
  isLoggedIn: boolean;
}

export default function EbookCard({ ebook, isLoggedIn }: EbookCardProps) {
  const [isPurchased, setIsPurchased] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { user } = useAuth();

  // Check if the user has purchased this ebook
  const checkPurchaseStatus = async () => {
    if (!user) return false;
    
    setIsChecking(true);
    try {
      // In development mode with mock Supabase, we can simulate purchases
      // This helps avoid 404 errors when Supabase is not available
      if (process.env.NODE_ENV === 'development' && ebook.price === 0) {
        // Free ebooks are automatically considered purchased
        setIsPurchased(true);
        return true;
      }
      
      try {
        // Check purchase status in Supabase
        const { data, error } = await supabase
          .from('user_purchases')
          .select('*')
          .eq('user_id', user.id)
          .eq('ebook_id', ebook.id)
          .maybeSingle();
        
        if (error) {
          // Handle error silently in development
          if (process.env.NODE_ENV === 'development') {
            console.warn('Development mode: Simulating no purchase for paid ebook');
            setIsPurchased(false);
            return false;
          }
          
          console.error('Error checking purchase status:', error);
          return false;
        }
        
        const hasPurchased = !!data;
        setIsPurchased(hasPurchased);
        return hasPurchased;
      } catch (error) {
        // In development, we'll simulate no purchase
        if (process.env.NODE_ENV === 'development') {
          console.warn('Development mode: Simulating no purchase due to error');
          setIsPurchased(false);
          return false;
        }
        throw error;
      }
    } catch (error) {
      console.error('Error in checkPurchaseStatus:', error);
      return false;
    } finally {
      setIsChecking(false);
    }
  };

  // Handle checkout with Stripe
  const handleCheckout = async () => {
    setIsAddingToCart(true);
    
    try {
      if (!user) {
        console.error('User not logged in');
        return;
      }
      
      // In development mode, we can simulate a successful checkout
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: Simulating Stripe checkout');
        
        // Simulate a brief loading period
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Make sure we have a valid ebook slug
        const safeSlug = ebook.slug || `ebook-${ebook.id}`;
        console.log('Development mode: Using ebook slug for redirect:', safeSlug);
        
        // Redirect to success page with a mock session ID and ebook slug
        window.location.href = `/ebooks/success?session_id=mock_session_${Date.now()}&mock=true&ebook=${safeSlug}`;
        return;
      }
      
      // Create a Stripe checkout session
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: getEbookPriceId(ebook.id), // Get the actual Stripe price ID from our utility function
          mode: 'payment',
          productId: ebook.id.toString(),
          userId: user.id,
          userEmail: user.email,
        }),
      });
      
      const { url, error } = await response.json();
      
      if (error) {
        console.error('Error creating checkout session:', error);
        alert('There was an error processing your request. Please try again.');
        setIsAddingToCart(false);
        return;
      }
      
      // Redirect to Stripe checkout
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error in checkout process:', error);
      alert('There was an error processing your request. Please try again.');
      setIsAddingToCart(false);
    }
  };

  // Handle download
  const handleDownload = () => {
    // In a real app, this would initiate a download or redirect to the file
    window.open(ebook.file_url, '_blank');
  };

  // Check purchase status when component mounts
  useEffect(() => {
    if (isLoggedIn) {
      checkPurchaseStatus();
    }
  }, [isLoggedIn]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={ebook.cover_image_url || '/images/ebooks/placeholder.jpg'}
          alt={ebook.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {ebook.is_premium && (
          <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <FaLock className="mr-1" size={10} /> Premium
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{ebook.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{ebook.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">
            {ebook.price > 0 ? `$${ebook.price.toFixed(2)}` : 'Free'}
          </span>
          
          {isLoggedIn ? (
            isPurchased ? (
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FaDownload /> Download
              </button>
            ) : isChecking ? (
              <button
                disabled
                className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                Checking...
              </button>
            ) : (
              <button
                onClick={handleCheckout}
                disabled={isAddingToCart}
                className={`flex items-center gap-2 ${
                  isAddingToCart 
                    ? 'bg-gray-400' 
                    : 'bg-primary-600 hover:bg-primary-700'
                } text-white px-4 py-2 rounded-lg transition-colors`}
              >
                {isAddingToCart ? (
                  <>Processing...</>
                ) : (
                  <>
                    <FaShoppingCart /> Purchase
                  </>
                )}
              </button>
            )
          ) : (
            <Link
              href={`/login?redirect=/ebooks&intent=purchase&item=${ebook.slug}`}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <FaShoppingCart /> Purchase
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
