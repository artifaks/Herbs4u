import { NextRequest, NextResponse } from 'next/server';
import { constructEvent, stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = headers().get('stripe-signature') || '';
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

    if (!signature || !webhookSecret) {
      return NextResponse.json(
        { error: 'Missing Stripe signature or webhook secret' },
        { status: 400 }
      );
    }

    // Verify the webhook signature
    const event = constructEvent(body, signature, webhookSecret);

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object);
        break;
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object);
        break;
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Error handling webhook:', error);
    return NextResponse.json(
      { error: error.message || 'Error handling webhook' },
      { status: 400 }
    );
  }
}

async function handleCheckoutSessionCompleted(session: any) {
  const { metadata, customer, subscription, mode } = session;

  if (!metadata || !metadata.userId) {
    console.error('Missing userId in metadata');
    return;
  }

  const userId = metadata.userId;

  if (mode === 'subscription') {
    // Get subscription details
    const subscriptionDetails = await stripe.subscriptions.retrieve(subscription);
    const plan = subscriptionDetails.items.data[0].plan.nickname?.toLowerCase() || 'premium';
    const status = subscriptionDetails.status;
    const currentPeriodEnd = new Date(subscriptionDetails.current_period_end * 1000).toISOString();

    // Update or insert subscription record
    const { error } = await supabase
      .from('user_subscriptions')
      .upsert({
        user_id: userId,
        plan,
        status,
        current_period_end: currentPeriodEnd,
        stripe_customer_id: customer,
        stripe_subscription_id: subscription,
      }, { onConflict: 'user_id' });

    if (error) {
      console.error('Error updating subscription record:', error);
    }
  } else if (mode === 'payment' && metadata.productType === 'ebook' && metadata.productId) {
    // Record ebook purchase
    const { error } = await supabase
      .from('user_purchases')
      .insert({
        user_id: userId,
        ebook_id: parseInt(metadata.productId),
        stripe_payment_id: session.payment_intent,
      });

    if (error) {
      console.error('Error recording ebook purchase:', error);
    }
  }
}

async function handleSubscriptionUpdated(subscription: any) {
  const customerId = subscription.customer;
  const subscriptionId = subscription.id;
  const status = subscription.status;
  const currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();
  const plan = subscription.items.data[0].plan.nickname?.toLowerCase() || 'premium';

  // Get user ID from customer ID
  const { data, error: userError } = await supabase
    .from('user_subscriptions')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();

  if (userError || !data) {
    console.error('Error finding user for subscription update:', userError);
    return;
  }

  // Update subscription record
  const { error } = await supabase
    .from('user_subscriptions')
    .upsert({
      user_id: data.user_id,
      plan,
      status,
      current_period_end: currentPeriodEnd,
      stripe_customer_id: customerId,
      stripe_subscription_id: subscriptionId,
    }, { onConflict: 'user_id' });

  if (error) {
    console.error('Error updating subscription record:', error);
  }
}

async function handleSubscriptionDeleted(subscription: any) {
  const customerId = subscription.customer;

  // Get user ID from customer ID
  const { data, error: userError } = await supabase
    .from('user_subscriptions')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();

  if (userError || !data) {
    console.error('Error finding user for subscription deletion:', userError);
    return;
  }

  // Update subscription status to canceled
  const { error } = await supabase
    .from('user_subscriptions')
    .update({
      status: 'canceled',
    })
    .eq('user_id', data.user_id);

  if (error) {
    console.error('Error updating subscription to canceled:', error);
  }
}
