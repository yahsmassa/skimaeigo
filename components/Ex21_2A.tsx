"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { Card, cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex21_2A = () => {
  const scores = [
    {
      band: "Green Forest",
      performance: 3.9,
      singing: 4.6,
      originality: 5.0,
      total: 13.5,
    },
    {
      band: "Silent Hill",
      performance: 4.9,
      singing: 4.4,
      originality: 4.2,
      total: 13.5,
    },
    {
      band: "Mountain Pear",
      performance: 3.9,
      singing: 4.9,
      originality: 4.7,
      total: 13.5,
    },
    {
      band: "Thousand Ants",
      performance: "did not perform",
      singing: "-",
      originality: "-",
      total: "-",
    },
  ];

  const comments = [
    {
      judge: "Mr Hobbs",
      comment:
        "Silent Hill are great performers and they really seemed connected with the audience. Mountain Pear's singing was great. I loved Green Forest's original song. It was amazing!",
    },
    {
      judge: "Ms Leigh",
      comment:
        "Silent Hill gave a great performance. It was incredible how the audience responded to their music. I really think that Silent Hill will become popular! Mountain Pear have great voices, but they were not exciting on stage. Green Forest performed a fantastic new song, but I think they need to practice more.",
    },
    {
      judge: "Ms Wells",
      comment:
        "Green Forest have a new song. I loved it! I think it could be a big hit!",
    },
  ];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "21_2A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 A"}</h1>
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
      <div className="text-sm md:text-base mb-6">
        As the student in charge of a UK school festival band competition, you
        are examining all of the scores and the comments from three judges to
        understand and explain the rankings.
        {Kaisetsu(showResults, "21-2A-0")}
      </div>

      <Card className="border-black mb-4">
        <div className="text-center font-medium p-2 border-b border-black">
          Judges&apos; final average scores
        </div>
        <table className="w-full">
          <thead className="text-[11px] md:text-base">
            <tr className="border-b border-black">
              <th className="text-left p-2 border-r border-black">
                Band names
              </th>
              <th className="p-2 border-r border-black">
                <div className="flex flex-wrap justify-center">
                  <span className="">Perfo</span>
                  <span className="">rmance</span>
                </div>
                (5.0)
              </th>
              <th className="p-2 border-r border-black">
                Singing
                <br />
                (5.0)
              </th>
              <th className="p-2 border-r border-black">
                Song originality
                <br />
                (5.0)
              </th>
              <th className="p-2">
                Total
                <br />
                (15.0)
              </th>
            </tr>
          </thead>
          <tbody className="text-[12px] md:text-base">
            {scores.map((score, index) => (
              <tr
                key={score.band}
                className={
                  index < scores.length - 1 ? "border-b border-black" : ""
                }
              >
                <td className="p-2 border-r border-black">{score.band}</td>
                <td className="p-2 text-center border-r border-black font-sans">
                  {score.performance === "did not perform" ? (
                    <span className="col-span-4">(did not perform)</span>
                  ) : (
                    score.performance
                  )}
                </td>
                <td className="p-2 text-center border-r border-black font-sans">
                  {score.performance === "did not perform" ? "" : score.singing}
                </td>
                <td className="p-2 text-center border-r border-black font-sans">
                  {score.performance === "did not perform"
                    ? ""
                    : score.originality}
                </td>
                <td className="p-2 text-center font-sans">
                  {score.performance === "did not perform" ? "" : score.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card className="border-black mb-4">
        <div className="text-center font-medium p-2 border-b border-black">
          Judges&apos; individual comments
        </div>
        <table className="w-full">
          <tbody>
            {comments.map((item, index) => (
              <tr
                key={item.judge}
                className={
                  index < comments.length - 1 ? "border-b border-black" : ""
                }
              >
                <td className="p-2 border-r border-black align-top w-32">
                  {item.judge}
                </td>
                <td className="p-2">
                  {item.comment}{" "}
                  {Kaisetsu(showResults, "21-2A-" + String(index + 1))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Card className="border-black">
        <div className="text-center font-medium p-2 border-b border-black">
          Judges&apos; shared evaluation (summarised by Mr Hobbs)
        </div>
        <div className="p-4 space-y-4">
          <p className="indent-7">
            Each band&apos;s total score is the same, but each band is very
            different. Ms Leigh and I agreed that performance is the most
            important quality for a band. Ms Wells also agreed. Therefore, first
            place is easily determined.
            {Kaisetsu(showResults, "21-2A-4")}
          </p>
          <p className="indent-7">
            To decide between second and third places, Ms Wells suggested that
            song originality should be more important than good singing. Ms
            Leigh and I agreed on this opinion.
            {Kaisetsu(showResults, "21-2A-5")}
          </p>
        </div>
      </Card>

      <div className="space-y-6">
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2A-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>
              Based on the judges&apos; final average scores, which band sang
              the best?
            </span>
            {renderSelect("6", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2A-1" />}
            {Kaisetsu(showResults, "21-2A-6")}
          </div>
          <div>
            {[
              "Green Forest",
              "Mountain Pear",
              "Silent Hill",
              "Thousand Ants",
            ].map((text, index) => (
              <div key={index} className="flex items-start pl-2 md:pl-8">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2A-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>Which judge gave both positive and critical comments?</span>
            {renderSelect("7", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2A-2" />}
            {Kaisetsu(showResults, "21-2A-7")}
          </div>
          <div className="pl-2 md:pl-8 space-y-1">
            {["Mr Hobbs", "Ms Leigh", "Ms Wells", "None of them"].map(
              (text, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center mr-2">
                    {"①②③④⑤⑥"[index]}
                  </span>
                  <span>{text}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2A-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              One <span className="underline">fact</span> from the judges&apos;
              individual comments is that
            </span>
            {renderSelect("8", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2A-3" />}
            {Kaisetsu(showResults, "21-2A-8")}
          </div>
          <div className="pl-2 md:pl-8 space-y-1">
            {[
              "all the judges praised Green Forest's song",
              "Green Forest need to practice more",
              "Mountain Pear can sing very well",
              "Silent Hill have a promising future",
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

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2A-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>
              One <span className="underline">opinion</span> from the
              judges&apos; comments and shared evaluation is that
            </span>
            {renderSelect("9", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2A-4" />}
            {Kaisetsu(showResults, "21-2A-9")}
          </div>
          <div className="pl-2 md:pl-8 space-y-1">
            {[
              "each evaluated band received the same total score",
              "Ms Wells' suggestion about originality was agreed on",
              "Silent Hill really connected with the audience",
              "the judges' comments determined the rankings",
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

        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "2A-5"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
            <span>
              Which of the following is the final ranking based on the
              judges&apos; shared evaluation?
            </span>
            {renderSelect("10", 6, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2A-5" />}
            {Kaisetsu(showResults, "21-2A-10")}
          </div>
          <div className="pl-8">
            <table className="w-full max-w-xl">
              <thead>
                <tr className="border-b border-gray-300">
                  <th></th>
                  <th className="px-4 py-2 text-left">
                    1<sup>st</sup>
                  </th>
                  <th className="px-4 py-2 text-left">
                    2<sup>nd</sup>
                  </th>
                  <th className="px-4 py-2 text-left">
                    3<sup>rd</sup>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>①</td>
                  <td className="px-4 py-2">Green Forest</td>
                  <td className="px-4 py-2">Mountain Pear</td>
                  <td className="px-4 py-2">Silent Hill</td>
                </tr>
                <tr>
                  <td>②</td>
                  <td className="px-4 py-2">Green Forest</td>
                  <td className="px-4 py-2">Silent Hill</td>
                  <td className="px-4 py-2">Mountain Pear</td>
                </tr>
                <tr>
                  <td>③</td>
                  <td className="px-4 py-2">Mountain Pear</td>
                  <td className="px-4 py-2">Green Forest</td>
                  <td className="px-4 py-2">Silent Hill</td>
                </tr>
                <tr>
                  <td>④</td>
                  <td className="px-4 py-2">Mountain Pear</td>
                  <td className="px-4 py-2">Silent Hill</td>
                  <td className="px-4 py-2">Green Forest</td>
                </tr>
                <tr>
                  <td>⑤</td>
                  <td className="px-4 py-2">Silent Hill</td>
                  <td className="px-4 py-2">Green Forest</td>
                  <td className="px-4 py-2">Mountain Pear</td>
                </tr>
                <tr>
                  <td>⑥</td>
                  <td className="px-4 py-2">Silent Hill</td>
                  <td className="px-4 py-2">Mountain Pear</td>
                  <td className="px-4 py-2">Green Forest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex21_2A;
