"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const TestQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "20_3A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第３問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {15})</span>
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
      <div className="mb-8">
        <h2 className="md:text-2xl font-bold mb-4 font-sans">
          第3問 次の問い(A・B)に答えよ。(配点 33)
        </h2>

        <div className="ml-4 mb-6 leading-6 md:leading-8">
          <p className="md:font-bold mb-4 font-sans">
            A
            次の問い(問1～3)のパラグラフ(段落)には、まとまりをよくするために取り除いた方がよい文が一つある。取り除く文として最も適当なものを、それぞれ下線部①～④のうちから一つずつ選べ。
          </p>

          <div className="mt-8">
            <div
              className={cn(
                "flex items-center mb-2",
                showResults && qaFormat(qa, "3A-1")
              )}
            >
              <span className="font-bold mr-2 font-sans">問1</span>
              {renderSelect("27", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="3A-1" />}
              <span className="mr-2"></span>
              {Kaisetsu(showResults, "20-3A-1")}
            </div>

            <div className="mt-4 space-y-4">
              <p className="leading-6 md:leading-8">
                <span className="ml-8">
                  In the early history of the NBA, the biggest professional
                  basketball league in North America, the games were often low
                  scoring and, as a result, not always exciting.{" "}
                </span>
                <span className="ml-2 mr-1">①</span>
                <span className="border-b-2 border-black">
                  A prime example was a game between the Lakers and the Pistons
                  in 1950.
                </span>{" "}
                The result of the game was a 19-18 win for the Pistons. These
                games frustrated fans of the day, and this became a major
                motivation to introduce a new rule to increase scoring: a
                24-second limit for each shot.
                <span className="ml-2 mr-1">②</span>
                <span className="border-b-2 border-black">
                  The pressure of the time limit caused players to miss their
                  shots more often.
                </span>
                <span className="ml-2 mr-1">③</span>
                <span className="border-b-2 border-black">
                  After much discussion, the rule was first used in an official
                  game on October 30, 1954.
                </span>
                <span className="ml-2 mr-1">④</span>
                <span className="border-b-2 border-black">
                  Ever since, individual teams have often scored over 100 points
                  in a game.
                </span>{" "}
                This simple change made the game more exciting and saved the
                league.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div
              className={cn(
                "flex items-center mb-2",
                showResults && qaFormat(qa, "3A-2")
              )}
            >
              <span className="font-bold mr-2 font-sans">問2</span>
              {renderSelect("28", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="3A-2" />}
              <span className="mr-2"></span>
              {Kaisetsu(showResults, "20-3A-2")}
            </div>

            <div className="mt-4 space-y-4">
              <p className="leading-6 md:leading-8">
                <span className="ml-8">
                  You might have been told, "Sit up straight or you'll get a
                  backache." But is it true? People have long assumed that
                  posture has played some role in back pain. Surprisingly, the
                  evidence from research linking posture and backache may be
                  weak.{" "}
                </span>
                <span className="ml-2 mr-1">①</span>
                <span className="border-b-2 border-black">
                  Our back is naturally curved—from the side it is S-shaped.
                </span>
                <span className="ml-2 mr-1">②</span>
                <span className="border-b-2 border-black">
                  Individuals have their own unique bone sizes that determine
                  their body shapes.
                </span>{" "}
                <span className="ml-2 mr-1">③</span>
                <span className="border-b-2 border-black">
                  It has been thought that good posture meant straightening out
                  some of the curves.
                </span>{" "}
                <span className="ml-2 mr-1">④</span>
                <span className="border-b-2 border-black mr-2">
                  According to a study examining doctors' opinions, it was found
                  that there was no single agreed-upon standard of proper
                  posture.
                </span>
                One researcher even says that often changing your posture,
                especially when sitting, is more important for preventing back
                pain. The main source of back pain may be stress and lack of
                sleep, not the way someone is sitting.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div
              className={cn(
                "flex items-center mb-2",
                showResults && qaFormat(qa, "3A-3")
              )}
            >
              <span className="font-bold mr-2 font-sans">問3</span>
              {renderSelect("29", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="3A-3" />}
              <span className="mr-2"></span>
              {Kaisetsu(showResults, "20-3A-3")}
            </div>

            <div className="mt-4 space-y-4">
              <p className="leading-6 md:leading-8">
                <span className="ml-8">
                  One of the most important features in the development of
                  civilization was the preservation of food. Preserving pork
                  legs as ham is one such example. Today, many countries in the
                  world produce ham, but when and where did it begin?{" "}
                </span>
                <span className="ml-2 mr-1">①</span>
                <span className="border-b-2 border-black">
                  Many credit the Chinese with being the first people to record
                  salting raw pork, while others have cited the Gauls, ancient
                  people who lived in western parts of Europe.
                </span>{" "}
                <span className="ml-2 mr-1">②</span>
                <span className="border-b-2 border-black">
                  Another common seasoning is pepper, which works just as well
                  in the preservation of food.
                </span>{" "}
                <span className="ml-2 mr-1">③</span>
                <span className="border-b-2 border-black">
                  It seems almost certain that it was a well-established
                  practice by the Roman period.
                </span>{" "}
                <span className="ml-2 mr-1">④</span>
                <span className="border-b-2 border-black mr-2">
                  A famous politician in ancient Rome wrote extensively about
                  the "salting of hams" as early as 160 B.C.
                </span>{" "}
                Regardless of the origin, preserved foods like ham helped human
                culture to evolve and are deeply rooted in history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestQuestion;
