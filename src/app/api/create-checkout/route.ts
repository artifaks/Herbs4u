import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession, createCustomer } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { priceId, mode, productId, userId, userEmail } = await request.json();

    if (!priceId || !mode || !userId || !userEmail) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // For development/testing, use a fixed customer ID if Supabase is not available
    let customerId = 'cus_test_123456';
    
    // In production, we would check if the user already has a Stripe customer ID
    try {
      const { data: userData } = await supabase
        .from('user_subscriptions')
        .select('stripe_customer_id')
        .eq('user_id', userId)
        .maybeSingle();

      if (userData?.stripe_customer_id) {
        customerId = userData.stripe_customer_id;
      } else {
        // If no customer ID exists, create a new customer
        const customer = await createCustomer(userEmail);
        customerId = customer.id;
      }
    } catch (error) {
      console.warn('Error fetching customer ID, using default:', error);
      // Continue with the default customer ID
    }

    // Create metadata based on the purchase type
    const metadata: Record<string, string> = {
      userId,
    };

    if (mode === 'payment' && productId) {
      metadata.productId = productId;
      metadata.productType = 'ebook';
    } else if (mode === 'subscription') {
      metadata.productType = 'subscription';
    }

    // Create checkout session
    const { sessionId, url } = await createCheckoutSession({
      priceId,
      customerId,
      mode,
      successUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/ebooks/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/ebooks`,
      metadata,
    });

    return NextResponse.json({ sessionId, url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Error creating checkout session' },
      { status: 500 }
    );
  }
}
