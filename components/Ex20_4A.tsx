"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex20_4A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "20_4A")?.qanda || [];
  //   {
  //     questionId: "4A-1",
  //     qa: [
  //       {
  //         questionNumber: "33",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "4",
  //     answerString: "",
  //     isCorrect: false,
  //     points: 5,
  //     explanation: [
  //       "正解は④ 230",
  //       "境界は、高い方のスコアをカウントするのがポイント",
  //     ],
  //   },
  //   {
  //     questionId: "4A-2",
  //     qa: [
  //       {
  //         questionNumber: "34",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "4",
  //     answerString: "",
  //     isCorrect: false,
  //     points: 5,
  //     explanation: [
  //       "正解は ④ Throwing three or more times in a row from the same location was against the rules for the Random group. ランダム群では、同じ地点から連続して3回以上投擲することはルール違反だった。",
  //       "① Eighty-one throws were made from the same initial throwing location in the Blocked group. ブロッキング群では、同じ開始投擲地点から81回の投擲が行われた。",
  //       "② The distance from the target remained unchanged during the entire experiment for the Combined group. コンバインド群では、実験全体を通してターゲットからの距離は変化しなかった。",
  //       "③ The set of throws from the same location involved various ways of throwing for the Combined group. コンバインド群では、同じ地点からの投擲は、様々な投擲方法を含んでいた。",
  //     ],
  //   },
  //   {
  //     questionId: "4A-3",
  //     qa: [
  //       {
  //         questionNumber: "35",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "2",
  //     answerString: "",
  //     isCorrect: false,
  //     points: 5,
  //     explanation: [
  //       "正解は② The Blocked group showed the worst score among the three groups on the performance test. ブロッキング群は、3つのグループの中で最も悪いスコアを示した。",
  //       "① ブロックされたグループは、練習中とパフォーマンステストの両方で最高のスコアを記録した。",
  //       "③ コンバインドグループは、ランダムグループよりも低い精度を示した。",
  //       "④ ランダムグループは、練習中とパフォーマンステストの両方で最低の精度だった",
  //     ],
  //   },
  //   {
  //     questionId: "4A-4",
  //     qa: [
  //       {
  //         questionNumber: "36",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "4",
  //     answerString: "",
  //     isCorrect: false,
  //     points: 5,
  //     explanation: [
  //       "正解は④ Various kinds of throwing motions 様々な投げ方",
  //       "① Mental imagery training of underhand throws アンダーハンド投げのメンタルイメージトレーニング",
  //       "② Observation of younger students' movements 若い学生の動きの観察",
  //       "③ Overarm throws with eyes closed 目を閉じたアウターハンド投げ",
  //     ],
  //   },
  // ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第４問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {20})</span>
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
      <div className="mb-6">
        <span className="ml-4 font-sans">次の問い(A)に答えよ。(配点 20)</span>
      </div>

      <div className="mb-6">
        <div className="mb-8">
          <p className="mb-4 gap-1 leading-relaxed">
            A
            次の文章はある説明文の一部である。この文章を読み、下の問い(問1～4)の
            <div className="font-sans inline-block px-4 border border-black">33</div>～
            <div className="font-sans inline-block px-4 border border-black">36</div>
            に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
          </p>
        </div>

        <div className="space-y-4 leading-relaxed">
          <p>
            Sports coaches and players are interested in how training programs
            can be designed to enhance performance. The order of practice
            potentially facilitates learning outcomes without increasing the
            amount of practice. A study was conducted to examine how different
            training schedules influence throwing performance.
            {Kaisetsu(showResults, "20-4A-1")}
          </p>

          <p>
            In this study, elementary school students threw a tennis ball at a
            target laid on the floor. They threw the ball from three throwing
            locations at distances of 3, 4, and 5 meters from the target. The
            target consisted of the center (20 cm wide) and nine larger outer
            rings. They served as zones to indicate the accuracy of the throws.
            If the ball landed in the center of the target, 100 points were
            given. If the ball landed in one of the outer zones, 90, 80, 70, 60,
            50, 40, 30, 20, or 10 points were recorded accordingly. If the ball
            landed outside of the target, no points were given. If the ball
            landed on a line separating two zones, the higher score was awarded.
            {Kaisetsu(showResults, "20-4A-2")}
          </p>

          <p>
            The students were assigned to one of three practice groups: Blocked,
            Random, or Combined. All students were instructed to use an overarm
            throwing motion to try to hit the center of the target with the
            ball. On the first day of this study, they each completed a total of
            81 practice throws. Students in the Blocked group threw 27 times
            from one of the three throwing locations, followed by 27 throws from
            the next location, and ended practice with 27 throws from the final
            location. In the Random group, each student threw the ball 81 times
            in the order of throwing locations that the researchers had
            specified. No more than two consecutive throws were allowed from the
            same location for this group. In the Combined group, the students
            started with a blocked schedule and gradually shifted to a random
            schedule. On the next day, all students completed a performance test
            of 12 throws.
            {Kaisetsu(showResults, "20-4A-3")}
          </p>
          <p>
            Results showed that during the practice of 81 throws, the Blocked
            group performed worse than the other two groups. Performance test
            scores were also analyzed. The Combined group showed the best
            performance among the three groups, followed by the Random group and
            then by the Blocked group. It is still uncertain if similar results
            can be obtained for adults in training programs for other throwing
            actions, such as those seen in bowling, baseball, and basketball.
            This will be addressed in the following section.
            {Kaisetsu(showResults, "20-4A-4")}
          </p>

          <p className="mt-4 text-sm mb-8">
            (Esmaeel Saemi 他(2012){" "}
            <em>
              Practicing Along the Contextual Interference Continuum: A
              Comparison of Three Practice Schedules in an Elementary Physical
              Education Setting
            </em>{" "}
            の一部を参考に作成)
          </p>
        </div>
      </div>

      {/* Question Section */}
      {/* Question 1 */}
      <div className={cn("mb-8", showResults && qaFormat(qa, "4A-1"))}>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
          <span className="font-sans">
            What is the total score achieved by the five throws in this figure?
          </span>
          {renderSelect("33", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="4A-1" />}
          {Kaisetsu(showResults, "20-4A-5")}
        </div>

        <div className="flex">
          {/* Left side - Multiple choice options */}
          <div className="flex flex-col space-y-2 mr-12">
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center mr-4">
                ①
              </span>
              <span>200</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center mr-4">
                ②
              </span>
              <span>210</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center mr-4">
                ③
              </span>
              <span>220</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center mr-4">
                ④
              </span>
              <span>230</span>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <Image
            src="/images/Ex20-4A-1.webp"
            alt="Target illustration"
            className="w-96 h-auto object-contain"
            width={800}
            height={400}
          />
        </div>
      </div>

      {/* Question 2 */}
      <div className={cn("mb-8", showResults && qaFormat(qa, "4A-2"))}>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
          <span>
            Which of the following statements is true about the experiment?
          </span>
          {renderSelect("34", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="4A-2" />}
          {Kaisetsu(showResults, "20-4A-6")}
        </div>

        <div className="space-y-6">
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ①
            </span>
            <span>
              Eighty-one throws were made from the same initial throwing
              location in the Blocked group.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ②
            </span>
            <span>
              The distance from the target remained unchanged during the entire
              experiment for the Combined group.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ③
            </span>
            <span>
              The set of throws from the same location involved various ways of
              throwing for the Combined group.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ④
            </span>
            <span>
              Throwing three or more times in a row from the same location was
              against the rules for the Random group.
            </span>
          </div>
        </div>
      </div>

      {/* Question 3 */}
      <div className={cn("mb-8", showResults && qaFormat(qa, "4A-3"))}>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
          <span>
            Which of the following statements is true about the results?
          </span>
          {renderSelect("35", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="4A-3" />}
          {Kaisetsu(showResults, "20-4A-7")}
        </div>

        <div className="space-y-6">
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ①
            </span>
            <span>
              The Blocked group had the best score both during practice and on
              the performance test.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ②
            </span>
            <span>
              The Blocked group showed the worst score among the three groups on
              the performance test.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ③
            </span>
            <span>
              The Combined group showed lower accuracy than the Random group on
              the performance test.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ④
            </span>
            <span>
              The Random group had the lowest accuracy both during practice and
              on the performance test.
            </span>
          </div>
        </div>
      </div>

      {/* Question 4 */}
      <div className={cn("mb-8", showResults && qaFormat(qa, "4A-4"))}>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
          <span>What will most likely be discussed next in this report?</span>
          {renderSelect("36", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="4A-4" />}
          {Kaisetsu(showResults, "20-4A-8")}
        </div>

        <div className="space-y-6">
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ①
            </span>
            <span>Mental imagery training of underhand throws</span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ②
            </span>
            <span>Observation of younger students' movements</span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ③
            </span>
            <span>Overarm throws with eyes closed</span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ④
            </span>
            <span>Various kinds of throwing motions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex20_4A;
