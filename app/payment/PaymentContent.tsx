"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { store } from "@/lib/store";
import { useAuth } from "@/components/AuthProvider";

export default function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [user] = useAtom(userAtom, { store });
  const { loading } = useAuth();
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    // URLパラメータからステータスを取得
    const paymentStatus = searchParams.get("status");
    setStatus(paymentStatus);

    // 支払い成功時の処理
    if (paymentStatus === "success") {
      // 必要に応じてAPIを呼び出して支払い状態を確認・更新
      const verifyPayment = async () => {
        try {
          const response = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              sessionId: searchParams.get("session_id"),
              userId: user?.uid,
            }),
          });

          if (response.ok) {
            // 支払い確認後、ユーザー情報を更新
            // ここでは単純にダッシュボードにリダイレクト
            setTimeout(() => {
              router.push("/dashboard");
            }, 3000);
          }
        } catch (error) {
          console.error("支払い確認エラー:", error);
        }
      };

      if (user) {
        verifyPayment();
      }
    }
  }, [searchParams, user, router]);

  // ローディング中
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        ローディング中...
      </div>
    );
  }

  // ユーザーがログインしていない場合
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl mb-4">ログインが必要です</p>
        <button
          onClick={() => router.push("/signin")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ログインページへ
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {status === "success" ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">お支払いが完了しました！</h1>
          <p className="mb-6">プレミアム機能が有効になりました。</p>
          <p className="text-sm text-gray-600 mb-4">
            まもなくダッシュボードにリダイレクトします...
          </p>
          <button
            onClick={() => router.push("/dashboard")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ダッシュボードへ
          </button>
        </div>
      ) : status === "cancel" ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            お支払いがキャンセルされました
          </h1>
          <p className="mb-6">またのご利用をお待ちしております。</p>
          <button
            onClick={() => router.push("/dashboard")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ダッシュボードへ戻る
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">無効なリクエストです</h1>
          <p className="mb-6">正しい方法でお支払い手続きを行ってください。</p>
          <button
            onClick={() => router.push("/dashboard")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ダッシュボードへ
          </button>
        </div>
      )}
    </div>
  );
}
