"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";

const Ex23_3A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "3A-1",
      qa: [
        {
          questionNumber: "16",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "②：第1段落3文目（The first thing ... balance the backpack.）～6文目（Most good backpacks ... small easy-to reach items.）の内容，特に，5文目の &quot;That means putting ... at the top.&quot;（それが意味しているのは，寝袋を底に，食べ物，調理器具，テントを真ん中に，そして服を上部に置くということです）から，②が正解。",
      ],
    },
    {
      questionId: "3A-2",
      qa: [
        {
          questionNumber: "17",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "③：第2段落4文目 Then, my friend ... the empty space.",
        "（そうしたら，私の友達が，外側の服を外してそれを寝袋の中に詰め込み，空いている空間を埋めるように言いました）という内容から，③「寝袋の隙間を埋める」が正解。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第３問 A"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
        </div>
        <Saiten
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>{" "}
      {/* Context */}
      <div className="mb-6">
        <p className="text-gray-700">
          <span className="font-bold">A</span> You are studying at Camberford
          University, Sydney. You are going on a class camping trip and are
          reading the camping club&apos;s newsletter to prepare.
        </p>
      </div>
      {/* Newsletter */}
      <div className="border border-gray-800 p-8">
        <h1 className="text-xl text-center mb-6">Going camping? Read me!!!</h1>

        <div className="space-y-6">
          {/* First Paragraph with Image */}
          <div className="flex flex-col md:relative">
            <div className="pr-0 md:pr-32">
              <p className="mb-4">
                Hi, I&apos;m Kaitlyn. I want to share two practical camping
                lessons from my recent club trip. The first thing is to divide
                your backpack into three main parts and put the heaviest items
                in the middle section to balance the backpack. Next, more
                frequently used daily necessities should be placed in the top
                section. That means putting your sleeping bag at the bottom;
                food, cookware and tent in the middle; and your clothes at the
                top. Most good backpacks come with a &quot;brain&quot; (an
                additional pouch) for small easy-to-reach items.
              </p>
            </div>
            <div className="w-32 mx-auto md:absolute md:top-0 md:right-0">
              <Image
                src="/images/Ex23-3A-1.jpg"
                alt="Backpack diagram showing brain, top section, middle section, and bottom section"
                className="w-full"
                width={112}
                height={140}
              />
            </div>
          </div>

          {/* Second Paragraph */}
          <p>
            Last year, in the evening, we had fun cooking and eating outdoors. I
            had been sitting close to our campfire, but by the time I got back
            to the tent I was freezing. Although I put on extra layers of
            clothes before going to sleep, I was still cold. Then, my friend
            told me to take off my outer layers and stuff them into my sleeping
            bag to fill up some of the empty space. This stuffing method was new
            to me, and surprisingly kept me warm all night!
          </p>

          {/* Closing */}
          <p>
            I hope my advice helps you stay warm and comfortable. Enjoy your
            camping trip!
          </p>
        </div>
      </div>
      {/* Questions Section */}
      <div className="mt-12 space-y-12">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3A-1"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>
              If you take Kaitlyn&apos;s advice, how should you fill your
              backpack?
            </span>
            {renderSelect("16", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="3A-1" />}
          </div>
          <div className="mb-6">
            <Image
              src="/images/Ex23-3A-2.jpg"
              alt="Four backpack diagrams showing different arrangements of items"
              className="mx-auto"
              width={500}
              height={400}
            />
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3A-2"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>According to Kaitlyn,</span>
            {renderSelect("17", 4, answers, setAnswers)}.
            <span>is the best method to stay warm all night.</span>
            {showResults && <Explain qa={qa} questionId="3A-2" />}
          </div>
          <ol className="list-none space-y-2">
            {[
              "avoiding going out of your tent",
              "eating hot meals beside your campfire",
              "filling the gaps in your sleeping bag",
              "wearing all of your extra clothes",
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

export default Ex23_3A;
