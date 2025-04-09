'use client';

import React from 'react';
import { 
  FaLeaf, FaMoon, FaShieldAlt, FaBolt, FaFemale, FaMale, 
  FaHeartbeat, FaBrain, FaAppleAlt, FaWind, FaSnowflake, FaFire, FaSun,
  FaSeedling, FaEye, FaTint
} from 'react-icons/fa';
import { IconType } from 'react-icons';

// Map of category names to icons
const categoryIcons: Record<string, IconType> = {
  // Main categories
  'Adaptogen': FaLeaf,
  'Sleep': FaMoon,
  'Immunity': FaShieldAlt,
  'Energy': FaBolt,
  'Women\'s Health': FaFemale,
  'Men\'s Health': FaMale,
  'Heart Health': FaHeartbeat,
  'Brain Health': FaBrain,
  'Digestive': FaAppleAlt,
  'Respiratory': FaWind,
  
  // Other common categories
  'Nervine': FaBrain,
  'Antioxidant': FaShieldAlt,
  'Anti-inflammatory': FaFire,
  'Skin Health': FaSeedling,
  'Eye Health': FaEye,
  'Nutritive': FaAppleAlt,
  'Cooling': FaSnowflake,
  'Warming': FaFire,
  'Drying': FaWind,
  'Moistening': FaTint,
  'Tonic': FaSun,
  
  // Default icon for any category not in the map
  'default': FaLeaf
};

interface CategoryIconProps {
  category: string;
  className?: string;
  size?: number;
}

export default function CategoryIcon({ category, className = '', size = 16 }: CategoryIconProps) {
  // Find the exact match or find a partial match
  const getIcon = (categoryName: string): IconType => {
    // Check for exact match
    if (categoryIcons[categoryName]) {
      return categoryIcons[categoryName];
    }
    
    // Check for partial match (e.g., if category is "Sleep Support", match with "Sleep")
    const partialMatch = Object.keys(categoryIcons).find(key => 
      categoryName.toLowerCase().includes(key.toLowerCase())
    );
    
    if (partialMatch) {
      return categoryIcons[partialMatch];
    }
    
    // Default icon if no match found
    return categoryIcons.default;
  };
  
  const Icon = getIcon(category);
  
  return <Icon className={className} size={size} />;
}
