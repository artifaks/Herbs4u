'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function CheckoutSuccessPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [purchaseType, setPurchaseType] = useState<'subscription' | 'ebook' | null>(null);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!sessionId) {
      router.push('/');
      return;
    }

    const verifyPurchase = async () => {
      try {
        const response = await fetch(`/api/verify-purchase?session_id=${sessionId}`);
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to verify purchase');
        }
        
        setPurchaseType(data.purchaseType);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || 'An error occurred while verifying your purchase');
        setLoading(false);
      }
    };

    verifyPurchase();
  }, [sessionId, router]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-primary-600 border-solid rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">Processing your purchase...</h2>
          <p className="text-gray-600 dark:text-gray-300">Please wait while we confirm your payment.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-5xl mb-4">
            <span className="material-icons">error</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
          <Link href="/contact" className="btn-primary">
            Contact Support
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center">
        <div className="text-green-500 text-6xl mb-6">
          <FaCheckCircle className="mx-auto" />
        </div>
        
        <h1 className="text-3xl font-serif font-bold mb-4">Thank You for Your Purchase!</h1>
        
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          {purchaseType === 'subscription' 
            ? 'Your premium subscription has been activated successfully.' 
            : 'Your eBook purchase was successful.'}
        </p>
        
        <div className="space-y-6">
          {purchaseType === 'subscription' && (
            <div>
              <h2 className="text-xl font-bold mb-2">What's Next?</h2>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Explore our premium herb guides and protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Download your free monthly eBooks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Create custom herb stacks for your personal needs</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/account" className="btn-primary flex items-center justify-center gap-2">
                  Go to My Account <FaArrowRight />
                </Link>
                <Link href="/herbs" className="btn-outline flex items-center justify-center gap-2">
                  Explore Herbs
                </Link>
              </div>
            </div>
          )}
          
          {purchaseType === 'ebook' && (
            <div>
              <h2 className="text-xl font-bold mb-2">What's Next?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your eBook is now available in your library. You can download it anytime from your account.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/account/ebooks" className="btn-primary flex items-center justify-center gap-2">
                  View My eBooks <FaArrowRight />
                </Link>
                <Link href="/ebooks" className="btn-outline flex items-center justify-center gap-2">
                  Browse More eBooks
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
