"use server";

import { cookies } from "next/headers";
import { getAuth } from "firebase-admin/auth";

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export async function signOut() {
  cookies().delete("session");
  return { success: true };
}
// 初期化が重複しないように確認してから初期化する
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

// プレミアムユーザーに設定するCloud Function
export const setPremiumStatus = functions.https.onCall(async (request) => {
  // 認証チェック
  if (!request.auth) {
    throw new functions.https.HttpsError("unauthenticated", "認証が必要です");
  }

  const uid = request.data.userId || request.auth.uid;

  // Custom Claimsを設定
  await admin.auth().setCustomUserClaims(uid, { premium: true });

  // ユーザーのトークンを更新するために、データベースに更新時間を記録
  await admin.firestore().collection("users").doc(uid).set(
    {
      premiumStatus: true,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  return { success: true };
});

// PayPayの支払いセッションを作成するCloud Function
export const createPaymentSession = functions.https.onCall(async (request) => {
  // 認証チェック
  if (!request.auth) {
    throw new functions.https.HttpsError("unauthenticated", "認証が必要です");
  }

  const uid = request.auth.uid;

  // ここでPayPayのAPIを呼び出して支払いセッションを作成
  // 実際のコードはPayPayのAPIドキュメントに従って実装

  // 仮の実装（実際にはPayPayのAPIを使用）
  const sessionId = `session_${Date.now()}`;
  const returnUrl = `https://yourdomain.com/payment/success?session_id=${sessionId}`;
  const cancelUrl = `https://yourdomain.com/dashboard`;

  // セッション情報をFirestoreに保存
  await admin.firestore().collection("paymentSessions").doc(sessionId).set({
    userId: uid,
    status: "pending",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  // 支払いURLを返す
  return {
    url: `https://paypay-mock.com/pay?session_id=${sessionId}&return_url=${encodeURIComponent(
      returnUrl
    )}&cancel_url=${encodeURIComponent(cancelUrl)}`,
  };
});

// 支払い成功を確認するCloud Function
export const confirmPayment = functions.https.onCall(async (request) => {
  const { sessionId } = request.data;

  // セッション情報を取得
  const sessionDoc = await admin
    .firestore()
    .collection("paymentSessions")
    .doc(sessionId)
    .get();

  if (!sessionDoc.exists) {
    throw new functions.https.HttpsError(
      "not-found",
      "支払いセッションが見つかりません"
    );
  }

  const sessionData = sessionDoc.data();

  // 支払い状態を確認（実際にはPayPayのAPIで確認）
  // 仮の実装
  const paymentSuccessful = true;

  if (paymentSuccessful) {
    // ユーザーをプレミアムに設定
    await admin
      .auth()
      .setCustomUserClaims(sessionData!.userId, { premium: true });

    // セッション状態を更新
    await admin
      .firestore()
      .collection("paymentSessions")
      .doc(sessionId)
      .update({
        status: "completed",
        completedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

    // ユーザー情報も更新
    await admin.firestore().collection("users").doc(sessionData!.userId).set(
      {
        premiumStatus: true,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    return { success: true };
  } else {
    // 支払いが失敗した場合
    await admin
      .firestore()
      .collection("paymentSessions")
      .doc(sessionId)
      .update({
        status: "failed",
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

    throw new functions.https.HttpsError(
      "aborted",
      "支払いが完了しませんでした"
    );
  }
});
