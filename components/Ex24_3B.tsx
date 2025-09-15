"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex24_3B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "24_3B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  const questionData = {
    id: "2024-3B",
    title: "2024-3B",
    situation:
      "You are going to participate in an English Day. As preparation, you are reading an article in the school newspaper written by Yuzu, who took part in it last year.",
    passage: {
      title: "Virtual Field Trip to a South Sea Island",
      content: [
        "This year, for our English Day, we participated in a virtual science tour. The winter weather had been terrible, so we were excited to see the tropical scenery of the volcanic island projected on the screen.",
        "First, we \"took a road trip\" to learn about the geography of the island, using navigation software to view the route. We \"got into the car,\" which our teacher, Mr Leach, sometimes stopped so we could look out of the window and get a better sense of the rainforest. Afterwards, we asked Mr Leach about what we'd seen.",
        "Later, we \"dived into the ocean\" and learnt about the diversity of marine creatures. We observed a coral reef via a live camera. Mr Leach asked us if we could count the number of creatures, but there were too many! Then he showed us an image of the ocean 10 years ago. The reef we'd seen on camera was dynamic, but in the photo it was even more full of life. It looked so different after only 10 years! Mr Leach told us human activity was affecting the ocean and it could be totally ruined if we didn't act now.",
        "In the evening, we studied astronomy under a \"perfect starry sky.\" We put up tents in the gymnasium and created a temporary planetarium on the ceiling using a projector. We were fascinated by the sky full of constellations, shooting stars, and the Milky Way. Someone pointed out one of the brightest lights and asked Mr Leach if it was Venus, a planet close to Earth. He nodded and explained that humans have created so much artificial light that hardly anything is visible in our city's night sky.",
        "On my way home after school, the weather had improved and the sky was now cloudless. I looked up at the moonless sky and realised what Mr Leach had told us was true.",
      ],
    },
    questions: [
      {
        number: "1",
        prompt:
          "Put the student comments in the order in which the events happened.",
        options: [
          "I was wondering how dangerous the island was. I saw beautiful birds and a huge snake in the jungle.",
          "It was really shocking that there had been many more creatures before. We should protect our beautiful oceans!",
          "Setting up a camping site in the gymnasium was kind of weird, but great fun! Better than outside, because we weren't bitten by bugs!",
          "We were lost for words during the space show and realised we often don't notice things even though they're there.",
        ],
        answer: 1,
      },
      {
        number: "2",
        prompt:
          "From the tour, Yuzu did not learn about the ___ of the south sea island.",
        options: [
          "marine ecosystem",
          "night-time sky",
          "seasonal weather",
          "trees and plants",
        ],
        answer: 1,
      },
      {
        number: "3",
        prompt:
          "On the way home, Yuzu looked up and most likely saw ___ in the night sky.",
        options: [
          "a shooting star",
          "just a few stars",
          "the full moon",
          "the Milky Way",
        ],
        answer: 1,
      },
    ],
  };
  const comments = {
    "1": "I was wondering how dangerous the island was. I saw beautiful birds and a huge snake in the jungle.",
    "2": "It was really shocking that there had been many more creatures before. We should protect our beautiful oceans!",
    "3": "Setting up a camping site in the gymnasium was kind of weird, but great fun! Better than outside, because we weren't bitten by bugs!",
    "4": "We were lost for words during the space show and realised we often don't notice things even though they're there.",
  };

  const q2Options = [
    { number: "1", text: "marine ecosystem" },
    { number: "2", text: "night-time sky" },
    { number: "3", text: "seasonal weather" },
    { number: "4", text: "trees and plants" },
  ];

  const q3Options = [
    { number: "1", text: "a shooting star" },
    { number: "2", text: "just a few stars" },
    { number: "3", text: "the full moon" },
    { number: "4", text: "the Milky Way" },
  ];
  const correctAnswerArray = [1, 2, 3, 4, 3, 2];
  return (
    <div className={cn(exPageFormat)}>
      {/* 問題番号とシチュエーション */}
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第３問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {9})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 5分 約400単語】
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

      {/* 記事本体 */}
      <div className="mb-0 px-2 sm:px-4">
        <p className="text-base">{questionData.situation}
        </p>
            {Kaisetsu(showResults, "24-3B-0")}
      </div>

      <div className="bg-white rounded-lg shadow-lg mb-8 p-4 sm:p-6 mx-2 sm:mx-0">
        <h3 className="text-xl font-bold text-center mb-4">
          {questionData.passage.title}
        </h3>

        <div className="space-y-1">
          {questionData.passage.content.map((paragraph, index) => (
            <div key={index}>
              {index === 3 ? (
                <div className="flex flex-col md:flex-row gap-4 my-1">
                  <div className="flex-grow">
                    <p>
                      {paragraph}{" "}
                      {Kaisetsu(showResults, "24-3B-" + (index + 1))}
                    </p>
                  </div>
                  <div className="w-full">
                    <Image
                      src="/images/Ex24-3B-1.jpg"
                      alt="Starry night sky with shooting stars"
                      width={800}
                      height={600}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              ) : (
                <p>
                  {paragraph} {Kaisetsu(showResults, "24-3B-" + (index + 1))}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 設問部分 */}
      <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
        <div className={cn("mb-6", showResults && qaFormat(qa, "3B-1"))}>
          <div className="flex items-center flex-wrap mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問1</span>
            <span className="mb-2">
              Yuzu&apos;s article also included student comments (⓪~④)
              describing the events in the virtual tour. Put the comments in the
              order in which the events happened.
            </span>
            <div className="flex flex-row mb-2">
              {renderSelect("18", 4, answers, setAnswers)}
              <div className="mx-1">→</div>
              {renderSelect("19", 4, answers, setAnswers)}
              <div className="mx-1">→</div>
            </div>
            <div className="flex flex-row  mb-2">
              {renderSelect("20", 4, answers, setAnswers)}
              <div className="mx-1">→</div>
              {renderSelect("21", 4, answers, setAnswers)}
            </div>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"3B-1"} isShow={showResults} />
              {Kaisetsu(showResults, "24-3B-7")}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          {Object.entries(comments).map(([key, text], index) => (
            <div key={key} className="p-3 border rounded-lg bg-white">
              <div className="text-sm mb-1">{"①②③④"[index]}</div>
              <div className="text-sm">{text}</div>
              {Kaisetsu(showResults, "24-3B-" + (index + 8))}
            </div>
          ))}
        </div>

        <div className={cn("my-8", showResults && qaFormat(qa, "3B-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問2</span>
            <span>
              From the tour, Yuzu did&nbsp;{" "}
              <span className="underline">not</span>&nbsp; learn about the
            </span>
            {renderSelect("22", 4, answers, setAnswers)}
            <span>of the south sea island.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"3B-2"} isShow={showResults} />
              {Kaisetsu(showResults, "24-3B-12")}
            </div>
          </div>

          <div className="space-y-1">
            {q2Options.map((option, index) => (
              <div key={option.number} className="flex items-start">
                <span className="mr-2">{"①②③④"[index]}</span>
                <span>{option.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={cn("mb-6", showResults && qaFormat(qa, "3B-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問3</span>
            <span>On the way home, Yuzu looked up and most</span>
            <span>likely saw</span>
            {renderSelect("23", 4, answers, setAnswers)}
            <span>in the night sky.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"3B-3"} isShow={showResults} />
              {Kaisetsu(showResults, "24-3B-13")}
            </div>
          </div>

          <div className="space-y-1">
            {q3Options.map((option, index) => (
              <div key={option.number} className="flex items-start">
                <span className="mr-2">{"①②③④"[index]}</span>
                <span>{option.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex24_3B;
