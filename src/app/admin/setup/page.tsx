'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SetupPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success?: boolean;
    message?: string;
    error?: string;
  } | null>(null);

  const runDatabaseSetup = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/setup-database');
      const data = await response.json();
      setResult(data);
    } catch (error: any) {
      setResult({
        success: false,
        message: 'Failed to run database setup',
        error: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-serif font-bold mb-6">Database Setup</h1>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Setup Instructions</h2>
          
          <ol className="list-decimal pl-5 space-y-4 mb-6">
            <li>
              <p className="font-medium">Create a Supabase Project</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Go to <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 underline">supabase.com</a> and create a new project.
              </p>
            </li>
            
            <li>
              <p className="font-medium">Get Your API Credentials</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                In your Supabase project dashboard, go to Project Settings → API to find your Project URL and anon/public key.
              </p>
            </li>
            
            <li>
              <p className="font-medium">Update Your Environment Variables</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Open the <code className="bg-gray-100 dark:bg-slate-700 px-1 py-0.5 rounded">.env.local</code> file in your project root and update the following variables:
              </p>
              <div className="bg-gray-100 dark:bg-slate-700 p-3 rounded mt-2 font-mono text-sm">
                <div>NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co</div>
                <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key</div>
              </div>
            </li>
            
            <li>
              <p className="font-medium">Restart Your Development Server</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                After updating the environment variables, restart your Next.js development server for the changes to take effect.
              </p>
            </li>
            
            <li>
              <p className="font-medium">Run Database Setup</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Click the button below to create the necessary database tables and seed them with initial data.
              </p>
            </li>
          </ol>
          
          <button
            onClick={runDatabaseSetup}
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? 'Setting Up Database...' : 'Run Database Setup'}
          </button>
        </div>
        
        {result && (
          <div className={`rounded-lg p-4 mb-8 ${
            result.success 
              ? 'bg-green-100 dark:bg-green-900/20 border-l-4 border-green-500' 
              : 'bg-red-100 dark:bg-red-900/20 border-l-4 border-red-500'
          }`}>
            <h3 className={`font-bold ${
              result.success ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
            }`}>
              {result.success ? 'Setup Successful' : 'Setup Failed'}
            </h3>
            <p className="mt-1">{result.message}</p>
            {result.error && (
              <div className="mt-2">
                <p className="font-medium">Error Details:</p>
                <p className="text-sm font-mono bg-gray-100 dark:bg-slate-700 p-2 rounded mt-1">
                  {result.error}
                </p>
              </div>
            )}
          </div>
        )}
        
        {result?.success && (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">What's Next?</h2>
            <p className="mb-4">
              Your database has been successfully set up! Here are some next steps:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                <span>Explore the herbs collection</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                <span>Set up Stripe for payments</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                <span>Add more herbs and categories</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/" className="btn-primary text-center">
                Go to Homepage
              </Link>
              <Link href="/herbs" className="btn-outline text-center">
                View Herbs
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
