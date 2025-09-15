"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const JapaneseTestQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "18_2C")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 C"}</h1>
          <span className="text-gray-600 font-sans">(配点 {15})</span>
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
      {/* Section C instruction */}
      <div className="mb-6 leading-8">
        <p className="mb-4 font-sans">
          <span className="font-bold">C</span>{" "}
          次の問い（問1～3）の会話が最も適切なやりとりとなるように
          <span className="inline-block border-2 border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">
            24
          </span>{" "}
          ～
          <span className="inline-block border-2 border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">
            26
          </span>
          を埋めるには，(A)と(B)をどのように組み合わせればよいか，それぞれ下
          の①～⑧のうちから一つずつ選べ。
        </p>
      </div>
      {/* Question 1 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-sans">問 1</span>
          </div>
          {[
            {
              speaker: "Shelly",
              text: "I can't wait till next Tuesday.",
            },
            {
              speaker: "Lisa",
              text: "What's happening next Tuesday?",
            },
            {
              speaker: "Shelly",
              text: "Don't you remember? There's going to be a jazz concert after school.",
            },
            {
              speaker: "Lisa",
              text: (
                <div
                  className={cn(
                    "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                    showResults && qaFormat(qa, "2C-1")
                  )}
                >
                  <span className="mr-2">Really?</span> I thought it
                  {renderSelect("24", 8, answers, setAnswers)}
                </div>
              ),
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:col-span-1 md:text-right">{item.speaker}:</div>
              <div className="md:col-span-10 md:ml-2">{item.text}</div>
              <div className="md:col-span-1"></div>
            </React.Fragment>
          ))}
          <div className="flex flex-row md:w-[400px]">
            <Explain qa={qa} questionId="2C-1"  isShow={showResults} />
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "18-2C-1")}
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
          {[
            {
              options: [
                { label: "(A)", text: "was going to be" },
                { label: "(B)", text: "was planning to be" },
              ],
              width: "w-[150px] md:w-44",
            },
            {
              options: [
                { label: "(A)", text: "on Thursday," },
                { label: "(B)", text: "on Tuesday," },
              ],
              width: "w-[150px] md:w-40",
            },
            {
              options: [
                { label: "(A)", text: "because I'm wrong." },
                { label: "(B)", text: "but maybe I'm wrong." },
              ],
              width: "w-[150px] md:w-60",
            },
          ].map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-row flex-wrap items-center space-y-0"
            >
              <div className="flex flex-row items-center mb-4">
                <div className={cn("border border-gray-800", section.width)}>
                  <div className={cn("flex flex-col space-y-4 pt-4")}>
                    {section.options.map((option, index) => (
                      <div
                        key={index}
                        className={`pb-4 ${
                          index === 0 ? "border-b border-gray-800" : ""
                        } px-2 h-16 md:h-12`}
                      >
                        <div className="grid grid-cols-12">
                          <span className="mr-2 col-span-3">
                            {option.label}
                          </span>
                          <span className="col-span-9">{option.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {sectionIndex < 2 && <div className="mx-3">→</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Answer choices */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
          {[
            "(A) → (A) → (A)",
            "(A) → (A) → (B)",
            "(A) → (B) → (A)",
            "(A) → (B) → (B)",
            "(B) → (A) → (A)",
            "(B) → (A) → (B)",
            "(B) → (B) → (A)",
            "(B) → (B) → (B)",
          ].map((choice, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-block w-8 h-8 text-xl border-black text-center leading-7 mr-2">
                {"①②③④⑤⑥⑦⑧"[index]}
              </span>
              <span>{choice}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 2 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-sans">問 2</span>
          </div>
          {[
            {
              speaker: "Tomohiro",
              text: "Hi, Casey. I'm glad you made it in time. Our flight's scheduled to depart soon.",
            },
            {
              speaker: "Casey",
              text: "Thank you for telling me not to take the bus. I never thought the traffic would be so heavy at this time of day.",
            },
            {
              speaker: "Tomohiro",
              text: "I always check traffic and railroad conditions when I have a plane to catch.",
            },
            {
              speaker: "Casey",
              text: (
                <div
                  className={cn(
                    "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                    showResults && qaFormat(qa, "2C-2")
                  )}
                >
                  <span>You're so helpful.</span>
                  {renderSelect("25", 8, answers, setAnswers)}
                </div>
              ),
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:col-span-2 md:text-right">{item.speaker}:</div>
              <div className="md:col-span-9 md:ml-2">{item.text}</div>
              <div className="md:col-span-1"></div>
            </React.Fragment>
          ))}
          <div className="flex flex-row md:w-[400px]">
            <Explain qa={qa} questionId="2C-2"  isShow={showResults} />
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "18-2C-2")}
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
          {[
            {
              options: [
                { label: "(A)", text: "I wouldn't have taken" },
                { label: "(B)", text: "I wouldn't take" },
              ],
              width: "w-[150px] md:w-48",
            },
            {
              options: [
                { label: "(A)", text: "the bus" },
                { label: "(B)", text: "the train" },
              ],
              width: "w-[150px] md:w-32",
            },
            {
              options: [
                { label: "(A)", text: "with your suggestion." },
                { label: "(B)", text: "without your suggestion." },
              ],
              width: "w-[150px] md:w-64",
            },
          ].map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-row flex-wrap items-center space-y-0"
            >
              <div className="flex flex-row items-center mb-4">
                <div className={cn("border border-gray-800", section.width)}>
                  <div className={cn("flex flex-col space-y-4 pt-4")}>
                    {section.options.map((option, index) => (
                      <div
                        key={index}
                        className={`pb-4 ${
                          index === 0 ? "border-b border-gray-800" : ""
                        } px-2 h-16 md:h-12`}
                      >
                        <div className="grid grid-cols-12">
                          <span className="mr-2 col-span-3">
                            {option.label}
                          </span>
                          <span className="col-span-9">{option.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {sectionIndex < 2 && <div className="mx-3">→</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Answer choices */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
          {[
            "(A) → (A) → (A)",
            "(A) → (A) → (B)",
            "(A) → (B) → (A)",
            "(A) → (B) → (B)",
            "(B) → (A) → (A)",
            "(B) → (A) → (B)",
            "(B) → (B) → (A)",
            "(B) → (B) → (B)",
          ].map((choice, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-block w-8 h-8 text-xl border-black text-center leading-7 mr-2">
                {"①②③④⑤⑥⑦⑧"[index]}
              </span>
              <span>{choice}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 3 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-sans">問 3</span>
          </div>
          {[
            {
              speaker: "Hoang",
              text: "The typhoon over the weekend was pretty strong, wasn't it?",
            },
            {
              speaker: "Nao",
              text: "Yeah, and my club's soccer match in Fukuoka Park was canceled.",
            },
            {
              speaker: "Hoang",
              text: "We can never predict what the weather will bring.",
            },
            {
              speaker: "Nao",
              text: "I agree. Did the typhoon also go through Shizuoka?",
            },
            {
              speaker: "Hoang",
              text: (
                <div
                  className={cn(
                    "flex flex-row -mt-1 flex-wrap items-center space-y-0",
                    showResults && qaFormat(qa, "2C-3")
                  )}
                >
                  <span>Yes, it did.</span>
                  {renderSelect("26", 8, answers, setAnswers)}
                  <span>I hope we get another chance to do it.</span>
                </div>
              ),
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:col-span-1">{item.speaker}:</div>
              <div className="md:col-span-10">{item.text}</div>
              <div className="md:col-span-1"></div>
            </React.Fragment>
          ))}
          <div className="flex flex-row md:w-[400px]">
            <Explain qa={qa} questionId="2C-3"  isShow={showResults} />
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "18-2C-3")}
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
          {[
            {
              options: [
                { label: "(A)", text: "It's because" },
                { label: "(B)", text: "That's why" },
              ],
              width: "w-[150px] md:w-40",
            },
            {
              options: [
                {
                  label: "(A)",
                  text: "we didn't cancel our trip to Mt. Fuji,",
                },
                {
                  label: "(B)",
                  text: "we had to cancel our trip to Mt. Fuji,",
                },
              ],
              width: "w-[200px] md:w-56",
            },
            {
              options: [
                { label: "(A)", text: "fortunately." },
                { label: "(B)", text: "unfortunately." },
              ],
              width: "w-[150px] md:w-40",
            },
          ].map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-row flex-wrap items-center space-y-0"
            >
              <div className="flex flex-row items-center mb-4">
                <div className={cn("border border-gray-800", section.width)}>
                  <div className={cn("flex flex-col space-y-4 pt-4")}>
                    {section.options.map((option, index) => (
                      <div
                        key={index}
                        className={`pb-4 ${
                          index === 0 ? "border-b border-gray-800" : ""
                        } px-2 h-16 md:h-12`}
                      >
                        <div className="grid grid-cols-12">
                          <span className="mr-2 col-span-3">
                            {option.label}
                          </span>
                          <span className="col-span-9">{option.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {sectionIndex < 2 && <div className="mx-3">→</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Answer choices */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            "(A) → (A) → (A)",
            "(A) → (A) → (B)",
            "(A) → (B) → (A)",
            "(A) → (B) → (B)",
            "(B) → (A) → (A)",
            "(B) → (A) → (B)",
            "(B) → (B) → (A)",
            "(B) → (B) → (B)",
          ].map((choice, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-block w-8 h-8 text-xl border-black text-center leading-7 mr-2">
                {"①②③④⑤⑥⑦⑧"[index]}
              </span>
              <span>{choice}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JapaneseTestQuestion;
