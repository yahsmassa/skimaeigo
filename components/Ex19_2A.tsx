"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const ExamQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "2A-1",
      qa: [
        {
          questionNumber: "8",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: ["正解②"],
    },
    {
      questionId: "2A-2",
      qa: [
        {
          questionNumber: "9",
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
      questionId: "2A-3",
      qa: [
        {
          questionNumber: "10",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      points: 2,
      explanation: ["正解①"],
    },
    {
      questionId: "2A-4",
      qa: [
        {
          questionNumber: "11",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      points: 2,
      explanation: ["正解②"],
    },
    {
      questionId: "2A-5",
      qa: [
        {
          questionNumber: "12",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      points: 2,
      explanation: ["正解④"],
    },
    {
      questionId: "2A-6",
      qa: [
        {
          questionNumber: "13",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      points: 2,
      explanation: ["正解③"],
    },
    {
      questionId: "2A-7",
      qa: [
        {
          questionNumber: "14",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      points: 2,
      explanation: ["正解③"],
    },
    {
      questionId: "2A-8",
      qa: [
        {
          questionNumber: "15",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      points: 2,
      explanation: ["正解②"],
    },
    {
      questionId: "2A-9",
      qa: [
        {
          questionNumber: "16",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      points: 2,
      explanation: ["正解④"],
    },
    {
      questionId: "2A-10",
      qa: [
        {
          questionNumber: "17",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      points: 2,
      explanation: ["正解④"],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {20})</span>
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
      <div className="mb-8">
        <h2 className="md:text-xl font-bold mb-6 font-sans">
          第2問 次の問い(A～C)に答えよ。(配点 47)
        </h2>

        <div className="mb-6">
          <div className="flex flex-wrap md:items-center mb-4 leading-8">
            <span className="font-bold mr-4">A</span>
            <span className="mr-2">次の問い(問1～10)の</span>
            <span className="flex flex-row items-center">
              <div className="font-sans inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mr-1 text-sm md:text-base">
                8
              </div>
              <span className="mx-1">～</span>
              <div className="font-sans inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base">
                17
              </div>
            </span>
            <span className="ml-2">
              に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。ただし、
            </span>
            <div>
              <div className="font-sans inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base mx-2">
                15
              </div>
              <span className="mx-1">～</span>
              <div className="font-sans inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base mx-2">
                17
              </div>
            </div>
            <span>については、（ A ）と（ B ）に</span>
            <span>入れるのに最も適当な組合せを選べ。</span>
          </div>
        </div>

        <div className="space-y-7">
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-1")
            )}
          >
            <div className="font-bold mr-4">問1</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Casey was getting worried because the bus going to the airport
                was clearly
              </span>
              <span className="flex flex-row">
                {renderSelect("8", 4, answers, setAnswers)}
              </span>
              <span className="mr-2">schedule.</span>
              {showResults && <Explain qa={qa} questionId="2A-1" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["after", "behind", "late", "slow"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-2")
            )}
          >
            <div className="font-bold mr-4">問2</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                If you are in a hurry, you should call Double Quick Taxi because
                they usually come in
              </span>
              <span className="flex flex-row">
                {renderSelect("9", 4, answers, setAnswers)}
              </span>
              <span className="mr-2">time.</span>
              {showResults && <Explain qa={qa} questionId="2A-2" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["any", "few", "no", "some"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-3")
            )}
          >
            <div className="font-bold mr-4">問3</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">After</span>
              <span className="flex flex-row">
                {renderSelect("10", 4, answers, setAnswers)}
              </span>
              <span>dropping the expensive glass</span>
              <span className="mr-2">vase, James decided not to</span>
              {showResults && <Explain qa={qa} questionId="2A-3" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["almost", "at most", "most", "mostly"].map((option, index) => (
              <div key={index} className="flex md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-4")
            )}
          >
            <div className="font-bold mr-4">問4</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                We should make the changes to the document quickly as we are
              </span>
              {renderSelect("11", 4, answers, setAnswers)}
              <span className="mr-2">out of time.</span>
              {showResults && <Explain qa={qa} questionId="2A-4" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["going", "running", "spending", "wasting"].map(
              (option, index) => (
                <div key={index} className="flex flex-warp md:items-center">
                  <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              )
            )}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-5")
            )}
          >
            <div className="font-bold mr-4">問5</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">It was impossible to</span>
              {renderSelect("12", 4, answers, setAnswers)}
              <span className="mr-2">everyone's</span>
              <span className="mr-2">demands about the new project.</span>
              {showResults && <Explain qa={qa} questionId="2A-5" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["carry", "complete", "hold", "meet"].map((option, index) => (
              <div key={index} className="flex flex-warp md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-6")
            )}
          >
            <div className="font-bold mr-4">問6</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Write a list of everything you need</span>
              <span className="mr-2">for the camping trip.</span>
              {renderSelect("13", 4, answers, setAnswers)}
              <span className="mr-2">, you</span>
              {showResults && <Explain qa={qa} questionId="2A-6" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["As a result", "In addition", "Otherwise", "Therefore"].map(
              (option, index) => (
                <div key={index} className="flex flex-warp md:items-center">
                  <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              )
            )}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-7")
            )}
          >
            <div className="font-bold mr-4">問7</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Text messaging has become a common</span>
              {renderSelect("14", 4, answers, setAnswers)}
              <span className="mr-2">of communication</span>
              {showResults && <Explain qa={qa} questionId="2A-7" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["mean", "meaning", "means", "meant"].map((option, index) => (
              <div key={index} className="flex flex-warp md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <div
              className={cn(
                "flex flex-wrap items-center mb-2",
                showResults && qaFormat(qa, "2A-8")
              )}
            >
              <div className="font-bold mr-4">問8</div>
              <span>I was （ A ） when I watched the completely</span>
              <span>（ B ） ending of the movie.</span>
              {renderSelect("15", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="2A-8" />}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : shocked　　B : surprised",
                "A : shocked　　B : surprising",
                "A : shocking　　B : surprised",
                "A : shocking　　B : surprising",
              ].map((option, index) => (
                <div key={index} className="flex flex-warp md:items-center">
                  <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-9")
            )}
          >
            <div className="font-bold mr-4">問9</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                （ A ） is no （ B ） the increase in
              </span>
              <span className="mr-2">traffic on this highway</span>
              {renderSelect("16", 4, answers, setAnswers)}
              <span className="mr-2">during</span>
              {showResults && <Explain qa={qa} questionId="2A-9" />}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "A : It　　B : avoid",
              "A : It　　B : avoiding",
              "A : There　　B : avoid",
              "A : There　　B : avoiding",
            ].map((option, index) => (
              <div key={index} className="flex flex-warp md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-10")
            )}
          >
            <div className="font-bold mr-4">問10</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                The police officer asked the witness （ A ）
              </span>
              <span className="mr-2">the situation as （ B ） as</span>
              {renderSelect("17", 4, answers, setAnswers)}
              <span className="mr-2">possible.</span>
              {showResults && <Explain qa={qa} questionId="2A-10" />}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "A : describing　　B : accurate",
              "A : describing　　B : accurately",
              "A : to describe　　B : accurate",
              "A : to describe　　B : accurately",
            ].map((option, index) => (
              <div key={index} className="flex flex-warp md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamQuestion;
