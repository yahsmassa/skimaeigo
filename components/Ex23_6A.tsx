"use client";

import { Card } from "@/lib/util";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import Image from "next/image";

const Ex23_6A = () => {
  const HolePunch = () => (
    <div className="w-2 h-2 rounded-full border border-gray-300" />
  );

  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const question: QandA[] = [
    {
      questionId: "6A-1",
      qa: [
        {
          questionNumber: "39",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[39] 正解は③「一人の人間にとって重要ではないものが他の誰かにとって価値があるかもしれない」",
        "第1段落8文目 （一人の人間のごみが別の人の宝物になりうる）という内容から，",
      ],
    },
    {
      questionId: "6A-2",
      qa: [
        {
          questionNumber: "40",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は④「およそ30%の人々が大人になっても収集を続けている」、第2段落4文目（この分野の研究者は，およそ3分の1の大人がこの行動を維持するということに一般的に同意している）という内容から，",
      ],
    },
    {
      questionId: "6A-3",
      qa: [
        {
          questionNumber: "41",
          answer: 0,
        },
        {
          questionNumber: "42",
          answer: 0,
        },
      ],
      rightAnswerString: "46",
      answerString: "",
      isOrderFree: true,
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は[41] ④「大切なイベントを思い出させるもの」、[42] ⑥「何らかの種類の利益を求める」",
        "第3段落7文目 （友達や家族からのグリーティングカード，特別なイベントでもらったドライフラワー，浜辺で過ごした日の貝殻などを貯めている人もいる）",
        "第4段落4文目後半 （一方で，特に投資としてものを集める人もいる）という内容から，5文目（While it is ... worth a lot.）ではその内容が具体的に説明されている。",
      ],
    },
    {
      questionId: "6A-4",
      qa: [
        {
          questionNumber: "43",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は①「収集はおそらく大きさや形が変わり続けるであろう」",
        '第6段落3文目 "As technology can ... 30 years ago."（テクノロジーが物理的制約を取り除けるので，30年前には想像もできなかったであろう膨大な音楽や美術のデジタルライブラリーを今では個人が所有できる）という内容から',
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第６問 A"}</h1>
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
      {/* Question Label */}
      <div className="flex gap-2 mb-6">
        <p className="text-justify indent-7">
          You are in a discussion group in school. You have been asked to
          summarize the following article. You will speak about it, using only
          notes.
          {Kaisetsu(showResults, "23-6A-0")}
        </p>
      </div>
      {/* Article Title */}
      <h1 className="text-center font-bold text-xl mb-8">Collecting</h1>
      {/* Article Content */}
      <div className="space-y-6 text-justify">
        <p className="indent-7">
          Collecting has existed at all levels of society, across cultures and
          age groups since early times. Museums are proof that things have been
          collected, saved, and passed down for future generations. There are
          various reasons for starting a collection. For example, Ms. A enjoys
          going to yard sales every Saturday morning with her children. At yard
          sales, people sell unwanted things in front of their houses. One day,
          while looking for antique dishes, an unusual painting caught her eye
          and she bought it for only a few dollars. Over time, she found similar
          pieces that left an impression on her, and she now has a modest
          collection of artwork, some of which may be worth more than she paid.
          one person&apos;s trash can be another person&apos;s treasure.
          Regardless of how someone&apos;s collection was started, it is human
          nature to collect things.
          {Kaisetsu(showResults, "23-6A-1")}
        </p>
        <p className="indent-7">
          In 1988, researchers Brenda Danet and Tamar Katriel analyzed 80 years
          of studies on children under the age of 10, and found that about 90%
          collected something. This shows us that people like to gather things
          from an early age. Even after becoming adults, people continue
          collecting stuff. Researchers in the field generally agree that
          approximately one third of adults maintain this behavior. Why is this?
          The primary explanation is related to emotions. Some save greeting
          cards from friends and family, dried flowers from special events,
          seashells from a day at the beach, old photos, and so on. For others,
          their collection is a connection to their youth. They may have
          baseball cards, comic books, dolls, or miniature cars that they have
          kept since they were small.
          {Kaisetsu(showResults, "23-6A-2")}
          Others have an attachment to history; they seek and hold onto
          historical documents, signed letters and autographs from famous
          people, and so forth.
          {Kaisetsu(showResults, "23-6A-3")}
        </p>
        <p className="indent-7">
          For some individuals there is a social reason. People collect things
          such as pins to share, show, and even trade, making new friends this
          way. Others, like some holders of Guinness World Records, appreciate
          the fame they achieve for their unique collection. Cards, stickers,
          stamps, coins, and toys have topped the &quot;usual&quot; collection
          list, but some collectors lean toward the more unexpected. In
          September 2014, Guinness World Records recognized Harry Sperl, of
          Germany, for having the largest hamburger-related collection in the
          world, with 3,724 items; from T-shirts to pillows to dog toys,
          Sperl&apos;s room is filled with all things &quot;hamburger.&quot;
          Similarly, Liu Fuchang, of China, is a collector of playing cards. He
          has 11,087 different sets.
          {Kaisetsu(showResults, "23-6A-4")}
        </p>
        <p className="indent-7">
          Perhaps the easiest motivation to understand is pleasure. Some people
          start collections for pure enjoyment. They may purchase and put up
          paintings just to gaze at frequently, or they may collect audio
          recordings and old- fashioned vinyl records to enjoy listening to
          their favorite music. This type of collector is unlikely to be very
          interested in the monetary value of their treasured music, while
          others collect objects specifically as an investment. While it is
          possible to download certain classic games for free, having the same
          game unopened in its original packaging, in &quot;mint
          condition,&quot; can make the game worth a lot. Owning various
          valuable &quot;collector&apos;s items&quot; could ensure some
          financial security.
          {Kaisetsu(showResults, "23-6A-5")}
        </p>
        <p className="indent-7">
          This behavior of collecting things will definitely continue into the
          distant future. Although the reasons why people keep things will
          likely remain the same, advances in technology will have an influence
          on collections. As technology can remove physical constraints, it is
          now possible for an individual to have vast digital libraries of music
          and art that would have been unimaginable 30 years ago. It is unclear,
          though, what other impacts technology will have on collections. Can
          you even imagine the form and scale that the next generation&apos;s
          collections will take?
          {Kaisetsu(showResults, "23-6A-6")}
        </p>
      </div>
      {/* Notes Section */}
      <div className="mt-12">
        <h2 className="font-bold mb-4">Your notes:</h2>

        <Card className="p-6 relative">
          {/* Lined paper background */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-rose-100" />
          {/* Left margin holes */}
          <div className="absolute left-4 top-0 bottom-0 flex flex-col gap-6">
            {Array.from({ length: 20 }).map((_, i) => (
              <HolePunch key={i} />
            ))}
          </div>

          {/* Header with illustrations */}
          <div className="flex justify-between items-center mb-6">
            <Image
              src="/images/Ex23-6A-1.jpg"
              alt="Hamburger bag illustration"
              width={80}
              height={80}
            />
            <span className="text-xl italic">Collecting</span>
            <Image
              src="/images/Ex23-6A-2.jpg"
              alt="Playing cards illustration"
              width={80}
              height={80}
            />
          </div>

          {/* Notes content */}
          <div className="space-y-4 ml-8">
            <div>
              <h3 className="font-bold mb-2">Introduction</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-lg">♦</span>
                  <span>
                    Collecting has long been part of the human experience.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">♦</span>
                  <span>
                    The yard sale story tells us that{" "}
                    <span className="border border-gray-300 px-2">39</span>.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Facts</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-lg">♦</span>
                  <span className="border border-gray-300 px-2">40</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">♦</span>
                  <div>
                    <div>Guinness World Records</div>
                    <ul className="ml-6 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-lg">◇</span>
                        <span>Sperl: 3,724 hamburger-related items</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lg">◇</span>
                        <span>Liu: 11,087 sets of playing cards</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Reasons for collecting</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-lg">♦</span>
                  <span>
                    Motivation for collecting can be emotional or social.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">♦</span>
                  <span>
                    Various reasons mentioned:{" "}
                    <span className="border border-gray-300 px-2">41</span>,{" "}
                    <span className="border border-gray-300 px-2">42</span>,
                    interest in history, childhood excitement, becoming famous,
                    sharing, etc.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Collections in the future</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-lg">♦</span>
                  <span className="border border-gray-300 px-2">43</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      {/* Multiple Choice Questions */}
      <div className={cn("mt-12 space-y-8")}>
        <div className={cn(" space-y-4", showResults && qaFormat(qa, "6A-1"))}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>Choose the best option for </span>
            {renderSelect("39", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6A-1" />}
            {Kaisetsu(showResults, "23-6A-7")}
          </div>
          <div className="ml-2 md:ml-8 space-y-3">
            {[
              "a great place for people to sell things to collectors at a high price is a yard sale",
              "people can evaluate items incorrectly and end up paying too much money for junk",
              "something not important to one person may be of value to someone else",
              "things once collected and thrown in another person's yard may be valuable to others",
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

        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-2"))}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>Choose the best option for </span>
            {renderSelect("40", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6A-2" />}
            {Kaisetsu(showResults, "23-6A-8")}
          </div>
          <div className="ml-2 md:ml-8 space-y-3">
            <div>
              {[
                "About two thirds of children do not collect ordinary things.",
                "Almost one third of adults start collecting things for pleasure.",
                "Approximately 10% of kids have collections similar to their friends.",
                "Roughly 30% of people keep collecting into adulthood.",
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

        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-3"))}>
          <div className="flex flex-wrap items-center gap-2 ">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>Choose the best options for</span>{" "}
            {renderSelect("41", 6, answers, setAnswers)} and{" "}
            {renderSelect("42", 6, answers, setAnswers)}
            <span> (The order does not matter.)</span>
            {showResults && <Explain qa={qa} questionId="6A-3" />}
            {Kaisetsu(showResults, "23-6A-9")}
          </div>
          <div className="ml-2 md:ml-8 space-y-3">
            <div>
              {[
                "desire to advance technology",
                "fear of missing unexpected opportunities",
                "filling a sense of emptiness",
                "reminder of precious events",
                "reusing objects for the future",
                "seeking some sort of profit",
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

        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-4"))}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>Choose the best option for </span>
            {renderSelect("43", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6A-4" />}
            {Kaisetsu(showResults, "23-6A-10")}
          </div>
          <div className="ml-2 md:ml-8 space-y-3">
            <div>
              {[
                "Collections will likely continue to change in size and shape.",
                "Collectors of mint-condition games will have more digital copies of them.",
                "People who have lost their passion for collecting will start again.",
                "Reasons for collecting will change because of advances in technology.",
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
      </div>
    </div>
  );
};

export default Ex23_6A;
