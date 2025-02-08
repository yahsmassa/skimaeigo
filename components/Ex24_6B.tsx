"use client";

import React, { useState } from "react";
import { Saiten } from "./Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import Image from "next/image";
import { Saiten2 } from "@/components/Saiten2";
import { Explain } from "@/components/Explain";

const Ex24_6B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const question: QandA[] = [
    {
      questionId: "6B-1",
      qa: [
        {
          questionNumber: "44",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[44] 第3段落の最後の2文 The reason some people cannot tolerate chili spice but can eat foods flavored with wasabi is that the spice compounds in it are low in density. The compounds in wasabi vaporize easily, delivering a blast of spiciness to our nose when we eat it.",
        "（唐辛子のスパイスには耐えられないが，ワサビ味の食品なら食べられるという人がいる理由は，ワサビに含まれるスパイス化合物の濃度が低いからである。ワサビに含まれる化合物は気化しやすく，食べたときに鼻に抜けるような辛さをもたらす）の内容から，④「軽い化合物」が正解。",
      ],
    },
    {
      questionId: "6B-2",
      qa: [
        {
          questionNumber: "45",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[45] （※NOT問題） Aの「痛みを減らす」については第4段落第3文 &quot;Strangely, capsaicin can also make pain go away.&quot;（不思議なことに，カプサイシンは痛みを消すこともできる）に一致している。Bの「あなたにより多くのエネルギーを与える」は，第5段落第3文 &quot;This is because spicy foods increase the heart rate, send more energy to the muscles, and convert fat into energy.&quot;（これは，辛い食べ物が心拍数を上げ，筋肉により多くのエネルギーを送り，脂肪をエネルギーに変えるからである）に一致する。",
        "Cの「新陳代謝を加速させる」は，第5段落第1文 &quot;Another benefit of eating chili peppers is that they accelerate the metabolism.&quot;（唐辛子を食べることのもう一つの利点は，新陳代謝を促進することである）に一致する。Eの「食中毒を減らす」は，第6段落第1文 &quot;It is also believed that chili peppers are connected with food safety, which might lead to a healthier life.&quot;（また，唐辛子は食品の安全性とも関係があり， ",
        "より健康的な生活につながるかもしれないと考えられている）と，第3文～第4文 &quot;Studies have shown that capsaicin and other chemicals found in chili peppers have antibacterial properties that can slow down or even stop microorganism growth. As a result, food lasts longer and there are fewer food-borne illnesses. &quot;（唐辛子に含まれるカプサイシンやその他の化学物質には抗菌作用があり，微生物の繁殖を遅らせたり，止めたりすることさえできるという研究結果がある。その結果，食べ物がより長持ちし，食中毒が少なくなる）に一致する。しかし，Dの「ストレスを感じさせなくなる」という内容は利点には述べられていない。したがって，④が正解。",
      ],
    },
    {
      questionId: "6B-3",
      qa: [
        {
          questionNumber: "46",
          answer: 0,
        },
        {
          questionNumber: "47",
          answer: 0,
        },
      ],
      rightAnswerString: "23",
      answerString: "",
      isOrderFree: true,
      isCorrect: false,
      points: 3,
      explanation: [
        "[46]・[47] 第7段落第3文 &quot;People who have eaten several of the world&apos;s hottest chilis in a short time have reported experiencing upset stomachs, diarrhea, numb hands, and symptoms similar to a heart attack.&quot;（世界一辛い唐辛子を短時間に何本も食べた人は，胃の不調，下痢，手のしびれ，心臓発作に似た症状を経験したと報告している）の内容から，",
        "②「胃の痛みを経験するかもしれない」と，③「手の感触を失うかもしれない」が正解。④の「指が火が付いたように感じられるかもしれない」は，第7段落第4文 &quot;Ghost peppers, which contain one million SHUs, can even burn a person&apos;s skin if they are touched.&quot; ",
        "（100万SHUを含むゴースト・ペッパーは，触ると皮膚が火傷することさえある）のことと考えられるが，設問では「あまりにも強力な唐辛子を短時間に食べた時」に起きることを選ぶように求められているいるため，これは誤りである。",
      ],
    },
    {
      questionId: "6B-4",
      qa: [
        {
          questionNumber: "48",
          answer: 0,
        },
      ],
      isOrderFree: true,
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "48] （※推測問題）スパイスへの耐性について，本文の内容を基に推測する問題。 ",
        "第4段落第4文 &quot;Scientists found that TRPV1 ceases to be turned on after long-term exposure to chili peppers, temporarily easing painful sensations.&quot;（科学者たちは，唐辛子に長期間さらされるとTRPV1がオンにならなくなり，一時的に痛覚が和らぐことを発見した）という内容と，第6段落第5文 &quot;This may explain why people in hot climates have a tendency to use more chili peppers, and therefore, be more tolerant of spicier foods due to repeated exposure.&quot; ",
        "（こういうわけで，暑い気候に住む人々は唐辛子を多く使う傾向があり，したがって，何度も唐辛子に触れる傾向があるため，より辛い食べ物に対してより耐性があるのかもしれない）という内容から，③「唐辛子への耐性が低い人でも，その辛さに慣れることができる」が正解。④「ワサビへの耐性が低い人は高いSHUに耐えることができない」も紛らわしく，実際，第3段落第3文では &quot;However, people have compared the level of spice in it to chilis with around 1,000 SHUs, which is on the lower end of the scale.&quot; ",
        "（しかし，人々はワサビの中のスパイスのレベルを，約1,000SHUの唐辛子に例えてきた）と述べられてはいるものの，あくまでも「1,000SHUにたとえる」と述べているだけであって，実際にワサビへの耐性が低い人が高いSHUに耐えられるかどうかについては言及していないため，誤りだと考えられる。",
      ],
    },
    {
      questionId: "6B-5",
      qa: [
        {
          questionNumber: "49",
          answer: 0,
        },
      ],
      rightAnswerString: "5",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[49] （※推測問題）締めの一言を選ぶ問題。本文は，第1段落で唐辛子とワサビの違いについて問題提起を行い，それを説明するために第2段落で化学的な仕組みを説明し，続く第3段落ではワサビが唐辛子と異なる理由が述べられている。第4段落から第6段落では唐辛子の利点が述べられており，第7段落ではSHUの高い唐辛子を大量に摂取した時の問題点が述べられており，それを踏まえて最後の第8段落では，辛いものは食べても安全だが量には注意しようとまとめている。したがって，8つの段落中，3つの段落を費やして唐辛子の利点を述べていることからも，⑤「誰かがあなたに辛い食べ物を勧めた時，それには何らかの利点があるということを思い出そう」が正解。これ以外の選択肢の意味と誤りの根拠は以下の通りである。 ",
        "① Don&apos;t be afraid. Eating spicy foods will boost your confidence. 「恐れてはいけない。辛い食べ物を食べると自信が増す」 →このような内容は本文に含まれていない。 ",
        "② Next time you eat chili chicken, remember its punch only stays for a second. 「次にチリチキンを食べるときには，そのパンチが一瞬しか残らないことを覚えておこう」 →最終段落の第1文で「辛いものを食べた後に感じる不快感が数時間以内に消える」とは書かれているが，「一瞬しか残らない」とは述べていない。 ",
        "③ Personality plays a big role in our spice preference, so don&apos;t worry. 「個性（性格）はスパイスの好みで大きな役割を果たす。だから心配しないで」 →人の個性（性格）とスパイスの関係については本文で言及されていない。 ",
        "④ Unfortunately, there are no cures for a low wasabi tolerance. 「残念ながら，ワサビの低い耐性には治療法は存在しない」 →ワサビの耐性に関する治療法の話は本文でなされていない。 ",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第６問 B"}</h1>
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
      <div className="mb-4">
        You are preparing a presentation for your science club, using the
        following passage from a science website.
      </div>

      <div className="text-center font-bold mb-4">
        Chili Peppers: The Spice of Life
      </div>

      <div className="space-y-4">
        <p>
          Tiny pieces of red spice in chili chicken add a nice touch of color,
          but biting into even a small piece can make a person&apos;s mouth burn
          as if it were on fire. While some people love this, others want to
          avoid the painful sensation. At the same time, though, they can eat
          sashimi with wasabi. This might lead one to wonder what spiciness
          actually is and to ask where the difference between chili and wasabi
          comes from.
        </p>

        <p>
          Unlike sweetness, saltiness, and sourness, spiciness is not a taste.
          In fact, we do not actually taste heat, or spiciness, when we eat
          spicy foods. The bite we feel from eating chili peppers and wasabi is
          derived from different types of compounds. Chili peppers get their
          heat from a heavier, oil-like element called capsaicin. Capsaicin
          leaves a lingering, fire-like sensation in our mouths because it
          triggers a receptor called TRPV1. TRPV1 induces stress and tells us
          when something is burning our mouths. Interestingly, there is a wide
          range of heat across the different varieties of chili peppers, and the
          level depends on the amount of capsaicin they contain. This is
          measured using the Scoville Scale, which is also called Scoville Heat
          Units (SHU). SHUs range from the sweet and mild shishito pepper at
          50-200 SHUs to the Carolina Reaper pepper, which can reach up to 2.2
          million.
        </p>

        <p>
          Wasabi is considered a root, not a pepper, and does not contain
          capsaicin. Thus, wasabi is not ranked on the Scoville Scale. However,
          people have compared the level of spice in it to chilis with around
          1,000 SHUs, which is on the lower end of the scale. The reason some
          people cannot tolerate chili spice but can eat foods flavored with
          wasabi is that the spice compounds in it are low in density. The
          compounds in wasabi vaporize easily, delivering a blast of spiciness
          to our nose when we eat it.
        </p>

        <p>
          Consuming chili peppers can have positive effects on our health, and
          much research has been conducted into the benefits of capsaicin. When
          capsaicin activates the TRPV1 receptor in a person&apos;s body, it is
          similar to what happens when they experience stress or pain from an
          injury. Strangely, capsaicin can also make pain go away. Scientists
          found that TRPV1 ceases to be turned on after long-term exposure to
          chili peppers, temporarily easing painful sensations. Thus, skin
          creams containing capsaicin might be useful for people who experience
          muscle aches.
        </p>

        <p>
          Another benefit of eating chili peppers is that they accelerate the
          metabolism. A group of researchers analyzed 90 studies on capsaicin
          and body weight and found that people had a reduced appetite when they
          ate spicy foods. This is because spicy foods increase the heart rate,
          send more energy to the muscles, and convert fat into energy.
          Recently, scientists at the University of Wyoming have created a
          weight-loss drug with capsaicin as a main ingredient.
        </p>

        <p>
          It is also believed that chili peppers are connected with food safety,
          which might lead to a healthier life. When food is left outside of a
          refrigerated environment, microorganisms multiply on it, which may
          cause sickness if eaten. Studies have shown that capsaicin and other
          chemicals found in chili peppers have antibacterial properties that
          can slow down or even stop microorganism growth. As a result, food
          lasts longer and there are fewer food-borne illnesses. This may
          explain why people in hot climates have a tendency to use more chili
          peppers, and therefore, be more tolerant of spicier foods due to
          repeated exposure. Also, in the past, before there were refrigerators,
          they were less likely to have food poisoning than people in cooler
          climates.
        </p>

        <p>
          Chili peppers seem to have health benefits, but can they also be bad
          for our health? Peppers that are high on the Scoville Scale can cause
          physical discomfort when eaten in large quantities. People who have
          eaten several of the world&apos;s hottest chilis in a short time have
          reported experiencing upset stomachs, diarrhea, numb hands, and
          symptoms similar to a heart attack. Ghost peppers, which contain one
          million SHUs, can even burn a person&apos;s skin if they are touched.
        </p>

        <p>
          Luckily the discomfort some people feel after eating spicy foods tends
          to go away soon—usually within a few hours. Despite some negative side
          effects, spicy foods remain popular around the world and add a
          flavorful touch to the table. Remember, it is safe to consume spicy
          foods, but you might want to be careful about the amount of peppers
          you put in your dishes.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div className="font-bold mb-4">Presentation slides:</div>

        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-1.jpg"
              alt="Chili Peppers: The Spice of Life"
              width={500}
              height={300}
              className="w-full"
            />
          </div>

          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-2.jpg"
              alt="Characteristics comparison between chili peppers and wasabi"
              width={500}
              height={300}
              className="w-full"
            />
          </div>

          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-3.jpg"
              alt="Positive Effects of Capsaicin"
              width={500}
              height={300}
              className="w-full"
            />
          </div>

          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-4.jpg"
              alt="Negative Effects of eating too many chili peppers"
              width={500}
              height={300}
              className="w-full"
            />
          </div>

          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-5.jpg"
              alt="Spice Tolerance"
              width={500}
              height={300}
              className="w-full"
            />
          </div>

          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-6.jpg"
              alt="Closing Remark"
              width={500}
              height={300}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-8 ">
          <div className={cn(showResults && qaFormat(qa, "6B-1"))}>
            <div className="flex items-center flex-wrap gap-2">
              <span className="flex-none mr-2">問 1</span>
              <span>
                What is the first characteristic of wasabi on Slide 2?
              </span>
              {renderSelect("44", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId={"6B-1"} />}
            </div>
            <div className="mt-4 space-y-2 ml-6">
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  1
                </span>
                <span>burning taste</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  2
                </span>
                <span>fire-like sensation</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  3
                </span>
                <span>lasting feeling</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  4
                </span>
                <span>light compounds</span>
              </div>
            </div>
          </div>

          <div className={cn(showResults && qaFormat(qa, "6B-2"))}>
            <div className="flex items-center flex-wrap gap-2">
              <span className="whitespace-nowrap mr-2">問 2</span>
              <span>
                Which is an <u>error</u> you found on Slide 3?
              </span>
              {renderSelect("45", 5, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId={"6B-2"} />}
            </div>
            <div className="mt-4 space-y-2 ml-6">
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  1
                </span>
                <span>A</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  2
                </span>
                <span>B</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  3
                </span>
                <span>C</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  4
                </span>
                <span>D</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  5
                </span>
                <span>E</span>
              </div>
            </div>
          </div>

          <div className={cn(showResults && qaFormat(qa, "6B-3"))}>
            <div className="flex items-center flex-wrap gap-2 mt-2">
              <span className="flex-none mr-2">問 3</span>
              <span>
                Choose two options for Slide 4. (The order does not matter.)
              </span>
              {renderSelect("46", 5, answers, setAnswers)}・
              {renderSelect("47", 5, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId={"6B-3"} />}
            </div>
            <div className="mt-4 space-y-2 ml-6">
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  1
                </span>
                <span>you might activate harmful bacteria.</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  2
                </span>
                <span>you might experience stomach pain.</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  3
                </span>
                <span>you might lose feeling in your hands.</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  4
                </span>
                <span>your fingers might feel like they are on fire.</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  5
                </span>
                <span>your nose might start hurting.</span>
              </div>
            </div>
          </div>
          <div className={cn(showResults && qaFormat(qa, "6B-4"))}>
            <div className="flex items-center flex-wrap gap-2">
              <span className="flex-none mr-2">問 4</span>
              <span>
                What can be inferred about tolerance for spices for Slide 5?
              </span>
              {renderSelect("48", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId={"6B-4"} />}
            </div>
            <div className="mt-4 space-y-3 ml-6">
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  1
                </span>
                <span>
                  People with a high tolerance to chili peppers pay attention to
                  the spices used in their food.
                </span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  2
                </span>
                <span>
                  People with a high tolerance to wasabi are scared of chili
                  peppers&apos; negative effects.
                </span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  3
                </span>
                <span>
                  People with a low tolerance to chili peppers can get used to
                  their heat.
                </span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  4
                </span>
                <span>
                  People with a low tolerance to wasabi cannot endure high SHU
                  levels.
                </span>
              </div>
            </div>
          </div>

          <div className={cn(showResults && qaFormat(qa, "6B-5"))}>
            <div className="flex items-center flex-wrap gap-2">
              <span className="flex-none mr-2">問 5</span>
              <span>Choose the most appropriate remark for Slide 6.</span>
              {renderSelect("49", 5, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId={"6B-5"} />}
            </div>
            <div className="mt-4 space-y-3 ml-6">
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  1
                </span>
                <span>
                  Don&apos;t be afraid. Eating spicy foods will boost your
                  confidence.
                </span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  2
                </span>
                <span>
                  Next time you eat chili chicken, remember its punch only stays
                  for a second.
                </span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  3
                </span>
                <span>
                  Personality plays a big role in our spice preference, so
                  don&apos;t worry.
                </span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  4
                </span>
                <span>
                  Unfortunately, there are no cures for a low wasabi tolerance.
                </span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                  5
                </span>
                <span>
                  When someone offers you some spicy food, remember it has some
                  benefits.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex24_6B;
