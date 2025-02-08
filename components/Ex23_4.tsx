"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten2 } from "@/components/Saiten2";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex23_4 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "4-1",
      qa: [
        {
          questionNumber: "24",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "①：Tim Oxford の第1段落6文目 &quot;Also, this sort ... dull and demotivating.&quot; （また，この種の反復的な学習は退屈でやる気をなくさせる）という内容から，①「継続的な練習は退屈だ」が正解。",
      ],
    },
    {
      questionId: "4-2",
      qa: [
        {
          questionNumber: "25",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "①：Cheng Lee の第3段落4文目 &quot;As the figure ... learning group.&quot;（右の図が示すように，最後の学習セッションの28日後，テストで思い出した名前の率は間隔をあけて学習したグループの方が高くなった）という内容から，①「4週間」が正解。",
      ],
    },
    {
      questionId: "4-3",
      qa: [
        {
          questionNumber: "26",
          answer: 0,
        },
        {
          questionNumber: "27",
          answer: 0,
        },
      ],
      rightAnswerString: "25",
      answerString: "",
      isCorrect: false,
      isSeparate: true,
      points: 4,
      explanation: [
        "[26] ②・[27] ⑤：Cheng Lee の第1段落最終文 &quot;There is ... longer intervals.&quot;（「間隔をあけた学習」と呼ばれる，別の種類の反復学習があり，そこでは生徒たちは新しい情報を記憶してからより長い期間を開けてそれを復習する）という内容から，[26]には②「長期の」が入る。 ",
        "また，Tim Oxford の方法について，Cheng Lee は第1段落 3文目 &quot;However, the repetitive ... is not effective.&quot;（しかし，彼が論じていた反復学習の戦略は，「集中的な学習」と呼ばれるものだが，効率的ではない）と述べているので，[27]には⑤「集中的な」が入る。",
      ],
    },
    {
      questionId: "4-4",
      qa: [
        {
          questionNumber: "28",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "①：Tim Oxford は第2段落1文目（To help them ...）・2文目（In this kind ...）で「彼らが学習するのを手助けするために，私は試しに「文脈的学習」を使ってみた。この種の学習では，新しい知識が生徒たち自身の経験を通じて構築される）と述べている。また，Cheng Lee は第1段落1文目（Mr. Oxford&apos;s thoughts ...）・2文目（I agree that ...）で「オックスフォード氏の文脈的学習に関する考え方は見識のあるものだった。私はそれが役に立つということに同意する」という内容から，①「経験に基づく学習」が正解。",
      ],
    },
    {
      questionId: "4-5",
      qa: [
        {
          questionNumber: "29",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "②：Cheng Lee は「間隔をあけた学習」の方が効率的であるということを，第3段落で過去の研究を挙げて論じている。ここでは28日後のデータしか使われておらず，何日が最も効果的なのかは述べられていない。よって，②「最も効率的な学習感覚の長さ」が正解。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第４問"}</h1>
          <span className="text-gray-600">(配点 {16})</span>
        </div>
        <Saiten2
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>{" "}
      {/* Context */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          Your teacher has asked you to read two articles about effective ways
          to study. You will discuss what you learned in your next class.
        </p>
      </div>
      {/* Article Content */}
      <div className="space-y-6">
        {/* Title and Author */}
        <div className="text-center mb-8">
          <h1 className="text-xl mb-2">
            How to Study Effectively: Contextual Learning
          </h1>
          <p className="mb-2">Tim Oxford</p>
          <p className="italic">
            Science Teacher, Stone City Junior High School
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <p>
            As a science teacher, I am always concerned about how to help
            students who struggle to learn. Recently, I found that their main
            way of learning was to study new information repeatedly until they
            could recall it all. For example, when they studied for a test, they
            would use a workbook like the example below and repeatedly say the
            terms that go in the blanks: &quot;Obsidian is igneous, dark, and
            glassy. Obsidian is igneous, dark, and glassy....&quot; These
            students would feel as if they had learned the information, but
            would quickly forget it and get low scores on the test. Also, this
            sort of repetitive learning is dull and demotivating.
          </p>

          <p>
            To help them learn, I tried applying &quot;contextual
            learning.&quot; In this kind of learning, new knowledge is
            constructed through students&apos; own experiences. For my science
            class, students learned the properties of different kinds of rocks.
            Rather than having them memorize the terms from a workbook, I
            brought a big box of various rocks to the class. Students examined
            the rocks and identified their names based on the characteristics
            they observed.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-2/3">
              <p className="mb-4">
                Thanks to this experience, I think these students will always be
                able to describe the properties of the rocks they studied. One
                issue, however, is that we don&apos;t always have the time to do
                contextual learning, so students will still study by doing
                drills. I don&apos;t think this is the best way. I&apos;m still
                searching for ways to improve their learning.
              </p>
            </div>
            {/* Rock Properties Table as Image */}
            <div className="w-full md:w-1/3 mt-4 md:mt-0">
              <Image
                src="/images/Ex23-4-1.jpg"
                alt="Rock properties table showing: Rock name: Obsidian, Rock type: igneous, Coloring: dark, Texture: glassy, and a picture of the rock"
                className="w-[70%] md:w-full mx-auto"
                width={200}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Second Article */}
      <div className="mt-12 space-y-6">
        {/* Title and Author */}
        <div className="text-center mb-8">
          <h1 className="text-xl mb-2">
            How to Make Repetitive Learning Effective
          </h1>
          <p className="mb-2">Cheng Lee</p>
          <p className="italic">Professor, Stone City University</p>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <p>
            Mr. Oxford&apos;s thoughts on contextual learning were insightful. I
            agree that it can be beneficial. Repetition, though, can also work
            well. However, the repetitive learning strategy he discussed, which
            is called &quot;massed learning,&quot; is not effective. There is
            another kind of repetitive learning called &quot;spaced
            learning,&quot; in which students memorize new information and then
            review it over longer intervals.
          </p>

          <p>
            The interval between studying is the key difference. In Mr.
            Oxford&apos;s example, his students probably used their workbooks to
            study over a short period of time. In this case, they might have
            paid less attention to the content as they continued to review it.
            The reason for this is that the content was no longer new and could
            easily be ignored. In contrast, when the intervals are longer, the
            students&apos; memory of the content is weaker. Therefore, they pay
            more attention because they have to make a greater effort to recall
            what they had learned before. For example, if students study with
            their workbooks, wait three days, and then study again, they are
            likely to learn the material better.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-2/3">
              <p className="mb-4">
                Previous research has provided evidence for the advantages of
                spaced learning. In one experiment, students in Groups A and B
                tried to memorize the names of 50 animals. Both groups studied
                four times, but Group A studied at one-day intervals while Group
                B studied at one-week intervals. As the figure to the right
                shows, 28 days after the last learning session, the average
                ratio of recalled names on a test was higher for the spaced
                learning group.
              </p>

              <p>
                I understand that students often need to learn a lot of
                information in a short period of time, and long intervals
                between studying might not be practical. You should understand,
                though, that massed learning might not be good for long-term
                recall.
              </p>
            </div>

            {/* Graph */}
            <div className="w-full md:w-1/3 mt-4 md:mt-0">
              <Image
                src="/images/Ex23-4-2.jpg"
                alt="Bar graph showing The Average Ratio of Recalled Names: Group A around 55%, Group B around 90%"
                className="border border-gray-800 p-2"
                width={250}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Questions Section */}
      <div className="mt-12 space-y-12">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-1"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>Oxford believes that</span>
            {renderSelect("24", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="4-1" />}
          </div>
          <ol className="list-none space-y-2">
            {[
              "continuous drilling is boring",
              "reading an explanation of terms is helpful",
              "students are not interested in science",
              "studying with a workbook leads to success",
            ].map((answer, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                  {index + 1}
                </span>
                {answer}
              </li>
            ))}
          </ol>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-2"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>In the study discussed by Lee, students took a test</span>
            {renderSelect("25", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="4-2" />}
          </div>
          <ol className="list-none space-y-2">
            {["four weeks", "immediately", "one day", "one week"].map(
              (answer, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                    {index + 1}
                  </span>
                  {answer}
                </li>
              )
            )}
          </ol>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-3"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>
              Lee introduces spaced learning, which involves studying at
            </span>
            {renderSelect("26", 6, answers, setAnswers)}
            <span>intervals, in order to overcome the disadvantages of</span>
            {renderSelect("27", 6, answers, setAnswers)}
            <span>
              learning that Oxford discussed. (Choose the best one for each box
              from options ①～⑥.)
            </span>
            {showResults && <Explain qa={qa} questionId="4-3" />}
          </div>
          <ol className="list-none space-y-2">
            {[
              "contextual",
              "extended",
              "fixed",
              "irregular",
              "massed",
              "practical",
            ].map((answer, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                  {index + 1}
                </span>
                {answer}
              </li>
            ))}
          </ol>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-4"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span>Both writers agree that</span>
            {renderSelect("28", 4, answers, setAnswers)}.
            <span>is helpful for remembering new information.</span>
            {showResults && <Explain qa={qa} questionId="4-4" />}
          </div>
          <ol className="list-none space-y-2">
            {[
              "experiential learning",
              "having proper rest",
              "long-term attention",
              "studying with workbooks",
            ].map((answer, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                  {index + 1}
                </span>
                {answer}
              </li>
            ))}
          </ol>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-5"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 5</span>
            <span>
              Which additional information would be the best to further support
              Lee&apos;s argument for spaced learning?
            </span>
            {renderSelect("29", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="4-5" />}
          </div>
          <ol className="list-none space-y-2">
            {[
              "The main factor that makes a science class attractive",
              "The most effective length of intervals for spaced learning",
              "Whether students&apos; workbooks include visuals or not",
              "Why Oxford&apos;s students could not memorize information well",
            ].map((answer, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 border border-gray-800 rounded-full mr-2">
                  {index + 1}
                </span>
                {answer}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex23_4;
