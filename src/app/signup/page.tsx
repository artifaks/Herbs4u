'use client';

import Auth from '@/components/Auth';

export default function SignupPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-serif font-bold text-center mb-8">Create Your Sacred Herb Account</h1>
        <Auth />
      </div>
    </div>
  );
}
