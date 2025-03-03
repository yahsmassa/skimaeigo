"use client";

import { useState, useEffect, useCallback } from "react";
import { translateSentence, readSentence } from "@/lib/util";
import { ReadTranslate } from "@/components/ReadTranslate";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { signOut, getCurrentUser, User } from "@/lib/auth";
import { initiatePayment } from "@/lib/payment";
import { useAuth } from "@/components/AuthProvider";
import { isMobile } from "react-device-detect";
import { components, groupedComponents, Year } from "@/lib/utilExam";
import { cn } from "@/lib/util";
export default function Home() {
  const [selectedYear, setSelectedYear] = useState<Year>("2025");
  const [selectedComponent, setSelectedComponent] = useState("Ex25_1");
  const [isSelected, setIsSelected] = useState(false);
  const [selection, setSelection] = useState("");
  const router = useRouter();
  const [user, setUser] = useAtom(userAtom);
  const { loading } = useAuth();

  // ユーザーがログインしている場合、メインページにリダイレクト
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

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("サインアウトエラー:", error);
    }
  };

  const handleUpgrade = async () => {
    if (!user) return;

    try {
      // PayPayの支払い処理を開始
      await initiatePayment(user.uid);
    } catch (error) {
      console.error("支払い処理中にエラーが発生しました", error);
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
          onClick={handleUpgrade}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          {isMobile ? "有料会員登録" : "有料会員になって１０年分の問題を解く"}
        </button>
        {/* <button
          onClick={test}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          test
        </button> */}
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
