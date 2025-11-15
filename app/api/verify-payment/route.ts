import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { setPremiumStatus, setTransaction } from "@/lib/serverActionsFirebase";

export async function POST(req: Request) {
  try {
    const { sessionId, userId } = await req.json();
    if (!sessionId || !userId) {
      return NextResponse.json(
        { error: "sessionId and userId are required" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent"],
    });

    if (session.payment_status === "paid") {
      // 購入反映（ユーザーをプレミアム化）
      await setPremiumStatus(userId, session.id);

      // 取引保存（最低限の情報を保存）
      await setTransaction({
        provider: "stripe",
        id: session.id,
        payment_intent:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id,
        amount_total: session.amount_total,
        currency: session.currency,
        customer: session.customer,
        user_id: userId,
        payment_status: session.payment_status,
        created: session.created * 1000,
      });

      return NextResponse.json({ ok: true }, { status: 200 });
    }

    return NextResponse.json(
      { error: "Payment not completed" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Verify payment error:", error);
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}


