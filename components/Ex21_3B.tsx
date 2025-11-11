"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import Image from "next/image";
import { qanda } from "@/lib/qanda";
const Ex21_3B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "21_3B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第３問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {9})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 5分 300単語強】
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
      {/* Part 1: Newsletter */}
      <div>
        <div className="mb-2 text-gray-700 px-2">
          Your classmate showed you the following message in your school&apos;s
          newsletter, written by an exchange student from the UK.{' '}
          {Kaisetsu(showResults, "21-3B-0")}
        </div>

        <div className="border border-gray-300 p-6">
          <h2 className="text-center font-serif text-xl mb-6">
            Volunteers Wanted!
          </h2>

          <div className="space-y-1 md:columns-2 md:gap-8 [column-fill:balance]">
            <p className="indent-7 break-inside-avoid">
              Hello, everyone. I&apos;m Sarah King, an exchange student from
              London. I&apos;d like to share something important with you today.{' '}
              {Kaisetsu(showResults, "21-3B-1")}
            </p>

            <p className="indent-7 break-inside-avoid">
              You may have heard of the Sakura International Centre. It provides
              valuable opportunities for Japanese and foreign residents to get
              to know each other. Popular events such as cooking classes and
              karaoke contests are held every month. However, there is a serious
              problem. The building is getting old, and requires expensive
              repairs. To help raise funds to maintain the centre, many
              volunteers are needed.{' '}
              {Kaisetsu(showResults, "21-3B-2")}
            </p>

            <p className="indent-7 break-inside-avoid">
              I learnt about the problem a few months ago. While shopping in
              town, I saw some people taking part in a fund-raising campaign. I
              spoke to the leader of the campaign, Katy, who explained the
              situation. She thanked me when I donated some money. She told me
              that they had asked the town mayor for financial assistance, but
              their request had been rejected. They had no choice but to start
              fund-raising.{' '}
              {Kaisetsu(showResults, "21-3B-3")}
            </p>

            <p className="indent-7 break-inside-avoid">
              Last month, I attended a lecture on art at the centre. Again, I
              saw people trying to raise money, and I decided to help. They were
              happy when I joined them in asking passers-by for donations. We
              tried hard, but there were too few of us to collect much money.
              With a tearful face, Katy told me that they wouldn&apos;t be able
              to use the building much longer. I felt the need to do something
              more. Then, the idea came to me that other students might be
              willing to help. Katy was delighted to hear this.{' '}
              {Kaisetsu(showResults, "21-3B-4")}
            </p>

            <p className="indent-7 break-inside-avoid">
              Now, I&apos;m asking you to join me in the fund-raising campaign
              to help the Sakura International Centre. Please email me today! As
              an exchange student, my time in Japan is limited, but I want to
              make the most of it. By working together, we can really make a
              difference.{' '}
              {Kaisetsu(showResults, "21-3B-5")}
            </p>

            <div className="mt-6 break-inside-avoid">
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
        <div className={cn("space-y-2", showResults && qaFormat(qa, "3B-1"))}>
          <div className="flex items-center flex-wrap gap-2">
            <div className="flex items-center flex-wrap gap-2">
              <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
              <p>
                Put the following events (①～④) into the order in which they
                happened.
              </p>
            </div>
            <div className="flex items-center flex-wrap gap-1">
              {[18, 19, 20, 21].map((num, index) => (
                <React.Fragment key={num}>
                  {renderSelect(String(num), 4, answers, setAnswers)}
                  {index < 3 && <span className="-mx-1.5">→</span>}
                </React.Fragment>
              ))}
              <div className="flex flex-row gap-2">
                <Explain qa={qa} questionId="3B-1"  isShow={showResults} />
                {Kaisetsu(showResults, "21-3B-6")}
              </div>
            </div>
          </div>
          <div className="space-y-2 ml-2 md:ml-4">
            {[
              "Sarah attended a centre event.",
              "Sarah donated money to the centre.",
              "Sarah made a suggestion to Katy.",
              "The campaigners asked the mayor for help.",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center mr-2">
                  {"①②③④"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "3B-2"))}>
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              From Sarah&apos;s message, you learn that the Sakura International
              Centre
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("22", 4, answers, setAnswers)}
              <span className="-ml-2 mr-2">.</span>
              <Explain qa={qa} questionId="3B-2"  isShow={showResults} />
              {Kaisetsu(showResults, "21-3B-7")}
            </div>
          </div>
          <div className="space-y-2 ml-2 md:ml-4">
            {[
              "gives financial aid to international residents",
              "offers opportunities to develop friendships",
              "publishes newsletters for the community",
              "sends exchange students to the UK",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center mr-2">
                  {"①②③④"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "3B-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              You have decided to help with the campaign after reading
              Sarah&apos;s message.{' '}
            </span>
            <span>
                 What should you do first?
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("23", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="3B-3"  isShow={showResults} />
              {Kaisetsu(showResults, "21-3B-8")}
            </div>
          </div>
          <div className="space-y-2 ml-2 md:ml-4">
            {[
              "Advertise the events at the centre.",
              "Contact Sarah for further information.",
              "Organise volunteer activities at school.",
              "Start a new fund-raising campaign.",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center mr-2">
                  {"①②③④"[index]}
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

export default Ex21_3B;
