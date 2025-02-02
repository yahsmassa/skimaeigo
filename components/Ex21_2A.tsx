import { Card } from "@/lib/util";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";

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
  const correctAnswerArray = [4, 2, 4];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第２問 A"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
        </div>
        <Saiten
          points={6}
          startQuestionNumber={1}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      <div className="text-sm mb-6">
        As the student in charge of a UK school festival band competition, you
        are examining all of the scores and the comments from three judges to
        understand and explain the rankings.
      </div>

      <Card className="border-black">
        <div className="text-center font-medium p-2 border-b border-black">
          Judges&apos; final average scores
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-black">
              <th className="text-left p-2 border-r border-black">
                Band names
              </th>
              <th className="p-2 border-r border-black">
                Performance
                <br />
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
          <tbody>
            {scores.map((score, index) => (
              <tr
                key={score.band}
                className={
                  index < scores.length - 1 ? "border-b border-black" : ""
                }
              >
                <td className="p-2 border-r border-black">{score.band}</td>
                <td className="p-2 text-center border-r border-black">
                  {score.performance === "did not perform" ? (
                    <span className="col-span-4">(did not perform)</span>
                  ) : (
                    score.performance
                  )}
                </td>
                <td className="p-2 text-center border-r border-black">
                  {score.performance === "did not perform" ? "" : score.singing}
                </td>
                <td className="p-2 text-center border-r border-black">
                  {score.performance === "did not perform"
                    ? ""
                    : score.originality}
                </td>
                <td className="p-2 text-center">
                  {score.performance === "did not perform" ? "" : score.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card className="border-black">
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
                <td className="p-2">{item.comment}</td>
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
          <p>
            Each band&apos;s total score is the same, but each band is very
            different. Ms Leigh and I agreed that performance is the most
            important quality for a band. Ms Wells also agreed. Therefore, first
            place is easily determined.
          </p>
          <p>
            To decide between second and third places, Ms Wells suggested that
            song originality should be more important than good singing. Ms
            Leigh and I agreed on this opinion.
          </p>
        </div>
      </Card>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-start gap-4">
            <span className="font-medium">問 1</span>
            <span>
              Based on the judges&apos; final average scores, which band sang
              the best?
            </span>
            <span className="border border-black px-3 py-1">6</span>
          </div>
          <div className="pl-8 space-y-1">
            <div>① Green Forest</div>
            <div>② Mountain Pear</div>
            <div>③ Silent Hill</div>
            <div>④ Thousand Ants</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-4">
            <span className="font-medium">問 2</span>
            <span>Which judge gave both positive and critical comments?</span>
            <span className="border border-black px-3 py-1">7</span>
          </div>
          <div className="pl-8 space-y-1">
            <div>① Mr Hobbs</div>
            <div>② Ms Leigh</div>
            <div>③ Ms Wells</div>
            <div>④ None of them</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-4">
            <span className="font-medium">問 3</span>
            <span>
              One <span className="underline">fact</span> from the judges&apos;
              individual comments is that
            </span>
            <span className="border border-black px-3 py-1">8</span>
            <span>.</span>
          </div>
          <div className="pl-8 space-y-1">
            <div>① all the judges praised Green Forest&apos;s song</div>
            <div>② Green Forest need to practice more</div>
            <div>③ Mountain Pear can sing very well</div>
            <div>④ Silent Hill have a promising future</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-4">
            <span className="font-medium">問 4</span>
            <span>
              One <span className="underline">opinion</span> from the
              judges&apos; comments and shared evaluation is that
            </span>
            <span className="border border-black px-3 py-1">9</span>
            <span>.</span>
          </div>
          <div className="pl-8 space-y-1">
            <div>① each evaluated band received the same total score</div>
            <div>
              ② Ms Wells&apos; suggestion about originality was agreed on
            </div>
            <div>③ Silent Hill really connected with the audience</div>
            <div>④ the judges&apos; comments determined the rankings</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="font-medium">問 5</span>
            <span>
              Which of the following is the final ranking based on the
              judges&apos; shared evaluation?
            </span>
            <span className="border border-black px-3 py-1">10</span>
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
