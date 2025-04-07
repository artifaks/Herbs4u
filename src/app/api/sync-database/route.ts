import { NextResponse } from 'next/server';
import { syncAllToDatabase, syncHerbsToDatabase, syncEbooksToDatabase } from '@/lib/syncDatabase';

export async function GET(request: Request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const syncType = searchParams.get('type') || 'all';
    
    let result;
    
    // Determine which sync function to call based on the type parameter
    switch (syncType.toLowerCase()) {
      case 'herbs':
        result = await syncHerbsToDatabase();
        break;
      case 'ebooks':
        result = await syncEbooksToDatabase();
        break;
      case 'all':
      default:
        result = await syncAllToDatabase();
        break;
    }
    
    return NextResponse.json({ 
      success: result.success, 
      message: result.message,
      data: result
    });
  } catch (error) {
    console.error('Error in sync-database API route:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'An unexpected error occurred during database synchronization',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
