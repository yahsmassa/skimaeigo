"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const JapaneseExam = () => {
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
      rightAnswerString: "32",
      answerString: "",
      isCorrect: true,
      points: 4,
      explanation: [
        "正解③と②",
        "can get to know each other",
        "get to know .. 知り合いになる、each other お互い",
      ],
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
      rightAnswerString: "42",
      answerString: "",
      isCorrect: true,
      points: 4,
      explanation: [
        "正解④と②",
        "was the seconde highest score on the team",
        "「the second 最上級 」２番目に最高の",
      ],
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
      rightAnswerString: "32",
      answerString: "",
      isCorrect: true,
      points: 4,
      explanation: [
        "正解③と②",
        "to those who aren't familiar with",
        "be familiar with..  に精通している、those who 〜の人たち",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {12})</span>
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
        <p className="text-base md:text-lg mb-4 font-sans">
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
          <div className="md:col-span-1">Student:</div>
          <div className="md:col-span-10 md:ml-2">
            What are we going to do with the Australian students after they
            arrive?
            {Kaisetsu(showResults, "18-2B-1")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-1")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Teacher:</div>
          <div className="md:col-span-10 md:ml-2 flex flex-row flex-wrap items-center space-y-0">
            <span>
              The first night, we'll have a barbecue by the river so that you
              all
            </span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("18", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("19", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">quickly.</span>
            {showResults && <Explain qa={qa} questionId="2B-1" />}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["can", "each", "get", "know", "other", "to"].map((text, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* 問題2 */}
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問２</span>
          </div>
          <div className="md:col-span-1">Bridget:</div>
          <div className="md:col-span-10 md:ml-2">
            How was your basketball season last year?
            {Kaisetsu(showResults, "18-2B-2")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-2")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Toshi:</div>
          <div className="md:col-span-10 flex flex-row flex-wrap items-center space-y-0">
            <span>I</span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("20", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("21", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">was the highest scorer on the team.</span>
            {showResults && <Explain qa={qa} questionId="2B-2" />}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["highest", "on", "scorer", "the second", "the team", "was"].map(
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
          <div className="md:col-span-1">Evan:</div>
          <div className="md:col-span-10">
            I want to buy my first computer, but I don't know which one I should
            get.
            {Kaisetsu(showResults, "18-2B-3")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-3")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Sam:</div>
          <div className="md:col-span-10 flex flex-row flex-wrap items-center space-y-0">
            <span>
              Don't worry. Electronic stores always have experts available to
              give advice
            </span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("22", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("23", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">using computers.</span>
            {showResults && <Explain qa={qa} questionId="2B-3" />}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["aren't", "familiar", "those", "to", "who", "with"].map(
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

export default JapaneseExam;
