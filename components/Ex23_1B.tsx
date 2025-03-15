"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
const Ex23_1B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "1B-1",
      qa: [
        {
          questionNumber: "3",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "3つの情報をまとめる問題。",
        "正解は③「他の国々で働いた」",
        "FOREST の2文目 &quot;Your instructors have taught English ... in several countries.&quot;（あなたのインストラクターは20年以上の間いくつかの国で英語を教えてきました）， ",
        "MOUNTAIN の2文目 &quot;Instructors for this course have worked at theater schools in New York City.&quot;（このコースのインストラクターはニューヨーク市の演劇学校で働いてきました）， ",
        "SKY の2文目 &quot;Your instructors have been to many countries to coach debate teams&quot;（あなたのインストラクターは多くの国々を訪れてディベートチームをコーチしてきました）から，",
      ],
    },
    {
      questionId: "1B-2",
      qa: [
        {
          questionNumber: "4",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "3つの情報をまとめる問題。",
        "正解は④「キャンプで学んだことを見せる」",
        "FOREST の4文目 &quot;On the final day ... all the other campers listen.&quot;（キャンプの最終日に，あなたは他の全てのキャンパーが聴く中，スピーチコンテストに参加します）",
        "MOUNTAIN の4文目 &quot;You&apos;ll perform your skit ... on AUgust 14.&quot;（8月14日に全てのキャンパーが楽しめるようにあなたは自分のスキットを演じます）",
        "SKY の4文目 &quot;You&apos;ll do a short debate ... on the last day.&quot;（あなたは最終日に他の全てのキャンパーの前で短いディベートを行います）から",
      ],
    },
    {
      questionId: "1B-3",
      qa: [
        {
          questionNumber: "5",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解は③「あなたの英語のレベルがチェックされる」",
        "Step 2 の &quot;We'll contact you ... your course preference&quot;（あなたの英語の能力を査定し，あなたのコースの選択について尋ねるために面接を設定するため連絡します）から，",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第１問 B"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
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
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">
          You are a senior high school student interested in improving your
          English during the summer vacation. You find a website for an
          intensive English summer camp run by an international school.
          {Kaisetsu(showResults, "23-1B-0")}
        </p>
      </div>
      <div className="border border-gray-800 p-6">
        {/* Header with Logo and Description */}
        <div className="flex mb-6">
          <div className="w-1/3">
            <Image
              src="/images/Ex23-1B-1.jpg"
              alt="GIS Logo"
              width={150}
              height={150}
              className="mb-2"
            />
            <div className="text-sm">
              Intensive English
              <br />
              Summer Camp
            </div>
          </div>
          <div className="w-2/3 bg-white p-4 border border-gray-300">
            <p className="text-gray-700">
              Galley International School (GIS) has provided intensive English
              summer camps for senior high school students in Japan since 1989.
              Spend two weeks in an all-English environment!
              {Kaisetsu(showResults, "23-1B-1")}
            </p>
          </div>
        </div>

        {/* Basic Information */}
        <div className="space-y-2 mb-6">
          <p>
            <span className="font-bold">Dates:</span> August 1-14, 2023
          </p>
          <p>
            <span className="font-bold">Location:</span> Lake Kawaguchi Youth
            Lodge, Yamanashi Prefecture
          </p>
          <p>
            <span className="font-bold">Cost:</span> 120,000 yen, including food
            and accommodation (additional fees for optional activities such as
            kayaking and canoeing)
          </p>
          {Kaisetsu(showResults, "23-1B-2")}
        </div>

        {/* Courses Section */}
        <div>
          <h2 className="text-center font-bold text-xl mb-4">
            Courses Offered
          </h2>

          <div className="space-y-4">
            <div>
              <p className="font-bold">◆FOREST:</p>
              <p className="ml-4">
                You&apos;ll master basic grammar structures, make short speeches
                on simple topics, and get pronunciation tips. Your instructors
                have taught English for over 20 years in several countries. On
                the final day of the camp, you&apos;ll take part in a speech
                contest while all the other campers listen.
                {Kaisetsu(showResults, "23-1B-3")}
              </p>
            </div>

            <div>
              <p className="font-bold">◆MOUNTAIN:</p>
              <p className="ml-4">
                You&apos;ll work in a group to write and perform a skit in
                English. Instructors for this course have worked at theater
                schools in New York City, London, and Sydney. You&apos;ll
                perform your skit for all the campers to enjoy on August 14.
                {Kaisetsu(showResults, "23-1B-4")}
              </p>
            </div>

            <div>
              <p className="font-bold">◆SKY:</p>
              <p className="ml-4">
                You&apos;ll learn debating skills and critical thinking in this
                course. Your instructors have been to many countries to coach
                debate teams and some have published best-selling textbooks on
                the subject. You&apos;ll do a short debate in front of all the
                other campers on the last day. (Note: Only those with an
                advanced level of English will be accepted.)
                {Kaisetsu(showResults, "23-1B-5")}
              </p>
            </div>
          </div>
        </div>

        {/* Application Section */}
        <div className="mt-8">
          <h3 className="font-bold mb-2">▲Application</h3>
          <div className="space-y-2">
            <p>
              <span className="font-bold">Step 1:</span> Fill in the online
              application <span className="underline">HERE</span> by May 20,
              2023.
            </p>
            <p>
              <span className="font-bold">Step 2:</span> We&apos;ll contact you
              to set up an interview to assess your English ability and ask
              about your course preference.
            </p>
            <p>
              <span className="font-bold">Step 3:</span> You&apos;ll be assigned
              to a course.
            </p>
            {Kaisetsu(showResults, "23-1B-6")}
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-4 mb-8">— 6 —</div>
      {/* Questions Section */}
      <div className="space-y-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1B-1"))}>
          <div className="flex items-center flex-wrap mb-4 gap-2">
            <span className="whitespace-nowrap mr-1">問 1</span>
            <span>All GIS instructors have</span>
            {renderSelect("3", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="1B-1" />}
          </div>
          <ol className="list-none space-y-2">
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                1
              </span>
              <span>been in Japan since 1989</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                2
              </span>
              <span>won international competitions</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                3
              </span>
              <span>worked in other countries</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                4
              </span>
              <span>written some popular books</span>
            </li>
          </ol>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1B-2"))}>
          <div className="flex items-center flex-wrap mb-4 gap-2">
            <span className="whitespace-nowrap mr-1">問 2</span>
            <span>On the last day of the camp, campers will</span>
            {renderSelect("4", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="1B-2" />}
          </div>
          <ol className="list-none space-y-2">
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                1
              </span>
              <span>assess each other&apos;s performances</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                2
              </span>
              <span>compete to receive the best prize</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                3
              </span>
              <span>make presentations about the future</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                4
              </span>
              <span>show what they learned at the camp</span>
            </li>
          </ol>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1B-3"))}>
          <div className="flex items-center flex-wrap mb-4 gap-2">
            <span className="whitespace-nowrap mr-1">問 3</span>
            <span>
              What will happen after submitting your camp application?
            </span>
            {renderSelect("5", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="1B-3" />}
          </div>
          <ol className="list-none space-y-2">
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                1
              </span>
              <span>You will call the English instructors.</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                2
              </span>
              <span>You will take a written English test.</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                3
              </span>
              <span>Your English level will be checked.</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                4
              </span>
              <span>Your English speech topic will be sent.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex23_1B;
