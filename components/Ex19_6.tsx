"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex19_6 = () => {
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
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は② 必要である",
        "その後、いろんなことが可能になった話が続く",
      ],
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
      explanation: [
        "正解は③ 陸路の発展は、社会の多くの分野で進歩をもたらした。",
        "(2)では 「The importance of land routes」について書かれている、 翻訳参照",
      ],
    },
    {
      questionId: "6-3",
      qa: [
        {
          questionNumber: "48",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isOrderFree: true,
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は④ 都市における水路の重要な役割を説明するために 江戸が紹介された",
        "翻訳参照",
      ],
    },
    {
      questionId: "6-4",
      qa: [
        {
          questionNumber: "49",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は① ルートは、世界に目に見えない形で存在すると考えることができる。",
        "「a new type of route, the Internet,」などの記述から、翻訳参照",
      ],
    },
    {
      questionId: "6-5",
      qa: [
        {
          questionNumber: "50",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は④ 人類の発展は、ルートの発展によって促された。いろいろなルートが開発され、人類が発展した文脈から",
        "* come at a cost: 犠牲を払って実現する、* interfere with: 邪魔する・妨げる",
      ],
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
      rightAnswerString: "1423",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は[51]① [52]④ [53]② [54]③ 翻訳参照",
        "① 人、動物、そして車両が利用する道路の建設",
        "④ 船舶の航路開設（および物資輸送）* lanes for ships to travel and transport things: 船舶が航行し物資を輸送するための航路",
        "② 人々が場所から場所へ飛ぶための方法を開発する",
        "③ 情報のグローバルな伝達経路の確立 * global paths: グローバルな経路/世界的な経路",
      ],
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
      </div>{" "}
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
            From quiet paths by a stream in a forest to busy roads running
            through a city, people have created various forms of routes in
            different places. These now exist all around us, and their use is{" "}
            <span className="underline">imperative</span> for societies. These
            routes have enabled people to move, transport things, and send
            information from one place to another quickly and safely. Throughout
            history, they have been important in our daily lives.
            {Kaisetsu(showResults, "19-6-1")}
          </div>
        </div>

        {/* Paragraph 2 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(2)</div>
          <div className="flex-grow">
            Early routes were often formed naturally on land. They gradually
            developed over long periods of time while people traveled them on
            foot or horseback. A significant turning point in their history
            arrived when the first wheeled carts appeared in ancient times. Once
            this happened, people recognized the importance of well-maintained
            routes. Therefore, towns, cities, and entire countries improved them
            in order to prosper. As a result, life became more convenient,
            communities grew, economies evolved, and cultures expanded. The
            importance of land routes increased further, especially after the
            appearance of automobiles.
            {Kaisetsu(showResults, "19-6-2")}
          </div>
        </div>

        {/* Paragraph 3 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(3)</div>
          <div className="flex-grow">
            People have established routes on water, too. Rivers and canals have
            served as effective routes for people to move around and carry
            things. For instance, in the old Japanese city of Edo, water routes
            were used for the transportation of agricultural products, seafood,
            and wood, which supported the city&apos;s life and economy. People
            have also opened routes across the sea. The seaways, which developed
            based on winds, waves, water depths, and coastline geography, were
            critical for the navigation of ships, particularly in the days when
            they moved mainly by wind power. Using these sea routes, people
            could travel great distances and go to places they had not
            previously been able to reach. A number of important sea routes
            emerged, leading to the exchange of natural resources, products, and
            ideas. This, in turn, helped cities and towns thrive.
            {Kaisetsu(showResults, "19-6-3")}
          </div>
        </div>

        {/* Paragraph 4 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(4)</div>
          <div className="flex-grow">
            People have gone on to open routes in the sky as well. Since the
            invention of the airplane, these routes have made it possible for
            people to travel long distances easily. They found the best routes
            by considering conditions such as winds and air currents.
            Eventually, people became able to travel safely and comfortably high
            in the sky, and going vast distances only took a small amount of
            time. In fact, people used to need more than one month to travel to
            Europe from Japan by ship, whereas today they can travel between
            them in a single day by airplane. Owing to the establishment of
            these sky routes, a great number of people now travel around the
            world for sightseeing, visiting friends, and doing business.
            {Kaisetsu(showResults, "19-6-4")}
          </div>
        </div>

        {/* Paragraph 5 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(5)</div>
          <div className="flex-grow">
            Today, we have a new type of route, the Internet, which specializes
            in the electronic exchange of information. By using this worldwide
            route, people can easily obtain information that once was available
            mainly from books and face-to-face communication. They can also
            instantly send messages to large numbers of people all at once.
            According to one study, more than 3.5 billion people, which is about
            half of the global population, have access to this electronic route
            today. As technology advances, more and more people will take
            advantage of this route to gather information and communicate.
            {Kaisetsu(showResults, "19-6-5")}
          </div>
        </div>

        {/* Paragraph 6 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(6)</div>
          <div className="flex-grow">
            As long as there have been people, there have been routes to connect
            them. These have contributed not only to the movement of people,
            things, and information, but also to the development of our
            communities, economies, and cultures. Routes have played significant
            roles in the development and prosperity of humankind. Currently
            unknown routes will surely take us even further in the future.
            {Kaisetsu(showResults, "19-6-6")}
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
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>
              Which of the following is closest to the meaning of the underlined
              word{" "}
            </span>
            <span className="underline">imperative</span>
            <span> in paragraph (1)?</span>
            {renderSelect("46", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-1" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① accidental</p>
            <p>② essential</p>
            <p>③ industrial</p>
            <p>④ traditional</p>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>
              According to paragraph (2), which of the following statements is
              true?
            </span>
            {renderSelect("47", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-2" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>
              ① Early routes were created by people who traveled by wheeled
              carts.
            </p>
            <p>
              ② People&apos;s first routes on land followed the growth of towns
              and cities.
            </p>
            <p>
              ③ The development of land routes led to progress in many areas of
              society.
            </p>
            <p>
              ④ The improvement of routes resulted in the invention of the
              automobile.
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>Why is the example of Edo introduced in paragraph (3)?</span>
            {renderSelect("48", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-3" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① To describe the difficulty of creating routes on the water</p>
            <p>② To emphasize the fact that it was an important city</p>
            <p>
              ③ To explain the use of water routes to move along the coastlines
            </p>
            <p>
              ④ To illustrate the important roles of water routes for cities
            </p>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span>What does paragraph (5) tell us about routes?</span>
            {renderSelect("49", 4, answers, setAnswers)}
          </div>
          <div className="pl-8 space-y-2">
            <p>
              ① Routes can be thought of as existing invisibly in the world.
            </p>
            <p>② Routes that move information can be regarded as dangerous.</p>
            <p>③ The fundamental functions of routes are declining.</p>
            <p>④ The importance of different kinds of routes is the same.</p>
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-5"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 5</span>
            <span>What is the main point of this article?</span>
            {renderSelect("50", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-5" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>
              ① Humankind first created various types of convenient routes on
              land.
            </p>
            <p>② Improvements in transportation have come at great cost.</p>
            <p>
              ③ Technology has interfered with opening up routes around the
              world.
            </p>
            <p>
              ④ The advancement of humanity was aided by the development of
              routes.
            </p>
          </div>
        </div>

        {/* Section B */}
        <div
          className={cn("space-y-4 mt-6", showResults && qaFormat(qa, "6-6"))}
        >
          {/* Section B Header */}
          <div className="mb-6">
            <p className="flex items-center flex-wrap">
              <span className="font-bold mr-4">B</span>
              次の表は、本文のパラグラフ(段落)の構成と内容をまとめたものである。
            </p>
            <p className="flex items-center my-2 flex-wrap">
              <span className="border border-black px-4 py-1">51</span>～
              <span className="border border-black px-4 py-1">54</span>
              に入れるのに最も適当なものを、下の①～④のうちから一つずつ選び、表を完成させよ。ただし、同じものを繰り返し選んではいけない。
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
              <p>① Creation of roads used by people, animals, and vehicles</p>
              <p>② Developing ways for people to fly from place to place</p>
              <p>③ Establishment of global paths for information transfer</p>
              <p>④ Opening of lanes for ships to travel and transport things</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex19_6;
