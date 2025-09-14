"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex23_3A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "23_3A")?.qanda || [];
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
      </div>{" "}
      {/* Context */}
      <div className="mb-6">
        <p className="text-gray-700">
          <span className="font-bold">A</span> You are studying at Camberford
          University, Sydney. You are going on a class camping trip and are
          reading the camping club&apos;s newsletter to prepare.
          {Kaisetsu(showResults, "23-3A-0")}
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
                {Kaisetsu(showResults, "23-3A-1")}
              </p>
            </div>
            <div className="w-32 mx-auto md:absolute md:top-0 md:right-0">
              <Image
                src="/images/Ex23-3A-1.webp"
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
            {Kaisetsu(showResults, "23-3A-2")}
          </p>

          {/* Closing */}
          <p>
            I hope my advice helps you stay warm and comfortable. Enjoy your
            camping trip!
            {Kaisetsu(showResults, "23-3A-3")}
          </p>
        </div>
      </div>
      {/* Questions Section */}
      <div className="mt-12 space-y-12">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3A-1"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>
              If you take Kaitlyn&apos;s advice, how should you fill your
              backpack?
            </span>
            {renderSelect("16", 4, answers, setAnswers)}
            <Explain qa={qa} questionId="3A-1" isShow={showResults} />
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "23-3A-4")}
          </div>
          <div className="mb-6">
            <Image
              src="/images/Ex23-3A-2.webp"
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
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>According to Kaitlyn,</span>
            {renderSelect("17", 4, answers, setAnswers)}
            <span>is the best method&nbsp;</span>
            <span>to stay warm all night.</span>
            <Explain qa={qa} questionId="3A-2" isShow={showResults} />
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "23-3A-5")}
          </div>
          {[
            "avoiding going out of your tent",
            "eating hot meals beside your campfire",
            "filling the gaps in your sleeping bag",
            "wearing all of your extra clothes",
          ].map((answer, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{answer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ex23_3A;
