"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const JapaneseTestComponent = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "3B-1",
      qa: [
        {
          questionNumber: "29",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [
        "正解は① 彼らは世界中の他の生徒と比較して科学で良い成績を収めています。",
        "翻訳参照",
      ],
    },
    {
      questionId: "3B-2",
      qa: [
        {
          questionNumber: "30",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [
        "正解は② 彼らはその治療法がどの程度科学的なものなのかを気にする。",
        "翻訳参照",
      ],
    },
    {
      questionId: "3B-3",
      qa: [
        {
          questionNumber: "31",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: ["正解は①"],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第３問 B"}</h1>
          <span className="text-gray-600">(配点 {18})</span>
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
        <p className="md:text-lg mb-4">
          <span className="font-bold">B</span>
          　次の問い（問１～３）のパラグラフ（段落）には，まとまりをよくするために
          <span className="font-bold">取り除いた方がよい</span>
          文が一つある。取り除く文として最も適当なものを，それぞれ下線部①～④のうちから一つずつ選べ。
        </p>
      </div>

      <div className="mb-10">
        <div className="flex items-center mb-2">
          <span className="font-bold mr-4">問１</span>
          {renderSelect("29", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="3B-1" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "16-3B-1")}
        </div>

        <div className="text-base leading-6 md:leading-8 space-y-2">
          <p>
            <span className="ml-7">
              Students in Japan are now engaging more in practical activities
              and less in memorization of facts in class. Students are learning
              scientific principles through actual experience.
            </span>
            <span className="font-bold ml-2 mr-1">①</span>
            <span className="border-b-2 border-black">
              They do well in science in comparison with other students around
              the world.
            </span>
            <span className="font-bold ml-2 mr-1">②</span>
            <span className="border-b-2 border-black">
              They build electric motors using everyday goods, such as wire,
              magnets, and paper clips.
            </span>
            <span className="font-bold ml-2 mr-1">③</span>
            <span className="border-b-2 border-black">
              They make ice cream by hand with salt and ice.
            </span>
            <span className="font-bold ml-2 mr-1">④</span>
            <span className="border-b-2 border-black mr-2">
              Students say that they like the new studying style because it is
              practical as well as enjoyable and educational.
            </span>
            <span className="">
              It is hoped that this new method will encourage students to become
              more interested in science.
            </span>
          </p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center mb-2">
          <span className="font-bold mr-4">問２</span>
          {renderSelect("30", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="3B-2" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "16-3B-2")}
        </div>

        <div className="text-base leading-6 md:leading-8 space-y-2">
          <p>
            <span className="ml-7">
              Trial and error, an approach used in science, is often found in
              daily life. It can be observed when people do not feel well. They
              may already have a list of treatments they have used before. They
              can also consult a medical book or check the Internet for new
              treatments. They may decide to use any one of the treatments.
            </span>
            <span className="font-bold ml-2 mr-1">①</span>
            <span className="border-b-2 border-black">
              If the treatment does not improve the condition, they try another
              one.
            </span>
            <span className="font-bold ml-2 mr-1">②</span>
            <span className="border-b-2 border-black">
              They are concerned about how scientific the treatment is.
            </span>
            <span className="font-bold ml-2 mr-1">③</span>
            <span className="border-b-2 border-black">
              This is an example of how this approach is adopted in everyday
              life.
            </span>
            <span className="font-bold ml-2 mr-1">④</span>
            <span className="border-b-2 border-black">
              When an idea fails, they consider the alternatives.
            </span>
            <span className="">
              In this way, approaches used in science and daily life have some
              points in common.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JapaneseTestComponent;
