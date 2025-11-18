"use server";

import { cookies } from "next/headers";
import { adminAuth, adminDb, FieldValue } from "./firebase-admin";

export async function signOut() {
  cookies().delete("session");
  return { success: true };
}

// プレミアムユーザーに設定するCloud Function
export const setPremiumStatus = async (uid: string, orderId: string) => {
  // 認証チェック
  if (!adminDb) return;
  if (!adminAuth) {
    throw new Error("認証が必要です");
  }
  // Custom Claimsを設定
  await adminAuth.setCustomUserClaims(uid, { premium: true});

  try {
    // ユーザーのトークンを更新するために、データベースに更新時間を記録（ユーザーの最新の注文IDを記録）
    await adminDb.collection("users").doc(uid).set(
      {
        payment_intent: orderId,
        orderAt: FieldValue.serverTimestamp(),
        premium: true,
        source: "stripe"
      },
      { merge: true }
    );

    return { success: true };
  } catch (error) {
    console.error("Firestoreエラー:", error);
    return { success: false };
  }
};

export const setTransaction = async (transaction: any) => {
  // 認証チェック
  if (!adminDb) return;
  if (!adminAuth) {
    throw new Error("認証が必要です");
  }

  try {
    const docId =
      transaction?.payment_intent ||
      transaction?.id ||
      transaction?.order_id ||
      transaction?.session_id;
    if (!docId) {
      throw new Error("取引IDが特定できません");
    }
    await adminDb
      .collection("transaction")
      .doc(String(docId))
      .set(transaction, { merge: true });

    return { success: true };
  } catch (error) {
    console.error("Firestoreエラー:", error);
    return { success: false };
  }
};
