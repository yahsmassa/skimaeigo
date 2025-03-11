"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex25_7 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const question: QandA[] = [
    {
      questionId: "7-1",
      qa: [
        {
          questionNumber: "32",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "A. 体温を変化させる→本文に書かれていない。したがって，①が正解。",
        "B. 全体的な健康を維持する→第2段落第1文 &quot;Sleep is essential for animals&apos; physical and mental health, and for their bodies to function efficiently.&quot;（睡眠は，動物の身体的および精神的な健康，そして効率的な身体機能のために不可欠です）",
        "C. 動物の身体をリフレッシュさせる→第2段落第3文 &quot;Sleep also gives the brain neurons a chance to reset, and the body becomes energized.&quot;（睡眠は脳のニューロンにリセットの機会を与え，身体にエネルギーを与えます）",
        "D. 脳のニューロンをリセットする→第2段落第3文 &quot;Sleep also gives the brain neurons a chance to reset, and the body becomes energized.&quot;（睡眠は脳のニューロンにリセットの機会を与え，身体にエネルギーを与えます）",
      ],
    },
    {
      questionId: "7-2",
      qa: [
        {
          questionNumber: "33",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[33] the biphasic sleepの特徴は，第3段落第4文 &quot;Some birds, insects, and mammals utilize a kind of biphasic sleep, where the animal has two waking and sleeping times, with one sleep being long and the other like a nap.&quot;（一部の鳥，昆虫，哺乳類は二相性睡眠を利用しており，これは1日の中で2回の覚醒と睡眠があり，1回は長く，もう1回は昼寝のような短い睡眠となっています）に書かれている。したがって，長い睡眠と短い睡眠が描かれている④が正解。",
      ],
    },
    {
      questionId: "7-3",
      qa: [
        {
          questionNumber: "34",
          answer: 0,
        },
        {
          questionNumber: "35",
          answer: 0,
        },
      ],
      rightAnswerString: "14",
      isOrderFree: true,
      answerString: "",
      isCorrect: false,
      points: 4,
      explanation: [
        "[34]・[35] 睡眠のパターンに影響する条件については，第4段落と第5段落に書かれている。各選択肢の意味と該当箇所は以下の通り。",
        "① エネルギーを急速に消費する動物は，より頻繁に眠る傾向がある→第4段落第2文 &quot;Smaller animals such as squirrels or mice tend to use up their energy by moving quickly and frequently. This results in the need to sleep more often but for shorter periods of time.&quot;（リスやネズミのような小動物は，素早く頻繁に動き回るためエネルギーを多く消費します。そのため，短時間ですがより頻繁に眠る必要があります）に一致する。",
        "② 食べ物を探し続ける動物は，より長い睡眠が必要である→第4段落第5文 &quot;Large herbivores like wild horses, on the other hand, sleep less than meat-eating animals because their plant-based diet has relatively few calories, resulting in the need to spend most of their time searching for food.&quot;（一方，草食動物のウマのような大型動物は，植物性の食事がカロリーが少ないため，ほとんどの時間を食べ物を探すことに費やす必要があり，睡眠時間が少なくなります）に反する。",
        "③ カロリーが少ない食事を摂る動物は，より簡単に眠れる→第4段落第5文 ",
        "④ 食事が胃を満たす動物は，通常より長く眠る→第4段落第4文 &quot;Lions are carnivorous and have longer sleeping times because their food sources satisfy their hunger for longer periods.&quot;（ライオンは肉食動物で，食物が長時間の満腹感を与えるため，より長い睡眠時間を確保できます）に一致する。",
        "⑤ アクセスが難しい巣を持つ動物は，通常より短く眠る→第5段落第2文-第5文 &quot;Animals that can create safe spaces tend to enjoy longer periods of sleep, but those that might need to stay alert sleep less. Apes sleep on platforms, high above the jungle floor, which keep them away from attackers. Some smaller animals such as rabbits create shelters by digging into the ground where it is difficult for predators to find them. As a result, they feel safer and sleep longer.&quot;（安全な場所を作れる動物は長時間眠る傾向がありますが，警戒し続ける必要がある動物は睡眠時間が短くなります。類人猿はジャングルの地面から高いところにあるプラットフォームで眠り，そのおかげで彼らは捕食者から遠ざかっていられます。ウサギのような小型動物は，地中に穴を掘って隠れ家を作り，捕食者に見つかりにくい場所で眠ります。その結果，より安全に感じ，長く眠ることができます）に反する。",
      ],
    },
    {
      questionId: "7-4",
      qa: [
        {
          questionNumber: "36",
          answer: 0,
        },
      ],
      isOrderFree: true,
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[36] Unihemispheric sleepについては第6段落第2文から最終文 &quot;A pattern that may be less easily noticed in our daily lives is called unihemispheric sleep. In this type of sleep, some animals traveling in a group keep one eye open. While one side of the animal’s brain sleeps, the other side stays awake and alert to its surroundings. In this way, the animal can experience the reviving effects of sleep while also watching out for threats. This unihemispheric sleep occurs in some bird species when they are flying long distances in groups. Birds flying at the outer edge of the group use this type of sleep to help protect the other members that sleep with both eyes closed.&quot;（私たちの日常生活ではあまり気づかれにくいパターンとして，片半球睡眠と呼ばれるものがあります。このタイプの睡眠では，群れで移動している一部の動物が片目を開けたまま眠ります。動物の脳の片方が眠っている間，もう片方が目覚めていて周囲に警戒し続けます。この方法で，動物は睡眠の回復効果を得ながら，脅威を監視することができます。この片半球睡眠は，群れで長距離を飛ぶ鳥の一部で見られます。群れの外側を飛ぶ鳥はこの睡眠を利用して，両目を閉じて眠る他のメンバーを保護します）に書かれている。したがって，①「飛行中に部分的に眠り，部分的に目覚めている」が正解。",
      ],
    },
    {
      questionId: "7-5",
      qa: [
        {
          questionNumber: "37",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[37] 第7段落の内容をもとに，この段落にタイトルをつける問題。第7段落第1文 &quot;Besides the types of sleep explained above, there are patterns that can be considered to be sleep-like activities.&quot;（上記で説明した睡眠タイプに加えて，睡眠に似た活動とみなされるパターンもあります）について，クマの島民や，クラゲのリラクゼーションの具体例が挙げられている，したがって，④「睡眠に類似した状態」が正解。",
      ],
    },
  ];

  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第７問"}</h1>
          <span className="text-gray-600">(配点 {16})</span>
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
      {/* Introduction text */}
      <p className="mb-6">
        You are preparing a presentation for a science project on animal habits.
        You found some interesting information in the article below and are now
        making your outline.
      </p>

      {/* Article content */}
      <div className="border border-gray-300 p-8">
        <h2 className="text-center font-medium text-lg mb-6">
          Animal Sleep Patterns
        </h2>

        <div className="space-y-4">
          <p className="indent-8">
            If you ever spend all day at home, you might notice that your pet
            cat sleeps a lot during the day and is quite active in the evening
            and early morning. Humans, on the other hand, are awake during most
            of the daylight hours and then sleep for a long time at night.
          </p>
          {Kaisetsu(showResults, "25-7-1")}
          <p className="indent-8">
            Sleep is essential for animals&apos; physical and mental health, and
            for their bodies to function efficiently. For animals with brains
            and central nervous systems, sleep is generally defined as an
            altered state of consciousness characterized by specific body
            positions, closed eyes, a general decrease in physical activity, and
            slower response rates. Sleep also gives the brain neurons a chance
            to reset, and the body becomes energized. Most creatures experience
            states of sleep, but the types and patterns differ from species to
            species.
          </p>
          {Kaisetsu(showResults, "25-7-2")}
          <p className="indent-8">
            Different sleep patterns over a 24-hour cycle have been identified
            in various types of animals. Three common patterns are called{" "}
            <span className="italic">monophasic</span>,
            <span className="italic">biphasic</span>, and{" "}
            <span className="italic">polyphasic</span>. Monophasic sleep,
            experienced by humans and many larger animals, happens when one is
            awake and active for many hours, and then one sleeps for an extended
            period. Some birds, insects, and mammals utilize a kind of biphasic
            sleep, where the animal has two waking and sleeping times, with one
            sleep being long and the other like a nap. Dogs and cats are
            polyphasic, meaning they have four to six sleeping and waking
            periods throughout the day.
          </p>
          {Kaisetsu(showResults, "25-7-3")}
          <p className="indent-8">
            There are variations in sleep patterns depending on the
            animal&apos;s size, physical needs, and diet. Smaller animals such
            as squirrels or mice tend to use up their energy by moving quickly
            and frequently. This results in the need to sleep more often but for
            shorter periods of time. Lions are carnivorous animals and have
            longer sleeping times because their food sources satisfy their
            energy for longer periods. Large herbivores like wild horses, on the
            other hand, sleep less than meat-eating animals because their
            plant-based diet has relatively few calories, resulting in the need
            to spend most of their time searching for food.
          </p>
          {Kaisetsu(showResults, "25-7-4")}
          <p className="indent-8">
            Safety is another variable in sleep patterns. Animals that can
            create safe spaces tend to enjoy longer periods of sleep, but those
            that might need to stay alert sleep less. Apes sleep on platforms,
            high above the jungle floor, which keep them away from attackers.
            Some smaller animals such as rabbits create shelters by digging into
            the ground where it is difficult for predators to find them. As a
            result, they feel safer and sleep longer. In contrast, elephants
            often travel long distances and may feel exposed to danger from
            hunters or other animals, contributing to their short sleeping
            times.
          </p>
          {Kaisetsu(showResults, "25-7-5")}
          <p className="indent-8">
            The animal sleep patterns discussed so far tend to be typical. A
            pattern that may be less easily noticed in our daily lives is called{" "}
            <span className="italic">unihemispheric</span> sleep. In this type
            of sleep, some animals traveling in a group keep one eye open. While
            one side of the animal&apos;s brain sleeps, the other side stays
            awake and alert to its surroundings. In this way, the animal can
            experience the reviving effects of sleep while also watching out for
            threats. This unihemispheric sleep occurs in some bird species when
            they are flying long distances in groups. Birds flying at the outer
            edge of the group use this type of sleep to help protect the other
            members that sleep with both eyes closed.
          </p>
          {Kaisetsu(showResults, "25-7-6")}
          <p className="indent-8">
            Besides the types of sleep explained above, there are patterns that
            can be considered to be sleep-like activities.{" "}
            <span className="italic">Hibernation</span>, which can be observed
            in black bears, is a long, inactive period when food is scarce or
            the weather is severe. During this time, the animal&apos;s body
            temperature drops, its heart rate and breathing slow down, and it
            may appear dead. Creatures such as jellyfish that have no central
            nervous system also experience times of extreme relaxation where
            they remain in a less responsive state.
          </p>
          {Kaisetsu(showResults, "25-7-7")}
          <p className="indent-8">
            As shown above, sleep plays an important role in the lives of
            animals and it is much more complex than simply closing the eyes.
          </p>
          {Kaisetsu(showResults, "25-7-8")}
        </div>
      </div>

      {/* Presentation Outline */}
      <div className="mt-8 space-y-4">
        <p className="font-medium">Your presentation outline</p>

        <div className="border border-gray-300 p-8">
          <h2 className="text-center text-xl italic mb-8">How Animals Sleep</h2>

          <div className="space-y-6">
            <div>
              <div className="flex gap-2 items-center mb-2">
                <h3 className="text-lg italic">Importance of Sleep</h3>
                <div className="border border-gray-400 px-3 py-1">32</div>
              </div>
              <div className="space-y-2 ml-4">
                <p>A. To alter body temperature</p>
                <p>B. To maintain overall health</p>
                <p>C. To refresh the animal&apos;s body</p>
                <p>D. To reset the brain neurons</p>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-start">
                <h3 className="text-lg italic">
                  Biphasic Sleep Pattern (in each 24-hour cycle)
                </h3>
                <div className="border border-gray-400 px-3 py-1">33</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg italic mb-2">
                Some Conditions Affecting Sleep Patterns
              </h3>
              <div className="space-y-2 ml-4">
                <div className="flex gap-2 items-center">
                  <span>- Animals</span>
                  <div className="border border-gray-400 px-3 py-1">34</div>
                  <span>.</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span>- Animals</span>
                  <div className="border border-gray-400 px-3 py-1">35</div>
                  <span>.</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg italic mb-2">Unihemispheric Sleep</h3>
              <div className="space-y-2 ml-4">
                <div className="flex gap-2 items-center">
                  <span>- Some birds</span>
                  <div className="border border-gray-400 px-3 py-1">36</div>
                  <span>.</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <div className="border border-gray-400 px-3 py-1">37</div>
              </div>
              <div className="space-y-2 ml-4">
                <p>- Black bear hibernation</p>
                <p>- Jellyfish relaxation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Questions section */}
      <div className="mt-8 space-y-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "7-1"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 1</span>
            <span>
              Under the heading, &quot;Importance of Sleep,&quot; you spotted an
              error in your presentation outline. Which of the following should
              you <span className="underline">remove</span>?
            </span>
            {renderSelect("32", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="7-1" />}
          </div>
          <div className="space-y-2 ml-8">
            <div>① A</div>
            <div>② B</div>
            <div>③ C</div>
            <div>④ D</div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "7-2"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 2</span>
            <span>
              You want to use a figure for the biphasic sleep pattern mentioned
              in the article. Choose the best option for{" "}
            </span>
            {renderSelect("33", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="7-2" />}
          </div>
          <div className="ml-8">
            <Image
              src="/images/Ex25-7-1.jpg"
              alt="Sleep pattern diagrams showing four circular charts labeled 1-4, each divided into awake and asleep sections"
              width={800}
              height={600}
              className="w-full max-w-2xl"
            />
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "7-3"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 3</span>
            <span>Choose the best options for </span>
            {renderSelect("34", 5, answers, setAnswers)}
            <span>and </span>
            {renderSelect("35", 5, answers, setAnswers)}. (The order does not
            matter.)
            {showResults && <Explain qa={qa} questionId="7-3" />}
          </div>
          <div className="space-y-2 ml-8">
            <div>① which burn up energy rapidly tend to sleep more often</div>
            <div>② which continually search for food need longer sleep</div>
            <div>③ whose diet has fewer calories can sleep more easily</div>
            <div>
              ④ whose food keeps their stomachs full usually sleep longer
            </div>
            <div>
              ⑤ whose homes are difficult to get to typically sleep less
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "7-4"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 4</span>
            <span>Choose the best option for </span>
            {renderSelect("36", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="7-4" />}
          </div>
          <div className="space-y-2 ml-8">
            <div>
              ① can be partially asleep and partially awake while in flight
            </div>
            <div>
              ② can have half of their brain sleep, leading to increased heart
              rate
            </div>
            <div>
              ③ can keep both eyes open constantly to watch out for enemies
            </div>
            <div>④ can protect the outside members from inside the group</div>
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "7-5"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 5</span>
            <span>Choose the best heading for </span>
            {renderSelect("37", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="7-5" />}
          </div>
          <div className="space-y-2 ml-8">
            <div>① Common Patterns of Sleep</div>
            <div>② Natural Sleep Methods</div>
            <div>③ Reasons for Sleep</div>
            <div>④ States Similar to Sleep</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex25_7;
