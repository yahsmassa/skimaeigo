"use client";

import React, { useState } from "react";
import { cn, exPageFormat, exQuestionFormat } from "@/lib/util";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex24_2A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "24_2A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  // questionData は展開済みのため削除

  return (
    <div className={exPageFormat}>
      {/* 問題番号とシチュエーション */}
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="md:text-lg font-bold font-sans">{"第２問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {10})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 5分 約200語】
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

      {/* フライヤー */}
      <h3 className="text-gray-700 mb-2 text-justify px-3">
        You are an exchange student at a high school in the UK and find this flyer.
      </h3>
      <div className="bg-white  border border-gray-600 mb-8 p-4">
        <div className="flex items-center justify-between mb-4">
          <Image
            src="/images/Ex24-2A-1.jpg"
            alt="Strategy Game Club Logo"
            width={48}
            height={48}
            className="w-12 h-12 rounded"
          />
          <h3 className="text-xl font-bold underline text-center flex-grow">
            Invitation to the Strategy Game Club
          </h3>
          <Image
            src="/images/Ex24-2A-2.jpg"
            alt="Strategy Game Club Logo"
            width={48}
            height={48}
            className="w-12 h-12 rounded"
          />
        </div>

        <div className="space-y-1 text-justify">
          <p>
            Have you ever wanted to learn strategy games like chess, shogi, or go? They are actually more than just games. You can learn skills such as thinking logically and deeply without distractions. Plus, these games are really fun! This club is open to all students of our school. Regardless of skill level, you are welcome to join.
            {Kaisetsu(showResults, "24-2A-1")}
          </p>
          <p>
            We play strategy games together and...{' '}
            {Kaisetsu(showResults, "24-2A-1B")}
          </p>
          <div>
            <span className="float-right mt-[70px] md:ml-2 w-16 md:w-32">
              <Image
                src="/images/Ex24-2A-3.jpg"
                alt="shogi plate"
                width={160}
                height={160}
                className="w-full h-auto rounded"
              />
            </span>
            <ul className="space-y-1 md:ml-4">
              <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                <span className="select-none">●</span>
                <span>learn basic moves from demonstrations by club members</span>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                <span className="select-none">●</span>
                <span>play online against club friends</span>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                <span className="select-none">●</span>
                <span>share tips on our club webpage</span>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                <span className="select-none">●</span>
                <span>learn the history and etiquette of each game</span>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                <span className="select-none">●</span>
                <span>analyse games using computer software</span>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
                <span className="select-none">●</span>
                <span>participate in local and national tournaments</span>
              </li>
            </ul>
            <div className="clear-both"></div>
          </div>
          <p>
            Regular meetings: Wednesday afternoons in Room 301, Student Centre{' '}
            {Kaisetsu(showResults, "24-2A-2")}
          </p>
          <hr className="border-gray-700 !my-4" />
          <p className="text-xl font-bold underline md:ml-[150px]">Member Comments:</p>
          <ul className="space-y-2">
            <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="select-none">-</span>
              <span>My mind is clearer, calmer, and more focused in class.</span>
            </li>
            <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="select-none">-</span>
              <span>It's cool to learn how some games have certain similarities.</span>
            </li>
            <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="select-none">-</span>
              <span>At tournaments, I like discussing strategies with other participants.</span>
            </li>
            <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="select-none">-</span>
              <span>Members share Internet videos that explain practical strategies for chess.</span>
            </li>
            <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="select-none">-</span>
              <span>It's nice to have friends who give good advice about go.</span>
            </li>
            <li className="grid grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="select-none">-</span>
              <span>
                I was a complete beginner when I joined, and I had no problem!{' '}
                {Kaisetsu(showResults, "24-2A-3")}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 設問 */}
      {/* Questions */}
      <div className={cn(exQuestionFormat, "mt-6")}>
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "2A-1")
          )}
        >
          {/* 問１ */}
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">
              問1
            </span>
            <span className="-mr-2">According to the flyer, which is true about the club?</span>
            <div className="flex flex-row gap-2">
              {renderSelect("6", 4, answers, setAnswers)}
              <Explain qa={qa} questionId={"2A-1"} isShow={showResults} />
              {Kaisetsu(showResults, "24-2A-4")}
            </div>
          </div>
          <ol className="list-none space-y-2 ml-6">
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[0]}</span>
              <span>Absolute beginners are welcome</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[1]}</span>
              <span>Members edit computer programs</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[2]}</span>
              <span>Professional players give formal demonstrations</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[3]}</span>
              <span>Students from other schools can join</span>
            </li>
          </ol>
        </div>
        {/* 問２ */}
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "2A-2")
          )}
        >
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">
              問2
            </span>
            {/* <span className="-mr-2">{questionData.questions[1].prompt}</span> */}
            <span className="-mr-2">Which of the following is <span className="underline font-semibold">not</span> mentioned as a club activity?</span>
            <div className="flex flex-row gap-2">
              {renderSelect("7", 4, answers, setAnswers)}
              <Explain qa={qa} questionId={"2A-2"} isShow={showResults} />
              {Kaisetsu(showResults, "24-2A-5")}
            </div>
          </div>
          <ol className="list-none space-y-2 ml-6">
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[0]}</span>
              <span>Having games with non-club members</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[1]}</span>
              <span>Playing matches against computers</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[2]}</span>
              <span>Sharing game-playing ideas on the Internet</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[3]}</span>
              <span>Studying the backgrounds of strategy games</span>
            </li>
          </ol>
        </div>

        {/* 問３ */}
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "2A-3")
          )}
        >
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">
              問3
            </span>
            {/* <span className="-mr-2">{questionData.questions[2].prompt}</span> */}
            <span className="-mr-2">One <span className="underline font-semibold">opinion</span> stated by a member is that</span>
            <div className="flex flex-row gap-2">
              {renderSelect("8", 4, answers, setAnswers)}
              <span className="-ml-3 mr-2">.</span>
              <Explain qa={qa} questionId={"2A-3"} isShow={showResults} />
              {Kaisetsu(showResults, "24-2A-6")}
            </div>
          </div>
          <ol className="list-none space-y-2 ml-6">
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[0]}</span>
              <span>comparing different games is interesting</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[1]}</span>
              <span>many videos about go are useful</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[2]}</span>
              <span>members learn tips at competitions</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[3]}</span>
              <span>regular meetings are held off campus</span>
            </li>
          </ol>
        </div>

        {/* 問４ */}
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "2A-4")
          )}
        >
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">
              問4
            </span>
            <span className="-mr-2">The club invitation and a member&apos;s comment both mention that</span>
            <div className="flex flex-row gap-2">
              {renderSelect("9", 4, answers, setAnswers)}
              <span className="-ml-3 mr-2">.</span>
              <Explain qa={qa} questionId={"2A-4"} isShow={showResults} />
              {Kaisetsu(showResults, "24-2A-7")}
            </div>
          </div>
          <ol className="list-none space-y-2 ml-6">
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[0]}</span>
              <span>new members must demonstrate experience</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[1]}</span>
              <span>online support is necessary to be a good player</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[2]}</span>
              <span>shogi is a logical and stimulating game</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[3]}</span>
              <span>strategy games help improve one&apos;s concentration</span>
            </li>
          </ol>
        </div>

        {/* 問５ */}
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "2A-5")
          )}
        >
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">
              問5
            </span>
            <span className="-mr-2">This club is most likely suitable for students who want to</span>
            <div className="flex flex-row gap-2">
              {renderSelect("10", 4, answers, setAnswers)}
              <span className="-ml-3 mr-2">.</span>
              <Explain qa={qa} questionId={"2A-5"} isShow={showResults} />
              {Kaisetsu(showResults, "24-2A-8")}
            </div>
          </div>
          <ol className="list-none space-y-2 ml-6">
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[0]}</span>
              <span>create their own computer strategy games</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[1]}</span>
              <span>improve their skill level of playing strategy games</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[2]}</span>
              <span>learn proper British etiquette through playing strategy games</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 ">{"①②③④"[3]}</span>
              <span>spend weekends playing strategy games in the club room</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex24_2A;
