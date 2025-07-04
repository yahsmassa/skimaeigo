"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex23_1B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "23_1B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第１問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {6})</span>
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
            <span className="whitespace-nowrap mr-1 font-sans">問 1</span>
            <span>All GIS instructors have</span>
            {renderSelect("3", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="1B-1" />}
            {Kaisetsu(showResults, "23-1B-7")}
          </div>
          {[
            "been in Japan since 1989",
            "won international competitions",
            "worked in other countries",
            "written some popular books",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1B-2"))}>
          <div className="flex items-center flex-wrap mb-4 gap-2">
            <span className="whitespace-nowrap mr-1 font-sans">問 2</span>
            <span>On the last day of the camp, campers will</span>
            {renderSelect("4", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="1B-2" />}
            {Kaisetsu(showResults, "23-1B-8")}
          </div>
          {[
            "assess each other's performances",
            "compete to receive the best prize",
            "make presentations about the future",
            "show what they learned at the camp",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "1B-3"))}>
          <div className="flex items-center flex-wrap mb-4 gap-2">
            <span className="whitespace-nowrap mr-1 font-sans">問 3</span>
            <span>
              What will happen after submitting your camp application?
            </span>
            {renderSelect("5", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="1B-3" />}
            {Kaisetsu(showResults, "23-1B-9")}
          </div>
          {[
            "You will call the English instructors.",
            "You will take a written English test.",
            "Your English level will be checked.",
            "Your English speech topic will be sent.",
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
  );
};

export default Ex23_1B;
