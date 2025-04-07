import { createClient } from '@supabase/supabase-js';

// Create a mock Supabase client for development if environment variables are not set
let supabaseInstance: ReturnType<typeof createClient> | null = null;

// Only initialize the client if we're in a browser environment and have valid credentials
if (typeof window !== 'undefined') {
  try {
    // Check if we have valid environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    // Only create client if both URL and key are provided
    if (supabaseUrl && supabaseAnonKey) {
      supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
    } else {
      console.warn('Supabase URL or anon key not provided. Using mock client.');
    }
  } catch (error) {
    console.error('Error initializing Supabase client:', error);
  }
}

// Create a more complete mock implementation for development/testing
const mockSupabase = {
  auth: {
    getSession: () => Promise.resolve({ data: { session: { user: { id: '24fbe759-5ef8-488b-82cb-5ea8ea6a66f5', email: 'test@example.com' } } } }),
    onAuthStateChange: (callback: any) => ({
      data: { subscription: { unsubscribe: () => {} } },
    }),
    signInWithPassword: () => Promise.resolve({
      data: { user: { id: '24fbe759-5ef8-488b-82cb-5ea8ea6a66f5', email: 'test@example.com' } },
      error: null
    }),
    signUp: () => Promise.resolve({ data: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    getUser: () => Promise.resolve({
      data: { user: { id: '24fbe759-5ef8-488b-82cb-5ea8ea6a66f5', email: 'test@example.com' } },
      error: null
    }),
  },
  from: (table: string) => ({
    select: (columns: string) => ({
      eq: (column: string, value: any) => ({
        eq: (column2: string, value2: any) => ({
          single: () => Promise.resolve({ data: null, error: null }),
          maybeSingle: () => Promise.resolve({ data: null, error: null }),
        }),
        single: () => Promise.resolve({ data: null, error: null }),
        maybeSingle: () => Promise.resolve({ data: null, error: null }),
      }),
      single: () => Promise.resolve({ data: null, error: null }),
      maybeSingle: () => Promise.resolve({ data: null, error: null }),
    }),
    insert: (data: any) => Promise.resolve({ data, error: null }),
    upsert: (data: any) => Promise.resolve({ data, error: null }),
  }),
  rpc: () => Promise.resolve({ data: null, error: null }),
  storage: {
    from: (bucket: string) => ({
      getPublicUrl: (path: string) => ({
        data: { publicUrl: `/images/${path}` },
      }),
    }),
  },
} as any;

export const supabase = supabaseInstance || mockSupabase;

export type Database = {
  public: {
    Tables: {
      herbs: {
        Row: {
          id: number;
          name: string;
          scientific_name: string;
          slug: string;
          description: string;
          benefits: string[];
          dosage: {
            powder?: string;
            capsule?: string;
            tincture?: string;
            tea?: string;
          };
          warnings: string[];
          history: string;
          cultural_background: string;
          preparation: string;
          image_url: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          scientific_name?: string;
          slug: string;
          description: string;
          benefits?: string[];
          dosage?: {
            powder?: string;
            capsule?: string;
            tincture?: string;
            tea?: string;
          };
          warnings?: string[];
          history?: string;
          cultural_background?: string;
          preparation?: string;
          image_url?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          scientific_name?: string;
          slug?: string;
          description?: string;
          benefits?: string[];
          dosage?: {
            powder?: string;
            capsule?: string;
            tincture?: string;
            tea?: string;
          };
          warnings?: string[];
          history?: string;
          cultural_background?: string;
          preparation?: string;
          image_url?: string;
          updated_at?: string;
        };
      };
      categories: {
        Row: {
          id: number;
          name: string;
          slug: string;
          description: string;
          image_url: string;
          created_at: string;
        };
        Insert: {
          name: string;
          slug: string;
          description: string;
          image_url?: string;
          created_at?: string;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string;
          image_url?: string;
        };
      };
      herb_categories: {
        Row: {
          id: number;
          herb_id: number;
          category_id: number;
        };
        Insert: {
          herb_id: number;
          category_id: number;
        };
        Update: {
          herb_id?: number;
          category_id?: number;
        };
      };
      ebooks: {
        Row: {
          id: number;
          title: string;
          slug: string;
          description: string;
          price: number;
          file_url: string;
          cover_image_url: string;
          created_at: string;
          is_premium: boolean;
        };
        Insert: {
          title: string;
          slug: string;
          description: string;
          price: number;
          file_url: string;
          cover_image_url?: string;
          created_at?: string;
          is_premium?: boolean;
        };
        Update: {
          title?: string;
          slug?: string;
          description?: string;
          price?: number;
          file_url?: string;
          cover_image_url?: string;
          is_premium?: boolean;
        };
      };
      user_favorites: {
        Row: {
          id: number;
          user_id: string;
          herb_id: number;
          created_at: string;
        };
        Insert: {
          user_id: string;
          herb_id: number;
          created_at?: string;
        };
        Update: {
          user_id?: string;
          herb_id?: number;
        };
      };
      user_subscriptions: {
        Row: {
          id: number;
          user_id: string;
          plan: string;
          status: string;
          current_period_end: string;
          created_at: string;
          stripe_customer_id: string;
          stripe_subscription_id: string;
        };
        Insert: {
          user_id: string;
          plan: string;
          status: string;
          current_period_end: string;
          created_at?: string;
          stripe_customer_id: string;
          stripe_subscription_id: string;
        };
        Update: {
          user_id?: string;
          plan?: string;
          status?: string;
          current_period_end?: string;
          stripe_customer_id?: string;
          stripe_subscription_id?: string;
        };
      };
      user_purchases: {
        Row: {
          id: number;
          user_id: string;
          ebook_id: number;
          created_at: string;
          stripe_payment_id: string;
        };
        Insert: {
          user_id: string;
          ebook_id: number;
          created_at?: string;
          stripe_payment_id: string;
        };
        Update: {
          user_id?: string;
          ebook_id?: number;
          stripe_payment_id?: string;
        };
      };
    };
  };
};
