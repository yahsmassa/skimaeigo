import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex21_1B = () => {
  const correctAnswerArray = [4, 2, 4];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第１問 B"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
        </div>
        <Saiten
          points={6}
          startQuestionNumber={1}
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
          <p className="mb-2">
            問 1 A New Member&apos;s Pack{" "}
            <span className="border border-black px-2 ml-2">3</span>.
          </p>
          <ol className="list-none pl-8 space-y-2">
            <li>① includes TQ&apos;s first album</li>
            <li>② is delivered on May 10</li>
            <li>③ requires a $10 delivery fee</li>
            <li>④ takes about seven days to arrive</li>
          </ol>
        </div>

        {/* Question 2 */}
        <div>
          <p className="mb-2">
            問 2 What will you get if you become a new Pacer member?{" "}
            <span className="border border-black px-2 ml-2">4</span>
          </p>
          <ol className="list-none pl-8 space-y-2">
            <li>① Discount concert tickets and a calendar</li>
            <li>② Regular emails and signing event invitations</li>
            <li>③ Tour information and postcards every month</li>
            <li>④ Video messages and access to online magazines</li>
          </ol>
        </div>

        {/* Question 3 */}
        <div>
          <p className="mb-2">
            問 3 After being a fan club member for one year, you can{" "}
            <span className="border border-black px-2 ml-2">5</span>.
          </p>
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
