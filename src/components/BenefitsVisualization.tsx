'use client';

import { useEffect, useRef } from 'react';

interface BenefitData {
  area: string;
  percentage: number;
}

interface BenefitsVisualizationProps {
  benefits: BenefitData[];
}

const COLORS = [
  'bg-red-500',
  'bg-orange-500',
  'bg-green-500',
  'bg-green-400',
  'bg-blue-500',
  'bg-purple-500',
  'bg-pink-500'
];

export default function BenefitsVisualization({ benefits }: BenefitsVisualizationProps) {
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Animate bars on component mount
    const bars = document.querySelectorAll('.benefit-bar');
    
    bars.forEach((bar, index) => {
      setTimeout(() => {
        (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.percentage}%`;
      }, index * 100);
    });

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [benefits]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-serif font-bold text-gray-800 dark:text-gray-200 mb-6">Benefits Visualization</h2>
      
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{benefit.area}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{benefit.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div 
                className={`benefit-bar ${COLORS[index % COLORS.length]} h-4 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: '0%' }}
                data-percentage={benefit.percentage}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
