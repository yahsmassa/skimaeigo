"use server";

import { cookies } from "next/headers";
import { WebhookResponse } from "./paypay";
import { adminAuth, adminDb, FieldValue } from "./firebase-admin";

export async function signOut() {
  cookies().delete("session");
  return { success: true };
}

// プレミアムユーザーに設定するCloud Function
export const setPremiumStatus = async (uid: string) => {
  // 認証チェック
  if (!adminDb) return;
  if (!adminAuth) {
    throw new Error("認証が必要です");
  }
  // Custom Claimsを設定
  await adminAuth.setCustomUserClaims(uid, { premium: true });

  try {
    // ユーザーのトークンを更新するために、データベースに更新時間を記録
    await adminDb.collection("users").doc(uid).set(
      {
        premiumStatus: true,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    return { success: true };
  } catch (error) {
    console.error("Firestoreエラー:", error);
    return { success: false };
  }
};

export const setTransaction = async (transaction: WebhookResponse) => {
  // 認証チェック
  if (!adminDb) return;
  if (!adminAuth) {
    throw new Error("認証が必要です");
  }

  try {
    // ユーザーのトークンを更新するために、データベースに更新時間を記録
    await adminDb
      .collection("transaction")
      .doc(transaction.order_id)
      .set(transaction, { merge: true });

    return { success: true };
  } catch (error) {
    console.error("Firestoreエラー:", error);
    return { success: false };
  }
};
