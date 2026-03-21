import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

/**
 * POST /api/webhook/stripe
 * Handle Stripe webhooks for subscription lifecycle events
 */
export async function POST(request: NextRequest) {
  try {
    const payload = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature || !webhookSecret) {
      return NextResponse.json(
        { error: 'Missing signature or webhook secret' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Handle different event types
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdated(subscription);
        break;
      }

      case 'customer.subscription.deleted':
      case 'customer.subscription.paused': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionCancelled(subscription);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        await handlePaymentFailed(invoice);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  // Store/update subscription in database
  // In production: Update Supabase/DynamoDB
  console.log('Subscription updated:', subscription.id, subscription.status);
  
  // If active, ensure customer is NOT in revocation list
  if (subscription.status === 'active') {
    await removeFromRevocationList(subscription.customer as string);
  }
}

async function handleSubscriptionCancelled(subscription: Stripe.Subscription) {
  // Add customer to revocation list
  console.log('Subscription cancelled:', subscription.id);
  await addToRevocationList(subscription.customer as string);
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  // Handle failed payment - may want to revoke after grace period
  console.log('Payment failed:', invoice.id);
}

async function addToRevocationList(customerId: string) {
  // In production: Add to revocation list in database
  // This will be checked by skills when validating tokens
  console.log('Adding to revocation list:', customerId);
}

async function removeFromRevocationList(customerId: string) {
  // In production: Remove from revocation list
  console.log('Removing from revocation list:', customerId);
}
