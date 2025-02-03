"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat, cn } from "@/lib/util";
import { Answers } from "@/lib/types";

export default function Ex21_3A() {
  const correctAnswerArray = [3, 2];
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
          <h1 className="text-lg font-bold">{"第３問 A"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
        </div>
        <Saiten
          points={6}
          startQuestionNumber={16}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      {/* Section A Header */}
      <div className="flex gap-2 mb-4">
        <span className="font-serif">A</span>
        <p className="text-gray-800">
          You are planning to stay at a hotel in the UK. You found useful
          information in the Q&A section of a travel advice website.
        </p>
      </div>

      {/* Q&A Box */}
      <div className="border border-gray-300 p-6 space-y-4">
        {/* Question */}
        <div className="space-y-2">
          <p className="text-gray-800">
            I&apos;m considering staying at the Hollytree Hotel in Castleton in
            March 2021. Would you recommend this hotel, and is it easy to get
            there from Buxton Airport?
          </p>
          <p className="text-right text-gray-600">(Liz)</p>
        </div>

        {/* Answer */}
        <div className="border-t border-gray-200 pt-4 space-y-4">
          <p className="font-medium">Answer</p>

          <p className="text-gray-800">
            Yes, I strongly recommend the Hollytree. I&apos;ve stayed there
            twice. It&apos;s inexpensive, and the service is brilliant!
            There&apos;s also a wonderful free breakfast. (Click{" "}
            <span className="underline">here</span> for access information.)
          </p>

          <p className="text-gray-800">
            Let me tell you my own experience of getting there.
          </p>

          <p className="text-gray-800">
            On my first visit, I used the underground, which is cheap and
            convenient. Trains run every five minutes. From the airport, I took
            the Red Line to Mossfield. Transferring to the Orange Line for
            Victoria should normally take about seven minutes, but the
            directions weren&apos;t clear and I needed an extra five minutes.
            From Victoria, it was a ten-minute bus ride to the hotel.
          </p>

          <p className="text-gray-800">
            The second time, I took the express bus to Victoria, so I
            didn&apos;t have to worry about transferring. At Victoria, I found a
            notice saying there would be roadworks until summer 2021. Now it
            takes three times as long as usual to get to the hotel by city bus,
            although buses run every ten minutes. It&apos;s possible to walk,
            but I took the bus as the weather was bad.
          </p>

          <div className="flex justify-between items-center pt-2">
            <p className="text-gray-800">Enjoy your stay!</p>
            <p className="text-gray-600">(Alex)</p>
          </div>
        </div>
      </div>

      {/* Access Map */}
      <div className="space-y-4">
        <Image
          src="/images/Ex21-3A-1.webp"
          alt="Access to the Hollytree Hotel map"
          className="mx-auto w-full max-w-[600px] h-auto"
          width={600}
          height={400}
          priority={false}
        />
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {/* Question 1 */}
        <div className="space-y-2">
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>From Alex&apos;s answer, you learn that Alex</span>
            {renderSelect("16", 4, 0)}.
          </div>

          <div className="space-y-2 pl-8">
            <p>① appreciates the convenient location of the hotel</p>
            <p>
              ② got lost in Victoria Station on his first visit to Castleton
            </p>
            <p>③ thinks that the hotel is good value for money</p>
            <p>④ used the same route from the airport both times</p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="space-y-2">
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>
              You are departing on public transport from the airport at 2.00 pm
              on 15 March 2021. What is the fastest way to get to the hotel?
            </span>
            {renderSelect("17", 4, 1)}
          </div>

          <div className="space-y-2 pl-8">
            <p>① By express bus and city bus</p>
            <p>② By express bus and on foot</p>
            <p>③ By underground and city bus</p>
            <p>④ By underground and on foot</p>
          </div>
        </div>
      </div>
    </div>
  );
}
