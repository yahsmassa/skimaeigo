"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten2 } from "@/components/Saiten2";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex21_6A = () => {
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
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解④「不明瞭な視界」",
        "解説 第３パラグラフに、&quot;In less serious cases, for a short time, players may be unable to walk straight or see clearly, ~.&quot;「比較的軽症の場合、短い時間の間、選手は真っすぐに歩けなかったり明瞭に見えなくなったりするかもしれない」とあるので、そこから判断できる。",
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
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解③「睡眠障害」",
        "解説 第４パラグラフで脳震盪の長期的な影響が言及されている。それは、&quot;concussions can have serious effects that last a lifelong.&quot;「脳震盪は生涯にわたって続く深刻な影響を及ぼす可能性がある」という個所から読み取れる。そして、その直後に、&quot;People with a history concussion may have trouble concentrating or sleeping.&quot;「脳震盪になったことのある人は集中することや睡眠に困難が生じるかもしれない」とあるので、そこから判断できる。",
      ],
    },
    {
      questionId: "6A-3",
      qa: [
        {
          questionNumber: "41",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isOrderFree: true,
      isCorrect: false,
      points: 3,
      explanation: [
        "正解④「脳震盪の兆候を示す選手を特定する」",
        "解説 concussion spottersの説明は、第６パラグラフにある。&quot;NHL officials with ~ watch for visible indications of concussion during each game.&quot;「～なNHLの職員が各試合中に脳震盪の目に見える兆候を見張る」と書かれているので、そこから判断できる。また、このパラグラフの中盤以降にも、&quot;If a spotter thinks that a player has suffered a concussion, ~.&quot;「選手が脳震盪を起こしているとspotterが判断した場合」とあるので、ここからも分かる。他の選択肢は、①「選手が試合に戻ることを許可する」、②「脳震盪を起こしている選手を検査する」、③「脳震盪を誘発した選手に罰金を科す」であり、いずれも記述はない。",
      ],
    },
    {
      questionId: "6A-4",
      qa: [
        {
          questionNumber: "42",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解②「新しいルールとガイドラインを施行した」",
        "解説 最終パラグラフに該当箇所を捜した人もいると思うが、実は第５パラグラフの冒頭に記述がある。&quot;The National Hockey League (NHL), ~, has been making stricter rules and guidelines to deal with concussions.&quot;「NHLは脳震盪に対処するためにより厳しいルールとガイドラインを導入してきている」とあるので、そこから判断できる。他の選択肢は、①「選手にもっと屈強になるよう望んでいる」、③「監督らに医療トレーニングを与えている」、④「フェイスガードの着用を選択性とした」であり、いずれも記述はない。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第６問 A"}</h1>
          <span className="text-gray-600">(配点 {12})</span>
        </div>
        <Saiten2
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>
      {/* Original Article Section */}
      <div>
        <div className="mb-6">
          <span className="font-bold">A</span>
          <span className="ml-4">
            You are working on a class project about safety in sports and found
            the following article. You are reading it and making a poster to
            present your findings to your classmates.
          </span>
        </div>

        <div className="border border-gray-300 p-6">
          <h1 className="text-center text-xl mb-6 font-bold">
            Making Ice Hockey Safer
          </h1>

          <div className="space-y-4">
            <p>
              Ice hockey is a team sport enjoyed by a wide variety of people
              around the world. The object of the sport is to move a hard rubber
              disk called a &quot;puck&quot; into the other team&apos;s net with
              a hockey stick. Two teams with six players on each team engage in
              this fast-paced sport on a hard and slippery ice rink. Players may
              reach a speed of 30 kilometers per hour sending the puck into the
              air. At this pace, both the players and the puck can be a cause of
              serious danger.
            </p>

            <p>
              The speed of the sport and the slippery surface of the ice rink
              make it easy for players to fall down or bump into each other
              resulting in a variety of injuries. In an attempt to protect
              players, equipment such as helmets, gloves, and pads for the
              shoulders, elbows, and legs, has been introduced over the years.
              Despite these efforts, ice hockey has a high rate of concussions.
            </p>

            <p>
              A concussion is an injury to the brain that affects the way it
              functions; it is caused by either direct or indirect impact to the
              head, face, neck, or elsewhere and can sometimes cause temporary
              loss of consciousness. In less serious cases, for a short time,
              players may be unable to walk straight or see clearly, or they may
              experience ringing in the ears. Some believe they just have a
              slight headache and do not realize they have injured their brains.
            </p>
          </div>
        </div>
      </div>

      {/* Summary Diagram Section */}
      <div className="border border-gray-300 p-6">
        <h1 className="text-center text-xl mb-6 font-bold italic">
          Making Ice Hockey Safer
        </h1>

        {/* What is ice hockey? section */}
        <div className="border border-gray-300 p-4 mb-6 relative">
          <h2 className="text-lg mb-3">What is ice hockey?</h2>
          <ul className="list-disc pl-6 mb-3">
            <li>
              Players score by putting a &quot;puck&quot; in the other
              team&apos;s net
            </li>
            <li>Six players on each team</li>
            <li>Sport played on ice at a high speed</li>
          </ul>
          <Image
            src="/images/Ex21-6A-1.webp"
            alt="Hockey player silhouette"
            className="absolute top-4 right-4 w-28"
            width={100}
            height={100}
          />
        </div>

        {/* Main Problem section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">
            Main Problem: A High Rate of Concussions
          </h2>

          <div className="border border-gray-300 p-4 mb-4">
            <h3 className="mb-2">Definition of a concussion</h3>
            <p>An injury to the brain that affects the way it functions</p>
          </div>
        </div>

        {/* Effects section */}
        <div className="border border-gray-300 p-4 mb-6">
          <h2 className="text-center text-lg mb-4">Effects</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Short-term</h3>
              <ul className="list-disc pl-6">
                <li>Loss of consciousness</li>
                <li>Difficulty walking straight</li>
                <li className="flex items-center">
                  <div className="border border-gray-300 px-2 mx-2">[39]</div>
                </li>
                <li>Ringing in the ears</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Long-term</h3>
              <ul className="list-disc pl-6">
                <li>Problems with concentration</li>
                <li className="flex items-center">
                  <div className="border border-gray-300 px-2 mx-2">[40]</div>
                </li>
                <li>Psychological problems</li>
                <li>Smell and taste disorders</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solutions section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">Solutions</h2>
          <div className="border border-gray-300 p-4">
            <h3 className="mb-2">National Hockey League (NHL)</h3>
            <ul className="list-disc pl-6">
              <li>Requires helmets with visors</li>
              <li>Gives severe penalties to dangerous players</li>
              <li className="flex items-center">
                Has introduced concussion spotters to
                <div className="border border-gray-300 px-2 mx-2">[41]</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Summary section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Summary</h2>
          <p>
            Ice hockey players have a high risk of suffering from concussions.
            Therefore, the NHL has{" "}
            <span className="border border-gray-300 px-2 mx-1">[42]</span>.
          </p>
        </div>
      </div>

      {/* Multiple Choice Questions Section */}
      <div className="space-y-8 mt-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>Choose the best option for</span>
            {renderSelect("39", 4, answers, setAnswers)}
            <span>on your poster.</span>
            {showResults && <Explain qa={qa} questionId="6A-1" />}
          </div>
          <div className="space-y-2 pl-8">
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                1
              </span>
              Aggressive behavior
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                2
              </span>
              Difficulty thinking
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                3
              </span>
              Personality changes
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                4
              </span>
              Unclear vision
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>Choose the best option for</span>
            {renderSelect("40", 4, answers, setAnswers)}
            <span>on your poster.</span>
            {showResults && <Explain qa={qa} questionId="6A-2" />}
          </div>
          <div className="space-y-2 pl-8">
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                1
              </span>
              Loss of eyesight
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                2
              </span>
              Memory problems
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                3
              </span>
              Sleep disorders
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                4
              </span>
              Unsteady walking
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>Choose the best option for</span>
            {renderSelect("41", 4, answers, setAnswers)}
            <span>on your poster.</span>
            {showResults && <Explain qa={qa} questionId="6A-3" />}
          </div>
          <div className="space-y-2 pl-8">
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                1
              </span>
              allow players to return to the game
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                2
              </span>
              examine players who have a concussion
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                3
              </span>
              fine players who cause concussions
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                4
              </span>
              identify players showing signs of a concussion
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span>Choose the best option for</span>
            {renderSelect("42", 4, answers, setAnswers)}
            <span>on your poster.</span>
            {showResults && <Explain qa={qa} questionId="6A-4" />}
          </div>
          <div className="space-y-2 pl-8">
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                1
              </span>
              been expecting the players to become tougher
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                2
              </span>
              been implementing new rules and guidelines
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                3
              </span>
              given medical training to coaches
            </div>
            <div>
              <span className="inline-block w-6 text-center border border-gray-300 rounded-full mr-2">
                4
              </span>
              made wearing of visors optional
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex21_6A;
