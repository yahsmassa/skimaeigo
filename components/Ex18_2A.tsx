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
      questionId: "2A-1",
      qa: [
        {
          questionNumber: "8",
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
      questionId: "2A-2",
      qa: [
        {
          questionNumber: "9",
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
      rightAnswerString: "4",
      answerString: "",
      points: 2,
      explanation: ["正解④"],
    },
    {
      questionId: "2A-5",
      qa: [
        {
          questionNumber: "12",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      points: 2,
      explanation: ["正解①"],
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
      rightAnswerString: "1",
      answerString: "",
      points: 2,
      explanation: ["正解①"],
    },
    {
      questionId: "2A-8",
      qa: [
        {
          questionNumber: "15",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      points: 2,
      explanation: ["正解③"],
    },
    {
      questionId: "2A-9",
      qa: [
        {
          questionNumber: "16",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      points: 2,
      explanation: ["正解③"],
    },
    {
      questionId: "2A-10",
      qa: [
        {
          questionNumber: "17",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      points: 2,
      explanation: ["正解③"],
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
      </div>{" "}
      <div className="mb-8">
        <h2 className="md:text-xl font-bold font-sans mb-6">
          第2問 次の問い（A～C）に答えよ。（配点 47）
        </h2>

        <div className="mb-6 font-sans">
          <div className="flex flex-wrap md:items-center mb-4 leading-8">
            <span className="font-bold mr-4">A</span>
            <span className="mr-2">次の問い（問1～10）の</span>
            <span className="flex flex-row items-center">
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mr-1 text-sm md:text-base">
                8
              </div>
              <span className="mx-1">～</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base">
                17
              </div>
            </span>
            <span className="ml-2">
              に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。ただし、
            </span>
            <div>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base mx-2">
                15
              </div>
              <span className="mx-1">～</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base mx-2">
                17
              </div>
            </div>
            <span>については、（ A ）と（ B ）</span>
            <span>に入れるのに最も適当な組合せを選べ。</span>
          </div>
        </div>

        <div className="space-y-7">
          {/* 問1 */}
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-1")
            )}
          >
            <div className="font-bold font-sans mr-4">問1</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Jeff didn't accept the job offer because
              </span>
              <span className="mr-2">of the</span>
              {renderSelect("8", 4, answers, setAnswers)}
              <span className="mr-2">salary.</span>
              {showResults && <Explain qa={qa} questionId="2A-1" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["cheap", "inexpensive", "low", "weak"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問2 */}
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-2")
            )}
          >
            <div className="font-bold font-sans mr-4">問2</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Brenda went</span>
              {renderSelect("9", 4, answers, setAnswers)}
              <span className="mr-2">to get</span>
              <span className="mr-2">something to drink.</span>
              {showResults && <Explain qa={qa} questionId="2A-2" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "at downstairs",
              "downstairs",
              "the downstairs",
              "to downstairs",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問3 */}
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-3")
            )}
          >
            <div className="font-bold font-sans mr-4">問3</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                After I injured my elbow, I had to quit
              </span>
              {renderSelect("10", 4, answers, setAnswers)}
              <span className="mr-2">for my school's</span>
              <span className="mr-2">badminton team.</span>
              {showResults && <Explain qa={qa} questionId="2A-3" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["playing", "to be playing", "to have played", "to play"].map(
              (option, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              )
            )}
          </div>

          {/* 問4 */}
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-4")
            )}
          >
            <div className="font-bold font-sans mr-4">問4</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">It's</span>
              {renderSelect("11", 4, answers, setAnswers)}
              <span className="mr-2">my understanding</span>
              <span className="mr-2">
                why he decided to buy such an old car.
              </span>
              {showResults && <Explain qa={qa} questionId="2A-4" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["against", "behind", "beneath", "beyond"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問5 */}
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-5")
            )}
          >
            <div className="font-bold font-sans mr-4">問5</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Nicole</span>
              {renderSelect("12", 4, answers, setAnswers)}
              <span className="mr-2">novels for about</span>
              <span className="mr-2">seven years</span>
              <span className="mr-2">when she won the national</span>
              <span className="mr-2"> novel contest.</span>
              {showResults && <Explain qa={qa} questionId="2A-5" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "had been writing",
              "has been writing",
              "has written",
              "is writing",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問6 */}
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-6")
            )}
          >
            <div className="font-bold font-sans mr-4">問6</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Our boss was sick at home, so we did</span>
              {renderSelect("13", 4, answers, setAnswers)}
              <span className="mr-2">we thought was needed</span>
              <span className="mr-2">to finish the project.</span>
              {showResults && <Explain qa={qa} questionId="2A-6" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["how", "that", "what", "which"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問7 */}
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-7")
            )}
          >
            <div className="font-bold font-sans mr-4">問7</div>
            <div className="flex flex-wrap items-center">
              {renderSelect("14", 4, answers, setAnswers)}
              <span className="mr-2">
                I didn't notice it, but there was a huge spider in the bathroom.
              </span>
              {showResults && <Explain qa={qa} questionId="2A-7" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["At first", "Beginning", "Besides", "Firstly"].map(
              (option, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              )
            )}
          </div>

          {/* 問8 */}
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-8")
            )}
          >
            <div className="font-bold font-sans mr-4">問8</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Rafael（ A ）a pair of swallows（ B ）a nest
              </span>
              <span className="mr-2">in the tree in front of the house.</span>
              <span className="mr-2">
                {renderSelect("15", 4, answers, setAnswers)}
              </span>
              {showResults && <Explain qa={qa} questionId="2A-8" />}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 md:ml-8">
            {[
              "Ａ：looked Ｂ：making",
              "Ａ：looked Ｂ：to make",
              "Ａ：saw　Ｂ：making",
              "Ａ：saw　Ｂ：to make",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問9 */}
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-9")
            )}
          >
            <div className="font-bold font-sans mr-4">問9</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                It（ A ）be long（ B ）the plum blossoms come out. They may even
                bloom
              </span>
              <span className="mr-2">this coming weekend.</span>
              <span className="mr-2">
                {renderSelect("16", 4, answers, setAnswers)}
              </span>
              {showResults && <Explain qa={qa} questionId="2A-9" />}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 md:ml-8">
            {[
              "Ａ：should Ｂ：before",
              "Ａ：should Ｂ：enough",
              "Ａ：shouldn’t Ｂ：before",
              "Ａ：shouldn’t Ｂ：enough",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問10 */}
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-10")
            )}
          >
            <div className="font-bold font-sans mr-4">問10</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Melissa said she（ A ）rather go snowboarding next weekend
              </span>
              <span className="mr-2">（ B ）go ice-skating.</span>
              <span className="mr-2">
                {renderSelect("17", 4, answers, setAnswers)}
              </span>
              {showResults && <Explain qa={qa} questionId="2A-10" />}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 md:ml-8">
            {[
              "Ａ：could Ｂ：than",
              "Ａ：could Ｂ：to",
              "Ａ：would Ｂ：than",
              "Ａ：would Ｂ：to",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
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

export default JapaneseExamQuestion;
