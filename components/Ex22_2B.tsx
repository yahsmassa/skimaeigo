"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat, cn } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex22_2B = () => {
  const correctAnswerArray = [2, 4, 2, 4, 2];
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
          <h1 className="text-lg font-bold">{"第２問 B"}</h1>
          <span className="text-gray-600">(配点 {10})</span>
        </div>
        <Saiten
          points={10}
          startQuestionNumber={11}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      {/* Header section */}
      <div className="mb-6">
        <p className="text-base mb-4">
          <strong>B</strong> You are the editor of a school English paper.
          David, an exchange student from the UK, has written an article for the
          paper.
        </p>
      </div>

      {/* Main article content */}
      <div className="border border-gray-300 p-6">
        <p className="mb-4">
          Do you like animals? The UK is known as a nation of animal-lovers; two
          in five UK homes have pets. This is lower than in the US, where more
          than half of homes have pets. However, Australia has the highest
          percentage of homes with pets!
        </p>

        <p className="mb-4">
          Why is this so? Results of a survey done in Australia give us some
          answers.
        </p>

        {/* Survey results box */}
        <div className="border border-gray-200 border-dashed p-4 mb-4 relative">
          <p className="mb-2">
            Pet owners mention the following advantages of living with pets:
          </p>

          <ul className="list-none space-y-3 mb-4">
            <li className="flex items-start">
              <span className="mr-2">▶</span>
              The love, happiness, and friendship pets give (90%);
            </li>
            <li className="flex items-start">
              <span className="mr-2">▶</span>
              The feeling of having another family member (over 60% of dog and
              cat owners);
            </li>
            <li className="flex items-start">
              <span className="mr-2">▶</span>
              The happy times pets bring. Most owners spend 3-4 hours with their
              &apos;fur babies&apos; every day and around half of all dog and
              cat owners let their pets sleep with them!
            </li>
          </ul>

          <div className="flex">
            <p className="flex-1 pr-4">
              One disadvantage is that pets have to be cared for when owners go
              away. It may be difficult to organise care for them; 25% of owners
              take their pets on holidays or road trips.
            </p>
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/images/Ex22-2B-1.webp"
                alt="Black and white illustration of a cat's head"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Conclusion paragraph */}
        <p>
          These results suggest that keeping pets is a good thing. On the other
          hand, since coming to Japan, I have seen other problems such as space,
          time, and cost. Still, I know people here who are content living in
          small flats with pets. Recently, I heard that little pigs are becoming
          popular as pets in Japan. Some people take their pig(s) for a walk,
          which must be fun, but I wonder how easy it is to keep pigs inside
          homes.
        </p>
      </div>

      {/* Questions section */}
      <div className="mt-8 space-y-8">
        {/* Question 1 */}
        <div>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="flex-nowrap mr-2">問 1</span>
            In terms of the ratios for homes with pets, which shows the
            countries&apos; ranking from{" "}
            <span className="underline">highest to lowest</span>?
            {renderSelect("11", 6, 0)}
          </div>

          <div className="space-y-2 pl-8">
            <p>① Australia — the UK — the US</p>
            <p>② Australia — the US — the UK</p>
            <p>③ The UK — Australia — the US</p>
            <p>④ The UK — the US — Australia</p>
            <p>⑤ The US — Australia — the UK</p>
            <p>⑥ The US — the UK — Australia</p>
          </div>
        </div>

        {/* Question 2 */}
        <div>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="flex-nowrap mr-2">問 2</span>
            <span>
              According to David&apos;s report, one advantage of having pets is
              that
            </span>
            {renderSelect("12", 4, 1)}.
          </div>

          <div className="space-y-2 pl-8">
            <p>① you can save money</p>
            <p>② you can sleep longer</p>
            <p>③ you will become popular</p>
            <p>④ your life can be more enjoyable</p>
          </div>
        </div>

        {/* Question 3 */}
        <div>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="flex-nowrap mr-2">問 3</span>
            <span>
              The statement that best reflects one finding from the survey is
            </span>
            {renderSelect("13", 4, 2)}.
          </div>

          <div className="space-y-2 pl-8">
            <p>
              ① &apos;I feel uncomfortable when I watch TV with my cat.&apos;
            </p>
            <p>
              ② &apos;I spend about three hours with my pet every day.&apos;
            </p>
            <p>③ &apos;Most pets like going on car trips.&apos;</p>
            <p>④ &apos;Pets need a room of their own.&apos;</p>
          </div>
        </div>

        {/* Question 4 */}
        <div>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="flex-nowrap mr-2">問 4</span>
            <span>
              Which best summarises David&apos;s opinions about having pets in
              Japan?
            </span>
            {renderSelect("14", 4, 3)}.
          </div>

          <div className="space-y-2 pl-8">
            <p>① It is not troublesome to keep pets.</p>
            <p>② People might stop keeping pets.</p>
            <p>③ Pet owners have more family members.</p>
            <p>④ Some people are happy to keep pets inside their homes.</p>
          </div>
        </div>

        {/* Question 5 */}
        <div>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="flex-nowrap mr-2">問 5</span>
            <span>Which is the most suitable title for the article?</span>
            {renderSelect("15", 4, 4)}.
          </div>

          <div className="space-y-2 pl-8">
            <p>① Does Your Pet Sleep on Your Bed?</p>
            <p>② What Does Keeping Pets Give Us?</p>
            <p>③ What Pet Do You Have?</p>
            <p>④ Why Not Keep a Pet Pig?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_2B;
