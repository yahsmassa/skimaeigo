"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex23_2B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "23_2B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {10})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 5分 約250単語】
          </span>

        </div>
        <Saiten
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>{" "}
      {/* Context Section */}
      <div className="mb-2 px-3">
        <p className="text-gray-700 text-justify">
          You are a member of the student
          council. The members have been discussing a student project helping
          students to use their time efficiently. To get ideas, you are reading
          a report about a school challenge. It was written by an exchange
          student who studied in another school in Japan.{' '}
          {Kaisetsu(showResults, "23-2B-0")}
        </p>
      </div>
      {/* Main Report */}
      <div className="border border-gray-800 p-8 text-justify">
        <h1 className="text-center text-xl mb-6 font-semibold">Commuting Challenge</h1>

        {/* Main Content */}
        <div className="mb-2 leading-relaxed">
          <p className="mb-2 indent-7">
            Most students come to my school by bus or train. I often see a lot
            of students playing games on their phones or chatting. However, they
            could also use this time for reading or doing homework. We started
            this activity to help students use their commuting time more
            effectively.
            Students had to complete a commuting activity chart from January
            17th to February 17th. A total of 300 students participated: More
            than two thirds of them were second-years; about a quarter were
            third-years; only 15 first-years participated. How come so few
            first-years participated? Based on the feedback (given below), there
            seems to be an answer to this question:{' '}
            {Kaisetsu(showResults, "23-2B-2")}
          </p>
        </div>

        {/* Feedback Section */}
        <div className="mt-4">
          <h2 className="font-bold underline mb-1">
            Feedback from participants
          </h2>
          <div className="space-y-1">
            <p className="pl-[1ch] -indent-[1ch]">
              <span className="font-bold">HS:</span> Thanks to this project, I
              got the highest score ever in an English vocabulary test. It was
              easy to set small goals to complete on my way.{' '}
              {Kaisetsu(showResults, "23-2B-3")}
            </p>
            <p className="pl-[1ch] -indent-[1ch]">
              <span className="font-bold">KF:</span> My friend was sad because
              she couldn&apos;t participate. She lives nearby and walks to
              school. There should have been other ways to take part.{' '}
              {Kaisetsu(showResults, "23-2B-4")}
            </p>
            <p className="pl-[1ch] -indent-[1ch]">
              <span className="font-bold">SS:</span> My train is always crowded
              and I have to stand, so there is no space to open a book or a
              tablet. I only used audio materials, but there were not nearly
              enough.{' '}
              {Kaisetsu(showResults, "23-2B-5")}
            </p>
            <p className="pl-[1ch] -indent-[1ch]">
              <span className="font-bold">JH:</span> I kept a study log, which
              made me realise how I used my time. For some reason most of my
              first-year classmates didn&apos;t seem to know about this
              challenge.
              {Kaisetsu(showResults, "23-2B-6")}
            </p>
            <p className="pl-[1ch] -indent-[1ch]">
              <span className="font-bold">MN:</span> I spent most of the time on
              the bus watching videos, and it helped me to understand classes
              better. I felt the time went very fast.{' '}
              {Kaisetsu(showResults, "23-2B-7")}
            </p>
          </div>
        </div>
      </div>
      {/* Questions Section */}
      <div className="mt-12 space-y-4">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-1"))}>
          <div className="flex items-center mb-4 mt-3 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>
              The aim of the Commuting Challenge was to help students to
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("11", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="2B-1" isShow={showResults} />
              {Kaisetsu(showResults, "23-2B-8")}
            </div>
          </div>
          <ol className="list-none space-y-1">
            {[
              "commute more quickly",
              "improve their test scores",
              "manage English classes better",
              "use their time better",
            ].map((answer, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{answer}</span>
              </div>
            ))}
          </ol>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-2"))}>
          <div className="flex items-center mb-4 mt-3 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              One <u>fact</u> about the Commuting Challenge is that
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("12", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="2B-2" isShow={showResults} />
              {Kaisetsu(showResults, "23-2B-9")}
            </div>
          </div>
          <ol className="list-none space-y-1">
            {[
              "fewer than 10% of the participants were first-years",
              "it was held for two months during the winter",
              "students had to use portable devices on buses",
              "the majority of participants travelled by train",
            ].map((answer, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{answer}</span>
              </div>
            ))}
          </ol>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2B-3"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>From the feedback,</span>
            {renderSelect("13", 4, answers, setAnswers)}
            <span className="mr-2">were activities reported by participants.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="2B-3" isShow={showResults} />
              {Kaisetsu(showResults, "23-2B-10")}
            </div>
          </div>
          <div className="mb-4 ml-4 space-y-1">
            <p>A : keeping study records</p>
            <p>B : learning language</p>
            <p>C : making notes on tablets</p>
            <p>D : reading lesson notes on mobile phones</p>
          </div>
          <ol className="list-none space-y-1 ml-4">
            {[
              "A and B",
              "A and C",
              "A and D",
              "B and C",
              "B and D",
              "C and D",
            ].map((answer, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{answer}</span>
              </div>
            ))}
          </ol>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "2B-4"))}>
          <div className="flex items-center mb-4  flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>
              One of the participants&apos; opinions about the Commuting
              Challenge is that
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("14", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="2B-4" isShow={showResults} />
              {Kaisetsu(showResults, "23-2B-11")}
            </div>
          </div>
          {[
            "it could have included students who walk to school",
            "the train was a good place to read books",
            "there were plenty of audio materials for studying",
            "watching videos for fun helped time pass quickly",
          ].map((answer, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{answer}</span>
            </div>
          ))}
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "2B-5"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
            <span>The author&apos;s question is answered by</span>
            <div className="flex flex-row gap-2">
              {renderSelect("15", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="2B-5" isShow={showResults} />
              {Kaisetsu(showResults, "23-2B-12")}
            </div>
          </div>
          {["HS", "JH", "KF", "MN", "SS"].map((answer, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{answer}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">— 12 —</div>
    </div>
  );
};

export default Ex23_2B;
