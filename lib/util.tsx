import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import React from "react";
import { type QandA, type Answers } from "./types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const exPageFormat = "w-full md:w-3/4 lg:w-2/3 mx-auto p-4";
export const exQuestionFormat = "space-y-4 mt-6";
export const exPageHeader = "sticky top-0 bg-white z-10 pt-4 mb-4 min-h-[50px]";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={
      "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm " +
      (className || "")
    }
    {...props}
  >
    {children}
  </div>
);

export const CardContent: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={"p-6 pt-0 " + (className || "")} {...props}>
    {children}
  </div>
);

export const qaFormat = (qa: QandA[], questionId: string) => {
  return qa.find((q) => q.questionId === questionId)?.isCorrect
    ? "bg-green-100 p-2 rounded-lg"
    : "bg-red-100 p-2 rounded-lg";
};

export const handleChange = (
  questionNumber: string,
  value: number,
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>
) => {
  setAnswers((prev) => ({
    ...prev,
    [questionNumber]: value,
  }));
};

export const renderSelect = (
  number: string,
  count: number,
  answers: Answers,
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>
) => (
  <div className="mx-2 flex flex-row items-center whitespace-nowrap">
    <div className={cn("font-medium mb-0.5 mr-2")}>[{number}]</div>
    <select
      value={answers[number] || ""}
      onChange={(e) => handleChange(number, Number(e.target.value), setAnswers)}
      className="w-20 h-8 border border-gray-300 rounded-md text-base text-center"
    >
      <option value="">選択</option>
      {Array.from({ length: count }, (_, index) => (
        <option key={index + 1} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  </div>
);
