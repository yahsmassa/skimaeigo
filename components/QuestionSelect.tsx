"use client";

import { Answers, SubQuestion } from "@/lib/types";

interface QuestionSelectProps {
  questionNumber: number;
  limit: number;
  answers: Answers;
  setAnswers: (answers: Answers | ((prev: Answers) => Answers)) => void;
  questionKey: keyof Answers;
  showResults?: boolean;
  subQuestions?: SubQuestion[];
}

export function QuestionSelect({
  questionNumber,
  limit,
  answers,
  setAnswers,
  questionKey,
  showResults = false,
  subQuestions = [],
}: QuestionSelectProps) {
  const value = answers[questionKey] || "";

  const handleChange = (newValue: string) => {
    setAnswers((prev: Answers) => ({
      ...prev,
      [questionKey]: newValue,
    }));
  };

  const isCorrect =
    showResults &&
    answers[questionKey] === String(subQuestions[questionNumber - 1]?.answer);

  return (
    <div className="flex items-center space-x-2">
      <label className="w-6 h-6 flex items-center justify-center border-b-2 border-black ">
        {questionNumber}
      </label>
      <select
        value={value || ""}
        onChange={(e) => handleChange(e.target.value)}
        className="border border-gray-300 rounded  px-2  w-20 text-center"
      >
        <option value="">選択</option>
        {Array.from({ length: limit }, (_, i) => (
          <option key={i + 1} value={String(i + 1)}>
            {String.fromCharCode(0x2460 + i)}
          </option>
        ))}
      </select>
      {showResults && (
        <span
          className={`ml-2 ${isCorrect ? "text-green-500" : "text-red-500"}`}
        >
          {isCorrect ? "○" : "×"}
        </span>
      )}
    </div>
  );
}
