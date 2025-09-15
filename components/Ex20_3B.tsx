"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";
const JapaneseTestQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "20_3B")?.qanda || [];
  // const question: QandA[] = [
  //   {
  //     questionId: "3B-1",
  //     qa: [
  //       {
  //         questionNumber: "30",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "3",
  //     answerString: "",
  //     points: 6,
  //     explanation: ["正解は③", "odd jobsとrandom jobsが同じ意味と判断する"],
  //   },
  //   {
  //     questionId: "3B-2",
  //     qa: [
  //       {
  //         questionNumber: "31",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "3",
  //     answerString: "",
  //     points: 6,
  //     explanation: [
  //       "正解は③ 地域内で働くことにはほとんどリスクがない。",
  //       "他の選択肢の内容は文章にない",
  //     ],
  //   },
  //   {
  //     questionId: "3B-3",
  //     qa: [
  //       {
  //         questionNumber: "32",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "4",
  //     answerString: "",
  //     points: 6,
  //     explanation: [
  //       "正解は④ 私たちの地域に有効な計画を立てる",
  //       "他の選択肢の内容は文章にない",
  //     ],
  //   },
  // ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第３問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {18})</span>
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
      <div className="mb-6 flex-row flex-wrap">
        <span className="font-bold text-base md:text-xl mr-2">B</span>
        <span className="text-base md:text-lg"></span>
        <span className="text-base md:text-lg">
          次の会話は，慈善活動の企画に関して大学生たちが行ったやりとりの一部であ
          <span className="inline-flex items-center">
            る。
            <div className="flex items-center ml-2 text-sm">
              <div className="border-2 border-black px-2 text-sm md:text-base md:px-4 py-1 mx-1 text-center min-w-10 font-sans">
                30
              </div>
              <span className="mx-2">～</span>
              <div className="border-2 border-black px-2 text-sm md:text-base md:px-4 py-1 mx-1 text-center min-w-10 font-sans">
                32
              </div>
            </div>
          </span>
        </span>
        <span className="ml-2">
          に入れるのに最も適当なものを，それぞれ下の①～④のうちから一つずつ選べ。
        </span>
      </div>

      <div className="space-y-6 mb-8">
        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Akira:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            Hey, guys. Thanks for dropping in. I've asked you all to meet here
            today to come up with ideas about how to raise money for our annual
            charity event. We'll have about a month this summer to earn as much
            as we can. Any thoughts?
            {Kaisetsu(showResults, "20-3B-1")}
          </div>
        </div>

        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Teresa:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            How about doing odd jobs around the neighborhood?
            {Kaisetsu(showResults, "20-3B-2")}
          </div>
        </div>

        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Akira:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            What's that? I've never heard of it.
            {Kaisetsu(showResults, "20-3B-3")}
          </div>
        </div>

        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Jenna:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            Oh, I guess it's not common here in Japan. It can be anything, you
            know, doing stuff around the house like cutting the grass, washing
            the windows, or cleaning out the garage. When I was a high school
            student back in the US, I made 300 dollars one summer by doing yard
            work around the neighborhood. And sometimes people will ask you to
            run around town for them to pick up the dry cleaning or do the
            grocery shopping. It's a pretty typical way for young people to earn
            some extra money.
            {Kaisetsu(showResults, "20-3B-4")}
          </div>
        </div>

        {/* <div className="flex md:items-center"> */}
        <div
          className={cn(
            "flex md:items-center",
            showResults && qaFormat(qa, "3B-1")
          )}
        >
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Akira:
          </div>
          <div className="flex flex-wrap gap-2 items-center leading-6 md:leading-8">
            <span>So, Jenna, you're saying that</span>
            {renderSelect(String(30), 4, answers, setAnswers)}
            <span className="mr-3">?</span>
            <Explain qa={qa} questionId="3B-1"  isShow={showResults} />
            {Kaisetsu(showResults, "20-3B-5")}
          </div>
        </div>
      </div>

      <div className={cn("space-y-4 mb-8 pl-8")}>
        {[
          "cleaning up the yard is quite valuable work",
          "dividing housework among the family is best",
          "doing random jobs is a way to make money",
          "gardening will surely be profitable in the US",
        ].map((text, index) => (
          <div key={index} className="flex items-start">
            <div className="w-6 h-6 flex items-center justify-center mr-4 font-bold">
              {["①", "②", "③", "④"][index]}
            </div>
            <div className="flex-1">{text}</div>
          </div>
        ))}
      </div>

      <div className="flex mt-6">
        <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
          Jenna:
        </div>
        <div className="flex-1 leading-6 md:leading-8">
          Yeah. I think that it could work in Japan, too.
          {Kaisetsu(showResults, "20-3B-6")}
        </div>
      </div>

      <div className="space-y-6 mt-8 mb-8">
        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Rudy:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            Here, many students do part-time jobs for local businesses. They
            might work at a restaurant or convenience store. Odd jobs are
            different. You're more like a kind of helper. It's a casual style of
            working. You get paid directly by the people you help, not a
            company. And you can decide which jobs you want to do.
            {Kaisetsu(showResults, "20-3B-7")}
          </div>
        </div>

        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Maya:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            But isn't it dangerous? Usually, people are unwilling to enter a
            house of someone they don't know. And what happens if you don't get
            paid? How can you get the money you earned?
            {Kaisetsu(showResults, "20-3B-8")}
          </div>
        </div>

        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Rudy:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            Not all jobs are inside the house. You can choose the kind of work
            that you're comfortable with. In my experience, I never got cheated.
            Basically, we work for people in our own community, so we sort of
            know them. Often, they are older people who have lived in the
            neighborhood a long time. And I always got paid in cash, so I was
            excited to have money to spend.
            {Kaisetsu(showResults, "20-3B-9")}
          </div>
        </div>

        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Teresa:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            There are a lot of seniors in our community. I'm sure they'd be
            happy to have someone do the heavy lifting, or even just to see a
            friendly face around. I really doubt that they would take advantage
            of us. In general, don't you think most people are honest and kind?
            {Kaisetsu(showResults, "20-3B-10")}
          </div>
        </div>

        <div
          className={cn(
            "flex md:items-center",
            showResults && qaFormat(qa, "3B-2")
          )}
        >
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Akira:
          </div>
          <div className="flex-1 flex-wrap flex items-center leading-6 md:leading-8">
            <span className="mr-2">It sounds like we shouldn't be too</span>
            <span className="mr-2">worried because</span>
            {renderSelect("31", 4, answers, setAnswers)}
            <span className="mr-3"></span>
            <Explain qa={qa} questionId="3B-2"  isShow={showResults} />
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "20-3B-11")}
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-8 pl-8">
        {[
          "elderly people would feel uneasy about our work",
          "it's embarrassing to ask our neighbors for work",
          "there's little risk in working within our community",
          "we can be safe if we work for a company in town",
        ].map((text, index) => (
          <div key={index} className="flex items-start">
            <div className="w-8 h-8 flex items-center justify-center mr-4 font-bold">
              {["①", "②", "③", "④"][index]}
            </div>
            <div className="flex-1">{text}</div>
          </div>
        ))}
      </div>

      <div className="space-y-6 mt-8 mb-8">
        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Dan:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            Is it OK to get paid for volunteer work? Shouldn't we work for
            elderly people out of the goodness of our hearts? I think helping
            people is its own reward.
            {Kaisetsu(showResults, "20-3B-12")}
          </div>
        </div>

        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Kana:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            If we explain our purpose clearly from the beginning, to raise money
            for the charity, I think people will be glad to help us. And it's
            not like we're charging 5,000 yen per hour. Why don't we suggest 500
            yen per hour? It's a lot more reasonable than asking some company to
            do the job.
            {Kaisetsu(showResults, "20-3B-13")}
          </div>
        </div>

        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Maya:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            Don't you have to pay any taxes? What happens if the government
            finds out?
            {Kaisetsu(showResults, "20-3B-14")}
          </div>
        </div>

        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Jenna:
          </div>
          <div className="flex-1 leading-6 md:leading-8">
            I don't think we're breaking any laws. That's the way it works in
            the US, anyway. Just to be on the safe side, though, let's ask
            someone at the city tax office.
            {Kaisetsu(showResults, "20-3B-15")}
          </div>
        </div>

        <div className={cn("flex", showResults && qaFormat(qa, "3B-3"))}>
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Akira:
          </div>
          <div className="flex-1 flex flex-wrap items-center leading-6 md:leading-8">
            <span>
              OK, thanks for all of your great ideas. I think we made a lot of
              progress. According to the suggestions made
            </span>
            <span>today, it looks like our next step is to</span>
            {renderSelect("32", 4, answers, setAnswers)}
            <span className="mr-2">. Right?</span>
            <Explain qa={qa} questionId="3B-3"  isShow={showResults} />
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "20-3B-16")}
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-8 pl-8">
        {[
          "consider being totally honest with each other",
          "look for part-time jobs that have high wages",
          "provide useful services for free to neighbors",
          "think of a plan that works for our local area",
        ].map((text, index) => (
          <div key={index} className="flex items-start">
            <div className="w-8 h-8 flex items-center justify-center mr-4 font-bold">
              {["①", "②", "③", "④"][index]}
            </div>
            <div className="flex-1">{text}</div>
          </div>
        ))}
      </div>

      <div className="flex mt-6">
        <div className="w-20">Jenna:</div>
        <div className="flex-1">Sounds good.</div>
      </div>
    </div>
  );
};

export default JapaneseTestQuestion;
