import { Stripe } from 'stripe';

// Check if we're in a development environment
const isDevelopment = process.env.NODE_ENV === 'development';

// Create a mock Stripe implementation for development
const mockStripe = {
  checkout: {
    sessions: {
      create: async (params: any) => ({
        id: 'cs_test_' + Math.random().toString(36).substring(2, 15),
        url: '/ebooks/success?session_id=test_session_id&mock=true',
        payment_status: 'paid',
        metadata: params.metadata || {}
      }),
      retrieve: async (id: string) => ({
        id,
        payment_status: 'paid',
        metadata: {
          userId: '24fbe759-5ef8-488b-82cb-5ea8ea6a66f5',
          productId: '1',
          productType: 'ebook'
        },
        payment_intent: 'pi_test_' + Math.random().toString(36).substring(2, 15),
        amount_total: 999
      })
    }
  },
  customers: {
    create: async (params: any) => ({
      id: 'cus_test_' + Math.random().toString(36).substring(2, 15),
      email: params.email,
      name: params.name
    })
  },
  subscriptions: {
    retrieve: async (id: string) => ({
      id,
      status: 'active',
      current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
      items: { data: [{ plan: { nickname: 'premium' } }] }
    }),
    cancel: async (id: string) => ({
      id,
      status: 'canceled'
    })
  },
  webhooks: {
    constructEvent: (payload: string, signature: string, secret: string) => ({
      type: 'checkout.session.completed',
      data: { object: { metadata: { userId: '24fbe759-5ef8-488b-82cb-5ea8ea6a66f5' } } }
    })
  }
} as unknown as Stripe;

// Initialize Stripe with the secret key or use mock in development
const stripe = isDevelopment || !process.env.STRIPE_SECRET_KEY
  ? mockStripe
  : new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    });

export interface CreateCheckoutParams {
  priceId: string;
  customerId?: string;
  customerEmail?: string;
  mode: 'subscription' | 'payment';
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
}

export async function createCheckoutSession({
  priceId,
  customerId,
  customerEmail,
  mode,
  successUrl,
  cancelUrl,
  metadata = {},
}: CreateCheckoutParams) {
  try {
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: !customerId ? customerEmail : undefined,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata,
    });

    return { sessionId: session.id, url: session.url };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}

export async function createCustomer(email: string, name?: string) {
  try {
    const customer = await stripe.customers.create({
      email,
      name,
    });

    return customer;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
}

export async function getSubscription(subscriptionId: string) {
  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    return subscription;
  } catch (error) {
    console.error('Error retrieving subscription:', error);
    throw error;
  }
}

export async function cancelSubscription(subscriptionId: string) {
  try {
    const subscription = await stripe.subscriptions.cancel(subscriptionId);
    return subscription;
  } catch (error) {
    console.error('Error canceling subscription:', error);
    throw error;
  }
}

export function constructEvent(payload: string, signature: string, webhookSecret: string) {
  try {
    // In development mode, return a mock event
    if (isDevelopment) {
      return {
        type: 'checkout.session.completed',
        data: {
          object: {
            id: 'cs_test_' + Math.random().toString(36).substring(2, 15),
            payment_status: 'paid',
            metadata: {
              userId: '24fbe759-5ef8-488b-82cb-5ea8ea6a66f5',
              productId: '1',
              productType: 'ebook'
            },
            customer: 'cus_test_' + Math.random().toString(36).substring(2, 15),
            amount_total: 999
          }
        }
      };
    }
    
    // In production, use the real Stripe webhook handler
    const event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
    return event;
  } catch (error) {
    console.error('Error constructing webhook event:', error);
    throw error;
  }
}

export { stripe };
