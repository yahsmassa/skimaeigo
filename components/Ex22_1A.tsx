"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat, cn } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex22_1A = () => {
  const correctAnswerArray = [1, 3];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const handleChange = (questionNumber: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`question${questionNumber}`]: value,
    }));
  };

  const isCorrect = (questionNumber: string, index: number) => {
    return (
      answers[`question${questionNumber}`] === String(correctAnswerArray[index])
    );
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
        onChange={(e) => handleChange(number, e.target.value)}
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
      {/* Introduction Text */}
      <div className="mb-6">
        <p className="text-lg leading-relaxed">
          You are studying about Brazil in the international club at your senior
          high school. Your teacher asked you to do research on food in Brazil.
          You find a Brazilian cookbook and read about fruits used to make
          desserts.
        </p>
      </div>

      {/* Fruits Table */}
      <div className="border border-gray-800 mb-8">
        {/* Title */}
        <div className="text-center border-b border-gray-800 p-2">
          <h2 className="text-lg font-medium">Popular Brazilian Fruits</h2>
        </div>

        {/* Grid for fruits */}
        <div className="grid grid-cols-2">
          {/* Cupuaçu */}
          <div className="border-r border-b border-gray-800 p-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Ex22-1A-1.webp"
                alt="Cupuaçu"
                width={160}
                height={160}
                className="mb-2"
              />
              <h3 className="font-medium mb-2">Cupuaçu</h3>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Smells and tastes like chocolate</li>
              <li>Great for desserts, such as cakes, and with yogurt</li>
              <li>
                Brazilians love the chocolate-flavored juice of this fruit.
              </li>
            </ul>
          </div>

          {/* Jabuticaba */}
          <div className="border-b border-gray-800 p-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Ex22-1A-2.webp"
                alt="Jabuticaba"
                width={160}
                height={160}
                className="mb-2"
              />
              <h3 className="font-medium mb-2">Jabuticaba</h3>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Looks like a grape</li>
              <li>Eat them within three days of picking for a sweet flavor.</li>
              <li>
                After they get sour, use them for making jams, jellies, and
                cakes.
              </li>
            </ul>
          </div>

          {/* Pitanga */}
          <div className="border-r border-gray-800 p-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Ex22-1A-3.webp"
                alt="Pitanga"
                width={160}
                height={160}
                className="mb-2"
              />
              <h3 className="font-medium mb-2">Pitanga</h3>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Comes in two varieties, red and green</li>
              <li>Use the sweet red one for making cakes.</li>
              <li>The sour green one is only for jams and jellies.</li>
            </ul>
          </div>

          {/* Buriti */}
          <div className="p-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Ex22-1A-4.webp"
                alt="Buriti"
                width={160}
                height={160}
                className="mb-2"
              />
              <h3 className="font-medium mb-2">Buriti</h3>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Orange inside, similar to a peach or a mango</li>
              <li>Tastes very sweet, melts in your mouth</li>
              <li>Best for ice cream, cakes, and jams</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="space-y-8">
        {/* Question 1 */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2">問 1</span>
            Both <i>cupuaçu</i> and <i>buriti</i> can be used to make{" "}
            {renderSelect("1", 4, 0)}.
          </div>
          <ol className="list-none space-y-2 pl-8">
            <li>① a cake</li>
            <li>② chocolate</li>
            <li>③ ice cream</li>
            <li>④ yogurt</li>
          </ol>
        </div>

        {/* Question 2 */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>
              If you want to make a sour cake, the best fruit to use is{" "}
            </span>
            {renderSelect("2", 4, 1)}.
          </div>
          <ol className="list-none space-y-2 pl-8">
            <li>
              ① <i>buriti</i>
            </li>
            <li>
              ② <i>cupuaçu</i>
            </li>
            <li>
              ③ <i>jabuticaba</i>
            </li>
            <li>
              ④ <i>pitanga</i>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex22_1A;
