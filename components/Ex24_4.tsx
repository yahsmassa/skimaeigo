"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex24_4 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "24_4")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  // articleData は展開済みのため削除
  const questionData = {
    questionNumber: "第4問",
    points: "(配点 16)",
    instruction:
      "Your college English club's room has several problems and you want to redesign it. Based on the following article and the results of a questionnaire given to members, you make a handout for a group discussion.",
  };
  // questionnaireData は展開済みのため削除

  const NumberBox = ({ number }: { number: string }) => (
    <span className="font-sans text-center inline-block align-middle border-2 border-gray-400 w-12 h-8 mx-1">
      {number}
    </span>
  );

  interface Content {
    text?: string;
    numberBox?: string;
    note?: string;
    list?: string[];
  }

  const renderContent = (content: Content) => {
    if (content.list) {
      return (
        <div className="pl-4 space-y-1">
          {content.list.map((item: string, index: number) => (
            <p key={index}>
              {String.fromCharCode(65 + index)}. {item}
              {index === 0 && content.numberBox && (
                <NumberBox number={content.numberBox} />
              )}
            </p>
          ))}
        </div>
      );
    }

    return (
      <p className="pl-4">
        {content.text}
        {content.numberBox && <NumberBox number={content.numberBox}  />}
        {content.note && <span className="text-gray-600">{content.note}</span>}
      </p>
    );
  };

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第４問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {16})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 10分 500単語弱】
          </span>

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
      {/* What Makes a Good Classroom? */}
      <p className="mb-6">
        {questionData.instruction} {Kaisetsu(showResults, "24-4-1")}
      </p>
      <div className="p-6 border-2 border-gray-300 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-3">What Makes a Good Classroom?</h2>
          <p className="italic">
            Diana Bashworth, writer at Trends in Education
          </p>
        </div>

        <div className="space-y-1 text-justify">
          <p className="indent-7">
            As many schools work to improve their classrooms, it is important to have some ideas for making design decisions. SIN, which stands for Stimulation, Individualization, and Naturalness, is a framework that might be helpful to consider when designing classrooms. {' '}{Kaisetsu(showResults, "24-4-2")}
          </p>

          <div className="mb-4">
            <p className="indent-7">
              The first, Stimulation, has two aspects: color and complexity. This has to do with the ceiling, floor, walls, and interior furnishings.
              <span>
                {" "}
                For example, A classroom that lacks colors might be uninteresting. A classroom should not be too colorful. A bright color could be used on one wall, on the floor, window coverings, or furniture. It can be visually distracting to have too many things displayed on walls. 20 to 30 percent of wall space remain free
              </span>{' '}{Kaisetsu(showResults, "24-4-3")}
            </p>
          </div>

          <div className="mb-4">
            <p className="indent-7">
              The next item in the framework is Individualization, which includes two considerations: ownership and flexibility. {' '}Ownership refers to whether the classroom feels personalized. Examples of this include having chairs and desks that are suitable for student sizes and ages, and providing storage space, and areas for displaying student works or projects.                   Flexibility is about having a classroom that allows for different kinds of activities.
                  {' '}{Kaisetsu(showResults, "24-4-4")}
            </p>
          </div>

          <div className="mb-4">
            <p className="indent-7">
              Naturalness relates to the quality and quantity of light, both natural and artificial, and the temperature of the classroom. Too much natural light may make screens and boards difficult to see;students may have difficulty reading or writing if there is a lack of light. In addition, hot summer classrooms do not promote effective study. Schools should install systems allowing for the adjustment of both light and temperature.
              {' '}{Kaisetsu(showResults, "24-4-5")}
            </p>
          </div>

          <p className="indent-7">
            While Naturalness is more familiar to us, and therefore often considered the priority, the other components are equally important. Hopefully, these ideas can guide your project to a successful end. {' '}{Kaisetsu(showResults, "24-4-6")}
          </p>
        </div>
      </div>
      {/* Results of the Questionnaire */}
      <div className="mt-8 border-2 border-gray-300 rounded-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-bold md:mx-auto">Results of the Questionnaire</h2>
          <Image
            src="/images/Ex24-4-1.jpg"
            alt="Rabbit illustration"
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </div>

        {/* Q1 Section */}
        <div className="mb-8">
          <h3 className="font-semibold text-sm md:text-[16px] mb-4 font-sans">
            Q1: Choose any items that match your use of the English club's room.
          </h3>
          <div className="border-2 border-gray-300 ">
            <Image
              src="/images/Ex24-4-2.webp"
              alt="Bar graph showing club room usage"
              width={800}
              height={600}
              className="w-full"
            />
          </div>
        </div>

        {/* Q2 Section */}
        <div>
          <h3 className="font-semibold text-sm md:text-[16px]  mb-2 font-sans">
            Q2: What do you think about the current English club's room?
          </h3>
          <p className="font-medium mb-4">
            Main comments:
          </p>
          <div className="space-y-4">
            <div className="text-sm md:text-base grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="font-medium font-sans">Student 1 (S 1):</span>
              <span>
                I can't see the projector screen and whiteboard well on a sunny day. Also, there's no way to control the temperature.
              </span>
            </div>
            <div className="text-sm md:text-base grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="font-medium font-sans">S 2:</span>
              <span>
                By the windows, the sunlight makes it hard to read. The other side of the room doesn't get enough light. Also, the books are disorganized and the walls are covered with posters. It makes me feel uncomfortable.
              </span>
            </div>
            <div className="text-sm md:text-base grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="font-medium font-sans">S 3:</span>
              <span>
                The chairs don't really fit me and the desks are hard to move when we work in small groups. Also, lots of members speak Japanese, even though it's an English club.{" "}
                <div className="-mb-3">{Kaisetsu(showResults, "24-4-7")}</div>
              </span>
            </div>
            <div className="text-sm md:text-base grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="font-medium font-sans">S 4:</span>
              <span>
                The pictures of foreign countries on the walls make me want to speak English. Everyone likes the sofas — they are so comfortable that we often use the room for sleeping!
              </span>
            </div>
            <div className="text-sm md:text-base grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="font-medium font-sans">S 5:</span>
              <span>
                The room is so far away, so I hardly ever go there! Aren't there other rooms available?
              </span>
            </div>
            <div className="text-sm md:text-base grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-2 items-start">
              <span className="font-medium font-sans">S 6:</span>
              <span>
                There's so much gray in the room. I don't like it. But it's good that there are plenty of everyday English phrases on the walls!{" "}
                <div className="-mb-3">{Kaisetsu(showResults, "24-4-8")}</div>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Handout */}
      <h2 className="text-lg my-2">Your discussion handout:</h2>

      <div className="border-2 border-gray-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-center mb-6">
          Room Improvement Project
        </h3>

        <div className="mb-6">
          <h4 className="font-bold mb-4">■ SIN Framework</h4>
          <div className="space-y-2 pl-4">
            <div className="whitespace-normal">
              - What it is :
              <span className="font-sans text-center inline-block align-middle border-2 border-gray-400 w-12 h-8 mx-1">24</span>
            </div>
            <div className="whitespace-normal">
              - SIN = Stimulation, Individualization, Naturalness
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold mb-4">■ Design Recommendations Based on SIN and Questionnaire Results</h4>
          <div className="space-y-4 pl-4">
            <div>
              <p>- Stimulation:</p>
              <p className="pl-4">
                Cover the floor with a colorful rug and
                <span className="font-sans text-center inline-block align-middle border-2 border-gray-400 w-12 h-8 mx-1">25</span>
              </p>
            </div>
            <div>
              <p>- Individualization:</p>
              <p className="pl-4">
                Replace room furniture.
                <span> (tables with wheels → easy to move around)</span>
              </p>
            </div>
            <div>
              <p>- Naturalness:</p>
              <span className="font-sans text-center inline-block align-middle border-2 border-gray-400 w-12 h-8 mx-1">26</span>
              <div className="pl-4 space-y-1">
                <p> A. Install blinds on windows. </p>
                <p>B. Make temperature control possible.</p>
                <p>C. Move projector screen away from windows.</p>
                <p>D. Place sofas near walls.</p>
                <p>E. Put floor lamp in darker corner.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold mb-4">■ Other Issues to Discuss</h4>
          <div className="space-y-2 pl-4">
            <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-2 whitespace-normal items-start">
              <span className="font-sans">-</span>
              <span>
                The majority of members
                <span className="font-sans text-center inline-block align-middle border-2 border-gray-400 w-12 h-8 mx-1">27</span>
                the room as
                <span className="font-sans text-center inline-block align-middle border-2 border-gray-400 w-12 h-8 mx-1">28</span>
                's comment mentioned. How can we solve this?
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-2 whitespace-normal items-start">
              <span className="font-sans">-</span>
              <span>
                Based on both the graph and
                <span className="font-sans text-center inline-block align-middle border-2 border-gray-400 w-12 h-8 mx-1">29</span>
                's comment, should we set a language rule in the room to motivate members to speak English more?
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-x-2 whitespace-normal items-start">
              <span className="font-sans">-</span>
              <span>
                <span className="font-sans">S 5</span> doesn't like the location, but we can't change the room, so let's think about how to encourage members to visit more often.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ここから解答欄 */}
      <div className="max-w-3xl p-4 space-y-8">
        {/* 問1 */}
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "4-1")
          )}
        >
          <div className="flex flex-wrap items-baseline mb-4">
            <span className="font-medium mr-2 w-7 font-sans">
              問1
            </span>
            <span>
              Choose the best option for
            </span>
            {renderSelect(
              "24",
              4,
              answers,
              setAnswers
            )}
            <>
              <Explain qa={qa} questionId={"4-1"} isShow={showResults} />
              <span className="mr-2"></span>
              {Kaisetsu(showResults, "24-4-11")}
            </>
          </div>
          <div className="space-y-1 pl-6">
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[0]}</span>
              <span className="text-gray-800">A guide to show which colors are appropriate to use in classrooms</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[1]}</span>
              <span className="text-gray-800">A method to prioritize the needs of students and teachers in classrooms</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[2]}</span>
              <span className="text-gray-800">A model to follow when planning classroom environments</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[3]}</span>
              <span className="text-gray-800">A system to understand how classrooms influence students' performance</span>
            </div>
          </div>
        </div>

        {/* 問2 */}
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "4-2")
          )}
        >
          <div className="flex flex-wrap items-baseline mb-4">
            <span className="font-medium mr-2 w-7 md:w-10 font-sans">
              問2
            </span>
            <span>
              Choose the best option for
            </span>
            {renderSelect(
              "25",
              4,
              answers,
              setAnswers
            )}
            <>
              <Explain qa={qa} questionId={"4-2"} isShow={showResults} />
              <span className="mr-2"></span>
              {Kaisetsu(showResults, "24-4-12")}
            </>
          </div>
          <div className="space-y-1 pl-6">
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[0]}</span>
              <span className="text-gray-800">move the screen to a better place</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[1]}</span>
              <span className="text-gray-800">paint each wall a different color</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[2]}</span>
              <span className="text-gray-800">put books on shelves</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[3]}</span>
              <span className="text-gray-800">reduce displayed items</span>
            </div>
          </div>
        </div>

        {/* 問3 */}
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "4-3")
          )}
        >
          <div className="flex flex-wrap items-baseline mb-4">
            <span className="font-medium mr-2 w-7 md:w-10 font-sans">
              問3
            </span>
            <span>
              You are checking the handout. You notice an error in the recommendations under Naturalness. Which of the following should you
              <strong className="ml-1 font-semibold underline">remove</strong> {' '}?
            </span>
            {renderSelect(
              "26",
              5,
              answers,
              setAnswers
            )}
            <>
              <Explain qa={qa} questionId={"4-3"} isShow={showResults} />
              <span className="mr-2"></span>
              {Kaisetsu(showResults, "24-4-13")}
            </>
          </div>
          <div className="space-y-1 pl-6">
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[0]}</span>
              <span className="text-gray-800">A</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[1]}</span>
              <span className="text-gray-800">B</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[2]}</span>
              <span className="text-gray-800">C</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[3]}</span>
              <span className="text-gray-800">D</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[4]}</span>
              <span className="text-gray-800">E</span>
            </div>
          </div>
        </div>

        {/* 問4 */}
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "4-4")
          )}
        >
          {/* 問４ */}
          <div className="flex flex-wrap items-baseline mb-4">
            <span className="font-medium mr-2 w-7 md:w-10 font-sans">
              問4
            </span>
            <span>
              Choose the best options for
            </span>
            {renderSelect("27", 5, answers, setAnswers)}
            <span className="mx-1">and</span>
            {renderSelect("28", 6, answers, setAnswers)}
            <>
              <Explain qa={qa} questionId={"4-4"} isShow={showResults} />
              <span className="mr-2"></span>
              {Kaisetsu(showResults, "24-4-14")}
            </>
          </div>
          <div className="space-y-1 pl-6">
            <div className="mb-2 justify-start">
              <NumberBox number={"27"} />
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[0]}</span>
              <span className="text-gray-800">borrow books from</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[1]}</span>
              <span className="text-gray-800">can't easily get to</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[2]}</span>
              <span className="text-gray-800">don't use Japanese in</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[3]}</span>
              <span className="text-gray-800">feel anxious in</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[4]}</span>
              <span className="text-gray-800">take naps in</span>
            </div>
          </div>
          <div className="space-y-1 pl-6">
            <div className="mb-2 justify-start">
              <NumberBox number={"28"} />
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[0]}</span>
              <span className="text-gray-800">S 1</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[1]}</span>
              <span className="text-gray-800">S 2</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[2]}</span>
              <span className="text-gray-800">S 3</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[3]}</span>
              <span className="text-gray-800">S 4</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[4]}</span>
              <span className="text-gray-800">S 5</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[5]}</span>
              <span className="text-gray-800">S 6</span>
            </div>
          </div>
        </div>

        {/* 問5 */ }
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "4-5")
          )}
        >
          <div className="flex flex-wrap items-baseline mb-4">
            <span className="font-medium mr-2 w-7 md:w-10 font-sans">
              問5
            </span>
            <span>
              Choose the best option for
            </span>
            {renderSelect(
              "29",
              6,
              answers,
              setAnswers
            )}
              <Explain qa={qa} questionId={"4-5"} isShow={showResults} />
          </div>
          <div className="space-y-1 pl-6">
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[0]}</span>
              <span className="text-gray-800">S 1</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[1]}</span>
              <span className="text-gray-800">S 2</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[2]}</span>
              <span className="text-gray-800">S 3</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[3]}</span>
              <span className="text-gray-800">S 4</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[4]}</span>
              <span className="text-gray-800">S 5</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[5]}</span>
              <span className="text-gray-800">S 6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex24_4;
