"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const JapaneseExam3 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "2B-1",
      qa: [
        {
          questionNumber: "18",
          answer: 0,
        },
        {
          questionNumber: "19",
          answer: 0,
        },
      ],
      rightAnswerString: "51",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: ["正解⑤と①"],
    },
    {
      questionId: "2B-2",
      qa: [
        {
          questionNumber: "20",
          answer: 0,
        },
        {
          questionNumber: "21",
          answer: 0,
        },
      ],
      rightAnswerString: "35",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: ["正解③と⑤"],
    },
    {
      questionId: "2B-3",
      qa: [
        {
          questionNumber: "22",
          answer: 0,
        },
        {
          questionNumber: "23",
          answer: 0,
        },
      ],
      rightAnswerString: "46",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: ["正解④と⑥"],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第２問 B"}</h1>
          <span className="text-gray-600">(配点 {12})</span>
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
      {/* タイトル部分 */}
      <div className="mb-6 leading-8">
        <p className="text-base md:text-lg mb-4">
          B
          次の問い(問１～３)において、それぞれ下の①～⑥の語句を並べかえて空所を補い、最も適当な文を完成させよ。解答は
          <span className="inline-block border border-black px-2 text-sm md:text-base md:px-6 py-1 mx-2 font-bold font-sans">
            18
          </span>
          ～
          <span className="inline-block border border-black px-2 text-sm md:text-base md:px-6 py-1 mx-2 font-bold font-sans">
            23
          </span>
          に入れるものの番号のみを答えよ。
        </p>
      </div>
      {/* 問題1 */}
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問１</span>
          </div>
          <div className="md:col-span-2">Hotel clerk:</div>
          <div className="md:col-span-9">
            Good evening, Mr. and Mrs. Gomez. How can I help you?
            {Kaisetsu(showResults, "16-2B-1")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-1")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-2">Mrs. Gomez:</div>
          <div className="md:col-span-9 flex flex-row flex-wrap items-center space-y-0">
            <span>Well,</span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("18", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("19", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">us how to get to the theater.</span>
            {showResults && <Explain qa={qa} questionId="2B-1" />}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["could", "if", "tell", "we're", "wondering", "you"].map(
            (text, index) => (
              <div key={index} className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
      </div>
      {/* 問題2 */}
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問２</span>
          </div>
          <div className="md:col-span-2">Student:</div>
          <div className="md:col-span-9">
            Excuse me. I'd like to know what we will be discussing in next
            week's seminar.
            {Kaisetsu(showResults, "16-2B-2")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-2")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-2">Professor:</div>
          <div className="md:col-span-9 flex flex-row flex-wrap items-center space-y-0">
            I haven't decided yet, so
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("20", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("21", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">email.</span>
            {showResults && <Explain qa={qa} questionId="2B-2" />}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["by", "let", "me", "send", "the details", "you"].map(
            (text, index) => (
              <div key={index} className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
      </div>
      {/* 問題3 */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問３</span>
          </div>
          <div className="md:col-span-2">Interviewer:</div>
          <div className="md:col-span-9">
            How did you change after becoming the head of such a large company?
            {Kaisetsu(showResults, "16-2B-3")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-3")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-2">President:</div>
          <div className="md:col-span-9 flex flex-row flex-wrap items-center space-y-0">
            <span>I</span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("22", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("23", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">my time more effectively.</span>
            {showResults && <Explain qa={qa} questionId="2B-3" />}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["came to", "manage", "need", "realize", "the", "to"].map(
            (text, index) => (
              <div key={index} className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default JapaneseExam3;
