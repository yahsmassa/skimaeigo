// src/lib/stripe.ts
import Stripe from "stripe";

const stripeSecretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-06-20",
});


