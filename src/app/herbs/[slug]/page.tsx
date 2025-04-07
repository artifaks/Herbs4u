'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import CommonPreparations from '@/components/CommonPreparations';
import HerbDetailTabs from '@/components/HerbDetailTabs';
import BenefitsVisualization from '@/components/BenefitsVisualization';
import HerbPairings from '@/components/HerbPairings';
import ScientificStudies from '@/components/ScientificStudies';
import HerbDetailHeader from '@/components/HerbDetailHeader';
import RelatedHerbs from '@/components/RelatedHerbs';
import HealthBenefitsList from '@/components/HealthBenefitsList';
import { 
  FaLeaf, 
  FaHistory, 
  FaFlask, 
  FaExclamationTriangle, 
  FaInfoCircle,
  FaBook,
  FaLightbulb,
} from 'react-icons/fa';

// Define types for our data model
type HerbPreparation = {
  name: string;
  ingredients: string[];
  instructions: string;
};

type HerbPairing = {
  herb: string;
  benefit: string;
};

type BenefitVisualization = {
  area: string;
  percentage: number;
};

type Resource = {
  title: string;
  author: string;
  type: string;
  link: string;
};

type HerbData = {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  imageUrl: string;
  rating: number;
  categories: string[];
  benefits: string[];
  uses: string[];
  funFact: string;
  dosage: {
    powder: string;
    capsule: string;
    tincture: string;
    tea: string;
  };
  warnings: string[];
  history: string;
  culturalBackground: string;
  preparation: string;
  preparations: HerbPreparation[];
  herbPairings: HerbPairing[];
  benefitsVisualization: BenefitVisualization[];
  resources: Resource[];
};

// Fetch herb data from our API based on the slug
const getHerbData = async (slug: string): Promise<HerbData | null> => {
  try {
    const response = await fetch(`/api/herbs?slug=${slug}`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch herb data: ${response.status}`);
    }
    const data = await response.json();
    
    // Check if we got a valid herb object
    if (data && data.id && data.name) {
      return data;
    } else {
      console.error('Invalid herb data received:', data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching herb data:', error);
    return null;
  }
};

export default function HerbDetailPage({ params }: { params: { slug: string } }) {
  const [herb, setHerb] = useState<HerbData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [studies, setStudies] = useState([
    {
      title: 'Clinical Efficacy of Herbal Extract in Cardiovascular Health',
      authors: 'Johnson, M., et al.',
      journal: 'Journal of Herbal Medicine',
      year: 2022,
      findings: 'This randomized controlled trial found significant improvements in blood pressure and circulation markers after 8 weeks of supplementation.',
      link: 'https://example.com/study1'
    },
    {
      title: 'Comparative Analysis of Antioxidant Properties in Medicinal Herbs',
      authors: 'Smith, A. & Williams, B.',
      journal: 'Phytotherapy Research',
      year: 2021,
      findings: 'Analysis revealed high concentrations of antioxidant compounds with potential applications in preventing oxidative stress-related conditions.',
      link: 'https://example.com/study2'
    }
  ]);

  useEffect(() => {
    async function fetchHerbData() {
      try {
        // First try to fetch from our API which includes all the herb data files
        const herbData = await getHerbData(params.slug);
        
        if (herbData) {
          setHerb(herbData);
        } else {
          // If API fails, try to fetch from Supabase as fallback
          const { data, error } = await supabase
            .from('herbs')
            .select('*')
            .eq('slug', params.slug)
            .single();

          if (error || !data) {
            throw new Error('Herb not found');
          } else {
            // Transform Supabase data to match our HerbData type
            setHerb({
              id: data.id,
              name: data.name,
              scientificName: data.scientific_name || 'Unknown',
              description: data.description || '',
              imageUrl: data.image_url || '/images/placeholder.jpg',
              rating: data.rating || 4.5,
              categories: data.categories || [],
              benefits: data.benefits || [],
              uses: data.uses || [],
              funFact: data.fun_fact || '',
              dosage: {
                powder: data.dosage_powder || '1-2 teaspoons daily',
                capsule: data.dosage_capsule || '2 capsules, 2-3 times daily',
                tincture: data.dosage_tincture || '30-60 drops, 2-3 times daily',
                tea: data.dosage_tea || '1 teaspoon per cup, 3 cups daily'
              },
              warnings: data.warnings || [],
              history: data.history || '',
              culturalBackground: data.cultural_background || '',
              preparation: data.preparation || '',
              preparations: data.preparations || [],
              herbPairings: data.herb_pairings || [],
              benefitsVisualization: data.benefits_visualization || [],
              resources: data.resources || []
            });
          }
        }
      } catch (err) {
        console.error('Error fetching herb data:', err);
        setError('Herb not found. Please try another herb or go back to the herbs page.');
      } finally {
        setLoading(false);
      }
    }

    fetchHerbData();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-6"></div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
            </div>
            <div className="md:w-2/3">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !herb) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700 dark:text-red-300">
            {error || 'Herb not found. Please try another herb or go back to the herbs page.'}
          </p>
          <Link href="/herbs" className="text-primary-600 dark:text-primary-400 hover:underline mt-2 inline-block">
            Back to Herbs
          </Link>
        </div>
      </div>
    );
  }

  // Overview Section
  const overviewSection = (
    <div>
      <HealthBenefitsList benefits={herb.benefits || []} />

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <FaLeaf className="text-green-500 mr-2" />
          <h3 className="text-xl font-medium">Common Uses</h3>
        </div>
        <ul className="space-y-2 ml-6">
          {herb.uses && herb.uses.length > 0 ? (
            herb.uses.map((use, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                <span>{use}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No common uses listed</li>
          )}
        </ul>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <FaExclamationTriangle className="text-yellow-500 mr-2" />
          <h3 className="text-xl font-medium">Precautions & Warnings</h3>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500">
          <ul className="space-y-2">
            {herb.warnings && herb.warnings.length > 0 ? (
              herb.warnings.map((warning, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 dark:text-yellow-400 mr-2">⚠️</span>
                  <span>{warning}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No specific warnings listed</li>
            )}
          </ul>
          <div className="mt-4 pt-4 border-t border-yellow-200 dark:border-yellow-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Always consult with a qualified healthcare practitioner before using herbal supplements.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center mb-2">
          <FaFlask className="text-blue-500 mr-2" />
          <h3 className="text-xl font-medium">Recommended Dosage</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <div className="border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 pb-4 md:pb-0 md:pr-4">
            <h4 className="font-bold mb-2">Powder</h4>
            <p>{herb.dosage.powder}</p>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 pb-4 md:pb-0 md:pr-4">
            <h4 className="font-bold mb-2">Capsule</h4>
            <p>{herb.dosage.capsule}</p>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 pb-4 md:pb-0 md:pr-4">
            <h4 className="font-bold mb-2">Tincture</h4>
            <p>{herb.dosage.tincture}</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Tea</h4>
            <p>{herb.dosage.tea}</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Preparations Section
  const preparationsSection = (
    <div>
      <CommonPreparations />
      
      <div className="mt-8">
        <h3 className="text-xl font-medium mb-4">{herb.name} Specific Preparations</h3>
        <div className="space-y-6">
          {herb.preparations && herb.preparations.length > 0 ? (
            herb.preparations.map((prep, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold mb-3">{prep.name}</h4>
                
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Ingredients:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    {prep.ingredients && prep.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Instructions:</h5>
                  <p className="text-gray-700 dark:text-gray-300">{prep.instructions}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-500">No specific preparations listed</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // History Section
  const historySection = (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-3">Historical Background</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{herb.history}</p>
      </div>
      
      <div>
        <h3 className="text-xl font-medium mb-3">Cultural Significance</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{herb.culturalBackground}</p>
      </div>
      
      <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center mb-2">
          <FaLightbulb className="text-yellow-500 mr-2" />
          <h3 className="text-lg font-medium">Fun Fact</h3>
        </div>
        <p className="italic text-gray-700 dark:text-gray-300">{herb.funFact}</p>
      </div>
    </div>
  );

  // Scientific Studies Section
  const studiesSection = (
    <ScientificStudies herbName={herb.name} studies={studies} />
  );

  // Pairings Section
  const pairingsSection = (
    <HerbPairings herbName={herb.name} pairings={herb.herbPairings || []} />
  );

  // Visualizations Section
  const visualizationsSection = (
    <BenefitsVisualization benefits={herb.benefitsVisualization || []} />
  );

  // Define related herbs based on categories
  const relatedHerbs = [
    {
      name: 'Ginseng',
      slug: 'ginseng',
      category: 'Energy'
    },
    {
      name: 'Holy Basil',
      slug: 'holy-basil',
      category: 'Stress'
    },
    {
      name: 'Rhodiola',
      slug: 'rhodiola',
      category: 'Adaptogen'
    },
    {
      name: 'Reishi',
      slug: 'reishi',
      category: 'Immunity'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Herb Header */}
        <HerbDetailHeader
          name={herb.name}
          scientificName={herb.scientificName}
          description={herb.description}
          imageUrl={herb.imageUrl}
          rating={herb.rating}
          categories={herb.categories}
        />
        
        {/* Tabbed Content */}
        <HerbDetailTabs
          overviewSection={overviewSection}
          preparationsSection={preparationsSection}
          historySection={historySection}
          studiesSection={studiesSection}
          pairingsSection={pairingsSection}
          visualizationsSection={visualizationsSection}
        />
        
        {/* Premium Content Teaser */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Want to Learn More?</h3>
            <p className="mb-4">
              Unlock premium content to access detailed herbal protocols, preparation methods, and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/pricing" className="btn-primary text-center">
                Upgrade to Premium
              </Link>
              <Link href="/ebooks" className="btn-outline text-center">
                Browse eBooks
              </Link>
            </div>
          </div>
        </section>
        
        {/* Related Herbs */}
        <RelatedHerbs currentHerbName={herb.name} relatedHerbs={relatedHerbs} />
      </div>
    </div>
  );
}
