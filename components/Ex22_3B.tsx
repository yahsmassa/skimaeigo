"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex22_3B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "22_3B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第３問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {9})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 6分 400単語弱】
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
      {/* Section B indicator */}
      <div className="mb-2">
        <span className="ml-4">
          You enjoy outdoor sports and have found an interesting story in a
          mountain climbing magazine.
          {Kaisetsu(showResults, "22-3B-0")}
        </span>
      </div>

      {/* Article title */}
      <h1 className="text-center text-xl font-bold my-8">
        Attempting the Three Peaks Challenge
      </h1>

      {/* Main content with map float */}
      <div className="relative">
        <div className="mb-0 indent-7">
          Last September, a team of 12 of us, 10 climbers and two minibus
          drivers, participated in the Three Peaks Challenge, which is well
          known for its difficulty among climbers in Britain.
          {Kaisetsu(showResults, "22-3B-1")}
        </div>

        {/* UK Map with peaks */}
        <div className="float-right ml-4 mb-4 w-48">
          <Image
            src="/images/Ex22-3B-1.webp"
            alt="Map of UK showing Ben Nevis (1344m), Scafell Pike (977m), and Snowdon (1085m)"
            width={200}
            height={200}
            className="w-full"
          />
        </div>

        <div className="space-y-1">
          <p className="">
            The goal is to climb the highest mountain in Scotland (Ben Nevis),
            in England (Scafell Pike), and in Wales (Snowdon) within 24 hours,
            including approximately 10 hours of driving between the mountains.
            To prepare for this, we trained on and off for several months and
            planned the route carefully. Our challenge would start at the foot
            of Ben Nevis and finish at the foot of Snowdon.
            {Kaisetsu(showResults, "22-3B-2")}
          </p>

          <p className="indent-7">
            We began our first climb at six o&apos;clock on a beautiful autumn
            morning. Thanks to our training, we reached the summit in under
            three hours. On the way down, however, I realised I had dropped my
            phone. Fortunately, I found it with the help of the team, but we
            lost 15 minutes.
            {Kaisetsu(showResults, "22-3B-3")}
          </p>

          <p className="indent-7">
            We reached our next destination, Scafell Pike, early that evening.
            After six hours of rest in the minibus, we started our second climb
            full of energy. As it got darker, though, we had to slow down. It
            took four-and-a-half hours to complete Scafell Pike. Again, it took
            longer than planned, and time was running out. However, because the
            traffic was light, we were right on schedule when we started our
            final climb. Now we felt more confident we could complete the
            challenge within the time limit.
            {Kaisetsu(showResults, "22-3B-4")}
          </p>

          <p className="indent-7">
            Unfortunately, soon after we started the final climb, it began to
            rain heavily and we had to slow down again. It was slippery and very
            difficult to see ahead. At 4:30 am, we realised that we could no
            longer finish in 24 hours.
            {Kaisetsu(showResults, "22-3B-5")}
            Nevertheless, we were still determined to climb the final mountain.
            The rain got heavier and heavier, and two members of the team
            decided to return to the minibus. Exhausted and miserable, the rest
            of us were also ready to go back down, but then the sky cleared, and
            we saw that we were really close to the top of the mountain.
            Suddenly, we were no longer tired. Even though we weren&apos;t
            successful with the time challenge, we were successful with the
            climb challenge. We had done it. What a feeling that was!
            {Kaisetsu(showResults, "22-3B-6")}
          </p>
        </div>
      </div>

      {/* Questions section */}
      <div className="mt-8 space-y-8">
        <div className={cn("space-y-2", showResults && qaFormat(qa, "3B-1"))}>
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="whitespace-nowrap mr-2 font-sans">問 1 </span>
              <span>
                Put the following events (①～④) into the order they happened.
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1 mb-4">
              <div className="flex flex-row items-center">
                {renderSelect("18", 4, answers, setAnswers)}
                <span>→</span>
                {renderSelect("19", 4, answers, setAnswers)}
              <span>→</span>
              </div>
              <div className="flex flex-row items-center">
                {renderSelect("20", 4, answers, setAnswers)}
                <span>→</span>
                {renderSelect("21", 4, answers, setAnswers)}
              </div>
              <div className="flex flex-row gap-2">
                <Explain qa={qa} questionId="3B-1"  isShow={showResults} />
                {Kaisetsu(showResults, "22-3B-7")}
              </div>
            </div>
          </div>
          {[
            "All members reached the top of the highest mountain in Scotland.",
            "Some members gave up climbing Snowdon.",
            "The group travelled by minibus to Wales.",
            "The team members helped to find the writer's phone.",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className={cn("space-y-2", showResults && qaFormat(qa, "3B-2"))}>
          <div className="mb-2">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="whitespace-nowrap mr-2 font-sans">問 2 </span>
              <span>
                What was the reason for being behind schedule when they
                completed Scafell Pike?
              </span>
              <div className="flex flex-row gap-2">
                {renderSelect("22", 4, answers, setAnswers)}
                <Explain qa={qa} questionId="3B-2"  isShow={showResults} />
                {Kaisetsu(showResults, "22-3B-8")}
              </div>
            </div>
          </div>
          {[
            "It took longer than planned to reach the top of Ben Nevis.",
            "It was difficult to make good progress in the dark.",
            "The climbers took a rest in order to save energy.",
            "The team had to wait until the conditions improved.",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className={cn("space-y-2", showResults && qaFormat(qa, "3B-3"))}>
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="whitespace-nowrap mr-2 font-sans">問 3 </span>
              <span>From this story, you learnt that the writer </span>
              <div className="flex flex-row gap-2">
                {renderSelect("23", 4, answers, setAnswers)}
                <span className="-ml-3 mt-1 mr-1">.</span>
                <Explain qa={qa} questionId="3B-3"  isShow={showResults} />
                {Kaisetsu(showResults, "22-3B-9")}
              </div>
            </div>
          </div>
          {[
            "didn't feel a sense of satisfaction",
            "reached the top of all three mountains",
            "successfully completed the time challenge",
            "was the second driver of the minibus",
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
  );
};

export default Ex22_3B;
