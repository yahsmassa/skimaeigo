"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

export default function Ex25_1() {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "1-1",
      qa: [
        {
          questionNumber: "1",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解は④「水槽について情報を必要としている初心者」、Beginners!（初心者の皆さん！）という呼びかけの見出しより",
      ],
    },
    {
      questionId: "1-2",
      qa: [
        {
          questionNumber: "2",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解は②「適切な空間を確保する」",
        "自然の装飾品と人工の装飾品は魚を健康に保つために必要であり，水槽内の50〜70％の面積を覆うべきです）と，魚には動き回るためのスペースが必要です。水槽の端の周りに空間を残しましょう",
      ],
    },
    {
      questionId: "1-3",
      qa: [
        {
          questionNumber: "3",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "正解は④、「背の高い装飾品や植物は後ろに置き，背の低いものは前に置いてください」より",
        "①は背の高さが逆になっている。②は柔らかい植物がない。③は装飾品の背の高さが前から順に高くなっているのではなく，左右から中心に向け，さらに後に向けて高くなっている。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第１問"}</h1>
          <span className="text-gray-600 font-sans">(配点 6)</span>
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
      <h1 className="text-center text-2xl mb-2">Beginners!</h1>
      <h2 className="text-center text-xl mb-4">
        Decorate Your Freshwater Aquarium
      </h2>

      <p className="text-center mb-6 italic">
        Start your wonderful hobby of keeping fish by following these three easy
        steps!
      </p>

      <div className="space-y-6">
        {/* Section 1 */}
        <div>
          <h3 className="text-lg font-bold mb-3">
            1. Consider what kind of fish you want
          </h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="mb-4">
                Some fish need open spaces for swimming, while others want
                places to hide. Also, some fish need sand to cover themselves
                in. For other non-hiding fish, small stones can be used.
                {Kaisetsu(showResults, "25-1-1")}
              </p>
            </div>
            {/* Fish and bottom material illustration will be added as img */}
            <div className="w-32">
              <Image
                src="/images/Ex25-1-1.jpg"
                alt="Fish and bottom material illustration"
                width={128}
                height={128}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-lg font-bold mb-3">2. Select decorations</h3>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex-1">
              <p className="mb-4">
                Natural and artificial decorations are necessary to keep fish in
                good health and should cover 50-70% of the area. Fish from
                fast-moving or deep water need solid objects such as small rocks
                and logs. Those from slow-moving or shallow water prefer soft
                objects like plants. Avoid any plastic or rubber items not
                intended for aquariums. Clean all decorations carefully to make
                sure there is nothing harmful on them.
                {Kaisetsu(showResults, "25-1-2")}
              </p>
            </div>
            <div className="w-[70%] md:w-48 mx-auto">
              <Image
                src="/images/Ex25-1-2.jpg"
                alt="Natural and artificial decorations"
                width={192}
                height={192}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-lg font-bold mb-3">3. Position decorations</h3>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex-1">
              <p className="mb-4">
                Fish need room to move. Leave space around the edges of the
                tank. Place tall decorations and plants at the back, and put
                short ones at the front.
                {Kaisetsu(showResults, "25-1-3")}
              </p>
            </div>
            {/* Tank decoration position illustration will be added as img */}
            <div className="w-[70%] md:w-48 mx-auto">
              <Image
                src="/images/Ex25-1-3.jpg"
                alt="Tank decoration positions"
                width={192}
                height={192}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="mt-8 space-y-6">
          {/* Question 1 */}
          <div className={cn("space-y-4", showResults && qaFormat(qa, "1-1"))}>
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
              <span>
                The customers most likely to benefit from this pamphlet are{" "}
              </span>
              {renderSelect("1", 4, answers, setAnswers)}.
              {showResults && <Explain qa={qa} questionId="1-1" />}
              {Kaisetsu(showResults, "25-1-4")}

            </div>
            <div className="pl-2 md:pl-8 space-y-2">
              {[
                "aquarium lovers who are looking for discount prices",
                "experienced fish lovers who need specialized advice",
                "fish fans who want different methods of feeding their fish",
                "newcomers who need to be informed about their aquarium",
              ].map((text, index) => (
                <div key={index} className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center">
                    {"①②③④"[index]}
                  </span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className={cn("space-y-4", showResults && qaFormat(qa, "1-2"))}>
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
              <span className="flex gap-1">
                When arranging decorations to keep your fish in good health, it
                is a good idea to
              </span>
              {renderSelect("2", 4, answers, setAnswers)}.
              {showResults && <Explain qa={qa} questionId="1-2" />}
              {Kaisetsu(showResults, "25-1-5")}

            </div>
            <div className="pl-2 md:pl-8 space-y-2">
              {[
                "avoid using solid and soft objects",
                "provide the right amount of open space",
                "reuse your old toothbrush as a decoration",
                "wash decorations briefly and roughly",
              ].map((text, index) => (
                <div key={index} className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center">
                    {"①②③④"[index]}
                  </span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Question 3 */}
          <div className={cn("space-y-4", showResults && qaFormat(qa, "1-3"))}>
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
              <span className="flex gap-1">
                According to the pamphlet, which picture best shows how to
                decorate for fish from slow-moving water?
              </span>
              {renderSelect("3", 4, answers, setAnswers)}.
              {showResults && <Explain qa={qa} questionId="1-3" />}
              {Kaisetsu(showResults, "25-1-6")}

            </div>
            {/* Four aquarium illustrations */}
            <div className="w-full mx-auto md:w-full">
              <Image
                src="/images/Ex25-1-4.jpg"
                alt="Four aquarium decoration examples"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
