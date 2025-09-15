"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";
const Ex21_1B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "21_1B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第１問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {6})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 5分 200単語強】
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
      {/* Header section "B" */}
      <div className="mb-2">
        <p className="text-lg px-2">
          Your favorite musician will have
          a concert tour in Japan, and you are thinking of joining the fan club.
          You visit the official fan club website.
          {Kaisetsu(showResults, "21-1B-0")}
        </p>
      </div>

      {/* Fan Club Content */}
      <div className="border border-gray-300 p-6 space-y-1">
        <h1 className="text-xl font-bold">TYLER QUICK FAN CLUB</h1>

        <p className="indent-7">
          Being a member of the{" "}
          <span className="font-bold">TYLER QUICK (TQ)</span> fan club is so
          much fun! You can keep up with the latest news, and take part in many
          exciting fan club member events. All new members will receive our New
          Member&apos;s Pack. It contains a membership card, a free signed
          poster, and a copy of <span className="font-bold">TQ</span>&apos;s
          third album <span className="font-bold italic">Speeding Up</span>. The
          New Member&apos;s Pack will be delivered to your home, and will arrive
          a week or so after you join the fan club.
          {Kaisetsu(showResults, "21-1B-1")}
        </p>

        <p className="indent-7">
          <span className="font-bold">TQ</span> is loved all around the world.
          You can join from any country, and you can use the membership card for
          one year. The <span className="font-bold">TQ</span> fan club has three
          types of membership: Pacer, Speeder, and Zoomer.
          {Kaisetsu(showResults, "21-1B-2")}
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
          {Kaisetsu(showResults, "21-1B-3")}
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-6 mt-7">
        {/* Question 1 */}
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "1B-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span className="-mr-2">A New Member&apos;s Pack</span>
            <div className="flex flex-row gap-2">
              {renderSelect("3", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="1B-1"  isShow={showResults} />
              {Kaisetsu(showResults, "21-1B-4")}
            </div>
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            {[
              "includes TQ's first album",
              "is delivered on May 10",
              "requires a $10 delivery fee",
              "takes about seven days to arrive",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "1B-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>What will you get if you become a new Pacer member?</span>
            <div className="flex flex-row gap-2">
              {renderSelect("4", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="1B-2"  isShow={showResults} />
              {Kaisetsu(showResults, "21-1B-5")}
            </div>
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            {[
              "Discount concert tickets and a calendar",
              "Regular emails and signing event invitations",
              "Tour information and postcards every month",
              "Video messages and access to online magazines",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "1B-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span className="-mr-2">After being a fan club member for one year, you can</span>
            <div className="flex flex-row gap-2">
              {renderSelect("5", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="1B-3"  isShow={showResults} />
              {Kaisetsu(showResults, "21-1B-6")}
            </div>
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            {[
              "become a Zoomer for a $50 fee",
              "get a New Member's Pack for $4",
              "renew your membership at half price",
              "upgrade your membership for free",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex21_1B;
