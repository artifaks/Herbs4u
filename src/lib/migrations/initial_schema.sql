-- Enable RLS
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create herbs table
CREATE TABLE IF NOT EXISTS public.herbs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  scientific_name TEXT,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  benefits TEXT[] DEFAULT '{}',
  dosage JSONB DEFAULT '{}',
  warnings TEXT[] DEFAULT '{}',
  history TEXT,
  cultural_background TEXT,
  preparation TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create junction table for herbs and categories
CREATE TABLE IF NOT EXISTS public.herb_categories (
  id SERIAL PRIMARY KEY,
  herb_id INTEGER REFERENCES public.herbs(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES public.categories(id) ON DELETE CASCADE,
  UNIQUE(herb_id, category_id)
);

-- Create ebooks table
CREATE TABLE IF NOT EXISTS public.ebooks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  file_url TEXT NOT NULL,
  cover_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  is_premium BOOLEAN DEFAULT false
);

-- Create user favorites table
CREATE TABLE IF NOT EXISTS public.user_favorites (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  herb_id INTEGER REFERENCES public.herbs(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, herb_id)
);

-- Create user subscriptions table
CREATE TABLE IF NOT EXISTS public.user_subscriptions (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  plan TEXT NOT NULL,
  status TEXT NOT NULL,
  current_period_end TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  stripe_customer_id TEXT NOT NULL,
  stripe_subscription_id TEXT NOT NULL,
  UNIQUE(user_id)
);

-- Create user purchases table
CREATE TABLE IF NOT EXISTS public.user_purchases (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  ebook_id INTEGER REFERENCES public.ebooks(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  stripe_payment_id TEXT NOT NULL,
  UNIQUE(user_id, ebook_id)
);

-- Set up RLS policies
-- Herbs are readable by everyone
CREATE POLICY "Herbs are viewable by everyone" ON public.herbs
  FOR SELECT USING (true);

-- Categories are readable by everyone
CREATE POLICY "Categories are viewable by everyone" ON public.categories
  FOR SELECT USING (true);

-- Herb categories are readable by everyone
CREATE POLICY "Herb categories are viewable by everyone" ON public.herb_categories
  FOR SELECT USING (true);

-- Ebooks are readable by everyone
CREATE POLICY "Ebooks are viewable by everyone" ON public.ebooks
  FOR SELECT USING (true);

-- User favorites are only readable by the owner
CREATE POLICY "User favorites are viewable by owner" ON public.user_favorites
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "User favorites are insertable by owner" ON public.user_favorites
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "User favorites are deletable by owner" ON public.user_favorites
  FOR DELETE USING (auth.uid() = user_id);

-- User subscriptions are only readable by the owner
CREATE POLICY "User subscriptions are viewable by owner" ON public.user_subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- User purchases are only readable by the owner
CREATE POLICY "User purchases are viewable by owner" ON public.user_purchases
  FOR SELECT USING (auth.uid() = user_id);

-- Enable RLS on all tables
ALTER TABLE public.herbs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.herb_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ebooks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_purchases ENABLE ROW LEVEL SECURITY;
