"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

export default function Ex25_2() {
  const correctAnswerArray = [2, 4, 4, 4];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "2-1",
      qa: [
        {
          questionNumber: "4",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[4] 第2段落第1文 &quot;All the speakers agreed on three points.",
        "（すべてのスピーカーが3つの点に同意しました）という内容と，同段落第4文-第6文 &quot;Second, emergency services would be improved. Flying ambulances would be faster in large cities with heavy traffic. Also, they would be better for servicing small towns far from hospitals.",
        "（次に，緊急サービスが改善されるという点です。空飛ぶ救急車は，交通渋滞の多い大都市でより迅速に対応できるようになります。また，病院から離れた小さな町にサービスを提供するのにも役立つでしょう）という内容から，②「空飛ぶ車は緊急対応を改善するだろう」が正解。",
      ],
    },
    {
      questionId: "2-2",
      qa: [
        {
          questionNumber: "5",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[5] 第2段落最終文 &quot;Finally, from a safety point of view, they said that flying technology would need to be well tested and controlled to avoid accidents in the air.",
        "（最後に，安全性の観点から，空飛ぶ技術は空中での事故を防ぐために十分にテストされ，制御される必要があると述べられました）という内容から，④「適切な評価と規制を必要とする」が正解。選びにくい選択肢だが，①～③はいずれも第2段落の内容に反しているため，消去法も使って考える必要がある。",
      ],
    },
    {
      questionId: "2-3",
      qa: [
        {
          questionNumber: "6",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[6] 第3段落第7文 &quot;The third speaker answered, &quot;No, because the operating costs of flying taxis are too high.",
        "（3人目のスピーカーは「いいえ，空飛ぶタクシーの運営コストが高すぎるからです」と答えました）という内容から，④「空飛ぶタクシーは運営コストが高すぎる」が正解。①「空飛ぶタクシーの拠点が地方に設立されるであろう」とはどこにも書かれていない。②「空飛ぶタクシー技術はすでにテストされている」は第3段落第3文 ",
        "A few of them are even testing flying taxi services in the middle of their major cities.",
        "（そのうちのいくつかの国では，大都市の中心部で空飛ぶタクシーサービスをテストしているところもあります）に書かれているが，これは意見（opinion）ではなく事実（fact）である。③「空飛ぶタクシーはすでに広く普及している」は第3段落の内容に反する（また，既に広く普及しているかどうかは意見ではなく事実の問題でもある）。",
      ],
    },
    {
      questionId: "2-4",
      qa: [
        {
          questionNumber: "7",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[7] 第3段落第3文 &quot;A few of them are even testing flying taxi services in the middle of their major cities.",
        "（そのうちのいくつかの国では，大都市の中心部で空飛ぶタクシーサービスをテストしているところもあります）から，④「空飛ぶタクシーサービスの都市での試験運用」が正解。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第２問"}</h1>
          <span className="text-gray-600">(配点 {12})</span>
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
      <div className="mb-8">
        <p className="text-gray-600 mb-4">
          Your teacher asks you to write a report about the future of
          transportation. To prepare, you read a blog written by a British
          author about the topic.
        </p>
      </div>

      <article className="relative">
        <h1 className="text-2xl font-bold text-center italic mb-6">
          Flying Vehicles
        </h1>

        {/* Header information */}
        <div className="mb-8">
          <p className="mb-1">10 December 2024</p>
          <p className="mb-1 italic">Jonah Markowski</p>
          <p className="mb-4">Bristol, UK</p>

          {/* Flying vehicle illustration will be added as img */}
          <div className="absolute top-0 right-0 w-48">
            <Image
              src="/images/Ex25-2-1.jpg"
              alt="Flying vehicle illustration"
              width={192}
              height={192}
              className="w-full"
            />
          </div>
        </div>

        {/* Article content */}
        <div className="space-y-4">
          <p>
            Yesterday, I attended a forum in northern Japan called{" "}
            <span className="italic">Flying Vehicles: Today and Tomorrow</span>.
            Modern transportation problems and solutions were discussed by three
            guest speakers.
          </p>

          <p>
            All the speakers agreed on three points. First, flying vehicles
            should be electrically powered in general. Air pollution can be
            reduced by increasing the use of zero-emission technologies. Second,
            emergency services would be improved. Flying ambulances would be
            faster in large cities with heavy traffic. Also, they would be
            better for servicing small towns far from hospitals. Finally, from a
            safety point of view, they said that flying technology would need to
            be well tested and controlled to avoid accidents in the air.
          </p>

          <p>
            At the end of the forum, the speakers discussed flying taxis.
            According to one of the speakers, recent reports show that some
            countries are already developing this technology. A few of them are
            even testing flying taxi services in the middle of their major
            cities. Then, someone in the audience asked if flying taxis would
            soon be available around the world. Two of the speakers answered,
            &quot;Yes,&quot; but they disagreed about the timing. One of them
            said, &quot;In 5 years,&quot; and the other said, &quot;In 15
            years.&quot; The third speaker answered, &quot;No, because the
            operating costs of flying taxis are too high.&quot; I look forward
            to seeing which guest speaker&apos;s prediction turns out to be
            correct.
          </p>

          <p className="mb-8">
            Next week&apos;s blog is about self-driving cars. It&apos;s going to
            be a fantastic post!
          </p>
        </div>
      </article>

      {/* Questions Section */}
      <div className="mt-8 space-y-6">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span className="flex gap-1">
              Which of the following did all the guest speakers agree on?{" "}
            </span>
            {renderSelect("4", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="2-1" />}
          </div>
          <div className="pl-8 space-y-2">
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                1
              </span>
              <p>Flying vehicles are widely accepted as being safe.</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                2
              </span>
              <p>Flying vehicles will improve responses to emergencies.</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                3
              </span>
              <p>Modern transportation problems are difficult to solve.</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                4
              </span>
              <p>
                Zero-emission technologies cannot be applied to flying vehicles.
              </p>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span className="flex gap-1">Flying vehicles will most likely</span>
            {renderSelect("5", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="2-2" />}
          </div>
          <div className="pl-8 space-y-2">
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                1
              </span>
              <p>be used in small towns rather than large cities</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                2
              </span>
              <p>increase the number of traffic jams near hospitals</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                3
              </span>
              <p>prevent solutions to environmental problems</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                4
              </span>
              <p>require proper assessment and regulation</p>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span className="flex gap-1">
              One guest speaker&apos;s{" "}
              <span className="border-b border-black">opinion</span> is that{" "}
            </span>
            {renderSelect("6", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="2-3" />}
          </div>
          <div className="pl-8 space-y-2">
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                1
              </span>
              <p>flying taxi centres will be based in rural areas</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                2
              </span>
              <p>flying taxi technology has already been tested</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                3
              </span>
              <p>flying taxis are already widespread</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                4
              </span>
              <p>flying taxis are too expensive to run</p>
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span className="flex gap-1">
              Which of the following is mentioned in the blog?{" "}
            </span>
            {renderSelect("7", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="2-4" />}
          </div>
          <div className="pl-8 space-y-2">
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                1
              </span>
              <p>Costs of flying ambulance services</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                2
              </span>
              <p>Flying transport using solar-power</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                3
              </span>
              <p>Parking areas for flying taxis</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                4
              </span>
              <p>Urban trials of flying taxi services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
