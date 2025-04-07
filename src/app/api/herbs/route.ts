import { NextResponse } from 'next/server';
import { allHerbs } from '@/data/allHerbs';

// Create a simplified version of the herb data for list views
const herbListData = allHerbs.map(herb => ({
  id: herb.id,
  name: herb.name,
  scientificName: herb.scientificName,
  slug: herb.slug,
  description: herb.description.substring(0, 200) + (herb.description.length > 200 ? '...' : ''),
  imageUrl: herb.imageUrl,
  rating: herb.rating,
  categories: herb.categories
}));

export async function GET(request: Request) {
  // Get search params from URL
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const slug = searchParams.get('slug');
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit') || '20') : 20;
  const page = searchParams.get('page') ? parseInt(searchParams.get('page') || '1') : 1;
  
  // If requesting a specific herb by slug, return the full data
  if (slug) {
    const herb = allHerbs.find(herb => herb.slug === slug);
    if (herb) {
      return NextResponse.json(herb);
    }
    return NextResponse.json({ error: 'Herb not found' }, { status: 404 });
  }
  
  // For list views, use the simplified data
  let filteredHerbs = [...herbListData];
  
  // Filter by category if provided
  if (category) {
    filteredHerbs = filteredHerbs.filter(herb => 
      herb.categories.some(cat => 
        cat.toLowerCase().includes(category.toLowerCase())
      )
    );
  }
  
  // Filter by search term if provided
  if (search) {
    const searchLower = search.toLowerCase();
    filteredHerbs = filteredHerbs.filter(herb => 
      herb.name.toLowerCase().includes(searchLower) ||
      herb.scientificName.toLowerCase().includes(searchLower) ||
      herb.description.toLowerCase().includes(searchLower) ||
      herb.categories.some(cat => cat.toLowerCase().includes(searchLower))
    );
  }
  
  // Calculate pagination
  const totalHerbs = filteredHerbs.length;
  const totalPages = Math.ceil(totalHerbs / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedHerbs = filteredHerbs.slice(startIndex, endIndex);
  
  return NextResponse.json({
    herbs: paginatedHerbs,
    pagination: {
      total: totalHerbs,
      page,
      limit,
      totalPages
    }
  });
}
