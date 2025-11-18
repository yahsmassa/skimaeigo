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

      let tradeId =  typeof session.payment_intent === "string"
                        ? session.payment_intent
                        : session.payment_intent?.id;
      if (!tradeId)  tradeId = session.id;
      // 購入反映（ユーザーをプレミアム化）
      await setPremiumStatus(userId, tradeId);
      // await setPremiumStatus(userId, session.id);

      // JST (Asia/Tokyo) の yyyy-mm-dd hh:mm:ss 形式に変換
      const createdDate = new Date(session.created * 1000);
      const dtf = new Intl.DateTimeFormat("ja-JP", {
        timeZone: "Asia/Tokyo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const parts = dtf.formatToParts(createdDate).reduce<Record<string, string>>((acc, p) => {
        if (p.type !== "literal") acc[p.type] = p.value;
        return acc;
      }, {});
      const createdJst = `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;

      // 取引保存（最低限の情報を保存）
      await setTransaction({
        provider: "stripe",
        id: session.id,
        payment_intent: tradeId,
        amount_total: session.amount_total,
        user_id: userId,
        payment_status: session.payment_status,
        created: createdJst,
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


