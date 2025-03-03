// app/api/auth/signout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    // セッションCookieを削除
    cookies().delete("session");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("サインアウトエラー:", error);
    return NextResponse.json(
      { error: "サインアウトに失敗しました" },
      { status: 500 }
    );
  }
}
