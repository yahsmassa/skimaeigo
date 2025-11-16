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

  // questionData / comments / q2Options / q3Options は展開済みのため削除
  return (
    <div className={cn(exPageFormat)}>
      {/* 問題番号とシチュエーション */}
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="md:text-lg font-bold font-sans">{"第３問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {9})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 5分 約400語】
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
      <div className="mb-0 px-2 md:px-4">
        <p className="text-base indent-5">You are going to participate in an English Day. As preparation, you are reading an article in the school newspaper written by Yuzu, who took part in it last year.
            {' '}{Kaisetsu(showResults, "24-3B-0")}
        </p>
      </div>

      <div className="mt-4 bg-white border-2 border-black mb-8 p-4 sm:p-6 mx-2 sm:mx-0">
        <h3 className="text-xl font-bold text-center mb-4">
          Virtual Field Trip to a South Sea Island
        </h3>

        <div className="space-y-1">
          <div className="text-justify">
            <p className="mb-2">
              This year, for our English Day, we participated in a virtual science tour. The winter weather had been terrible, so we were excited to see the tropical scenery of the volcanic island projected on the screen.{' '} {Kaisetsu(showResults, "24-3B-1")}
            </p>
            <p className="mb-2">
              First, we &quot;took a road trip&quot; to learn about the geography of the island, using navigation software to view the route. We &quot;got into the car,&quot; which our teacher, Mr Leach, sometimes stopped so we could look out of the window and get a better sense of the rainforest. Afterwards, we asked Mr Leach about what we&apos;d seen.{' '} {Kaisetsu(showResults, "24-3B-2")}
            </p>
            <p className="mb-2">
              Later, we &quot;dived into the ocean&quot; and learnt about the diversity of marine creatures. We observed a coral reef via a live camera. Mr Leach asked us if we could count the number of creatures, but there were too many! Then he showed us an image of the ocean 10 years ago. The reef we&apos;d seen on camera was dynamic, but in the photo it was even more full of life. It looked so different after only 10 years! Mr Leach told us human activity was affecting the ocean and it could be totally ruined if we didn&apos;t act now. {' '}{Kaisetsu(showResults, "24-3B-3")}
            </p>
            <div className="my-1">
              <p>
                <span className="block w-full md:float-right md:w-[200px] md:ml-4 md:mb-2">
                  <Image
                    src="/images/Ex24-3B-1.jpg"
                    alt="Starry night sky with shooting stars"
                    width={800}
                    height={600}
                    className="w-full rounded-lg"
                  />
                </span>
                In the evening, we studied astronomy under a &quot;perfect starry sky.&quot; We put up tents in the gymnasium and created a temporary planetarium on the ceiling using a projector. We were fascinated by the sky full of constellations, shooting stars, and the Milky Way. Someone pointed out one of the brightest lights and asked Mr Leach if it was Venus, a planet close to Earth. He nodded and explained that humans have created so much artificial light that hardly anything is visible in our city&apos;s night sky. {' '}{Kaisetsu(showResults, "24-3B-4")}
              </p>
              <div className="hidden md:block clear-both"></div>
            </div>
            <p className="mb-2">
              On my way home after school, the weather had improved and the sky was now cloudless. I looked up at the moonless sky and realised what Mr Leach had told us was true. {' '}{Kaisetsu(showResults, "24-3B-5")}
            </p>
          </div>
        </div>
      </div>

      {/* 設問部分 */}
      <div className="w-full max-w-2xl mx-auto px-2 md:px-0 sm:px-4">
        <div className={cn("mb-6", showResults && qaFormat(qa, "3B-1"))}>
          <div className="flex items-center flex-wrap mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問1</span>
            <span className="mb-2">
              Yuzu&apos;s article also included student comments (⓪~④)
              describing the events in the virtual tour. Put the comments in the
              order in which the events happened.
            </span>
            <div className="flex flex-row flex-wrap">
              <div className="flex flex-row mb-2">
                {renderSelect("18", 4, answers, setAnswers)}
                <div className="mx-1 md:mx-0">→</div>
                {renderSelect("19", 4, answers, setAnswers)}
                <div className="mx-1 md:mx-0">→</div>
              </div>
              <div className="flex flex-row  mb-2">
                {renderSelect("20", 4, answers, setAnswers)}
                <div className="mx-1 md:mx-0">→</div>
                {renderSelect("21", 4, answers, setAnswers)}
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"3B-1"} isShow={showResults} />
              {Kaisetsu(showResults, "24-3B-7")}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          <div className="p-3 border rounded-lg bg-white">
            <div className="text-sm mb-1">①</div>
            <div className="text-sm md:text-base">
              I was wondering how dangerous the island was. I saw beautiful birds and a huge snake in the jungle. {Kaisetsu(showResults, "24-3B-8")}
            </div>
          </div>
          <div className="p-3 border rounded-lg bg-white">
            <div className="text-sm mb-1">②</div>
            <div className="text-sm md:text-base">
              It was really shocking that there had been many more creatures before. We should protect our beautiful oceans! {Kaisetsu(showResults, "24-3B-9")}
            </div>
          </div>
          <div className="p-3 border rounded-lg bg-white">
            <div className="text-sm mb-1">③</div>
            <div className="text-sm md:text-base">
              Setting up a camping site in the gymnasium was kind of weird, but great fun! Better than outside, because we weren&apos;t bitten by bugs! {Kaisetsu(showResults, "24-3B-10")}
            </div>
          </div>
          <div className="p-3 border rounded-lg bg-white">
            <div className="text-sm mb-1">④</div>
            <div className="text-sm md:text-base">
              We were lost for words during the space show and realised we often don&apos;t notice things even though they&apos;re there. {Kaisetsu(showResults, "24-3B-11")}
            </div>
          </div>
        </div>

        <div className={cn("my-8", showResults && qaFormat(qa, "3B-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問2</span>
            <span>
              From the tour, Yuzu did&nbsp;{" "}
              <span className="underline font-semibold">not</span>&nbsp; learn about the
            </span>
            {renderSelect("22", 4, answers, setAnswers)}
            <span>of the south sea island.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"3B-2"} isShow={showResults} />
              {Kaisetsu(showResults, "24-3B-12")}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-start">
              <span className="mr-2">①</span>
              <span>marine ecosystem</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">②</span>
              <span>night-time sky</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">③</span>
              <span>seasonal weather</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">④</span>
              <span>trees and plants</span>
            </div>
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
            <div className="flex items-start">
              <span className="mr-2">①</span>
              <span>a shooting star</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">②</span>
              <span>just a few stars</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">③</span>
              <span>the full moon</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">④</span>
              <span>the Milky Way</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex24_3B;
