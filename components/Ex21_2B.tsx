"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
const Ex21_2B = () => {
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
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解①「放課後の時間を短くしてしまう」",
        "解説・・・Kenの投稿した文面に&quot;~ made the schedule an hour and a half shorter?&quot;とあるので、そこから判断する。Kenは、暗くなると光熱費がかかり、それを学校側が節約するために放課後の活動時間を短くしようとしていると考えているのである。",
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
        "正解④「新しい方針を歓迎していない生徒がいる」",
        "解説・・・Kenの投稿した文面の下から３行目に、&quot;A number of students told me that they want to stay at school until 6:00 as they have always done.&quot;「多くの生徒たちが、今まで通り６時まで学校に居たいと伝えてきた」とあるので、そこから判断できる。他の選択肢は、「もっと議論が必要だ」「校長の経験は学校を良くしている」「学校は生徒の活動を考えるべき」など、「意見」である。",
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
        "正解②Ken",
        "解説・・・方針を変更する理由として校長は「犯罪抑止」を挙げており、「エネルギーの節約」という理由はあくまでもKenの憶測である。実際には、校長は&quot;The new policy has nothing to do with saving energy 「その新しい方針はエネルギーの節約とは無関係だ」と述べている。",
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
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解②「街の安全が低下している」",
        "解説・・・校長の投稿した文面によると、&quot;our city has become less safe ~. I would like to protect our students&quot;「街が安全ではなくなってきている。生徒たちを守りたい」とある。つまり、校長は下校時間を早めることで生徒たちを犯罪から守ろうとして、方針を変更しようとしているのである。",
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
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解①「犯罪率および犯罪率と地元地域との関係」",
        "解説・・・Kenが校長に反論するには、犯罪率の低下が本当かどうかを調べればよい。もし「街の安全性の低下」という校長の主張が間違っていれば、新しい方針は導入されないはずである。budget（予算）やstudy hour（勉強時間）については、校長は一言も述べていないので、それについてリサーチしたところで新しい方針とは無関係である。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第２問 B"}</h1>
          <span className="text-gray-600">(配点 {10})</span>
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
      {/* Main content box */}
      <div className="mb-6">
        <p className="text-lg">
          You&apos;ve heard about a change in school policy at the school in the
          UK where you are now studying as an exchange student. You are reading
          the discussions about the policy in an online forum.
          {Kaisetsu(showResults, "21-2B-0")}
        </p>
      </div>
      <div className="bg-gray-100 p-6 border border-gray-300">
        {/* Introduction text */}

        {/* Letters container */}
        <div className="space-y-6">
          {/* First Letter */}
          <div className="bg-white shadow-md">
            <div className="border border-gray-200 p-8">
              <header className="mb-6">
                <h1 className="text-lg mb-4">
                  New School Policy &lt;Posted on 21 September 2020&gt;
                </h1>
                <div className="mb-4">
                  <p>To: P. E. Berger</p>
                  <p>From: K. Roberts</p>
                </div>
              </header>

              <main className="space-y-4">
                <p>Dear Dr Berger,</p>

                <p className="indent-8">
                  On behalf of all students, welcome to St Mark&apos;s School.
                  We heard that you are the first Head Teacher with a business
                  background, so we hope your experience will help our school.
                  {Kaisetsu(showResults, "21-2B-1")}
                </p>

                <p className="indent-8">
                  I would like to express one concern about the change you are
                  proposing to the after-school activity schedule. I realise
                  that saving energy is important and from now it will be
                  getting darker earlier. Is this why you have made the schedule
                  an hour and a half shorter? Students at St Mark&apos;s School
                  take both their studies and their after-school activities very
                  seriously. A number of students have told me that they want to
                  stay at school until 6:00 pm as they have always done.
                  Therefore, I would like to ask you to think again about this
                  sudden change in policy.
                  {Kaisetsu(showResults, "21-2B-2")}
                </p>

                <div className="mt-8">
                  <p>Regards,</p>
                  <p>Ken Roberts</p>
                  <p>Head Student</p>
                </div>
              </main>
            </div>
          </div>

          {/* Second Letter */}
          <div className="bg-white shadow-md">
            <div className="border border-gray-200 p-8">
              <header className="mb-6">
                <h1 className="text-lg mb-4">
                  Re: New School Policy &lt;Posted on 22 September 2020&gt;
                </h1>
                <div className="mb-4">
                  <p>To: K. Roberts</p>
                  <p>From: P. E. Berger</p>
                </div>
              </header>

              <main className="space-y-4">
                <p>Dear Ken,</p>

                <p className="indent-8">
                  Many thanks for your kind post. You&apos;ve expressed some
                  important concerns, especially about the energy costs and
                  student opinions on school activities.
                  {Kaisetsu(showResults, "21-2B-3")}
                </p>

                <p className="indent-8">
                  The new policy has nothing to do with saving energy. The
                  decision was made based on a 2019 police report. The report
                  showed that our city has become less safe due to a 5% increase
                  in serious crimes. I would like to protect our students, so I
                  would like them to return home before it gets dark.
                  {Kaisetsu(showResults, "21-2B-4")}
                </p>

                <div className="mt-8">
                  <p>Yours,</p>
                  <p>Dr P. E. Berger</p>
                  <p>Head Teacher</p>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Questions Section */}

      <div className="space-y-4 mt-5">
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2B-1"))}>
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2">問1</span>
            <span>Ken thinks the new policy</span>{" "}
            {renderSelect("11", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-1" />}
          </div>
          <div>
            <ol className="list-none pl-6 space-y-1">
              <li>① can make students study more</li>
              <li>② may improve school safety</li>
              <li>③ should be introduced immediately</li>
              <li>④ will reduce after-school activity time</li>
            </ol>
          </div>
        </div>

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2B-2"))}>
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2">問2</span>
            <span>
              One <span className="underline">fact</span> stated in Ken&apos;s
              forum post is that{" "}
            </span>
            {renderSelect("12", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-2" />}
          </div>
          <div>
            <ol className="list-none pl-6 space-y-1">
              <li>① more discussion is needed about the policy</li>
              <li>
                ② the Head Teacher&apos;s experience is improving the school
              </li>
              <li>③ the school should think about students&apos; activities</li>
              <li>④ there are students who do not welcome the new policy</li>
            </ol>
          </div>
        </div>

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2B-3"))}>
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2">問3</span>
            <span>Who thinks the aim of the policy is to save energy? </span>
            {renderSelect("13", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-3" />}
          </div>
          <div>
            <ol className="list-none pl-6 space-y-1">
              <li>① Dr Berger</li>
              <li>② Ken</li>
              <li>③ The city</li>
              <li>④ The police</li>
            </ol>
          </div>
        </div>

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2B-4"))}>
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2">問4</span>
            <span> Dr Berger is basing his new policy on the </span>
            <span className="underline">fact</span>
            {renderSelect("14", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-4" />}
          </div>
          <div>
            <ol className="list-none pl-6 space-y-1">
              <li>① going home early is important</li>
              <li>② safety in the city has decreased</li>
              <li>③ the school has to save electricity</li>
              <li>④ the students need protection</li>
            </ol>
          </div>
        </div>

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2B-5"))}>
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2">問5</span>
            <span>
              What would you research to help Ken oppose the new policy?{" "}
            </span>
            {renderSelect("15", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-5" />}
          </div>
          <div>
            <ol className="list-none pl-6 space-y-1">
              <li>① The crime rate and its relation to the local area</li>
              <li>② The energy budget and electricity costs of the school</li>
              <li>③ The length of school activity time versus the budget</li>
              <li>
                ④ The study hours for students who do after-school activities
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex21_2B;
