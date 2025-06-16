"use client";

import { Answers, QandA } from "@/lib/types";
import React, { useState, useEffect } from "react";
import { ExTimer } from "@/components/ExTimer";

type SaitenProps = {
  qa: QandA[];
  setQA: React.Dispatch<React.SetStateAction<QandA[]>>;
  showResults: boolean;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
};

export function Saiten({
  qa,
  setQA,
  showResults,
  setShowResults,
  answers,
  setAnswers,
}: SaitenProps) {
  const [score, setScore] = useState<number | null>(null);
  const [totalPoints, setTotalPoints] = useState<number>(0);

  useEffect(() => {
    const totalPoints = qa.reduce((acc, q) => {
      return acc + q.points;
    }, 0);
    setTotalPoints(totalPoints);
  }, [qa]);

  useEffect(() => {
    if (showResults) handleQA();
  }, [answers]);

  const sortFirstTwo = (str: string) => {
    if (str.length < 3) return "";
    // 最初の2文字を取得してソート
    let sortedFirstTwo = str.slice(0, 2).split("").sort().join("");
    // 残りの部分を取得
    let remaining = str.slice(2);
    // 新しい文字列を作成
    return sortedFirstTwo + remaining;
  };

  const handleQA = () => {
    let score = 0;
    // let totalPoints = 0;
    const _qa = qa.map((q, index) => {
      let answerString = "";
      let thisScore = 0;
      q.qa.map((qa, index) => {
        qa.answer = answers[qa.questionNumber];
        answerString += String(qa.answer);
        // 各要素で正答判定して合計するパターン 2025年第5問の2
        if (q.isSeparate) {
          const isCorrect = q.rightAnswerString[index] === String(qa.answer);
          thisScore +=
            (q.points / q.rightAnswerString.length) * (isCorrect ? 1 : 0);
        }
      });
      if (q.isOrderFree) {
        answerString = answerString.split("").sort().join("");
      }
      // 2025年第８問の３のパターン最初の２つが順番不問で、３つめは普通
      if (q.isTwoOne) {
        answerString = sortFirstTwo(answerString);
      }
      q.answerString = answerString;
      q.isCorrect = q.rightAnswerString === answerString;
      if (!q.isSeparate) {
        thisScore = q.points * (q.isCorrect ? 1 : 0);
      }
      score += thisScore;
      return q;
    });
    setShowResults(true);
    setScore(score);
    setQA(_qa);
  };

  const handleClear = () => {
    const clearedAnswers = qa.reduce((acc, q) => {
      acc[q.questionId] = 0;
      return acc;
    }, {} as Answers);
    setAnswers(clearedAnswers);
    setShowResults(false);
    setScore(null);
    setTotalPoints(0);
  };

  return (
    <div className="flex flex-wrap">
      <div className="mb-2 mr-8 mt-2">
        <ExTimer />
      </div>

      <div className="flex items-center mt-2 space-x-2">
        <button
          onClick={handleQA}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-8 py-1 px-3 rounded text-sm w-[60px] mb-3"
        >
          表示
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-500 hover:bg-gray-700 text-white  h-8 py-1 px-2 rounded text-base mb-3"
        >
          非表示
        </button>
        <div className="ml-2 text-base font-semibold w-[130px] font-sans">
          得点: {showResults && score !== null ? score : "-"} / {totalPoints}点
        </div>
      </div>
    </div>
  );
}
