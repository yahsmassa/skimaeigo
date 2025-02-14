"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex18_4A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "4A-1",
      qa: [
        {
          questionNumber: "33",
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
          questionNumber: "34",
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
      questionId: "4A-3",
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
      questionId: "4A-4",
      qa: [
        {
          questionNumber: "36",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
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
      {/* 問題番号とポイント */}
      <div className="mb-6 text-lg">
        <span className="font-bold">第4問</span>
        <span className="ml-4">次の問い(A・B)に答えよ。(配点 40)</span>
      </div>
      {/* A問題の説明部分 */}
      <div className="mb-6">
        <div className="font-bold mb-2">A</div>
        <div className="mb-4 leading-relaxed">
          次の文章にある説明文の一部である。この文章とグラフを読み、下の問い(問1～4)の
          <span className="inline-flex items-center mx-2">
            <div className="border border-black px-4 py-1 mx-1">33</div>～
            <div className="border border-black px-4 py-1 mx-1">36</div>
          </span>
          に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
        </div>
      </div>
      {/* 英文部分 */}
      <div className="space-y-4 leading-relaxed">
        <p>
          Color is an important feature considered by consumers when shopping
          for various products. Marketing companies need to identify the colors
          that can create an intention to purchase and a desired atmosphere in
          retail stores. However, it is not easy to anticipate which colors will
          be popular for individual items, because consumers have different
          preferences depending on product types. Through the research reported
          here, we can deepen our understanding of the influence of color on
          consumers.
        </p>
        <p>
          In this study, researchers surveyed German consumers to obtain
          information on whether the participants thought color was important
          when shopping, how much they were influenced by color when buying
          various products, and what emotions and associations were related to
          various colors. First, the researchers examined the data and found
          that color was indeed important for the participants when shopping,
          with 68% of them mentioning color as a determining factor when
          choosing the product they intended to purchase.
        </p>
        <p>
          Next, the researchers investigated whether the degree of importance
          consumers put on color varied depending on the products purchased.
          Figure 1 shows six everyday products and the percentages of the
          participants who placed high importance on color when purchasing those
          products. The top two products were both those worn by the
          participants, and the three lowest were all electronic devices. A
          total of 36.4% of the participants placed importance on color for
          cellphones. This was the highest among the electronic products, but
          only slightly more than half of that for bags, which appeared one rank
          above.
        </p>

        {/* グラフ部分 */}
        <div className="my-8">
          <Image
            src="/images/Ex18-4A-1.webp"
            alt="Membership options table showing different tiers: Pacer ($20), Speeder ($40), and Zoomer ($60) with their respective benefits"
            className="w-full max-w-2xl mx-auto"
            width={800}
            height={400}
            priority
          />

          <p className="italic">
            Figure 1. The percentages of the participants who placed high
            importance on color when purchasing six everyday products.
          </p>
        </div>

        <p>
          Third, the researchers looked at the participants&apos; perceptions of
          and associations with colors. The results showed that red had various
          meanings: love, danger, anger, and power. Green produced a
          relationship with nature, good luck, and health. Furthermore, the
          color white was associated with balance, health, and calm. Results
          showed each color had several different meanings.
        </p>
        <p>
          The findings summarized in the above passage explained how colors
          influenced German consumers. However, this influence may vary from
          country to country. In this globalized world, it has become easier to
          market products internationally, partly due to the increased use of
          the Internet. Therefore, it is necessary to consider the importance
          consumers in other parts of the world place on color in their choices
          of products. The next part of this passage will examine this topic.
        </p>

        {/* 出典 */}
        <p className="text-sm mt-8">
          (Okan Akcay (2013) Product Color Choice and Meanings of Color: A Case
          of Germany の一部を参考に作成)
          {/* 設問部分 */}
          <div className="mt-12 space-y-8">
            {/* 問1 */}
            <div className={cn("mb-8", showResults && qaFormat(qa, "4A-1"))}>
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <span className="whitespace-nowrap mr-2">問 1</span>
                <span>
                  The passage mentions that it is difficult to understand which
                  colors consumers like better because
                </span>
                {renderSelect("33", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="4A-1" />}.
              </div>
              <div className="ml-8 space-y-2">
                <div>
                  ① color preferences differ from generation to generation
                </div>
                <div>
                  ② consumers&apos; favorite colors vary for different products
                </div>
                <div>③ product marketers choose the most popular colors</div>
                <div>
                  ④ various products are purchased by consumers when shopping
                </div>
              </div>
            </div>

            {/* 問2 */}
            <div className={cn("mb-8", showResults && qaFormat(qa, "4A-2"))}>
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <span className="whitespace-nowrap mr-2">問 2</span>
                <span>
                  In Figure 1, which of the following do (A), (B), (C), and (D)
                  refer to?
                </span>
                {renderSelect("34", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="4A-2" />}
              </div>
              <div className="ml-8 space-y-2">
                <div>
                  ① (A) Bags (B) Footwear (C) Cellphones (D) Music players
                </div>
                <div>
                  ② (A) Bags (B) Footwear (C) Music players (D) Cellphones
                </div>
                <div>
                  ③ (A) Footwear (B) Bags (C) Cellphones (D) Music players
                </div>
                <div>
                  ④ (A) Footwear (B) Bags (C) Music players (D) Cellphones
                </div>
              </div>
            </div>

            {/* 問3 */}
            <div className={cn("mb-8", showResults && qaFormat(qa, "4A-3"))}>
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <span className="whitespace-nowrap mr-2">問 3</span>
                <span>
                  Which of the following statements is correct according to the
                  passage?
                </span>
                {renderSelect("35", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="4A-3" />}
              </div>
              <div className="ml-8 space-y-2">
                <div>
                  ① German businesses consider green to represent passion to
                  consumers.
                </div>
                <div>
                  ② German consumers perceive one color as containing multiple
                  images.
                </div>
                <div>
                  ③ German people appear to prefer green clothing to red
                  clothing.
                </div>
                <div>
                  ④ German producers choose one color for products after
                  observing their sales.
                </div>
              </div>
            </div>

            {/* 問4 */}
            <div className={cn("mb-8", showResults && qaFormat(qa, "4A-4"))}>
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <span className="whitespace-nowrap mr-2">問 4</span>
                <span>
                  What topic is most likely to follow the last paragraph?
                </span>
                {renderSelect("36", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="4A-4" />}
              </div>
              <div className="ml-8 space-y-2">
                <div>
                  ① The effects of globalization on color choices in
                  international business
                </div>
                <div>
                  ② The importance of marketing electronic devices in other
                  countries
                </div>
                <div>
                  ③ The influence of the Internet on product choices in
                  international business
                </div>
                <div>
                  ④ The significance of color for the consumers in other
                  countries
                </div>
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Ex18_4A;
