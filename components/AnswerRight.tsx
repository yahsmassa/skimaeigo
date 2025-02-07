"use client";

import React from "react";
import { Answers, SubQuestion } from "@/lib/types";

interface AnswerRightProps {
  showResults: boolean;
  answers: Answers;
  subQuestions: SubQuestion[];
  questionNumber: number;
}

export function AnswerRight({
  showResults,
  answers,
  subQuestions,
  questionNumber,
}: AnswerRightProps) {
  if (!showResults) return null;

  const answerKey = `question${questionNumber}` as keyof Answers;
  const userAnswer = answers[answerKey];

  const isCorrect =
    userAnswer !== undefined &&
    parseInt(userAnswer.toString()) === subQuestions[questionNumber - 1].answer;

  return (
    <span className={isCorrect ? "text-green-500" : "text-red-500"}>
      {isCorrect ? "○" : "×"}
    </span>
  );
}
