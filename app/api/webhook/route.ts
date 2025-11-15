import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { setPremiumStatus, setTransaction } from "@/lib/serverActionsFirebase";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const sig = headers().get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!sig || !webhookSecret) {
      return NextResponse.json(
        { error: "Missing webhook secret or signature" },
        { status: 400 }
      );
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (err) {
      console.error("Stripe signature verification failed:", err);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as any;
      const userId = session?.metadata?.userId;

      if (userId) {
        await setPremiumStatus(userId, session.id);
      }

      await setTransaction({
        provider: "stripe",
        id: session.id,
        user_id: userId,
        amount_total: session.amount_total,
        currency: session.currency,
        payment_status: session.payment_status,
        customer: session.customer,
        created: session.created * 1000,
        source: "webhook",
      });
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
