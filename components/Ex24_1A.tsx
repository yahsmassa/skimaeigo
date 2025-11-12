"use client";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import {
  exQuestionFormat,
  cn,
  exPageFormat,
  qaFormat,
  renderSelect,
} from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

export default function Ex24_1A() {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "24_1A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第１問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {4})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 3分 200単語弱】
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

      <div className="text-justify">
        <p className="mb-2 px-3">
          You are studying English at a language school in the US. The school is planning an event. You want to attend, so you are reading the flyer.
          {' '}{Kaisetsu(showResults, "24-1A-0")}
        </p>

        <div className="border p-4 mb-4 text-justify">
          <h2 className="text-center text-lg  mb-2">
            The Thorpe English Language School
          </h2>
          <h3 className="text-center text-base md:text-lg font-bold mb-4">
            International Night
          </h3>
          <p className="text-center mb-2">
            Friday, May 24, 5 p.m.-8 p.m.
          </p>
          <p className="text-center mb-4">
            Entrance Fee: $5
          </p>

          <p className="mb-0">
            The Thorpe English Language School (TELS) is organizing an international exchange event. TELS students don't need to pay the entrance fee. Please present your student ID at the reception desk in the Student Lobby.
            {' '}{Kaisetsu(showResults, "24-1A-1")}
          </p>

          <div className="mb-0">
            <h4 className="font-bold mb-2">⚫︎ Enjoy foods from various parts of the world</h4>
            <p className="ml-4">
              Have you ever tasted hummus from the Middle East? How about tacos from Mexico? Couscous from North Africa? Try them all!
            {' '}{Kaisetsu(showResults, "24-1A-2")}
            </p>
          </div>
          <div className="mb-0">
            <h4 className="font-bold mb-2">⚫︎ Experience different languages and new ways to communicate</h4>
            <p className="ml-4">
              Write basic expressions such as 'hello' and 'thank you' in Arabic, Italian, Japanese, and Spanish. Learn how people from these cultures use facial expressions and their hands to communicate.
            {' '}{Kaisetsu(showResults, "24-1A-3")}
            </p>
          </div>
          <div className="mb-0">
            <h4 className="font-bold mb-2">⚫︎ Watch dance performances</h4>
            <p className="ml-4">
              From 7 p.m. watch flamenco, hula, and samba dance shows on the stage! After each dance, performers will teach some basic steps. Please join in.
            {' '}{Kaisetsu(showResults, "24-1A-4")}
            </p>
          </div>

          <p className="mt-4">
            Lots of pictures, flags, maps, textiles, crafts, and games will be displayed in the hall. If you have some pictures or items from your home country which can be displayed at the event, let a school staff member know by May 17!
            {' '}{Kaisetsu(showResults, "24-1A-5")}
          </p>
        </div>
      </div>

      <div className={exQuestionFormat}>
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "1A-1")
          )}
        >
          <div className="flex items-center flex-wrap  gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">
              問 1
            </span>
            <span>To join the event free of charge, you must </span>
            {renderSelect(
              "1",
              4,
              answers,
              setAnswers
            )}
            <span className="-ml-3 mr-2">.</span>

            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"1A-1"} isShow={showResults} />
              {Kaisetsu(showResults, "24-1A-6")}
            </div>
          </div>
          <ol className="list-none space-y-2 ml-6">
            {[
              "bring pictures from your home country",
              "consult a staff member about the display",
              "fill out a form in the Student Lobby",
              "show proof that you are a TELS student",
            ].map((option: string, optIndex: number) => (
              <li key={optIndex} className="flex items-start space-x-2">
                <span className="w-6 text-right">{"①②③④"[optIndex]}</span>
                <span>{option}</span>
              </li>
            ))}
          </ol>
        </div>

        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "1A-2")
          )}
        >
          <div className="flex items-center flex-wrap  gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">
              問 2
            </span>
            <span>At the event, you can </span>
            {renderSelect(
              "2",
              4,
              answers,
              setAnswers
            )}
            <span className="-ml-3 mr-2">.</span>

            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"1A-2"} isShow={showResults} />
              {Kaisetsu(showResults, "24-1A-7")}
            </div>
          </div>
          <ol className="list-none space-y-2 ml-6">
            {[
              "learn about gestures in various cultures",
              "participate in a dance competition",
              "read short stories in foreign languages",
              "try cooking international dishes",
            ].map((option: string, optIndex: number) => (
              <li key={optIndex} className="flex items-start space-x-2">
                <span className="w-6 text-right">{"①②③④"[optIndex]}</span>
                <span>{option}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
