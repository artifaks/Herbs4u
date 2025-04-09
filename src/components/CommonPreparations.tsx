'use client';

import { useState } from 'react';
import { FaFlask, FaMugHot, FaCapsules, FaVial } from 'react-icons/fa';

type PreparationType = 'tincture' | 'tea' | 'capsules' | 'extract';

interface PreparationDetails {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  steps: string[];
  materials: string[];
  tips: string[];
}

const preparationDetails: Record<PreparationType, PreparationDetails> = {
  tincture: {
    title: 'Tincture',
    description: 'Herb extracted in alcohol solution',
    icon: <FaFlask className="w-6 h-6 text-purple-500" />,
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
    steps: [
      'Chop or grind the dried herb to increase surface area',
      'Place herbs in a clean glass jar, filling about 1/3 to 1/2 of the jar',
      'Pour high-proof alcohol (vodka or grain alcohol, 80-100 proof) over the herbs until completely covered',
      'Seal the jar tightly and label with contents and date',
      'Store in a cool, dark place for 4-6 weeks, shaking the jar daily if possible',
      'Strain the liquid through cheesecloth or a fine mesh strainer, squeezing to extract all liquid',
      'Transfer to dark glass dropper bottles for storage',
      'Store in a cool, dark place; tinctures typically last for 2-5 years'
    ],
    materials: [
      'Dried herb material',
      'High-proof alcohol (vodka or grain alcohol)',
      'Clean glass jar with tight-fitting lid',
      'Cheesecloth or fine mesh strainer',
      'Dark glass dropper bottles for storage',
      'Labels and marker'
    ],
    tips: [
      'The standard tincture ratio is 1:5 (1 part herb to 5 parts alcohol by weight)',
      'For fresh herbs, use a 1:2 ratio as fresh herbs contain water',
      'Typical dosage is 20-40 drops (1-2 ml), 2-3 times daily',
      'Can be taken directly under the tongue or mixed with water or juice'
    ]
  },
  tea: {
    title: 'Tea',
    description: 'Infusion of dried herb in hot water',
    icon: <FaMugHot className="w-6 h-6 text-green-500" />,
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    steps: [
      'Boil fresh, filtered water',
      'Place 1-2 teaspoons of dried herb (or 1 tablespoon of fresh herb) per cup in a teapot or mug',
      'Pour hot water over the herbs',
      'Cover and steep for 5-15 minutes depending on the herb (delicate herbs like flowers need less time, roots and barks need more)',
      'Strain the tea into your cup',
      'Add honey, lemon, or other flavorings if desired',
      'Drink while warm, typically 1-3 cups daily'
    ],
    materials: [
      'Dried or fresh herb material',
      'Fresh, filtered water',
      'Teapot or mug with cover',
      'Tea strainer or infuser',
      'Sweetener (optional)'
    ],
    tips: [
      'For roots, bark, and berries, use a decoction method: simmer in water for 15-20 minutes instead of steeping',
      'Make a larger batch and store in the refrigerator for up to 3 days',
      'Herbal teas can be combined with other herbs for enhanced flavor and benefits',
      'For stronger medicinal effect, cover while steeping to prevent volatile oils from escaping'
    ]
  },
  capsules: {
    title: 'Capsules',
    description: 'Powdered herb in gelatin or vegetable capsules',
    icon: <FaCapsules className="w-6 h-6 text-blue-500" />,
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    steps: [
      'Ensure herbs are completely dry before grinding',
      'Grind dried herbs into a fine powder using a coffee grinder or herb grinder',
      'Sift the powder through a fine mesh strainer to remove any larger pieces',
      'Set up your capsule filling machine if using one',
      'Separate the two halves of the empty capsules',
      'Fill the larger half of each capsule with herb powder',
      'Join the two halves of each capsule, pressing firmly to seal',
      'Store in an airtight container in a cool, dry place away from light'
    ],
    materials: [
      'Dried herb material',
      'Coffee grinder or herb grinder',
      'Fine mesh strainer',
      'Empty gelatin or vegetable capsules (size 00 or 0 are common)',
      'Capsule filling machine (optional)',
      'Airtight storage container',
      'Desiccant packet (optional, to prevent moisture)'
    ],
    tips: [
      'Size 00 capsules typically hold about 500-600 mg of powdered herb',
      'Wear gloves to prevent staining hands with herb powder',
      'Label containers with herb name and date of preparation',
      'Capsules typically last 1-2 years when properly stored',
      'Follow recommended dosages for specific herbs, typically 1-2 capsules, 2-3 times daily'
    ]
  },
  extract: {
    title: 'Extract',
    description: 'Concentrated herbal preparation',
    icon: <FaVial className="w-6 h-6 text-amber-500" />,
    color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
    steps: [
      'Chop or grind the dried herb material',
      'Combine herbs with appropriate solvent (water, alcohol, glycerin, or a mixture)',
      'For water-based extracts: simmer herbs in water for 30-60 minutes in a covered pot',
      'For alcohol-based extracts: follow tincture method, then continue to next step',
      'Strain the liquid and return to low heat',
      'Simmer uncovered until the volume is reduced by half or more',
      'Allow to cool and transfer to dark glass bottles',
      'Label with herb name, extraction method, and date'
    ],
    materials: [
      'Dried herb material',
      'Appropriate solvent (water, alcohol, glycerin)',
      'Stainless steel pot with lid',
      'Cheesecloth or fine mesh strainer',
      'Dark glass bottles for storage',
      'Labels and marker'
    ],
    tips: [
      'Extracts are more concentrated than tinctures or teas, so use smaller doses',
      'Water-based extracts (decoctions) should be refrigerated and used within 1 week',
      'Alcohol-based concentrated extracts can last for years when properly stored',
      'Glycerin-based extracts are alcohol-free and have a sweet taste, good for children',
      'Typical dosage is 10-30 drops, 2-3 times daily, depending on concentration'
    ]
  }
};

interface HerbPreparation {
  name: string;
  ingredients: string[];
  instructions: string;
}

interface CommonPreparationsProps {
  preparations: HerbPreparation[];
}

export default function CommonPreparations({ preparations }: CommonPreparationsProps) {
  const [openPreparation, setOpenPreparation] = useState<string | null>(null);

  const togglePreparation = (prepName: string) => {
    if (openPreparation === prepName) {
      setOpenPreparation(null);
    } else {
      setOpenPreparation(prepName);
    }
  };

  const getPreparationStyle = (prepName: string) => {
    const name = prepName.toLowerCase();
    
    if (name.includes('tincture')) {
      return {
        icon: <FaVial className="w-6 h-6 text-purple-500" />,
        color: 'bg-purple-100 dark:bg-purple-900/20',
        textColor: 'text-purple-700 dark:text-purple-400'
      };
    } else if (name.includes('tea') || name.includes('infusion') || name.includes('decoction')) {
      return {
        icon: <FaMugHot className="w-6 h-6 text-green-500" />,
        color: 'bg-green-100 dark:bg-green-900/20',
        textColor: 'text-green-700 dark:text-green-400'
      };
    } else if (name.includes('capsule')) {
      return {
        icon: <FaCapsules className="w-6 h-6 text-blue-500" />,
        color: 'bg-blue-100 dark:bg-blue-900/20',
        textColor: 'text-blue-700 dark:text-blue-400'
      };
    } else if (name.includes('extract') || name.includes('powder') || name.includes('oil')) {
      return {
        icon: <FaFlask className="w-6 h-6 text-amber-500" />,
        color: 'bg-amber-100 dark:bg-amber-900/20',
        textColor: 'text-amber-700 dark:text-amber-400'
      };
    } else {
      // Default style
      return {
        icon: <FaFlask className="w-6 h-6 text-gray-500" />,
        color: 'bg-gray-100 dark:bg-gray-800',
        textColor: 'text-gray-700 dark:text-gray-300'
      };
    }
  };

  const parseInstructions = (instructions: string) => {
    // Split instructions by periods, semicolons, or numbered patterns
    const steps = instructions
      .split(/(?:\. |\; |\d+\. )/) // Split by period+space, semicolon+space, or number+period+space
      .filter(step => step.trim().length > 0) // Remove empty steps
      .map(step => {
        // Ensure each step ends with a period
        let trimmedStep = step.trim();
        if (!trimmedStep.endsWith('.')) {
          trimmedStep += '.';
        }
        return trimmedStep;
      });
    
    return steps;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-serif font-bold text-amber-700 dark:text-amber-500 mb-4">Herb Preparation Methods</h2>
      
      {preparations && preparations.length > 0 ? (
        preparations.map((prep, index) => {
          const style = getPreparationStyle(prep.name);
          const steps = parseInstructions(prep.instructions);
          
          return (
            <div 
              key={index} 
              className={`rounded-lg border ${openPreparation === prep.name ? 'border-primary-300 dark:border-primary-700' : 'border-gray-200 dark:border-gray-700'} overflow-hidden transition-all duration-300`}
            >
              <button 
                onClick={() => togglePreparation(prep.name)}
                className={`w-full p-4 flex items-center justify-between ${style.color}`}
              >
                <div className="flex items-center">
                  {style.icon}
                  <div className="ml-4">
                    <h3 className={`text-xl font-medium ${style.textColor}`}>{prep.name}</h3>
                  </div>
                </div>
                <svg 
                  className={`w-6 h-6 ${style.textColor} transform transition-transform duration-300 ${openPreparation === prep.name ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openPreparation === prep.name && (
                <div className="p-4 bg-white dark:bg-slate-800">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-2">Ingredients Needed:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {prep.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400">{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-2">Preparation Steps:</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      {steps.map((step, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400">{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No preparation methods available for this herb.</p>
      )}
    </div>
  );
}
