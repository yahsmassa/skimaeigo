"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex21_2B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "21_2B")?.qanda || [];
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
            <span className="whitespace-nowrap mr-2 font-sans">問1</span>
            <span>Ken thinks the new policy</span>{" "}
            {renderSelect("11", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-1" />}
            {Kaisetsu(showResults, "21-2B-5")}
          </div>
          <div>
            <div className="list-none pl-2 md:pl-6 space-y-1">
              {[
                "can make students study more",
                "may improve school safety",
                "should be introduced immediately",
                "will reduce after-school activity time",
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

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2B-2"))}>
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2 font-sans">問2</span>
            <span>
              One <span className="underline">fact</span> stated in Ken&apos;s
              forum post is that{" "}
            </span>
            {renderSelect("12", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-2" />}
            {Kaisetsu(showResults, "21-2B-6")}
          </div>
          <div>
            <div className="pl-2 md:pl-6 space-y-1">
              {[
                "more discussion is needed about the policy",
                "the Head Teacher's experience is improving the school",
                "the school should think about students' activities",
                "there are students who do not welcome the new policy",
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center mr-2">
                    {"①②③④⑤⑥"[index]}
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2B-3"))}>
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2 font-sans">問3</span>
            <span>Who thinks the aim of the policy is to save energy? </span>
            {renderSelect("13", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-3" />}
            {Kaisetsu(showResults, "21-2B-7")}
          </div>
          <div>
            <div className="pl-2 md:pl-6 space-y-1">
              {["Dr Berger", "Ken", "The city", "The police"].map(
                (text, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-6 h-6 flex items-center mr-2">
                      {"①②③④⑤⑥"[index]}
                    </span>
                    <span>{text}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2B-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問4</span>
            <span> Dr Berger is basing his new policy on the </span>
            <span className="underline">fact</span>
            <span> that</span>
            {renderSelect("14", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-4" />}
            {Kaisetsu(showResults, "21-2B-8")}
          </div>
          <div className="pl-2 md:pl-6 space-y-1">
            {[
              "going home early is important",
              "safety in the city has decreased",
              "the school has to save electricity",
              "the students need protection",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2B-5"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問5</span>
            <span>
              What would you research to help Ken oppose the new policy?{" "}
            </span>
            {renderSelect("15", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-5" />}
            {Kaisetsu(showResults, "21-2B-9")}
          </div>
          <div className="pl-2 md:pl-6 space-y-1">
            {[
              "The crime rate and its relation to the local area",
              "The energy budget and electricity costs of the school",
              "The length of school activity time versus the budget",
              "The study hours for students who do after-school activities",
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
    </div>
  );
};

export default Ex21_2B;
