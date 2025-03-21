"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const JapaneseExam2 = () => {
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
      rightAnswerString: "26",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解②と⑥",
        "I find it difficult to keep it 〜しておくことが難しいと思う",
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
      rightAnswerString: "51",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解⑤と①",
        "it may cost you a few hours ",
        "* cost A B .. A（人）にB（時間・労力）がかかる",
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
      rightAnswerString: "62",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解⑥と②",
        "how come you are leaving earlier than どうしていつもより早く帰るの？",
        "how come S V... で「なぜ・・？」という意味",
      ],
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
          <div className="md:col-span-1">Keita:</div>
          <div className="md:col-span-10">
            You have so many things in your room.
            {Kaisetsu(showResults, "17-2B-1")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-1")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Cindy:</div>
          <div className="md:col-span-10 flex flex-row flex-wrap items-center space-y-0">
            <span>I know. Actually,</span>{" "}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("18", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("19", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">it neat and clean.</span>
            {showResults && <Explain qa={qa} questionId="2B-1" />}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["difficult", "find", "I", "it", "keep", "to"].map((text, index) => (
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
          <div className="md:col-span-1">Ted:</div>
          <div className="md:col-span-10">
            Professor Jones suggested that I rewrite this essay.
            {Kaisetsu(showResults, "17-2B-2")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-2")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Jack:</div>
          <div className="md:col-span-10 flex flex-row flex-wrap items-center space-y-0">
            <span>Oh, well,</span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("20", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("21", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">
              <span className="mr-2">
                , but I'm sure you'll get a higher grade on it.
              </span>
              {showResults && <Explain qa={qa} questionId="2B-2" />}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["a few", "cost", "hours", "it", "may", "you"].map((text, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* 問題3 */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問３</span>
          </div>
          <div className="md:col-span-1">Rita:</div>
          <div className="md:col-span-10">
            Daniel and I have to go home now.
            {Kaisetsu(showResults, "17-2B-3")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-3")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Father:</div>
          <div className="md:col-span-10 flex flex-row flex-wrap items-center space-y-0">
            Oh,
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("22", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("23", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">
              <span className="mr-2">
                usual? I thought you were going to stay for dinner.
              </span>
              {showResults && <Explain qa={qa} questionId="2B-3" />}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["are", "earlier", "how come", "leaving", "than", "you"].map(
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

export default JapaneseExam2;
