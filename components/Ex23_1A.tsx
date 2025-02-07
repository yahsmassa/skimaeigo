"use client";

import { Scissors } from "lucide-react";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex23_1A = () => {
  const correctAnswerArray = [1, 4];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const handleChange = (questionNumber: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [`question${questionNumber}`]: value,
    }));
  };

  const isCorrect = (questionNumber: string, index: number) => {
    return answers[`question${questionNumber}`] === correctAnswerArray[index];
  };

  const renderSelect = (number: string, count: number, index: number) => (
    <div className="mx-2 flex flex-row items-center whitespace-nowrap">
      <div
        className={cn(
          "font-medium mb-0.5 mr-2",
          showResults &&
            (isCorrect(number, index) ? "text-green-500" : "text-red-500")
        )}
      >
        [{number}]
      </div>
      <select
        value={answers[`question${number}`] || ""}
        onChange={(e) => handleChange(number, Number(e.target.value))}
        className="w-20 h-8 border border-gray-300 rounded-md text-center text-sm"
      >
        <option value="">選択</option>
        {Array.from({ length: count }, (_, index) => (
          <option key={index + 1} value={String(index + 1)}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第１問 A"}</h1>
          <span className="text-gray-600">(配点 {4})</span>
        </div>
        <Saiten
          points={4}
          startQuestionNumber={1}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      <div className="border border-gray-800 p-6">
        <div className="mb-4">
          <p className="text-gray-700">
            You are studying in the US, and as an afternoon activity you need to
            choose one of two performances to go and see. Your teacher gives you
            this handout.
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
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-4">
            Instructions: Which performance would you like to attend? Fill in
            the form below and hand it in to your teacher today.
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
        <div>
          <div className="flex flex-wrap items-center mb-4 gap-2">
            <div className="flex items-center flex-wrap">
              <span className="mr-2 whitespace-nowrap">問 1</span>
              <span>What are you told to do after reading the handout?</span>
              {renderSelect("1", 4, 0)}.
            </div>
          </div>
          <ol className="list-none space-y-2">
            {[
              "Complete and hand in the bottom part.",
              "Find out more about the performances.",
              "Talk to your teacher about your decision.",
              "Write your name and explain your choice.",
            ].map((text, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                  {index + 1}
                </span>
                {text}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="flex flex-wrap items-center mb-4 gap-2">
            <div className="flex items-center flex-wrap">
              <span className="mr-2 whitespace-nowrap">問 2</span>
              <span>Which is true about both performances?</span>
            </div>
            {renderSelect("2", 4, 1)}.
          </div>
          <ol className="list-none space-y-2">
            {[
              "No drinks can be purchased before the show.",
              "Some T-shirts will be given as gifts.",
              "They will finish at the same time.",
              "You can meet performers at the theaters.",
            ].map((text, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                  {index + 1}
                </span>
                {text}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex23_1A;
