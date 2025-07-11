"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Swal from "sweetalert2";
import { translateSentence, readSentence, getPaymentUrl, stopReading,  explainGrammer } from "@/lib/util";
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

  // 選択されたテキストを一時的に保存するためのref
  const savedSelectionRef = useRef("");
  const isButtonClickedRef = useRef(false);
  const lastSelectionRangeRef = useRef<Range | null>(null);

  useEffect(() => {
    if (!user?.uid) return;
    // ユーザーのプレミアムステータスを監視、支払いが終わったあとトリガー
    const unsubscribePremium = onSnapshot(
      doc(db, "users", user.uid),
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          // console.log("userData", userData);
          // console.log("user", user);
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
    const handleSelectionChange = () => {
      const selectedText = window.getSelection()?.toString() || '';
      if (selectedText.length === 0) {
        stopReading();
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
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
        // console.log("read selection", selection);
        readSentence(selection);
      }
      if (e.ctrlKey && e.key === "w") {
        e.preventDefault();
        // console.log("read selection", selection);
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
      // console.log("isMac", isMac);

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

    // ボタンがクリックされた直後でない場合のみ選択状態を更新
    if (!isButtonClickedRef.current) {
      setIsSelected(!!selectedText && selectedText.length > 0);
      if (selectedText) {
        setSelection(selectedText);
        savedSelectionRef.current = selectedText;
        // 選択範囲を保存
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          lastSelectionRangeRef.current = selection.getRangeAt(0).cloneRange();
        }
      } else {
        setSelection("");
        savedSelectionRef.current = "";
        lastSelectionRangeRef.current = null;
      }
    } else {
      // ボタンクリック後の選択解除を無視し、保存されたテキストを使用
      isButtonClickedRef.current = false;
    }
  }, []);

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
    const handleTouchStart = () => {
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

    const handleTouchEnd = () => {
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

    // タッチデバイスの場合のみイベントリスナーを追加
    if (isMobile) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isMobile]);

  // SweetAlert2のダイアログ表示時とダイアログ閉じた時の処理
  useEffect(() => {
    const handleSwalOpen = () => {
      // ダイアログ表示時に選択範囲を一時的に非表示にする
      if (isMobile && lastSelectionRangeRef.current) {
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
        }
      }
      // bodyにクラスを追加してCSSで選択範囲を制御
      document.body.classList.add('swal2-active');
    };

    const handleSwalClose = () => {
      // ダイアログ閉じた時に選択範囲を復元
      if (isMobile && lastSelectionRangeRef.current && savedSelectionRef.current) {
        setTimeout(() => {
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(lastSelectionRangeRef.current!);
          }
        }, 100);
      }
      // bodyからクラスを削除
      document.body.classList.remove('swal2-active');
    };

    // SweetAlert2のイベントを監視
    if (isMobile) {
      // SweetAlert2のイベントリスナーを追加
      document.addEventListener('swal:open', handleSwalOpen);
      document.addEventListener('swal:close', handleSwalClose);

      // SweetAlert2のモーダル要素を監視
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                if (element.classList.contains('swal2-container')) {
                  handleSwalOpen();
                }
              }
            });
            mutation.removedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                if (element.classList.contains('swal2-container')) {
                  handleSwalClose();
                }
              }
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => {
        document.removeEventListener('swal:open', handleSwalOpen);
        document.removeEventListener('swal:close', handleSwalClose);
        observer.disconnect();
        // クリーンアップ時にクラスを削除
        document.body.classList.remove('swal2-active');
      };
    }
  }, [isMobile]);

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
        ユーザー認証中...
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
      <h1 className="text-blue-500 text-xl font-bold mb-2 bg-blue-100 p-2 rounded-md">７月末まで有料機能を無料開放！</h1>
      <div className="flex justify-end gap-2 mb-5 w-full pr-5">
        <button
          onClick={handleSignOut}
          className="bg-blue-500 text-white px-4 py-2 rounded font-bold text-sm"
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
          有料会員登録
          {/* {isMobile ? "有料会員登録" : "有料会員になって１０年分の問題を解く"} */}
        </button>
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
            // disabled={!user?.isPremium}
            className={cn(
              "ml-5 p-2 border rounded"
              // , !user?.isPremium && "bg-gray-200 text-black"
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
          <ReadTranslate
            isSelected={isSelected}
            selectedText={selection}
            onButtonClick={handleButtonClick}
          />
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
