"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

export default function Ex21_3A() {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "21_3A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第３問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {6})</span>
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
      {/* Section A Header */}
      <div className="flex gap-2 mb-4">
        <span className="font-serif">A</span>
        <p className="text-gray-800">
          You are planning to stay at a hotel in the UK. You found useful
          information in the Q&A section of a travel advice website.
          {Kaisetsu(showResults, "21-3A-0")}
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
            {Kaisetsu(showResults, "21-3A-1")}
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
            {Kaisetsu(showResults, "21-3A-2")}
          </p>

          <p className="text-gray-800">
            Let me tell you my own experience of getting there.
            {Kaisetsu(showResults, "21-3A-3")}
          </p>

          <p className="text-gray-800">
            On my first visit, I used the underground, which is cheap and
            convenient. Trains run every five minutes. From the airport, I took
            the Red Line to Mossfield. Transferring to the Orange Line for
            Victoria should normally take about seven minutes, but the
            directions weren&apos;t clear and I needed an extra five minutes.
            From Victoria, it was a ten-minute bus ride to the hotel.
            {Kaisetsu(showResults, "21-3A-4")}
          </p>

          <p className="text-gray-800">
            The second time, I took the express bus to Victoria, so I
            didn&apos;t have to worry about transferring. At Victoria, I found a
            notice saying there would be roadworks until summer 2021. Now it
            takes three times as long as usual to get to the hotel by city bus,
            although buses run every ten minutes. It&apos;s possible to walk,
            but I took the bus as the weather was bad.
            {Kaisetsu(showResults, "21-3A-5")}
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
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "3A-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>From Alex&apos;s answer, you learn that Alex</span>
            {renderSelect("16", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="3A-1" />}
            {Kaisetsu(showResults, "21-3A-6")}
          </div>

          <div className="pl-2 md:pl-8 space-y-1">
            {[
              "appreciates the convenient location of the hotel",
              "got lost in Victoria Station on his first visit to Castleton",
              "thinks that the hotel is good value for money",
              "used the same route from the airport both times",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "3A-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              You are departing on public transport from the airport at 2.00 pm
              on 15 March 2021. What is the fastest way to get to the hotel?
            </span>
            {renderSelect("17", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="3A-2" />}
            {Kaisetsu(showResults, "21-3A-7")}
          </div>

          <div className="pl-2 md:pl-8 space-y-1">
            {[
              "By express bus and city bus",
              "By express bus and on foot",
              "By underground and city bus",
              "By underground and on foot",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center mr-2">
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
}
