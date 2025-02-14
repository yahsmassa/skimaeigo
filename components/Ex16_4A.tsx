"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex16_4A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "4A-1",
      qa: [
        {
          questionNumber: "35",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [],
    },
    {
      questionId: "4A-2",
      qa: [
        {
          questionNumber: "36",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [],
    },
    {
      questionId: "4A-3",
      qa: [
        {
          questionNumber: "37",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [],
    },
    {
      questionId: "4A-4",
      qa: [
        {
          questionNumber: "38",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第４問"}</h1>
          <span className="text-gray-600">(配点 {16})</span>
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
      {/* Question Header */}
      <div className="mb-6">
        <p className="text-lg">
          <span className="mr-4">第4問</span>
          次の問い(A・B)に答えよ。(配点 35)
        </p>
      </div>
      {/* Section A */}
      <div className="mb-6">
        <p className="mb-4">
          A
          次の文章はある説明文の一部である。この文章とグラフを読み、下の問い(問
          1～4)の <span className="mx-2 border border-black px-4">35</span> ～{" "}
          <span className="mx-2 border border-black px-4">38</span>{" "}
          に入れるのに最も適当なものを、それぞれ下の
          ①～④のうちから一つずつ選べ。
        </p>

        {/* English Text */}
        <div className="mb-6 space-y-4">
          <p className="leading-relaxed">
            US consumers have benefited from an increased volume and variety of
            fresh-fruit imports, particularly since the 1990s. The fruit and
            vegetable section in today&apos;s grocery store often has dozens of
            different fresh fruits on display all year around, which come from
            all corners of the globe as additions to domestic fresh fruit.
          </p>
          <p className="leading-relaxed">
            The rapid growth of fresh-fruit imports has affected many aspects of
            the US fresh-fruit market. For example, while oranges are the
            US&apos;s leading domestically grown fruit, the volume of US orange
            imports has grown steadily since the 1990s, with occasional sudden
            increases when the US crop experienced freezing weather (see Figure
            1).
          </p>
          <div className="mb-6">
            <p className="mb-2 text-sm">1,000 tons</p>
            <Image
              src="/images/Ex16-4A-1.webp"
              alt="US fresh-orange imports by country graph"
              className="w-full"
              width={1000}
              height={485}
              priority
            />

            <p className="text-center mt-2">
              Figure 1. US fresh-orange imports by country.
            </p>
          </div>
          <p className="leading-relaxed">
            The US domestic market receives orange imports from various
            countries and regions. Among the major suppliers, Mexico is a
            longtime source. However, due to the strong US demand for fresh
            oranges throughout the year, the Southern Hemisphere countries have
            also become major suppliers, especially during the summer months
            when domestic navel oranges are not available. Australia was the
            first such country, starting in the early 1990s after it obtained
            permission from the US government to export its navel oranges there.
            Australia was followed by South Africa in the late 1990s, and most
            recently by Chile as well.
          </p>
          <p className="leading-relaxed">
            In the US, two main types of oranges are produced domestically:
            "navel oranges" and "Valencia oranges." Navel oranges — virtually
            without seeds, with flesh that separates easily and is firm rather
            than watery — are the most popular oranges for eating fresh. The
            navel orange share of US production of fresh-market oranges was 76
            percent during the years 2010-2012. In comparison, Valencia oranges
            — with thin skins, containing occasional seeds, and with juicy and
            sweet flesh — accounted for 24 percent during the same period. As
            the US&apos;s top supplier of fresh-market oranges, California
            produced 87 percent of fresh-market navel oranges and more than 81
            percent of fresh- market Valencia oranges.
          </p>
          <p className="leading-relaxed">
            The main harvest period for domestic fresh-market oranges is from
            November through May, a time when California&apos;s navel oranges
            are in season. However, the amount of oranges produced and shipped
            domestically falls significantly from June through October. In
            earlier years, when fresh-orange imports still accounted for only a
            small portion of domestic use, Valencia oranges were a popular
            variety when navel oranges were out of season. As seen in Figure 2,
            however, navel orange imports from the Southern Hemisphere countries
            have come to dominate the US in the summer season.
          </p>
        </div>

        {/* Graph Section 2 */}
        <div className="mb-8">
          <p className="mb-2 text-sm">100,000 pounds</p>
          <Image
            src="/images/Ex16-4A-2.webp"
            alt="Seasonal relationship between imported and domestic oranges"
            className="w-full"
            width={940}
            height={389}
            priority
          />
          <p className="text-center mt-2">
            Figure 2. Seasonal relationship between imported and domestic
            oranges (2010-2012 average).
          </p>
        </div>

        {/* Additional Text */}
        <div className="mb-8 space-y-4">
          <p className="leading-relaxed">
            Because of seasonal production patterns, the majority of
            Mexico&apos;s oranges arrive in the US market from December through
            June, when US supplies are relatively high. In contrast, the season
            for imports from the Southern Hemisphere countries is mainly from
            July through October, when US supplies are relatively low. This
            trend is similar to that seen with many other fruits as well.
          </p>

          <p className="text-sm mt-4">
            (Sophia Wu Huang (2013) Imports Contribute to Year-Round Fresh Fruit
            Availability を参考に作成)
          </p>
        </div>

        {/* Question Section */}
        <div>
          <div className={cn("mb-8", showResults && qaFormat(qa, "4A-1"))}>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <span className="whitespace-nowrap mr-2">問 1</span>
              <span>
                In Figure 1, which of the following do (A), (B), (C), and (D)
                refer to?
              </span>
              {renderSelect("35", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="4A-1" />}
            </div>
            <div className="space-y-4 pl-8">
              <div className="flex space-x-16">
                <p>① (A) Australia</p>
                <p>(B) Chile</p>
                <p>(C) Mexico</p>
                <p>(D) South Africa</p>
              </div>
              <div className="flex space-x-16">
                <p>② (A) Australia</p>
                <p>(B) Mexico</p>
                <p>(C) South Africa</p>
                <p>(D) Chile</p>
              </div>
              <div className="flex space-x-16">
                <p>③ (A) South Africa</p>
                <p>(B) Chile</p>
                <p>(C) Australia</p>
                <p>(D) Mexico</p>
              </div>
              <div className="flex space-x-16">
                <p>④ (A) South Africa</p>
                <p>(B) Mexico</p>
                <p>(C) Australia</p>
                <p>(D) Chile</p>
              </div>
            </div>
          </div>
          {/* Question 2 */}
          <div className={cn("mb-8", showResults && qaFormat(qa, "4A-2"))}>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <span className="whitespace-nowrap mr-2">問 2</span>
              <span>
                According to the passage, which of the following correctly
                describes one difference between navel oranges and Valencia
                oranges?
              </span>
              {renderSelect("36", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="4A-2" />}
            </div>
            <div className="space-y-4 pl-8">
              <p>
                ① Navel oranges contain fewer seeds than Valencia oranges do.
              </p>
              <p>
                ② Navel oranges contain more juice than Valencia oranges do.
              </p>
              <p>
                ③ Valencia oranges are more popular than navel oranges in the
                winter.
              </p>
              <p>
                ④ Valencia oranges are more suitable for eating fresh than navel
                oranges.
              </p>
            </div>
          </div>
          {/* Question 3 */}
          <div className={cn("mb-8", showResults && qaFormat(qa, "4A-3"))}>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <span className="whitespace-nowrap mr-2">問 3</span>
              <span>What is the main purpose of this passage?</span>
              {renderSelect("37", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="4A-3" />}
            </div>
            <div className="space-y-4 pl-8">
              <p>
                ① To account for the seasonal changes in the US production of
                oranges
              </p>
              <p>
                ② To explain the differences between navel oranges and Valencia
                oranges
              </p>
              <p>
                ③ To illustrate the relation between US production and imports
                of oranges
              </p>
              <p>
                ④ To improve the quality of the navel oranges produced in the US
              </p>
            </div>
          </div>
          {/* Question 4 */}
          <div className={cn("mb-8", showResults && qaFormat(qa, "4A-4"))}>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <span className="whitespace-nowrap mr-2">問 4</span>
              <span>
                What topic is most likely to follow the last paragraph?
              </span>
              {renderSelect("38", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="4A-4" />}
            </div>
            <div className="space-y-4 pl-8">
              <p>
                ① Export rates of other fruits from the US to the Southern
                Hemisphere
              </p>
              <p>
                ② Statistics showing the seasonal changes in imports of other
                fruits
              </p>
              <p>
                ③ The shipping methods of navel oranges from the Southern
                Hemisphere
              </p>
              <p>④ The variety of fruits commonly grown in the US and Mexico</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex16_4A;
