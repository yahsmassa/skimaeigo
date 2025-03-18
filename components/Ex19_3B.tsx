"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const ExamQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "3B-1",
      qa: [
        {
          questionNumber: "30",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は① 彼女がかなり頻繁に使用できる（なにか）。",
        "前の文脈で、日常的に使うものなら、みんなの感謝をたびたび感じてもらえると言っている",
      ],
    },
    {
      questionId: "3B-2",
      qa: [
        {
          questionNumber: "31",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は③ 余暇",
        "前の文脈で、スポーツやガーデニングなどの彼女の余暇の過ごし方が説明されている",
      ],
    },
    {
      questionId: "3B-3",
      qa: [
        {
          questionNumber: "32",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は③ いくつかの屋外用家具",
        "前の文脈で、座って食事したければ、家の中に入らなくてはならないと言っているので",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第３問 B"}</h1>
          <span className="text-gray-600">(配点 {9})</span>
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
      <div className="mb-4">
        <div className="flex items-start">
          <div className="font-bold mr-2">B</div>
          <div>
            <p className="mb-4">
              次の会話は、退職する恩師への贈り物について相談している生徒たちのやりとりの一部である。
              <span className="inline-flex items-center">
                <span className="font-bold font-sans text-sm border border-black px-2 mx-1">
                  30
                </span>
                <span>〜</span>
                <span className="font-bold font-sans text-sm border border-black px-2 mx-1">
                  32
                </span>
              </span>
              に入れるのに最も適当なものを、それぞれ下の①〜④のうちから一つずつ選べ。
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex">
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Sean:
                </div>
                <div className="flex-1 leading-6 md:leading-8">
                  Thanks for coming in on a Saturday, everyone. It wasn't easy
                  to find a time for us all to sit down and talk. As you know,
                  Ms. Guillot is retiring this year. It is our responsibility to
                  arrange a gift for her on behalf of all current and former
                  students. We don't have much time before her party, so I'd
                  really like to reach a final decision today. Did you come up
                  with any ideas?
                  {Kaisetsu(showResults, "19-3B-1")}
                </div>
              </div>

              <div className="flex">
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Alex:
                </div>
                <div className="flex-1 leading-6 md:leading-8">
                  Not exactly, but I've heard that many teachers get bored after
                  retirement. I don't think we should get her something like a
                  painting, because it would just sit on the wall. If we buy her
                  something that she can make the most of on a daily basis, then
                  she will feel the appreciation all her students have for her
                  more often.
                  {Kaisetsu(showResults, "19-3B-2")}
                </div>
              </div>

              <div
                className={cn(
                  "flex md:items-center",
                  showResults && qaFormat(qa, "3B-1")
                )}
              >
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Sean:
                </div>
                <div className="flex-1 flex-wrap flex items-center leading-6 md:leading-8">
                  <span className="mr-2">
                    Thanks, Alex. So, you think giving
                  </span>
                  <span className="mr-2"> her something</span>
                  {renderSelect("30", 4, answers, setAnswers)}
                  <span className="mr-2">would be appropriate, right?</span>
                  {showResults && <Explain qa={qa} questionId="3B-1" />}
                  <span className="mr-2"></span>
                  {Kaisetsu(showResults, "19-3B-3")}
                </div>
              </div>
              <div className="pl-14 space-y-2">
                <p>① she can use quite regularly</p>
                <p>② to make her house look nice</p>
                <p>③ to share at the retirement party</p>
                <p>④ we students made ourselves</p>
              </div>

              <div className="flex">
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Alex:
                </div>
                <div className="flex-1 leading-6 md:leading-8">
                  Yes, I think that would be best.
                  {Kaisetsu(showResults, "19-3B-4")}
                </div>
              </div>

              <div className="flex">
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Thomas:
                </div>
                <div className="flex-1 leading-6 md:leading-8">
                  I don't think Ms. Guillot will be bored in her retirement. We
                  all know that she is very active. She often participates in
                  sporting events and loves spending time outside. I heard that
                  on Saturdays and Sundays, she runs in the mornings and plays
                  tennis in the evenings. She hardly ever stays indoors and
                  never misses her daily walk even if it is raining.
                  {Kaisetsu(showResults, "19-3B-5")}
                </div>
              </div>
              <div className="flex">
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Anne:
                </div>
                <div className="flex-1 leading-6 md:leading-8">
                  And, she loves doing work in her garden, too. I've seen some
                  pictures of her house. She has a beautiful garden and a
                  massive deck. She has a great variety of flowers and
                  vegetables. She often spends time relaxing on her deck just
                  enjoying the view of her garden.
                  {Kaisetsu(showResults, "19-3B-6")}
                </div>
              </div>

              <div
                className={cn(
                  "flex md:items-center",
                  showResults && qaFormat(qa, "3B-2")
                )}
              >
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Sean:
                </div>
                <div className="flex-1 flex-wrap flex items-center leading-6 md:leading-8">
                  <span>
                    Thomas and Anne, it seems that you both think we should
                    consider
                  </span>
                  <span>Ms. Guillot's</span>
                  {renderSelect("31", 4, answers, setAnswers)}
                  <span className="mr-2">when we buy her present.</span>
                  {showResults && <Explain qa={qa} questionId="3B-2" />}
                  {Kaisetsu(showResults, "19-3B-7")}
                </div>
              </div>

              <div className="pl-14 space-y-2">
                <p>① art works</p>
                <p>② garden</p>
                <p>③ leisure time</p>
                <p>④ weekends</p>
              </div>

              <div className="flex">
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Anne:
                </div>
                <div className="flex-1 leading-6 md:leading-8">
                  That's right. But it's a little hard to come up with an actual
                  item, isn't it?
                  {Kaisetsu(showResults, "19-3B-8")}
                </div>
              </div>

              <div className="flex">
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Mimi:
                </div>
                <div className="flex-1 leading-6 md:leading-8">
                  Why don't we get her something she can use for entertaining
                  people? Ms. Guillot loves cooking and I heard she has small
                  parties at her house every couple of weeks. Hmm..., I don't
                  think we need to get her anything to use in the kitchen, as
                  she seems to have plenty of that kind of stuff already. And
                  usually, people who like cooking have their own preferences
                  when it comes have their own preferences when it comes to
                  things like that.
                  {Kaisetsu(showResults, "19-3B-9")}
                </div>
              </div>

              <div className="flex">
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Sally:
                </div>
                <div className="flex-1 leading-6 md:leading-8">
                  I agree. She's told us about her parties. She often mentions
                  that whenever she has them, everyone has to go inside to eat
                  if they want to sit down. Perhaps something that she can use
                  when entertaining her guests would be most appropriate.
                  {Kaisetsu(showResults, "19-3B-10")}
                </div>
              </div>

              <div className="flex">
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Anne:
                </div>
                <div className="flex-1 leading-6 md:leading-8">
                  I think that's a great point. Once she has retired, I'm sure
                  she'll be having more of those parties. Who knows? Maybe
                  she'll even invite us!
                  {Kaisetsu(showResults, "19-3B-11")}
                </div>
              </div>

              <div
                className={cn(
                  "flex md:items-center",
                  showResults && qaFormat(qa, "3B-3")
                )}
              >
                <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
                  Sean:
                </div>
                <div className="flex-1 flex-wrap flex items-center leading-6 md:leading-8">
                  <span>
                    That would be nice, wouldn't it, Anne? Well, thank you for
                    all your ideas. Considering what we have discussed, I think
                    a present
                  </span>
                  <span>such as</span>
                  {renderSelect("32", 4, answers, setAnswers)}
                  <span className="mr-2">
                    will be best as it seems to match what everyone has said
                    about Ms. Guillot.
                  </span>
                  {showResults && <Explain qa={qa} questionId="3B-3" />}
                  <span className="mr-2"></span>
                  {Kaisetsu(showResults, "19-3B-12")}
                </div>
              </div>

              <div className="pl-14 space-y-2">
                <p>① a large bunch of flowers</p>
                <p>② a statue for her garden</p>
                <p>③ some outdoor furniture</p>
                <p>④ some sets for cooking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamQuestion;
