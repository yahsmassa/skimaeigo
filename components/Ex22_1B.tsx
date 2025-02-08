"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { Saiten2 } from "@/components/Saiten2";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex22_1B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "1B-1",
      qa: [
        {
          questionNumber: "3",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "②：コンテストの応募期間を問う問題。How to Enter の2つ目の項目にある日付をそのまま選ぶだけ。",
      ],
    },
    {
      questionId: "1B-2",
      qa: [
        {
          questionNumber: "4",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "②：名前のアイディアを応募する際にしなくてはならないことを選ぶ問題。How to Enter の4つ目の項目にある Each submission fee is 5$.（応募料金は1通5ドル）という表現から，②の pay the submission fee（応募料を支払う）が正解。",
      ],
    },
    {
      questionId: "1B-3",
      qa: [
        {
          questionNumber: "5",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "①：自分が応募した名前が5名のファイナリストに選ばれた場合，どうなるかを選ぶ問題。Prizes の1文目にある &quot;All five contest finalists will receive free one-day zoo passes valid until the end of July.&quot;（最終選考に残った5名全員に，7月末まで有効な動物園の1日フリーパスが贈られます）から，①の get free entry to the zoo for a day（動物園に1日無料で入場できる）が正解。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第１問 B"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
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
      {/* Contest Announcement */}
      <div className="max-w-3xl mx-auto border border-gray-800 p-6 space-y-4">
        {/* Header Section */}
        <div className="flex items-center space-x-4 border-b border-gray-800 pb-4">
          <Image
            src="/images/Ex22-1B-1.webp"
            alt="Baby Giraffe Icon"
            width={48}
            height={48}
            className="w-16 h-16"
          />
          <div className="text-center flex-grow">
            <h1 className="text-2xl font-bold mb-2">Contest!</h1>
            <h2 className="text-xl font-bold mb-2">Name a Baby Giraffe</h2>
            <p className="text-lg">
              Let&apos;s welcome our newest animal to the City Zoo!
            </p>
          </div>
        </div>

        {/* Announcement Section */}
        <div className="text-center border-b border-gray-800 pb-4">
          <p>A healthy baby giraffe was born on May 26 at the City Zoo.</p>
          <p>He&apos;s already walking and running around!</p>
          <p>He weighs 66 kg and is 180 cm tall.</p>
          <p>
            Your mission is to help his parents, Billy and Noelle, pick a name
            for their baby.
          </p>
        </div>

        {/* How to Enter Section */}
        <div className="border-b border-gray-800 pb-4">
          <h3 className="font-bold mb-2">How to Enter</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-4 h-4 bg-gray-800 transform rotate-45 mt-1 mr-2"></span>
              <span>
                Click on the link here to submit your idea for his name and
                follow the directions.
                <span className="ml-2">
                  → <span className="underline">Enter Here</span>
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-4 h-4 bg-gray-800 transform rotate-45 mt-1 mr-2"></span>
              <span>
                Names are accepted starting at 12:00 a.m. on June 1 until 11:59
                p.m. on June 7.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-4 h-4 bg-gray-800 transform rotate-45 mt-1 mr-2"></span>
              <span>
                Watch the baby giraffe on the live web camera to help you get
                ideas.
                <span className="ml-2">
                  → <span className="underline">Live Web Camera</span>
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-4 h-4 bg-gray-800 transform rotate-45 mt-1 mr-2"></span>
              <span>
                Each submission is $5. All money will go towards feeding the
                growing baby giraffe.
              </span>
            </li>
          </ul>
        </div>

        {/* Contest Schedule Section */}
        <div className="border-b border-gray-800 pb-4">
          <h3 className="font-bold mb-2">Contest Schedule</h3>
          <div className="grid grid-cols-[100px_1fr] gap-4">
            <div className="font-bold">June 8</div>
            <div>
              <p>
                The zoo staff will choose five finalists from all the entries.
              </p>
              <p>
                These names will be posted on the zoo&apos;s website by 5:00
                p.m.
              </p>
            </div>
            <div className="font-bold">June 9</div>
            <div>
              <p>How will the parents decide on the winning name?</p>
              <p>
                Click on the live stream link between 11:00 a.m. and 12:00 p.m.
                to find out!
                <span className="ml-2">
                  → <span className="underline">Live Stream</span>
                </span>
              </p>
              <p>Check our website for the winning name after 12:00 p.m.</p>
            </div>
          </div>
        </div>

        {/* Prizes Section */}
        <div>
          <h3 className="font-bold mb-2">Prizes</h3>
          <p className="mb-2">
            All five contest finalists will receive free one-day zoo passes
            valid until the end of July.
          </p>
          <p>
            The one who submitted the winning name will also get a special photo
            of the baby giraffe with his family, as well as a private Night
            Safari Tour!
          </p>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="max-w-3xl mx-auto mt-4 space-y-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1B-1"))}>
          <div className="flex items-start space-x-2">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>You can enter this contest between </span>
            {renderSelect("3", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="1B-1" />}
          </div>
          <div className="space-y-2 pl-8">
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                1
              </span>
              <p>May 26 and May 31</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                2
              </span>
              <p>June 1 and June 7</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                3
              </span>
              <p>June 8 and June 9</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                4
              </span>
              <p>June 10 and July 31</p>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1B-2"))}>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>
              When submitting your idea for the baby giraffe&apos;s name, you
              must
            </span>
            {renderSelect("4", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="1B-2" />}
          </div>
          <div className="space-y-2 pl-8">
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                1
              </span>
              <p>buy a day pass</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                2
              </span>
              <p>pay the submission fee</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                3
              </span>
              <p>spend five dollars at the City Zoo</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                4
              </span>
              <p>watch the giraffe through the website</p>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1B-3"))}>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>
              If the name you submitted is included among the five finalists,
              you will
            </span>
            {renderSelect("5", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="1B-3" />}
          </div>
          <div className="space-y-2 pl-8">
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                1
              </span>
              <p>get free entry to the zoo for a day</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                2
              </span>
              <p>have free access to the live website</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                3
              </span>
              <p>meet and feed the baby giraffe</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
                4
              </span>
              <p>take a picture with the giraffe&apos;s family</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_1B;
