"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  cn,
  exPageFormat,
  exQuestionFormat,
} from "@/lib/util";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";
export interface HeaderText {
  title: string;
  description: string;
}

export interface BlogContentItem {
  type: "greeting" | "paragraph";
  content: string;
  link?: string;
  endContent?: string;
}

interface RuleItem {
  text: string;
  emphasis: string;
  afterEmphasis: string;
}

interface Rules {
  title: string;
  items: RuleItem[];
}

const Ex24_3A: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const headerText: HeaderText = {
    title: "",
    description:
      "Susan, your English ALT's sister, visited your class last month. Now back in the UK, she wrote on her blog about an event she took part in.",
  };

  const blogContent: BlogContentItem[] = [
    { type: "greeting", content: "Hi!" },
    {
      type: "paragraph",
      content:
        "I participated in a photo rally for foreign tourists with my friends: See the rules on the right. As photo rally beginners, we decided to aim for only five of the checkpoints. In three minutes, we arrived at our first target, the city museum. In quick succession, we made the second, third, and fourth targets. Things were going smoothly!",
    },
    {
      type: "paragraph",
      content:
        "But, on the way to the last target, the statue of a famous samurai from the city, we got lost. Time was running out and my feet were hurting from walking for over two hours. We stopped a man with a pet monkey for help, but neither our Japanese nor his English were good enough. After he'd explained the way using gestures, we realised we wouldn't have enough time to get there and would have to give up.",
    },
    {
      type: "paragraph",
      content:
        "We took a photo with him and said goodbye. When we got back to Sakura City Hall, we were surprised to hear that the winning team had completed 19 checkpoints. One of our photos was selected to be on the event website (click ",
      link: "here",
      endContent:
        '). It reminds me of the man\'s warmth and kindness: our own "gold medal."',
    },
  ];

  const rules: Rules = {
    title: "Sakura City Photo Rally Rules",
    items: [
      {
        text: "Each group can only use the",
        emphasis: "camera and paper map",
        afterEmphasis: ", both provided by us",
      },
      {
        text: "Take as many photos of",
        emphasis: "25 checkpoints",
        afterEmphasis: "(designated sightseeing spots) as possible",
      },
      {
        text: "",
        emphasis: "3-hour",
        afterEmphasis: "time limit",
      },
      {
        text: "Photos must include",
        emphasis: "all 3 team members",
        afterEmphasis: "",
      },
      {
        text: "All members must move",
        emphasis: "together",
        afterEmphasis: "",
      },
      {
        text: "",
        emphasis: "No",
        afterEmphasis: "mobile phones",
      },
      {
        text: "",
        emphasis: "No",
        afterEmphasis: "transport",
      },
    ],
  };

  // ブログ本文レンダリングは個別に展開

  const questions = [
    {
      number: "1",
      prompt: "You click the link in the blog. Which picture appears?",
      options: [
        "/images/Ex24-3A-1.jpg",
        "/images/Ex24-3A-2.jpg",
        "/images/Ex24-3A-3.jpg",
        "/images/Ex24-3A-4.jpg",
      ],
      answer: 1,
    },
    {
      number: "2",
      prompt:
        "You are asked to comment on Susan's blog. Which would be an appropriate comment to her?",
      options: [
        "I want to see a picture of you wearing the gold medal!",
        "You did your best. Come back to Japan and try again!",
        "You reached 19 checkpoints in three hours? Really? Wow!!",
        "Your photo is great! Did you upgrade your phone?",
      ],
      answer: 1,
    },
  ];

  const question: QandA[] = qanda.find(q => q.id === "24_3A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      {/* 問題番号とシチュエーション */}
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第３問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {6})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 5分 約250単語】
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
      <div className="mb-1">
        <p className="text-base">
          {headerText.title} {headerText.description}
          {Kaisetsu(showResults, "24-3A-1")}
        </p>
      </div>

      <Card>
        <CardContent className="text-justify">
          <div className="">
            <div className="w-full md:w-[280px] md:float-right md:ml-6 md:mb-2">
              <div className="border border-gray-200 p-4 rounded">
                <h2 className="font-bold mb-4">{rules.title}</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span>Each group can only use the </span>
                      <span className="font-semibold">camera</span>
                      <span > and </span>
                      <span className="font-semibold">paper map</span>
                      <span>, both provided by us</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span>Take as many photos of </span>
                      <span className="font-semibold">25 checkpoints</span>
                      <span>(designated sightseeing spots) as possible</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span className="font-semibold">3-hour</span>
                      <span> time limit</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span>Photos must include </span>
                      <span className="font-semibold">all 3 team members</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span>All members must move </span>
                      <span className="font-semibold">together</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span className="font-semibold">No</span>
                      <span> mobile phones</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span className="font-semibold">No</span>
                      <span> transport</span>
                    </span>
                  </li>
                </ul>
                {Kaisetsu(showResults, "24-3A-5")}
              </div>
            </div>
            <p className="mb-4">
              Hi!
            </p>
            <p className="">
              I participated in a photo rally for foreign tourists with my friends: See the rules on the right. As photo rally beginners, we decided to aim for only five of the checkpoints. In three minutes, we arrived at our first target, the city museum. In quick succession, we made the second, third, and fourth targets. Things were going smoothly!
              <span className="[&>button]:inline-block align-middle ml-1">
                {Kaisetsu(showResults, "24-3A-2")}
              </span>
            </p>
            <p className="">
              But, on the way to the last target, the statue of a famous samurai from the city, we got lost. Time was running out and my feet were hurting from walking for over two hours. We stopped a man with a pet monkey for help, but neither our Japanese nor his English were good enough. After he'd explained the way using gestures, we realised we wouldn't have enough time to get there and would have to give up.
              <span className="[&>button]:inline-block align-middle ml-1">
                {Kaisetsu(showResults, "24-3A-3")}
              </span>
            </p>
            <p className="">
              We took a photo with him and said goodbye. When we got back to Sakura City Hall, we were surprised to hear that the winning team had completed 19 checkpoints. One of our photos was selected to be on the event website (click <span className="underline">here</span>). It reminds me of the man's warmth and kindness: our own "gold medal."
              <span className="[&>button]:inline-block align-middle ml-1">
                {Kaisetsu(showResults, "24-3A-4")}
              </span>
            </p>
            <div className="hidden md:block clear-both"></div>
          </div>
        </CardContent>
      </Card>
      {/* Questions */}
      <div className={cn(exQuestionFormat, "mt-6")}>
        {questions.map((question, index) => (
          <div
            key={index}
            className={cn(
              "mb-4",
              showResults && qaFormat(qa, "3A-" + (index + 1))
            )}
          >
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <span className="whitespace-nowrap mr-2 font-sans">
                問{question.number}
              </span>
              <span className="text-left">{question.prompt}</span>
              <div className="flex flex-row gap-2">
                {renderSelect(String(index + 16), 4, answers, setAnswers)}
                <Explain qa={qa} questionId={"3A-" + String(index + 1)} isShow={showResults} />
                {Kaisetsu(showResults, "24-3A-" + String(index + 6))}
              </div>
            </div>
            {index === 1 ? (
              <ol className="list-none space-y-2 ml-6">
                {question.options.map((option, optIndex) => (
                  <li key={optIndex} className="flex items-start space-x-2">
                    <span className="w-6 text-right">{"①②③④"[optIndex]}</span>
                    <span>{option}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex flex-col items-center">
                    {"①②③④"[optIndex]}
                    <Image
                      src={option}
                      alt={"image" + (optIndex + 1)}
                      width={300}
                      height={200}
                      className="w-[300px] h-auto rounded"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ex24_3A;
