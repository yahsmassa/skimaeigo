"use client";

import React, { useState } from "react";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex21_6B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "21_6B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第６問 B"}</h1>
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
      {/* Question label */}
      <div className="mb-6 md:text-xl">
        <span className="font-bold mr-2">B</span>
        <span className="leading-relaxed">
          You are studying nutrition in health class. You are going to read the
          following passage from a textbook to learn more about various
          sweeteners.
          {Kaisetsu(showResults, "21-6B-0")}
        </span>
      </div>

      {/* Main textbook content */}
      <div className="border border-gray-300 p-8 leading-relaxed text-justify">
        <p className="mb-6 indent-7">
          Cake, candy, soft drinks—most of us love sweet things. In fact, young
          people say &quot;Sweet!&quot; to mean something is &quot;good&quot; in
          English. When we think of sweetness, we imagine ordinary white sugar
          from sugar cane or sugar beet plants. Scientific discoveries, however,
          have changed the world of sweeteners. We can now extract sugars from
          many other plants. The most obvious example is corn. Corn is abundant,
          inexpensive, and easy to process. High fructose corn syrup (HFCS) is
          about 1.2 times sweeter than regular sugar, but quite high in
          calories. Taking science one step further, over the past 70 years
          scientists have one step further, over the past 70 years scientists
          have developed a wide variety of artificial sweeteners.
          {Kaisetsu(showResults, "21-6B-1")}
        </p>
        <p className="mb-6 indent-7">
          A recent US National Health and Nutrition Examination Survey concluded
          that 14.6% of the average American&apos;s energy intake is from
          &quot;added sugar,&quot; which refers to sugar that is not derived
          from whole foods. A banana, for example, is a whole food, while a
          cookie contains added sugar. More than half of added sugar calories
          are from sweetened drinks and desserts. Lots of added sugar can have
          negative effects on our bodies, including excessive weight gain and
          other health problems. For this reason, many choose low-calorie
          substitutes for drinks, snacks, and desserts.
          {Kaisetsu(showResults, "21-6B-2")}
        </p>
        <p className="mb-6 indent-7">
          Natural alternatives to white sugar include brown sugar, honey, and
          maple syrup, but they also tend to be high in calories. Consequently,
          alternative &quot;low-calorie sweeteners&quot; (LCSs), mostly
          artificial chemical combinations, have become popular. The most common
          LCSs today are aspartame, Ace-K, stevia, and sucralose. Not all LCSs
          are artificial—stevia comes from plant leaves.
          {Kaisetsu(showResults, "21-6B-3")}
        </p>
        <p className="mb-6 indent-7">
          Alternative sweeteners can be hard to use in cooking because some
          cannot be heated and most are far sweeter than white sugar. Aspartame
          and Ace-K are 200 times sweeter than sugar. Stevia is 300 times
          sweeter, and sucralose has twice the sweetness of stevia. Some new
          sweeteners are even more intense. A Japanese company recently
          developed &quot;Advantame,&quot; which is 20,000 times sweeter than
          sugar. Only a tiny amount of this substance is required to sweeten
          something.
          {Kaisetsu(showResults, "21-6B-4")}
        </p>
        <p className="mb-6 indent-7">
          When choosing sweeteners, it is important to consider health issues.
          Making desserts with lots of white sugar, for example, results in
          high-calorie dishes that could lead to weight gain. There are those
          who prefer LCSs for this very reason. Apart from calories, however,
          some research links consuming artificial LCSs with various other
          health concerns. Some LCSs contain strong chemicals suspected of
          causing cancer, while others have been shown to affect memory and
          brain development, so they can be dangerous, especially for young
          children, pregnant women, and the elderly. There are a few relatively
          natural alternative sweeteners, like xylitol and sorbitol, which are
          low in calories. Unfortunately, these move through the body extremely
          slowly, so consuming large amounts can cause stomach trouble.
          {Kaisetsu(showResults, "21-6B-5")}
        </p>
        <p className="mb-6 indent-7">
          When people want something sweet, even with all the information, it is
          difficult for them to decide whether to stick to common higher calorie
          sweeteners like sugar or to use LCSs. Many varieties of gum and candy
          today contain one or more artificial sweeteners; nonetheless, some
          people who would not put artificial sweeteners in hot drinks may still
          buy such items. Individuals need to weigh the options and then choose
          the sweeteners that best suit their needs and circumstances.
          {Kaisetsu(showResults, "21-6B-6")}
        </p>{" "}
      </div>

      {/* Questions Section */}
      <div className="mt-8">
        {/* Question 1 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "6B-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>
              You learn that modern science has changed the world of sweeteners
              by
            </span>
            {renderSelect("43", 4, answers, setAnswers)}
            <span>.</span>
            {showResults && <Explain qa={qa} questionId="6B-1" />}
            {Kaisetsu(showResults, "21-6B-7")}
          </div>

          <div className="ml-2 md:ml-8 space-y-2">
            <div>
              {[
                "discovering new, sweeter white sugar types",
                "measuring the energy intake of Americans",
                "providing a variety of new options",
                "using many newly-developed plants from the environment",
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center mr-2">
                    {"①②③④⑤⑥"[index]}
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "6B-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              You are summarizing the information you have just studied. How
              should the table be finished?
            </span>
            {renderSelect("44", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6B-2" />}
            {Kaisetsu(showResults, "21-6B-8")}
          </div>

          {/* Table */}
          <div className="flex justify-center mb-6">
            <table className="border-collapse border border-black">
              <tbody>
                <tr>
                  <th className="border border-black p-4 w-48">Sweetness</th>
                  <th className="border border-black p-4 w-48">Sweetener</th>
                </tr>
                <tr>
                  <td className="border border-black" rowSpan={5}>
                    <div className="h-full flex flex-col items-center justify-center">
                      <div>high</div>
                      <svg className="w-24 h-24" viewBox="0 0 100 100">
                        <defs>
                          <linearGradient
                            id="triangleGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="rgb(240,240,240)" />
                            <stop offset="100%" stopColor="rgb(80,80,80)" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M50,90 L10,10 L90,10 Z"
                          fill="url(#triangleGradient)"
                        />
                      </svg>
                      <div>low</div>
                    </div>
                  </td>
                  <td className="border border-black text-center p-2">
                    Advantame
                  </td>
                </tr>
                {["A", "B", "C", "D"].map((letter) => (
                  <tr key={letter}>
                    <td className="border border-black p-2 text-center">
                      ({letter})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Answer Options */}
          <div className="ml-2 md:ml-8 space-y-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="grid grid-cols-2 gap-8">
                <div className="flex gap-8">
                  <span>
                    {num === 1 ? "①" : num === 2 ? "②" : num === 3 ? "③" : "④"}
                  </span>
                  <div>
                    <div>
                      (A){" "}
                      {num === 1
                        ? "Stevia"
                        : num === 2
                        ? "Stevia"
                        : num === 3
                        ? "Sucralose"
                        : "Sucralose"}
                    </div>
                    <div>
                      (C){" "}
                      {num === 1
                        ? "Ace-K, Aspartame"
                        : num === 2
                        ? "HFCS"
                        : num === 3
                        ? "Ace-K, Aspartame"
                        : "HFCS"}
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    (B){" "}
                    {num === 1
                      ? "Sucralose"
                      : num === 2
                      ? "Sucralose"
                      : num === 3
                      ? "Stevia"
                      : "Stevia"}
                  </div>
                  <div>
                    (D){" "}
                    {num === 1
                      ? "HFCS"
                      : num === 2
                      ? "Ace-K, Aspartame"
                      : num === 3
                      ? "HFCS"
                      : "Ace-K, Aspartame"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "6B-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              According to the article you read, which of the following are
              true?
            </span>
            <span>(Choose two options. The order does not matter.)</span>
            {renderSelect("45", 5, answers, setAnswers)}
            <span>・</span>
            {renderSelect("46", 5, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6B-3" />}
            {Kaisetsu(showResults, "21-6B-9")}
          </div>

          <div className="ml-2 md:ml-8 space-y-2">
            <div className="flex gap-4">
              <span>①</span>
              <span>
                Alternative sweeteners have been proven to cause weight gain.
              </span>
            </div>
            <div className="flex gap-4">
              <span>②</span>
              <span>
                Americans get 14.6% of their energy from alternative sweeteners.
              </span>
            </div>
            <div className="flex gap-4">
              <span>③</span>
              <span>
                It is possible to get alternative sweeteners from plants.
              </span>
            </div>
            <div className="flex gap-4">
              <span>④</span>
              <span>Most artificial sweeteners are easy to cook with.</span>
            </div>
            <div className="flex gap-4">
              <span>⑤</span>
              <span>
                Sweeteners like xylitol and sorbitol are not digested quickly.
              </span>
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "6B-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>
              To describe the author&apos;s position, which of the following is
              most appropriate?
            </span>
            {renderSelect("47", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6B-4" />}
            {Kaisetsu(showResults, "21-6B-10")}
          </div>

          <div className="ml-2 md:ml-8 space-y-2">
            <div className="flex gap-4">
              <span>①</span>
              <span>
                The author argues against the use of artificial sweeteners in
                drinks and desserts.
              </span>
            </div>
            <div className="flex gap-4">
              <span>②</span>
              <span>
                The author believes artificial sweeteners have successfully
                replaced traditional ones.
              </span>
            </div>
            <div className="flex gap-4">
              <span>③</span>
              <span>
                The author states that it is important to invent much sweeter
                products for future use.
              </span>
            </div>
            <div className="flex gap-4">
              <span>④</span>
              <span>
                The author suggests people focus on choosing sweeteners that
                make sense for them.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ex21_6B;
