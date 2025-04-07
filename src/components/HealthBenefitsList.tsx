'use client';

import { FaHeart } from 'react-icons/fa';

interface HealthBenefitsListProps {
  benefits: string[];
}

export default function HealthBenefitsList({ benefits }: HealthBenefitsListProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <FaHeart className="text-red-500 mr-2" />
        <h3 className="text-xl font-medium">Health Benefits</h3>
      </div>
      
      <ul className="space-y-3 ml-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
            <span className="text-green-600 dark:text-green-400 mr-2 mt-0.5">•</span>
            <span className="text-gray-800 dark:text-gray-200">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
