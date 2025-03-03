// app/api/auth/session/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebase-admin";

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();

    if (!adminAuth) {
      throw new Error("Firebase Admin認証が初期化されていません");
    }

    // セッションCookieを作成（有効期間は2週間）
    const expiresIn = 60 * 60 * 24 * 14 * 1000; // 2週間
    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn,
    });

    // Cookieを設定
    cookies().set({
      name: "session",
      value: sessionCookie,
      maxAge: expiresIn / 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("セッションCookie作成エラー:", error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
