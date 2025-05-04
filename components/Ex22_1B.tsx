"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex22_1B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "22_1B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第１問 B"}</h1>
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
      {/* Contest Announcement */}
      <div className="mb-6 md:px-8">
          <div className="leading-6 md:leading-8 md:text-[20px] md:mb-2">
            You are looking at the website for the City Zoo in Toronto, Canada
            and you find an interesting contest announcement. You are thinking
            about entering the contest.
          </div>
          {Kaisetsu(showResults, "22-1B-0")}
        </div>

      <div className="max-w-3xl mx-auto border border-gray-800 p-6 space-y-4">
        {/* Header Section */}
        <div className="flex items-center space-x-4 border-b border-gray-800 pb-4">
          <Image
            src="/images/Ex22-1B-1.webp"
            alt="Baby Giraffe Icon"
            width={48}
            height={48}
            className="w-16 h-16"
          />
          <div className="text-center flex-grow">
            <h1 className="text-2xl font-bold mb-2">Contest!</h1>
            <h2 className="text-xl font-bold mb-2">Name a Baby Giraffe</h2>
            <p className="text-lg">
              Let&apos;s welcome our newest animal to the City Zoo!
            </p>
          </div>
        </div>

        {/* Announcement Section */}
        <div className="text-center border-b border-gray-800 pb-4">
          <p>A healthy baby giraffe was born on May 26 at the City Zoo.</p>
          <p>He&apos;s already walking and running around!</p>
          <p>He weighs 66 kg and is 180 cm tall.</p>
          <p>
            Your mission is to help his parents, Billy and Noelle, pick a name
            for their baby.
          </p>
          {Kaisetsu(showResults, "22-1B-1")}
        </div>

        {/* How to Enter Section */}
        <div className="border-b border-gray-800 pb-4">
          <h3 className="font-bold mb-2">How to Enter</h3>
          <ul className="space-y-2 mb-2">
            <li className="flex items-start">
              <span className="inline-block w-4 h-4 bg-gray-800 transform rotate-45 mt-1 mr-2"></span>
              <span>
                Click on the link here to submit your idea for his name and
                follow the directions.
                <span className="ml-2">
                  → <span className="underline">Enter Here</span>
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-4 h-4 bg-gray-800 transform rotate-45 mt-1 mr-2"></span>
              <span>
                Names are accepted starting at 12:00 a.m. on June 1 until 11:59
                p.m. on June 7.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-4 h-4 bg-gray-800 transform rotate-45 mt-1 mr-2"></span>
              <span>
                Watch the baby giraffe on the live web camera to help you get
                ideas.
                <span className="ml-2">
                  → <span className="underline">Live Web Camera</span>
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-4 h-4 bg-gray-800 transform rotate-45 mt-1 mr-2"></span>
              <span>
                Each submission is $5. All money will go towards feeding the
                growing baby giraffe.
              </span>
            </li>
          </ul>
          {Kaisetsu(showResults, "22-1B-2")}
        </div>

        {/* Contest Schedule Section */}
        <div className="border-b border-gray-800 pb-4">
          <h3 className="font-bold mb-2">Contest Schedule</h3>
          <div className="grid grid-cols-[100px_1fr] gap-4">
            <div className="font-bold">June 8</div>
            <div>
              <p>
                The zoo staff will choose five finalists from all the entries.
              </p>
              <p>
                These names will be posted on the zoo&apos;s website by 5:00
                p.m.
              </p>
            </div>
            <div className="font-bold">June 9</div>
            <div>
              <p>How will the parents decide on the winning name?</p>
              <p>
                Click on the live stream link between 11:00 a.m. and 12:00 p.m.
                to find out!
                <span className="ml-2">
                  → <span className="underline">Live Stream</span>
                </span>
              </p>
              <p>Check our website for the winning name after 12:00 p.m.</p>
            </div>
          </div>
          {Kaisetsu(showResults, "22-1B-3")}
        </div>

        {/* Prizes Section */}
        <div>
          <h3 className="font-bold mb-2">Prizes</h3>
          <p className="mb-2">
            All five contest finalists will receive free one-day zoo passes
            valid until the end of July.
          </p>
          <p>
            The one who submitted the winning name will also get a special photo
            of the baby giraffe with his family, as well as a private Night
            Safari Tour!
          </p>
        </div>
        {Kaisetsu(showResults, "22-1B-4")}
      </div>

      {/* Quiz Section */}
      <div className="max-w-3xl mx-auto mt-4 space-y-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1B-1"))}>
          <div className="flex items-start space-x-2">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>You can enter this contest between </span>
            {renderSelect("3", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="1B-1" />}
            {Kaisetsu(showResults, "22-1B-5")}
          </div>
          {[
            "May 26 and May 31",
            "June 1 and June 7",
            "June 8 and June 9",
            "June 10 and July 31",
          ].map((text, index) => (
            <div key={index} className="flex items-start pl-2 md:pl-8">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1B-2"))}>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              When submitting your idea for the baby giraffe&apos;s name, you
              must
            </span>
            {renderSelect("4", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="1B-2" />}
            <span className="ml-2">{Kaisetsu(showResults, "22-1B-6")}</span>
          </div>
          {[
            "buy a day pass",
            "pay the submission fee",
            "spend five dollars at the City Zoo",
            "watch the giraffe through the website",
          ].map((text, index) => (
            <div key={index} className="flex items-start pl-2 md:pl-8">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1B-3"))}>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              If the name you submitted is included among the five finalists,
              you will
            </span>
            {renderSelect("5", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="1B-3" />}
            <span className="ml-2">{Kaisetsu(showResults, "22-1B-7")}</span>
          </div>
          {[
            "get free entry to the zoo for a day",
            "have free access to the live website",
            "meet and feed the baby giraffe",
            "take a picture with the giraffe&apos;s family",
          ].map((text, index) => (
            <div key={index} className="flex items-start pl-2 md:pl-8">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④"[index]}
              </span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ex22_1B;
