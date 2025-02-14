"use client";

import { useState, useEffect, useCallback } from "react";
import { translateSentence, readSentence } from "@/lib/util";
import { ReadTranslate } from "@/components/ReadTranslate";
import { isMobile } from "react-device-detect";

import Ex16_4A from "@/components/Ex16_4A";
import Ex16_4B from "@/components/Ex16_4B";
import Ex17_4A from "@/components/Ex17_4A";
import Ex17_4B from "@/components/Ex17_4B";
import Ex18_4A from "@/components/Ex18_4A";
import Ex18_4B from "@/components/Ex18_4B";
import Ex19_4A from "@/components/Ex19_4A";
import Ex19_4B from "@/components/Ex19_4B";
import Ex20_4A from "@/components/Ex20_4A";
import Ex20_4B from "@/components/Ex20_4B";
import Ex16_5 from "@/components/Ex16_5";
import Ex16_6 from "@/components/Ex16_6";
import Ex17_5 from "@/components/Ex17_5";
import Ex17_6 from "@/components/Ex17_6";
import Ex18_5 from "@/components/Ex18_5";
import Ex18_6 from "@/components/Ex18_6";
import Ex19_5 from "@/components/Ex19_5";
import Ex19_6 from "@/components/Ex19_6";
import Ex20_5 from "@/components/Ex20_5";
import Ex20_6 from "@/components/Ex20_6";
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
  { id: "Ex16_4A", label: "2016年 問4 A", component: <Ex16_4A /> },
  { id: "Ex16_4B", label: "2016年 問4 B", component: <Ex16_4B /> },
  { id: "Ex16_5", label: "2016年 問5", component: <Ex16_5 /> },
  { id: "Ex16_6", label: "2016年 問6", component: <Ex16_6 /> },
  { id: "Ex17_4A", label: "2017年 問4 A", component: <Ex17_4A /> },
  { id: "Ex17_4B", label: "2017年 問4 B", component: <Ex17_4B /> },
  { id: "Ex17_5", label: "2017年 問5", component: <Ex17_5 /> },
  { id: "Ex17_6", label: "2017年 問6", component: <Ex17_6 /> },
  { id: "Ex18_4A", label: "2018年 問4 A", component: <Ex18_4A /> },
  { id: "Ex18_4B", label: "2018年 問4 B", component: <Ex18_4B /> },
  { id: "Ex18_5", label: "2018年 問5", component: <Ex18_5 /> },
  { id: "Ex18_6", label: "2018年 問6", component: <Ex18_6 /> },
  { id: "Ex19_4A", label: "2019年 問4 A", component: <Ex19_4A /> },
  { id: "Ex19_4B", label: "2019年 問4 B", component: <Ex19_4B /> },
  { id: "Ex19_5", label: "2019年 問5", component: <Ex19_5 /> },
  { id: "Ex19_6", label: "2019年 問6", component: <Ex19_6 /> },
  { id: "Ex20_4A", label: "2020年 問4 A", component: <Ex20_4A /> },
  { id: "Ex20_4B", label: "2020年 問4 B", component: <Ex20_4B /> },
  { id: "Ex20_5", label: "2020年 問5", component: <Ex20_5 /> },
  { id: "Ex20_6", label: "2020年 問6", component: <Ex20_6 /> },
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

type Year =
  | "2016"
  | "2017"
  | "2018"
  | "2019"
  | "2020"
  | "2021"
  | "2022"
  | "2023"
  | "2024"
  | "2025";
type Problem = { id: string; label: string };
type GroupedComponents = Record<Year, Problem[]>;

const groupedComponents: GroupedComponents = {
  "2016": [
    { id: "Ex16_4A", label: "問4 A" },
    { id: "Ex16_4B", label: "問4 B" },
    { id: "Ex16_5", label: "問5" },
    { id: "Ex16_6", label: "問6" },
  ],
  "2017": [
    { id: "Ex17_4A", label: "問4 A" },
    { id: "Ex17_4B", label: "問4 B" },
    { id: "Ex17_5", label: "問5" },
    { id: "Ex17_6", label: "問6" },
  ],
  "2018": [
    { id: "Ex18_4A", label: "問4 A" },
    { id: "Ex18_4B", label: "問4 B" },
    { id: "Ex18_5", label: "問5" },
    { id: "Ex18_6", label: "問6" },
  ],
  "2019": [
    { id: "Ex19_4A", label: "問4 A" },
    { id: "Ex19_4B", label: "問4 B" },
    { id: "Ex19_5", label: "問5" },
    { id: "Ex19_6", label: "問6" },
  ],
  "2020": [
    { id: "Ex20_4A", label: "問4 A" },
    { id: "Ex20_4B", label: "問4 B" },
    { id: "Ex20_5", label: "問5" },
    { id: "Ex20_6", label: "問6" },
  ],
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

export default function Home() {
  const [selectedYear, setSelectedYear] = useState<Year>("2025");
  const [selectedComponent, setSelectedComponent] = useState("Ex25_1");
  const [isSelected, setIsSelected] = useState(false);
  const [selection, setSelection] = useState("");

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
        readSentence(selection);
      }
      // Ctrl + t で翻訳
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

      if (
        (isMac && e.ctrlKey && e.key === "t") ||
        (!isMac && e.ctrlKey && e.key === "q")
      ) {
        e.preventDefault();
        translateSentence(selection);
        return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleTranslate = useCallback(() => {
    if (isMobile) {
      // 現在の選択範囲を保存
      const currentSelection = window.getSelection();
      if (!currentSelection || currentSelection.rangeCount === 0) return;

      const selectedText = currentSelection.toString();
      const range = currentSelection.getRangeAt(0).cloneRange();

      // 翻訳を実行
      translateSentence(selectedText);

      // 少し遅延を入れて選択範囲を復元
      setTimeout(() => {
        currentSelection.removeAllRanges();
        currentSelection.addRange(range);
      }, 100);
    } else {
      translateSentence(selection);
    }
  }, [selection]);

  return (
    <div className="mt-7 items-center justify-items-center min-h-screen p-0  pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="ml-2 text-xl font-bold">共通テスト 英語</h1>
      <div className="sticky top-0 bg-white z-50 py-2 shadow-sm">
        <div className="flex items-center container mx-auto px-4">
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
          <ReadTranslate
            isSelected={isSelected}
            selectedText={selection}
            onTranslate={handleTranslate}
          />
        </div>
      </div>
      <main className="gap-8 row-start-2 items-center sm:items-start">
        {selected && selected.component}
      </main>
    </div>
  );
}
