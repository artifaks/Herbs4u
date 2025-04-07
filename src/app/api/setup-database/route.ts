import { NextResponse } from 'next/server';
import { setupDatabase, seedDatabase } from '@/lib/database';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Check if Supabase is properly configured
    try {
      // Just try a simple query to check connection
      const { error } = await supabase.from('_dummy_query_table_that_doesnt_exist').select('*');
      
      if (error && error.code === '42P01') {
        // This is expected since the table doesn't exist yet
        console.log('Supabase connection successful, proceeding with setup...');
      } else if (error) {
        console.error('Unexpected error type when checking connection:', error);
      }
    } catch (connectionError) {
      console.error('Error connecting to Supabase:', connectionError);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to connect to Supabase. Please check your credentials.', 
        error: connectionError instanceof Error ? connectionError.message : String(connectionError)
      }, { status: 500 });
    }
    
    // Set up database schema
    const setupSuccess = await setupDatabase();
    
    if (!setupSuccess) {
      return NextResponse.json({ 
        success: false, 
        message: 'Database schema setup failed. Check server logs for details.' 
      }, { status: 500 });
    }
    
    // Seed database with initial data
    try {
      await seedDatabase();
    } catch (seedError: any) {
      console.error('Error seeding database:', seedError);
      return NextResponse.json({ 
        success: false, 
        message: 'Database schema was created but seeding failed.', 
        error: seedError.message 
      }, { status: 500 });
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database setup and seeding completed successfully' 
    });
  } catch (error: any) {
    console.error('Error in database setup:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Database setup failed with an unexpected error.', 
      error: error.message 
    }, { status: 500 });
  }
}
