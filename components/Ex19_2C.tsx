"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const JapaneseTestQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "2C-1",
      qa: [
        {
          questionNumber: "24",
          answer: 0,
        },
      ],
      rightAnswerString: "6",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解⑥",
        "it can't be helped that there are fewer people while ...",
        "* it can't be helped.. [しかたがない」、duringは前置詞、whileは接続詞でSVと続く",
      ],
    },
    {
      questionId: "2C-2",
      qa: [
        {
          questionNumber: "25",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解②",
        "I was barely able to chath the last train ",
        "barely かろうじて、seldom  めったに〜しない",
      ],
    },
    {
      questionId: "2C-3",
      qa: [
        {
          questionNumber: "26",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解③",
        "I'm afraid the meeting will have to be put off until next week",
        "I'm afraid (that) SV 「残念ながら・・・だと思う」、put off 延期する",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 C"}</h1>
          <span className="text-gray-600 font-sans">(配点 {10})</span>
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
      {/* ヘッダー部分 */}
      <div className="mb-6 leading-8">
        <p className="mb-4">
          <span className="font-bold">C</span>{" "}
          次の問い(問1～3)の会話が最も適当なやりとりとなるように
          <span className="font-sans inline-block border-2 border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">
            24
          </span>{" "}
          ～
          <span className="font-sans inline-block border-2 border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">
            26
          </span>
          を埋めるには、(A)と(B)をどのように組み合わせればよいか、それぞれ下
          の①～⑧のうちから一つずつ選べ。
        </p>
      </div>
      {/* 問1 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問１</span>
          </div>
          {[
            {
              speaker: "Museum guide",
              text: "The number of visitors has dropped this month.",
            },
            {
              speaker: "Museum guard",
              text: "It's probably because of the construction on the second floor.",
            },
            {
              speaker: "Museum guide",
              text: 'Yes, the "Treasures of Egypt" exhibit there always attracted so many people.',
            },
            {
              speaker: "Museum guard",
              text: (
                <div
                  className={cn(
                    "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                    showResults && qaFormat(qa, "2C-1")
                  )}
                >
                  <span>So,</span> {renderSelect("24", 6, answers, setAnswers)}
                  <span>the most popular area is closed.</span>
                </div>
              ),
            },
          ].map((conv, index) => (
            <React.Fragment key={index}>
              <div className="md:col-span-3 md:text-right">{conv.speaker}:</div>
              <div className="md:col-span-8">{conv.text}</div>
              <div className="md:col-span-1"></div>
            </React.Fragment>
          ))}
          <div className="flex flex-row md:w-[400px]">
            {showResults && <Explain qa={qa} questionId="2C-1" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "19-2C-1")}
          </div>
        </div>
      </div>
      {/* 選択肢ボックス - 問1 */}
      <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
        {[
          {
            options: [
              { label: "(A)", text: "I can't help" },
              { label: "(B)", text: "it can't be helped" },
            ],
            width: "w-[150px] md:w-48",
          },
          {
            options: [
              { label: "(A)", text: "that there are fewer people" },
              { label: "(B)", text: "that there are more people" },
            ],
            width: "w-[180px] md:w-[228px]",
          },
          {
            options: [
              { label: "(A)", text: "during" },
              { label: "(B)", text: "while" },
            ],
            width: "w-[120px] md:w-36",
          },
        ].map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-row flex-wrap items-center space-y-0"
          >
            <div className="flex flex-row items-center mb-4">
              <div className={cn("border-2 border-gray-800", section.width)}>
                <div className={cn("flex flex-col space-y-4 pt-4")}>
                  {section.options.map((option, index) => (
                    <div
                      key={index}
                      className={`pb-4 ${
                        index === 0 ? "border-b-2 border-gray-800" : ""
                      } px-2 h-16 md:h-12`}
                    >
                      <div className="grid grid-cols-12">
                        <span className="mr-2 col-span-3">{option.label}</span>
                        <span className="col-span-9">{option.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {sectionIndex < 2 && <div className="mx-3">→</div>}
            </div>
          </div>
        ))}
      </div>
      {/* 解答選択肢 - 問1 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
        {[
          "(A) → (A) → (A)",
          "(A) → (A) → (B)",
          "(A) → (B) → (A)",
          "(A) → (B) → (B)",
          "(B) → (A) → (A)",
          "(B) → (A) → (B)",
          "(B) → (B) → (A)",
          "(B) → (B) → (B)",
        ].map((choice, index) => (
          <div key={index} className="flex md:items-center">
            <span className="inline-block w-8 h-8 text-xl text-center leading-7 mr-2">
              {"①②③④⑤⑥⑦⑧"[index]}
            </span>
            <span>{choice}</span>
          </div>
        ))}
      </div>
      {/* 問2 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
        <div className="md:col-span-1 font-bold">問２</div>
        {[
          {
            speaker: "Masa",
            text: "I heard that last night's baseball game was the longest this season. You were there, weren't you?",
          },
          {
            speaker: "Alice",
            text: "That's right. It was so exciting watching it live at the stadium.",
          },
          {
            speaker: "Masa",
            text: "It must have been late when it finished. How did you get home?",
          },
          {
            speaker: "Alice",
            text: (
              <div
                className={cn(
                  "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                  showResults && qaFormat(qa, "2C-2")
                )}
              >
                <span>Yes, it was really late.</span>{" "}
                {renderSelect("25", 6, answers, setAnswers)}
                <span>
                  It was crowded, but riding with hundreds of other fans was
                  fun.
                </span>
              </div>
            ),
          },
        ].map((conv, index) => (
          <React.Fragment key={index}>
            <div className="md:col-span-2 md:text-right">{conv.speaker}:</div>
            <div className="md:col-span-9">{conv.text}</div>
            <div className="md:col-span-1"></div>
          </React.Fragment>
        ))}
        <div className="flex flex-row md:w-[400px]">
          {showResults && <Explain qa={qa} questionId="2C-2" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "19-2C-2")}
        </div>
      </div>
      {/* 選択肢ボックス - 問2 */}
      <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
        {[
          {
            options: [
              { label: "(A)", text: "I was barely able to" },
              { label: "(B)", text: "I was seldom able to" },
            ],
            width: "w-[150px] md:w-56",
          },
          {
            options: [
              { label: "(A)", text: "catch" },
              { label: "(B)", text: "miss" },
            ],
            width: "w-[120px] md:w-32",
          },
          {
            options: [
              { label: "(A)", text: "a taxi." },
              { label: "(B)", text: "the last train." },
            ],
            width: "w-[150px] md:w-40",
          },
        ].map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-row flex-wrap items-center space-y-0"
          >
            <div className="flex flex-row items-center mb-4">
              <div className={cn("border-2 border-gray-800", section.width)}>
                <div className={cn("flex flex-col space-y-4 pt-4")}>
                  {section.options.map((option, index) => (
                    <div
                      key={index}
                      className={`pb-4 ${
                        index === 0 ? "border-b-2 border-gray-800" : ""
                      } px-2 h-16 md:h-12`}
                    >
                      <div className="grid grid-cols-12">
                        <span className="mr-2 col-span-3">{option.label}</span>
                        <span className="col-span-9">{option.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {sectionIndex < 2 && <div className="mx-3">→</div>}
            </div>
          </div>
        ))}
      </div>
      {/* 解答選択肢 - 問2 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
        {[
          "(A) → (A) → (A)",
          "(A) → (A) → (B)",
          "(A) → (B) → (A)",
          "(A) → (B) → (B)",
          "(B) → (A) → (A)",
          "(B) → (A) → (B)",
          "(B) → (B) → (A)",
          "(B) → (B) → (B)",
        ].map((choice, index) => (
          <div key={index} className="flex md:items-center">
            <span className="inline-block w-8 h-8 text-xl  text-center leading-7 mr-2">
              {"①②③④⑤⑥⑦⑧"[index]}
            </span>
            <span>{choice}</span>
          </div>
        ))}
      </div>
      {/* 問3 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
        <div className="md:col-span-1">
          <span className="font-bold">問３</span>
        </div>
        {[
          {
            speaker: "Tetsuya",
            text: "I haven't seen John today.",
          },
          {
            speaker: "Brent",
            text: "I heard that he's sick and will be absent from work for a few days.",
          },
          {
            speaker: "Tetsuya",
            text: "That's too bad. Isn't he in charge of the meeting later today?",
          },
          {
            speaker: "Brent",
            text: (
              <div
                className={cn(
                  "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                  showResults && qaFormat(qa, "2C-3")
                )}
              >
                <span>Yes.</span> {renderSelect("26", 6, answers, setAnswers)}
                <span>Without him, we can't talk about those issues.</span>
              </div>
            ),
          },
        ].map((conv, index) => (
          <React.Fragment key={index}>
            <div className="md:col-span-2 md:text-right">{conv.speaker}:</div>
            <div className="md:col-span-9">{conv.text}</div>
            <div className="md:col-span-1"></div>
          </React.Fragment>
        ))}
        <div className="flex flex-row md:w-[400px]">
          {showResults && <Explain qa={qa} questionId="2C-3" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "19-2C-3")}
        </div>
      </div>
      {/* 選択肢ボックス - 問3 */}
      <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
        {[
          {
            options: [
              { label: "(A)", text: "I'm afraid" },
              { label: "(B)", text: "I'm afraid of" },
            ],
            width: "w-[200px] md:w-36",
          },
          {
            options: [
              { label: "(A)", text: "the meeting will have to be held" },
              { label: "(B)", text: "the meeting will have to be put off" },
            ],
            width: "w-[200px] md:w-52",
          },
          {
            options: [
              { label: "(A)", text: "until next week." },
              { label: "(B)", text: "until this evening." },
            ],
            width: "w-[200px] md:w-52",
          },
        ].map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-row flex-wrap items-center space-y-0"
          >
            <div className="flex flex-row items-center mb-4">
              <div className={cn("border-2 border-gray-800", section.width)}>
                <div className={cn("flex flex-col space-y-4 pt-4")}>
                  {section.options.map((option, index) => (
                    <div
                      key={index}
                      className={`pb-4 ${
                        index === 0 ? "border-b-2 border-gray-800" : ""
                      } px-2 h-16 md:h-12`}
                    >
                      <div className="grid grid-cols-12">
                        <span className="mr-2 col-span-3">{option.label}</span>
                        <span className="col-span-9">{option.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {sectionIndex < 2 && <div className="mx-3">→</div>}
            </div>
          </div>
        ))}
      </div>
      {/* 解答選択肢 - 問3 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {[
          "(A) → (A) → (A)",
          "(A) → (A) → (B)",
          "(A) → (B) → (A)",
          "(A) → (B) → (B)",
          "(B) → (A) → (A)",
          "(B) → (A) → (B)",
          "(B) → (B) → (A)",
          "(B) → (B) → (B)",
        ].map((choice, index) => (
          <div key={index} className="flex md:items-center">
            <span className="inline-block w-8 h-8 text-xl text-center leading-7 mr-2">
              {"①②③④⑤⑥⑦⑧"[index]}
            </span>
            <span>{choice}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JapaneseTestQuestion;
