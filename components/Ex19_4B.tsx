"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex19_4B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "4B-1",
      qa: [
        {
          questionNumber: "37",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      points: 5,
      explanation: [
        "正解は③ 500年以上の歴史",
        "Crestvale Castle: 13世紀の城、Holmsted Castle: 12世紀の城、King&apos;s Castle: 11世紀の城、Rosebush Castle: 15世紀の城",
      ],
    },
    {
      questionId: "4B-2",
      qa: [
        {
          questionNumber: "38",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      points: 5,
      explanation: [
        "正解は② Holmsted Castle",
        "広々とした空間が、公演に適していると書いてある、* suitable for: ～に適している",
      ],
    },
    {
      questionId: "4B-3",
      qa: [
        {
          questionNumber: "39",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      points: 5,
      explanation: [
        "正解は② Crestvale CastleとKing's Castle",
        "土曜日にガイドから歴史説明を聞けるのは二つ、Resebushは月ー金のみ営業",
        "Historyという単語がないのでKing's Casleを外しそうになるが、営業日がポイントになっている",
      ],
    },
    {
      questionId: "4B-4",
      qa: [
        {
          questionNumber: "40",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      points: 5,
      explanation: [
        "正解は② 17ユーロ",
        "see fine arts、９月、大人２、子供１（５歳より小さい子供は無料）から、King's Castleで計算 7x2 + 3 で１７",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2 font-sans">
          <h1 className="text-lg font-bold">{"第４問"}</h1>
          <span className="text-gray-600">(配点 {20})</span>
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
      <div className="mb-24">
        {/* Quiz Questions */}
        <div className="mb-6 font-sans">
          <p className="mb-4">
            <span className="font-bold mr-2">B</span>
            次のページの、ある地域の城に関する案内を読み、次の問い(問1～4)の
            <span className="mx-2 border border-black px-2">37</span>～
            <span className="border border-black px-2">40</span>
            に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
          </p>
        </div>

        {/* Question 1 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4B-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>What is a common characteristic of all four castles?</span>
            {renderSelect("37", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4B-1" />}
            {Kaisetsu(showResults, "19-4B-1")}
          </div>
          <ol className="list-none pl-8">
            <li>① Amount of damage</li>
            <li>② Displays of pictures and weapons</li>
            <li>③ Histories of more than 500 years</li>
            <li>④ Purposes of construction</li>
          </ol>
        </div>

        {/* Question 2 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4B-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              Three guitar club members from Grandlefolk University want to give
              a concert one afternoon in April. Which castle are they most
              likely to choose?
            </span>
            {renderSelect("38", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4B-2" />}
            {Kaisetsu(showResults, "19-4B-2")}
          </div>
          <ol className="list-none pl-8">
            <li>① Crestvale Castle</li>
            <li>② Holmsted Castle</li>
            <li>③ King&apos;s Castle</li>
            <li>④ Rosebush Castle</li>
          </ol>
        </div>

        {/* Question 3 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4B-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              Teachers at one school want to take their students to Grandlefolk
              one Saturday in May. The purpose is to expand the students&apos;
              knowledge of the area&apos;s history by visiting castles and
              listening to explanations from the castle staff. Which two castles
              are the teachers most likely to select?
            </span>
            {renderSelect("39", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4B-3" />}
            {Kaisetsu(showResults, "19-4B-3")}
          </div>

          <ol className="list-none pl-8">
            <li>① Crestvale Castle and Holmsted Castle</li>
            <li>② Crestvale Castle and King&apos;s Castle</li>
            <li>③ Rosebush Castle and Holmsted Castle</li>
            <li>④ Rosebush Castle and King&apos;s Castle</li>
          </ol>
        </div>

        {/* Question 4 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4B-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>
              A mother, father, and their two children, ages 4 and 8, will visit
              one of the castles in Grandlefolk for one day in September and
              want to see fine arts. How much will it cost?
            </span>
            {renderSelect("40", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4B-4" />}
            {Kaisetsu(showResults, "19-4B-4")}
          </div>
          <ol className="list-none pl-8">
            <li>① €14</li>
            <li>② €17</li>
            <li>③ €20</li>
            <li>④ €25</li>
          </ol>
        </div>
      </div>

      {/* Castle Information Section */}
      <div>
        <h2 className="text-center text-xl mb-8">Castles in Grandlefolk</h2>

        {/* Crestvale Castle */}
        <div className="mb-8">
          <h3 className="font-bold mb-2 border-b border-black inline-block">
            Crestvale Castle
          </h3>
          <p className="mb-4">
            This ruined 13th-century castle, built to defend the northern border
            of Grandlefolk, is currently being studied by researchers. During
            the open season, except on Sundays, guides explain what the research
            is revealing about local history.
            {Kaisetsu(showResults, "19-4B-5")}
          </p>
        </div>

        {/* Holmsted Castle */}
        <div className="mb-8">
          <h3 className="font-bold mb-2 border-b border-black inline-block">
            Holmsted Castle
          </h3>
          <p className="mb-4">
            Holmsted Castle, built in the 12th century to protect the southern
            border area, fell into ruin in the 16th century. At the entrance,
            signboards explain its history. This castle&apos;s open spaces are
            suitable for performances.
            {Kaisetsu(showResults, "19-4B-6")}
          </p>
        </div>

        {/* King's Castle */}
        <div className="mb-8">
          <h3 className="font-bold mb-2 border-b border-black inline-block">
            King&apos;s Castle
          </h3>
          <p className="mb-4">
            Dating back to the 11th century, King&apos;s Castle is one of the
            grandest in the country. Its large collection of paintings and
            furniture provide a look at the area&apos;s past. Guides are
            available every day.
            {Kaisetsu(showResults, "19-4B-7")}
          </p>
        </div>

        {/* Rosebush Castle */}
        <div className="mb-8">
          <h3 className="font-bold mb-2 border-b border-black inline-block">
            Rosebush Castle
          </h3>
          <p className="mb-4">
            Though called a castle, this perfectly preserved 15th-century
            building was constructed purely as a family home. From Mondays to
            Fridays, guides tell the story of the family&apos;s history and
            explain their collection of modern sculptures. Some of its rooms are
            available for public events.
            {Kaisetsu(showResults, "19-4B-8")}
          </p>
        </div>

        {/* Admission Table */}
        <table className="w-full border-collapse border border-gray-800 mt-8">
          <thead>
            <tr>
              <th className="border border-gray-800 p-2"></th>
              <th
                className="border border-gray-800 p-2 text-center"
                colSpan={2}
              >
                Opening Times
              </th>
              <th
                className="border border-gray-800 p-2 text-center"
                colSpan={2}
              >
                Daily Admission
              </th>
            </tr>
            <tr>
              <th className="border border-gray-800 p-2"></th>
              <th className="border border-gray-800 p-2">Months</th>
              <th className="border border-gray-800 p-2">Hours</th>
              <th className="border border-gray-800 p-2">Adults</th>
              <th className="border border-gray-800 p-2">
                Children
                <br />
                (5-16 years old)*
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-800 p-2">Crestvale Castle</td>
              <td className="border border-gray-800 p-2">April - October</td>
              <td className="border border-gray-800 p-2 text-center">
                10:00 - 16:00
              </td>
              <td className="border border-gray-800 p-2 text-center">€3</td>
              <td className="border border-gray-800 p-2 text-center">€1</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-2">Holmsted Castle</td>
              <td className="border border-gray-800 p-2">April - September</td>
              <td className="border border-gray-800 p-2 text-center">
                10:00 - 17:00
              </td>
              <td className="border border-gray-800 p-2 text-center">€5</td>
              <td className="border border-gray-800 p-2 text-center">€2</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-2">King&apos;s Castle</td>
              <td className="border border-gray-800 p-2">April - November</td>
              <td className="border border-gray-800 p-2 text-center">
                10:00 - 18:00
              </td>
              <td className="border border-gray-800 p-2 text-center">€7</td>
              <td className="border border-gray-800 p-2 text-center">€3</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-2">Rosebush Castle</td>
              <td className="border border-gray-800 p-2">April - July</td>
              <td className="border border-gray-800 p-2 text-center">
                9:00 - 12:00
              </td>
              <td className="border border-gray-800 p-2 text-center">€10</td>
              <td className="border border-gray-800 p-2 text-center">€5</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-sm">
          *Children under 5 years old are admitted free of charge.
        </p>
      </div>
    </div>
  );
};

export default Ex19_4B;
