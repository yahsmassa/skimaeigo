"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat, cn } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex21_1B = () => {
  const correctAnswerArray = [4, 4, 3];
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
          <h1 className="text-lg font-bold">{"第１問 B"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
        </div>
        <Saiten
          points={6}
          startQuestionNumber={3}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      {/* Header section "B" */}
      <div className="mb-6">
        <p className="text-lg">
          <span className="font-bold">B</span> Your favorite musician will have
          a concert tour in Japan, and you are thinking of joining the fan club.
          You visit the official fan club website.
        </p>
      </div>

      {/* Fan Club Content */}
      <div className="border border-gray-300 p-6 space-y-4">
        <h1 className="text-xl font-bold">TYLER QUICK FAN CLUB</h1>

        <p className="mb-4">
          Being a member of the{" "}
          <span className="font-bold">TYLER QUICK (TQ)</span> fan club is so
          much fun! You can keep up with the latest news, and take part in many
          exciting fan club member events. All new members will receive our New
          Member&apos;s Pack. It contains a membership card, a free signed
          poster, and a copy of <span className="font-bold">TQ</span>&apos;s
          third album <span className="font-bold italic">Speeding Up</span>. The
          New Member&apos;s Pack will be delivered to your home, and will arrive
          a week or so after you join the fan club.
        </p>

        <p className="mb-4">
          <span className="font-bold">TQ</span> is loved all around the world.
          You can join from any country, and you can use the membership card for
          one year. The <span className="font-bold">TQ</span> fan club has three
          types of membership: Pacer, Speeder, and Zoomer.
        </p>

        <p className="mb-4">Please choose from the membership options below.</p>

        {/* Membership table as image */}
        <Image
          src="/images/Ex21-1B-1.webp"
          alt="Membership options table showing different tiers: Pacer ($20), Speeder ($40), and Zoomer ($60) with their respective benefits"
          className="w-full max-w-2xl mx-auto"
          width={800}
          height={400}
          priority
        />
      </div>
      {/* Header Box */}
      <div className="border border-gray-400 p-4 relative">
        <div className="absolute left-4 top-4">
          {/* Starburst SVG */}
          <svg viewBox="0 0 100 100" className="w-24 h-24">
            <path
              d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z"
              fill="#e5e7eb"
            />
            <text
              x="50"
              y="45"
              textAnchor="middle"
              className="text-sm"
              fill="black"
            >
              Check
            </text>
            <text
              x="50"
              y="60"
              textAnchor="middle"
              className="text-sm"
              fill="black"
            >
              it out!
            </text>
          </svg>
        </div>

        <div className="ml-28 space-y-2">
          <p>
            ✧Join before May 10 and receive a $10 discount on your membership
            fee!
          </p>
          <p>✧There is a $4 delivery fee for every New Member&apos;s Pack.</p>
          <p>
            ✧At the end of your 1st year, you can either renew or upgrade at a
            50% discount.
          </p>
        </div>

        <p className="mt-4">
          Whether you are a Pacer, a Speeder, or a Zoomer, you will love being a
          member of the TQ fan club. For more information, or to join, click{" "}
          <span className="underline">here</span>.
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-6 mt-7">
        {/* Question 1 */}
        <div>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>A New Member&apos;s Pack</span>
            {renderSelect("3", 4, 0)}.
          </div>
          <ol className="list-none pl-8 space-y-2">
            <li>① includes TQ&apos;s first album</li>
            <li>② is delivered on May 10</li>
            <li>③ requires a $10 delivery fee</li>
            <li>④ takes about seven days to arrive</li>
          </ol>
        </div>

        {/* Question 2 */}
        <div>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>What will you get if you become a new Pacer member?</span>
            {renderSelect("4", 4, 1)}.
          </div>
          <ol className="list-none pl-8 space-y-2">
            <li>① Discount concert tickets and a calendar</li>
            <li>② Regular emails and signing event invitations</li>
            <li>③ Tour information and postcards every month</li>
            <li>④ Video messages and access to online magazines</li>
          </ol>
        </div>

        {/* Question 3 */}
        <div>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>After being a fan club member for one year, you can</span>
            {renderSelect("5", 4, 2)}.
          </div>
          <ol className="list-none pl-8 space-y-2">
            <li>① become a Zoomer for a $50 fee</li>
            <li>② get a New Member&apos;s Pack for $4</li>
            <li>③ renew your membership at half price</li>
            <li>④ upgrade your membership for free</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex21_1B;
