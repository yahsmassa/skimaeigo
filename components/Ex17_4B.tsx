"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex17_4B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "4B-1",
      qa: [
        {
          questionNumber: "39",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [
        "正解は④、翻訳参照",
        "This is a great way to share your creations with a wide audience.とあるので、④が自然",
      ],
    },
    {
      questionId: "4B-2",
      qa: [
        {
          questionNumber: "40",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [
        "正解は②、翻訳参照",
        "チームという単語があるので、Aと勘違いしやすいが、姉妹校との絆なのでB",
      ],
    },
    {
      questionId: "4B-3",
      qa: [
        {
          questionNumber: "41",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [
        "正解は④、翻訳参照",
        "締め切りの制約を満たしている、①でCategory Dがあってるようにも思えるが、ドラマティックなエンディングでないので違う、",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2 font-sans">
          <h1 className="text-lg font-bold">{"第４問"}</h1>
          <span className="text-gray-600">(配点 {15})</span>
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
      {/* Part 1: Exam Questions */}
      <div className="mb-12">
        <div className="mb-8">
          <p className="mb-4 font-sans">
            <span className="font-bold">B</span>{" "}
            次のページのビデオ制作コンテストに関するウェブサイトを読み、次の問い
            (問1～3)の <span className="border border-black px-2 mx-1">39</span>{" "}
            ～ <span className="border border-black px-2 mx-1">41</span>{" "}
            に入れるのに最も適当なものを、それぞれ下の
            ①～④のうちから一つずつ選べ。
          </p>
        </div>

        <div className={cn("mb-8", showResults && qaFormat(qa, "4B-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>
              The purpose of the IAYP Video Clip Competition is to provide{" "}
            </span>
            {renderSelect("39", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4B-1" />}
            {Kaisetsu(showResults, "17-4B-1")}
            <div className="pl-8 space-y-2">
              <p>① a place to meet new friends of the same age</p>
              <p>② an airplane ticket to Australia to create a video clip</p>
              <p>③ instructions to create a video clip on a computer</p>
              <p>④ opportunities for young people to exhibit their works</p>
            </div>
          </div>
        </div>

        <div className={cn("mb-8", showResults && qaFormat(qa, "4B-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              Members of a high school baseball team will submit a four-minute
              video clip about their bonds with players from a sister school
              abroad. Under which category should the video clip be entered?{" "}
            </span>
            {renderSelect("40", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4B-2" />}
            {Kaisetsu(showResults, "17-4B-2")}
          </div>
          <div className="pl-8 space-y-2">
            <p>① Category A</p>
            <p>② Category B</p>
            <p>③ Category C</p>
            <p>④ Category D</p>
          </div>
        </div>

        <div className={cn("mb-8", showResults && qaFormat(qa, "4B-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              Which of the following meets the submission requirements for this
              competition?{" "}
            </span>
            {renderSelect("41", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4B-3" />}
            {Kaisetsu(showResults, "17-4B-3")}
          </div>
          <div className="pl-8 space-y-2">
            <p>
              ① A nine-minute mystery drama featuring a young Japanese detective
            </p>
            <p>
              ② A six-minute video clip showing students practicing for a rugby
              game
            </p>
            <p>
              ③ A three-minute video clip that won third prize at a local film
              festival
            </p>
            <p>
              ④ A three-minute video clip uploaded to this website on October
              30, 2017
            </p>
          </div>
        </div>
      </div>

      {/* Part 2: Website Content */}
      <div className="max-w-4xl mx-auto">
        {/* Header Image */}
        <div className="mb-4 flex justify-center">
          <Image
            src="/images/Ex17-4B-1.webp"
            alt="Video Clip Competition: Call for Entries"
            className="w-[70%]"
            width={780}
            height={176}
            priority
          />
        </div>

        {/* Introduction */}
        <div className="mb-8 space-y-4">
          <p>
            The International Association of Young Producers (IAYP) is proud to
            open its annual Video Clip Competition again this year. This is a
            great way to share your creations with a wide audience. Anyone aged
            25 and under can participate. The IAYP invites submissions in the
            following four categories:
            {Kaisetsu(showResults, "17-4B-4")}
          </p>
        </div>

        {/* Categories Table */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse border border-black">
            <thead>
              <tr>
                <th className="border border-black p-2 text-left"></th>
                <th className="border border-black p-2 text-center">Theme</th>
                <th className="border border-black p-2 text-center">
                  Maximum length
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-2">Category A</td>
                <td className="border border-black p-2">
                  A topic related to a team sport
                </td>
                <td className="border border-black p-2 text-center">
                  3 minutes
                </td>
              </tr>
              <tr>
                <td className="border border-black p-2">Category B</td>
                <td className="border border-black p-2">
                  An idea connected to friendship
                </td>
                <td className="border border-black p-2 text-center">
                  5 minutes
                </td>
              </tr>
              <tr>
                <td className="border border-black p-2">Category C</td>
                <td className="border border-black p-2">
                  A social problem based on a true story
                </td>
                <td className="border border-black p-2 text-center">
                  5 minutes
                </td>
              </tr>
              <tr>
                <td className="border border-black p-2">Category D</td>
                <td className="border border-black p-2">
                  A mystery with a dramatic ending
                </td>
                <td className="border border-black p-2 text-center">
                  7 minutes
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Deadline and Prize Info */}
        <div className="mb-8 space-y-4">
          <p>
            The deadline is{" "}
            <u>11:59 pm, October 31, 2017 (Japan Standard Time)</u>. The three
            best clips in each category will be selected by a committee of
            famous video creators and posted on this website in December. One
            overall grand champion will be awarded a ticket to the next IAYP
            Conference in Sydney, Australia. So, don&apos;t miss this chance!
            Get out your video camera and start filming!
            {Kaisetsu(showResults, "17-4B-5")}
          </p>
        </div>

        {/* Steps */}
        <div className="mb-8">
          <h2 className="font-bold mb-4">Follow these steps:</h2>
          <ul className="list-none space-y-2 mb-2">
            <li className="flex items-start">
              <span className="mr-2">▶</span>
              <span>
                Shoot a video and edit it on a computer to an appropriate length
                for the category you choose.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">▶</span>
              <span>
                Click <span className="border border-black px-1">here</span> to
                enter your details and upload your video clip.
              </span>
            </li>
          </ul>
          {Kaisetsu(showResults, "17-4B-6")}
        </div>

        {/* Rules */}
        <div className="mb-8">
          <div className="md:relative">
            <div className="md:pr-[260px]">
              <h2 className="font-bold mb-4">Rules and conditions:</h2>
              <ul className="list-none space-y-2 mb-2">
                <li className="flex items-start">
                  <span className="mr-2">▶</span>
                  <span>
                    Each person or group can choose only one category.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">▶</span>
                  <span>
                    Only clips sent before the deadline will be accepted.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">▶</span>
                  <span>
                    Clips must be original and submitted to a competition for
                    the first time.
                  </span>
                </li>
              </ul>
              {Kaisetsu(showResults, "17-4B-7")}
            </div>

            {/* Woman with Camera Image */}
            <div className="mt-4 md:mt-0 md:absolute md:top-0 md:right-0">
              <Image
                src="/images/Ex17-4B-2.webp"
                alt="Woman with video camera"
                className="w-[100px] md:w-full"
                width={240}
                height={283}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex17_4B;
