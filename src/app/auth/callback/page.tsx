'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const handleAuthCallback = async () => {
      const redirectTo = searchParams.get('redirectTo') || '/';
      const plan = searchParams.get('plan');
      
      // Get the auth code from the URL
      const code = searchParams.get('code');
      
      if (code) {
        // Exchange the auth code for a session
        await supabase.auth.exchangeCodeForSession(code);
        
        // Redirect based on parameters
        if (plan) {
          router.push(`/pricing?plan=${plan}`);
        } else {
          router.push(redirectTo);
        }
      } else {
        // If no code is present, redirect to home
        router.push('/');
      }
    };
    
    handleAuthCallback();
  }, [router, searchParams]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Completing authentication...</h1>
        <div className="w-16 h-16 border-t-4 border-primary-600 border-solid rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}
