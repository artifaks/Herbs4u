// Server component for static export
import HerbDetailClient from './client';

// This function is required for static export
export async function generateStaticParams() {
  // For static export, we'll include the most common herbs
  return [
    { slug: 'ashwagandha' },
    { slug: 'turmeric' },
    { slug: 'ginger' },
    { slug: 'echinacea' },
    { slug: 'chamomile' },
    { slug: 'lavender' },
    { slug: 'peppermint' },
    { slug: 'valerian' },
    { slug: 'ginseng' },
    { slug: 'holy-basil' },
    { slug: 'milk-thistle' },
    { slug: 'elderberry' },
    { slug: 'dandelion' },
    { slug: 'nettle' },
    { slug: 'licorice' },
    { slug: 'rosemary' },
    { slug: 'thyme' },
    { slug: 'sage' },
    { slug: 'oregano' },
    { slug: 'cinnamon' },
    { slug: 'garlic' },
    { slug: 'lemon-balm' },
    { slug: 'marshmallow-root' },
    { slug: 'calendula' }
  ];
}

export default function HerbDetailPage({ params }: { params: { slug: string } }) {
  return <HerbDetailClient slug={params.slug} />;
}
