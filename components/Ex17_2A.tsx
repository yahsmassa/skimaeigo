"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { qanda } from "@/lib/qanda";
const JapaneseTestQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "17_2A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2 font-sans">
          <h1 className="text-lg font-bold">{"第２問 A"}</h1>
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
      </div>{" "}
      <div className="mb-8">
        <h2 className="md:text-xl font-bold mb-6 font-sans">
          第2問 次の問い(A～C)に答えよ。(配点 44)
        </h2>

        <div className="mb-6">
          <div className="flex flex-wrap md:items-center mb-4 leading-8 font-sans">
            <span className="font-bold mr-4">A</span>
            <span className="mr-2">次の問い(問1～10)の</span>
            <span className="flex flex-row items-center">
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mr-1 text-sm md:text-base">
                8
              </div>
              <span className="mx-1">～</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base">
                17
              </div>
            </span>
            <span className="ml-2">
              に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。ただし、
            </span>
            <div>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base mx-2">
                15
              </div>
              <span className="mx-1">～</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base mx-2">
                17
              </div>
            </div>
            <span>については、( A )と( B )</span>
            <span>に入れるのに最も適当な組合せを選べ。</span>
          </div>

          <div className="mb-6 ml-6"></div>
        </div>

        <div className="space-y-7">
          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-1")
            )}
          >
            <div className="font-bold mr-4 font-sans">問 1</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Today, in science class, I learned that salt
              </span>
              <span className="mr-2">water doesn't freeze</span>
              {renderSelect("8", 4, answers, setAnswers)}
              <span className="mr-2">0℃.</span>
              {showResults && <Explain qa={qa} questionId="2A-1" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["at", "in", "on", "with"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-2")
            )}
          >
            <div className="font-bold mr-4 font-sans">問 2</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Many experts think that we need to create
              </span>
              <span className="mr-2">more job opportunities for</span>
              {renderSelect("9", 4, answers, setAnswers)}
              <span className="mr-2">.</span>
              {showResults && <Explain qa={qa} questionId="2A-2" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["a young", "the young", "young", "younger"].map(
              (option, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              )
            )}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-3")
            )}
          >
            <div className="font-bold mr-4 font-sans">問 3</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                The leaves in my neighborhood have recently
              </span>
              {renderSelect("10", 4, answers, setAnswers)}
              <span className="mr-2">yellow.</span>
              {showResults && <Explain qa={qa} questionId="2A-3" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["come", "developed", "led", "turned"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-4")
            )}
          >
            <div className="font-bold mr-4 font-sans">問 4</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">I think eating at home is often</span>
              {renderSelect("11", 4, answers, setAnswers)}
              <span className="mr-2">
                more economical than eating at a restaurant.
              </span>
              {showResults && <Explain qa={qa} questionId="2A-4" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["far", "high", "too", "very"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-5")
            )}
          >
            <div className="font-bold mr-4 font-sans">問 5</div>
            <div className="flex flex-wrap items-center">
              {renderSelect("12", 4, answers, setAnswers)}
              <span className="mr-2">as the leading actor </span>
              <span className="mr-2">
                in the film, Ramesh soon became a star.
              </span>
              {showResults && <Explain qa={qa} questionId="2A-5" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "Choosing",
              "Having been chosen",
              "Having chosen",
              "To choose",
            ].map((option, index) => (
              <div key={index} className="flex md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-6")
            )}
          >
            <div className="font-bold mr-4 font-sans">問 6</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Please give me</span>
              {renderSelect("13", 4, answers, setAnswers)}
              <span className="mr-2">information you get</span>
              <span className="mr-2">as soon as possible.</span>
              {showResults && <Explain qa={qa} questionId="2A-6" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["as if", "even if", "whatever", "whenever"].map(
              (option, index) => (
                <div key={index} className="flex md:items-center">
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              )
            )}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center",
              showResults && qaFormat(qa, "2A-7")
            )}
          >
            <div className="font-bold mr-4 font-sans">問 7</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">The typhoon suddenly became weaker,</span>
              {renderSelect("14", 4, answers, setAnswers)}
              <span className="mr-2">was good news</span>
              <span className="mr-2">for the village.</span>
              {showResults && <Explain qa={qa} questionId="2A-7" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["it", "that", "what", "which"].map((option, index) => (
              <div key={index} className="flex md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <div
              className={cn(
                "flex flex-wrap items-center",
                showResults && qaFormat(qa, "2A-8")
              )}
            >
              <div className="font-bold mr-4 font-sans">問 8</div>
              <span className="mr-2">
                He ( A ) his umbrella ( B ) in the door by
              </span>
              <span className="mr-2">
                accident when he boarded the rush hour
              </span>
              <span className="mr-2">train.</span>
              {renderSelect("15", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="2A-8" />}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : got　　　　B : caught",
                "A : got　　　　B : to catch",
                "A : made　　　 B : caught",
                "A : made　　　 B : to catch",
              ].map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index >= 2 ? "md:mt-4" : ""}`}
                >
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div
              className={cn(
                "flex flex-wrap items-center",
                showResults && qaFormat(qa, "2A-9")
              )}
            >
              <div className="font-bold mr-4 font-sans">問 9</div>
              <span className="mr-2">
                ( A ) in this class is as kind ( B ) Abbie.
              </span>
              <span>She always helps people who are in trouble.</span>
              {renderSelect("16", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="2A-9" />}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : Anybody　　　　B : as",
                "A : Anybody　　　　B : than",
                "A : Nobody　　　　B : as",
                "A : Nobody　　　　B : than",
              ].map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index >= 2 ? "md:mt-4" : ""}`}
                >
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div
              className={cn(
                "flex flex-wrap items-center",
                showResults && qaFormat(qa, "2A-10")
              )}
            >
              <div className="font-bold mr-4 font-sans">問10</div>
              <span className="mr-2">
                Angelina ( A ) me whether I ( B ) enjoyed the
              </span>
              <span>festival last Saturday.</span>
              {renderSelect("17", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="2A-10" />}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : asked　　　　B : had",
                "A : asked　　　　B : have",
                "A : said to　　　　B : had",
                "A : said to　　　　B : have",
              ].map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index >= 2 ? "md:mt-4" : ""}`}
                >
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapaneseTestQuestion;
