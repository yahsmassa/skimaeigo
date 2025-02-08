"use client";

import React, { useState } from "react";
import { Saiten2 } from "@/components/Saiten2";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex22_6A = () => {
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
        "③：diurnal という単語の定義を聞く問題。この単語を知っているかどうかではなく，前後からこの単語の意味を推測できるかどうかが問われていることに注意。第1パラグラフ最終文の &quot;Creatures active during the day are &quot;diurnal&quot; and those emerging at night are &quot;nocturnal.&quot; &quot;（日中に活発な生き物が diurnal で，夜に現れる生き物が nocturnal である） から，「日中に活発であること」となる③が正解。",
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
        "③：本文の The Main Points の一つを埋める問題。第6パラグラフ第1文・第2文の &quot;Can people change? While the results are not all in, studies of young adults seem to say no, we are hard-wired.&quot;（人は変われるのでしょうか？ すべての結果が出ているわけではありませんが，若年層を対象とした研究ではどうやら「いいえ，私たちはしっかり固定されていて変わりにくいのです」と言われているようです）から，③ it might be hard for us to change what time of day we perform best（私たちが一日の中の何時に最もうまく機能するかを変えるのは難しいかもしれない）が正解。",
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
      rightAnswerString: "1",
      answerString: "",
      isOrderFree: true,
      isCorrect: false,
      points: 3,
      explanation: [
        "①：中国の時間の区分だけでなく，ユダヤ教やキリスト教について言及されているのは何のためかを答える問題。",
        "第4パラグラフ第1文 &quot;Does everyone follow the system of beginning days in the morning?&quot;（全ての人が，一日を朝に始めるという制度に従っているのか）という問いかけがなされ，第2文でユダヤ教徒，第3文でキリスト教徒，第4文から第6文で中国の時間区分について述べてたうえで，第7文で &quot;In other words, ancient customs support how owls view time.&quot;’（言い換えれば，古代の慣習は，フクロウ［夜型の人］の時間の見方を支持しているのだ）とまとめている。よって，① explain that certain societies have long believed that a day begins at night（ある社会は，一日が夜に始まると長い間信じてきたことを説明する）が正解。",
      ],
    },
    {
      questionId: "6A-4",
      qa: [
        {
          questionNumber: "42",
          answer: 0,
        },
        {
          questionNumber: "43",
          answer: 0,
        },
      ],
      rightAnswerString: "63",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[42] ⑥・[43] ③：Interesting Details の空所[42]と[43]を埋める問題。[42]では体内時計をセットする要素について，[43]では[42]が知能と何の違いを説明するかについて問われている。",
        "[42]については，第3パラグラフ第2文で，&quot;One theory suggests preference for day or night has to do with time of birth.&quot;（一つの理論が示すところによると，昼を好むか夜を好むかは生まれた時間に関係しているという）と述べているので，⑥ time of birth が正解。",
        "[43]については，第5パラグラフ前半で知能の話をして，後半（7文目以降）で以下のように述べている。",
        "Not only can schoolwork be a challenge, but they may miss daytime career opportunities and are more likely to enjoy the bad habits of &quot;nightlife,&quot; playing at night while larks sleep. Nightlife tends to be expensive. A University of Barcelona study suggests larks are precise, seek perfection, and feel little stress. Owls seek new adventures and exciting leisure activities, yet they often have trouble relaxing. （［フクロウ（＝夜型人間）にとっては］学業が大変になりうるだけでなく，彼らは昼間の就職の機会を逃し，ヒバリ［＝朝型人間］が寝ている間に「ナイトライフ」，つまり夜遊びをする悪習を楽しむ可能性が高くなるのです。夜遊びはお金がかかる傾向があります。バルセロナ大学の研究によると，ヒバリは几帳面で，完璧さを求め，ストレスをほとんど感じません。フクロウは新しい冒険や刺激的なレジャー活動を求めますが，リラックスすることが苦手な場合が多いのです。）",
        "よって，③ behavior（行動）が正解となる。なお，[43]の主語が[42]だとすると，time of birth may be the explanation for differences in intelligence and behavior となるため，やや違和感を覚えるが，「生まれた時間によって，朝型／夜型が決まるとすれば，それがその後の知能や行動にも影響する」と解釈せよ，ということだと考えられる。",
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
      {/* Question Header */}
      <div className="mb-8">
        <span className="font-bold">A</span>
        <span className="ml-4">
          Your study group is learning about &quot;how time of day affects
          people.&quot; You have found an article you want to share. Complete
          the summary notes for your next meeting.
        </span>
      </div>

      {/* Article Content */}
      <div className="border border-gray-300 p-8">
        <h1 className="text-xl font-bold text-center mb-8">
          When Does the Day Begin for You?
        </h1>

        <div className="space-y-6">
          <p className="text-justify">
            When asked &quot;Are you a morning person?&quot; some reply
            &quot;No, I&apos;m a night owl.&quot; Such people can concentrate
            and create at night. At the other end of the clock, a well-known
            proverb claims: &quot;The early bird catches the worm,&quot; which
            means that waking early is the way to get food, win prizes, and
            reach goals. The lark is a morning singer, so early birds, the
            opposite of <em>owls</em>, are <em>larks</em>. Creatures active
            during the day are &quot;diurnal&quot; and those emerging at night
            are &quot;nocturnal.&quot;
          </p>

          <p className="text-justify">
            Yet another proverb states: &quot;Early to bed, early to rise makes
            a man healthy, wealthy, and wise.&quot; <em>Larks</em> may jump out
            of bed and welcome the morning with a big breakfast, while{" "}
            <em>owls</em> hit the snooze button, getting ready at the last
            minute, usually without breakfast. They may have fewer meals, but
            they eat late in the day. Not exercising after meals can cause
            weight gain. Perhaps <em>larks</em> are healthier. <em>Owls</em>{" "}
            must work or learn on the <em>lark</em> schedule. Most schooling
            occurs before 4:00 p.m., so young <em>larks</em> may perform certain
            tasks better. Business deals made early in the day may make some{" "}
            <em>larks</em> wealthier.
          </p>

          <p className="text-justify">
            What makes one person a <em>lark</em> and another an <em>owl</em>?
            One theory suggests preference for day or night has to do with time
            of birth. In 2010, Cleveland State University researchers found
            evidence that not only does a person&apos;s internal clock start at
            the moment of birth, but that those born at night might have
            lifelong challenges performing during daytime hours. Usually, their
            world experience begins with darkness. Since traditional study time
            and office work happen in daylight, we assume that day begins in the
            morning. People asleep are not first in line, and might miss
            chances.
          </p>

          <p className="text-justify">
            Does everyone follow the system of beginning days in the morning?
            The Jewish people, an approximately 6,000-year-old religious group,
            believe a day is measured from sundown until the following
            sundown—from eve to eve. Christians continue this tradition with
            Christmas Eve. The Chinese use their system of 12 animals not only
            to mark years, but to separate each two-hour period of the day. The
            hour of the rat, the first period, is from 11:00 p.m. to 1:00 a.m.
            Chinese culture also begins the day at night. In other words,
            ancient customs support how <em>owls</em> view time.
          </p>

          <p className="text-justify">
            Research indicates <em>owls</em> are smarter and more creative. So,
            perhaps <em>larks</em> are not always wiser! That is to say,{" "}
            <em>larks</em> win &quot;healthy&quot; and sometimes
            &quot;wealthy,&quot; but they may lose &quot;wise.&quot; In an early
            report, Richard D. Roberts and Patrick C. Kyllonen state that{" "}
            <em>owls</em> tend to be more intelligent. A later, comprehensive
            study by Franzis Preckel, for which Roberts was one of the
            co-authors, came to the same conclusion. It is not all good news for{" "}
            <em>owls</em>, though. Not only can schoolwork be a challenge, but
            they may miss daytime career opportunities and are more likely to
            enjoy the bad habits of &quot;nightlife,&quot; playing at night
            while <em>larks</em> sleep. Nightlife tends to be expensive. A
            University of Barcelona study suggests <em>larks</em> are precise,
            seek perfection, and feel little stress. <em>Owls</em> seek new
            adventures and exciting leisure activities, yet they often have
            trouble relaxing.
          </p>

          <p className="text-justify">
            Can people change? While the results are not all in, studies of
            young adults seem to say no, we are hard-wired. So, as young people
            grow and acquire more freedom, they end up returning to their{" "}
            <em>lark</em> or <em>owl</em> nature. However, concerns arise that
            this categorization may not fit everyone. In addition to time of
            birth possibly being an indication, a report published in{" "}
            <em>Nature Communications</em> suggests that DNA may also affect our
            habits concerning time. Other works focus on changes occurring in
            some people due to aging or illness. New research in this area
            appears all the time. A study of university students in Russia
            suggests that there are six types, so <em>owls</em> and{" "}
            <em>larks</em> may not be the only birds around!
          </p>
        </div>
      </div>
      <h2 className="text-lg mt-7 mb-4">Your summary notes:</h2>

      <div className="border border-gray-800 p-4">
        <div className="flex">
          {/* Checkbox column */}
          <div className="flex flex-col space-y-2 mr-4">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 border border-gray-400 rounded-full"
              />
            ))}
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-xl mb-6 text-center">
              When Does the Day Begin for You?
            </h1>

            <section className="mb-6">
              <h2 className="font-bold mb-2">Vocabulary</h2>
              <div className="ml-4">
                <p>
                  Definition of{" "}
                  <span className="italic underline">diurnal</span>:{" "}
                  <span className="inline-block border border-gray-800 px-2">
                    39
                  </span>
                </p>
                <p>↔ opposite: nocturnal</p>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="font-bold mb-2">The Main Points</h2>
              <ul className="ml-4 space-y-2">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    Not all of us fit easily into the common daytime schedule,
                    but we are forced to follow it, especially when we are
                    children.
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    Some studies indicate that the most active time for each of
                    us is part of our nature.
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    Basically,{" "}
                    <span className="inline-block border border-gray-800 px-2">
                      40
                    </span>
                    .
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>Perspectives keep changing with new research.</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold mb-2">Interesting Details</h2>
              <ul className="ml-4 space-y-2">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    The Jewish and Christian religions, as well as Chinese time
                    division, are referred to in the article in order to{" "}
                    <span className="inline-block border border-gray-800 px-2">
                      41
                    </span>
                    .
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    Some studies show that{" "}
                    <span className="inline-block border border-gray-800 px-2">
                      42
                    </span>{" "}
                    may set a person&apos;s internal clock and may be the
                    explanation for differences in intelligence and{" "}
                    <span className="inline-block border border-gray-800 px-2">
                      43
                    </span>
                    .
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "6A-1"))}>
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span className="whitespace-nowrap mr-2">問 1</span>
          <span>Choose the best option for</span>{" "}
          {renderSelect("39", 4, answers, setAnswers)}.
          {showResults && <Explain qa={qa} questionId="6A-1" />}
        </div>
        <div className="ml-4 space-y-2">
          <p>① achieves goals quickly</p>
          <p>② likes keeping pet birds</p>
          <p>③ lively in the daytime</p>
          <p>④ skillful in finding food</p>
        </div>
      </div>
      <div className="mt-8 space-y-8">
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>Choose the best option for</span>{" "}
            {renderSelect("40", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="6A-2" />}
          </div>
          <div className="ml-4 space-y-3">
            <p>
              ① a more flexible time and performance schedule will be developed
              in the future
            </p>
            <p>
              ② enjoying social activities in the morning becomes more important
              as we age
            </p>
            <p>
              ③ it might be hard for us to change what time of day we perform
              best
            </p>
            <p>
              ④ living on the <span className="italic">owl</span> schedule will
              eventually lead to social and financial benefits
            </p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>Choose the best option for</span>{" "}
            {renderSelect("41", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="6A-3" />}
          </div>
          <div className="ml-4 space-y-3">
            <p>
              ① explain that certain societies have long believed that a day
              begins at night
            </p>
            <p>
              ② indicate that nocturnal people were more religious in the past
            </p>
            <p>
              ③ say that people have long thought they miss chances due to
              morning laziness
            </p>
            <p>
              ④ support the idea that <span className="italic">owls</span> must
              go to work or school on the <span className="italic">lark</span>{" "}
              schedule
            </p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span>Choose the best options for</span>{" "}
            {renderSelect("42", 6, answers, setAnswers)} and{" "}
            {renderSelect("43", 6, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="6A-4" />}
          </div>
          <div className="ml-4 space-y-2">
            <p>① amount of sleep</p>
            <p>② appearance</p>
            <p>③ behavior</p>
            <p>④ cultural background</p>
            <p>⑤ religious beliefs</p>
            <p>⑥ time of birth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_6A;
