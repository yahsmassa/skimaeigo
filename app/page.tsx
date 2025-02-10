"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { translateTextGemini, translateTextDeepseek } from "@/lib/serverAction";

import Ex21_1A from "@/components/Ex21_1A";
import Ex21_1B from "@/components/Ex21_1B";
import Ex21_2A from "@/components/Ex21_2A";
import Ex21_2B from "@/components/Ex21_2B";
import Ex21_3A from "@/components/Ex21_3A";
import Ex21_3B from "@/components/Ex21_3B";
import Ex21_4 from "@/components/Ex21_4";
import Ex21_5 from "@/components/Ex21_5";
import Ex21_6A from "@/components/Ex21_6A";
import Ex21_6B from "@/components/Ex21_6B";
import Ex22_1A from "@/components/Ex22_1A";
import Ex22_1B from "@/components/Ex22_1B";
import Ex22_2A from "@/components/Ex22_2A";
import Ex22_2B from "@/components/Ex22_2B";
import Ex22_3A from "@/components/Ex22_3A";
import Ex22_3B from "@/components/Ex22_3B";
import Ex22_4 from "@/components/Ex22_4";
import Ex22_5 from "@/components/Ex22_5";
import Ex22_6A from "@/components/Ex22_6A";
import Ex22_6B from "@/components/Ex22_6B";
import Ex23_1A from "@/components/Ex23_1A";
import Ex23_1B from "@/components/Ex23_1B";
import Ex23_2A from "@/components/Ex23_2A";
import Ex23_2B from "@/components/Ex23_2B";
import Ex23_3A from "@/components/Ex23_3A";
import Ex23_3B from "@/components/Ex23_3B";
import Ex23_4 from "@/components/Ex23_4";
import Ex23_5 from "@/components/Ex23_5";
import Ex23_6A from "@/components/Ex23_6A";
import Ex23_6B from "@/components/Ex23_6B";
import Ex24_1A from "@/components/Ex24_1A";
import Ex24_1B from "@/components/Ex24_1B";
import Ex24_2A from "@/components/Ex24_2A";
import Ex24_2B from "@/components/Ex24_2B";
import Ex24_3A from "@/components/Ex24_3A";
import Ex24_3B from "@/components/Ex24_3B";
import Ex24_4 from "@/components/Ex24_4";
import Ex24_5 from "@/components/Ex24_5";
import Ex24_6A from "@/components/Ex24_6A";
import Ex24_6B from "@/components/Ex24_6B";
import Ex25_1 from "@/components/Ex25_1";
import Ex25_2 from "@/components/Ex25_2";
import Ex25_3 from "@/components/Ex25_3";
import Ex25_4 from "@/components/Ex25_4";
import Ex25_5 from "@/components/Ex25_5";
import Ex25_6 from "@/components/Ex25_6";
import Ex25_7 from "@/components/Ex25_7";
import Ex25_8 from "@/components/Ex25_8";

const components = [
  { id: "Ex21_1A", label: "2021年 問1 A", component: <Ex21_1A /> },
  { id: "Ex21_1B", label: "2021年 問1 B", component: <Ex21_1B /> },
  { id: "Ex21_2A", label: "2021年 問2 A", component: <Ex21_2A /> },
  { id: "Ex21_2B", label: "2021年 問2 B", component: <Ex21_2B /> },
  { id: "Ex21_3A", label: "2021年 問3 A", component: <Ex21_3A /> },
  { id: "Ex21_3B", label: "2021年 問3 B", component: <Ex21_3B /> },
  { id: "Ex21_4", label: "2021年 問4", component: <Ex21_4 /> },
  { id: "Ex21_5", label: "2021年 問5", component: <Ex21_5 /> },
  { id: "Ex21_6A", label: "2021年 問6 A", component: <Ex21_6A /> },
  { id: "Ex21_6B", label: "2021年 問6 B", component: <Ex21_6B /> },
  { id: "Ex22_1A", label: "2022年 問1 A", component: <Ex22_1A /> },
  { id: "Ex22_1B", label: "2022年 問1 B", component: <Ex22_1B /> },
  { id: "Ex22_2A", label: "2022年 問2 A", component: <Ex22_2A /> },
  { id: "Ex22_2B", label: "2022年 問2 B", component: <Ex22_2B /> },
  { id: "Ex22_3A", label: "2022年 問3 A", component: <Ex22_3A /> },
  { id: "Ex22_3B", label: "2022年 問3 B", component: <Ex22_3B /> },
  { id: "Ex22_4", label: "2022年 問4", component: <Ex22_4 /> },
  { id: "Ex22_5", label: "2022年 問5", component: <Ex22_5 /> },
  { id: "Ex22_6A", label: "2022年 問6 A", component: <Ex22_6A /> },
  { id: "Ex22_6B", label: "2022年 問6 B", component: <Ex22_6B /> },
  { id: "Ex23_1A", label: "2023年 問1 A", component: <Ex23_1A /> },
  { id: "Ex23_1B", label: "2023年 問1 B", component: <Ex23_1B /> },
  { id: "Ex23_2A", label: "2023年 問2 A", component: <Ex23_2A /> },
  { id: "Ex23_2B", label: "2023年 問2 B", component: <Ex23_2B /> },
  { id: "Ex23_3A", label: "2023年 問3 A", component: <Ex23_3A /> },
  { id: "Ex23_3B", label: "2023年 問3 B", component: <Ex23_3B /> },
  { id: "Ex23_4", label: "2023年 問4", component: <Ex23_4 /> },
  { id: "Ex23_5", label: "2023年 問5", component: <Ex23_5 /> },
  { id: "Ex23_6A", label: "2023年 問6 A", component: <Ex23_6A /> },
  { id: "Ex23_6B", label: "2023年 問6 B", component: <Ex23_6B /> },
  { id: "Ex25_1", label: "2025年 問1", component: <Ex25_1 /> },
  { id: "Ex25_2", label: "2025年 問2", component: <Ex25_2 /> },
  { id: "Ex25_3", label: "2025年 問3", component: <Ex25_3 /> },
  { id: "Ex25_4", label: "2025年 問4", component: <Ex25_4 /> },
  { id: "Ex25_5", label: "2025年 問5", component: <Ex25_5 /> },
  { id: "Ex25_6", label: "2025年 問6", component: <Ex25_6 /> },
  { id: "Ex25_7", label: "2025年 問7", component: <Ex25_7 /> },
  { id: "Ex25_8", label: "2025年 問8", component: <Ex25_8 /> },
  { id: "Ex24_1A", label: "2024年 問1 A", component: <Ex24_1A /> },
  { id: "Ex24_1B", label: "2024年 問1 B", component: <Ex24_1B /> },
  { id: "Ex24_2A", label: "2024年 問2 A", component: <Ex24_2A /> },
  { id: "Ex24_2B", label: "2024年 問2 B", component: <Ex24_2B /> },
  { id: "Ex24_3A", label: "2024年 問3 A", component: <Ex24_3A /> },
  { id: "Ex24_3B", label: "2024年 問3 B", component: <Ex24_3B /> },
  { id: "Ex24_4", label: "2024年 問4", component: <Ex24_4 /> },
  { id: "Ex24_5", label: "2024年 問5", component: <Ex24_5 /> },
  { id: "Ex24_6A", label: "2024年 問6 A", component: <Ex24_6A /> },
  { id: "Ex24_6B", label: "2024年 問6 B", component: <Ex24_6B /> },
];

type Year = "2021" | "2022" | "2023" | "2024" | "2025";
type Problem = { id: string; label: string };
type GroupedComponents = Record<Year, Problem[]>;

const groupedComponents: GroupedComponents = {
  "2021": [
    { id: "Ex21_1A", label: "問1 A" },
    { id: "Ex21_1B", label: "問1 B" },
    { id: "Ex21_2A", label: "問2 A" },
    { id: "Ex21_2B", label: "問2 B" },
    { id: "Ex21_3A", label: "問3 A" },
    { id: "Ex21_3B", label: "問3 B" },
    { id: "Ex21_4", label: "問4" },
    { id: "Ex21_5", label: "問5" },
    { id: "Ex21_6A", label: "問6 A" },
    { id: "Ex21_6B", label: "問6 B" },
  ],
  "2022": [
    { id: "Ex22_1A", label: "問1 A" },
    { id: "Ex22_1B", label: "問1 B" },
    { id: "Ex22_2A", label: "問2 A" },
    { id: "Ex22_2B", label: "問2 B" },
    { id: "Ex22_3A", label: "問3 A" },
    { id: "Ex22_3B", label: "問3 B" },
    { id: "Ex22_4", label: "問4" },
    { id: "Ex22_5", label: "問5" },
    { id: "Ex22_6A", label: "問6 A" },
    { id: "Ex22_6B", label: "問6 B" },
  ],
  "2023": [
    { id: "Ex23_1A", label: "問1 A" },
    { id: "Ex23_1B", label: "問1 B" },
    { id: "Ex23_2A", label: "問2 A" },
    { id: "Ex23_2B", label: "問2 B" },
    { id: "Ex23_3A", label: "問3 A" },
    { id: "Ex23_3B", label: "問3 B" },
    { id: "Ex23_4", label: "問4" },
    { id: "Ex23_5", label: "問5" },
    { id: "Ex23_6A", label: "問6 A" },
    { id: "Ex23_6B", label: "問6 B" },
  ],
  "2024": [
    { id: "Ex24_1A", label: "問1 A" },
    { id: "Ex24_1B", label: "問1 B" },
    { id: "Ex24_2A", label: "問2 A" },
    { id: "Ex24_2B", label: "問2 B" },
    { id: "Ex24_3A", label: "問3 A" },
    { id: "Ex24_3B", label: "問3 B" },
    { id: "Ex24_4", label: "問4" },
    { id: "Ex24_5", label: "問5" },
    { id: "Ex24_6A", label: "問6 A" },
    { id: "Ex24_6B", label: "問6 B" },
  ],
  "2025": [
    { id: "Ex25_1", label: "問1" },
    { id: "Ex25_2", label: "問2" },
    { id: "Ex25_3", label: "問3" },
    { id: "Ex25_4", label: "問4" },
    { id: "Ex25_5", label: "問5" },
    { id: "Ex25_6", label: "問6" },
    { id: "Ex25_7", label: "問7" },
    { id: "Ex25_8", label: "問8" },
  ],
};

const readSentence = () => {
  const selectedText = window.getSelection()?.toString();
  if (!selectedText) return;

  // 音声リストが利用可能になるのを待つ
  const waitForVoices = () => {
    return new Promise<void>((resolve) => {
      const voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        resolve();
      } else {
        speechSynthesis.onvoiceschanged = () => {
          resolve();
        };
      }
    });
  };

  waitForVoices().then(() => {
    const utterance = new SpeechSynthesisUtterance(selectedText);
    utterance.lang = "en-US";

    // Safari用に音声を明示的に選択
    const voices = speechSynthesis.getVoices();
    const englishVoice = voices.find(
      (voice) => voice.lang === "en-US" && voice.name.includes("Samantha") // Safariのデフォルト音声
    );

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    // 速度やピッチを調整（必要に応じて）
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    speechSynthesis.speak(utterance);
  });
};

const translateSentence = async () => {
  const selectedText = window.getSelection()?.toString();
  if (!selectedText) {
    Swal.fire({
      title: "エラー",
      text: "英文が選択されていません",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  // ローディング表示
  Swal.fire({
    title: "翻訳中...",
    text: "Requesting...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const prompt =
      "あなたは優秀な英語教師です、以下の英文を日本語に翻訳し、その後、改行して熟語・慣用句が含まれていたら、箇条書きで指摘してください  " +
      selectedText;
    const result = await translateTextGemini(prompt);
    // const result = (await translateTextDeepseek(prompt)) || "";
    const formattedResult = result.replace(/\n/g, "<br/>"); // 改行を<br/>に変換
    // console.log("formattedResult", formattedResult);
    Swal.fire({
      title: "解説",
      html: formattedResult,
      confirmButtonText: "OK",
      width: "500px",
    });
  } catch (error) {
    Swal.fire({
      title: "エラー",
      text: "翻訳に失敗しました",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

export default function Home() {
  const [selectedYear, setSelectedYear] = useState<Year>("2025");
  const [selectedComponent, setSelectedComponent] = useState("Ex25_1");

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value as Year;
    setSelectedYear(year);
    setSelectedComponent(groupedComponents[year][0].id);
  };

  const handleProblemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(e.target.value);
  };

  const selected = components.find((comp) => comp.id === selectedComponent);

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

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + R で音声読み上げ
      if (e.ctrlKey && e.key === "r") {
        e.preventDefault();
        readSentence();
      }
      // Ctrl + t で翻訳
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

      if (
        (isMac && e.ctrlKey && e.key === "t") ||
        (!isMac && e.ctrlKey && e.key === "q")
      ) {
        e.preventDefault();
        translateSentence();
        return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="mt-7 items-center justify-items-center min-h-screen p-0  pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="gap-8 row-start-2 items-center sm:items-start">
        <div className="flex items-center">
          <h1 className="ml-2 text-xl font-bold ">共通テスト 英語</h1>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="ml-5 p-2 border rounded"
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
        </div>

        {selected && selected.component}
      </main>
    </div>
  );
}
