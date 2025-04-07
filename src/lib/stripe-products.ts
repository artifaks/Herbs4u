import { stripe } from './stripe';

// Map of ebook IDs to Stripe price IDs
// In a production environment, these would be stored in a database
export const ebookPriceMap: Record<string, string> = {
  '1': process.env.STRIPE_PRICE_EBOOK_1 || 'price_1234567890',
  '2': process.env.STRIPE_PRICE_EBOOK_2 || 'price_2345678901',
  '3': process.env.STRIPE_PRICE_EBOOK_3 || 'price_3456789012',
  // Add more mappings as needed
};

/**
 * Get the Stripe price ID for an ebook
 * @param ebookId The ID of the ebook (can be number or string UUID)
 * @returns The Stripe price ID
 */
export function getEbookPriceId(ebookId: number | string): string {
  // Convert to string to handle both numeric and UUID IDs
  const ebookIdStr = String(ebookId);
  
  // First check if we have a direct mapping
  const priceId = ebookPriceMap[ebookIdStr];
  if (priceId) {
    return priceId;
  }
  
  // For development purposes, use a hardcoded price ID based on the ebook ID
  // This ensures we have consistent price IDs for each ebook
  console.warn(`No Stripe price ID found for ebook ${ebookIdStr}, using fallback price`);
  
  // In production, you would use a real Stripe price ID
  // For development, use a fake price ID that's deterministic based on the ebook ID
  // This ensures each ebook gets the same price ID every time
  return `price_${ebookIdStr.substring(0, 8)}`;
}

/**
 * Create or update Stripe products and prices for ebooks
 * This should be run when new ebooks are added or prices change
 */
export async function syncEbooksWithStripe(ebooks: any[]) {
  const results = {
    created: 0,
    updated: 0,
    errors: 0,
  };

  for (const ebook of ebooks) {
    try {
      // Check if product exists
      let product;
      try {
        product = await stripe.products.retrieve(`ebook_${ebook.id}`);
      } catch (error) {
        // Product doesn't exist, create it
        product = await stripe.products.create({
          id: `ebook_${ebook.id}`,
          name: ebook.title,
          description: ebook.description || '',
          images: ebook.cover_image ? [ebook.cover_image] : [],
          metadata: {
            ebookId: ebook.id.toString(),
            slug: ebook.slug,
          },
        });
        results.created++;
      }

      // Check if price exists
      let price;
      const prices = await stripe.prices.list({
        product: product.id,
        active: true,
        limit: 1,
      });

      if (prices.data.length === 0) {
        // Create price
        price = await stripe.prices.create({
          product: product.id,
          unit_amount: Math.round(ebook.price * 100), // Convert to cents
          currency: 'usd',
          metadata: {
            ebookId: ebook.id.toString(),
          },
        });
        results.created++;
      } else {
        // Update price if needed
        price = prices.data[0];
        const currentAmount = price.unit_amount;
        const newAmount = Math.round(ebook.price * 100);
        
        if (currentAmount !== newAmount) {
          // Deactivate old price
          await stripe.prices.update(price.id, { active: false });
          
          // Create new price
          price = await stripe.prices.create({
            product: product.id,
            unit_amount: newAmount,
            currency: 'usd',
            metadata: {
              ebookId: ebook.id.toString(),
            },
          });
          results.updated++;
        }
      }

      // Update the price map
      ebookPriceMap[ebook.id] = price.id;
    } catch (error) {
      console.error(`Error syncing ebook ${ebook.id} with Stripe:`, error);
      results.errors++;
    }
  }

  return results;
}
