"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex25_4 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "25_4")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="md:text-lg font-bold font-sans">{"第４問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {12})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 10分 400語弱】
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
      <div className="mb-4 text-gray-800 md:text-lg">
        In English class, you are writing an essay on a topic related to
        lifestyle in modern society. This is your most recent draft. You are now
        working on improvements based on comments from your teacher.{' '}
        {Kaisetsu(showResults, "25-4-1")}
      </div>

      <div className="border-2 border-black">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-2/3 p-6 text-center font-medium text-lg border-b border-r border-black">
                Try a Slow Life
              </th>
              <th className="w-1/3 p-6 text-center font-medium text-lg border-b border-black">
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-2/3 md:w-[75%]  p-6 align-top border-r border-black md:text-justify">
                <div className="space-y-1">
                  <p className="indent-7 ">
                    In modern society, people are always busy and this fast pace
                    of living can be stressful. The movement toward a slow life
                    has shown us that you don&apos;t have to be busy all the
                    time. Instead, you can slow down and notice things that are
                    truly meaningful to you. By taking your time and being
                    completely focused on these things, you can improve the
                    quality of your work and life. This essay will describe some
                    ways to do this.{' '}
                    {Kaisetsu(showResults, "25-4-2")}
                  </p>

                  <p className="indent-7 ">
                    One key point of the slow life is to own fewer belongings.
                    This makes it easier to concentrate on everyday activities.
                    <sup className="text-base">
                      (1)
                    </sup>
                    <span className="text-2xl font-semibold">^</span>Many people today tend to buy more than they can consume. Do
                    you <i>really</i> need five pairs of the latest sneakers?
                    Slow-lifers would recommend reducing possessions and buying
                    only necessary items.{' '}
                    {Kaisetsu(showResults, "25-4-3")}
                  </p>

                  <p className="indent-7 ">
                    Another recommendation is to think about your communication
                    style and manner in your public and private life. Sadly, one
                    study has found that around 90% of people check smartphones
                    during face-to-face conversations, which may appear impolite
                    and affect relationships negatively.<sup className="text-base">
                      (2)
                    </sup>
                    <span className="text-2xl font-semibold">^</span>
                    {' '}
                    {Kaisetsu(showResults, "25-4-4")}
                  </p>

                  <p className="indent-7 ">
                    The final aspect of slow living is to take 10 to 15 minutes
                    to reflect on your day. Try to recollect people and events
                    that were significant. By mentally highlighting them, you
                    can find fulfillment in daily tasks.
                    {' '}
                    {Kaisetsu(showResults, "25-4-5")}
                  </p>

                  <p className="indent-7 ">
                    In summary, through a slow life,{" "}<sup className="text-base">(3)</sup>
                    <u>
                      you can relax
                    </u>
                    . Even small changes can improve your life. Avoid having
                    non- essential items, spend quality time with people around
                    you, and{" "}<sup className="text-base">(4)</sup>
                    <u>
                      remember what you talked about with your
                      friends
                    </u>
                    . By doing these things, you will have a chance to live a
                    better and more rewarding life.
                    {' '}
                    {Kaisetsu(showResults, "25-4-6")}
                  </p>
                </div>
              </td>
              <td className="w-1/3 md:w-[25%] p-2 align-top font-semibold">
                <div className="space-y-2 md:space-y-0 italic ">
                  <p className="mt-[630px] md:mt-[270px]">
                    (1) Add an appropriate connecting word.{' '}
                    {Kaisetsu(showResults, "25-4-1B")}
                  </p>

                  <p className="!mt-[500px] md:!mt-[110px]">
                    (2) Add a concluding sentence to improve this paragraph.
                    {' '}
                    {Kaisetsu(showResults, "25-4-2B")}
                  </p>

                  <p className="!mt-[120px] md:!mt-0">
                    (3) The underlined part isn&apos;t your main argument.
                    Rewrite it.{' '}
                    {Kaisetsu(showResults, "25-4-3B")}
                  </p>

                  <p>
                    (4) The underlined part doesn&apos;t describe your essay
                    content well. Change it.
                    {' '}
                    {Kaisetsu(showResults, "25-4-4B")}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border-t  border-black p-6">
                <div className="font-medium mb-2">Overall Comments: {' '}
                {Kaisetsu(showResults, "25-4-7")}</div>
                <div className="italic">
                  You have really improved your essay. Keep working on it.
                  I&apos;m going to follow your suggestions to slow down and
                  hopefully improve the quality of my life.☺
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Question 1 */}
      <div className="space-y-4 mt-4">
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span className="mr-2">
              Based on Comment (1), which is the best word to add?
            </span>
            <div className="flex flex-row items-center gap-2">
              {renderSelect("14", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="4-1"  isShow={showResults} />
              {Kaisetsu(showResults, "25-4-8")}
            </div>
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            <div>
              {["However", "Moreover", "Otherwise", "Therefore"].map(
                (text, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="inline-block w-6 h-6 text-center">
                      {"①②③④"[index]}
                    </span>
                    <p>{text}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span className="mr-2">
              Based on Comment (2), which is the best sentence to add?
            </span>
            <div className="flex flex-row items-center gap-2">
              {renderSelect("15", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="4-2"  isShow={showResults} />
              {Kaisetsu(showResults, "25-4-9")}
            </div>
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            <div>
              {[
                "Limit the time you spend having conversations with people.",
                "Send messages with your phone just once or twice a day.",
                "Try to focus your attention on the person you are talking with.",
                "Use your phone to find real friends through social media.",
              ].map((text, index) => (
                <div key={index} className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center">
                    {"①②③④"[index]}
                  </span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span className="flex gap-1">
              Based on Comment (3), which is the best phrase to replace the
              underlined part?{" "}
            </span>
            <div className="flex flex-row items-center gap-2">
              {renderSelect("16", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="4-3"  isShow={showResults} />
              {Kaisetsu(showResults, "25-4-10")}
            </div>
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            <div>
              {[
                "you can be satisfied at work and in your personal life",
                "you can complete tasks in a short period of time",
                "you can decrease stress by sharing work with others",
                "you can focus on the outcome rather than the process",
              ].map((text, index) => (
                <div key={index} className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center">
                    {"①②③④"[index]}
                  </span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span className="flex gap-1">
              Based on Comment (4), which is the best phrase to replace the
              underlined part?
            </span>
            <div className="flex flex-row items-center gap-2">
              {renderSelect("17", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="4-4"  isShow={showResults} />
              {Kaisetsu(showResults, "25-4-11")}
            </div>
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            <div>
              {[
                "plan your daily activities as soon as you wake up",
                "recall the bad things that happened in your life",
                "think back to the memorable parts of your day",
                "throw away unwanted items before sleeping",
              ].map((text, index) => (
                <div key={index} className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center">
                    {"①②③④"[index]}
                  </span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex25_4;
