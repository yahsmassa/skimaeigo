"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const EnglishTestQuestions = () => {
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
      rightAnswerString: "25",
      answerString: "",
      isCorrect: true,
      points: 4,
      explanation: ["正解②と⑤", "wonder how much it will cost"],
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
      rightAnswerString: "62",
      answerString: "",
      isCorrect: true,
      points: 4,
      explanation: [
        "正解⑥と②",
        "for the rest of my stay、* the rest of A .. Aの残り",
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
      rightAnswerString: "26",
      answerString: "",
      isCorrect: true,
      points: 4,
      explanation: [
        "正解②と⑥",
        "be difficult to make yourself heard、* make yourself heard 自分の話（考え）を聞かせる",
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
      <div className="mb-6 leading-8">
        <p className="text-base md:text-lg mb-4">
          B
          次の問い（問１～３）において、それぞれ下の①～⑥の語句を並べかえて空所を補い、最も適当な文を完成させよ。解答は
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
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問１</span>
          </div>
          <div className="md:col-span-1">Yukio:</div>
          <div className="md:col-span-10">
            Did you hear that a new entrance ID system will be introduced next
            month?
            {Kaisetsu(showResults, "19-2B-1")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-1")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Lucas:</div>
          <div className="md:col-span-10 flex flex-row flex-wrap items-center space-y-0">
            <span>Really? Do we need it? I</span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("18", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("19", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">to replace the current system.</span>
            {showResults && <Explain qa={qa} questionId="2B-1" />}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["cost", "how", "it", "much", "will", "wonder"].map(
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
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問２</span>
          </div>
          <div className="md:col-span-1">David:</div>
          <div className="md:col-span-10">
            What's the plan for your trip to England?
            {Kaisetsu(showResults, "19-2B-2")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-2")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Saki:</div>
          <div className="md:col-span-10 flex flex-row flex-wrap items-center space-y-0">
            <span>
              I'll spend the first few days in London and then be in Cambridge
            </span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("20", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("21", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span>
              <span className="mr-2">
                for a few days. I'll also visit some friends in Oxford.
              </span>
              {showResults && <Explain qa={qa} questionId="2B-2" />}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["for", "my", "of", "rest", "stay", "the"].map((text, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問３</span>
          </div>
          <div className="md:col-span-1">Junko:</div>
          <div className="md:col-span-10">
            The party we went to last night was very noisy. My throat is still
            sore from speaking loudly the whole time.
            {Kaisetsu(showResults, "19-2B-3")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-3")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Ronald:</div>
          <div className="md:col-span-10 flex flex-row flex-wrap items-center space-y-0">
            <span>Yeah. It can sometimes</span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("22", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("23", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">in such a crowded place.</span>
            {showResults && <Explain qa={qa} questionId="2B-3" />}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["be", "difficult", "heard", "make", "to", "yourself"].map(
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

export default EnglishTestQuestions;
