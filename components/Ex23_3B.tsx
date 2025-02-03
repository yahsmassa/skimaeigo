"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";
import Image from "next/image";

const Ex23_3B = () => {
  const correctAnswerArray = [3, 4, 2, 1, 3, 2];
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
          <h1 className="text-lg font-bold">{"第３問 B"}</h1>
          <span className="text-gray-600">(配点 {9})</span>
        </div>
        <Saiten
          points={9}
          startQuestionNumber={18}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>{" "}
      {/* Context */}
      <div className="mb-6">
        <p className="text-gray-700">
          <span className="font-bold">B</span> Your English club will make an
          &quot;adventure room&quot; for the school festival. To get some ideas,
          you are reading a blog about a room a British man created.
        </p>
      </div>
      {/* Blog Content */}
      <div className="border border-gray-800 p-8">
        <h1 className="text-xl text-center mb-6">
          Create Your Own &quot;Home Adventure&quot;
        </h1>

        <div className="space-y-6">
          <p>
            Last year, I took part in an &quot;adventure room&quot; experience.
            I really enjoyed it, so I created one for my children. Here are some
            tips on making your own.
          </p>

          {/* Key Steps Diagram */}
          <div className="my-8">
            <div className="border border-gray-300 p-4 bg-gray-50">
              <h2 className="text-center font-bold mb-4">
                Key Steps in Creating an Adventure
              </h2>
              <Image
                src="/images/Ex23-3B-1.jpg"
                alt="Flow diagram showing: theme → storyline → puzzles → costumes"
                className="w-full"
                width={500}
                height={100}
              />
            </div>
          </div>

          <div className="space-y-4">
            <p>
              First, pick a theme. My sons are huge Sherlock Holmes fans, so I
              decided on a detective mystery. I rearranged the furniture in our
              family room, and added some old paintings and lamps I had to set
              the scene.
            </p>

            <p>
              Next, create a storyline. Ours was{" "}
              <span className="italic">The Case of the Missing Chocolates</span>
              . My children would be &quot;detectives&quot; searching for clues
              to locate the missing sweets.
            </p>

            <p>
              The third step is to design puzzles and challenges. A useful idea
              is to work backwards from the solution. If the task is to open a
              box locked with a three- digit padlock, think of ways to hide a
              three-digit code. Old books are fantastic for hiding messages in.
              I had tremendous fun underlining words on different pages to form
              mystery sentences. Remember that the puzzles should get
              progressively more difficult near the final goal. To get into the
              spirit, I then had the children wear costumes. My eldest son was
              excited when I handed him a magnifying glass, and immediately
              began acting like Sherlock Holmes. After that, the children
              started to search for the first clue.
            </p>

            <p>
              This &quot;adventure room&quot; was designed specifically for my
              family, so I made some of the challenges personal. For the final
              task, I took a couple of small cups and put a plastic sticker in
              each one, then filled them with yogurt. The &quot;detectives&quot;
              had to eat their way to the bottom to reveal the clues. Neither of
              my kids would eat yogurt, so this truly was tough for them. During
              the adventure, my children were totally focused, and they enjoyed
              themselves so much that we will have another one next month.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-4 mb-8">— 16 —</div>
      {/* Questions Section */}
      <div className="mt-8 space-y-12">
        {/* Question 1 */}
        <div>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>
              Put the following events (①～④) into the order in which they
              happened.
            </span>
          </div>
          <div className="flex items-center justify-start mb-4 ml-4 flex-wrap">
            {renderSelect("18", 4, 0)}.<span className="mx-2">→</span>
            {renderSelect("19", 4, 1)}.<span className="mx-2">→</span>
            {renderSelect("20", 4, 2)}.<span className="mx-2">→</span>
            {renderSelect("21", 4, 3)}.
          </div>
          <ol className="list-none space-y-2 ml-4">
            {[
              "The children ate food they are not fond of.",
              "The children started the search for the sweets.",
              "The father decorated the living room in the house.",
              "The father gave his sons some clothes to wear.",
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
        <div>
          <div className="flex items-start mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>
              If you follow the father&apos;s advice to create your own
              &quot;adventure room,&quot; you should
            </span>
            {renderSelect("22", 4, 4)}.
          </div>
          <ol className="list-none space-y-2 ml-4">
            {[
              "concentrate on three-letter words",
              "leave secret messages under the lamps",
              "make the challenges gradually harder",
              "practise acting like Sherlock Holmes",
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
        <div>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>From this story, you understand that the father</span>
            {renderSelect("23", 4, 5)}.
          </div>
          <ol className="list-none space-y-2 ml-4">
            {[
              "became focused on searching for the sweets",
              "created an experience especially for his children",
              "had some trouble preparing the adventure game",
              "spent a lot of money decorating the room",
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
      </div>
    </div>
  );
};

export default Ex23_3B;
