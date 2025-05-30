"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const JapaneseExamQuestion = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "18_3A")?.qanda || [];
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
      {/* Question number and instruction */}
      <div className="mb-6">
        <h2 className="md:text-xl font-bold font-sans mb-2">
          第3問 次の問い(A・B)に答えよ。（配点 33）
        </h2>
      </div>

      {/* Part A instruction */}
      <div className="mb-6">
        <h3 className="md:text-lg font-bold">A</h3>
        <p className="ml-6 mb-4">
          次の問い(問1～3)のパラグラフ(段落)には、まとまりをよくするために取り
          除いた方がよい文が一つある。取り除く文として最も適当なものを、それぞれ下
          線部①～④のうちから一つずつ選べ。
        </p>
      </div>

      {/* Question 1 */}
      <div className="mb-6">
        <div
          className={cn(
            "flex items-center mb-2",
            showResults && qaFormat(qa, "3A-1")
          )}
        >
          <h4 className="text-lg font-bold font-sans mr-4">問1</h4>
          {renderSelect("27", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="3A-1" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "18-3A-1")}
        </div>

        {/* English paragraph */}
        <div className="ml-6 text-justify leading-6 md:leading-8">
          <p className="mb-2">
            <span className="ml-8">
              When you encounter unfamiliar things in a new environment, you may
              experience culture shock even in your own country. When Tsubasa
              started college life away from his family, everything seemed
              exciting and new to him, but then he began to feel unexpected
              anxiety about his surroundings.
            </span>
            <span className="ml-2 mr-1">①</span>
            <span className="border-b-2 border-black">
              He realized people sometimes misunderstood him because of his
              regional accent and expressions.
            </span>
            <span className="ml-2 mr-1">②</span>
            <span className="border-b-2 border-black">
              He knew that his parents missed him very much because he was their
              only child.
            </span>
            <span className="ml-2 mr-1">③</span>
            <span className="border-b-2 border-black">
              He also noticed many of his classmates had learned various things
              in high school that he had never even heard of.
            </span>
            Everyone seemed smarter, more mature, and even more fashionable than
            he was.
            <span className="ml-2 mr-1">④</span>
            <span className="border-b-2 border-black mr-1">
              He was afraid he was already too far behind in everything.
            </span>
            However, it turned out that most of the other students had more or
            less the same feelings of anxiety he had. Now, he enjoys studying at
            college without such feelings.
          </p>
        </div>
      </div>

      {/* Question 2 */}
      <div className="mb-6">
        <div
          className={cn(
            "flex items-center mb-2",
            showResults && qaFormat(qa, "3A-2")
          )}
        >
          <h4 className="text-lg font-bold font-sans mr-4">問2</h4>
          {renderSelect("28", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="3A-2" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "18-3A-2")}
        </div>

        {/* English paragraph about tomatoes */}
        <div className="ml-6 text-justify leading-6 md:leading-8">
          <p className="mb-2">
            <span className="ml-8">
              Is the tomato a vegetable or a fruit? There was a U.S. court case
              on this issue in the 1890s. At the time, people had to pay taxes
              for importing vegetables, but not for importing fruits.
              Biologically, fruits develop from a part in the base of a flower
              and contain seeds.
            </span>
            <span className="ml-2 mr-1">①</span>
            <span className="border-b-2 border-black">
              According to this scientific definition, tomatoes, as well as
              cucumbers, pumpkins, and green peppers, are fruits.
            </span>
            <span className="ml-2 mr-1">②</span>
            <span className="border-b-2 border-black">
              Contrary to what science says, most people consider the tomato a
              vegetable and use it as a vegetable.
            </span>
            <span className="ml-2 mr-1">③</span>
            <span className="border-b-2 border-black">
              For example, in some countries the tomato has been given names
              such as "golden apple" and "love apple."
            </span>
            <span className="ml-2 mr-1">④</span>
            <span className="border-b-2 border-black mr-2">
              Tomatoes are eaten cooked or raw as many vegetables are and not
              traditionally served for dessert like fruits.
            </span>
            The court concluded that the tomato was a vegetable based on the
            simple fact that most people considered it a vegetable.
          </p>
        </div>
      </div>

      {/* Question 3 */}
      <div className="mb-6">
        <div
          className={cn(
            "flex items-center mb-2",
            showResults && qaFormat(qa, "3A-3")
          )}
        >
          <h4 className="text-lg font-bold font-sans mr-4">問3</h4>
          {renderSelect("29", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="3A-3" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "18-3A-3")}
        </div>

        {/* English paragraph about insects as food */}
        <div className="ml-6 text-justify leading-6 md:leading-8">
          <p className="mb-2">
            <span className="ml-8">
              In response to the problem of the world's growing demand for
              animal protein, a conference was held to discuss the various
              benefits of using insects as an alternative source of food to
              pigs, chickens, and cows.
            </span>
            <span className="ml-2 mr-1">①</span>
            <span className="border-b-2 border-black">
              It isn't well known, but insects are an extremely healthy food as
              they are full of protein, vitamins, and minerals.
            </span>
            <span className="ml-2 mr-1">②</span>
            <span className="border-b-2 border-black">
              Insects have been around for millions of years, living with the
              dinosaurs and then very early human beings.
            </span>
            <span className="ml-2 mr-1">③</span>
            <span className="border-b-2 border-black">
              Raising insects can be environmentally friendly as they neither
              take up much space, eat much food, nor release much greenhouse
              gas.
            </span>
            <span className="ml-2 mr-1">④</span>
            <span className="border-b-2 border-black mr-2">
              Most are able to survive with little water, making them an ideal
              alternative food for locations with severe water shortages.
            </span>
            The evidence shows that there are many benefits of using insects as
            food. It just may take time to change people's minds about eating
            them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JapaneseExamQuestion;
