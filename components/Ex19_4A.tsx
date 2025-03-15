"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex19_4A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "4A-1",
      qa: [
        {
          questionNumber: "33",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [],
    },
    {
      questionId: "4A-2",
      qa: [
        {
          questionNumber: "34",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [],
    },
    {
      questionId: "4A-3",
      qa: [
        {
          questionNumber: "35",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [],
    },
    {
      questionId: "4A-4",
      qa: [
        {
          questionNumber: "36",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第４問"}</h1>
          <span className="text-gray-600">(配点 {16})</span>
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
      {/* Question Number and Points */}
      <div className="mb-6">
        <h2 className="text-lg mb-4">
          第4問 次の問い(A・B)に答えよ。(配点 40)
        </h2>
      </div>
      {/* Section A */}
      <div className="mb-8">
        <p className="mb-4 gap-1 leading-relaxed">
          A
          次の文章はある説明文の一部である。この文章と表を読み、下の問い(問1～4)の
          <span className="inline-block px-4 border border-black">33</span>～
          <span className="inline-block px-4 border border-black">36</span>
          に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
        </p>
      </div>
      {/* Main Text */}
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          Art may reflect the ways people lived. Researchers have discussed how
          art portrays clothing and social settings. One study was conducted to
          determine if this idea could be extended to paintings featuring family
          meals. The results of this study might help illustrate why certain
          kinds of foods were painted.
          {Kaisetsu(showResults, "19-4A-1")}
        </p>

        <p>
          The researchers examined 140 paintings of family meals painted from
          the years 1500 to 2000. These came from five countries: the United
          States, France, Germany, Italy, and the Netherlands. The researchers
          examined each painting for the presence of 91 foods, with absence
          coded as 0 and presence coded as 1. For example, when one or more
          onions appeared in a painting, the researchers coded it as 1. Then
          they calculated the percentage of the paintings from these countries
          that included each food.
          {Kaisetsu(showResults, "19-4A-2")}
        </p>

        <p>
          Table 1 shows the percentage of paintings with selected foods. The
          researchers discussed several findings. First, some paintings from
          these countries included foods the researchers had expected. Shellfish
          were most common in the Netherlands&apos; (Dutch) paintings, which was
          anticipated as nearly half of its border touches the sea. Second, some
          paintings did not include foods the researchers had expected.
          Shellfish and fish each appeared in less than 12% of the paintings
          from the United States, France, and Italy although large portions of
          these countries border oceans or seas. Chicken, a common food, seldom
          appeared in the paintings. Third, some paintings included foods the
          researchers had not expected. For example, among German paintings, 20%
          of them included shellfish although only 6% of the country touches the
          sea. Also, lemons were most common in paintings from the Netherlands,
          even though they do not grow there naturally.
          {Kaisetsu(showResults, "19-4A-3")}
        </p>
      </div>
      {/* Table 1 */}
      <div className="my-8">
        <h3 className="mb-2">Table 1</h3>
        <p className="italic mb-4">
          The Frequency of Selected Foods Shown in Paintings by Percentage
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-t border-b">
                <th className="py-2 px-4 text-left">Item</th>
                <th className="py-2 px-4 text-left">USA</th>
                <th className="py-2 px-4 text-left">France</th>
                <th className="py-2 px-4 text-left">Germany</th>
                <th className="py-2 px-4 text-left">Italy</th>
                <th className="py-2 px-4 text-left">The Netherlands</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Apples", "41.67", "35.29", "25.00", "36.00", "8.11"],
                ["Bread", "29.17", "29.41", "40.00", "40.00", "62.16"],
                ["Cheese", "12.50", "5.88", "5.00", "24.00", "13.51"],
                ["Chicken", "0.00", "0.00", "0.00", "4.00", "2.70"],
                ["Fish", "0.00", "11.76", "10.00", "4.00", "13.51"],
                ["Lemons", "29.17", "20.59", "30.00", "16.00", "51.35"],
                ["Onions", "0.00", "0.00", "5.00", "20.00", "0.00"],
                ["Shellfish", "4.17", "11.11", "20.00", "4.00", "56.76"],
              ].map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{row[0]}</td>
                  <td className="py-2 px-4">{row[1]}</td>
                  <td className="py-2 px-4">{row[2]}</td>
                  <td className="py-2 px-4">{row[3]}</td>
                  <td className="py-2 px-4">{row[4]}</td>
                  <td className="py-2 px-4">{row[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Additional Text */}
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          Comparing these results with previous research, the researchers
          concluded that food art does not necessarily portray actual life. The
          researchers offered some explanations for this. One explanation is
          that artists painted some foods to express their interest in the
          larger world. Another is that painters wanted to show their technique
          by painting more challenging foods. For example, the complexity of a
          lemon&apos;s surface and interior might explain its popularity,
          especially among Dutch artists. As other interpretations are possible,
          it is necessary to examine the paintings from different perspectives.
          These are the period in which the paintings were completed and the
          cultural associations of foods. Both issues will be taken up in the
          following sections.
          {Kaisetsu(showResults, "19-4A-4")}
        </p>

        <p className="text-sm mt-4">
          (Brian Wansink 他(2016){" "}
          <span className="italic">
            Food Art Does Not Reflect Reality: A Quantitative Content Analysis
            of Meals in Popular Paintings
          </span>{" "}
          の一部を参考に作成)
        </p>
      </div>
      {/* Questions Section */}
      <div className="mt-8 space-y-8">
        {/* Question 1 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4A-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>
              For the category &quot;Apples&quot; in this research, a painting
              with two whole apples and one apple cut in half would be labeled
              as{" "}
            </span>
            {renderSelect("33", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4A-1" />}
          </div>
          <div className="space-y-2 ml-8">
            <p>① 0</p>
            <p>② 1</p>
            <p>③ 2</p>
            <p>④ 3</p>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4A-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>According to Table 1, the paintings from </span>
            {renderSelect("34", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4A-2" />}
          </div>
          <div className="space-y-2 ml-8">
            <p>
              ① France included apples at a lower percentage than the German
              ones
            </p>
            <p>
              ② France included cheese at a higher percentage than the Dutch
              ones
            </p>
            <p>
              ③ Italy included bread at a lower percentage than the American
              ones
            </p>
            <p>
              ④ Italy included onions at a higher percentage than the German
              ones
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4A-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>According to the passage and Table 1, </span>
            {renderSelect("35", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4A-3" />}
          </div>
          <div className="space-y-2 ml-8">
            <p>
              ① chicken frequently appeared in the American paintings because
              people there often ate chicken
            </p>
            <p>
              ② fish appeared in less than one tenth of the Italian paintings
              though much of Italy lies next to seas
            </p>
            <p>
              ③ lemons appeared in more than half of the Dutch paintings as they
              are native to the Netherlands
            </p>
            <p>
              ④ shellfish appeared in half of the paintings from each of the
              five countries because they touch seas
            </p>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4A-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span>According to the passage, foods in these paintings can </span>
            {renderSelect("36", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4A-4" />}
          </div>
          <div className="space-y-2 ml-8">
            <p>① demonstrate the painters&apos; knowledge of history</p>
            <p>
              ② display the painters&apos; desire to stay in their countries
            </p>
            <p>③ indicate the painters&apos; artistic skills and abilities</p>
            <p>④ reflect the painters&apos; love of their local foods</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex19_4A;
