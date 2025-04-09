'use client';

import { useState, useEffect } from 'react';
import { FaFlask, FaMugHot, FaCapsules, FaVial, FaTimes } from 'react-icons/fa';
import CommonPreparations from './CommonPreparations';

interface HerbPreparation {
  name: string;
  ingredients: string[];
  instructions: string;
  prepTime?: string; // Optional preparation time (e.g., "15 minutes")
  difficulty?: 'Easy' | 'Moderate' | 'Advanced'; // Optional difficulty level
}

interface HerbPreparationModalProps {
  isOpen: boolean;
  onClose: () => void;
  herbName: string;
  preparations: HerbPreparation[];
}

export default function HerbPreparationModal({ 
  isOpen, 
  onClose, 
  herbName, 
  preparations 
}: HerbPreparationModalProps) {
  const [openPreparation, setOpenPreparation] = useState<string | null>(null);
  
  // Close any open preparations when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setOpenPreparation(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const togglePreparation = (prepName: string) => {
    if (openPreparation === prepName) {
      setOpenPreparation(null);
    } else {
      setOpenPreparation(prepName);
    }
  };

  // Helper function to get color for difficulty level
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300';
      case 'Moderate':
        return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300';
      case 'Advanced':
        return 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300';
      default:
        return 'bg-gray-100 dark:bg-gray-800/20 text-gray-800 dark:text-gray-300';
    }
  };

  // Helper function to determine preparation type icon and color
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

  // Function to parse instructions into steps
  const parseInstructions = (instructions: string) => {
    // Split instructions by periods, semicolons, or numbered patterns
    const steps = instructions
      .split(/(?:\\. |\\; |\\d+\\. )/) // Split by period+space, semicolon+space, or number+period+space
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-primary-600 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">{herbName} Preparation Methods</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-primary-700 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Common Preparation Methods:</h3>
            <CommonPreparations preparations={preparations} />
          </div>
          
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Detailed Preparation Instructions:</h3>
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
                    {(prep.prepTime || prep.difficulty) && (
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-600 dark:text-gray-400">
                        {prep.prepTime && (
                          <span className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {prep.prepTime}
                          </span>
                        )}
                        {prep.difficulty && (
                          <span className={`px-1.5 py-0.5 rounded ${getDifficultyColor(prep.difficulty)}`}>
                            {prep.difficulty}
                          </span>
                        )}
                      </div>
                    )}
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
      </div>
    </div>
  );
}
