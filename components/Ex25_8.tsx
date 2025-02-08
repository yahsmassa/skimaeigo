"use client";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
const Ex25_8 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "8-1",
      qa: [
        {
          questionNumber: "38",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "①「宇宙船によるCO₂排出量は膨大で，宇宙空間に悪影響を及ぼしている」 →資料A第3文-第5文 ",
        "It is estimated that one spacecraft launch emits 200–300 tons of CO₂ and other harmful gases into the Earth&apos;s atmosphere. More and more spacecraft are being sent into space, which is damaging for the Earth. The contribution to the greenhouse effect of these craft’s CO₂ emissions is causing the Earth’s temperature to rise.",
        "「宇宙船1機の打ち上げで，約200～300トンのCO₂やその他の有害ガスが地球の大気中に放出されると推定されています。ますます多くの宇宙船が打ち上げられることで，地球に悪影響を及ぼしています。これらの宇宙船のCO₂排出量が温室効果に寄与し，地球の気温上昇を引き起こしています」に反する（宇宙空間に悪影響を及ぼしているのではなく，地球に悪影響を及ぼしている）。",
      ],
    },
    {
      questionId: "8-2",
      qa: [
        {
          questionNumber: "39",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "②「有害なガスの排出を抑えた新しいエンジンで宇宙船を更新するのは難しい」 →このような記述はない。",
      ],
    },
    {
      questionId: "8-3",
      qa: [
        {
          questionNumber: "40",
          answer: 0,
        },
        {
          questionNumber: "41",
          answer: 0,
        },
        {
          questionNumber: "42",
          answer: 0,
        },
      ],
      rightAnswerString: "342",
      answerString: "",
      isTwoOne: true,
      isCorrect: false,
      points: 4,
      explanation: [
        "③「宇宙ゴミは飛行機との衝突の可能性により人間にリスクをもたらす」 →資料Ａ第7文-第9文 ",
        "The quantity of space debris, the junked parts of spacecraft or artificial satellites, is on the rise. NASA estimates that, in the thermosphere, there are currently around 23,000 pieces of space debris which are larger than a softball and travel at speeds of up to 28,000 km/h. This poses a risk to future spaceflight, and may even be a potential obstacle to astronomical observation.",
        "（宇宙船や人工衛星の廃棄部品である宇宙ゴミの量が増加しています。NASAによれば，現在熱圏にはソフトボールより大きく，秒速28,000kmの速度で移動する宇宙ゴミが約23,000個存在していると推定されています。これは，将来の宇宙飛行にリスクをもたらし，天文観測においても潜在的な障害となる可能性があります）に反する（飛行機との衝突の可能性については言及されていない）。",
      ],
    },
    {
      questionId: "8-4",
      qa: [
        {
          questionNumber: "43",
          answer: 0,
        },
      ],
      isOrderFree: true,
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "④「宇宙探査は地球と熱圏の両方の環境を汚染している」 →第3文から第5文で，温室効果ガスを排出することで地球に害を与えていることが書かれている。また，第6文 ",
        "Second, space exploration is damaging the thermosphere (the space environment close to the Earth).",
        "（次に，宇宙探査は熱圏（地球に近い宇宙環境）を損なっています）と述べられている。したがって，④が正解。",
      ],
    },
    {
      questionId: "8-5",
      qa: [
        {
          questionNumber: "44",
          answer: 0,
        },
      ],
      isOrderFree: true,
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[44] グラフの数値を計算する必要がある。正解は①「世界中の政府が宇宙探査に費やすお金は，飢餓を減らすだけでなく，途上国で初等教育を利用可能にすることもできる」で，グラフによると宇宙探査に費やす金額は $103 billionだが，飢餓を減らす（relieving hunger）には$40 billion，途上国で初等教育を利用可能にする（supplying basic education）には$54 billionが必要なので，$103 billion > $94 billion（$40 billion + $50 billion）となり，この選択肢だけがグラフの数値に合致していることになる。他の選択肢については以下の通り。",
        "②「データによれば，途上国の人々に清潔な水を確保する費用は，世界中の政府が宇宙探査を行う費用よりも少ない」 →150 < 103なので誤り。",
        "③「政府が宇宙探査に費やす費用の半分以下で，発展途上国における教育格差の問題に対処することが可能である」 →103×0.5＝51.5で，54に満たないので誤り。",
        "④「現在宇宙探査に投資されているお金で，発展途上国に十分な食糧，基礎教育，清潔な水を提供することができる」 →150 + 54 + 40 > 103なので誤り。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第８問"}</h1>
          <span className="text-gray-600">(配点 {17})</span>
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
      {/* Introduction and Steps */}
      <div className="space-y-4">
        <p>
          You are working on an essay about{" "}
          <span className="font-medium">space exploration</span>. You will
          follow the steps below:
        </p>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Step 1</span>: Read a range of
            opinions gathered from the Internet about exploring outer space.
          </p>
          <p>
            <span className="font-medium">Step 2</span>: Take a position on
            space exploration.
          </p>
          <p>
            <span className="font-medium">Step 3</span>: Create an outline of
            your essay using additional sources.
          </p>
        </div>
      </div>

      {/* Step 1 Section */}
      <div className="space-y-4">
        <p className="font-medium">▶ [Step 1] Read a range of opinions</p>

        {/* Opinion Cards */}
        <div className="space-y-4">
          {/* Apu's Opinion */}
          <div className="border border-gray-300 p-4">
            <p className="font-medium mb-2">Apu (university professor)</p>
            <p>
              The exploration of space requires a lot of research time and
              money. All this research has led to many new inventions and
              boosted humanity&apos;s scientific and technical knowledge. While
              laser eye surgery, solar cells, freeze-dried food, and wireless
              headsets are just a few examples that have come out of space
              research, perhaps the invention that has proven the most useful in
              modern life is the computer mouse. This was developed in the 1960s
              on a NASA research project.
            </p>
          </div>

          {/* Christine's Opinion */}
          <div className="border border-gray-300 p-4">
            <p className="font-medium mb-2">Christine (company CEO)</p>
            <p>
              Much space exploration relies on international cooperation, a good
              example being the International Space Station, launched in 1998.
              The main reasons for this cooperation are to share the huge costs
              involved and to improve national prestige. More recently, private
              companies have begun exploring space, though mostly for commercial
              reasons. In the future, it is possible that countries or
              corporations will try to colonize parts of the moon or Mars. While
              financial cooperation and raising prestige are welcome, improper
              commercial or military use of outer space is not.
            </p>
          </div>

          {/* Meilin's Opinion */}
          <div className="border border-gray-300 p-4">
            <p className="font-medium mb-2">Meilin (journalist)</p>
            <p>
              As the famous physicist, Stephen Hawking, once said, it is
              probably dangerous to broadcast into deep space evidence of the
              existence of humans here on Earth. If our nearest intelligent
              aliens are anything like us, then they will seek to conquer Earth
              and humanity. For me, this is the greatest threat associated with
              space exploration. The deeper into space we travel, the greater
              the likelihood Earth will be discovered by an aggressive alien
              civilization.
            </p>
          </div>

          {/* Naomi's Opinion */}
          <div className="border border-gray-300 p-4">
            <p className="font-medium mb-2">Naomi (lawyer)</p>
            <p>
              Historically, jobs working at sea were likely the least safe, with
              the highest rates of death in the workplace. In modern times,
              space is no different, if not worse. Once we are just 10,000
              meters or so above the surface of the Earth, there is little
              oxygen and the temperature is too low for human survival. Since
              the first person went into space in 1961, 19 of 652 astronauts
              have died on the job: a fatality rate of 2.9%. No other business
              or industry would tolerate such a high level of danger. Why should
              the space industry?
            </p>
          </div>

          {/* Victor's Opinion */}
          <div className="border border-gray-300 p-4">
            <p className="font-medium mb-2">Victor (financial analyst)</p>
            <p>
              Space exploration has contributed hugely to economic growth. In
              the USA, NASA provided work for nearly 340,000 people in 2021,
              mostly at above-average salaries, and it is estimated that it has
              contributed $7.7 billion in taxes to the US government. Space is
              also being explored by other countries, such as China, India,
              Japan, and Russia. In the future, further economic growth will be
              ensured by more private firms entering the space race and by the
              rise of space tourism, space mining, space colonization, and space
              militarization.
            </p>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className={cn("space-y-4 mt-6", showResults && qaFormat(qa, "8-1"))}>
        {/* Question 1 */}
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 1</span>
            <span>
              Which of the following best expresses Meilin&apos;s opinion?
            </span>
            {renderSelect("38", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="8-1" />}
          </div>

          <div className="space-y-2 ml-8">
            <div>① Caution is critical.</div>
            <div>② Invention is invaluable.</div>
            <div>③ Science is superior.</div>
            <div>④ Trust is treasure.</div>
          </div>
        </div>
      </div>

      {/* Question 2 */}
      <div className={cn("space-y-4 mt-6", showResults && qaFormat(qa, "8-2"))}>
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 2</span>
            <span>
              Both Christine and Victor mention that space exploration
            </span>
            {renderSelect("39", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="8-2" />}
            <span>.</span>
          </div>

          <div className="space-y-4 ml-8">
            <div>
              ① has economic impacts and provides opportunities for private
              corporations to make money
            </div>
            <div>
              ② is gaining popularity and that salaries for people working in
              the industry are above average
            </div>
            <div>
              ③ is politically challenging as it requires coordination among
              countries with different policies
            </div>
            <div>
              ④ needs global cooperation, especially to operate the
              International Space Station successfully
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 Section */}
      <div className="mt-8 space-y-6">
        <p className="font-medium">▶ [Step 2] Take a position</p>

        <div className="space-y-6">
          <div className={cn("space-y-4", showResults && qaFormat(qa, "8-3"))}>
            <div>
              <span>問 3</span>
              <span className="ml-2">
                Now that you have understood the various opinions, you have
                taken a position on space exploration and written some notes
                below. Choose the best options to complete{" "}
                <span className="border border-gray-400 px-2">40</span>—
                <span className="border border-gray-400 px-2">42</span>. (You
                must have <span className="underline">all</span> of{" "}
                <span className="border border-gray-400 px-2">40</span>—
                <span className="border border-gray-400 px-2">42</span> correct
                to get points.)
              </span>
            </div>

            {/* Position Box */}
            <div className="border border-gray-300 p-4 space-y-3">
              <p className="font-medium">
                POSITION: Space exploration is not a good idea.
              </p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <div className="border border-gray-400 px-2">40</div>
                  <span>and</span>
                  <div className="border border-gray-400 px-2">41</div>
                  <span>opinions support this the most.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>An argument common to these two people is that</span>
                  <div className="border border-gray-400 px-2">42</div>
                  <span>.</span>
                </div>
              </div>
            </div>

            {/* Options for 40 and 41 */}
            <div className="space-y-2">
              {showResults && <Explain qa={qa} questionId="8-3" />}
              <p className="flex items-center gap-2 flex-wrap">
                Options for {renderSelect("40", 5, answers, setAnswers)} and
                {renderSelect("41", 5, answers, setAnswers)} (the order does not
                matter):
              </p>

              <div className="ml-4 space-y-2">
                <div>① Apu&apos;</div>
                <div>② Christine&apos;</div>
                <div>③ Meilin&apos;</div>
                <div>④ Naomi&apos;</div>
                <div>⑤ Victor&apos;</div>
              </div>
            </div>

            {/* Options for 42 */}
            <div className="space-y-2">
              <p className="flex items-center gap-2 flex-wrap">
                Options for {renderSelect("42", 4, answers, setAnswers)}.
              </p>
              <div className="ml-4 space-y-3">
                <div>
                  ① military conflict in outer space is something we should try
                  hard to avoid
                </div>
                <div>
                  ② space exploration exposes people to a lot of danger and is
                  too risky
                </div>
                <div>
                  ③ the possibility of alien invasion is too great to be ignored
                  and must be addressed
                </div>
                <div>
                  ④ the risk of death for people in the industry is extremely
                  high compared with other jobs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 Section */}
      <div className="mt-8 space-y-6">
        <p className="font-medium">
          ▶ [Step 3] Create an outline of your essay
        </p>

        {/* Essay Outline Box */}
        <p>Essay outline</p>
        <div className="border border-gray-300 p-4 space-y-4">
          <h2 className="text-center font-medium">
            A Reconsideration of Space Exploration
          </h2>

          <div>
            <h3 className="font-medium">Introduction</h3>
            <p>
              Space exploration is without doubt on the frontline of science,
              but it should not be a priority for the following three reasons.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Body</h3>
            <div className="space-y-1">
              <p>
                REASON 1 from Step 2, based on evidence from the opinions in
                Step 1
              </p>
              <p>
                REASON 2 (
                <span className="border border-gray-400 px-2">43</span>), based
                on evidence from Source A
              </p>
              <p>
                REASON 3, based on evidence (
                <span className="border border-gray-400 px-2">44</span>) from
                Source B
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium">Conclusion</h3>
            <p>
              Upon consideration of all its aspects, we should perhaps
              prioritize other things over exploring space.
            </p>
          </div>
        </div>

        {/* Source A Box */}
        <div className="border border-gray-300 p-4 space-y-2">
          <h3 className="font-medium">Source A</h3>
          <p>
            Although you may not make a direct connection between space
            exploration and environmental problems, a connection does exist.
            First, the CO₂ emissions of spacecraft are not insignificant. It is
            estimated that one spacecraft launch emits 200-300 tons of CO₂ and
            other harmful gases into the Earth&apos;s atmosphere. More and more
            spacecraft are being sent into space, which is damaging for the
            Earth. The contribution to the greenhouse effect of these
            craft&apos;s CO₂ emissions is causing the Earth&apos;s temperature
            to rise. Second, space exploration is damaging the thermosphere (the
            space environment close to the Earth). The quantity of space debris,
            the junked parts of spacecraft or artificial satellites, is on the
            rise. NASA estimates that, in the thermosphere, there are currently
            around 23,000 pieces of space debris which are larger than a
            softball and travel at speeds of up to 28,000 km/h. This poses a
            risk to future spaceflight, and may even be a potential obstacle to
            astronomical observation.
          </p>
        </div>

        {/* Source B Box */}
        <div className="border border-gray-300 p-4 space-y-4">
          <h3 className="font-medium">Source B</h3>
          <p>
            Space exploration is getting more and more costly; in 2022 it was
            reported that the total amount of money spent by all the governments
            around the world was more than US$100 billion. The graph below
            compares this cost with the annual budgets, estimated by
            international institutions, that would be required to address some
            of the world&apos;s most important issues.
          </p>

          <Image
            src="/images/Ex25-8-1.jpg"
            alt="Bar graph comparing government investment in space exploration with potential annual budgets needed for providing clean water, supplying basic education, and relieving hunger in developing countries"
            width={800}
            height={600}
            className="w-full max-w-xl mx-auto"
          />
        </div>
      </div>
      <div className="text-base space-y-8 p-6">
        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "8-4"))}>
          <div className="flex items-start gap-2 flex-wrap">
            <span className="whitespace-nowrap">問 4</span>
            <span>
              Based on Source A, which of the following is the most appropriate
              for REASON 2?
            </span>
            {renderSelect("43", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="8-4" />}
          </div>

          <div className="space-y-4 ml-6">
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                1
              </span>
              <div>
                CO₂ emissions produced by spacecraft are huge and are damaging
                outer space.
              </div>
            </div>

            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                2
              </span>
              <div>
                It is difficult to update spacecraft with new engines that emit
                fewer harmful gases.
              </div>
            </div>

            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                3
              </span>
              <div>
                Space debris poses risks to humans due to potential collision
                with airplanes.
              </div>
            </div>

            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                4
              </span>
              <div>
                Space exploration is polluting the environment of both the Earth
                and the thermosphere.
              </div>
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "8-5"))}>
          <div className="flex items-start gap-2">
            <div className="whitespace-nowrap">問 5</div>
            <div className="flex-1">
              <div>
                For REASON 3, you have decided to write{" "}
                <i>
                  The cost of space exploration is high and the money could be
                  used instead to solve major world problems
                </i>
                .
              </div>
              <div className="flex flex-wrap items-center">
                Based on Source B, which option best supports this statement?
                {renderSelect("44", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="8-5" />}
              </div>
            </div>
          </div>

          <div className="space-y-4 ml-6">
            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                1
              </span>
              <div>
                The amount of money that governments around the world spend on
                space exploration could not only reduce hunger but also make
                primary education available in developing countries.
              </div>
            </div>

            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                2
              </span>
              <div>
                The data show that it costs less to ensure clean water for
                people in developing countries than for governments around the
                world to explore space.
              </div>
            </div>

            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                3
              </span>
              <div>
                With less than half the money that governments spend on space
                exploration, it would be possible to address the problem of
                educational inequality in the developing world.
              </div>
            </div>

            <div className="flex gap-2">
              <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                4
              </span>
              <div>
                With the money currently invested in space exploration, we could
                provide sufficient food, basic education, and enough clean water
                in developing countries.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex25_8;
