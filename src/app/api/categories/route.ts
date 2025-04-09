import { NextResponse } from 'next/server';
import additionalMedicinalHerbs from '@/data/additionalMedicinalHerbs';

export async function GET() {
  try {
    // Extract all categories from the herbs data
    const allCategoriesWithDuplicates = additionalMedicinalHerbs.flatMap(herb => herb.categories);
    
    // Remove duplicates and sort alphabetically
    const uniqueCategories = [...new Set(allCategoriesWithDuplicates)].sort();
    
    return NextResponse.json(uniqueCategories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
