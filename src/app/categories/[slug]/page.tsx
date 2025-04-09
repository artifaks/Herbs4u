import { CategoryClient } from './client';

// This function is required for static export
export async function generateStaticParams() {
  // For static export, we'll include the most common categories
  return [
    { slug: 'nutritive' },
    { slug: 'medicinal' },
    { slug: 'adaptogenic' },
    { slug: 'nervine' },
    { slug: 'tonic' },
    { slug: 'bitter' },
    { slug: 'aromatic' },
    { slug: 'astringent' },
    { slug: 'demulcent' },
    { slug: 'expectorant' },
    { slug: 'carminative' },
    { slug: 'diuretic' },
    { slug: 'antispasmodic' },
    { slug: 'anti-inflammatory' },
    { slug: 'antimicrobial' },
    { slug: 'antioxidant' },
    { slug: 'immune-support' },
    { slug: 'digestive' },
    { slug: 'respiratory' },
    { slug: 'circulatory' },
    { slug: 'nervine-relaxant' },
    { slug: 'nervine-stimulant' },
    { slug: 'hepatic' },
    { slug: 'alterative' },
    { slug: 'emmenagogue' },
    { slug: 'galactagogue' },
    { slug: 'vulnerary' },
    { slug: 'diaphoretic' },
    { slug: 'febrifuge' },
    { slug: 'hypotensive' },
    { slug: 'laxative' },
    { slug: 'sedative' },
    { slug: 'stimulant' },
    { slug: 'styptic' },
    { slug: 'tonic' },
    { slug: 'vermifuge' }
  ];
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return <CategoryClient slug={params.slug} />;
}
