"use client";

import { Answers } from "@/lib/types";

interface QuestionSelectProps {
  index: number;
  questionNumber: number;
  limit: number;
  answers: Answers;
  setAnswers: (answers: Answers | ((prev: Answers) => Answers)) => void;
  correctAnswerArray: number[];
  showResults?: boolean;
}

export function QuestionSelect({
  index,
  questionNumber,
  limit,
  answers,
  setAnswers,
  correctAnswerArray,
  showResults = false,
}: QuestionSelectProps) {
  const questionKey = `question${questionNumber}` as keyof Answers;
  const AnswerValue = answers[questionKey] || "";
  const correctAnswer = correctAnswerArray[index];
  const handleChange = (newValue: number) => {
    setAnswers((prev: Answers) => ({
      ...prev,
      [questionKey]: newValue,
    }));
  };

  const isCorrect = showResults && answers[questionKey] === correctAnswer;

  return (
    <div className="flex items-center space-x-2">
      <label className="w-6 h-6 flex items-center justify-center border-b-2 border-black ">
        {questionNumber}
      </label>
      <select
        value={AnswerValue || ""}
        onChange={(e) => handleChange(Number(e.target.value))}
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
      {/* <p>
        {" "}
        {questionNumber} {questionKey} {answers[questionKey]} {correctAnswer}
      </p> */}
    </div>
  );
}
