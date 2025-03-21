"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
const Ex16_6 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "6-1",
      qa: [
        {
          questionNumber: "47",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は① オペラは新たな状況に適応することで発展する",
        "段落２にオペラの発展についての記述がある、翻訳参照",
      ],
    },
    {
      questionId: "6-2",
      qa: [
        {
          questionNumber: "48",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は③ オペラ歌手の価値とは何でしょう？",
        "段落（３）の企業経営者や、スポーツ選手の報酬の話の流れから、翻訳参照",
      ],
    },
    {
      questionId: "6-3",
      qa: [
        {
          questionNumber: "49",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isOrderFree: true,
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は① オペラ歌手は経済的に不安定だ",
        "オペラ歌手の病気での収入がなくなる記述などから、翻訳参照",
      ],
    },
    {
      questionId: "6-4",
      qa: [
        {
          questionNumber: "50",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は③ オペラ歌手の容姿よりも、声の方がもっと高く評価されるべきである",
        "体重がある程度ないと、声量がでにくいなどの記述から、翻訳参照",
      ],
    },
    {
      questionId: "6-5",
      qa: [
        {
          questionNumber: "51",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は③ オペラが直面する困難",
        "段落（３）に述べられているオペラの深刻な問題についての記述などから、翻訳参照",
      ],
    },
    {
      questionId: "6-6",
      qa: [
        {
          questionNumber: "52",
          answer: 0,
        },
        {
          questionNumber: "53",
          answer: 0,
        },
        {
          questionNumber: "54",
          answer: 0,
        },
        {
          questionNumber: "55",
          answer: 0,
        },
      ],
      rightAnswerString: "3142",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は[52]③ [53]① [54]④ [55]② ",
        "段落（３）に述べられているオペラの深刻な問題についての記述などから、翻訳参照",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第６問"}</h1>
          <span className="text-gray-600">(配点 {36})</span>
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
      {/* Question Header */}
      <div className="mb-8">
        <p className="text-lg mb-4">
          次の文章を読み、下の問い（A・B）に答えよ。なお、文章の左にある(1)～(6)はパラグラフ（段落）の番号を表している。（配点
          36）
        </p>
      </div>

      {/* Paragraphs */}
      <div className="space-y-6">
        {/* Paragraph 1 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(1)</div>
          <div className="flex-grow indent-7">
            Opera is an art form that celebrates the human voice at its highest
            level of expression. No other art form creates excitement and moves
            the heart in the way that opera does, especially when performed by a
            great singer. Such singers are trained to present some of the
            greatest and most challenging music that has ever been composed for
            the human voice.
            {Kaisetsu(showResults, "16-6-1")}
          </div>
        </div>

        {/* Paragraph 2 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(2)</div>
          <div className="flex-grow indent-7">
            Opera is an important part of the Western classical music tradition.
            It uses music, words, and actions to bring a dramatic story to life.
            Opera started in Italy at the end of the 16th century and later
            became popular throughout Europe. Over the years, it has responded
            to various musical and theatrical developments around the world and
            continues to do so. In recent decades, much wider audiences have
            been introduced to opera through modern recording technology. Some
            singers have become celebrities thanks to performing on radio, on
            television, and in the cinema.
            {Kaisetsu(showResults, "16-6-2")}
          </div>
        </div>

        {/* Paragraph 3 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(3)</div>
          <div className="flex-grow indent-7">
            However, in recent years, opera has been facing serious challenges.
            The causes of some of these are beyond its control. One current
            challenge to opera is economic. The current world economic slowdown
            has meant that less money is available for cultural institutions and
            artists. This shortage of money raises the broader question of how
            much should be paid to support opera singers and other artists.
            Society seems to accept the large salaries paid to business managers
            and the multi-million-dollar contracts given to sports athletes.{" "}
            <span className="underline">But what about opera singers?</span>{" "}
            Somehow, people have the idea that artists can be creative only if
            they suffer in poverty, but this is unrealistic: If artists,
            including opera singers, lack the support they need, valuable talent
            is wasted.
            {Kaisetsu(showResults, "16-6-3")}
          </div>
        </div>

        {/* Paragraph 4 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(4)</div>
          <div className="flex-grow indent-7">
            Not only the shortage of money, but also the way money is managed in
            the opera world has led to hardships. Principal singers are
            generally paid performance fees once they complete a show. They
            typically receive nothing during the many weeks of rehearsal before
            a show starts. To prepare for a role, they must pay the costs of
            lessons and coaching sessions. If they become ill or cancel their
            performance, they lose their performance fee. The insecurity of this
            system puts the future of opera at risk.
            {Kaisetsu(showResults, "16-6-4")}
          </div>
        </div>

        {/* Paragraph 5 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(5)</div>
          <div className="flex-grow indent-7">
            Another problem faced by opera is how to meet the demands of
            audiences who are influenced by popular entertainment. Pop singers
            are often judged as much on the basis of how they look as how they
            sound. Therefore, opera singers, performing to audiences influenced
            by this popular culture, are now expected to be &quot;models who
            sing.&quot; These demands may be unrealistic and possibly harmful.
            Opera singers simply cannot make a sound big enough to fill a large
            theater or concert hall without a microphone if their body weight is
            too low. Emphasizing physical appearance over singing ability may
            cause audiences to miss out on the human voice at its best.
            {Kaisetsu(showResults, "16-6-5")}
          </div>
        </div>

        {/* Paragraph 6 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(6)</div>
          <div className="flex-grow indent-7">
            There are no easy solutions to opera's problems and there are many
            different opinions about the value of opera. However, every year
            many young people register for music courses with hopes and dreams
            of developing their talents in this special art form. The fact that
            opera has survived many obstacles and continues to attract the
            rising generation demonstrates that it remains a respected art form
            full of value.
            {Kaisetsu(showResults, "16-6-6")}
          </div>
        </div>
      </div>

      {/* Question Section */}
      <div className="mt-8 space-y-6">
        <div className="flex ">
          <div className="font-bold mr-2">A</div>
          <div>
            次の問い（問１～５）の
            <span className="inline-block mx-2 border border-black px-4">
              47
            </span>
            ～
            <span className="inline-block mx-2 border border-black px-4">
              51
            </span>
            に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
          </div>
        </div>

        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="mr-2 whitespace-nowrap">問1</span>
            <p>Which of these statements is true according to paragraph (2)?</p>
            {renderSelect("47", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-1" />}
            {Kaisetsu(showResults, "16-6-7")}
          </div>

          <div className="ml-8 space-y-2">
            <div>① Opera develops by adapting to new conditions.</div>
            <div>② Opera fans thank celebrities for performing.</div>
            <div>③ Opera singers avoid singing on TV and in films.</div>
            <div>④ Opera singers' life stories are dramatic.</div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="mr-2 whitespace-nowrap">問2</span>
            <p>
              <span>
                In paragraph (3), what is another way of asking the question{" "}
              </span>
              <span className="mx-1 underline">
                &quot;But what about opera singers?&quot;
              </span>
            </p>
            {renderSelect("48", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-2" />}
            {Kaisetsu(showResults, "16-6-8")}
          </div>
          <div className="ml-8 space-y-2">
            <div>① How do opera singers prepare?</div>
            <div>② How should we use opera singers?</div>
            <div>③ What are opera singers worth?</div>
            <div>④ What sums do opera singers pay?</div>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="mr-2 whitespace-nowrap">問3</span>
            <p>According to paragraphs (3) and (4), which statement is true?</p>
            {renderSelect("49", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-3" />}
            {Kaisetsu(showResults, "16-6-9")}
          </div>
          <div className="ml-8 space-y-2">
            <div>① Opera singers are financially unstable.</div>
            <div>② Opera singers ask only the wealthy to attend.</div>
            <div>③ Opera singers get paid before the show.</div>
            <div>④ Opera singers perform better if they are poor.</div>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="mr-2 whitespace-nowrap">問4</span>
            <span>
              Which statement best expresses the author's opinion in paragraph
              (5)?
            </span>
            {renderSelect("50", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-4" />}
            {Kaisetsu(showResults, "16-6-10")}
          </div>
          <div className="ml-8 space-y-2">
            <div>① Audiences know best how opera should be performed.</div>
            <div>
              ② Microphones should be used to make opera more enjoyable.
            </div>
            <div>
              ③ Opera singers' voices should be valued more than their looks.
            </div>
            <div>④ Popular culture has had a positive influence on opera.</div>
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-5"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="mr-2 whitespace-nowrap">問5</span>
            <p>What would be the best title for this passage?</p>
            {renderSelect("51", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-5" />}
            {Kaisetsu(showResults, "16-6-11")}
          </div>
          <div className="ml-8 space-y-2">
            <div>① How to Make Money in Opera</div>
            <div>② Opera as a Part of Popular Culture</div>
            <div>③ The Difficulties Facing Opera</div>
            <div>④ The Historical Context of Opera</div>
          </div>
        </div>
      </div>

      {/* Section B */}
      <div className={cn("space-y-4 mt-8", showResults && qaFormat(qa, "6-6"))}>
        <div className="mb-6">
          <p className="flex items-center flex-wrap">
            <span className="font-bold mr-4">B</span>
            次の表は、本文のパラグラフ(段落)の構成と内容をまとめたものである。
          </p>

          <p className="leading-relaxed">
            <span className="border border-black px-2 py-1">52</span> ～{" "}
            <span className="border border-black px-2 py-1">55</span>{" "}
            に入れるのに最も適当なものを、下の①～④のうちから一つずつ選び、表を完成させよ。ただし、同じものを繰り返し選んではいけない。
            <span className="flex flex-wrap gap-2 mt-1">
              {renderSelect("52", 4, answers, setAnswers)}
              {renderSelect("53", 4, answers, setAnswers)}
              {renderSelect("54", 4, answers, setAnswers)}
              {renderSelect("55", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="6-6" />}
              {Kaisetsu(showResults, "16-6-12")}
            </span>
          </p>
        </div>

        {/* Table */}
        <div className="w-full max-w-xl mx-auto">
          <table className="w-full  border-collapse border border-black">
            <thead>
              <tr>
                <th className="border border-black p-3 w-1/3">Paragraph</th>
                <th className="border border-black p-3 w-2/3">Content</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-3 text-center">(1)</td>
                <td className="border border-black p-3 text-center">
                  Introducing opera
                </td>
              </tr>
              <tr>
                <td className="border border-black p-3 text-center">(2)</td>
                <td className="border border-black p-3 text-center">
                  <span className="border border-black px-4">52</span>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-3 text-center">(3)</td>
                <td className="border border-black p-3 text-center">
                  <span className="border border-black px-4">53</span>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-3 text-center">(4)</td>
                <td className="border border-black p-3 text-center">
                  <span className="border border-black px-4">54</span>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-3 text-center">(5)</td>
                <td className="border border-black p-3 text-center">
                  <span className="border border-black px-4">55</span>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-3 text-center">(6)</td>
                <td className="border border-black p-3 text-center">
                  Prospects for opera
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Choices */}
        <div className="ml-8 space-y-2">
          <div>① Effect of world finance on opera</div>
          <div>② Impact of popular culture on opera</div>
          <div>③ Opera from the past to the present</div>
          <div>④ Problems in money management</div>
        </div>
      </div>
    </div>
  );
};

export default Ex16_6;
