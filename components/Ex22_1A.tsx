"use client";
import Image from "next/image";
import { Scissors } from "lucide-react";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex22_1A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "22_1A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第１問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {4})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 5分 約150単語】
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
      {/* Introduction Text */}
      <div className="mb-2 text-justify px-3">
        <p className="text-lg ">
          You are studying about Brazil in the international club at your senior
          high school. Your teacher asked you to do research on food in Brazil.
          You find a Brazilian cookbook and read about fruits used to make
          desserts.
          {Kaisetsu(showResults, "22-1A-0")}
        </p>
      </div>

      {/* Fruits Table */}
      <div className="border border-gray-800 mb-8">
        {/* Title */}
        <div className="text-center border-b border-gray-800 p-2">
          <h2 className="text-lg font-semibold">Popular Brazilian Fruits</h2>
        </div>

        {/* Grid for fruits */}
        <div className="grid grid-cols-2">
          {/* Cupuaçu */}
          <div className="border-r border-b border-gray-800 p-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Ex22-1A-1.webp"
                alt="Cupuaçu"
                width={160}
                height={160}
                className="mb-2"
              />
              <h3 className="font-semibold mb-2">Cupuaçu{' '}{Kaisetsu(showResults, "22-1A-1")}</h3>
            </div>
            <ul className="list-disc pl-2 text-base">
              <li>Smells and tastes like chocolate</li>
              <li>Great for desserts, such as cakes, and with yogurt</li>
              <li>
                Brazilians love the chocolate-flavored juice of this fruit.
              </li>
            </ul>
          </div>

          {/* Jabuticaba */}
          <div className="border-b border-gray-800 p-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Ex22-1A-2.webp"
                alt="Jabuticaba"
                width={160}
                height={160}
                className="mb-2"
              />
              <h3 className="font-semibold mb-2">Jabuticaba{' '}{Kaisetsu(showResults, "22-1A-2")}
              </h3>
            </div>
            <ul className="list-disc pl-2  text-base">
              <li>Looks like a grape</li>
              <li>Eat them within three days of picking for a sweet flavor.</li>
              <li>
                After they get sour, use them for making jams, jellies, and
                cakes.
              </li>
            </ul>
          </div>

          {/* Pitanga */}
          <div className="border-r border-gray-800 p-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Ex22-1A-3.webp"
                alt="Pitanga"
                width={160}
                height={160}
                className="mb-2"
              />
              <h3 className="font-semibold mb-2">Pitanga{' '}{Kaisetsu(showResults, "22-1A-3")}</h3>
            </div>
            <ul className="list-disc pl-2 text-base">
              <li>Comes in two varieties, red and green</li>
              <li>Use the sweet red one for making cakes.</li>
              <li>The sour green one is only for jams and jellies.</li>
            </ul>

          </div>

          {/* Buriti */}
          <div className="p-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/Ex22-1A-4.webp"
                alt="Buriti"
                width={160}
                height={160}
                className="mb-2"
              />
              <h3 className="font-semibold mb-2">Buriti{' '}{Kaisetsu(showResults, "22-1A-4")}</h3>
            </div>
            <ul className="list-disc pl-2 text-base">
              <li>Orange inside, similar to a peach or a mango</li>
              <li>Tastes very sweet, melts in your mouth</li>
              <li>Best for ice cream, cakes, and jams</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="space-y-6">
        {/* Question 1 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "1A-1"))}>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            Both &nbsp;<i>cupuaçu</i>&nbsp;
            and &nbsp;<i>buriti</i>&nbsp; can be used to make{" "}
            {renderSelect("1", 4, answers, setAnswers)}<span className="-ml-1 mr-2">.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="1A-1"  isShow={showResults} />
              {Kaisetsu(showResults, "22-1A-5")}
            </div>
          </div>
          <ol className="space-y-1 pl-2 md:pl-8">
            {["a cake", "chocolate", "ice cream", "yogurt"].map(
              (text, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center mr-2">
                    {"①②③④⑤⑥"[index]}
                  </span>
                  <span>{text}</span>
                </div>
              )
            )}
          </ol>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "1A-2"))}>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              If you want to make a sour cake, the best fruit to use is{" "}
            </span>
            {renderSelect("2", 4, answers, setAnswers)}<span className="-ml-1 mr-2">.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="1A-2"  isShow={showResults} />
              {Kaisetsu(showResults, "22-1A-6")}
            </div>
          </div>
          <ol className="space-y-1 pl-2 md:pl-8">
            {["buriti", "cupuaçu", "jabuticaba", "pitanga"].map(
              (text, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center mr-2">
                    {"①②③④"[index]}
                  </span>
                  <span>{text}</span>
                </div>
              )
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex22_1A;
