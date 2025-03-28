"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const JapaneseTestNewFormat = () => {
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
      rightAnswerString: "5",
      answerString: "",
      points: 4,
      explanation: [
        "正解は⑤ remember to turn it in by five o'clock 忘れずに５時までに提出",
        "* turn in 提出する、tillは「Aまで（ずっと）」という継続の意味で使う",
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
      points: 4,
      explanation: [
        "正解② If you knew the rules, it would be really interesting",
        "仮定法過去完了 If S +過去.. would + 動詞の原形..",
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
      rightAnswerString: "7",
      answerString: "",
      points: 4,
      explanation: [
        "正解⑦ how we can prevent it from spreading どうすれば噂が広まるのを止められる",
        "wonder + 疑問視で「・・・かなと思う」, prevent A from 〜ing 「Aが〜するのと防ぐ」",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2 font-sans">
          <h1 className="text-lg font-bold">{"第２問 C"}</h1>
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
      {/* Section C instruction */}
      <div className="mb-6 leading-8 font-sans">
        <p className="mb-4">
          <span className="font-bold">C</span> 次の問い（問1～3）の会話の
          <span className="inline-block border-2 border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">
            24
          </span>{" "}
          ～
          <span className="inline-block border-2 border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">
            26
          </span>
          において，三人目の発言が最も適当な応答となるように文を作るには，それぞれ(A)と(B)をどのように選んで組み合わせればよいか，下の①～⑧のうちから一つずつ選べ。
        </p>
      </div>
      {/* Question 1 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold font-sans">問 1</span>
          </div>
          {[
            {
              speaker: "Worker",
              text: "I can't do all of these jobs at the same time. Which do you think I should do first?",
            },
            {
              speaker: "Co-worker",
              text: (
                <div
                  className={cn(
                    "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                    showResults && qaFormat(qa, "2C-1")
                  )}
                >
                  <span>Well, the monthly report is very important and</span>
                  {renderSelect("24", 8, answers, setAnswers)}
                </div>
              ),
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:col-span-2 md:text-right">{item.speaker}:</div>
              <div className="md:col-span-9 md:ml-2">{item.text}</div>
              <div className="md:col-span-1"></div>
            </React.Fragment>
          ))}
          <div className="flex flex-row md:w-[400px]">
            {showResults && <Explain qa={qa} questionId="2C-1" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "17-2C-1")}
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
          {[
            {
              options: [
                { label: "(A)", text: "you have to realize" },
                { label: "(B)", text: "you have to remember" },
              ],
              width: "w-[150px] md:w-60",
            },
            {
              options: [
                { label: "(A)", text: "to turn it in" },
                { label: "(B)", text: "turning it in" },
              ],
              width: "w-[150px] md:w-40",
            },
            {
              options: [
                { label: "(A)", text: "by five o'clock." },
                { label: "(B)", text: "till five o'clock." },
              ],
              width: "w-[150px] md:w-48",
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
                          <span className="mr-2 col-span-3">
                            {option.label}
                          </span>
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

        {/* Answer choices */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
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
              <span className="inline-block w-6 h-6 text-center leading-6 mr-2">
                {"①②③④⑤⑥⑦⑧"[index]}
              </span>
              <span>{choice}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 2 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold font-sans">問 2</span>
          </div>
          {[
            {
              speaker: "Taylor",
              text: "You're watching cricket again? I don't know why you watch cricket matches all the time.",
            },
            {
              speaker: "Adele",
              text: (
                <div
                  className={cn(
                    "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                    showResults && qaFormat(qa, "2C-2")
                  )}
                >
                  <span>I love cricket, and this is a great match.</span>
                  {renderSelect("25", 8, answers, setAnswers)}
                  <span>for you, too.</span>
                </div>
              ),
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:col-span-1 md:text-right">{item.speaker}:</div>
              <div className="md:col-span-10 md:ml-2">{item.text}</div>
              <div className="md:col-span-1"></div>
            </React.Fragment>
          ))}
          <div className="flex flex-row md:w-[400px]">
            {showResults && <Explain qa={qa} questionId="2C-2" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "17-2C-2")}
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
          {[
            {
              options: [
                { label: "(A)", text: "If you knew the rules," },
                { label: "(B)", text: "If you know the rules," },
              ],
              width: "w-[150px] md:w-52",
            },
            {
              options: [
                { label: "(A)", text: "it would be" },
                { label: "(B)", text: "it would have been" },
              ],
              width: "w-[150px] md:w-52",
            },
            {
              options: [
                { label: "(A)", text: "really interested" },
                { label: "(B)", text: "really interesting" },
              ],
              width: "w-[150px] md:w-52",
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
                          <span className="mr-2 col-span-3">
                            {option.label}
                          </span>
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

        {/* Answer choices */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
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
              <span className="inline-block w-6 h-6 text-center leading-6 mr-2">
                {"①②③④⑤⑥⑦⑧"[index]}
              </span>
              <span>{choice}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 3 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold font-sans">問 3</span>
          </div>
          {[
            {
              speaker: "Fritz",
              text: "Some students said they heard a rumor about Naoki.",
            },
            {
              speaker: "Sophia",
              text: (
                <div
                  className={cn(
                    "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                    showResults && qaFormat(qa, "2C-3")
                  )}
                >
                  <span>I heard it, too, but it's false. I wonder</span>
                  {renderSelect("26", 8, answers, setAnswers)}
                </div>
              ),
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:col-span-1 md:text-right">{item.speaker}:</div>
              <div className="md:col-span-10 md:ml-2">{item.text}</div>
              <div className="md:col-span-1"></div>
            </React.Fragment>
          ))}
          <div className="flex flex-row md:w-[400px]">
            {showResults && <Explain qa={qa} questionId="2C-3" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "17-2C-3")}
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
          {[
            {
              options: [
                { label: "(A)", text: "how can we" },
                { label: "(B)", text: "how we can" },
              ],
              width: "w-[150px] md:w-52",
            },
            {
              options: [
                { label: "(A)", text: "persuade it" },
                { label: "(B)", text: "prevent it" },
              ],
              width: "w-[150px] md:w-52",
            },
            {
              options: [
                { label: "(A)", text: "from spreading." },
                { label: "(B)", text: "to spread." },
              ],
              width: "w-[150px] md:w-52",
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
                          <span className="mr-2 col-span-3">
                            {option.label}
                          </span>
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

        {/* Answer choices */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
              <span className="inline-block w-6 h-6 text-center leading-6 mr-2">
                {"①②③④⑤⑥⑦⑧"[index]}
              </span>
              <span>{choice}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JapaneseTestNewFormat;
