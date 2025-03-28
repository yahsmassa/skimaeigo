"use client";
import Image from "next/image";
import { Paperclip } from "lucide-react";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex16_5 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "5-1",
      qa: [
        {
          questionNumber: "42",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は② マイクのために特別な食事を作っていた", "翻訳参照"],
    },
    {
      questionId: "5-2",
      qa: [
        {
          questionNumber: "43",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は③ 家族の生活費がもっと必要だったから", "翻訳参照"],
    },
    {
      questionId: "5-3",
      qa: [
        {
          questionNumber: "44",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は② 彼は勉強への興味を失った。", "翻訳参照"],
    },
    {
      questionId: "5-4",
      qa: [
        {
          questionNumber: "45",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      isOrderFree: true,
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は③ 料理を通して父親と繋がりを持つようになったこと",
        "翻訳参照",
      ],
    },
    {
      questionId: "5-5",
      qa: [
        {
          questionNumber: "46",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は② 彼に近い人たちと意味のある人間関係を持つこと",
        "翻訳参照",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2 font-sans">
          <h1 className="text-lg font-bold">{"第５問"}</h1>
          <span className="text-gray-600">(配点 {30})</span>
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
      {/* Question Header */}
      <div className="mb-6 font-sans">
        <p>
          次の物語を読み、下の問い(問1～5)の
          <span className="inline-block mx-2 border border-black px-4">42</span>
          ～
          <span className="inline-block mx-2 border border-black px-4">46</span>
          に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。(配点
          30)
        </p>
      </div>

      <div className="space-y-4 text-base leading-relaxed">
        <p className="indent-7">
          &quot;No one thought I would amount to much,&quot; Uncle John said, as
          he stood in the kitchen, showing me how he put together an
          award-winning four-course dinner. I had just graduated from
          university, and this dinner was his gift to me. It felt great to have
          a well-known chef cooking for me. On top of this, I was excited
          because in a few days he was going to compete in{" "}
          <span className="italic">The Big-Time Cook Off</span>, a nationwide TV
          cooking contest.
          {Kaisetsu(showResults, "16-5-1")}
        </p>

        <p className="indent-7">
          When Uncle John was young, his family lived in the countryside. His
          mother taught at a local school, but when John was 10, she had to quit
          to take care of her elderly mother. Until then, his father had been
          kind and had had enough time to play with John and his two younger
          sisters. But as bills kept piling up, the family got into trouble.
          John&apos;s father finally had to take a job in a city far away, so he
          could only come home on the weekends.
          {Kaisetsu(showResults, "16-5-2")}
        </p>

        <p className="indent-7">
          Gradually, because of his busy work schedule, John&apos;s father began
          looking tired whenever he came home. To tell the truth, he had changed
          from being good-humored to being in a bad mood all the time. When he
          was home, he just wanted to rest. He often scolded John for small
          things. Wanting to be accepted by his father, John tried to do his
          best but never felt he was good enough. Eventually, he started
          avoiding his father. He began hanging out at the shopping mall with
          friends, sometimes skipping his classes. Little by little John&apos;s
          grades got worse. His parents and teachers were worried about his
          future.
          {Kaisetsu(showResults, "16-5-3")}
        </p>

        <p className="indent-7">
          One Sunday morning, while John&apos;s mom was out taking care of her
          own mother, his father was napping in the TV room. John&apos;s sisters
          were hungry, so John started to cook something for them. He was not
          sure how to cook, but he did not want to bother his father.
          {Kaisetsu(showResults, "16-5-4")}
        </p>

        <p className="indent-7">
          Suddenly, the kitchen door opened, and his father was standing there.
          {Kaisetsu(showResults, "16-5-5")}
          &quot;Dad, I&apos;m sorry if I woke you up. Chelsea and Jessica are
          hungry, and I was trying to cook them some eggs.&quot; His dad looked
          at him seriously for a moment. &quot;Eggs? Eggs aren&apos;t good for
          lunch on a beautiful Sunday like today. Let&apos;s grill some steaks
          in the backyard.&quot; &quot;Are you sure? You must be tired.&quot;
          &quot;It&apos;s OK. I like cooking. It reminds me of my college days
          when I worked part-time as a cook. I&apos;ll show you how to prepare
          delicious steaks.&quot;
          {Kaisetsu(showResults, "16-5-6")}
        </p>

        <p className="indent-7">
          To John&apos;s surprise, his father became energetic when he started
          cooking. He took John aside and explained to him in detail that
          cooking was, in a way, like a science project. &quot;You need to
          measure the ingredients precisely and know which items go together. If
          you master this, you can provide pleasure for a great many
          people.&quot; John felt close to his father for the first time in a
          long time. From then on, John spent more time at home. He started
          cooking for his family regularly, and then later for his friends at
          college. John always felt happy when he cooked, and this happiness
          spilled over into other areas of his life.
          {Kaisetsu(showResults, "16-5-7")}
        </p>

        <p className="indent-7">
          Uncle John worked his way through college with jobs in restaurants,
          and eventually he became a chef at a famous restaurant. He really
          liked the job and worked hard developing his own special techniques.
          He was finally able to open his own restaurant serving his unique
          style of food. He won several awards and cooked for the rich and
          famous.
          {Kaisetsu(showResults, "16-5-8")}
        </p>

        <p className="indent-7">
          This brings us back to the contest. Uncle John and I were excited
          about his being selected. Yet, he shared something really touching
          with me there in the kitchen. &quot;You know, Mike,&quot; Uncle John
          said, &quot;I&apos;m thrilled to be able to go on TV as part of{" "}
          <span className="italic">The Big-Time Cook Off</span>. But what makes
          me the happiest is to stand here with you, one of the people I care
          about, and talk — just you and me. It&apos;s exactly like what my dad
          did for me one fine day in summer, so many years ago. And that made
          all the difference in my life.&quot;
          {Kaisetsu(showResults, "16-5-9")}
        </p>
      </div>
      <div className="mt-12 space-y-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4 font-sans">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>At the beginning of the story, Uncle John was</span>
            {renderSelect("42", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-1" />}
            {Kaisetsu(showResults, "16-5-10")}
          </div>

          <div className="ml-8 mt-4 space-y-2">
            <p>
              ① cooking for{" "}
              <span className="italic">The Big-Time Cook Off</span>
            </p>
            <p>② making a special meal for Mike</p>
            <p>③ training Mike for the contest</p>
            <p>④ trying to improve his recipes</p>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              Uncle John&apos;s father began working in the city because
            </span>
            {renderSelect("43", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-2" />}
            {Kaisetsu(showResults, "16-5-11")}
          </div>

          <div className="ml-8 mt-4 space-y-2">
            <p>① he was tired of living in the countryside</p>
            <p>② it was easier to spend time with his family</p>
            <p>③ the family needed more money for living</p>
            <p>④ Uncle John&apos;s mother had become sick</p>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4 font-sans">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              Why were Uncle John&apos;s parents and teachers worried about his
              future?
            </span>
            {renderSelect("44", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-3" />}
            {Kaisetsu(showResults, "16-5-12")}
          </div>
          <div className="ml-8 mt-4 space-y-2">
            <p>① He just wanted to rest at home.</p>
            <p>② He lost interest in studying.</p>
            <p>③ He stopped avoiding his father.</p>
            <p>④ He was no longer good-humored.</p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4 font-sans">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>What helped to change Uncle John&apos;s life the most?</span>
            {renderSelect("45", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-4" />}
            {Kaisetsu(showResults, "16-5-13")}
          </div>
          <div className="ml-8 mt-4 space-y-2">
            <p>① Eating an award-winning dinner with his friends</p>
            <p>
              ② Entering cooking contests such as{" "}
              <span className="italic">The Big-Time Cook Off</span>
            </p>
            <p>③ Making a connection with his father through cooking</p>
            <p>④ Spending time talking with Mike in the kitchen</p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-5"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4 font-sans">
            <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
            <span>What does Uncle John find most rewarding?</span>
            {renderSelect("46", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-5" />}
            {Kaisetsu(showResults, "16-5-14")}
          </div>
          <div className="ml-8 mt-4 space-y-2">
            <p>① Developing unique four-course dinners for famous people</p>
            <p>② Having meaningful relationships with people close to him</p>
            <p>③ Making people happy through cooking on TV shows</p>
            <p>④ Serving many people delicious meals in his restaurant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex16_5;
