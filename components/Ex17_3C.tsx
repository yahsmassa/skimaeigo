"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const JapaneseTestQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "3C-1",
      qa: [
        {
          questionNumber: "32",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は③ 私たちの町の住民は、ここに新しい職場ができることで恩恵を受けるでしょう。",
        "人口が増えると、地元のお店に人が増え、隣街に働きに行っている人々にとっては家族と過ごす時間が増えるという文脈から",
      ],
    },
    {
      questionId: "3C-2",
      qa: [
        {
          questionNumber: "33",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は④ 町の経済と利便性を向上させる", "翻訳参照"],
    },
    {
      questionId: "3C-3",
      qa: [
        {
          questionNumber: "34",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は② 住民の家庭生活を考慮する", "翻訳参照"],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第３問 C"}</h1>
          <span className="text-gray-600">(配点 {18})</span>
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
      <div className="mb-6">
        <p className="flex items-start mb-4">
          <span className="font-bold mr-2">C</span>
          <span>
            次の会話は，「市の発展」をテーマとして，ある町で行われた住民による話し合
            いでのやりとりの一部である。
            <span className="inline-flex items-center mx-2">
              <div className="border border-black h-8 w-12 flex items-center justify-center mx-1">
                32
              </div>
              <span>～</span>
              <div className="border border-black h-8 w-12 flex items-center justify-center mx-1">
                34
              </div>
            </span>
            に入れるのに最も適当なもの
            を，それぞれ下の①～④のうちから一つずつ選べ。
          </span>
        </p>
      </div>
      <div className="space-y-6 mb-8">
        <div className="flex items-start flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 md:mr-6">Alice:</span>
          <span>
            The mayor has asked me to lead this meeting to discuss ways to
            develop our town. Tom, how about beginning with you?
            {Kaisetsu(showResults, "17-3C-1")}
          </span>
        </div>

        <div className="flex items-start  flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 md:mr-7">Tom:</span>
          <div>
            <p className="mb-2">
              Sure. If a new factory is built here, more people will move to our
              town. This would help local shops and restaurants because there
              would be more customers. Also, some of our residents working in
              the next town could find jobs here. Many people have complained
              about their long drive back and forth to work. Working closer to
              home would improve their family life by giving them more time to
              spend together.
              {Kaisetsu(showResults, "17-3C-2")}
            </p>
          </div>
        </div>

        <div
          className={cn(
            "flex md:items-center",
            showResults && qaFormat(qa, "3C-1")
          )}
        >
          <span className="font-bold  md:mr-6">Alice:</span>
          <div className="flex-1 flex-wrap pl-4 flex items-center">
            <span>Tom, are you saying that</span>
            {renderSelect("32", 4, answers, setAnswers)}
            <span className="mr-2">?</span>
            {showResults && <Explain qa={qa} questionId="3C-1" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "17-3C-3")}
          </div>
        </div>
      </div>
      <div className="ml-12 flex flex-col space-y-4 mb-4">
        {[
          "many of our residents prefer traveling to another town to work",
          "new businesses should do much more to increase their sales",
          "people in our town would benefit from a new workplace here",
          "working in the next town may make people's lives better",
        ].map((text, index) => (
          <div key={index} className="flex items-start ">
            <span className="h-6 w-6 text-xl flex items-center justify-center mr-3">
              {["①", "②", "③", "④"][index]}
            </span>
            <span>{text}</span>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        <div className="flex items-start flex-wrap md:flex-nowrap">
          <span className="font-bold mr-7">Tom:</span>
          <span>Yes, that's correct.</span>
        </div>

        <div className="flex items-start flex-wrap md:flex-nowrap">
          <span className="font-bold mr-5">Carol:</span>
          <div>
            <p>
              Well, I think it would be better to build a shopping mall. It
              would be good for both customers and shop owners. When the new
              housing complex is completed in the northeastern part of town,
              people living there would be pleased with a nearby mall to shop
              at. Lots of my fellow merchants have been wishing they could move
              to a new place. Such a mall would be a benefit to shop owners
              because more people would visit their shops.
              {Kaisetsu(showResults, "17-3C-4")}
            </p>
          </div>
        </div>

        <div className="flex items-start flex-wrap md:flex-nowrap">
          <span className="font-bold mr-7">Rick:</span>
          <div>
            <p>
              I agree. A mall would also be useful for people in other parts of
              town because they could do all of their shopping at one place. It
              would save everyone time, and families would enjoy their lives
              more. And the highway exit is in the same area. So, not only would
              people in our town shop at a mall built there but people from
              other towns would also have easy access to it. That would increase
              our local businesses' profits.
              {Kaisetsu(showResults, "17-3C-5")}
            </p>
          </div>
        </div>

        <div className="flex items-start flex-wrap md:flex-nowrap">
          <span className="font-bold mr-5">Carol:</span>
          <span>
            Right. It would make family life here much better as well as bring
            more customers to our town.
            {Kaisetsu(showResults, "17-3C-6")}
          </span>
        </div>

        <div
          className={cn(
            "flex md:items-center",
            showResults && qaFormat(qa, "3C-2")
          )}
        >
          <span className="font-bold  md:mr-6">Alice:</span>
          <div className="flex-1 flex-wrap pl-4 flex items-center">
            <span className="mr-2">So, you both feel that a mall would</span>
            <span className="mr-2">help</span>
            {renderSelect("33", 4, answers, setAnswers)}
            <span className="mr-2">.</span>
            {showResults && <Explain qa={qa} questionId="3C-2" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "17-3C-7")}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 my-4">
        {[
          "bring money into our town to fix the highway",
          "develop downtown and the northeastern areas",
          "give rise to a lot of controversies and arguments",
          "improve our town's economy and convenience",
        ].map((text, index) => (
          <div key={index} className="ml-12 flex items-start">
            <span className="h-6 w-6 text-xl flex items-center justify-center mr-3">
              {["①", "②", "③", "④"][index]}
            </span>
            <span>{text}</span>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        <div className="flex items-start flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 md:mr-5">Leslie:</span>
          <div>
            <p>
              I don't think building a mall or opening a business is the only
              way to help our economy grow. We should find ways of using the
              beauty of nature, which our town is already famous for. It makes
              our town a nice place for families to live in.
              {Kaisetsu(showResults, "17-3C-8")}
            </p>
          </div>
        </div>

        <div className="flex items-start flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 md:mr-6">Ellen:</span>
          <div>
            <p>
              I think so, too. We should try to develop without changing the
              things that families living here and visitors enjoy. Using the
              beautiful scenery of our town in more creative ways would
              encourage people to come and live here. That would bring more
              money into our town.
              {Kaisetsu(showResults, "17-3C-9")}
            </p>
          </div>
        </div>

        <div className="flex items-start flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 md:mr-5">Leslie:</span>
          <div>
            <p>
              I completely agree. In the long run, our town will be hurt if its
              natural surroundings are not preserved.
              {Kaisetsu(showResults, "17-3C-10")}
            </p>
          </div>
        </div>

        <div className={cn("flex", showResults && qaFormat(qa, "3C-3"))}>
          <span className="font-bold md:mr-6">Alice:</span>
          <div className="flex-1 flex-wrap pl-4 flex items-center">
            <span className="mr-2">
              So, Leslie and Ellen are talking about the importance of
              maintaining the natural features of our town. Well, from our
              discussion so far, it seems everyone thinks, when developing our
              town,
            </span>

            <span className="mr-2">we should</span>
            {renderSelect("34", 4, answers, setAnswers)}
            <span className="mr-2">
              . Let's see if there are any other points we need to take into
              account.
            </span>
            {showResults && <Explain qa={qa} questionId="3C-3" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "17-3C-12")}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 my-4">
        {[
          "build a large shopping center",
          "consider residents' family lives",
          "increase the number of employees",
          "think of the natural environment",
        ].map((text, index) => (
          <div key={index} className="ml-12 flex items-start">
            <span className="h-6 w-6 text-xl flex items-center justify-center mr-3">
              {["①", "②", "③", "④"][index]}
            </span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JapaneseTestQuestion;
