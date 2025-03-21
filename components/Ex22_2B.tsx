"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
const Ex22_2B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "2B-1",
      qa: [
        {
          questionNumber: "11",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "②：ペットを飼っている家庭の割合が高い順から低い順に3つの国（オーストラリア，イギリス，アメリカ）を並べる問題。冒頭の段落の &quot;The UK is known as a nation of animal-lovers; two in five UK homes have pets. This is lower than in the US, where more than half of homes have pets. However, Australia has the highest percentage of homes with pets!&quot;（イギリスは動物好きな人の国として知られており，イギリスの家庭の5軒に2軒はペットを飼っています。これは，半数以上の家庭でペットを飼っているアメリカよりも低い数字です。しかし，ペットを飼っている家庭の割合が最も高いのはオーストラリアです！）という記述から，② Australia － the US － the UK が正解。",
      ],
    },
    {
      questionId: "2B-2",
      qa: [
        {
          questionNumber: "12",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "④：David のレポートによると，ペットを飼うことの利点の一つは何かという問題。点線の囲みの中の &quot;Pet owners mention the following advantages of living with pets&quot;（ペットの飼い主たちは，ペットと一緒に暮らすことの次のような利点を挙げている）という項目の1つ目に &quot;The love, happiness, and friendship pets give&quot;（ペットが与えてくれる愛，幸福，友情）とあることと，3つ目に &quot;The happy times pets bring&quot;（ペットがもたらす幸せな時間）とあることから，④ your life can be more enjoyable（暮らしがより楽しくなる）が正解。①～③のような記述はいずれもない。",
      ],
    },
    {
      questionId: "2B-3",
      qa: [
        {
          questionNumber: "13",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "②：調査から分かったことを最もよく反映している発言はどれかを選ばせる問題。ペットを飼う利点の3つ目の項目 &quot;Most owners spend 3-4 hours with their &apos;fur babies&apos; every day&quot;（ほとんどの飼い主は毎日3～4時間，「毛皮の赤ちゃん」と過ごしている）という内容を言い換えた，② &apos;I spend about three hours with my pet every day.&apos;（私は毎日，ペットと3時間くらい過ごしている）が正解。&apos;fur babies&apos; がペットのことを指していると把握できたかどうかが問われている。①・③・④に該当するような内容は本文にはない。",
      ],
    },
    {
      questionId: "2B-4",
      qa: [
        {
          questionNumber: "14",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "④：日本でペットを飼うことについて，David の意見を要約したものはどれかを選ぶ問題。最終段落の &quot;On the other hand, since coming to Japan, I have seen other problems such as space, time, and cost. Still, I know people here who are content living in small flats with pets.&quot;（一方で，日本に来てから，スペースや時間，コストなど別の問題も見えてきました。それでも，狭いアパートでペットと暮らすことに満足している人たちを知っています。）という内容から，④の Some people are happy to keep pets inside their homes.（屋内でペットを飼って幸せな人もいる）が正解。",
      ],
    },
    {
      questionId: "2B-5",
      qa: [
        {
          questionNumber: "15",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "②：本文のタイトルを選ぶ問題。メインとなる内容は，調査結果を踏まえたペットを飼うことの利点（と一つの問題点）についてなので，② What Does Keeping Pets Give Us?（ペットを飼うことが私たちに何を与えるか）が正解。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {10})</span>
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
      {/* Header section */}
      <div className="mb-6">
        <p className="text-base mb-4">
          <strong>B</strong> You are the editor of a school English paper.
          David, an exchange student from the UK, has written an article for the
          paper.
          {Kaisetsu(showResults, "22-2B-0")}
        </p>
      </div>

      {/* Main article content */}
      <div className="border border-gray-300 p-6">
        <p className="mb-4">
          Do you like animals? The UK is known as a nation of animal-lovers; two
          in five UK homes have pets. This is lower than in the US, where more
          than half of homes have pets. However, Australia has the highest
          percentage of homes with pets!
          {Kaisetsu(showResults, "22-2B-1")}
        </p>

        <p className="mb-4">
          Why is this so? Results of a survey done in Australia give us some
          answers.
        </p>

        {/* Survey results box */}
        <div className="border border-gray-200 border-dashed p-4 mb-4 relative">
          <p className="mb-2">
            Pet owners mention the following advantages of living with pets:
          </p>

          <ul className="list-none space-y-3 mb-4">
            <li className="flex items-start">
              <span className="mr-2">▶</span>
              The love, happiness, and friendship pets give (90%);
            </li>
            <li className="flex items-start">
              <span className="mr-2">▶</span>
              The feeling of having another family member (over 60% of dog and
              cat owners);
            </li>
            <li className="flex items-start">
              <span className="mr-2">▶</span>
              The happy times pets bring. Most owners spend 3-4 hours with their
              &apos;fur babies&apos; every day and around half of all dog and
              cat owners let their pets sleep with them!
            </li>
          </ul>

          <div className="flex">
            <p className="flex-1 pr-4">
              One disadvantage is that pets have to be cared for when owners go
              away. It may be difficult to organise care for them; 25% of owners
              take their pets on holidays or road trips.
              {Kaisetsu(showResults, "22-2B-2")}
            </p>
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/images/Ex22-2B-1.webp"
                alt="Black and white illustration of a cat's head"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Conclusion paragraph */}
        <p>
          These results suggest that keeping pets is a good thing. On the other
          hand, since coming to Japan, I have seen other problems such as space,
          time, and cost. Still, I know people here who are content living in
          small flats with pets. Recently, I heard that little pigs are becoming
          popular as pets in Japan. Some people take their pig(s) for a walk,
          which must be fun, but I wonder how easy it is to keep pigs inside
          homes.
          {Kaisetsu(showResults, "22-2B-3")}
        </p>
      </div>

      {/* Questions section */}
      <div className="mt-8 space-y-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-1"))}>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            In terms of the ratios for homes with pets, which shows the
            countries&apos; ranking from{" "}
            <span className="underline">highest to lowest</span>?
            {renderSelect("11", 6, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="2B-1" />}
          </div>

          <div className="space-y-2 pl-2 md:pl-8">
            <div>
              {[
                "Australia — the UK — the US",
                "Australia — the US — the UK",
                "The UK — Australia — the US",
                "The UK — the US — Australia",
                "The US — Australia — the UK",
                "The US — the UK — Australia",
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

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-2"))}>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              According to David&apos;s report, one advantage of having pets is
              that
            </span>
            {renderSelect("12", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="2B-2" />}
          </div>

          <div className="space-y-2 pl-2 md:pl-8">
            <div>
              {[
                "you can save money",
                "you can sleep longer",
                "you will become popular",
                "your life can be more enjoyable",
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center mr-2">
                    {"①②③④"[index]}
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-3"))}>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              The statement that best reflects one finding from the survey is
            </span>
            {renderSelect("13", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="2B-3" />}
          </div>

          <div className="space-y-2 pl-2 md:pl-8">
            <div>
              {[
                "'I feel uncomfortable when I watch TV with my cat.'",
                "'I spend about three hours with my pet every day.'",
                "'Most pets like going on car trips.'",
                "'Pets need a room of their own.'",
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

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-4"))}>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>
              Which best summarises David&apos;s opinions about having pets in
              Japan?
            </span>
            {renderSelect("14", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="2B-4" />}
          </div>

          <div className="space-y-2 pl-2 md:pl-8">
            <div>
              {[
                "It is not troublesome to keep pets.",
                "People might stop keeping pets.",
                "Pet owners have more family members.",
                "Some people are happy to keep pets inside their homes.",
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

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-5"))}>
          <div className="mb-4 flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
            <span>Which is the most suitable title for the article?</span>
            {renderSelect("15", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="2B-5" />}
          </div>

          <div className="space-y-2 pl-2 md:pl-8">
            <div>
              {[
                "Does Your Pet Sleep on Your Bed?",
                "What Does Keeping Pets Give Us?",
                "What Pet Do You Have?",
                "Why Not Keep a Pet Pig?",
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center mr-2">
                    {"①②③④"[index]}
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_2B;
