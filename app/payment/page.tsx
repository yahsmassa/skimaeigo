"use client";
// 支払い成功ページ
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { handlePaymentSuccess } from "@/lib/payment";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";

export default function PaymentSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useAtom(userAtom);
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const processPayment = async () => {
      try {
        const sessionId = searchParams.get("session_id");

        if (!sessionId) {
          setError("セッションIDが見つかりません");
          setIsProcessing(false);
          return;
        }

        // 支払い成功を処理
        await handlePaymentSuccess(sessionId);

        // ユーザー情報を更新（プレミアムステータスを反映）
        if (user) {
          setUser({
            ...user,
            isPremium: true,
          });
        }

        setIsProcessing(false);

        // 3秒後にダッシュボードにリダイレクト
        setTimeout(() => {
          router.push("/dashboard");
        }, 3000);
      } catch (error: any) {
        setError(error.message || "支払い処理中にエラーが発生しました");
        setIsProcessing(false);
      }
    };

    processPayment();
  }, [searchParams, router, user, setUser]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow text-center">
        {isProcessing ? (
          <>
            <h2 className="text-2xl font-bold mb-4">支払いを処理中...</h2>
            <p>しばらくお待ちください。このページを閉じないでください。</p>
          </>
        ) : error ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              エラーが発生しました
            </h2>
            <p className="mb-4">{error}</p>
            <button
              onClick={() => router.push("/dashboard")}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              ダッシュボードに戻る
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              支払いが完了しました！
            </h2>
            <p className="mb-4">プレミアム機能が有効になりました。</p>
            <p className="text-sm text-gray-500 mb-4">
              まもなくダッシュボードにリダイレクトします...
            </p>
            <button
              onClick={() => router.push("/dashboard")}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              ダッシュボードに戻る
            </button>
          </>
        )}
      </div>
    </div>
  );
}
