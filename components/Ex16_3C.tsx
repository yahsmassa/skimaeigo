"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";

const JapaneseTestQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "3C-1",
      qa: [
        {
          questionNumber: "32",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は④ 私たちは、文化的な誤解をもっと簡単に、スムーズに処理できる。",
        "* cope with: 対処する、* more easily and smoothly: より簡単に、より円滑に、翻訳参照",
      ],
    },
    {
      questionId: "3C-2",
      qa: [
        {
          questionNumber: "33",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は④ 共有された行動が、あなたをある文化集団の一員にする可能性があります。",
        "翻訳参照",
      ],
    },
    {
      questionId: "3C-3",
      qa: [
        {
          questionNumber: "34",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は① 一つの大きな集団を構成する複数の集団が、文化に含まれている。",
        "翻訳参照",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2 font-sans">
          <h1 className="text-lg font-bold">{"第３問 C"}</h1>
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
      </div>{" "}
      <div className="mb-6">
        <div className="flex items-start mb-4 font-sans">
          <span className="font-bold mr-2">C</span>
          <p className="text-base">
            次の会話は，「異文化理解」をテーマとして，ある大学で行われた授業でのやりとりの一部である。
            <span className="inline-flex items-center mx-1 font-sans">
              <span className="border border-black px-4 py-1 mx-1">32</span>
              <span>〜</span>
              <span className="border border-black px-4 py-1 mx-1">34</span>
            </span>
            に入れるのに最も適当なものを，それぞれ下の①〜④のうちから一つずつ選べ。
          </p>
        </div>
      </div>
      <div className="mb-6 space-y-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Professor:</span>
          <p className="text-base">
            Good morning. I'm sure everyone did the homework reading, so I want
            to begin today's class on intercultural communication. My first
            question is "Why do we need to study intercultural communication?"
            Would anyone like to answer?
            {Kaisetsu(showResults, "16-3C-1")}
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Student 1:</span>
          <p className="text-base">
            Yes, I'll try to answer that. People may think the way they do
            things or the way they view the world is "natural" and "correct."
            When they encounter someone doing things differently, they regard it
            as "strange" or "wrong." Having an awareness of intercultural
            communication can help us understand and deal with misunderstandings
            when they arise. I think it is especially important these days
            because people travel overseas for many reasons, such as work,
            study, or vacations. The opportunities to meet people from other
            countries have increased greatly. With this increased contact, there
            are more chances for trouble between people from different cultures.
            {Kaisetsu(showResults, "16-3C-2")}
          </p>
        </div>

        <div
          className={cn(
            "flex flex-wrap md:flex-nowrap",
            showResults && qaFormat(qa, "3C-1")
          )}
        >
          <span className="font-bold mr-2 min-w-[83px]">Professor:</span>
          <p className="text-base flex flex-row flex-wrap items-center">
            <span className="mr-2">
              Right. As you said, studying intercultural communication is useful
            </span>
            <span className="mr-2">because</span>{" "}
            {renderSelect("32", 4, answers, setAnswers)}
            <span className="mr-2">.</span>
            {showResults && <Explain qa={qa} questionId="3C-1" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "16-3C-3")}
          </p>
        </div>
      </div>
      <div className="mb-6 md:pl-12 space-y-2">
        {[
          "intercultural knowledge encourages people to study in a foreign country",
          "some ways of living are considered to be more correct than others",
          "there were many more cases of intercultural communication in the past",
          "we can cope with cultural misunderstandings more easily and smoothly",
        ].map((text, index) => (
          <div key={index} className="flex">
            <span className="font-bold mr-2">
              {["①", "②", "③", "④"][index]}
            </span>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Professor:</span>
          <p className="text-base">
            Let's move on to the concept of "culture." You should know that
            because culture is all around us all the time, it is difficult to
            define. Therefore, we tend to discuss culture in terms of
            characteristics. Can anyone give an example of a cultural
            characteristic?
            {Kaisetsu(showResults, "16-3C-4")}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Student 2:</span>
          <p className="text-base">
            The characteristic I found interesting is that people belonging to a
            culture have the same values, beliefs, and behaviors. Values are
            things that are felt to be of worth, like the Japanese concept of
            "mottainai." Beliefs are things that people believe to be true, and
            these cover a wide variety of areas. For example, people in a
            culture might share beliefs about the kinds of foods that are
            unacceptable. Behavior is about people's actions, and people in the
            same culture can often be seen behaving similarly.
            {Kaisetsu(showResults, "16-3C-5")}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div
          className={cn(
            "flex flex-wrap md:flex-nowrap",
            showResults && qaFormat(qa, "3C-2")
          )}
        >
          <span className="font-bold mr-2 min-w-20">Professor:</span>
          <p className="text-base flex flex-row flex-wrap items-center">
            <span className="mr-2">That's a good explanation. That means</span>
            {renderSelect("33", 4, answers, setAnswers)}
            <span className="mr-2">.</span>
            {showResults && <Explain qa={qa} questionId="3C-2" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "16-3C-6")}
          </p>
        </div>
        <div className="mb-4">
          {[
            "having the same beliefs as other cultural groups is important",
            "people from the same cultural group usually behave differently",
            "people's attitudes to food determine which cultures they are from",
            "shared behaviors may make you a member of a cultural group",
          ].map((text, index) => (
            <div key={index} className="md:ml-12 flex my-3">
              <span className="font-bold mr-2">
                {["①", "②", "③", "④"][index]}
              </span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Student 3:</span>
          <p className="text-base">Can I ask a question?</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Professor:</span>
          <p className="text-base">Of course.</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Student 3:</span>
          <p className="text-base">
            What about people who always seem to be different from those around
            them? Sometimes I don't do things in the same way as my friends. So,
            if we need to have the same behavior for group membership, does that
            mean those who are not the same aren't members of their cultural
            group?
            {Kaisetsu(showResults, "16-3C-7")}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Professor:</span>
          <p className="text-base">
            That's a good question. To answer it we need to think in terms of
            cultural norms rather than individual examples.
            {Kaisetsu(showResults, "16-3C-8")}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div className="md:flex ">
          <span className="font-bold mr-2 min-w-[83px]">Student 3:</span>
          <p className="text-base">
            What is a cultural norm?
            {Kaisetsu(showResults, "16-3C-9")}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Professor:</span>
          <p className="text-base">
            Well, a cultural norm is a rule or standard of behavior shared by
            members of a cultural group.
            {Kaisetsu(showResults, "16-3C-10")}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Student 3:</span>
          <p className="text-base">
            Then what happens to the people who do not follow the cultural
            norms?
            {Kaisetsu(showResults, "16-3C-11")}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Professor:</span>
          <p className="text-base">
            Well, they may belong to a smaller group, or a sub-cultural group,
            but that group is still considered to be part of the culture. This
            is true as long as their actions are within the acceptable limits of
            behavior for that particular culture.
            {Kaisetsu(showResults, "16-3C-12")}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div
          className={cn(
            "flex flex-wrap md:flex-nowrap",
            showResults && qaFormat(qa, "3C-3")
          )}
        >
          <span className="font-bold mr-2 min-w-[83px]">Student 3:</span>
          <p className="text-base flex flex-row flex-wrap items-center">
            <span className="mr-2">So, am I right in thinking that</span>
            {renderSelect("34", 4, answers, setAnswers)}
            <span className="mr-2">?</span>
            {showResults && <Explain qa={qa} questionId="3C-3" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "16-3C-13")}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-col space-y-4">
          {[
            "a culture contains groups that make up one larger group",
            "acting differently isn't allowed for group membership",
            "it is important to be in the group that follows the cultural norms",
            "the number of sub-cultural groups should be limited",
          ].map((text, index) => (
            <div key={index} className="md:ml-12 flex items-start">
              <span className="h-6 w-6 text-xl flex items-center justify-center mr-3">
                {["①", "②", "③", "④"][index]}
              </span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <span className="font-bold mr-2 min-w-[83px]">Professor:</span>
          <p className="text-base">
            Yes. I hope this has cleared things up for you. OK. I think we're
            ready to move on and think about another characteristic of culture.
            {Kaisetsu(showResults, "16-3C-14")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JapaneseTestQuestion;
