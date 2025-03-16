"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const JapaneseExamQuestion = () => {
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
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: ["正解③"],
    },
    {
      questionId: "2C-2",
      qa: [
        {
          questionNumber: "25",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: ["正解①"],
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
      explanation: ["正解③"],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第２問 B"}</h1>
          <span className="text-gray-600">(配点 {10})</span>
        </div>
        <Saiten
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>
      <div className="mb-6 leading-8">
        <p className="mb-4">
          <span className="font-bold">C</span>{" "}
          次の問い(問1～3)の会話が最も適当なやりとりとなるように
          <span className="inline-block border-2 border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">
            24
          </span>{" "}
          ～
          <span className="inline-block border-2 border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">
            26
          </span>
          を埋めるには、(A)と(B)をどのように組み合わせればよいか、それぞれ下
          の①～⑧のうちから一つずつ選べ。
        </p>
      </div>

      <div className="mb-8">
        {/* 問 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問１</span>
          </div>
          {[
            {
              speaker: "Chisato",
              text: "I heard a new amusement park will be built in our neighborhood.",
              align: "text-left",
            },
            {
              speaker: "Luke",
              text: "Really? That will be great for the kids in our area.",
              align: "md:text-right",
            },
            {
              speaker: "Chisato",
              text: "Yes, but nobody is happy about the increased traffic near their houses.",
              align: "text-left",
            },
            {
              speaker: "Luke",
              //解答部分
              text: (
                <div
                  className={cn(
                    "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                    showResults && qaFormat(qa, "3B-1")
                  )}
                >
                  <span>But</span> {renderSelect("24", 4, answers, setAnswers)}
                  <span>young people.</span>
                  <span>
                    It will definitely have a positive economic effect on our
                    city.
                  </span>
                </div>
              ),
              align: "md:text-right",
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className={cn("md:col-span-1", item.align)}>
                {item.speaker}:
              </div>
              <div className="md:col-span-10">{item.text}</div>
              <div className="md:col-span-1"></div>
            </React.Fragment>
          ))}
          <div className="flex flex-row md:w-[400px]">
            {showResults && <Explain qa={qa} questionId="2C-1" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "20-2C-1")}
          </div>
        </div>
      </div>

      {/* ボックス */}
      <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
        {[
          {
            options: [
              { label: "(A)", text: "according to the experts," },
              { label: "(B)", text: "thanks to the neighbors," },
            ],
            width: "w-[150px] md:w-60", //ボックスの幅
          },
          {
            options: [
              { label: "(A)", text: "it will create less noise" },
              { label: "(B)", text: "it will create more jobs" },
            ],
            width: "w-[150px] md:w-60",
          },
          {
            options: [
              { label: "(A)", text: "for" },
              { label: "(B)", text: "in" },
            ],
            width: "w-[120px] md:w-40",
          },
        ].map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-row flex-wrap items-center space-y-0"
          >
            <div className="flex flex-row items-center mb-4">
              <div className={cn("border border-gray-800", section.width)}>
                <div className={cn("flex flex-col space-y-4 pt-4")}>
                  {section.options.map((option, index) => (
                    <div
                      key={index}
                      className={`pb-4 ${
                        index === 0 ? "border-b border-gray-800" : ""
                      } px-2 h-16 md:h-12`}
                    >
                      <div className="grid grid-cols-12">
                        {/* (A)（B)（C)とか */}
                        <span className="mr-2 col-span-3">{option.label}</span>
                        {/* 文章 */}
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

      {/* 選択肢 */}
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
          <div key={index} className="flex  md:items-center">
            <span className="inline-block w-8 h-8 text-xl border-black text-center leading-7 mr-2">
              {"①②③④⑤⑥⑦⑧"[index]}
            </span>
            <span>{choice}</span>
          </div>
        ))}
      </div>

      {/* 問 2 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
        <div className="md:col-span-1">
          <span className="font-bold">問 2</span>
        </div>
        {[
          {
            speaker: "Yu",
            text: "I heard Emma is planning to quit her full-time job.",
          },
          {
            speaker: "Lee",
            text: "Yeah, she's going to start her own company.",
          },
          {
            speaker: "Yu",
            text: "Wow! Her husband must be angry because they need money for their new house.",
          },
          //解答部分
          {
            speaker: "Lee",
            text: (
              <div
                className={cn(
                  "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                  showResults && qaFormat(qa, "2C-2")
                )}
              >
                <span>Very much so.</span>{" "}
                {renderSelect("25", 4, answers, setAnswers)}
                <span>to Emma's plan.</span>{" "}
                <span>They always support each other in the end.</span>
              </div>
            ),
          },
        ].map((conv, index) => (
          <React.Fragment key={index}>
            <div className="md:col-span-1">{conv.speaker}:</div>
            <div className="md:col-span-10">{conv.text}</div>
            <div className="md:col-span-1"></div>
          </React.Fragment>
        ))}
        <div className="flex flex-row md:w-[400px]">
          {showResults && <Explain qa={qa} questionId="2C-2" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "20-2C-2")}
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
        {[
          {
            options: [
              { label: "(A)", text: "although" },
              { label: "(B)", text: "because" },
            ],
            width: "w-32 md:w-44",
          },
          {
            options: [
              { label: "(A)", text: "he is quite upset," },
              { label: "(B)", text: "he isn't so upset," },
            ],
            width: "w-36 md:w-44",
          },
          {
            options: [
              { label: "(A)", text: "he doesn't object" },
              { label: "(B)", text: "he objects" },
            ],
            width: "w-36 md:w-44",
          },
        ].map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-row flex-wrap items-center space-y-0"
          >
            <div className="flex flex-row items-center mb-4">
              <div className={cn("border border-gray-800", section.width)}>
                <div className={cn("flex flex-col space-y-4 pt-4")}>
                  {section.options.map((option, index) => (
                    <div
                      key={index}
                      className={`pb-4 ${
                        index === 0 ? "border-b border-gray-800" : ""
                      } px-2 h-16 md:h-12`}
                    >
                      <div className="grid grid-cols-12">
                        <span className="mr-2 col-span-2">{option.label}</span>
                        <span className="col-span-10">&nbsp;{option.text}</span>
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
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
          <div key={index} className="flex items-center">
            <span className="inline-block w-8 h-8 text-xl  text-center leading-7 mr-2">
              {"①②③④⑤⑥⑦⑧"[index]}
            </span>
            <span>{choice}</span>
          </div>
        ))}
      </div>

      {/* 問 3 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
        <div className="md:col-span-1">
          <span className="font-bold">問 3</span>
        </div>
        {[
          {
            speaker: "Kenjiro",
            text: "Why are there fire trucks in front of the school?",
          },
          {
            speaker: "Ms. Sakamoto",
            text: "It's because there is a fire drill scheduled for this morning.",
          },
          {
            speaker: "Kenjiro",
            text: "Again? We just had one last semester. I already know what to do.",
          },
          {
            speaker: "Ms. Sakamoto",
            text: (
              <div
                className={cn(
                  "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                  showResults && qaFormat(qa, "2C-3")
                )}
              >
                <span>Even if you think you do, the drill is</span>{" "}
                {renderSelect("26", 4, answers, setAnswers)}
                <span>
                  help each other in case of a disaster. We should take it
                  seriously.
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
          {showResults && <Explain qa={qa} questionId="2C-3" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "20-2C-3")}
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
        {[
          {
            options: [
              { label: "(A)", text: "essential" },
              { label: "(B)", text: "meaningless" },
            ],
            width: "w-36 md:w-40",
          },
          {
            options: [
              { label: "(A)", text: "even so" },
              { label: "(B)", text: "so that" },
            ],
            width: "w-32 md:w-40",
          },
          {
            options: [
              { label: "(A)", text: "we can" },
              { label: "(B)", text: "we cannot" },
            ],
            width: "w-32 md:w-40",
          },
        ].map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-row flex-wrap items-center space-y-0"
          >
            <div className="flex flex-row items-center mb-4">
              <div className={cn("border border-gray-800", section.width)}>
                <div className={cn("flex flex-col space-y-4 pt-4")}>
                  {section.options.map((option, index) => (
                    <div
                      key={index}
                      className={`pb-4 ${
                        index === 0 ? "border-b border-gray-800" : ""
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
          <div key={index} className="flex items-center">
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

export default JapaneseExamQuestion;
