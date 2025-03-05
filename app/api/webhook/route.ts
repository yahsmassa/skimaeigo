import { NextResponse } from "next/server";
import { setPremiumStatus, setTransaction } from "@/lib/serverActionsFirebase";

export async function POST(req: Request) {
  try {
    // 署名検証のため、生のリクエストボディを取得
    const rawBody = await req.text();
    const body = JSON.parse(rawBody);
    const uid = body.merchant_order_id.split("_")[0];
    // 支払い完了 (`PAYMENT_COMPLETED`) の場合のみ処理
    if (
      body.state.toUpperCase() === "COMPLETED" &&
      body.notification_type.toUpperCase() === "TRANSACTION"
    ) {
      await setPremiumStatus(uid);
      await setTransaction(body);
      // console.log("Received PayPay Webhook:", body);

      return NextResponse.json(
        { message: "Webhook processed successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Ignored event" }, { status: 200 });
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
