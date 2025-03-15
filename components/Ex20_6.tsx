"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex20_6 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "6-1",
      qa: [
        {
          questionNumber: "46",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [],
    },
    {
      questionId: "6-2",
      qa: [
        {
          questionNumber: "47",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [],
    },
    {
      questionId: "6-3",
      qa: [
        {
          questionNumber: "48",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isOrderFree: true,
      isCorrect: false,
      points: 6,
      explanation: [],
    },
    {
      questionId: "6-4",
      qa: [
        {
          questionNumber: "49",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [],
    },
    {
      questionId: "6-5",
      qa: [
        {
          questionNumber: "50",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [],
    },
    {
      questionId: "6-6",
      qa: [
        {
          questionNumber: "51",
          answer: 0,
        },
        {
          questionNumber: "52",
          answer: 0,
        },
        {
          questionNumber: "53",
          answer: 0,
        },
        {
          questionNumber: "54",
          answer: 0,
        },
      ],
      rightAnswerString: "2431",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第６問"}</h1>
          <span className="text-gray-600">(配点 {36})</span>
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

      {/* Question Header */}
      <div className="mb-6">
        <p className="text-lg mb-4">
          次の文章を読み、下の問い(A・B)に答えよ。なお、文章の左にある(1)～(6)はパラグラフ(段落)の番号を表している。
        </p>
      </div>

      {/* Paragraphs */}
      <div className="space-y-6">
        {/* Paragraph 1 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(1)</div>
          <div className="flex-grow">
            Vending machines are so common in Japan that you can find one almost
            anywhere you go. Some of these machines sell train or meal tickets,
            and others sell snacks or drinks. They are especially useful for
            people who want to get something quickly and conveniently.
            {Kaisetsu(showResults, "20-6-1")}
          </div>
        </div>

        {/* Paragraph 2 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(2)</div>
          <div className="flex-grow">
            While vending machines are found throughout the country today, they
            were not originally developed in Japan. It is generally believed
            that the first one was constructed by a Greek mathematics teacher
            about 2,200 years ago. This machine sold special water used in
            prayers at temples. People who wanted to purchase the water put in a
            coin, which hit a metal lever attached to a string. Then, the weight
            of the coin let a specific amount of water pour out until the coin
            fell off. This ensured that people received an equal portion of the
            special water.
            {Kaisetsu(showResults, "20-6-2")}
          </div>
        </div>

        {/* Paragraph 3 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(3)</div>
          <div className="flex-grow">
            About 1,000 years ago, a vending machine that sold pencils was
            developed in China. Later, in the 1700s, coin-operated tobacco boxes
            appeared in English bars. When people wanted the product sold by one
            of these boxes, they inserted a coin and turned a lever. The product
            then dropped down for the customer to pick up. However, it was not
            until the 1880s that vending machines spread around the world. In
            1883, an English inventor created one that sold postcards and paper.
            This became popular, and soon vending machines selling paper,
            stamps, and other goods appeared in many countries. In 1904, vending
            machines came into service in Japan. In 1926, technology had
            advanced and machines could be set to sell products with different
            prices. After that, a wider variety of products were sold. When this
            happened, the vending machine industry expanded rapidly.
            {Kaisetsu(showResults, "20-6-3")}
          </div>
        </div>

        {/* Paragraph 4 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(4)</div>
          <div className="flex-grow">
            The greatest problem faced by the global vending machine industry in
            its expansion was not the use of coins; it was paper money. This was
            a challenge as it proved easy for dishonest individuals to make
            money that could fool machines. This forced the vending machine
            industry to establish better detection methods and was one reason
            countries took steps to develop money that was difficult to
            counterfeit. Now, vending machines have become technologically
            advanced, not only to prevent problems with cash but also to accept
            credit cards and more recent forms of electronic payment.
            {Kaisetsu(showResults, "20-6-4")}
          </div>
        </div>

        {/* Paragraph 5 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(5)</div>
          <div className="flex-grow">
            It is in Japan that vending machines have become most popular.
            Currently, Japan has more than 4.2 million vending machines, with
            about 55% of them selling beverages such as tea, coffee, and juice.
            One of the main reasons Japan has become the vending machine capital
            of the world is its overall level of safety. Unlike many places,
            where vending machines must be monitored to prevent theft, they can
            be placed virtually anywhere in Japan. This extraordinary degree of
            public safety is considered amazing by visitors, as well as the
            range of products available. Tourists often take pictures of
            machines that sell unexpected products like bananas, fresh eggs, and
            bags of rice. It is understandable that visitors see them as one
            aspect particular to Japanese culture.
            {Kaisetsu(showResults, "20-6-5")}
          </div>
        </div>

        {/* Paragraph 6 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(6)</div>
          <div className="flex-grow">
            Given the popularity and usefulness of vending machines, it is
            unlikely that they will disappear anytime in the near future. They
            provide a place where various goods can be sold without the need for
            a sales clerk. The next time you want to purchase a hot drink on a
            cold day, remember that, in Japan at least, there is probably a
            vending machine just around the next corner.
            {Kaisetsu(showResults, "20-6-6")}
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="mt-8 space-y-8">
        {/* Question A Header */}
        <div className="mb-4">
          <p className="flex items-center">
            <span className="font-bold mr-4">A</span>
            次の問い(問1～5)の
            <span className="mx-2 border border-black px-4 py-1">46</span>～
            <span className="mx-2 border border-black px-4 py-1">50</span>
            に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
          </p>
        </div>

        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="font-bold mr-4 whitespace-nowrap">問1</span>
            <span>
              According to paragraph (2), what was the first vending machine
              capable of doing?
            </span>
            {renderSelect("46", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-1" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① Allowing people to acquire a fixed amount of liquid from it</p>
            <p>② Offering books of ancient Greek mathematical principles</p>
            <p>
              ③ Permitting visitors to enter temples when they wanted to pray
            </p>
            <p>④ Providing a regular income to the person who created it</p>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="font-bold mr-4 whitespace-nowrap">問2</span>
            <span>
              According to paragraph (3), which of the following statements
              about vending machines is true?
            </span>
            {renderSelect("47", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-2" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>
              ① An English inventor&apos;s vending machine sold goods at various
              prices.
            </p>
            <p>
              ② Sales by vending machines increased when high value coins
              appeared.
            </p>
            <p>
              ③ Vending machine technology was found in Asia many centuries ago.
            </p>
            <p>
              ④ Vending machines were common in the world by the 18th century.
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="font-bold mr-4 whitespace-nowrap">問3</span>
            <span>
              Which of the following is closest to the meaning of the underlined
              word{" "}
            </span>
            <span className="underline">counterfeit</span>
            <span> in paragraph (4)?</span>
            {renderSelect("48", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-3" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① accept illegal exchanges</p>
            <p>② create unauthorized imitations</p>
            <p>③ restrict unapproved technology</p>
            <p>④ withdraw unnecessary support</p>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-4"))}>
          <div className="flex items-start flex-wrap gap-2 mb-4">
            <span className="font-bold mr-4 whitespace-nowrap">問4</span>
            <span className="mb-2">
              According to paragraph (5), what is true about vending machines in
              Japan?
            </span>
            {renderSelect("49", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-4" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① Foreign tourists hesitate to make purchases from them.</p>
            <p>② Over three quarters of them sell a variety of drinks.</p>
            <p>③ The highly safe products sold in them attract customers.</p>
            <p>④ The variety of items makes them unique in the world.</p>
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-5"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="font-bold mr-4">問5</span>
            <span>What would be the best title for this passage?</span>
            {renderSelect("50", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-5" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>
              ① The Cultural Benefits of Vending Machines in Japanese Society
            </p>
            <p>
              ② The Development of Vending Machines From Historical Perspectives
            </p>
            <p>
              ③ The Economic Impact of Vending Machines by International
              Comparison
            </p>
            <p>
              ④ The Globalization of Vending Machines Through Modern Technology
            </p>
          </div>
        </div>
      </div>

      {/* Section B */}
      <div className={cn("space-y-4 mt-6", showResults && qaFormat(qa, "6-6"))}>
        {/* Section B Header */}
        <div className="mb-6">
          <p className="flex items-center flex-wrap">
            <span className="font-bold mr-4">B</span>
            次の表は、本文のパラグラフ(段落)の構成と内容をまとめたものである。
          </p>
          <p className="flex items-center my-2 flex-wrap">
            <span className="border border-black px-4 py-1">51</span>～
            <span className="border border-black px-4 py-1">54</span>
            に入れるのに最も適当なものを、下の①～④のうちから一つずつ選び、表を完成させよ。
            ただし、同じものを繰り返し選んではいけない。
            <span className="flex flex-wrap gap-2 mt-1">
              {renderSelect("51", 4, answers, setAnswers)}
              {renderSelect("52", 4, answers, setAnswers)}
              {renderSelect("53", 4, answers, setAnswers)}
              {renderSelect("54", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="6-6" />}
            </span>
          </p>
        </div>

        {/* Table */}
        <div className="w-full max-w-xl mx-auto">
          <table className="w-full border-collapse border border-black">
            <thead>
              <tr>
                <th className="border border-black p-3 w-1/3">Paragraph</th>
                <th className="border border-black p-3 w-2/3">Content</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-3 text-center">(1)</td>
                <td className="border border-black p-3 text-center">
                  Introduction
                </td>
              </tr>
              <tr>
                <td className="border border-black p-3 text-center">(2)</td>
                <td className="border border-black p-3 text-center">
                  <span className="border border-black px-4 py-1">51</span>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-3 text-center">(3)</td>
                <td className="border border-black p-3 text-center">
                  <span className="border border-black px-4 py-1">52</span>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-3 text-center">(4)</td>
                <td className="border border-black p-3 text-center">
                  <span className="border border-black px-4 py-1">53</span>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-3 text-center">(5)</td>
                <td className="border border-black p-3 text-center">
                  <span className="border border-black px-4 py-1">54</span>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-3 text-center">(6)</td>
                <td className="border border-black p-3 text-center">
                  Conclusion
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Choices */}
        <div className="mt-8 space-y-4">
          <div className="pl-4">
            <p>
              ① A certain factor that has allowed vending machines to exist
              widely in one country
            </p>
            <p>
              ② Creation of one vending machine and a description of how the
              device was used
            </p>
            <p>
              ③ Difficulties in building vending machines after introducing a
              different form of money
            </p>
            <p>
              ④ Types of vending machine goods sold at different locations in
              the past
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex20_6;
