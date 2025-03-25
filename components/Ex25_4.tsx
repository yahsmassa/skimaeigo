"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
const Ex25_4 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "4-1",
      qa: [
        {
          questionNumber: "14",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は①「しかしながら」",
        "「持ち物を少なくすべき」という内容と，「物を買いすぎる」という内容が対立的であると判断する",
      ],
    },
    {
      questionId: "4-2",
      qa: [
        {
          questionNumber: "15",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は③「話している相手に注意を集中するようにする」",
        "対面状況での人間関係を重視すべきという主張がなされていると捉える",
      ],
    },
    {
      questionId: "4-3",
      qa: [
        {
          questionNumber: "16",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[16] 最終段落冒頭に &quot;In summary&quot;（要約すると）と書かれていることから，下線部(3)が本文のどの内容をまとめて言い換えているかを考える。第2段落以降の言い換えは最終段落の第3文以降に書かれているため，この第1文・第2文は第1段落の言い換えである可能性が高い。よって，第1段落第3文-第4文 ",
        "Instead, you can slow down and notice things that are truly meaningful to you. By taking your time and being completely focused on these things, you can improve the quality of your work and life.",
        "（代わりに，立ち止まって自分にとって本当に意味のあることに気づくことができます。時間をかけ，それらに完全に集中することで，仕事や生活の質を向上させることができます）という内容を言い換えたものにする。したがって，①「仕事と私生活の両方で満足感を得ることができる」が正解。",
      ],
    },
    {
      questionId: "4-4",
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
        "正解は①「仕事と私生活の両方で満足感を得ることができる」、下線部(3)が本文のどの内容をまとめて言い換えているかを考える。",
        "「代わりに，立ち止まって自分にとって本当に意味のあることに気づくことができます。時間をかけ，それらに完全に集中することで，仕事や生活の質を向上させることができます」という内容を言い換えたものにする",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第４問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {12})</span>
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
      <div className="mb-8 text-gray-800">
        In English class, you are writing an essay on a topic related to
        lifestyle in modern society. This is your most recent draft. You are now
        working on improvements based on comments from your teacher.
        {Kaisetsu(showResults, "25-4-1")}
      </div>

      <div className="border border-gray-300">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-2/3 p-6 text-center font-medium text-lg border-b border-r border-gray-300">
                Try a Slow Life
              </th>
              <th className="w-1/3 p-6 text-center font-medium text-lg border-b border-gray-300">
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-2/3 p-6 align-top border-r border-gray-300">
                <div className="space-y-4">
                  <p className="indent-7">
                    In modern society, people are always busy and this fast pace
                    of living can be stressful. The movement toward a slow life
                    has shown us that you don&apos;t have to be busy all the
                    time. Instead, you can slow down and notice things that are
                    truly meaningful to you. By taking your time and being
                    completely focused on these things, you can improve the
                    quality of your work and life. This essay will describe some
                    ways to do this.
                    {Kaisetsu(showResults, "25-4-2")}
                  </p>

                  <p className="indent-7">
                    One key point of the slow life is to own fewer belongings.
                    This makes it easier to concentrate on everyday activities.
                    <sup>(1)</sup>^ Many people today tend to buy more than they
                    can consume. Do you <i>really</i> need five pairs of the
                    latest sneakers? Slow-lifers would recommend reducing
                    possessions and buying only necessary items.
                    {Kaisetsu(showResults, "25-4-3")}
                  </p>

                  <p className="indent-7">
                    Another recommendation is to think about your communication
                    style and manner in your public and private life. Sadly, one
                    study has found that around 90% of people check smartphones
                    during face-to-face conversations, which may appear impolite
                    and affect relationships negatively.<sup>(2)</sup>^
                    {Kaisetsu(showResults, "25-4-4")}
                  </p>

                  <p className="indent-7">
                    The final aspect of slow living is to take 10 to 15 minutes
                    to reflect on your day. Try to recollect people and events
                    that were significant. By mentally highlighting them, you
                    can find fulfillment in daily tasks.
                    {Kaisetsu(showResults, "25-4-5")}
                  </p>

                  <p className="indent-7">
                    In summary, through a slow life,{" "}
                    <u>
                      <sup>(3)</sup>you can relax
                    </u>
                    . Even small changes can improve your life. Avoid having
                    non- essential items, spend quality time with people around
                    you, and{" "}
                    <u>
                      <sup>(4)</sup>remember what you talked about with your
                      friends
                    </u>
                    . By doing these things, you will have a chance to live a
                    better and more rewarding life.
                    {Kaisetsu(showResults, "25-4-6")}
                  </p>
                </div>
              </td>
              <td className="w-1/3 p-6 align-top">
                <div className="space-y-4 italic ">
                  <p>
                    (1) Add an appropriate connecting word.
                    {Kaisetsu(showResults, "25-4-1B")}
                  </p>

                  <p>
                    (2) Add a concluding sentence to improve this paragraph.
                    {Kaisetsu(showResults, "25-4-2B")}
                  </p>

                  <p>
                    (3) The underlined part isn&apos;t your main argument.
                    Rewrite it.
                    {Kaisetsu(showResults, "25-4-3B")}
                  </p>

                  <p>
                    (4) The underlined part doesn&apos;t describe your essay
                    content well. Change it.
                    {Kaisetsu(showResults, "25-4-4B")}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border-t border-gray-300 p-6">
                <div className="font-medium mb-2">Overall Comments:</div>
                <div className="italic">
                  You have really improved your essay. Keep working on it.
                  I&apos;m going to follow your suggestions to slow down and
                  hopefully improve the quality of my life.☺
                  {Kaisetsu(showResults, "25-4-7")}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-4 mt-4">
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span className="mr-2">
              Based on Comment (1), which is the best word to add?
            </span>
            {renderSelect("14", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4-1" />}
            {Kaisetsu(showResults, "25-4-8")}
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

        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span className="mr-2">
              Based on Comment (2), which is the best sentence to add?
            </span>
            {renderSelect("15", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4-2" />}
            {Kaisetsu(showResults, "25-4-9")}
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

        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span className="flex gap-1">
              Based on Comment (3), which is the best phrase to replace the
              underlined part?{" "}
            </span>
            {renderSelect("16", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4-3" />}
            {Kaisetsu(showResults, "25-4-10")}
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
              underlined part?{" "}
            </span>
            {renderSelect("17", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4-4" />}
            {Kaisetsu(showResults, "25-4-11")}
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
