"use client";

import { Answers } from "@/lib/types";
import React, { useState } from "react";
import { ExTimer } from "@/components/ExTimer";

type SaitenProps = {
  startQuestionNumber: number;
  correctAnswerArray: number[];
  showResults: boolean;
  points: number;
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Saiten({
  startQuestionNumber,
  correctAnswerArray,
  showResults,
  setShowResults,
  points,
  answers,
  setAnswers,
}: SaitenProps) {
  const [score, setScore] = useState<number | null>(null);
  const handleGrading = () => {
    let correctCount = 0;
    correctAnswerArray.forEach((correctAnswer, index) => {
      const userAnswer =
        answers[`question${index + startQuestionNumber}` as keyof Answers] || 0;
      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    });

    const totalScore = (correctCount / correctAnswerArray.length) * points;
    setScore(totalScore);
    setShowResults(true);
  };

  const handleClear = () => {
    const clearedAnswers = correctAnswerArray.reduce((acc, _, index) => {
      acc[`question${index + startQuestionNumber}`] = 0;
      return acc;
    }, {} as Answers);
    setAnswers(clearedAnswers);
    setShowResults(false);
    setScore(null);
  };

  const handleAnswer = (questionNumber: string, answer: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionNumber]: answer,
    }));
  };

  return (
    <div className="flex flex-wrap">
      <div className="mb-2 mr-8">
        <ExTimer />
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={handleGrading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-8 py-1 px-3 rounded text-sm w-[60px] mb-3"
        >
          採点
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-500 hover:bg-gray-700 text-white  h-8 py-1 px-2 rounded text-base mb-3"
        >
          Reset
        </button>
        <div className="ml-2 text-base font-semibold w-[130px]">
          得点: {showResults && score !== null ? score : "-"} / {points}点
        </div>
      </div>
    </div>
  );
}
