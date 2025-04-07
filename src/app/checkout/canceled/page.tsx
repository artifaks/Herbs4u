'use client';

import Link from 'next/link';
import { FaTimesCircle, FaArrowLeft } from 'react-icons/fa';

export default function CheckoutCanceledPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center">
        <div className="text-red-500 text-6xl mb-6">
          <FaTimesCircle className="mx-auto" />
        </div>
        
        <h1 className="text-3xl font-serif font-bold mb-4">Purchase Canceled</h1>
        
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          Your purchase has been canceled. No charges have been made to your account.
        </p>
        
        <div className="space-y-6">
          <h2 className="text-xl font-bold mb-2">What would you like to do next?</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-primary flex items-center justify-center gap-2">
              <FaArrowLeft /> Return to Pricing
            </Link>
            <Link href="/contact" className="btn-outline flex items-center justify-center gap-2">
              Contact Support
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-2">Not sure about subscribing?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can still explore our free content and learn about herbal remedies.
            </p>
            <Link href="/herbs" className="text-primary-600 dark:text-primary-400 hover:underline">
              Browse our herb collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
