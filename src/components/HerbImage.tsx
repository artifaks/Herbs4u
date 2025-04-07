'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HerbImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

export default function HerbImage({
  src,
  alt,
  className = '',
  fill = false,
  width,
  height,
  sizes
}: HerbImageProps) {
  const [error, setError] = useState(false);
  
  // Use a more specific placeholder based on context
  let placeholderImage = '/images/placeholder.jpg';
  
  // If the src contains 'herbs/', use the herbs placeholder
  if (src.includes('herbs/')) {
    placeholderImage = '/images/herbs/placeholder.jpg';
  }
  // If the src contains 'categories/', use the categories placeholder
  else if (src.includes('categories/')) {
    placeholderImage = '/images/categories/placeholder.jpg';
  }
  const placeholderColors = [
    'bg-green-100 dark:bg-green-900/30',
    'bg-primary-100 dark:bg-primary-900/30',
    'bg-secondary-100 dark:bg-secondary-900/30',
    'bg-purple-100 dark:bg-purple-900/30',
    'bg-blue-100 dark:bg-blue-900/30',
  ];
  
  // Generate a consistent color based on the herb name
  const colorIndex = alt.charCodeAt(0) % placeholderColors.length;
  const bgColor = placeholderColors[colorIndex];
  
  // If we have an error loading the image, show a colored placeholder with the first letter
  if (error) {
    return (
      <div 
        className={`${bgColor} flex items-center justify-center text-3xl font-bold text-gray-700 dark:text-gray-300 ${className}`}
        style={fill ? { position: 'absolute', inset: 0 } : { width, height }}
      >
        {alt.charAt(0).toUpperCase()}
      </div>
    );
  }

  // Otherwise try to load the image with a fallback
  return (
    <Image
      src={src || placeholderImage}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      sizes={sizes}
      onError={() => setError(true)}
    />
  );
}
