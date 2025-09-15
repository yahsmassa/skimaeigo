"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex23_4 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "23_4")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第４問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {16})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 10分 600単語弱】
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
      </div>{" "}
      {/* Context */}
      <div className="mb-2">
        <p className="text-gray-700 leading-relaxed px-2">
          Your teacher has asked you to read two articles about effective ways
          to study. You will discuss what you learned in your next class.
          {Kaisetsu(showResults, "23-4-0")}
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
        <div className="space-y-1">
          <p className="indent-7">
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
            {Kaisetsu(showResults, "23-4-1")}
          </p>

          <p className="indent-7">
            To help them learn, I tried applying &quot;contextual
            learning.&quot; In this kind of learning, new knowledge is
            constructed through students&apos; own experiences. For my science
            class, students learned the properties of different kinds of rocks.
            Rather than having them memorize the terms from a workbook, I
            brought a big box of various rocks to the class. Students examined
            the rocks and identified their names based on the characteristics
            they observed.
            {Kaisetsu(showResults, "23-4-2")}
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-2/3">
              <p className="mb-4 indent-7">
                Thanks to this experience, I think these students will always be
                able to describe the properties of the rocks they studied. One
                issue, however, is that we don&apos;t always have the time to do
                contextual learning, so students will still study by doing
                drills. I don&apos;t think this is the best way. I&apos;m still
                searching for ways to improve their learning.
                {Kaisetsu(showResults, "23-4-3")}
              </p>
            </div>
            {/* Rock Properties Table as Image */}
            <div className="w-[70%] mx-auto md:w-1/3 mt-4 md:mt-0">
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
        <div className="space-y-1">
          <p className="indent-7">
            Mr. Oxford&apos;s thoughts on contextual learning were insightful. I
            agree that it can be beneficial. Repetition, though, can also work
            well. However, the repetitive learning strategy he discussed, which
            is called &quot;massed learning,&quot; is not effective. There is
            another kind of repetitive learning called &quot;spaced
            learning,&quot; in which students memorize new information and then
            review it over longer intervals.
            {Kaisetsu(showResults, "23-4-4")}
          </p>

          <p className="indent-7">
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
            {Kaisetsu(showResults, "23-4-5")}
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-2/3">
              <p className="mb-4 indent-7">
                Previous research has provided evidence for the advantages of
                spaced learning. In one experiment, students in Groups A and B
                tried to memorize the names of 50 animals. Both groups studied
                four times, but Group A studied at one-day intervals while Group
                B studied at one-week intervals. As the figure to the right
                shows, 28 days after the last learning session, the average
                ratio of recalled names on a test was higher for the spaced
                learning group.
                {Kaisetsu(showResults, "23-4-6")}
              </p>

              <p className="indent-7">
                I understand that students often need to learn a lot of
                information in a short period of time, and long intervals
                between studying might not be practical. You should understand,
                though, that massed learning might not be good for long-term
                recall.
                {Kaisetsu(showResults, "23-4-7")}
              </p>
            </div>

            {/* Graph */}
            <div className="w-[60%] mx-auto md:w-1/3 md:ml-3">
              <Image
                src="/images/Ex23-4-2.webp"
                alt="Bar graph showing The Average Ratio of Recalled Names: Group A around 55%, Group B around 90%"
                className=""
                width={250}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Questions Section */}
      <div className="mt-12 space-y-6">
        {/* Question 1 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "4-1"))}>
          <div className="flex items-center mb-2 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>Oxford believes that</span>
            {renderSelect("24", 4, answers, setAnswers)}<span className="-ml-1 mr-2">.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="4-1" isShow={showResults} />
              {Kaisetsu(showResults, "23-4-8")}
            </div>
          </div>
          {[
            "continuous drilling is boring",
            "reading an explanation of terms is helpful",
            "students are not interested in science",
            "studying with a workbook leads to success",
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
        <div className={cn("space-y-2", showResults && qaFormat(qa, "4-2"))}>
          <div className="flex items-center mb-2 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>In the study discussed by Lee, students took a test</span>
            {renderSelect("25", 4, answers, setAnswers)}
            <span className="mr-2">after their final session.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="4-2" isShow={showResults} />
              {Kaisetsu(showResults, "23-4-9")}
            </div>
          </div>
          {["four weeks", "immediately", "one day", "one week"].map(
            (answer, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{answer}</span>
              </div>
            )
          )}
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "4-3"))}>
          <div className="flex items-center mb-4 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              Lee introduces spaced learning, which involves studying at
            </span>
            {renderSelect("26", 6, answers, setAnswers)}
            <span>intervals, in order to overcome the disadvantages of</span>
            {renderSelect("27", 6, answers, setAnswers)}
            <span>
              learning that Oxford discussed. (Choose the best{' '}
            </span>
            <span className="mr-2">
              one for each box from options ①～⑥.)
            </span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="4-3" isShow={showResults} />
              {Kaisetsu(showResults, "23-4-10")}
            </div>
          </div>
          {[
            "contextual",
            "extended",
            "fixed",
            "irregular",
            "massed",
            "practical",
          ].map((answer, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{answer}</span>
            </div>
          ))}
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "4-4"))}>
          <div className="flex items-center mb-2 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>Both writers agree that</span>
            {renderSelect("28", 4, answers, setAnswers)}
            <span className="">is helpful for{' '}</span>
            <span className="mr-2">remembering new information.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="4-4" isShow={showResults} />
              {Kaisetsu(showResults, "23-4-11")}
            </div>
          </div>
          {[
            "experiential learning",
            "having proper rest",
            "long-term attention",
            "studying with workbooks",
          ].map((answer, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{answer}</span>
            </div>
          ))}
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "4-5"))}>
          <div className="flex items-center mb-2 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
            <span>
              Which additional information would be the best to further support
              Lee's{' '}
            </span>
            <span>
              argument for spaced learning?
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("29", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="4-5" isShow={showResults} />
              {Kaisetsu(showResults, "23-4-12")}
            </div>
          </div>
          {[
            "The main factor that makes a science class attractive",
            "The most effective length of intervals for spaced learning",
            "Whether students' workbooks include visuals or not",
            "Why Oxford's students could not memorize information well",
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

export default Ex23_4;
