"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";
const EnglishTest = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "20_2B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 B"}</h1>
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
      </div>{" "}
      {/* タイトル部分 */}
      <div className="mb-6 leading-8">
        <p className=" text-base md:text-lg mb-4">
          B
          次の問い(問１～３)において、それぞれ下の①～⑥の語句を並べかえて空所を補い、最も適当な文を完成させよ。解答は
          <span className="inline-block border border-black px-2 text-sm md:text-base md:px-6 py-1 mx-2 font-bold font-sans">
            18
          </span>
          ～
          <span className="inline-block border border-black px-2 text-sm md:text-base md:px-6 py-1 mx-2 font-bold font-sans">
            23
          </span>
          に入れるものの番号のみを答えよ。
        </p>
      </div>
      {/* 問題1 */}
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問１</span>
          </div>
          <div className="md:col-span-1">Tony:</div>
          <div className="md:col-span-10">
            <span>
              Those decorations in the hall look great, don't they? I'm glad we
              finished on time.
            </span>
            {Kaisetsu(showResults, "20-2B-1")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-1")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1 md:ml-2">Mei:</div>
          <div className="md:col-span-10 flex flex-row flex-wrap items-center space-y-0">
            <span>
              Yes, thank you so much. Without your help, the preparations
            </span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("18", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("19", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">all the guests arrive this afternoon.</span>
            <Explain qa={qa} questionId="2B-1"  isShow={showResults} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["been", "by", "completed", "have", "the time", "would not"].map(
            (text, index) => (
              <div key={index} className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
      </div>
      {/* 問題2 */}
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問２</span>
          </div>
          <div className="md:col-span-1 md:ml-2">Ichiro:</div>
          <div className="md:col-span-10">
            <span>Mr. Smith has two daughters in school now, right?</span>
            {Kaisetsu(showResults, "20-2B-2")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-2")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1 -ml-3">Natasha:</div>
          <div className="md:col-span-9 flex flex-row flex-wrap items-center space-y-0">
            <span>Actually, he has three, the</span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("20", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("21", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">London.</span>
            <span className="mr-2">I don’t think you’ve met her yet.</span>
            <Explain qa={qa} questionId="2B-2"  isShow={showResults} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["in", "is studying", "music", "of", "whom", "youngest"].map(
            (text, index) => (
              <div key={index} className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
      </div>
      {/* 問題3 */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問３</span>
          </div>
          <div className="md:col-span-1">Peter:</div>
          <div className="md:col-span-10">
            <span>
              It might rain this weekend, so I wonder if we should still have
              the class barbecue in the park.
            </span>
            {Kaisetsu(showResults, "20-2B-3")}
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-2 mb-4",
            showResults && qaFormat(qa, "2B-3")
          )}
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Hikaru:</div>
          <div className="md:col-span-10 flex flex-row flex-wrap items-center space-y-0">
            <span>Yeah, we have to decide now whether to hold it </span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("22", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            {renderSelect("23", 6, answers, setAnswers)}
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="mr-2">
              <span className="mr-2">
                until some day next week. We should have thought about the
                chance of rain.
              </span>
              <Explain qa={qa} questionId="2B-3"  isShow={showResults} />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["as", "it", "off", "or", "planned", "put"].map((text, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
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

export default EnglishTest;
