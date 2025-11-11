"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Scissors } from "lucide-react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";
const Ex23_1A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "23_1A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第１問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {4})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 4分 約150単語】
          </span>

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
        <div className="mb-1">
          <p className="text-gray-700">
            You are studying in the US, and as an afternoon activity you need to
            choose one of two performances to go and see. Your teacher gives you
            this handout.
            {Kaisetsu(showResults, "23-1A-1")}
          </p>
        </div>

        <div className="border border-gray-300 p-2 mb-2">
          <h1 className="text-center text-xl mb-4">Performances for Friday</h1>

          <div className="grid grid-cols-2 gap-4">
            {/* Palace Theater */}
            <div className="border-r border-gray-300 pr-4">
              <h2 className="font-bold underline mb-2 text-center">Palace Theater</h2>
              <h3 className="italic mb-2 text-center font-semibold">Together Wherever</h3>
              <p className="mb-4">
                A romantic play that will make you laugh and cry
              </p>
              <ul className="space-y-2 text-base">
                <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                  <span className="select-none">▶</span>
                  <span>
                    From 2:00 p.m. (no breaks and a running time of one hour and 45 minutes)
                  </span>
                </li>
                <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                  <span className="select-none">▶</span>
                  <span>Actors available to talk in the lobby after the performance</span>
                </li>
                <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                  <span className="select-none">▶</span>
                  <span>No food or drinks available</span>
                </li>
                <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                  <span className="select-none">▶</span>
                  <span>Free T-shirts for five lucky people</span>
                </li>
              </ul>
              {Kaisetsu(showResults, "23-1A-2")}
            </div>

            {/* Grand Theater */}
            <div className="pl-4 md:pl-0">
              <h2 className="font-bold underline mb-2 text-center">Grand Theater</h2>
              <h3 className="italic mb-2 text-center font-semibold">The Guitar Queen</h3>
              <p className="mb-4">A rock musical featuring colorful costumes</p>
              <ul className="space-y-2 text-base">
                <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                  <span className="select-none">▶</span>
                  <span>
                    Starts at 1:00 p.m. (three hours long including two 15-minute breaks)
                  </span>
                </li>
                <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                  <span className="select-none">▶</span>
                  <span>Opportunity to greet the cast in their costumes before the show starts</span>
                </li>
                <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                  <span className="select-none">▶</span>
                  <span>
                    Light refreshments (snacks &amp; drinks), original T-shirts, and other goods sold in the lobby
                  </span>
                </li>
              </ul>
              {Kaisetsu(showResults, "23-1A-3")}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-1">
            Instructions: Which performance would you like to attend? Fill in
            the form below and hand it in to your teacher today.
            {Kaisetsu(showResults, "23-1A-4")}
          </p>
          <div className="flex items-center mb-4">
            <Scissors className="w-6 h-6" />
            <div className="border-t-2 border-dashed border-gray-400 flex-grow ml-2"></div>
          </div>
        </div>

        <div className="flex flex-row gap-2 flex-wrap">
          <p className="mb-4">Choose (✓) one:</p>
          <div className="flex space-x-8 mb-4">
            <label className="flex items-center space-x-2">
              <span className="italic">Together Wherever</span>
              <input
                type="checkbox"
                name="performance"
                value="Together Wherever"
                className="form-radio"
              />
            </label>
            <label className="flex items-center space-x-2">
              <span className="italic">The Guitar Queen</span>
              <input
                type="checkbox"
                name="performance"
                value="The Guitar Queen"
                className="form-radio"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Name:
              <input
                type="text"
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
              <div className="flex flex-row gap-2">
                {renderSelect("1", 4, answers, setAnswers)}
                <Explain qa={qa} questionId="1A-1" isShow={showResults} />
                {Kaisetsu(showResults, "23-1A-5")}
              </div>
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
            <div className="flex flex-row gap-2">
              {renderSelect("2", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="1A-2" isShow={showResults} />
              {Kaisetsu(showResults, "23-1A-6")}
            </div>
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
