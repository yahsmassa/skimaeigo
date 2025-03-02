import { NextResponse } from "next/server";
import { initializeFirebaseAdmin } from "@/lib/firebase-admin";
import { getAuth } from "firebase-admin/auth";

export async function POST(request: Request) {
  try {
    initializeFirebaseAdmin();
    const { idToken } = await request.json();
    const auth = getAuth();
    const decodedToken = await auth.verifyIdToken(idToken);

    return NextResponse.json({ uid: decodedToken.uid });
  } catch (error) {
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }
}
