// app/api/auth/handler/route.ts
import { NextRequest, NextResponse } from 'next/server';

const FIREBASE_AUTH_DOMAIN = 'kyoutuu-39c3b.firebaseapp.com';

export async function GET(request: NextRequest): Promise<NextResponse> {
  return handleAuthRedirect(request);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return handleAuthRedirect(request);
}

function handleAuthRedirect(request: NextRequest): NextResponse {
  try {
    const url: URL = new URL(request.url);
    const queryParams: string = url.search;

    const firebaseAuthUrl: string = `https://${FIREBASE_AUTH_DOMAIN}/__/auth/handler${queryParams}`;

    return NextResponse.redirect(firebaseAuthUrl);
  } catch (error) {
    console.error('Firebase auth redirect error:', error);
    return NextResponse.redirect(`https://${FIREBASE_AUTH_DOMAIN}`);
  }
}