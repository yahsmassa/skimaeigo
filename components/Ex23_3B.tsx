"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex23_3B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "23_3B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第３問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {9})</span>
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
      {/* Context */}
      <div className="mb-6">
        <p className="text-gray-700">
          <span className="font-bold">B</span> Your English club will make an
          &quot;adventure room&quot; for the school festival. To get some ideas,
          you are reading a blog about a room a British man created.
          {Kaisetsu(showResults, "23-3B-0")}
        </p>
      </div>
      {/* Blog Content */}
      <div className="border border-gray-800 p-8">
        <h1 className="text-xl text-center mb-6">
          Create Your Own &quot;Home Adventure&quot;
        </h1>

        <div className="space-y-6">
          <p>
            Last year, I took part in an &quot;adventure room&quot; experience.
            I really enjoyed it, so I created one for my children. Here are some
            tips on making your own.
            {Kaisetsu(showResults, "23-3B-1")}
          </p>

          {/* Key Steps Diagram */}
          <div className="my-8">
            <div className="border border-gray-300 p-4 bg-gray-50">
              <h2 className="text-center font-bold mb-4">
                Key Steps in Creating an Adventure
              </h2>
              <Image
                src="/images/Ex23-3B-1.jpg"
                alt="Flow diagram showing: theme → storyline → puzzles → costumes"
                className="w-full"
                width={500}
                height={100}
              />
            </div>
          </div>

          <div className="space-y-4">
            <p>
              First, pick a theme. My sons are huge Sherlock Holmes fans, so I
              decided on a detective mystery. I rearranged the furniture in our
              family room, and added some old paintings and lamps I had to set
              the scene.
              {Kaisetsu(showResults, "23-3B-2")}
            </p>

            <p>
              Next, create a storyline. Ours was{" "}
              <span className="italic">The Case of the Missing Chocolates</span>
              . My children would be &quot;detectives&quot; searching for clues
              to locate the missing sweets.
              {Kaisetsu(showResults, "23-3B-3")}
            </p>

            <p>
              The third step is to design puzzles and challenges. A useful idea
              is to work backwards from the solution. If the task is to open a
              box locked with a three- digit padlock, think of ways to hide a
              three-digit code. Old books are fantastic for hiding messages in.
              I had tremendous fun underlining words on different pages to form
              mystery sentences. Remember that the puzzles should get
              progressively more difficult near the final goal. To get into the
              spirit, I then had the children wear costumes. My eldest son was
              excited when I handed him a magnifying glass, and immediately
              began acting like Sherlock Holmes. After that, the children
              started to search for the first clue.
              {Kaisetsu(showResults, "23-3B-4")}
            </p>

            <p>
              This &quot;adventure room&quot; was designed specifically for my
              family, so I made some of the challenges personal. For the final
              task, I took a couple of small cups and put a plastic sticker in
              each one, then filled them with yogurt. The &quot;detectives&quot;
              had to eat their way to the bottom to reveal the clues. Neither of
              my kids would eat yogurt, so this truly was tough for them. During
              the adventure, my children were totally focused, and they enjoyed
              themselves so much that we will have another one next month.
              {Kaisetsu(showResults, "23-3B-5")}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-4 mb-8">— 16 —</div>
      {/* Questions Section */}
      <div className="mt-8 space-y-12">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3B-1"))}>
          <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
          <span>
            Put the following events (①～④) into the order in which they
            happened.
          </span>
          <div className="flex flex-row flex-wrap">
            <div className="flex flex-row mb-2">
              {renderSelect("18", 4, answers, setAnswers)}
              <span className="md:mx-1">→</span>
              {renderSelect("19", 4, answers, setAnswers)}
              <span className="md:mx-1">→</span>
            </div>
            <div className="flex flex-row mb-2">
              {renderSelect("20", 4, answers, setAnswers)}
              <span className="md:mx-1">→</span>
              {renderSelect("21", 4, answers, setAnswers)}
            </div>
          </div>
          <div className="flex flex-row gap-2">
            {showResults && <Explain qa={qa} questionId="3B-1" />}
            {Kaisetsu(showResults, "23-3B-6")}
          </div>
          {[
            "The children ate food they are not fond of.",
            "The children started the search for the sweets.",
            "The father decorated the living room in the house.",
            "The father gave his sons some clothes to wear.",
          ].map((answer, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{answer}</span>
            </div>
          ))}
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3B-2"))}>
          <div className="flex items-start gap-2 mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              If you follow the father&apos;s advice to create your own
              &quot;adventure room,&quot; you should
            </span>
            {renderSelect("22", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="3B-2" />}
            {Kaisetsu(showResults, "23-3B-7")}
          </div>
          {[
            "concentrate on three-letter words",
            "leave secret messages under the lamps",
            "make the challenges gradually harder",
            "practise acting like Sherlock Holmes",
          ].map((answer, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{answer}</span>
            </div>
          ))}
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3B-3"))}>
          <div className="flex items-center mb-4 flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>From this story, you understand that the father</span>
            {renderSelect("23", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="3B-3" />}
            {Kaisetsu(showResults, "23-3B-8")}
          </div>
          {[
            "became focused on searching for the sweets",
            "created an experience especially for his children",
            "had some trouble preparing the adventure game",
            "spent a lot of money decorating the room",
          ].map((answer, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{answer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ex23_3B;
