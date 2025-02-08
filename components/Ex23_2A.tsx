"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex23_2A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "2A-1",
      qa: [
        {
          questionNumber: "6",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "②：Special Features の内容をまとめ，言い換えた選択肢を選ぶ問題。Special Features の1文目 &quot;Smart Support shoes have ... the iSupport application.&quot;",
        "（スマートサポートシューズには，アイサポートアプリにつないだ時に足のかたちを分析するナノチップが入っている），2文目 &quot;Download the app ... smartwatch.&quot;（アプリをスマートフォン，パソコン，タブレットおよび／あるいはスマートウォッチにダウンロードしてください）という内容から，②「ハイテクの日常用シューズ」が正解。",
        "「日常用（everyday）」については，冒頭の説明文1文目 &quot;You wantr to buy ... get sore feet.&quot;（あなたは良い靴を1足買いたがっている。というのも学校まで長距離を歩いて足が痛くなることがよくあるからだ）という内容と，Customers' Comments の4つ目 &quot;I wear mine all year round&quot;（私は一年中自分の靴を履いている）という内容から，この靴が日常的に履くためのものだと判断できる。",
      ],
    },
    {
      questionId: "2A-2",
      qa: [
        {
          questionNumber: "7",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "②：本文の内容から推測して適切な選択肢を選ぶ問題。冒頭の説明文1文目 &quot;You want to buy ... get sore feet.&quot;（あなたは良い靴を1足買いたがっている。というのも学校まで長距離を歩いて足が痛くなることがよくあるからだ）という内容と， ",
        "Special Features の4文目 &quot;The inside of the shoe ... personalised foot support.&quot;（靴の内側が自動的に自動的に調整し，正しく，個人に合った足のサポートを提供します）という内容から，②「個人に合った足のサポートをしてくれる」が正解。",
      ],
    },
    {
      questionId: "2A-3",
      qa: [
        {
          questionNumber: "8",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "②：本文の内容から推測して適切な言いかえを選ぶ問題。Customers&apos; Comments の7つ目の2文目 &quot;The app&apos;s basic features are easy to use, but I wouldn&apos;t pay for the optional advanced ones.&quot;（このアプリの基本的な機能は使いやすいが，私はオプションの上級版の機能にお金を払うことはないだろう）から，②「アプリの無料の機能はユーザーフレンドリーである」が正解。「上級版の機能にお金を払う」という内容から，基本的な機能は無料で使える，と推測することが求められている。",
      ],
    },
    {
      questionId: "2A-4",
      qa: [
        {
          questionNumber: "9",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "問4 ④：Advantages の Route Options に &quot;View your live location ... to read directions.&quot;（自分のディバイスで現在の位置を見るか，イヤフォンで方向が自動的に音声で流れるようにさせるか，スマートウォッチを使って方向を知るようにしてください）という内容から，④の Route Options が正解。設問の audio devices が本文では earphones となっていることに気付く必要がある。 ",
      ],
    },
    {
      questionId: "2A-5",
      qa: [
        {
          questionNumber: "10",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "問5 ①：Customers&apos; Comments の3つ目 &quot;I love my pair now, but it took several days to get used to them&quot;（私は自分の靴が今大好きですが，それに慣れるのに数日かかりました）から，①「靴に慣れるのに時間を割くこと」が正解。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第２問 A"}</h1>
          <span className="text-gray-600">(配点 {10})</span>
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
      {/* Context */}
      <div className="mb-6">
        <p className="text-gray-700">
          You want to buy a good pair of shoes as you walk a long way to school
          and often get sore feet. You are searching on a UK website and find
          this advertisement.
        </p>
      </div>
      {/* Main Advertisement */}
      <div className="border border-gray-800 p-6 mb-8">
        <h1 className="text-xl mb-4">
          Navi 55 presents the new <span className="italic">Smart Support</span>{" "}
          shoe line
        </h1>

        <div className="flex justify-between mb-6">
          <p className="w-2/3">
            <span className="italic">Smart Support</span> shoes are strong,
            long-lasting, and reasonably priced. They are available in three
            colours and styles.
          </p>
          <div className="w-1/3 text-center">
            <Image
              src="/images/Ex23-2A-1.jpg"
              alt="Shoe with nano-chip"
              width={120}
              height={80}
              className="mx-auto"
            />
            <p className="text-sm mt-1">nano-chip</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-bold text-lg text-center">Special Features</h2>

          <p className="leading-relaxed">
            <span className="italic">Smart Support</span> shoes have a nano-chip
            which analyses the shape of your feet when connected to the{" "}
            <span className="italic">iSupport</span> application. Download the
            app onto your smartphone, PC, tablet, and/or smartwatch. Then, while
            wearing the shoes, let the chip collect the data about your feet.
            The inside of the shoe will automatically adjust to give correct,
            personalised foot support. As with other Navi 55 products, the shoes
            have our popular Route Memory function.
          </p>

          <h2 className="font-bold text-lg text-center">Advantages</h2>

          <div className="space-y-4">
            <div>
              <p className="font-bold">Better Balance:</p>
              <p className="ml-4">
                Adjusting how you stand, the personalised support helps keep
                feet, legs, and back free from pain.
              </p>
            </div>

            <div>
              <p className="font-bold">Promotes Exercise:</p>
              <p className="ml-4">
                As they are so comfortable, you will be willing to walk
                regularly.
              </p>
            </div>

            <div>
              <p className="font-bold">Route Memory:</p>
              <p className="ml-4">
                The chip records your daily route, distance, and pace as you
                walk.
              </p>
            </div>

            <div>
              <p className="font-bold">Route Options:</p>
              <p className="ml-4">
                View your live location on your device, have the directions play
                automatically in your earphones, or use your smartwatch to read
                directions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Customer Comments */}
      <div className="border border-gray-800 p-6">
        <h2 className="font-bold mb-4">Customers&apos; Comments</h2>
        <ul className="space-y-2">
          {[
            "I like the choices for getting directions, and prefer using audio guidance to visual guidance.",
            "I lost 2 kg in a month!",
            "I love my pair now, but it took me several days to get used to them.",
            "As they don&apos;t slip in the rain, I wear mine all year round.",
            "They are so light and comfortable I even wear them when cycling.",
            "Easy to get around! I don&apos;t need to worry about getting lost.",
            "They look great. The app&apos;s basic features are easy to use, but I wouldn&apos;t pay for the optional advanced ones.",
          ].map((comment, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-lg">•</span>
              <span>{comment}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Question 1 */}
      <div
        className={cn("space-y-4 mt-7", showResults && qaFormat(qa, "2A-1"))}
      >
        <div className="flex items-center flex-wrap mb-4 gap-2">
          <span className="whitespace-nowrap mr-1">問 1</span>
          <span>
            According to the maker&apos;s statements, which best describes the
            new shoes?
          </span>
          {renderSelect("6", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="2A-1" />}
        </div>
        <ol className="list-none space-y-2">
          {[
            "Cheap summer shoes",
            "High-tech everyday shoes",
            "Light comfortable sports shoes",
            "Stylish colourful cycling shoes",
          ].map((answer, index) => (
            <li key={index} className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                {index + 1}
              </span>
              {answer}
            </li>
          ))}
        </ol>
      </div>
      {/* Question 2 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-2"))}
      >
        <div className="flex items-center flex-wrap mb-4 gap-2">
          <span className="whitespace-nowrap mr-1">問 2</span>
          <span>
            Which benefit offered by the shoes is most likely to appeal to you?
          </span>
          {renderSelect("7", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="2A-2" />}
        </div>
        <ol className="list-none space-y-2">
          {[
            "Getting more regular exercise",
            "Having personalised foot support",
            "Knowing how fast you walk",
            "Looking cool wearing them",
          ].map((answer, index) => (
            <li key={index} className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                {index + 1}
              </span>
              {answer}
            </li>
          ))}
        </ol>
      </div>
      {/* Question 3 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-3"))}
      >
        <div className="flex items-center flex-wrap mb-4 gap-2">
          <span className="whitespace-nowrap mr-2">問 3</span>
          <span>
            One <u>opinion</u> stated by a customer is that
          </span>
          {renderSelect("8", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="2A-3" />}
        </div>
        <ol className="list-none space-y-2">
          {[
            "the app encourages fast walking",
            "the app&apos;s free functions are user-friendly",
            "the shoes are good value for money",
            "the shoes increase your cycling speed",
          ].map((answer, index) => (
            <li key={index} className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                {index + 1}
              </span>
              {answer}
            </li>
          ))}
        </ol>
      </div>
      {/* Question 4 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-4"))}
      >
        <div className="flex items-start mb-4 mt-3 flex-wrap gap-2">
          <span className="whitespace-nowrap mr-2">問 4</span>
          <span>
            One customer&apos;s comment mentions using audio devices. Which
            benefit is this comment based on?
          </span>
          {renderSelect("9", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="2A-4" />}
        </div>
        <ol className="list-none space-y-2">
          {[
            "Better Balance",
            "Promotes Exercise",
            "Route Memory",
            "Route Options",
          ].map((answer, index) => (
            <li key={index} className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                {index + 1}
              </span>
              {answer}
            </li>
          ))}
        </ol>
      </div>
      {/* Question 5 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-5"))}
      >
        <div className="flex items-center mb-4 mt-3 flex-wrap">
          <span className="whitespace-nowrap mr-2">問 5</span>
          <span>According to one customer&apos;s opinion,</span>
          {renderSelect("10", 4, answers, setAnswers)}
          <span>is recommended.</span>
          {showResults && <Explain qa={qa} questionId="2A-5" />}
        </div>
        <ol className="list-none space-y-2">
          {[
            "allowing time to get accustomed to wearing the shoes",
            "buying a watch to help you lose weight",
            "connecting to the app before putting the shoes on",
            "paying for the iSupport advanced features",
          ].map((answer, index) => (
            <li key={index} className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                {index + 1}
              </span>
              <span>{answer}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Ex23_2A;
