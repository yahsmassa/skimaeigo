"use client";

import { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import { translateSentence, readSentence, getPaymentUrl } from "@/lib/util";
import { ReadTranslate } from "@/components/ReadTranslate";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { store } from "@/lib/store";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { signOut, getCurrentUser, User } from "@/lib/auth";
import { useAuth } from "@/components/AuthProvider";
import { isMobile } from "react-device-detect";
import { components, groupedComponents, Year } from "@/lib/utilExam";
import { cn } from "@/lib/util";
// import { getPaymentUrl } from "@/lib/paypay";

import {
  qrCodeCreate,
  paymentRefund,
  getPaymentDetail,
  getRefundDetail,
} from "@/lib/paypay";
export default function Home() {
  const router = useRouter();
  const [selectedYear, setSelectedYear] = useState<Year>("2025");
  const [selectedComponent, setSelectedComponent] = useState("Ex25_1");
  const [isSelected, setIsSelected] = useState(false);
  const [selection, setSelection] = useState("");
  const [user, setUser] = useAtom(userAtom, { store });
  const { loading } = useAuth();

  useEffect(() => {
    if (!user?.uid) return;
    // ユーザーのプレミアムステータスを監視
    const unsubscribePremium = onSnapshot(
      doc(db, "users", user.uid),
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          const _user = { ...user, isPremium: userData.premiumStatus || false };
          setUser(_user);
        }
      },
      (error) => {
        console.error("プレミアムステータスの監視エラー:", error);
      }
    );
    // クリーンアップ関数
    return () => {
      unsubscribePremium();
    };
  }, [user?.uid]);

  // ユーザーがログインしていない場合、サインインページにリダイレクト
  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [loading, user, router]);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then(() => {
            console.log("ServiceWorker registration successful");
          })
          .catch((err) => {
            console.log("ServiceWorker registration failed: ", err);
          });
      });
    }
  }, []);

  useEffect(() => {
    // 音声リストが利用可能になるのを待つ

    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        // 音声が利用可能
      }
    };

    speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    const handleKeyDown = async (e: KeyboardEvent) => {
      // Ctrl + R で音声読み上げ
      if (e.ctrlKey && e.key === "r") {
        e.preventDefault();
        console.log("read selection", selection);
        readSentence(selection);
      }
      // Ctrl + t で翻訳
      const isMac = navigator.userAgent.toUpperCase().indexOf("MAC") >= 0;
      console.log("isMac", isMac);

      if (
        (isMac && e.ctrlKey && e.key === "t") ||
        (!isMac && e.ctrlKey && e.key === "q")
      ) {
        e.preventDefault();
        await translateSentence(selection);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selection]);

  const handleSelection = useCallback(() => {
    const selectedText = window.getSelection()?.toString() || "";
    setIsSelected(!!selectedText && selectedText.length > 0);
    if (selectedText) {
      setSelection(selectedText);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelection);
    return () => {
      document.removeEventListener("selectionchange", handleSelection);
    };
  }, [handleSelection]);

  const refund = async () => {
    const result = await paymentRefund(
      "QneWLYorhTQljQlwJf02amMAqub2_20250304194630",
      "04655223243259265024"
    );
    console.log("result", result);
  };

  const getPaymentDetailInfo = async () => {
    const result = await getRefundDetail(
      "QneWLYorhTQljQlwJf02amMAqub2_20250304194630"
    );
    console.log("result", result);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("サインアウトエラー:", error);
    }
  };

  // ローディング中は何も表示しない
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        ローディング中...
      </div>
    );
  }
  // ユーザーがログインしていない場合も何も表示しない（useEffectでリダイレクトされる）
  if (!user) {
    return null;
  }

  const handlePayment = async () => {
    const url = await getPaymentUrl(user.uid);
    if (url) window.location.href = url;
  };
  // 以下のコードは、userが存在する場合のみ実行される
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value as Year;
    setSelectedYear(year);

    // 現在の問番号を取得（例："Ex25_5" → "5"）
    const currentProblemNumber = selectedComponent.split("_")[1];

    // 新しい年の問題リストから同じ問番号のものを探す
    const sameProblem = groupedComponents[year].find(
      (problem) => problem.id.split("_")[1] === currentProblemNumber
    );

    // 同じ問番号があればそれを選択、なければ最初の問題を選択
    setSelectedComponent(
      sameProblem ? sameProblem.id : groupedComponents[year][0].id
    );
  };

  const handleProblemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(e.target.value);
  };

  const selected = components.find((comp) => comp.id === selectedComponent);

  const test = async () => {
    // const user = await getCurrentUser();
    console.log(user);
  };

  return (
    <div className="mt-5 items-center justify-items-center min-h-screen p-0  pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      {/* ヘッダー */}
      <div className="flex justify-end gap-2 mb-5 w-full pr-5">
        <button
          onClick={handleSignOut}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm"
        >
          ログアウト
        </button>
        <button
          onClick={handlePayment}
          className={cn(
            "bg-blue-600 text-white px-4 py-2 rounded text-sm",
            user?.isPremium && "hidden"
          )}
        >
          {isMobile ? "有料会員登録" : "有料会員になって１０年分の問題を解く"}
        </button>
        <button
          onClick={test}
          // onClick={getPaymentDetailInfo}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          test
        </button>
      </div>

      {/* ヘッダー終わり */}
      <h1 className="ml-2 text-xl font-bold">共通テスト 英語</h1>
      <div className="sticky top-0 bg-white z-50 py-2 shadow-sm">
        <div className="flex items-center container mx-auto px-4">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            disabled={!user?.isPremium}
            className={cn(
              "ml-5 p-2 border rounded",
              !user?.isPremium && "bg-gray-200 text-black"
            )}
          >
            {(Object.keys(groupedComponents) as Year[])
              .reverse()
              .map((year) => (
                <option key={year} value={year}>
                  {year}年
                </option>
              ))}
          </select>
          <select
            value={selectedComponent}
            onChange={handleProblemChange}
            className="ml-2 p-2 border rounded"
          >
            {groupedComponents[selectedYear].map((problem) => (
              <option key={problem.id} value={problem.id}>
                {problem.label}
              </option>
            ))}
          </select>
          <ReadTranslate isSelected={isSelected} selectedText={selection} />
        </div>
      </div>
      <main className="gap-8 row-start-2 items-center sm:items-start">
        {selected &&
          (typeof selected.component === "function" ? (
            <selected.component />
          ) : (
            selected.component
          ))}
      </main>
    </div>
  );
}
