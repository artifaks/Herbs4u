import Link from 'next/link';
import { FaCheck, FaTimes, FaLeaf, FaBookOpen, FaStar, FaEnvelope } from 'react-icons/fa';

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">Choose Your Herbal Journey</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select the plan that best fits your needs and start your journey to natural wellness with Sacred Herb.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Free Plan */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-2">Free Access</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore the basics of herbal wellness
              </p>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">/forever</span>
              </div>
              <Link href="/signup" className="btn-outline w-full block text-center">
                Sign Up Free
              </Link>
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-4">What's Included:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Basic herb information and benefits</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Search by herb name, symptom, or category</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Save favorite herbs to your account</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Access to blog articles and basic guides</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Weekly wellness newsletter</span>
                </li>
                <li className="flex items-start opacity-50">
                  <FaTimes className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Premium herb guides and protocols</span>
                </li>
                <li className="flex items-start opacity-50">
                  <FaTimes className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Monthly eBook downloads</span>
                </li>
                <li className="flex items-start opacity-50">
                  <FaTimes className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Custom herb stacks for personal needs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden border-2 border-primary-500 dark:border-primary-400 transform md:scale-105 z-10">
            <div className="bg-primary-500 dark:bg-primary-600 text-white text-center py-2 text-sm font-bold">
              MOST POPULAR
            </div>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-2">Premium Access</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Everything you need for your herbal wellness journey
              </p>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">$4.99</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
              </div>
              <Link href="/signup?plan=premium" className="btn-primary w-full block text-center">
                Get Premium
              </Link>
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-4">Everything in Free, plus:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Exclusive premium herb guides and protocols</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>One free eBook download each month</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Create custom herb stacks for personal needs</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Detailed dosage and preparation instructions</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Historical and cultural background for all herbs</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Ad-free experience across the entire platform</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Priority access to new features and content</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Cancel anytime</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Annual Plan */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-2">Annual Premium</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Best value for dedicated herbal enthusiasts
              </p>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">$49.99</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">/year</span>
              </div>
              <div className="bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Save $9.89 (16%)
              </div>
              <Link href="/signup?plan=annual" className="btn-secondary w-full block text-center">
                Get Annual Plan
              </Link>
            </div>
            <div className="p-6">
              <h3 className="font-bold mb-4">Everything in Premium, plus:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Two free eBook downloads each month</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Exclusive annual member herb guide</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Seasonal herb recommendations</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Early access to new features</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Lock in current pricing for the full year</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* eBooks Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold mb-4">Individual eBooks</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Prefer to purchase individual guides? Browse our collection of expertly crafted eBooks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaBookOpen className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Beginner's Guide to Herbal Medicine</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  A comprehensive introduction to using herbs safely and effectively.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">$9.99</span>
                  <Link href="/ebooks/beginners-guide" className="btn-primary text-sm py-1 px-3">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaBookOpen className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Herbal Remedies for Stress & Anxiety</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Natural approaches to managing stress and promoting relaxation.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">$12.99</span>
                  <Link href="/ebooks/stress-anxiety" className="btn-primary text-sm py-1 px-3">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaBookOpen className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Seasonal Immune Support</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Strengthen your immune system naturally throughout the year.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">$14.99</span>
                  <Link href="/ebooks/immune-support" className="btn-primary text-sm py-1 px-3">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/ebooks" className="btn-outline">
              Browse All eBooks
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="font-bold text-lg mb-2">Can I cancel my subscription at any time?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can cancel your subscription at any time. Your premium access will continue until the end of your current billing period.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">How do I access my free monthly eBooks?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Premium members can download their free monthly eBooks from the "My eBooks" section in their account dashboard. New eBooks are available on the 1st of each month.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Is the information medically reviewed?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our content is researched by herbalists and reviewed by professionals with expertise in herbal medicine. However, it's important to note that our information is educational and not a substitute for professional medical advice.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Can I share my account with family members?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our subscriptions are intended for individual use. We offer family plans for households that want to share access. Please contact our support team for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
