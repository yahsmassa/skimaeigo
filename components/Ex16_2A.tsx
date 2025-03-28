"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const JapaneseTestAlternate = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "2A-1",
      qa: [
        {
          questionNumber: "8",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: ["正解は① have already arrived 過去完了"],
    },
    {
      questionId: "2A-2",
      qa: [
        {
          questionNumber: "9",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: ["正解は① Although Tokyo has... 従属接続詞"],
    },
    {
      questionId: "2A-3",
      qa: [
        {
          questionNumber: "10",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      points: 2,
      explanation: [
        "正解は② バイリンガルの両親に育てられた子供たちは、自然と2つの言語を学ぶかもしれません。",
        "* bring up 育てる",
      ],
    },
    {
      questionId: "2A-4",
      qa: [
        {
          questionNumber: "11",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      points: 2,
      explanation: [
        "正解は④ 私の姉は真面目な高校生ではありませんでした、そして私もそうだった",
        "neither + 倒置 「・・もまた〜ない」",
      ],
    },
    {
      questionId: "2A-5",
      qa: [
        {
          questionNumber: "12",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      points: 2,
      explanation: [
        "正解は② 映画が始まる前に、携帯電話の電源を切っていることを確認して。",
        "make sure (that) SV ... 「・・ということを確かめる」",
      ],
    },
    {
      questionId: "2A-6",
      qa: [
        {
          questionNumber: "13",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      points: 2,
      explanation: [
        "正解は① 私たちはとてもはかどったので、すでに予定より早く進んでいる。",
        "* ahead of  「〜より進んで」、* apart from 「〜は別として」、* far from 「〜から遠い」、* out of 「〜から外へ」",
      ],
    },
    {
      questionId: "2A-7",
      qa: [
        {
          questionNumber: "14",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      points: 2,
      explanation: [
        "正解は① プレゼンテーション後の彼らの友好的なコメントのおかげで、私はとても安心しました。",
        "friendlyは形容詞、②③④は副詞",
      ],
    },
    {
      questionId: "2A-8",
      qa: [
        {
          questionNumber: "15",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      points: 2,
      explanation: ["正解は③ この必須科目を修了するまで、卒業できません。 "],
    },
    {
      questionId: "2A-9",
      qa: [
        {
          questionNumber: "16",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      points: 2,
      explanation: [
        "正解は① 以前は木材が主要な燃料として用いられていたが、今日では化石燃料が広く用いられている。",
        "* used to 「以前は・・だった」、* be used to不定詞 「〜するために使われている」過去との対比では現在形があとに続く",
      ],
    },
    {
      questionId: "2A-10",
      qa: [
        {
          questionNumber: "17",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      points: 2,
      explanation: [
        "正解は④ 毎日病院に祖母を見舞いに行くなんて、なんて思いやりがあるのでしょう。",
        "It is + 形容詞 ＋ of A to-不定詞 「〜するとはAは・・・だ」",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {20})</span>
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
        <h2 className="md:text-xl font-bold mb-6 font-sans">
          第2問 次の問い(A)に答えよ。(配点 20)
        </h2>

        <div className="mb-6">
          <div className="flex flex-wrap md:items-center mb-4 leading-8">
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
              <span className="mr-2">The train</span>
              {renderSelect("8", 4, answers, setAnswers)}
              <span className="mr-2">when I reached </span>
              <span className="mr-2">
                the platform, so I didn't have to wait in
              </span>
              <span className="mr-2">the cold.</span>
              {showResults && <Explain qa={qa} questionId="2A-1" />}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 md:ml-8">
            {[
              "had already arrived",
              "has already arrived",
              "previously arrived",
              "previously arrives",
            ].map((option, index) => (
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
              {renderSelect("9", 4, answers, setAnswers)}
              <span className="mr-2">Tokyo has a relatively</span>
              <span className="mr-2">
                small land area, it has a huge population.
              </span>
              {showResults && <Explain qa={qa} questionId="2A-2" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["Although", "But", "Despite", "However"].map((option, index) => (
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
              showResults && qaFormat(qa, "2A-3")
            )}
          >
            <div className="font-bold mr-4 font-sans">問 3</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Children</span>
              {renderSelect("10", 4, answers, setAnswers)}
              <span className="mr-2">by bilingual</span>
              <span className="mr-2">
                parents may naturally learn two languages.
              </span>
              {showResults && <Explain qa={qa} questionId="2A-3" />}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-4 md:ml-8">
            {[
              "bringing up",
              "brought up",
              "have brought up",
              "were brought up",
            ].map((option, index) => (
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
              <span className="mr-2">
                My sister was not a serious high school
              </span>
              <span className="mr-2">student, and</span>
              {renderSelect("11", 4, answers, setAnswers)}
              <span className="mr-2">.</span>
              {showResults && <Explain qa={qa} questionId="2A-4" />}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-4 md:ml-8">
            {[
              "either I was",
              "either was I",
              "neither I was",
              "neither was I",
            ].map((option, index) => (
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
              <span className="mr-2">Before the movie begins, please</span>
              {renderSelect("12", 4, answers, setAnswers)}
              <span className="mr-2">your mobile phone is switched off.</span>
              {showResults && <Explain qa={qa} questionId="2A-5" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["keep", "make sure", "never fail", "remind"].map(
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
              showResults && qaFormat(qa, "2A-6")
            )}
          >
            <div className="font-bold mr-4 font-sans">問 6</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                We have made good progress, so we are
              </span>
              <span className="mr-2">already</span>
              {renderSelect("13", 4, answers, setAnswers)}
              <span className="mr-2">schedule.</span>
              {showResults && <Explain qa={qa} questionId="2A-6" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["ahead of", "apart from", "far from", "out of"].map(
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
              <span className="mr-2">Thanks to their</span>
              {renderSelect("14", 4, answers, setAnswers)}
              <span className="mr-2">comments</span>
              <span className="mr-2">
                after my presentation, I felt very relieved.
              </span>
              {showResults && <Explain qa={qa} questionId="2A-7" />}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["friendly", "nicely", "properly", "warmly"].map(
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

          <div className="flex flex-col">
            <div
              className={cn(
                "flex flex-wrap items-center",
                showResults && qaFormat(qa, "2A-8")
              )}
            >
              <div className="font-bold mr-4 font-sans">問 8</div>
              <span className="mr-2">
                ( A ) you've completed this required class,
              </span>
              <span className="mr-2">you ( B ) be able to graduate.</span>
              {renderSelect("15", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="2A-8" />}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : If　　　　　　B : won't",
                "A : Unless　　　 B : would",
                "A : Until　　　　B : won't",
                "A : While　　　　B : would",
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
                Wood ( A ) be used as the main fuel, but nowadays fossil fuels (
                B ) widely.
              </span>
              {renderSelect("16", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="2A-9" />}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : used to　　　　B : are used",
                "A : used to　　　　B : have been used",
                "A : was used to　　B : are used",
                "A : was used to　　B : have been used",
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
                ( A ) so considerate ( B ) him to come and see his grandmother
                in the hospital every day.
              </span>
              {renderSelect("17", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="2A-10" />}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : He is　　　　B : for",
                "A : He is　　　　B : of",
                "A : It is　　　　B : for",
                "A : It is　　　　B : of",
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

export default JapaneseTestAlternate;
