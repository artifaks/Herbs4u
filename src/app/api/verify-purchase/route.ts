import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { success: false, message: 'Missing session ID' },
        { status: 400 }
      );
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Check if the session was successful
    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { success: false, message: 'Payment not completed' },
        { status: 400 }
      );
    }

    // Extract metadata
    const { metadata } = session;
    
    if (!metadata || !metadata.userId || !metadata.productId || metadata.productType !== 'ebook') {
      return NextResponse.json(
        { success: false, message: 'Invalid purchase metadata' },
        { status: 400 }
      );
    }

    const userId = metadata.userId;
    const productId = metadata.productId;

    // Check if the purchase is already recorded
    const { data: existingPurchase, error: checkError } = await supabase
      .from('user_purchases')
      .select('*')
      .eq('user_id', userId)
      .eq('ebook_id', productId)
      .maybeSingle();

    // If there's an error that's not "no rows returned", log it
    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing purchase:', checkError);
    }

    // If the purchase doesn't exist, record it
    if (!existingPurchase) {
      const { error: insertError } = await supabase
        .from('user_purchases')
        .insert({
          user_id: userId,
          ebook_id: productId,
          stripe_payment_id: session.payment_intent,
          purchase_date: new Date().toISOString(),
          amount: session.amount_total ? session.amount_total / 100 : 0
        });

      if (insertError) {
        console.error('Error recording purchase:', insertError);
        return NextResponse.json(
          { success: false, message: 'Failed to record purchase' },
          { status: 500 }
        );
      }
    }

    // Return success with product information
    return NextResponse.json({
      success: true,
      message: 'Purchase verified successfully',
      productId,
      userId,
    });
  } catch (error: any) {
    console.error('Error verifying purchase:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error verifying purchase' },
      { status: 500 }
    );
  }
}
