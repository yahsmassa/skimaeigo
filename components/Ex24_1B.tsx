"use client";

import React, { useState } from "react";
import { QandA, Answers } from "@/lib/types";
import { exPageFormat, exQuestionFormat, cn } from "@/lib/util";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { qaFormat, renderSelect } from "@/lib/util";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex24_1B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const question: QandA[] = qanda.find(q => q.id === "24_1B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第１問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {6})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 4分 200単語強】
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
      </div>

      {/* Introduction */}
      <div className="text-base mb-2 px-3">
        <p className="text-justify">
          You are an exchange student in the US and next week your class will go
          on a day trip. The teacher has provided some information.
          {Kaisetsu(showResults, "24-1B-0")}
        </p>
      </div>

      {/* Tours Information Box */}
      <div className="border border-gray-300 p-4 space-y-4 text-justify">
        <h2 className="text-center text-xl font-semibold">
          Tours of Yentonville
        </h2>
        <p className="text-center">
          The Yentonville Tourist Office offers three city tours.
        </p>
        <hr className="border-gray-700" />
        {/* History Tour */}
        <div className="space-y-2">
          <h3 className="font-semibold text-center">The History Tour</h3>
          <div>
            <p className="-mb-1">
              <span className="float-right ml-3 mb-1 w-24 h-24">
                <Image
                  src="/images/Ex24-1B-1.jpg"
                  alt="Historic house illustration"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </span>
              The day will begin with a visit to St. Patrick&apos;s Church,
              which was built when the city was established in the mid-1800s.
              Opposite the church is the early-20th-century Mayor&apos;s House.
              There will be a tour of the house and its beautiful garden.
              Finally, cross the city by public bus and visit the Peace Park.
              Opened soon after World War II, it was the site of many
              demonstrations in the 1960s.
              {Kaisetsu(showResults, "24-1B-1")}
            </p>
            <div className="hidden md:block clear-both"></div>
          </div>
        </div>
        <hr className="border-gray-700" />
        {/* Arts Tour */}
        <div className="space-y-2">
          <h3 className="font-semibold text-center">The Arts Tour</h3>
          <div>
            <p className="-mb-1">
              <span className="float-right ml-3 mb-1 w-24 h-24">
                <Image
                  src="/images/Ex24-1B-2.jpg"
                  alt="Artist at easel illustration"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </span>
              The morning will be spent in the Yentonville Arts District. We
              will begin in the Art Gallery where there are many paintings from
              Europe and the US. After lunch, enjoy a concert across the street
              at the Bruton Concert Hall before walking a short distance to the
              Artists&apos; Avenue. This part of the district was developed
              several years ago when new artists&apos; studios and the nearby
              Sculpture Park were created. Watch artists at work in their
              studios and afterwards wander around the park, finding sculptures
              among the trees.
              {Kaisetsu(showResults, "24-1B-2")}
            </p>
            <div className="hidden md:block clear-both"></div>
          </div>
        </div>
        <hr className="border-gray-700" />
        {/* Sports Tour */}
        <div className="space-y-2">
          <h3 className="font-semibold text-center">The Sports Tour</h3>
          <div>
            <p className="-mb-1">
              <span className="float-right ml-3 mb-1 w-24 h-24">
                <Image
                  src="/images/Ex24-1B-3.jpg"
                  alt="Hockey player illustration"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </span>
              First thing in the morning, you can watch the Yentonville Lions
              football team training at their open-air facility in the suburbs.
              In the afternoon, travel by subway to the Yentonville Hockey
              Arena, completed last fall. Spend some time in its exhibition hall
              to learn about the arena&apos;s unique design. Finally, enjoy a
              professional hockey game in the arena.
              {Kaisetsu(showResults, "24-1B-3")}
            </p>
            <div className="hidden md:block clear-both"></div>
          </div>
        </div>
        <hr className="border-gray-700" />
        <p className="text-right text-sm text-gray-600">
          Yentonville Tourist Office, January, 2024
        </p>
      </div>

      {/* Questions */}
      <div className={cn(exQuestionFormat, "mt-6")}>
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "1B-1")
          )}
        >
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">
              問 1
            </span>
            <span className="-mr-2">Yentonville has</span>
            <div className="flex flex-row gap-2">
              {renderSelect("3", 4, answers, setAnswers)}
              <span className="-ml-3 mr-2">.</span>
              <Explain qa={qa} questionId={"1B-1"} isShow={showResults} />
              {Kaisetsu(showResults, "24-1B-4")}
            </div>
          </div>
          <ol className="list-none space-y-2 ml-6">
            {[
              "a church built 250 years ago when the city was constructed",
              "a unique football training facility in the center of the town",
              "an art studio where visitors can create original works of art",
              "an arts area with both an art gallery and a concert hall",
            ].map((option, optIndex) => (
              <li key={optIndex} className="flex items-start space-x-2">
                <span className="w-6 text-right">{"①②③④"[optIndex]}</span>
                <span>{option}</span>
              </li>
            ))}
          </ol>
        </div>

        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "1B-2")
          )}
        >
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">
              問 2
            </span>
            <span className="-mr-2">On all three tours, you will</span>
            <div className="flex flex-row gap-2">
              {renderSelect("4", 4, answers, setAnswers)}
              <span className="-ml-3 mr-2">.</span>
              <Explain qa={qa} questionId={"1B-2"} isShow={showResults} />
              {Kaisetsu(showResults, "24-1B-5")}
            </div>
          </div>
          <ol className="list-none space-y-2 ml-6">
            {[
              "learn about historic events in the city",
              "see people demonstrate their skills",
              "spend time both indoors and outdoors",
              "use public transportation to get around",
            ].map((option, optIndex) => (
              <li key={optIndex} className="flex items-start space-x-2">
                <span className="w-6 text-right">{"①②③④"[optIndex]}</span>
                <span>{option}</span>
              </li>
            ))}
          </ol>
        </div>

        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "1B-3")
          )}
        >
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">
              問 3
            </span>
            <span className="-mr-2">Which is the newest place in Yentonville you can visit on the tours?</span>
            <div className="flex flex-row gap-2">
              {renderSelect("5", 4, answers, setAnswers)}
              <Explain qa={qa} questionId={"1B-3"} isShow={showResults} />
              {Kaisetsu(showResults, "24-1B-6")}
            </div>
          </div>
          <ol className="list-none space-y-2 ml-6">
            {[
              "The Hockey Arena",
              "The Mayor's House",
              "The Peace Park",
              "The Sculpture Park",
            ].map((option, optIndex) => (
              <li key={optIndex} className="flex items-start space-x-2">
                <span className="w-6 text-right">{"①②③④"[optIndex]}</span>
                <span>{option}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex24_1B;
