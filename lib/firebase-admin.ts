import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

// サーバーサイドでのみ実行されるようにする
const app = (() => {
  // クライアントサイドでは実行しない
  if (typeof window !== "undefined") {
    return undefined;
  }

  // すでに初期化されている場合は既存のインスタンスを返す
  if (getApps().length > 0) {
    return getApps()[0];
  }

  // 環境変数から認証情報を取得
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const clientEmail = process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Firebase Admin環境変数が設定されていません");
  }

  // 新しいアプリを初期化
  return initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
})();

// サーバーサイドでのみ実行される認証オブジェクト
const adminAuth = typeof window === "undefined" ? getAuth(app) : undefined;

export { app, adminAuth };
