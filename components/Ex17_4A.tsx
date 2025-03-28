"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex17_4A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "4A-1",
      qa: [
        {
          questionNumber: "35",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: ["正解は③、翻訳参照"],
    },
    {
      questionId: "4A-2",
      qa: [
        {
          questionNumber: "36",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [
        "正解は①、３段めの翻訳参照",
        "solid surface、multi-court、glassと続き natural playgroundが同等だが、playgorundの平均が２分を超えていたと説明しているので、グラフをみると、Multi-courtがB、GlassがA、playgroundがDとわかる",
      ],
    },
    {
      questionId: "4A-3",
      qa: [
        {
          questionNumber: "37",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [
        "正解は④、翻訳参照",
        "１段落目の内容、や参照論文の題名からわかる",
      ],
    },
    {
      questionId: "4A-4",
      qa: [
        {
          questionNumber: "38",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 5,
      explanation: [
        "正解は②、ゲームの種類と活動時間の長さとの関連性 翻訳参照",
        "最終段落でgameに関して記述しており、②が自然",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2 font-sans">
          <h1 className="text-lg font-bold">{"第４問 A"}</h1>
          <span className="text-gray-600">(配点 {20})</span>
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
      {/* Question Header */}
      <div className="flex items-center gap-4 mb-6 font-sans">
        <h2 className=" font-bold">第4問 A</h2>
        <p>次の問い（A・B）に答えよ。（配点 20）</p>
      </div>
      {/* Section A */}
      <div className="space-y-4">
        <div className="mb-6 font-sans">
          <p className="mb-4">
            A
            次の文章はある説明文の一部である。この文章と図を読み、下の問い（問1～4）の
            <span className="inline-flex gap-2">
              <div className="border border-black px-4 py-1 mx-1">35</div>～
              <div className="border border-black px-4 py-1 mx-1">38</div>
            </span>
            に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
          </p>
        </div>

        {/* Main Text */}
        <div className="space-y-4 text-base leading-relaxed">
          <p className="text-justify indent-7">
            Physical activity in your childhood, such as playing sports and
            exercising, can greatly benefit your health when you are older.
            Therefore, it is important to promote physical activity in childhood
            for one&apos;s good health. The schoolyard is one place where
            children and adolescents can be encouraged to take part in physical
            activity. Thus, knowing how schoolyards are used by students may
            give us some helpful ideas to promote their physical activity.
            {Kaisetsu(showResults, "17-4A-1")}
          </p>

          <p className="text-justify indent-7">
            A study was conducted at four schools in Denmark in order to
            investigate how much different types of schoolyard areas were used
            and whether students were active or passive in those areas. In the
            study, schoolyard areas were classified and defined by their primary
            characteristics. <i>Grass</i> represented playing fields and natural
            green lawn areas, often used for soccer, but without any marked
            lines or goals. <i>Multi-court</i> referred to fenced areas on
            various surfaces, like artificial grass and rubber, designed for
            tennis and other such ball games. <i>Natural</i> represented areas
            with, for example, bushes, trees, and natural stones.{" "}
            <i>Playground</i> represented areas with play equipment, such as
            swings and slides on safe surfaces like sand. <i>Solid Surface</i>{" "}
            described the areas with the hardest surfaces, like concrete. These
            areas were identified by flat open spaces, often having numerous
            markings painted for games and benches set in different places.
            {Kaisetsu(showResults, "17-4A-2")}
          </p>

          <p className="text-justify indent-7">
            Using GPS devices and other instruments, the researchers measured
            the lengths of time the students spent in the different schoolyard
            areas as well as the degrees of their physical activity. Figure 1
            displays the average amounts of time spent per day in each area for
            All students and those averages divided into Children (aged 12 and
            under) and Adolescents (aged 13 and over). Solid Surface was clearly
            the area in which All students spent most of their time, followed by
            Multi-court then Grass. Natural and Playground showed similar
            averages for All students, with the average for All students in
            Playground being just over two minutes.
            {Kaisetsu(showResults, "17-4A-3")}
          </p>

          {/* Graph */}
          <div className="my-8">
            <Image
              src="/images/Ex17-4A-1.webp"
              alt="Figure 1. Average times spent in each area by All students, Children, and Adolescents"
              className="w-full"
              width={1000}
              height={605}
              priority
            />

            <p className="text-center mt-2 italic">
              Figure 1. Average times spent in each area by All students,
              Children, and Adolescents.
            </p>
          </div>

          <p className="text-justify indent-7">
            Furthermore, the study revealed differences between the average
            amounts of time spent in schoolyards by Children and Adolescents. In
            comparison with Adolescents, Children spent more time in all
            schoolyard areas except for Natural areas. The greater amount of
            time spent by Children might be explained by the fact that,
            according to the regulations at all four schools, Children could not
            leave the schoolyard during lunch time, but Adolescents could when
            they wanted to.
            {Kaisetsu(showResults, "17-4A-4")}
          </p>

          <p className="text-justify indent-7">
            When looking at the degree of physical activity, researchers
            discovered differences among the schoolyard areas. Students were
            most active in Grass and Playground areas. On the other hand,
            students were quite passive in Solid Surface areas, with Adolescents
            spending only 7% of their time there being physically active.
            {Kaisetsu(showResults, "17-4A-5")}
          </p>

          <p className="text-justify indent-7">
            The findings of this study show the importance of investigating the
            potential of various environments and features in schoolyards. To
            promote students&apos; health, it is also beneficial to observe how
            varieties of games Children and Adolescents play affect the length
            of time spent taking part in physical activity. Let us now take a
            look at these relationships.
            {Kaisetsu(showResults, "17-4A-6")}
          </p>

          <p className="italic">
            (Henriette Bondo Andersen 他(2015) Objectively Measured Differences
            in Physical Activity in Five Types of Schoolyard Area を参考に作成)
          </p>

          {/* Questions Section */}
          <div className="mt-8 space-y-6">
            {/* Question 1 */}
            <div className={cn("mb-8", showResults && qaFormat(qa, "4A-1"))}>
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
                <span>
                  According to the passage, what is the difference between
                  Multi-court and Solid Surface?
                </span>
                {renderSelect("35", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="4A-1" />}
                {Kaisetsu(showResults, "17-4A-7")}
              </div>

              <div className="space-y-4 md:pl-8">
                <div>
                  {[
                    "Unlike Multi-court, Solid Surface contains artificial grass for younger students to play on.",
                    "Unlike Multi-court, Solid Surface does not contain boundaries marked for students&apos; games.",
                    "Unlike Solid Surface, Multi-court has a relatively soft surface made of various materials.",
                    "Unlike Solid Surface, Multi-court is not surrounded by anything, which makes it easy to access.",
                  ].map((text, index) => (
                    <div key={index} className="flex my-2">
                      <span className="mr-2 text-xl w-[20px]">
                        {"①②③④"[index]}
                      </span>
                      <span className="">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className={cn("mb-8", showResults && qaFormat(qa, "4A-2"))}>
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
                <span>
                  In Figure 1, which of the following do (A), (B), (C), and (D)
                  refer to?
                </span>
                {renderSelect("36", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="4A-2" />}
              </div>

              <div className="space-y-4 md:pl-8">
                <div>
                  {[
                    {
                      options: [
                        "(A) Grass",
                        "(B) Multi-court",
                        "(C) Natural",
                        "(D) Playground",
                      ],
                    },
                    {
                      options: [
                        "(A) Grass",
                        "(B) Multi-court",
                        "(C) Playground",
                        "(D) Natural",
                      ],
                    },
                    {
                      options: [
                        "(A) Multi-court",
                        "(B) Grass",
                        "(C) Natural",
                        "(D) Playground",
                      ],
                    },
                    {
                      options: [
                        "(A) Multi-court",
                        "(B) Grass",
                        "(C) Playground",
                        "(D) Natural",
                      ],
                    },
                  ].map((item, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex">
                        <span className="md:w-[20px] mr-4">
                          {"①②③④"[index]}
                        </span>
                        <div className="flex flex-wrap">
                          {item.options.map((option, optIndex) => (
                            <span className="w-[150px]" key={optIndex}>
                              {option}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className={cn("mb-8", showResults && qaFormat(qa, "4A-3"))}>
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
                <span>The main purpose of this passage is to</span>
                {renderSelect("37", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="4A-3" />}
                {Kaisetsu(showResults, "17-4A-8")}
              </div>

              <div className="space-y-4 md:pl-8">
                <div>
                  {[
                    "discuss the benefits of being physically active at school in childhood",
                    "give advice to increase the number of physically active adolescents",
                    "introduce schools that encourage students to play on grassed areas",
                    "show that types of schoolyards affect students&apos; behavior there",
                  ].map((text, index) => (
                    <div key={index} className="flex my-2">
                      <span className="mr-2 text-xl w-[20px]">
                        {"①②③④"[index]}
                      </span>
                      <span className="">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className={cn("mb-8", showResults && qaFormat(qa, "4A-4"))}>
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
                <span>
                  What topic is most likely to follow the last paragraph?
                </span>
                {renderSelect("38", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="4A-4" />}
                {Kaisetsu(showResults, "17-4A-9")}
              </div>

              <div className="space-y-4 md:pl-8">
                <div>
                  {[
                    "The benefits of studying various school environments for different activities",
                    "The connections between types of games and lengths of time being active",
                    "The influence of the schoolyard environment on Adolescents&apos; physical activity",
                    "The way schoolyard surfaces affect the time spent doing physical activity",
                  ].map((text, index) => (
                    <div key={index} className="flex my-2">
                      <span className="mr-2 text-xl w-[20px]">
                        {"①②③④"[index]}
                      </span>
                      <span className="">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex17_4A;
