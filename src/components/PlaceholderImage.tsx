'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface PlaceholderImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export default function PlaceholderImage({ 
  src, 
  fallbackSrc = '/images/placeholder.jpg',
  alt,
  ...props 
}: PlaceholderImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}
