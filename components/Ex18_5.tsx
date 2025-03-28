"use client";
import Image from "next/image";
import { Paperclip } from "lucide-react";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex18_5 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "5-1",
      qa: [
        {
          questionNumber: "41",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      points: 6,
      explanation: [
        "正解は③ 彼らの故郷の惑星以外で生命を探すこと 翻訳参照",
        "assist intelligent creatures 知的な生物を助ける、* invade: 侵略する、* expand their colonies: 植民地を拡大する",
      ],
    },
    {
      questionId: "5-2",
      qa: [
        {
          questionNumber: "42",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      points: 6,
      explanation: ["正解は② 高度な技術を持つ", "DAY4 翻訳参照、"],
    },
    {
      questionId: "5-3",
      qa: [
        {
          questionNumber: "43",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      points: 6,
      explanation: [
        "正解は② 懸念、ためらい",
        "* have reservations about: ～についてためらいがある、DAY9 翻訳参照、",
      ],
    },
    {
      questionId: "5-4",
      qa: [
        {
          questionNumber: "44",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      isOrderFree: true,
      answerString: "",
      points: 6,
      explanation: ["正解は① タコのような形をした生き物", "DAY19 翻訳参照、"],
    },
    {
      questionId: "5-5",
      qa: [
        {
          questionNumber: "45",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: [
        "正解は③ ある種の液体の中で暮らす",
        "incorrectly accumed ..で謝った仮定をしていた、「We, creatures living in liquid」とあるので探索者たち自身が液体の中で生活しているという前提だったことがわかる、DAY40 翻訳参照、",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第５問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {30})</span>
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
      <div className="mb-8 font-sans">
        <p className="text-base">
          次の日誌の抜粋を読み、下の問い(問1～5)の
          <span className="inline-block mx-2 border border-black px-4">41</span>
          ～
          <span className="inline-block mx-2 border border-black px-4">45</span>
          に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
        </p>
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold text-center mb-8">
        Selections From the Exploration Journal for Planet X
      </h1>

      {/* Journal Entries */}
      <div className="space-y-6">
        {/* Day 1 */}
        <div className="border border-black p-6">
          <h2 className="font-bold mb-4 underline">DAY 1</h2>
          <p className="leading-relaxed">
            Our mission of scientific discovery continues, and there is
            something exciting to report. We may have finally found a planet
            capable of supporting life. The nearby planets were either too hot
            or too dry to support life, but this planet seems to be different.
            Its surface is mostly a blue liquid, though it is spotted with some
            green and brown parts, and some kind of white substance seems to be
            moving around the planet.
            {Kaisetsu(showResults, "18-5-1")}
          </p>
        </div>

        {/* Day 4 */}
        <div className="border border-black p-6">
          <h2 className="font-bold mb-4 underline">DAY 4</h2>
          <p className="leading-relaxed">
            Now we are orbiting the planet. It seems that our assumption was
            correct! There are a few mechanical devices circling around it and
            their designs are rather complex. They were certainly made by some
            kind of intelligent beings. Are these machines part of a monitoring
            system? Have they signaled our approach? There doesn&apos;t seem to
            be any threat, so we have decided to ignore them and get closer to
            the planet. I hope that their inventors are friendly.
            {Kaisetsu(showResults, "18-5-2")}
          </p>
        </div>

        {/* Day 8 */}
        <div className="border border-black p-6">
          <h2 className="font-bold mb-4 underline">DAY 8</h2>
          <p className="leading-relaxed">
            Unlike our planet, which is totally covered with the precious liquid
            that sustains us, the green and brown parts of this planet are too
            dry to support life. The blue part is mostly H<sub>2</sub>O in a
            liquid state. Although it is liquid, it is not quite the same as the
            liquid on our home planet. Still, we might be able to find life
            here. At least, according to our equipment, there seems to be
            something alive down there. We are ready to start direct observation
            and will soon dive in. I&apos;m so excited that I won&apos;t be able
            to sleep tonight!
            {Kaisetsu(showResults, "18-5-3")}
          </p>
        </div>

        {/* Day 9 */}
        <div className="border border-black p-6">
          <h2 className="font-bold mb-4 underline">DAY 9</h2>
          <p className="leading-relaxed">
            We succeeded in entering this unexplored liquid safely. The scenery
            around us was very similar to that of our planet, with soft plants
            gently waving back and forth. We also noticed a variety of thin
            swimming creatures. How exciting! We have found life on this planet!
            However, we cannot see any creatures capable of producing an
            advanced civilization. Without arms, these swimming creatures
            wouldn&apos;t be able to build complex machines even if they were
            smart. Are the leaders of this planet hiding from us? Do they have{" "}
            <span className="border-b-2 border-black">reservations</span> about
            meeting us? Is that why they use those flying objects to check out
            space? Hopefully, we will be able to find some answers.
            {Kaisetsu(showResults, "18-5-4")}
          </p>
        </div>

        {/* Day 12 */}
        <div className="border border-black p-6">
          <h2 className="font-bold mb-4 underline">DAY 12</h2>
          <p className="leading-relaxed">
            We found a big object lying on the bottom. Its long body looked
            somewhat like our spaceship. It sat silently looking very old and
            damaged. Apparently, it isn&apos;t being used anymore. Maybe it is a
            part of the remains of this planet&apos;s ancient civilization.
            {Kaisetsu(showResults, "18-5-5")}
          </p>
        </div>

        {/* Day 19 */}
        <div className="border border-black p-6">
          <h2 className="font-bold mb-4 underline">DAY 19</h2>
          <p className="leading-relaxed">
            Since we started our dive, we have seen many more unusual creatures.
            We were especially surprised to find one that looked very similar to
            us. The upper part of its body was round and soft. Underneath that
            were two large eyes and several long arms. It escaped quickly,
            leaving a cloud of black substance. We don&apos;t know if it is the
            most intelligent life on this planet, but our expectations for new
            discoveries continue to grow.
            {Kaisetsu(showResults, "18-5-6")}
          </p>
        </div>

        {/* Day 39 */}
        <div className="border border-black p-6">
          <h2 className="font-bold mb-4 underline">DAY 39</h2>
          <p className="leading-relaxed">
            This part of our investigation will soon come to an end. We have
            found more remains and abandoned objects like the one we found
            earlier, but there have been no signs of the creatures who made
            them. Perhaps the leaders of this planet have died out. Anyway, we
            found life on this planet, which is a very big discovery. We must
            leave this planet for now, but we will certainly come back someday
            to continue our research. We will return home with amazing reports.
            {Kaisetsu(showResults, "18-5-7")}
          </p>
        </div>

        {/* Day 40 */}
        <div className="border border-black p-6">
          <h2 className="font-bold mb-4 underline">DAY 40</h2>
          <p className="leading-relaxed">
            We silently floated up to the surface and then into the air. Just as
            we were leaving the planet, we saw a lot of strange creatures on the
            dry areas. What a shock! We, creatures living in liquid, had never
            imagined creatures like them! Floating safely in our ship&apos;s
            liquid, we realized that our common sense had led us to the wrong
            conclusion.
            {Kaisetsu(showResults, "18-5-8")}
          </p>
        </div>
      </div>

      {/* Questions Section */}
      <div className="mt-12 space-y-12">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>What was the purpose of the explorers&apos; journey?</span>
            {renderSelect("41", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-1" />}
            {Kaisetsu(showResults, "18-5-9")}
          </div>

          <div className="pl-8 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ①
              </span>
              <span>To assist intelligent creatures on the planet</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ②
              </span>
              <span>To invade a planet and expand their colonies</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ③
              </span>
              <span>To search for life outside their home planet</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ④
              </span>
              <span>To test the performance of their new spaceship</span>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              When the explorers were observing the planet from space, they
              imagined that the intelligent creatures on it would
            </span>
            {renderSelect("42", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-2" />}
            {Kaisetsu(showResults, "18-5-10")}
          </div>

          <div className="pl-8 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ①
              </span>
              <span>be aggressive toward others</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ②
              </span>
              <span>have advanced technology</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ③
              </span>
              <span>have no interest in space</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ④
              </span>
              <span>no longer live there</span>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              The word{" "}
              <span className="border-b-2 border-black">reservations</span> as
              used in DAY 9 is closest in meaning to
            </span>
            {renderSelect("43", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-3" />}
            {Kaisetsu(showResults, "18-5-11")}
          </div>

          <div className="pl-8 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ①
              </span>
              <span>appointments</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ②
              </span>
              <span>concerns</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ③
              </span>
              <span>expectations</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ④
              </span>
              <span>protections</span>
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>
              Which of the following best describes the author of the journal?
            </span>
            {renderSelect("44", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-4" />}
            {Kaisetsu(showResults, "18-5-12")}
          </div>

          <div className="pl-8 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ①
              </span>
              <span>A being whose shape resembles an octopus</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ②
              </span>
              <span>A human scientist exploring other planets</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ③
              </span>
              <span>A space creature which looks like a human</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ④
              </span>
              <span>An intelligent flat animal with no arms</span>
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-5"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
            <span>
              The explorers incorrectly assumed that all intelligent creatures
              would
            </span>
            {renderSelect("45", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-5" />}
            {Kaisetsu(showResults, "18-5-13")}
          </div>

          <div className="pl-8 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ①
              </span>
              <span>be less creative than their species</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ②
              </span>
              <span>have advanced to the land</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ③
              </span>
              <span>live in some kind of liquid</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 flex items-center justify-center ">
                ④
              </span>
              <span>understand their language</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex18_5;
