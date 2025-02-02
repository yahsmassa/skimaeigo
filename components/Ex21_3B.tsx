"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat, cn } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex21_3B = () => {
  const correctAnswerArray = [4, 2, 1, 3, 2, 2];
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
      {/* Part 1: Newsletter */}
      <div>
        <div className="mb-4 text-gray-700">
          <span className="font-bold mr-2">B</span>
          Your classmate showed you the following message in your school&apos;s
          newsletter, written by an exchange student from the UK.
        </div>

        <div className="border border-gray-300 p-6">
          <h2 className="text-center font-serif text-xl mb-6">
            Volunteers Wanted!
          </h2>

          <div className="space-y-4">
            <p>
              Hello, everyone. I&apos;m Sarah King, an exchange student from
              London. I&apos;d like to share something important with you today.
            </p>

            <p>
              You may have heard of the Sakura International Centre. It provides
              valuable opportunities for Japanese and foreign residents to get
              to know each other. Popular events such as cooking classes and
              karaoke contests are held every month. However, there is a serious
              problem. The building is getting old, and requires expensive
              repairs. To help raise funds to maintain the centre, many
              volunteers are needed.
            </p>

            <p>
              I learnt about the problem a few months ago. While shopping in
              town, I saw some people taking part in a fund-raising campaign. I
              spoke to the leader of the campaign, Katy, who explained the
              situation. She thanked me when I donated some money. She told me
              that they had asked the town mayor for financial assistance, but
              their request had been rejected. They had no choice but to start
              fund-raising.
            </p>

            <p>
              Last month, I attended a lecture on art at the centre. Again, I
              saw people trying to raise money, and I decided to help. They were
              happy when I joined them in asking passers-by for donations. We
              tried hard, but there were too few of us to collect much money.
              With a tearful face, Katy told me that they wouldn&apos;t be able
              to use the building much longer. I felt the need to do something
              more. Then, the idea came to me that other students might be
              willing to help. Katy was delighted to hear this.
            </p>

            <p>
              Now, I&apos;m asking you to join me in the fund-raising campaign
              to help the Sakura International Centre. Please email me today! As
              an exchange student, my time in Japan is limited, but I want to
              make the most of it. By working together, we can really make a
              difference.
            </p>

            <div className="mt-6">
              <p>Class 3A</p>
              <p className="flex items-center justify-between">
                <span className="italic">Sarah King</span>
                <span className="text-gray-600">(sarahk@sakura-h.ed.jp)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Questions */}
      <div className="space-y-8 mt-7">
        {/* Question 1 */}
        <div>
          <div className="flex items-center flex-wrap gap-2">
            <span className="flex-nowrap mr-2">問 1</span>
            <p>
              Put the following events (①～④) into the order in which they
              happened.
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            {[18, 19, 20, 21].map((num, index) => (
              <React.Fragment key={num}>
                {renderSelect(String(num), 4, index)}
                {index < 3 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="space-y-2 ml-4">
            <p>① Sarah attended a centre event.</p>
            <p>② Sarah donated money to the centre.</p>
            <p>③ Sarah made a suggestion to Katy.</p>
            <p>④ The campaigners asked the mayor for help.</p>
          </div>
        </div>

        {/* Question 2 */}
        <div>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="flex-nowrap mr-2">問 2</span>
            <span>
              From Sarah&apos;s message, you learn that the Sakura International
              Centre
            </span>
            {renderSelect("22", 4, 4)}
          </div>
          <div className="space-y-2 ml-4">
            <p>① gives financial aid to international residents</p>
            <p>② offers opportunities to develop friendships</p>
            <p>③ publishes newsletters for the community</p>
            <p>④ sends exchange students to the UK</p>
          </div>
        </div>

        {/* Question 3 */}
        <div>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="flex-nowrap mr-2">問 3</span>
            <span>
              You have decided to help with the campaign after reading
              Sarah&apos;s message. What should you do first?
            </span>
            {renderSelect("23", 4, 5)}
          </div>
          <div className="space-y-2 ml-4">
            <p>① Advertise the events at the centre.</p>
            <p>② Contact Sarah for further information.</p>
            <p>③ Organise volunteer activities at school.</p>
            <p>④ Start a new fund-raising campaign.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex21_3B;
