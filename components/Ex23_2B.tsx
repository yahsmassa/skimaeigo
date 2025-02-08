"use client";

import React, { useState } from "react";
import { Saiten2 } from "@/components/Saiten2";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex23_2B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "2B-1",
      qa: [
        {
          questionNumber: "11",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [],
    },
    {
      questionId: "2B-2",
      qa: [
        {
          questionNumber: "12",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [],
    },
    {
      questionId: "2B-3",
      qa: [
        {
          questionNumber: "13",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [],
    },
    {
      questionId: "2B-4",
      qa: [
        {
          questionNumber: "14",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [],
    },
    {
      questionId: "2B-5",
      qa: [
        {
          questionNumber: "15",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [],
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
        <Saiten2
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>{" "}
      {/* Context Section */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          <span className="font-bold">B</span> You are a member of the student
          council. The members have been discussing a student project helping
          students to use their time efficiently. To get ideas, you are reading
          a report about a school challenge. It was written by an exchange
          student who studied in another school in Japan.
        </p>
      </div>
      {/* Main Report */}
      <div className="border border-gray-800 p-8">
        <h1 className="text-center text-xl mb-6">Commuting Challenge</h1>

        {/* Main Content */}
        <div className="mb-8 leading-relaxed">
          <p className="mb-4">
            Most students come to my school by bus or train. I often see a lot
            of students playing games on their phones or chatting. However, they
            could also use this time for reading or doing homework. We started
            this activity to help students use their commuting time more
            effectively.
          </p>
          <p className="mb-4">
            Students had to complete a commuting activity chart from January
            17th to February 17th. A total of 300 students participated: More
            than two thirds of them were second-years; about a quarter were
            third-years; only 15 first-years participated. How come so few
            first-years participated? Based on the feedback (given below), there
            seems to be an answer to this question:
          </p>
        </div>

        {/* Feedback Section */}
        <div>
          <h2 className="font-bold underline mb-4">
            Feedback from participants
          </h2>
          <div className="space-y-4">
            <p>
              <span className="font-bold">HS:</span> Thanks to this project, I
              got the highest score ever in an English vocabulary test. It was
              easy to set small goals to complete on my way.
            </p>
            <p>
              <span className="font-bold">KF:</span> My friend was sad because
              she couldn&apos;t participate. She lives nearby and walks to
              school. There should have been other ways to take part.
            </p>
            <p>
              <span className="font-bold">SS:</span> My train is always crowded
              and I have to stand, so there is no space to open a book or a
              tablet. I only used audio materials, but there were not nearly
              enough.
            </p>
            <p>
              <span className="font-bold">JH:</span> I kept a study log, which
              made me realise how I used my time. For some reason most of my
              first-year classmates didn&apos;t seem to know about this
              challenge.
            </p>
            <p>
              <span className="font-bold">MN:</span> I spent most of the time on
              the bus watching videos, and it helped me to understand classes
              better. I felt the time went very fast.
            </p>
          </div>
        </div>
      </div>
      {/* Questions Section */}
      <div className="mt-12 space-y-12">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-1"))}>
          <div className="flex items-center mb-4 mt-3 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>
              The aim of the Commuting Challenge was to help students to
            </span>
            {renderSelect("11", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-1" />}
          </div>
          <ol className="list-none space-y-2">
            {[
              "commute more quickly",
              "improve their test scores",
              "manage English classes better",
              "use their time better",
            ].map((answer, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                  {index + 1}
                </span>
                {answer}
              </li>
            ))}
          </ol>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-2"))}>
          <div className="flex items-center mb-4 mt-3 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>
              One <u>fact</u> about the Commuting Challenge is that
            </span>
            {renderSelect("12", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-2" />}
          </div>
          <ol className="list-none space-y-2">
            {[
              "fewer than 10% of the participants were first-years",
              "it was held for two months during the winter",
              "students had to use portable devices on buses",
              "the majority of participants travelled by train",
            ].map((answer, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                  {index + 1}
                </span>
                {answer}
              </li>
            ))}
          </ol>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-3"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>From the feedback,</span>
            {renderSelect("13", 4, answers, setAnswers)}
            <span>were activities reported by participants.</span>
            {showResults && <Explain qa={qa} questionId="2B-3" />}
          </div>
          <div className="mb-4 ml-4 space-y-1">
            <p>A : keeping study records</p>
            <p>B : learning language</p>
            <p>C : making notes on tablets</p>
            <p>D : reading lesson notes on mobile phones</p>
          </div>
          <ol className="list-none space-y-2">
            {[
              "A and B",
              "A and C",
              "A and D",
              "B and C",
              "B and D",
              "C and D",
            ].map((answer, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                  {index + 1}
                </span>
                {answer}
              </li>
            ))}
          </ol>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-4"))}>
          <div className="flex items-center mb-4  flex-wrap">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span>
              One of the participants&apos; opinions about the Commuting
              Challenge is that
            </span>
            {renderSelect("14", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-4" />}
          </div>
          <ol className="list-none space-y-2">
            {[
              "it could have included students who walk to school",
              "the train was a good place to read books",
              "there were plenty of audio materials for studying",
              "watching videos for fun helped time pass quickly",
            ].map((answer, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                  {index + 1}
                </span>
                {answer}
              </li>
            ))}
          </ol>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-5"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 5</span>
            <span>The author&apos;s question is answered by</span>
            {renderSelect("15", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-5" />}
          </div>
          <ol className="list-none space-y-2">
            {["HS", "JH", "KF", "MN", "SS"].map((answer, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                  {index + 1}
                </span>
                {answer}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">— 12 —</div>
    </div>
  );
};

export default Ex23_2B;
