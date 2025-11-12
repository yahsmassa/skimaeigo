"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

export default function Ex25_1() {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "25_1")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第１問"}</h1>
          <span className="text-gray-600 font-sans">(配点 6)</span>
          <span className="text-gray-600 font-sans">
            【目標時間 5分 200単語弱】
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
      </div >
      <div className="p-3 md:p-6">
          <div className="mb-4 leading-6 md:leading-8 md:text-[20px]">
            Your host family in the US is planning to buy a small aquarium. You
            found this helpful pamphlet.{' '}
          {Kaisetsu(showResults, "25-1-0")}
          </div>
        </div>

      <div className="border-2 border-black p-4">
        <h1 className="text-center text-2xl mb-2 md:font-semibold">Beginners!</h1>
        <h2 className="text-center text-xl mb-4 md:font-semibold">
          Decorate Your Freshwater Aquarium
        </h2>
        <p className="text-center mb-6 italic">
          Start your wonderful hobby of keeping fish by following these three easy
          steps!
        </p>
        <hr className="my-2 border-black border-1" />
        <div className="">
          {/* Section 1 */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              1. Consider what kind of fish you want
            </h3>
            <div>
              <p className="mb-4">
                <span className="float-right ml-3 mb-1 md:w-32 w-24">
                  <Image
                    src="/images/Ex25-1-1.jpg"
                    alt="Fish and bottom material illustration"
                    width={128}
                    height={128}
                    className="w-full h-auto"
                  />
                </span>
                Some fish need open spaces for swimming, while others want
                places to hide. Also, some fish need sand to cover themselves
                in. For other non-hiding fish, small stones can be used.{' '}
                {Kaisetsu(showResults, "25-1-1")}
              </p>
              <div className="hidden md:block clear-both"></div>
            </div>
          </div>
          <hr className="my-2 border-black border-1" />
          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-bold mb-3">2. Select decorations</h3>
            <div>
              <p className="mb-4">
                <span className="float-right ml-3 mb-1 w-36 md:w-44">
                  <Image
                    src="/images/Ex25-1-2.jpg"
                    alt="Natural and artificial decorations"
                    width={192}
                    height={192}
                    className="w-full h-auto"
                  />
                </span>
                Natural and artificial decorations are necessary to keep fish in
                good health and should cover 50-70% of the area. Fish from
                fast-moving or deep water need solid objects such as small rocks
                and logs. Those from slow-moving or shallow water prefer soft
                objects like plants. Avoid any plastic or rubber items not
                intended for aquariums. Clean all decorations carefully to make
                sure there is nothing harmful on them.{' '}
                {Kaisetsu(showResults, "25-1-2")}
              </p>
              <div className="hidden md:block clear-both"></div>
            </div>
          </div>
          <hr className="my-2 border-black border-1" />
          {/* Section 3 */}
          <div>
            <h3 className="text-lg font-bold mb-3">3. Position decorations</h3>
            <div>
              <p className="mb-4">
                <span className="float-right ml-3 mb-1 w-36 md:w-44">
                  <Image
                    src="/images/Ex25-1-3.jpg"
                    alt="Tank decoration positions"
                    width={192}
                    height={192}
                    className="w-full h-auto"
                  />
                </span>
                Fish need room to move. Leave space around the edges of the
                tank. Place tall decorations and plants at the back, and put
                short ones at the front.{' '}
                {Kaisetsu(showResults, "25-1-3")}
              </p>
              <div className="hidden md:block clear-both"></div>
            </div>
          </div>
      </div>
      </div>
      {/* Questions Section */}
      <div className="mt-8 space-y-3">
          {/* Question 1 */}
          <div className={cn("space-y-4", showResults && qaFormat(qa, "1-1"))}>
            <div className="flex items-center flex-wrap gap-2 mb-0">
              <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
              <span>
                The customers most likely to benefit from this pamphlet are{" "}
              </span>
              <div className="flex flex-row items-center gap-2">
                {renderSelect("1", 4, answers, setAnswers)}<span className="-ml-3 mr-1">.</span>
                <Explain qa={qa} questionId="1-1" isShow={showResults} />
                {Kaisetsu(showResults, "25-1-4")}
              </div>

            </div>
            <div className="pl-2 md:pl-8 space-y-2">
              {[
                "aquarium lovers who are looking for discount prices",
                "experienced fish lovers who need specialized advice",
                "fish fans who want different methods of feeding their fish",
                "newcomers who need to be informed about their aquarium",
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

          {/* Question 2 */}
          <div className={cn("space-y-4", showResults && qaFormat(qa, "1-2"))}>
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
              <span className="flex gap-1">
                When arranging decorations to keep your fish in good health, it{' '}
              </span>
              <span className="flex gap-1">
                is a good idea to
              </span>
              {renderSelect("2", 4, answers, setAnswers)}<span className="-ml-3 mr-1">.</span>
              <div className="flex flex-row gap-2">
                <Explain qa={qa} questionId="1-2" isShow={showResults} />
                {Kaisetsu(showResults, "25-1-5")}
              </div>

            </div>
            <div className="pl-2 md:pl-8 space-y-2">
              {[
                "avoid using solid and soft objects",
                "provide the right amount of open space",
                "reuse your old toothbrush as a decoration",
                "wash decorations briefly and roughly",
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
          {/* Question 3 */}
          <div className={cn("space-y-4", showResults && qaFormat(qa, "1-3"))}>
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
              <span className="flex gap-1">
                According to the pamphlet, which picture best shows how to
                decorate for fish from slow-moving water?
              </span>
              {renderSelect("3", 4, answers, setAnswers)}<span className="-ml-3 mr-1">.</span>
              <Explain qa={qa} questionId="1-3" isShow={showResults} />
              {Kaisetsu(showResults, "25-1-6")}

            </div>
            {/* Four aquarium illustrations */}
            <div className="w-full mx-auto md:w-full">
              <Image
                src="/images/Ex25-1-4.jpg"
                alt="Four aquarium decoration examples"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
    </div>
  );
}
