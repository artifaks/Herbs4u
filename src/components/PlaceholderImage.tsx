'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface PlaceholderImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
  colorFallback?: boolean;
}

export default function PlaceholderImage({ 
  src, 
  fallbackSrc = '/images/placeholder.jpg',
  alt = 'Image',
  colorFallback = false,
  className = '',
  ...props 
}: PlaceholderImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Generate a consistent color based on the alt text
  const bgColors = [
    'bg-green-100 dark:bg-green-900/30',
    'bg-blue-100 dark:bg-blue-900/30',
    'bg-purple-100 dark:bg-purple-900/30',
    'bg-amber-100 dark:bg-amber-900/30',
    'bg-pink-100 dark:bg-pink-900/30',
  ];
  
  const colorIndex = alt.charCodeAt(0) % bgColors.length;
  const bgColor = bgColors[colorIndex];
  
  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src as string);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    console.log(`Image error loading: ${imgSrc}`);
    if (!hasError) {
      // Try the fallback image
      setImgSrc(fallbackSrc);
      setHasError(true);
    } else if (colorFallback) {
      // If even the fallback fails and colorFallback is enabled, we'll render a colored div
      setImgSrc(null);
    }
    setIsLoading(false);
  };
  
  const handleLoad = () => {
    setIsLoading(false);
  };

  // If we've tried both the original and fallback images and both failed,
  // and colorFallback is enabled, render a colored div with the first letter
  if (hasError && !imgSrc && colorFallback) {
    return (
      <div 
        className={`${bgColor} flex items-center justify-center text-3xl font-bold text-gray-700 dark:text-gray-300 ${className}`}
        style={props.fill ? { position: 'absolute', inset: 0 } : { width: props.width, height: props.height }}
      >
        {alt.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div 
          className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
          style={props.fill ? { position: 'absolute', inset: 0 } : { width: props.width, height: props.height }}
        />
      )}
      <Image
        {...props}
        src={imgSrc || fallbackSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`${className} ${isLoading ? 'invisible' : 'visible'}`}
      />
    </>
  );
}
