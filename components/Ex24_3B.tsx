"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
const Ex24_3B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const question: QandA[] = [
    {
      questionId: "3B-1",
      qa: [
        {
          questionNumber: "18",
          answer: 0,
        },
        {
          questionNumber: "19",
          answer: 0,
        },
        {
          questionNumber: "20",
          answer: 0,
        },
        {
          questionNumber: "21",
          answer: 0,
        },
      ],
      rightAnswerString: "1234",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[18] ①、[19] ②、[20] ③、[21] ④が正解。",
        "（するとリーチ先生は，10年前の海の画像を見せてくれた。カメラで見たサンゴ礁もダイナミックだったが，その写真では，サンゴ礁はさらに生命力に溢れていた。たった10年で，こんなにも違って見えるものなんだ！リーチ先生は，人間の活動が海に影響を及ぼしており，私たちが今すぐ行動を起こさなければ，海は完全にダメになってしまうかもしれないと話した）という内容から，これについてのコメントに該当するのが，②「以前ははるかに多くの生物がいたことに本当に驚いた。私たちは美しい海を守らねばなりません！」である。",
        "（私たちは体育館にテントを張り，プロジェクターを使って天井に仮設のプラネタリウムを作った）という内容へのコメントに該当するのが，③「体育館の中にキャンプ場を設定するのはちょっと変な感じだったけれど，とても面白かった！屋外より良かった。だって，虫に刺されなかったのだから」である。 ",
        "（私たちは満天の星座，流れ星，天の川に魅了された。誰かが最も明るい光のひとつを指さして，リーチ先生にそれが地球に最も近い惑星である金星なのかと尋ねた。彼はうなずき，人間が人工的な光をたくさん作り出したため，私たちの都市の夜空にはほとんど何も見えないのだと説明した）という内容へのコメントに該当するのが，④「私たちは宇宙ショーの間，言葉を失った。そして，たとえそこにあっても私たちは物事に気づかないのだということに気がついた」",
      ],
    },
    {
      questionId: "3B-2",
      qa: [
        {
          questionNumber: "22",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "③「季節ごとの天候」が正解。本文では南の島の季節ごとの天候については述べられていない",
      ],
    },
    {
      questionId: "3B-3",
      qa: [
        {
          questionNumber: "23",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "②「わずかな数の星」が正解。",
        "（放課後の帰り道，天気は回復し，雲ひとつない空になった。私は月のない空を見上げて，リーチ先生が話してくれたことが本当だと気づいた）と，第4段落最終文の「人間が人工的な光をたくさん作り出したため，私たちの都市の夜空にはほとんど何も見えないのだと説明した」という内容から",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  const questionData = {
    id: "2024-3B",
    title: "2024-3B",
    situation:
      "You are going to participate in an English Day. As preparation, you are reading an article in the school newspaper written by Yuzu, who took part in it last year.",
    passage: {
      title: "Virtual Field Trip to a South Sea Island",
      content: [
        "This year, for our English Day, we participated in a virtual science tour. The winter weather had been terrible, so we were excited to see the tropical scenery of the volcanic island projected on the screen.",
        "First, we 'took a road trip' to learn about the geography of the island, using navigation software to view the route. We \"got into the car,\" which our teacher, Mr Leach, sometimes stopped so we could look out of the window and get a better sense of the rainforest. Afterwards, we asked Mr Leach about what we'd seen.",
        "Later, we 'dived into the ocean' and learnt about the diversity of marine creatures. We observed a coral reef via a live camera. Mr Leach asked us if we could count the number of creatures, but there were too many! Then he showed us an image of the ocean 10 years ago. The reef we'd seen on camera was dynamic, but in the photo it was even more full of life. It looked so different after only 10 years! Mr Leach told us human activity was affecting the ocean and it could be totally ruined if we didn't act now.",
        "In the evening, we studied astronomy under a 'perfect starry sky.' We put up tents in the gymnasium and created a temporary planetarium on the ceiling using a projector. We were fascinated by the sky full of constellations, shooting stars, and the Milky Way. Someone pointed out one of the brightest lights and asked Mr Leach if it was Venus, a planet close to Earth.",
        "He nodded and explained that humans have created so much artificial light that hardly anything is visible in our city's night sky.",
        "On my way home after school, the weather had improved and the sky was now cloudless. I looked up at the moonless sky and realised what Mr Leach had told us was true.",
      ],
    },
    questions: [
      {
        number: "1",
        prompt:
          "Put the student comments in the order in which the events happened.",
        options: [
          "I was wondering how dangerous the island was. I saw beautiful birds and a huge snake in the jungle.",
          "It was really shocking that there had been many more creatures before. We should protect our beautiful oceans!",
          "Setting up a camping site in the gymnasium was kind of weird, but great fun! Better than outside, because we weren't bitten by bugs!",
          "We were lost for words during the space show and realised we often don't notice things even though they're there.",
        ],
        answer: 1,
      },
      {
        number: "2",
        prompt:
          "From the tour, Yuzu did not learn about the ___ of the south sea island.",
        options: [
          "marine ecosystem",
          "night-time sky",
          "seasonal weather",
          "trees and plants",
        ],
        answer: 1,
      },
      {
        number: "3",
        prompt:
          "On the way home, Yuzu looked up and most likely saw ___ in the night sky.",
        options: [
          "a shooting star",
          "just a few stars",
          "the full moon",
          "the Milky Way",
        ],
        answer: 1,
      },
    ],
  };
  const comments = {
    "1": "I was wondering how dangerous the island was. I saw beautiful birds and a huge snake in the jungle.",
    "2": "It was really shocking that there had been many more creatures before. We should protect our beautiful oceans!",
    "3": "Setting up a camping site in the gymnasium was kind of weird, but great fun! Better than outside, because we weren't bitten by bugs!",
    "4": "We were lost for words during the space show and realised we often don't notice things even though they're there.",
  };

  const q2Options = [
    { number: "1", text: "marine ecosystem" },
    { number: "2", text: "night-time sky" },
    { number: "3", text: "seasonal weather" },
    { number: "4", text: "trees and plants" },
  ];

  const q3Options = [
    { number: "1", text: "a shooting star" },
    { number: "2", text: "just a few stars" },
    { number: "3", text: "the full moon" },
    { number: "4", text: "the Milky Way" },
  ];
  const correctAnswerArray = [1, 2, 3, 4, 3, 2];
  return (
    <div className={cn(exPageFormat)}>
      {/* 問題番号とシチュエーション */}
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第３問 B"}</h1>
          <span className="text-gray-600">(配点 {9})</span>
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

      {/* 記事本体 */}
      <div className="mb-4 px-2 sm:px-4">
        <p className="text-base">{questionData.situation}</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg mb-8 p-4 sm:p-6 mx-2 sm:mx-0">
        <h3 className="text-xl font-bold text-center mb-4">
          {questionData.passage.title}
        </h3>

        <div className="space-y-4">
          {questionData.passage.content.map((paragraph, index) => (
            <div key={index}>
              {index === 3 ? (
                <div className="flex flex-col md:flex-row gap-4 my-6">
                  <div className="flex-grow">
                    <p>
                      {paragraph}{" "}
                      {Kaisetsu(showResults, "24-3B-" + (index + 1))}
                    </p>
                  </div>
                  <div className="w-full">
                    <Image
                      src="/images/Ex24-3B-1.jpg"
                      alt="Starry night sky with shooting stars"
                      width={800}
                      height={600}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              ) : (
                <p>
                  {paragraph} {Kaisetsu(showResults, "24-3B-" + (index + 1))}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 設問部分 */}
      <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
        <div className={cn("mb-6", showResults && qaFormat(qa, "3B-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2">問1</span>
            <span>
              Yuzu&apos;s article also included student comments (⓪~④)
              describing the events in the virtual tour. Put the comments in the
              order in which the events happened.
            </span>
            {renderSelect("18", 4, answers, setAnswers)}
            <div className="mx-1">→</div>
            {renderSelect("19", 4, answers, setAnswers)}
            <div className="mx-1">→</div>
            {renderSelect("20", 4, answers, setAnswers)}
            <div className="mx-1">→</div>
            {renderSelect("21", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId={"3B-1"} />}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          {Object.entries(comments).map(([key, text], index) => (
            <div key={key} className="p-3 border rounded-lg bg-white">
              <div className="text-sm mb-1">{"①②③④"[index]}</div>
              <div className="text-sm">{text}</div>
            </div>
          ))}
        </div>

        <div className={cn("my-8", showResults && qaFormat(qa, "3B-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2">問2</span>
            <span>
              From the tour, Yuzu did&nbsp;{" "}
              <span className="underline">not</span>&nbsp; learn about the
            </span>
            {renderSelect("22", 4, answers, setAnswers)}
            <span>of the south sea island.</span>
            {showResults && <Explain qa={qa} questionId={"3B-2"} />}
          </div>

          <div className="space-y-1">
            {q2Options.map((option, index) => (
              <div key={option.number} className="flex items-start">
                <span className="mr-2">{"①②③④"[index]}</span>
                <span>{option.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={cn("mb-6", showResults && qaFormat(qa, "3B-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2">問3</span>
            <span>On the way home, Yuzu looked up and most likely saw</span>
            {renderSelect("23", 4, answers, setAnswers)}
            <span>in the night sky.</span>
            {showResults && <Explain qa={qa} questionId={"3B-3"} />}
          </div>

          <div className="space-y-1">
            {q3Options.map((option, index) => (
              <div key={option.number} className="flex items-start">
                <span className="mr-2">{"①②③④"[index]}</span>
                <span>{option.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex24_3B;
