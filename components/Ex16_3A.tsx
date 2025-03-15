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
      questionId: "3A-1",
      qa: [
        {
          questionNumber: "27",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: ["正解は④"],
    },
    {
      questionId: "3A-2",
      qa: [
        {
          questionNumber: "28",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: ["正解は②"],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第３問 A"}</h1>
          <span className="text-gray-600">(配点 {18})</span>
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
      {/* Question Header */}
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-bold mr-2">第3問</h2>
        <p className="text-base md:text-lg">
          次の問い(A～C)に答えよ。（配点 41）
        </p>
      </div>
      {/* Section A */}
      <div className="mb-8">
        <p className="flex  mb-4">
          <span className="font-bold text-lg mr-2">A</span>
          <span className="text-base">
            次の問い(問1・問2)の会話の
            <span className="inline-flex items-center mx-1">
              <div className="border border-black w-10 h-8 flex items-center justify-center mx-1">
                27
              </div>
              ・
              <div className="border border-black w-10 h-8 flex items-center justify-center mx-1">
                28
              </div>
            </span>
            に入れるのに最も適当なものを，それぞれ下の①～④のうちから一つずつ選べ。
          </span>
        </p>

        {/* Question 1 */}
        <div className="mb-6 pl-6">
          <p className="font-bold mb-2">問 1</p>
          <div className="space-y-2 mb-4">
            <div className="flex  md:items-center">
              <span className="font-bold mr-2">&nbsp;Sue:</span>
              <span>
                You know, Peter's birthday is coming soon. Is everything going
                well for the surprise party?
              </span>
            </div>
            <div className="flex md:items-center">
              <span className="font-bold mr-2">Polly:</span>
              <span>
                Yes. I've already bought and wrapped his present. Here, look.
              </span>
            </div>
            <div
              className={cn(
                "flex md:items-center",
                showResults && qaFormat(qa, "3A-1")
              )}
            >
              <span className="font-bold mr-2">&nbsp;Sue:</span>
              <span className="flex flex-wrap items-center">
                {renderSelect("27", 4, answers, setAnswers)}
                <span className="mr-2">He might walk</span>
                <span className="mr-2">in at any moment.</span>
                {showResults && <Explain qa={qa} questionId="3A-1" />}
                <span className="mr-2"></span>
                {Kaisetsu(showResults, "16-3A-1")}
              </span>
            </div>
            <div className="flex md:items-center">
              <span className="font-bold mr-2">Polly:</span>
              <span>OK. I'll put it away until the party.</span>
            </div>
          </div>

          <div className="pl-8 space-y-2 mb-6">
            <p>① He doesn't like the color of the wrapping.</p>
            <p>② I don't have the slightest idea what to buy.</p>
            <p>③ Show him what you bought when he comes.</p>
            <p>④ You should hide it so that he won't see it.</p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="pl-6">
          <p className="font-bold mb-2">問 2</p>
          <div className="space-y-2 mb-4">
            <div className="flex md:items-center">
              <span className="font-bold mr-2">Diego:</span>
              <span>
                Did you do the English homework? It was difficult, wasn't it?
              </span>
            </div>
            <div className="flex md:items-center">
              <span className="font-bold mr-2">&nbsp;Fred:</span>
              <span>Oh! I totally forgot about it.</span>
            </div>
            <div className="flex md:items-center">
              <span className="font-bold mr-2">Diego:</span>
              <span>You can do it during lunch time.</span>
            </div>
            <div
              className={cn(
                "flex md:items-center",
                showResults && qaFormat(qa, "3A-2")
              )}
            >
              <span className="font-bold mr-2">&nbsp;Fred:</span>
              <span className="flex flex-wrap items-center">
                <span>There's little point in even trying.</span>
                {renderSelect("28", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="3A-2" />}
                <span className="mr-2"></span>
                {Kaisetsu(showResults, "16-3A-2")}
              </span>
            </div>
            <div className="flex md:items-center">
              <span className="font-bold mr-2">Diego:</span>
              <span>Don't give up. You need to pass English, right?</span>
            </div>
          </div>

          <div className="pl-8 space-y-2">
            <p>① I'm sure I can make it.</p>
            <p>② It'd be a waste of time.</p>
            <p>③ Let me see what you can do.</p>
            <p>④ You don't want to miss it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapaneseExamQuestion;
