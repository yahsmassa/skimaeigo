"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { userAtom } from "@/atoms/userAtom";
import { useAtom } from "jotai";
import { store } from "@/lib/store";
import { User, getUserData } from "@/lib/auth";

// 認証コンテキストの型定義
type AuthContextType = {
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({ loading: true });

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useAtom(userAtom, { store });
  const router = useRouter();

  useEffect(() => {
    // Firebase認証状態の監視
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          // ユーザーがログインしている場合
          const userData = await getUserData(firebaseUser);
          setUser(userData);

          // IDトークンを取得してセッションCookieを作成
          const idToken = await firebaseUser.getIdToken();

          // セッションCookieを作成するためのAPIリクエスト
          await fetch("/api/auth/session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idToken }),
          });
        } else {
          // ユーザーがログアウトしている場合
          setUser(null);
        }
      } catch (error) {
        console.error("認証状態の処理中にエラーが発生しました", error);
      } finally {
        setLoading(false);
      }
    });

    // クリーンアップ関数
    return () => unsubscribe();
  }, [setUser]);

  return (
    <AuthContext.Provider value={{ loading }}>{children}</AuthContext.Provider>
  );
}
