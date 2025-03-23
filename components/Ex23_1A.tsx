"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Scissors } from "lucide-react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex23_1A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "1A-1",
      qa: [
        {
          questionNumber: "1",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解は①「下部を完成させて提出する」",
        "下部の &quot;Fill in the form below and hand it in to your teacher today.&quot;（下の書式に記入して，今日，教師に提出しなさい）から，",
      ],
    },
    {
      questionId: "1A-2",
      qa: [
        {
          questionNumber: "2",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解は④「劇場で演者に会える」",
        "Palace Theater の2つ目の項目 &quot;Actors available to talk in the lobby after the performance&quot;（役者と公演の後ロビーで話せます）と，",
        "The Guitar Queen の2つ目の項目 &quot;Opportunity to greet the cast in their costumes before the show starts&quot;（ショーが始まる前に衣装を着たキャストとあいさつをする機会があります）から，",
      ],
    },
  ];
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
      <div className="border border-gray-800 p-6">
        <div className="mb-4">
          <p className="text-gray-700">
            You are studying in the US, and as an afternoon activity you need to
            choose one of two performances to go and see. Your teacher gives you
            this handout.
            {Kaisetsu(showResults, "23-1A-1")}
          </p>
        </div>

        <div className="border border-gray-300 p-4 mb-6">
          <h1 className="text-center text-xl mb-4">Performances for Friday</h1>

          <div className="grid grid-cols-2 gap-4">
            {/* Palace Theater */}
            <div className="border-r border-gray-300 pr-4">
              <h2 className="font-bold underline mb-2">Palace Theater</h2>
              <h3 className="italic mb-2">Together Wherever</h3>
              <p className="mb-4">
                A romantic play that will make you laugh and cry
              </p>
              <ul className="space-y-2">
                <li>
                  ▶ From 2:00 p.m. (no breaks and a running time of one hour and
                  45 minutes)
                </li>
                <li>
                  ▶ Actors available to talk in the lobby after the performance
                </li>
                <li>▶ No food or drinks available</li>
                <li>▶ Free T-shirts for five lucky people</li>
              </ul>
              {Kaisetsu(showResults, "23-1A-2")}
            </div>

            {/* Grand Theater */}
            <div className="pl-4">
              <h2 className="font-bold underline mb-2">Grand Theater</h2>
              <h3 className="italic mb-2">The Guitar Queen</h3>
              <p className="mb-4">A rock musical featuring colorful costumes</p>
              <ul className="space-y-2">
                <li>
                  ▶ Starts at 1:00 p.m. (three hours long including two
                  15-minute breaks)
                </li>
                <li>
                  ▶ Opportunity to greet the cast in their costumes before the
                  show starts
                </li>
                <li>
                  ▶ Light refreshments (snacks & drinks), original T-shirts, and
                  other goods sold in the lobby
                </li>
              </ul>
              {Kaisetsu(showResults, "23-1A-3")}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-4">
            Instructions: Which performance would you like to attend? Fill in
            the form below and hand it in to your teacher today.
            {Kaisetsu(showResults, "23-1A-4")}
          </p>
          <div className="flex items-center mb-4">
            <Scissors className="w-6 h-6" />
            <div className="border-t-2 border-dashed border-gray-400 flex-grow ml-2"></div>
          </div>
        </div>

        <div>
          <p className="mb-4">Choose (✓) one:</p>
          <div className="flex space-x-8 mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="performance"
                value="Together Wherever"
                // checked={selectedShow === "Together Wherever"}
                // onChange={(e) => setSelectedShow(e.target.value)}
                className="form-radio"
              />
              <span className="italic">Together Wherever</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="performance"
                value="The Guitar Queen"
                // checked={selectedShow === "The Guitar Queen"}
                // onChange={(e) => setSelectedShow(e.target.value)}
                className="form-radio"
              />
              <span className="italic">The Guitar Queen</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Name:
              <input
                type="text"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                className="border-b border-gray-400 ml-2 focus:outline-none focus:border-gray-600"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="mt-8 space-y-8">
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1A-1"))}>
          <div className="flex flex-wrap items-center mb-4 gap-2">
            <div className="flex items-center flex-wrap">
              <span className="mr-2 whitespace-nowrap font-sans">問 1</span>
              <span>What are you told to do after reading the handout?</span>
              {renderSelect("1", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="1A-1" />}
              <span className="mr-2"></span>
              {Kaisetsu(showResults, "23-1A-5")}
            </div>
          </div>
          <ol className="list-none space-y-2">
            {[
              "Complete and hand in the bottom part.",
              "Find out more about the performances.",
              "Talk to your teacher about your decision.",
              "Write your name and explain your choice.",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </ol>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "1A-2"))}>
          <div className="flex flex-wrap items-center mb-4 gap-2">
            <div className="flex items-center flex-wrap">
              <span className="mr-2 whitespace-nowrap font-sans">問 2</span>
              <span>Which is true about both performances?</span>
            </div>
            {renderSelect("2", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="1A-2" />}
            {Kaisetsu(showResults, "23-1A-6")}
          </div>
          <ol className="list-none space-y-2">
            {[
              "No drinks can be purchased before the show.",
              "Some T-shirts will be given as gifts.",
              "They will finish at the same time.",
              "You can meet performers at the theaters.",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex23_1A;
