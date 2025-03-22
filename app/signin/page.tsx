"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { store } from "@/lib/store";
import { useAuth } from "@/components/AuthProvider";
import {
  qrCodeCreate,
  qrCodeDelete,
  paymentCancel,
  paymentCapture,
  paymentRevert,
} from "@/lib/paypay";
import {
  signInWithGoogle,
  signInWithApple,
  signInWithEmail,
  signUp,
  resetPassword,
} from "@/lib/auth";

export default function SignIn() {
  const router = useRouter();
  const [user, setUser] = useAtom(userAtom, { store });
  const { loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  // ユーザーがログインしていたらダッシュボードにリダイレクト
  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [loading, user, router]);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const user = await signInWithEmail(email, password);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const user = await signUp(email, password);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      const user = await signInWithApple();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError("パスワードリセットにはメールアドレスが必要です");
      return;
    }

    try {
      await resetPassword(email);
      alert("パスワードリセットのメールを送信しました");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const test = async () => {};
  // ローディング中は何も表示しない
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        認証中...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
        <Link
          href="/"
          className=" text-blue-700 underline text-base font-medium"
        >
          HOMEへ
        </Link>

        <div className="flex justify-center items-center w-full flex-wrap">
          <Image
            src="/icons/icon-192x192.png"
            alt="アプリアイコン"
            className="w-14 h-auto cursor-pointer"
            width={96}
            height={96}
            onClick={() => router.push("/")}
          />
        </div>

        <div className="flex items-center justify-center">
          <h2 className="text-center text-3xl font-bold">
            {isSignUp ? "アカウント作成" : "ログイン"}
          </h2>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form
          className="mt-8 space-y-6"
          onSubmit={isSignUp ? handleSignUp : handleEmailSignIn}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              パスワード
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              {isSignUp ? "アカウント作成" : "ログイン"}
            </button>
            {/* <button
              type="submit"
              className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              onClick={test}
            >
              PayPay
            </button> */}
          </div>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 hover:text-blue-800"
          >
            {isSignUp
              ? "既にアカウントをお持ちの方はこちら"
              : "アカウントをお持ちでない方はこちら"}
          </button>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={handleResetPassword}
            className="text-blue-600 hover:text-blue-800"
          >
            パスワードをお忘れの方
          </button>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">または</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <span className="hidden sm:inline">Googleでログイン</span>
              <span className="sm:hidden">
                Googleで
                <br />
                ログイン
              </span>
            </button>
            <button
              onClick={handleAppleSignIn}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <span className="hidden sm:inline">Appleでログイン</span>
              <span className="sm:hidden">
                Appleで
                <br />
                ログイン
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
