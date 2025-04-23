"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";
const JapaneseTestQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "20_2A")?.qanda || [];
  // const question: QandA[] = [
  //   {
  //     questionId: "2A-1",
  //     qa: [
  //       {
  //         questionNumber: "8",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "3",
  //     answerString: "",
  //     isCorrect: false,
  //     points: 2,
  //     explanation: [
  //       "正解③ be far from A：Aには程遠い",
  //       "be apart from A：Aから離れている",
  //       "be different from A：Aとは違う",
  //       "be free from A：A（心配など）のない",
  //     ],
  //   },
  //   {
  //     questionId: "2A-2",
  //     qa: [
  //       {
  //         questionNumber: "9",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "1",
  //     answerString: "",
  //     isCorrect: false,
  //     points: 2,
  //     explanation: [
  //       "正解① both",
  //       "通りの両側にバス停がある",
  //       "each:それぞれ、either:片方の、neithr:どちらの〜も・・ない",
  //     ],
  //   },
  //   {
  //     questionId: "2A-3",
  //     qa: [
  //       {
  //         questionNumber: "10",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "3",
  //     answerString: "",
  //     points: 2,
  //     explanation: ["正解③", "wheter SV... 「・・・かどうか」"],
  //   },
  //   {
  //     questionId: "2A-4",
  //     qa: [
  //       {
  //         questionNumber: "11",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "3",
  //     answerString: "",
  //     points: 2,
  //     explanation: [
  //       "正解③",
  //       "Marcoも話せる",
  //       "so + 助動詞[be動詞]＋Sで前の工程分に対して、「Sもそうである」",
  //     ],
  //   },
  //   {
  //     questionId: "2A-5",
  //     qa: [
  //       {
  //         questionNumber: "12",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "1",
  //     answerString: "",
  //     points: 2,
  //     explanation: [
  //       "正解①",
  //       "A is one thing , but B is another で「AとBは違うことだ",
  //     ],
  //   },
  //   {
  //     questionId: "2A-6",
  //     qa: [
  //       {
  //         questionNumber: "13",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "1",
  //     answerString: "",
  //     points: 2,
  //     explanation: ["正解①", "get along with A 「Aとうまくやる」"],
  //   },
  //   {
  //     questionId: "2A-7",
  //     qa: [
  //       {
  //         questionNumber: "14",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "1",
  //     answerString: "",
  //     points: 2,
  //     explanation: ["正解①", "It happens that SV ... 「たまたま・・・である」"],
  //   },
  //   {
  //     questionId: "2A-8",
  //     qa: [
  //       {
  //         questionNumber: "15",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "4",
  //     answerString: "",
  //     points: 2,
  //     explanation: [
  //       "正解④",
  //       "..as logn as ..していれば、clear （道が）すいていれば",
  //       "...as far as ... している限り",
  //     ],
  //   },
  //   {
  //     questionId: "2A-9",
  //     qa: [
  //       {
  //         questionNumber: "16",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "2",
  //     answerString: "",
  //     points: 2,
  //     explanation: ["正解②", "..give A a second thought ..を考え直す"],
  //   },
  //   {
  //     questionId: "2A-10",
  //     qa: [
  //       {
  //         questionNumber: "17",
  //         answer: 0,
  //       },
  //     ],
  //     rightAnswerString: "1",
  //     answerString: "",
  //     points: 2,
  //     explanation: [
  //       "正解①",
  //       "否定語と一緒に使うany",
  //       "except for を除いて",
  //       "in the back row の後ろの列に",
  //     ],
  //   },
  // ];
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
      </div>{" "}
      <div className="mb-8">
        <h2 className="md:text-xl font-bold mb-6 font-sans">
          第2問 次の問い（A）に答えよ。（配点 20）
        </h2>

        <div className="mb-6">
          <div className="flex flex-wrap md:items-center mb-4 leading-8">
            <span className="font-bold mr-4">A</span>
            <span className="mr-2">次の問い（問1～10）の</span>
            <span className="flex flex-row items-center">
              <div className="font-sans inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mr-1 text-sm md:text-base">
                8
              </div>
              <span className="mx-1">～</span>
              <div className="font-sans inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base">
                17
              </div>
            </span>
            <span className="ml-2">
              に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。ただし、
            </span>
            <div>
              <div className="font-sans inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base mx-2">
                15
              </div>
              <span className="mx-1">～</span>
              <div className="font-sans inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base mx-2">
                17
              </div>
            </div>
            <span>については、（ A ）と（ B ）</span>
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
            <div className="font-bold mr-4">問1</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Due to the rain, our performance</span>
              <span className="mr-2">in the game was</span>
              {renderSelect("8", 4, answers, setAnswers)}
              <span>from perfect.</span>
            </div>
            {showResults && <Explain qa={qa} questionId="2A-1" />}
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["apart", "different", "far", "free"].map((option, index) => (
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
            <div className="font-bold mr-4">問2</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Emergency doors can be found at</span>
              {renderSelect("9", 4, answers, setAnswers)}
              <span className="mr-2">ends of this hallway.</span>
              {showResults && <Explain qa={qa} questionId="2A-2" />}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["both", "each", "either", "neither"].map((option, index) => (
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
            <div className="font-bold mr-4">問3</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                My plans for studying abroad depend on
              </span>
              {renderSelect("10", 4, answers, setAnswers)}
              <span className="mr-2">I can get a scholarship.</span>
              {showResults && <Explain qa={qa} questionId="2A-3" />}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["that", "what", "whether", "which"].map((option, index) => (
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
            <div className="font-bold mr-4">問4</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Noriko can speak Swahili and</span>
              {renderSelect("11", 4, answers, setAnswers)}
              <span className="mr-2">can Marco.</span>
              {showResults && <Explain qa={qa} questionId="2A-4" />}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["also", "as", "so", "that"].map((option, index) => (
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
            <div className="font-bold mr-4">問5</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                To say you will go jogging every day is
              </span>
              <span className="mr-2">one thing, but to do it is</span>
              {renderSelect("12", 4, answers, setAnswers)}
              <span>.</span>
              {showResults && <Explain qa={qa} questionId="2A-5" />}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["another", "one another", "the other", "the others"].map(
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
            <div className="font-bold mr-4">問6</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Our boss is a hard worker, but can be
              </span>
              <span>difficult to get</span>
              {renderSelect("13", 4, answers, setAnswers)}
              <span className="mr-2">.</span>
              {showResults && <Explain qa={qa} questionId="2A-6" />}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["along with", "around to", "away with", "down to"].map(
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
            <div className="font-bold mr-4">問7</div>
            <div className="flex flex-wrap items-center">
              <span>When Ayano came to my house,</span>
              {renderSelect("14", 4, answers, setAnswers)}
              <span className="mr-2">happened that nobody was at home.</span>
              {showResults && <Explain qa={qa} questionId="2A-7" />}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["it", "something", "there", "what"].map((option, index) => (
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
                "flex flex-wrap items-center mb-2",
                showResults && qaFormat(qa, "2A-8")
              )}
            >
              <div className="font-bold mr-4">問8</div>
              <span className="mr-2">We'll be able to get home on time as</span>
              <span className="mr-2">（ A ） as the roads are （ B ）.</span>
              <span className="flex flex-row">
                {renderSelect("15", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="2A-8" />}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : far　　　　B : blocked",
                "A : far　　　　B : clear",
                "A : long　　　　B : blocked",
                "A : long　　　　B : clear",
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
                "flex flex-wrap items-center mb-2",
                showResults && qaFormat(qa, "2A-9")
              )}
            >
              <span className="font-bold mr-4">問9</span>
              <span>
                I know you said you weren't going to the sports festival, but it
                is an important event,
              </span>
              <span>so please （ A ） it a （ B ） thought.</span>
              <span className="flex flex-row">
                {renderSelect("16", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="2A-9" />}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : give　　　　B : first",
                "A : give　　　　B : second",
                "A : take　　　　B : first",
                "A : take　　　　B : second",
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
                "flex items-center flex-wrap mb-2",
                showResults && qaFormat(qa, "2A-10")
              )}
            >
              <span className="font-bold mr-4">問10</span>
              <span>I didn't recognize （ A ） of the guests （ B ）</span>
              <span>the two sitting in the back row.</span>
              <span className="flex flex-row">
                {renderSelect("17", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="2A-10" />}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : any　　　　B : except for",
                "A : any　　　　B : rather than",
                "A : either　　　B : except for",
                "A : either　　　B : rather than",
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
