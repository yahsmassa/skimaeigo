"use client";
import Image from "next/image";
import { Scissors } from "lucide-react";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex21_1A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "21_1A")?.qanda || [];
  //   {
  //     questionId: "1A-1",
  //     qa: [
  //       {
  //         questionNumber: "1",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "1",
  //     answerString: "",
  //     isCorrect: false,
  //     points: 2,
  //     explanation: ["正解①「USBメモリーを持ってきてほしい」"],
  //   },
  //   {
  //     questionId: "1A-2",
  //     qa: [
  //       {
  //         questionNumber: "2",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "2",
  //     answerString: "",
  //     isCorrect: false,
  //     points: 2,
  //     explanation: ["正解②「それを聞いて嬉しい」"],
  //   },
  // ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第１問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {4})</span>
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
      {/* Letter A and description */}
      <div className="mb-6">
        <p className="mb-4">
          <span className="font-bold">A</span> Your dormitory roommate Julie has
          sent a text message to your mobile phone with a request.
          {Kaisetsu(showResults, "21-1A-0")}
        </p>
      </div>

      {/* Phone container */}
      <div className=" rounded-3xl p-4 shadow-lg bg-gray-700">
        <div className="bg-white rounded-2xl p-4 space-y-4">
          {/* First message from Julie */}
          <div className="max-w-[90%]">
            <div className="bg-gray-100 rounded-2xl p-4">
              <p className="font-bold mb-2">Help!!!</p>
              <p className="mb-2">
                Last night I saved my history homework on a USB memory stick. I
                was going to print it in the university library this afternoon,
                but I forgot to bring the USB with me. I need to give a copy to
                my teacher by 4 p.m. today. Can you bring my USB to the library?
                I think it&apos;s on top of my history book on my desk. I
                don&apos;t need the book, just the USB.♡
                {Kaisetsu(showResults, "21-1A-1")}
              </p>
            </div>
          </div>

          {/* Response message */}
          <div className="max-w-[90%] ml-auto">
            <div className="bg-gray-100 rounded-2xl p-4">
              <p>
                Sorry Julie, I couldn&apos;t find it. The history book was
                there, but there was no USB memory stick. I looked for it
                everywhere, even under your desk. Are you sure you don&apos;t
                have it with you? I&apos;ll bring your laptop computer with me,
                just in case.
                {Kaisetsu(showResults, "21-1A-2")}
              </p>
            </div>
          </div>

          {/* Final message from Julie */}
          <div className="max-w-[90%]">
            <div className="bg-gray-100 rounded-2xl p-4">
              <p className="mb-2">
                You were right! I did have it. It was at the bottom of my bag.
                What a relief!
              </p>
              <p>Thanks anyway. ☺</p>
              {Kaisetsu(showResults, "21-1A-3")}
            </div>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="mt-8 space-y-8">
        {/* Question 1 */}
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "1A-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>What was Julie&apos;s request?</span>
            {renderSelect("1", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="1A-1" />}
            {Kaisetsu(showResults, "21-1A-4")}
          </div>
          <div className="space-y-2 pl-4">
            {[
              "To bring her USB memory stick",
              "To hand in her history homework",
              "To lend her a USB memory stick",
              "To print out her history homework",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "1A-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>How will you reply to Julie&apos;s second text message?</span>
            {renderSelect("2", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="1A-2" />}
            {Kaisetsu(showResults, "21-1A-5")}
          </div>
          <div className="space-y-2 pl-4">
            {[
              "Don't worry. You'll find it.",
              "I'm really glad to hear that.",
              "Look in your bag again.",
              "You must be disappointed.",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex21_1A;
