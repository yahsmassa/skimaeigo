"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex22_2B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "22_2B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {10})</span>
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
      {/* Header section */}
      <div className="mb-2">
        <p className="text-base">
          You are the editor of a school English paper.
          David, an exchange student from the UK, has written an article for the
          paper.
          {Kaisetsu(showResults, "22-2B-0")}
        </p>
      </div>

      {/* Main article content */}
      <div className="border border-gray-300 p-6">
        <p className="mb-0">
          Do you like animals? The UK is known as a nation of animal-lovers; two
          in five UK homes have pets. This is lower than in the US, where more
          than half of homes have pets. However, Australia has the highest
          percentage of homes with pets!
          {Kaisetsu(showResults, "22-2B-1")}
        </p>

        <p className="mb-4">
          Why is this so? Results of a survey done in Australia give us some
          answers.
        </p>

        {/* Survey results box */}
        <div className="border border-gray-200 border-dashed p-4 mb-4 relative">
          <p className="mb-2">
            Pet owners mention the following advantages of living with pets:
          </p>

          <ul className="list-none space-y-3 mb-4">
            <li className="flex items-start">
              <span className="mr-2">▶</span>
              The love, happiness, and friendship pets give (90%);
            </li>
            <li className="flex items-start">
              <span className="mr-2">▶</span>
              The feeling of having another family member (over 60% of dog and
              cat owners);
            </li>
            <li className="flex items-start">
              <span className="mr-2">▶</span>
              The happy times pets bring. Most owners spend 3-4 hours with their
              &apos;fur babies&apos; every day and around half of all dog and
              cat owners let their pets sleep with them!
            </li>
          </ul>

          <div className="flex">
            <p className="flex-1 pr-4">
              One disadvantage is that pets have to be cared for when owners go
              away. It may be difficult to organise care for them; 25% of owners
              take their pets on holidays or road trips.
              {Kaisetsu(showResults, "22-2B-2")}
            </p>
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/images/Ex22-2B-1.webp"
                alt="Black and white illustration of a cat's head"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Conclusion paragraph */}
        <p>
          These results suggest that keeping pets is a good thing. On the other
          hand, since coming to Japan, I have seen other problems such as space,
          time, and cost. Still, I know people here who are content living in
          small flats with pets. Recently, I heard that little pigs are becoming
          popular as pets in Japan. Some people take their pig(s) for a walk,
          which must be fun, but I wonder how easy it is to keep pigs inside
          homes.
          {Kaisetsu(showResults, "22-2B-3")}
        </p>
      </div>

      {/* Questions section */}
      <div className="mt-8 space-y-6">
        {/* Question 1 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "2B-1"))}>
          <div className="mb-2 flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>
              In terms of the ratios for homes with pets, which shows the&nbsp;
            </span>
            <span>
              countries&apos; ranking from&nbsp;
            </span>
            <span className="underline">highest to lowest</span>
            <span>?</span>
            <div className="flex flex-row gap-2">
            {renderSelect("11", 6, answers, setAnswers)}
            <span className="-ml-2 mt-1 mr-2">.</span>
              <Explain qa={qa} questionId="2B-1" isShow={showResults} />
              {Kaisetsu(showResults, "22-2B-4")}
            </div>
          </div>

          <div className="space-y-2 pl-2 md:pl-8">
              {[
                "Australia — the UK — the US",
                "Australia — the US — the UK",
                "The UK — Australia — the US",
                "The UK — the US — Australia",
                "The US — Australia — the UK",
                "The US — the UK — Australia",
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

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-2"))}>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              According to David&apos;s report, one advantage of having pets is
              that
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("12", 4, answers, setAnswers)}
              <span className="-ml-2 mt-1 mr-2">.</span>
              <Explain qa={qa} questionId="2B-2" isShow={showResults} />
              {Kaisetsu(showResults, "22-2B-5")}
            </div>
          </div>

          <div className="space-y-2 pl-2 md:pl-8">
              {[
                "you can save money",
                "you can sleep longer",
                "you will become popular",
                "your life can be more enjoyable",
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center mr-2">
                    {"①②③④"[index]}
                  </span>
                  <span>{text}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-3"))}>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              The statement that best reflects one finding from the survey is
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("13", 4, answers, setAnswers)}
              <span className="-ml-2 mt-1 mr-2">.</span>
              <Explain qa={qa} questionId="2B-3" isShow={showResults} />
              {Kaisetsu(showResults, "22-2B-6")}
            </div>
          </div>

          <div className="space-y-2 pl-2 md:pl-8">
            <div>
              {[
                "'I feel uncomfortable when I watch TV with my cat.'",
                "'I spend about three hours with my pet every day.'",
                "'Most pets like going on car trips.'",
                "'Pets need a room of their own.'",
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

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-4"))}>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>
              Which best summarises David&apos;s opinions about having pets in
              Japan?
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("14", 4, answers, setAnswers)}
              <span className="-ml-2 mt-1 mr-2">.</span>
              <Explain qa={qa} questionId="2B-4" isShow={showResults} />
              {Kaisetsu(showResults, "22-2B-7")}
            </div>
          </div>

          <div className="space-y-2 pl-2 md:pl-8">
            <div>
              {[
                "It is not troublesome to keep pets.",
                "People might stop keeping pets.",
                "Pet owners have more family members.",
                "Some people are happy to keep pets inside their homes.",
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

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-5"))}>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
            <span>Which is the most suitable title for the article?</span>
            <div className="flex flex-row gap-2">
              {renderSelect("15", 4, answers, setAnswers)}
              <span className="-ml-2 mt-1 mr-2">.</span>
              <Explain qa={qa} questionId="2B-5" isShow={showResults} />
              {Kaisetsu(showResults, "22-2B-8")}
            </div>
          </div>

          <div className="space-y-2 pl-2 md:pl-8">
            <div>
              {[
                "Does Your Pet Sleep on Your Bed?",
                "What Does Keeping Pets Give Us?",
                "What Pet Do You Have?",
                "Why Not Keep a Pet Pig?",
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center mr-2">
                    {"①②③④"[index]}
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_2B;
