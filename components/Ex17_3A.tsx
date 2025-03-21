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
      questionId: "3A-1",
      qa: [
        {
          questionNumber: "27",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は② 明日の放課後、あなたのオフィスにお伺いしてもよろしいでしょうか？",
      ],
    },
    {
      questionId: "3A-2",
      qa: [
        {
          questionNumber: "28",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: ["正解は③ それは高すぎます。"],
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
      <div className="mb-6">
        <span className="text-xl font-bold font-sans">第3問</span>
        <span className="ml-4">次の問い(A～C)に答えよ。(配点　41)</span>
      </div>

      <div className="mb-8 ml-6">
        <div className="mb-4 flex items-start">
          <span className="font-bold mr-4">A</span>
          <div>
            <p className="mb-2">
              次の問い(問1・問2)の会話の
              <span className="inline-flex items-center mx-2">
                <div className="font-sans border-2 border-black w-10 h-8 flex justify-center items-center">
                  27
                </div>
              </span>
              ・
              <span className="inline-flex items-center mx-2">
                <div className="font-sans border-2 border-black w-10 h-8 flex justify-center items-center">
                  28
                </div>
              </span>
              に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
            </p>
          </div>
        </div>

        <div className="">
          {/* 問１ */}
          <div>
            {[
              {
                speaker: "Student",
                text: "Do you have time later today to check the draft of my speech?",
                questionNumber: "問１",
              },
              {
                speaker: "Teacher",
                text: "No, I'm afraid I don't have time today. I have several appointments this afternoon.",
              },
              {
                speaker: "Student",
                text: (
                  <div
                    className={cn(
                      "flex items-center -mt-1 md:mt-0",
                      showResults && qaFormat(qa, "3A-1")
                    )}
                  >
                    <span>I see. Well . . . </span>
                    {renderSelect("27", 4, answers, setAnswers)}
                    {showResults && <Explain qa={qa} questionId="3A-1" />}
                    <span className="mr-2"></span>
                    {Kaisetsu(showResults, "17-3A-1")}
                  </div>
                ),
              },
              {
                speaker: "Teacher",
                text: "Yes. And please send it to me by email so I can read it before you come.",
              },
            ].map((dialogue, index) => (
              <div key={index} className="md:flex items-start my-3">
                <div className="font-sans text-sm md:text-base w-[40px] md:w-[50px] font-bold">
                  {dialogue.questionNumber}
                </div>
                <div className="font-sans text-sm md:text-base w-[80px] font-bold">
                  {dialogue.speaker}:
                </div>
                <div>{dialogue.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-6 mb-6 md:ml-12">
            {[
              "Are you sure you can skip the appointments?",
              "Could I come to your office after school tomorrow?",
              "Shall I make an appointment with you for today?",
              "Would you kindly give me the draft to look at?",
            ].map((text, index) => (
              <div key={index} className="mb-1 flex">
                <div className="w-6 h-6 flex justify-center items-center mr-2">
                  {["①", "②", "③", "④"][index]}
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          {/* 問２ */}
          <div className="mb-6">
            {[
              {
                speaker: "Ken",
                text: "How about going to Memorial Park this weekend?",
                questionNumber: "問2",
              },
              {
                speaker: "Ethan",
                text: "How far is it from here?",
              },
              {
                speaker: "Ken",
                text: "Well, it takes about two hours by express train.",
              },
              {
                speaker: "Ethan",
                text: "Oh, that's a bit far. How much is it to get there?",
              },
              {
                speaker: "Ken",
                text: "About 6,000 yen. But I've heard it's really beautiful.",
              },
              {
                speaker: "Ethan",
                text: (
                  <div
                    className={cn(
                      "flex flex-wrap items-center",
                      showResults && qaFormat(qa, "3A-2")
                    )}
                  >
                    <span>I know, but </span>
                    {renderSelect("28", 4, answers, setAnswers)}
                    <span className="mr-2"></span>
                    <span className="mr-2">. Let's find</span>
                    <span className="mr-2">somewhere else</span>
                    <span className="mr-2">to go.</span>
                    {showResults && <Explain qa={qa} questionId="3A-2" />}
                    <span className="mr-2"></span>
                    {Kaisetsu(showResults, "17-3A-2")}
                  </div>
                ),
              },
            ].map((dialogue, index) => (
              <div key={index} className="md:flex items-start mb-2">
                <div className="font-sans text-sm md:text-base w-[40px] md:w-[50px] font-bold">
                  {dialogue.questionNumber}
                </div>
                <div className="text-sm md:text-base md:text-right w-[60px] font-bold">
                  {dialogue.speaker}:
                </div>
                <div className="md:ml-2">{dialogue.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-0 mb-6 md:ml-12">
            {[
              "I don't feel like going out",
              "it helps us to get there",
              "that's much too expensive",
              "we can't miss this chance",
            ].map((text, index) => (
              <div key={index} className="mb-1 flex">
                <div className="w-6 h-6 flex justify-center items-center mr-2">
                  {["①", "②", "③", "④"][index]}
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapaneseTestQuestion;
