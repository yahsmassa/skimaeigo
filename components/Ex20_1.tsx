"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const JapaneseTestQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "20_1")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);
  // 日本語の番号文字
  const japaneseNumbers = ["①", "②", "③", "④"];

  // 問題の選択肢データを配列として定義
  const questionData = {
    sectionA: [
      {
        questionNumber: 1,
        options: [
          "<u>sc</u>arce",
          "<u>sc</u>enery",
          "<u>sc</u>ratch",
          "<u>sc</u>ream",
        ],
      },
      {
        questionNumber: 2,
        options: [
          "ari<u>s</u>e",
          "de<u>s</u>ire",
          "loo<u>s</u>e",
          "re<u>s</u>emble",
        ],
      },
      {
        questionNumber: 3,
        options: [
          "acc<u>u</u>se",
          "c<u>u</u>be",
          "c<u>u</u>cumber",
          "c<u>u</u>ltivate",
        ],
      },
    ],
    sectionB: [
      {
        questionNumber: 4,
        options: ["allergy", "objective", "physical", "strategy"],
      },
      {
        questionNumber: 5,
        options: ["alcohol", "behavior", "consider", "magnetic"],
      },
      {
        questionNumber: 6,
        options: ["canal", "instance", "island", "workshop"],
      },
      {
        questionNumber: 7,
        options: ["administer", "beneficial", "competitor", "democracy"],
      },
    ],
  };

  // 選択肢を表示するコンポーネント
  const QuestionOptions = ({ options }: { options: string[] }) => (
    <div className="grid grid-cols-4 gap-4 pl-2 md:pl-8">
      {options.map((word, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="mb-2">{japaneseNumbers[index]}</span>
          <span dangerouslySetInnerHTML={{ __html: word }} />
        </div>
      ))}
    </div>
  );

  // 問題を表示するコンポーネント
  const Question = ({
    questionNumber,
    options,
    index,
  }: {
    questionNumber: number;
    options: string[];
    index: number;
  }) => (
    <div
      className={cn("mb-8", showResults && qaFormat(qa, `1-${questionNumber}`))}
    >
      <div className="flex items-center mb-4">
        <span className="font-bold mr-4 font-sans">問 {index + 1}</span>
        {renderSelect(String(questionNumber), 4, answers, setAnswers)}
        {showResults && <Explain qa={qa} questionId={`1-${questionNumber}`} />}
      </div>
      <QuestionOptions options={options} />
    </div>
  );

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第1問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {14})</span>
        </div>
        <Saiten
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>{" "}
      {/* Question Header */}
      <div className="mb-6 md:text-lg font-bold flex md:items-center">
        <span className="w-12 font-sans">第1問</span>
        <span className="ml-4 font-sans">次の問い(A・B)に答えよ。(配点 14)</span>
      </div>
      {/* Section A */}
      <div className="mb-8">
        <div className="mb-6 flex items-start">
          <span className="font-bold text-lg mr-4">A</span>
          <div>
            <p className="mb-4">
              次の問い(問1～3)において、下線部の発音がほかの三つと
              <span className="font-bold">異なるもの</span>を、そ
              れぞれ下の①～④のうちから一つずつ選べ。
            </p>
          </div>
        </div>

        {questionData.sectionA.map((question, index) => (
          <Question
            key={question.questionNumber}
            questionNumber={question.questionNumber}
            options={question.options}
            index={index}
          />
        ))}
      </div>
      {/* Section B */}
      <div className="mb-8">
        <div className="mb-6 flex items-start">
          <span className="font-bold text-lg mr-4 font-sans">B</span>
          <div>
            <p className="mb-4">
              次の問い(問1～4)において、第一アクセント(第一強勢)の位置がほかの三つ
              と<span className="font-bold">異なるもの</span>
              を、それぞれ下の①～④のうちから一つずつ選べ。
            </p>
          </div>
        </div>

        {questionData.sectionB.map((question, index) => (
          <Question
            key={question.questionNumber}
            questionNumber={question.questionNumber}
            options={question.options}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default JapaneseTestQuestion;
