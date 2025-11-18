"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Swal from "sweetalert2";
import { translateSentence, readSentence, getPaymentUrl, stopReading,  explainGrammer } from "@/lib/util";
import {
  signInWithGoogle,
  signInWithApple,
} from "@/lib/auth";
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
import TikTokLink from "@/components/TikTokLink";
import { cn } from "@/lib/util";
import { Home as HomeIcon } from "lucide-react";
// import { getPaymentUrl } from "@/lib/paypay";



export default function Home() {
  const router = useRouter();
  const [selectedYear, setSelectedYear] = useState<Year>("2025");
  const [selectedComponent, setSelectedComponent] = useState("Ex25_1");
  const [isSelected, setIsSelected] = useState(false);
  const [selection, setSelection] = useState("");
  const [user, setUser] = useAtom(userAtom, { store });
  const { loading } = useAuth();
  const [error, setError] = useState("");

  // 選択されたテキストを一時的に保存するためのref
  const savedSelectionRef = useRef("");
  const isButtonClickedRef = useRef(false);
  const lastSelectionRangeRef = useRef<Range | null>(null);
  // デバウンス用のref
  const selectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 音声合成の初期化状態を管理
  const [voicesLoaded, setVoicesLoaded] = useState(false);

  useEffect(() => {
    if (!user?.uid) return;

    // プレミアムユーザーの場合は監視を停止（既にプレミアムなので変更の可能性が低い）
    if (user.isPremium) return;

    // ユーザーのプレミアムステータスを監視、支払いが終わったあとトリガー
    const unsubscribePremium = onSnapshot(
      doc(db, "users", user.uid),
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          if (!user.isPremium && userData.orderAt) {
            setUser({ ...user, isPremium: true }); // Web内での変数を更新
            const now = new Date().getTime();
            const orderTime = new Date(userData.orderAt).getTime();
            const timeDiff = now - orderTime;
            if (timeDiff <= 10000) { // 10秒 = 10000ミリ秒
              Swal.fire({
                title: "プレミアム会員登録完了",
                html: "購入ありがとうございます</br>過去１０年分の問題を解けるようになりました！",
                icon: "success",
              });
            }
            // プレミアムになったら監視を停止
            unsubscribePremium();
          }
        }
      },
      (error) => {
        console.error("情報更新監視エラー:", error);
      }
    );
    // クリーンアップ関数
    return () => {
      unsubscribePremium();
    };
  }, [user?.uid, user?.isPremium]);

  // アクセス制御: 未ログイン→2025年第1問のみ、ログイン→2025年のみ、プレミアム→全期間
  useEffect(() => {
    // 未ログインの場合は 2025 / Ex25_1 に固定
    if (!user) {
      if (selectedYear !== "2025") setSelectedYear("2025");
      if (selectedComponent !== "Ex25_1") setSelectedComponent("Ex25_1");
      return;
    }
    // ログイン済み・非プレミアムは 2025年のみ
    if (user && !user.isPremium) {
      if (selectedYear !== "2025") setSelectedYear("2025");
      // 2025年以外の問題が選択されていたら、2025年の先頭に寄せる
      if (!selectedComponent.startsWith("Ex25_")) {
        setSelectedComponent(groupedComponents["2025"][0].id);
      }
    }
  }, [user, selectedYear, selectedComponent]);

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
    const handleSelectionChange = () => {
      // デバウンス処理（100ms）
      if (selectionTimeoutRef.current) {
        clearTimeout(selectionTimeoutRef.current);
      }

      selectionTimeoutRef.current = setTimeout(() => {
        const selectedText = window.getSelection()?.toString() || '';
        if (selectedText.length === 0) {
          stopReading();
        }
      }, 100);
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      if (selectionTimeoutRef.current) {
        clearTimeout(selectionTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // 音声リストが利用可能になるのを待つ（遅延初期化）
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      if (voices.length > 0 && !voicesLoaded) {
        setVoicesLoaded(true);
      }
    };

    // 初回のみ実行
    if (!voicesLoaded) {
      speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
    }

    const handleKeyDown = async (e: KeyboardEvent) => {
      // Ctrl + R で音声読み上げ
      if (e.ctrlKey && e.key === "r") {
        e.preventDefault();
        readSentence(selection);
      }
      if (e.ctrlKey && e.key === "w") {
        e.preventDefault();
        explainGrammer(selection);
      }
      // Ctrl + u でユーザー情報表示
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        console.log("user", user);
      }
      // Ctrl + g でユーザー情報表示
      if (e.ctrlKey && e.key === "g") {
        e.preventDefault();
        explainGrammer(selection);
      }
      // Ctrl + t で翻訳
      const isMac = navigator.userAgent.toUpperCase().indexOf("MAC") >= 0;

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
  }, [selection, voicesLoaded]);

  const handleSelection = useCallback(() => {
    const selectedText = window.getSelection()?.toString() || "";

    // ボタンがクリックされた直後でない場合のみ選択状態を更新
    if (!isButtonClickedRef.current) {
      const newIsSelected = !!selectedText && selectedText.length > 0;

      // 状態が変更された場合のみ更新（レンダリング削減）
      if (newIsSelected !== isSelected) {
        setIsSelected(newIsSelected);
      }

      if (selectedText && selectedText !== selection) {
        setSelection(selectedText);
        savedSelectionRef.current = selectedText;
        // 選択範囲を保存
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          lastSelectionRangeRef.current = selection.getRangeAt(0).cloneRange();
        }
      } else if (!selectedText && selection !== "") {
        setSelection("");
        savedSelectionRef.current = "";
        lastSelectionRangeRef.current = null;
      }
    } else {
      // ボタンクリック後の選択解除を無視し、保存されたテキストを使用
      isButtonClickedRef.current = false;
    }
  }, [isSelected, selection]);

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelection);
    return () => {
      document.removeEventListener("selectionchange", handleSelection);
    };
  }, [handleSelection]);

  // ボタンクリック時の処理を追加
  const handleButtonClick = useCallback(() => {
    isButtonClickedRef.current = true;
    // 保存されたテキストがある場合はそれを使用
    if (savedSelectionRef.current) {
      setSelection(savedSelectionRef.current);
      setIsSelected(true);

      // 選択範囲を復元
      if (lastSelectionRangeRef.current) {
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(lastSelectionRangeRef.current);
        }
      }
    }

    // 少し遅延させてからフラグをリセット（選択解除イベントが処理されるのを待つ）
    setTimeout(() => {
      isButtonClickedRef.current = false;
    }, 100);
  }, []);

  // タッチデバイスでの選択範囲維持のための追加処理
  useEffect(() => {
    // モバイルデバイスでのみ実行
    if (!isMobile) return;

    let touchStartTime = 0;
    const TOUCH_THRESHOLD = 200; // 200ms以上のタッチのみ処理

    const handleTouchStart = (e: TouchEvent) => {
      touchStartTime = Date.now();
      // タッチ開始時に選択範囲を保存
      const currentSelection = window.getSelection()?.toString() || "";
      if (currentSelection) {
        savedSelectionRef.current = currentSelection;
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          lastSelectionRangeRef.current = selection.getRangeAt(0).cloneRange();
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchDuration = Date.now() - touchStartTime;

      // 短いタッチは無視（スクロールなどの誤動作を防ぐ）
      if (touchDuration < TOUCH_THRESHOLD) return;

      // タッチ終了時に選択範囲が解除されても、保存されたテキストを維持
      if (savedSelectionRef.current && !window.getSelection()?.toString()) {
        setSelection(savedSelectionRef.current);
        setIsSelected(true);

        // 選択範囲を復元
        if (lastSelectionRangeRef.current) {
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(lastSelectionRangeRef.current);
          }
        }
      }
    };

    // パッシブリスナーを使用してパフォーマンス向上
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);



  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("サインアウトエラー:", error);
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

  // ローディング中は何も表示しない
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        ユーザー認証中...
      </div>
    );
  }

  const handlePayment = async () => {
    if (!user) {
      router.push("/signin");
      return;
    }
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
      {/* <h1 className="text-blue-500 text-xl font-bold mb-2 bg-blue-100 p-2 rounded-md">７月末まで有料機能を無料開放！</h1> */}
      <div className="flex justify-end gap-2 mb-5 w-full pr-5 max-w-[700px] mx-auto">
       { user?.isPremium &&  <img
          src="/icons/192P.png"
          alt="App Icon"
          className="w-9 h-9 self-center"
        /> }
        <button
          onClick={() => router.push("/?from=dashboard")}
          className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 flex items-center justify-center"
          aria-label="ホームへ"
        >
          <HomeIcon size={20} className="text-white" />
        </button>
        {!user && (
          <button
            onClick={() => router.push("/signin")}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
          >
            ログイン
          </button>
        )}
        {user && (
          <button
            onClick={handleSignOut}
            className="bg-blue-500 text-white px-4 py-2 rounded font-bold text-sm"
          >
            ログアウト
          </button>
        )}
        {user && !user.isPremium && (
          <button
            onClick={handlePayment}
            className={cn("bg-blue-600 text-white px-4 py-2 rounded text-sm")}
          >
            {/* 有料会員登録 */}
            {isMobile ? "１０年分有料版" : "５００円で１０年分フルアクセス"}
          </button>
        )}
        {/* <button
          onClick={test}
          // onClick={getPaymentDetailInfo}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          test
        </button> */}
      </div>

      {/* ヘッダー終わり */}
      <h1 className="ml-2 text-xl font-bold">
        {(Number(selectedYear) < 2021 ? "センター試験" : "共通テスト") +
          " 英語"}
      </h1>
      <div className="sticky top-0 bg-white z-50 py-2 shadow-sm">
        <div className="flex items-center container mx-auto px-4">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            disabled={!user?.isPremium}
            className={cn(
              "ml-5 p-2 border rounded"
              , !user?.isPremium && "bg-gray-200 text-black"
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
            {(user
              ? user.isPremium
                ? groupedComponents[selectedYear]
                : groupedComponents["2025"]
              : groupedComponents["2025"].filter((p) => p.id === "Ex25_1")
            ).map((problem) => (
              <option key={problem.id} value={problem.id}>
                {problem.label}
              </option>
            ))}
          </select>
          <ReadTranslate
            isSelected={isSelected}
            selectedText={selection}
            onButtonClick={handleButtonClick}
          />
        {/* ここに、publicフォルダにあるtiktok.webpを表示 */}
        <div className="">
          <TikTokLink componentName={selectedComponent} />
        </div>
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
