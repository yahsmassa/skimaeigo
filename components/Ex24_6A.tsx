"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex24_6A = () => {
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
        {
          questionNumber: "40",
          answer: 0,
        },
      ],
      rightAnswerString: "62",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[39] 正解は ⑥「時間の種類」第1段落で，哲学者のアンリ・ベルクソンによる時間の区分（時計時間と心理的時間）が述べられている",
        "[40] 正解は ②「私たちの感情の影響」が正解。第4段落で，感情面での状態が時間意識に与える影響について述べられている",
      ],
    },
    {
      questionId: "6A-2",
      qa: [
        {
          questionNumber: "41",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は ①「どの年齢でも大きなライフスタイルの変化がおそらく時間をゆっくりと進ませる」",
        "② 年齢に関わらず、生活の大幅な変化は時間の流れを速く感じる可能性が高いでしょう。",
        "③ 大人の場合、生活の小さな変化は時間の流れを遅く感じる可能性が高いでしょう。",
        "④ 子供の場合、生活の小さな変化は時間の流れを速く感じる可能性が高いでしょう。",
      ],
    },
    {
      questionId: "6A-3",
      qa: [
        {
          questionNumber: "42",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は ③「今日，何時間働いたかを振り返る」",
        "① anticipating a message from a classmate<br/><br/>クラスメイトからのメッセージを待っている<br/><br/><br/>② memorizing your mother's cellphone number<br/><br/>お母さんの携帯電話番号を暗記する<br/><br/><br/>④ remembering that you have a meeting tomorrow<br/><br/>明日会議があることを覚えている",
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
        "正解は ①「これまでどのくらいの時間ジョギングし続けてきたかを推測する」 you've been jogging という現在完了進行形が用いられており、「何かをしながら積極的に時間を記録しているとき」に相当",
        "② making a schedule for the basketball team summer camp<br/><br/>バスケットボールチームのサマーキャンプのスケジュールを作成すること<br/><br/><br/>③running into your tennis coach at the railway station<br/><br/>駅でテニスコーチにばったり会うこと<br/><br/><br/>④thinking about your last family vacation to a hot spring<br/><br/>最後の家族旅行で温泉に行ったことを考えていること<br/><br/><br/>熟語・慣用句はありませんでした。<br/>",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">第６問 A</h1>
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
      </div>
      <div className="mb-6">
        <h1 className="text-lg font-semibold">
          A. Your English teacher has assigned this article to you. You need to
          prepare notes to give a short talk.
        </h1>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-center">Perceptions of Time</h2>

        <div className="space-y-4">
          <p className="leading-relaxed indent-7">
            When you hear the word &quot;time,&quot; it is probably hours,
            minutes, and seconds that immediately come to mind. In the late 19th
            century, however, philosopher Henri Bergson described how people
            usually do not experience time as it is measured by clocks (clock
            time). Humans do not have a known biological mechanism to measure
            clock time, so they use mental processes instead. This is called{" "}
            <span className="font-semibold">psychological time</span>, which
            everyone perceives differently.
            {Kaisetsu(showResults, "24-6A-1")}
          </p>

          <p className="leading-relaxed indent-7">
            If you were asked how long it had taken to finish your homework, you
            probably would not know exactly. You would think back and make an
            estimate. In a 1975 experiment, participants were shown either
            simple or complex shapes for a fixed amount of time and asked to
            memorize them. Afterwards, they were asked how long they had looked
            at the shapes. To answer, they used a mental process called{" "}
            <span className="font-semibold">retrospective timing</span>, which
            is estimating time based on the information retrieved from memory.
            Participants who were shown the complex shapes felt the time was
            longer, while the people who saw the simple shapes experienced the
            opposite.
            {Kaisetsu(showResults, "24-6A-2")}
          </p>

          <p className="leading-relaxed indent-7">
            Another process to measure psychological time is called{" "}
            <span className="font-semibold">prospective timing</span>. It is
            used when you are actively keeping track of time while doing
            something. Instead of using the amount of information recalled, the
            level of attention given to time while doing the activity is used.
            In several studies, the participants performed tasks while
            estimating the time needed to complete them. Time seemed shorter for
            the people doing more challenging mental activities which required
            them to place more focus on the task than on time.
            {Kaisetsu(showResults, "24-6A-3")}
            Time felt longer for the participants who did simpler tasks and the
            longest for those who were waiting or doing nothing.
            {Kaisetsu(showResults, "24-6A-4")}
          </p>

          <p className="leading-relaxed indent-7">
            Your emotional state can influence your awareness of time, too. For
            example, you can be enjoying a concert so much that you forget about
            time. Afterwards, you are shocked that hours have passed by in what
            seemed to be the blink of an eye. To explain this, we often say,
            &quot;Time flies when you&apos;re having fun.&quot; The opposite
            occurs when you are bored. Instead of being focused on an activity,
            you notice the time. It seems to go very slowly as you cannot wait
            for your boredom to end. Fear also affects our perception of time.
            In a 2006 study, more than 60 people experienced skydiving for the
            first time. Participants with high levels of unpleasant emotions
            perceived the time spent skydiving to be much longer than it was in
            reality.
            {Kaisetsu(showResults, "24-6A-5")}
          </p>

          <p className="leading-relaxed indent-7">
            Psychological time also seems to move differently during life
            stages. Children constantly encounter new information and have new
            experiences, which makes each day memorable and seem longer when
            recalled. Also, time creeps by for them as they anticipate upcoming
            events such as birthdays and trips. For most adults, unknown
            information is rarely encountered and new experiences become less
            frequent, so less mental focus is required and each day becomes less
            memorable. However, this is not always the case. Daily routines are
            shaken up when drastic changes occur, such as changing jobs or
            relocating to a new city. In such cases, the passage of time for
            those people is similar to that for children. But generally
            speaking, time seems to accelerate as we mature.
            {Kaisetsu(showResults, "24-6A-6")}
          </p>

          <p className="leading-relaxed indent-7">
            Knowledge of psychological time can be helpful in our daily lives,
            as it may help us deal with boredom. Because time passes slowly when
            we are not mentally focused and thinking about time, changing to a
            more engaging activity, such as reading a book, will help ease our
            boredom and speed up the time. The next occasion that you hear
            &quot;Time flies when you&apos;re having fun,&quot;you will be
            reminded of this.
            {Kaisetsu(showResults, "24-6A-7")}
          </p>
        </div>
      </div>
      {/* Notes Section */}
      <div>
        <p className="mb-4">Your notes:</p>
        <div className="border border-gray-800 p-6">
          <h3 className="text-center italic mb-6">Perceptions of Time</h3>

          <div className="space-y-6">
            <div>
              <p className="italic">Outline by paragraph</p>
              <ol className="ml-4 space-y-1">
                <li className="flex items-start">
                  <span>1.</span>
                  <div className="ml-1 border border-gray-800 px-2 w-12 text-center font-sans">
                    39
                  </div>
                </li>
                <li className="flex items-start">
                  <span>2.</span>
                  <span className="ml-1">Retrospective timing</span>
                </li>
                <li className="flex items-start">
                  <span>3.</span>
                  <span className="ml-1">Prospective timing</span>
                </li>
                <li className="flex items-start">
                  <span>4.</span>
                  <div className="ml-1 border border-gray-800 px-2 w-12 text-center font-sans">
                    40
                  </div>
                </li>
                <li className="flex items-start ml-4">
                  <span>→</span>
                  <span className="ml-1">Skydiving</span>
                </li>
                <li className="flex items-start">
                  <span>5.</span>
                  <span className="ml-1">Effects of age</span>
                </li>
                <li className="flex items-start ml-4">
                  <span>→</span>
                  <span className="ml-1">
                    Time speeds up as we mature, but a
                  </span>
                  <div className="ml-1 border border-gray-800 px-2 w-12 text-center font-sans">
                    41
                  </div>
                </li>
                <li className="flex items-start">
                  <span>6.</span>
                  <span className="ml-1">Practical tips</span>
                </li>
              </ol>
            </div>

            <div>
              <p className="italic">
                My original examples to help the audience
              </p>
              <div className="ml-4 space-y-2">
                <div>
                  <p className="flex items-start">
                    <span>A.</span>
                    <span className="ml-1">Retrospective timing</span>
                  </p>
                  <p className="flex items-start ml-8">
                    <span>Example:</span>
                    <div className="ml-1 border border-gray-800 px-2 w-12 text-center font-sans">
                      42
                    </div>
                  </p>
                </div>
                <div>
                  <p className="flex items-start">
                    <span>B.</span>
                    <span className="ml-1">Prospective timing</span>
                  </p>
                  <p className="flex items-start ml-8">
                    <span>Example:</span>
                    <div className="ml-1 border border-gray-800 px-2 w-12 text-center font-sans">
                      43
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 回答 */}
      <div className="space-y-8 mt-8">
        <div className={cn(showResults && qaFormat(qa, "6A-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="flex-none mr-2 font-sans">問 1</span>{" "}
            <span>Choose the best options for</span>
            {renderSelect("39", 6, answers, setAnswers)} and
            {renderSelect("40", 6, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId={"6A-1"} />}
            {Kaisetsu(showResults, "24-6A-8")}
          </div>
          <ol className="list-none space-y-2">
            {[
              "Biological mechanisms",
              "Effects of our feelings",
              "Kinds of memory",
              "Life stages",
              "Ongoing research",
              "Types of time",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex  items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </ol>
        </div>

        <div className={cn(showResults && qaFormat(qa, "6A-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="flex-none mr-2 font-sans">問 2</span>
            <span>Choose the best option for</span>
            {renderSelect("41", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId={"6A-2"} />}
            {Kaisetsu(showResults, "24-6A-9")}
          </div>
          {[
            "major lifestyle change at any age will likely make time slow down",
            "major lifestyle change regardless of age will likely make time speed up",
            "minor lifestyle change for adults will likely make time slow down",
            "minor lifestyle change for children will likely make time speed up",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex t  items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className={cn(showResults && qaFormat(qa, "6A-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="flex-none mr-2 font-sans">問 3</span>
            <span>Choose the best option for</span>
            {renderSelect("42", 6, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId={"6A-3"} />}
            {Kaisetsu(showResults, "24-6A-10")}
          </div>
          {[
            "anticipating a message from a classmate",
            "memorizing your mother&apos;s cellphone number",
            "reflecting on how many hours you worked today",
            "remembering that you have a meeting tomorrow",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className={cn(showResults && qaFormat(qa, "6A-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="flex-none mr-2 font-sans">問 4</span>
            <span>Choose the best option for</span>
            {renderSelect("43", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId={"6A-4"} />}
            {Kaisetsu(showResults, "24-6A-11")}
          </div>
          {[
            "guessing how long you&apos;ve been jogging so far",
            "making a schedule for the basketball team summer camp",
            "running into your tennis coach at the railway station",
            "thinking about your last family vacation to a hot spring",
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
  );
};

export default Ex24_6A;
