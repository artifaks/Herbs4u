'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HerbCategorySectionProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export default function HerbCategorySection({
  title,
  description,
  imageUrl,
  slug,
}: HerbCategorySectionProps) {
  return (
    <Link href={`/categories/${slug}`} className="block">
      <div className="herb-card h-full hover:translate-y-[-5px]">
        <div className="relative h-48 w-full">
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              // Fallback image on error
              const target = e.target as HTMLImageElement;
              target.src = '/images/placeholder.jpg';
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}
