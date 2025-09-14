"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

export default function Ex25_2() {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "25_2")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {12})</span>
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
      <div className="mb-2">
        <p className="text-gray-600 mb-4">
          Your teacher asks you to write a report about the future of
          transportation. To prepare, you read a blog written by a British
          author about the topic.
          {Kaisetsu(showResults, "25-2-1")}
        </p>
      </div>

      <article className="relative">
        <h1 className="text-2xl font-bold text-center italic mb-6">
          Flying Vehicles
        </h1>

        {/* Header information */}
        <div className="mb-8">
          <p className="mb-1">10 December 2024</p>
          <p className="mb-1 italic">Jonah Markowski</p>
          <p className="mb-4">Bristol, UK</p>

          {/* Flying vehicle illustration will be added as img */}
          <div className="absolute top-12 right-0 w-40">
            <Image
              src="/images/Ex25-2-1.jpg"
              alt="Flying vehicle illustration"
              width={192}
              height={192}
              className="w-full"
            />
          </div>
        </div>

        {/* Article content */}
        <div className="space-y-2">
          <p>
            Yesterday, I attended a forum in northern Japan called{" "}
            <span className="italic">Flying Vehicles: Today and Tomorrow</span>.
            Modern transportation problems and solutions were discussed by three
            guest speakers.
            {Kaisetsu(showResults, "25-2-2")}
          </p>

          <p>
            All the speakers agreed on three points. First, flying vehicles
            should be electrically powered in general. Air pollution can be
            reduced by increasing the use of zero-emission technologies. Second,
            emergency services would be improved. Flying ambulances would be
            faster in large cities with heavy traffic. Also, they would be
            better for servicing small towns far from hospitals. Finally, from a
            safety point of view, they said that flying technology would need to
            be well tested and controlled to avoid accidents in the air.
            {Kaisetsu(showResults, "25-2-3")}
          </p>

          <p>
            At the end of the forum, the speakers discussed flying taxis.
            According to one of the speakers, recent reports show that some
            countries are already developing this technology. A few of them are
            even testing flying taxi services in the middle of their major
            cities. Then, someone in the audience asked if flying taxis would
            soon be available around the world. Two of the speakers answered,
            &quot;Yes,&quot; but they disagreed about the timing. One of them
            said, &quot;In 5 years,&quot; and the other said, &quot;In 15
            years.&quot; The third speaker answered, &quot;No, because the
            operating costs of flying taxis are too high.&quot; I look forward
            to seeing which guest speaker&apos;s prediction turns out to be
            correct.
            {Kaisetsu(showResults, "25-2-4")}
          </p>

          <p className="mb-8">
            Next week&apos;s blog is about self-driving cars. It&apos;s going to
            be a fantastic post!
            {Kaisetsu(showResults, "25-2-5")}
          </p>
        </div>
      </article>

      {/* Questions Section */}
      <div className="mt-8 space-y-6">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span className="flex gap-1">
              Which of the following did all the guest speakers agree on?{" "}
            </span>
            {renderSelect("4", 4, answers, setAnswers)}<span className="-ml-3 mr-1">.</span>
            {showResults && <Explain qa={qa} questionId="2-1" />}
            {Kaisetsu(showResults, "25-2-6")}
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            <div>
              {[
                "Flying vehicles are widely accepted as being safe.",
                "Flying vehicles will improve responses to emergencies.",
                "Modern transportation problems are difficult to solve.",
                "Zero-emission technologies cannot be applied to flying vehicles.",
              ].map((text, index) => (
                <div key={index} className="flex gap-2">
                  <span className="inline-block w-6 h-6  text-center">
                    {"①②③④"[index]}
                  </span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span className="flex gap-1">Flying vehicles will most likely</span>
            {renderSelect("5", 4, answers, setAnswers)}<span className="-ml-3 mr-1">.</span>
            {showResults && <Explain qa={qa} questionId="2-2" />}
            {Kaisetsu(showResults, "25-2-7")}
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            {[
              "be used in small towns rather than large cities",
              "increase the number of traffic jams near hospitals",
              "prevent solutions to environmental problems",
              "require proper assessment and regulation",
            ].map((text, index) => (
              <div key={index} className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center">
                  {"①②③④"[index]}
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span className="flex gap-1">
              One guest speaker&apos;s{" "}
              <span className="border-b border-black">opinion</span> is that{" "}
            </span>
            {renderSelect("6", 4, answers, setAnswers)}<span className="-ml-3 mr-1">.</span>
            {showResults && <Explain qa={qa} questionId="2-3" />}
            {Kaisetsu(showResults, "25-2-8")}
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            {[
              "flying taxi centres will be based in rural areas",
              "flying taxi technology has already been tested",
              "flying taxis are already widespread",
              "flying taxis are too expensive to run",
            ].map((text, index) => (
              <div key={index} className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center">
                  {"①②③④"[index]}
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "2-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span className="flex gap-1">
              Which of the following is mentioned in the blog?{" "}
            </span>
            {renderSelect("7", 4, answers, setAnswers)}<span className="-ml-3 mr-1">.</span>
            {showResults && <Explain qa={qa} questionId="2-4" />}
            {Kaisetsu(showResults, "25-2-9")}
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            {[
              "Costs of flying ambulance services",
              "Flying transport using solar-power",
              "Parking areas for flying taxis",
              "Urban trials of flying taxi services",
            ].map((text, index) => (
              <div key={index} className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center">
                  {"①②③④"[index]}
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
