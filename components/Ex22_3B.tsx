"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat, cn } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex22_3B = () => {
  const correctAnswerArray = [4, 2, 4];
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
      </div>
      {/* Section B indicator */}
      <div className="mb-4">
        <span className="font-bold">B</span>
        <span className="ml-4">
          You enjoy outdoor sports and have found an interesting story in a
          mountain climbing magazine.
        </span>
      </div>

      {/* Article title */}
      <h1 className="text-center text-xl font-bold my-8">
        Attempting the Three Peaks Challenge
      </h1>

      {/* Main content with map float */}
      <div className="relative">
        <div className="mb-4">
          Last September, a team of 12 of us, 10 climbers and two minibus
          drivers, participated in the Three Peaks Challenge, which is well
          known for its difficulty among climbers in Britain.
        </div>

        {/* UK Map with peaks */}
        <div className="float-right ml-4 mb-4 w-48">
          <Image
            src="/images/Ex22-3B-1.webp"
            alt="Map of UK showing Ben Nevis (1344m), Scafell Pike (977m), and Snowdon (1085m)"
            width={200}
            height={200}
            className="w-full"
          />
        </div>

        <div className="space-y-4">
          <p>
            The goal is to climb the highest mountain in Scotland (Ben Nevis),
            in England (Scafell Pike), and in Wales (Snowdon) within 24 hours,
            including approximately 10 hours of driving between the mountains.
            To prepare for this, we trained on and off for several months and
            planned the route carefully. Our challenge would start at the foot
            of Ben Nevis and finish at the foot of Snowdon.
          </p>

          <p>
            We began our first climb at six o&apos;clock on a beautiful autumn
            morning. Thanks to our training, we reached the summit in under
            three hours. On the way down, however, I realised I had dropped my
            phone. Fortunately, I found it with the help of the team, but we
            lost 15 minutes.
          </p>

          <p>
            We reached our next destination, Scafell Pike, early that evening.
            After six hours of rest in the minibus, we started our second climb
            full of energy. As it got darker, though, we had to slow down. It
            took four-and-a-half hours to complete Scafell Pike. Again, it took
            longer than planned, and time was running out. However, because the
            traffic was light, we were right on schedule when we started our
            final climb. Now we felt more confident we could complete the
            challenge within the time limit.
          </p>

          <p>
            Unfortunately, soon after we started the final climb, it began to
            rain heavily and we had to slow down again. It was slippery and very
            difficult to see ahead. At 4:30 am, we realised that we could no
            longer finish in 24 hours.
          </p>

          <p>
            Nevertheless, we were still determined to climb the final mountain.
            The rain got heavier and heavier, and two members of the team
            decided to return to the minibus. Exhausted and miserable, the rest
            of us were also ready to go back down, but then the sky cleared, and
            we saw that we were really close to the top of the mountain.
            Suddenly, we were no longer tired. Even though we weren&apos;t
            successful with the time challenge, we were successful with the
            climb challenge. We had done it. What a feeling that was!
          </p>
        </div>
      </div>

      {/* Questions section */}
      <div className="mt-8 space-y-8">
        <div>
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="flex-nowrap mr-2">問 1 </span>
              <span>
                Put the following events (①～④) into the order they happened.
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {renderSelect("18", 4, 0)}
              <span>→</span>
              {renderSelect("19", 4, 1)}
              <span>→</span>
              {renderSelect("20", 4, 2)}
              <span>→</span>
              {renderSelect("21", 4, 3)}
            </div>
          </div>
          <ol className="list-none space-y-2">
            <li>
              ① All members reached the top of the highest mountain in Scotland.
            </li>
            <li>② Some members gave up climbing Snowdon.</li>
            <li>③ The group travelled by minibus to Wales.</li>
            <li>④ The team members helped to find the writer&apos;s phone.</li>
          </ol>
        </div>

        <div>
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="flex-nowrap mr-2">問 2 </span>
              <span>
                What was the reason for being behind schedule when they
                completed Scafell Pike?
              </span>
            </div>
            {renderSelect("22", 4, 4)}
          </div>
          <ol className="list-none space-y-2">
            <li>
              ① It took longer than planned to reach the top of Ben Nevis.
            </li>
            <li>② It was difficult to make good progress in the dark.</li>
            <li>③ The climbers took a rest in order to save energy.</li>
            <li>④ The team had to wait until the conditions improved.</li>
          </ol>
        </div>

        <div>
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="flex-nowrap mr-2">問 3 </span>
              <span>From this story, you learnt that the writer </span>
              {renderSelect("23", 4, 5)}.
            </div>
          </div>
          <ol className="list-none space-y-2">
            <li>① didn&apos;t feel a sense of satisfaction</li>
            <li>② reached the top of all three mountains</li>
            <li>③ successfully completed the time challenge</li>
            <li>④ was the second driver of the minibus</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex22_3B;
