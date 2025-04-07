import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaLeaf, FaBookOpen, FaStar } from 'react-icons/fa';
import HerbCategorySection from '@/components/HerbCategorySection';
import SearchBar from '@/components/SearchBar';
import FeaturedHerbs from '@/components/FeaturedHerbs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Discover the Healing Power of Nature
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-10">
            Explore our comprehensive guide to herbal remedies, backed by traditional wisdom and modern research.
          </p>
          <div className="w-full max-w-2xl">
            <SearchBar />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/herbs" className="btn-secondary flex items-center gap-2">
              <FaLeaf /> Browse All Herbs
            </Link>
            <Link href="/categories" className="btn-outline bg-white/10 flex items-center gap-2">
              <FaBookOpen /> Explore Categories
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
      </section>

      {/* Featured Herbs Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Featured Healing Herbs
          </h2>
          <FeaturedHerbs />
          <div className="text-center mt-10">
            <Link href="/herbs" className="btn-primary">
              View All Herbs
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HerbCategorySection 
              title="Digestion" 
              description="Herbs that support digestive health and comfort"
              imageUrl="/images/categories/digestion.jpg"
              slug="digestion"
            />
            <HerbCategorySection 
              title="Sleep & Relaxation" 
              description="Natural remedies for better sleep and stress relief"
              imageUrl="/images/categories/sleep.jpg"
              slug="sleep"
            />
            <HerbCategorySection 
              title="Immunity" 
              description="Strengthen your body's natural defenses"
              imageUrl="/images/categories/immunity.jpg"
              slug="immunity"
            />
            <HerbCategorySection 
              title="Energy & Vitality" 
              description="Boost your energy levels naturally"
              imageUrl="/images/categories/energy.jpg"
              slug="energy"
            />
            <HerbCategorySection 
              title="Women's Health" 
              description="Herbal support for women's wellbeing"
              imageUrl="/images/categories/womens-health.jpg"
              slug="womens-health"
            />
            <HerbCategorySection 
              title="Men's Health" 
              description="Herbs tailored for men's health concerns"
              imageUrl="/images/categories/mens-health.jpg"
              slug="mens-health"
            />
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-4">
            Unlock Premium Features
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Enhance your herbal journey with exclusive content and personalized features
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBookOpen className="text-primary-600 dark:text-primary-300 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Exclusive Guides</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access our growing library of in-depth herbal guides and protocols
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-primary-600 dark:text-primary-300 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Herb Stacks</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create personalized herb combinations for your specific health needs
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-primary-600 dark:text-primary-300 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Monthly eBooks</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive a free eBook each month with premium membership
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/pricing" className="btn-secondary">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
