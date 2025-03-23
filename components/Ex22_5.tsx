"use client";
import Image from "next/image";
import { Paperclip } from "lucide-react";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
const Ex22_5 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "5-1",
      qa: [
        {
          questionNumber: "30",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は① ある巨大会社と戦った一人の若き発明家",
        "本文を読み，Sequence of Key Events と Outcome の部分に相当する内容を埋めると，ファーンズワースが RCA という企業と特許権を巡って争った話をしていることがわかる",
        "問3の時系列整序問題の選択肢を読んだだけでもわかってしまう",
      ],
    },
    {
      questionId: "5-2",
      qa: [
        {
          questionNumber: "31",
          answer: 0,
        },
        {
          questionNumber: "32",
          answer: 0,
        },
      ],
      rightAnswerString: "45",
      answerString: "",
      isOrderFree: true,
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は[31] ④・[32] ⑤",
        "④ 家族のために，家庭の機械を修理したり改良した、第2パラグラフ最終文 彼はよく古い発電機を修理し，母親の手回し洗濯機を電気で動くものに替えたことさえあった」から，",
        "⑤ 畑作業をしながら電子テレビ装置のアイディアを思いついた、第3パラグラフ第2文「ふと，畑の畝のように平行な線を使って，スクリーンに電子画像を作ることができるのではないかと思いついた」から",
      ],
    },
    {
      questionId: "5-3",
      qa: [
        {
          questionNumber: "33",
          answer: 0,
        },
        {
          questionNumber: "34",
          answer: 0,
        },
        {
          questionNumber: "35",
          answer: 0,
        },
        {
          questionNumber: "36",
          answer: 0,
        },
      ],
      rightAnswerString: "2541",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: ["正解は[33] ②→[34] ⑤→[35] ④→[36] ", "翻訳参照"],
    },
    {
      questionId: "5-4",
      qa: [
        {
          questionNumber: "37",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: ["正解は③ 彼の先生が長年保管していたスケッチ ", "翻訳参照"],
    },
    {
      questionId: "5-5",
      qa: [
        {
          questionNumber: "38",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      isOrderFree: true,
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は③ 彼の発明のおかげで、私たちは歴史的な出来事を生で観ることができるようになりました。 第7パラグラフ第3文・第4文 の翻訳参照",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第５問"}</h1>
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
      {/* Introduction text */}
      <p className="mb-6 text-lg">
        In your English class, you will give a presentation about a great
        inventor. You found the following article and prepared notes for your
        presentation.
        {Kaisetsu(showResults, "22-5-0")}
      </p>

      {/* Main article container */}
      <div className="border border-gray-300 p-3 text-base">
        {/* First paragraph - full width */}
        <p className="mb-4 indent-7">
          Who invented television? It is not an easy question to answer. In the
          early years of the 20th century, there was something called a
          mechanical television system, but it was not a success. Inventors were
          also competing to develop an electronic television system, which later
          became the basis of what we have today. In the US, there was a battle
          over the patent for the electronic television system, which attracted
          people&apos;s attention because it was between a young man and a giant
          corporation. This patent would give the inventor the official right to
          be the only person to develop, use, or sell the system.
          {Kaisetsu(showResults, "22-5-1")}
        </p>

        {/* Text and image wrapped section */}
        <div className="relative">
          {/* Image floating right */}
          <div className="float-right ml-4 mb-2">
            <figure className="w-48 text-center">
              <Image
                src="/images/Ex22-5-1.webp"
                alt="Farnsworth in 1939"
                width={180}
                height={220}
                className="mb-2 border border-gray-300"
              />
              <figcaption className="text-sm">Farnsworth in 1939</figcaption>
            </figure>
          </div>

          {/* Text that wraps around the image */}
          <p className="mb-4 indent-7">
            Philo Taylor Farnsworth was born in a log cabin in Utah in 1906. His
            family did not have electricity until he was 12 years old, and he
            was excited to find a generator—a machine that produces
            electricity—when they moved into a new home. He was very interested
            in mechanical and electrical technology, reading any information he
            could find on the subject. He would often repair the old generator
            and even changed his mother&apos;s hand-powered washing machine into
            an electricity-powered one.
            {Kaisetsu(showResults, "22-5-2")}
          </p>

          <p className="mb-4 indent-7">
            One day, while working in his father&apos;s potato field, he looked
            behind him and saw all the straight parallel rows of soil that he
            had made. Suddenly, it occurred to him that it might be possible to
            create an electronic image on a screen using parallel lines, just
            like the rows in the field. In 1922, during the spring semester of
            his first year at high school, he presented this idea to his
            chemistry teacher, Justin Tolman, and asked for advice about his
            concept of an electronic television system. With sketches and
            diagrams on blackboards, he showed the teacher how it might be
            accomplished, and Tolman encouraged him to develop his ideas.
            {Kaisetsu(showResults, "22-5-3")}
          </p>

          <p className="mb-4 indent-7">
            On September 7, 1927, Farnsworth succeeded in sending his first
            electronic image. In the following years, he further improved the
            system so that it could successfully broadcast live images. The US
            government gave him a patent for this system in 1930.
            {Kaisetsu(showResults, "22-5-4")}
          </p>

          {/* Rest of the paragraphs */}
          <div className="clear-both">
            <p className="mb-4 indent-7">
              However, Farnsworth was not the only one working on such a system.
              A giant company, RCA (Radio Corporation of America), also saw a
              bright future for television and did not want to miss the
              opportunity. They recruited Vladimir Zworykin, who had already
              worked on an electronic television system and had earned a patent
              as early as 1923. Yet, in 1931, they offered Farnsworth a large
              sum of money to sell them his patent as his system was superior to
              that of Zworykin&apos;s. He refused this offer, which started a
              patent war between Farnsworth and RCA.
              {Kaisetsu(showResults, "22-5-5")}
            </p>

            <p className="mb-4 indent-7">
              The company took legal action against Farnsworth, claiming that
              Zworykin&apos;s 1923 patent had priority even though he had never
              made a working version of his system. Farnsworth lost the first
              two rounds of the court case. However, in the final round, the
              teacher who had copied Farnsworth&apos;s blackboard drawings gave
              evidence that Farnsworth did have the idea of an electronic
              television system at least a year before Zworykin&apos;s patent
              was issued. In 1934, a judge approved Farnsworth&apos;s patent
              claim on the strength of handwritten notes made by his old high
              school teacher, Tolman.
              {Kaisetsu(showResults, "22-5-6")}
            </p>

            <p className="mb-4 indent-7">
              Farnsworth died in 1971 at the age of 64. He held about 300 US and
              foreign patents, mostly in radio and television, and in 1999, TIME
              magazine included Farnsworth in Time 100: The Most Important
              People of the Century. In an interview after his death,
              Farnsworth&apos;s wife Pem recalled Neil Armstrong&apos;s moon
              landing being broadcast. Watching the television with her,
              Farnsworth had said, &quot;Pem, this has made it all
              worthwhile.&quot; His story will always be tied to his teenage
              dream of sending moving pictures through the air and those
              blackboard drawings at his high school.
              {Kaisetsu(showResults, "22-5-7")}
            </p>
          </div>
        </div>
      </div>
      {/* Presentation notes section */}
      <div>
        <h2 className="mb-4 text-lg">Your presentation notes:</h2>
        <div className="border border-gray-300 p-6 relative">
          {/* Left circles */}
          <div className="absolute left-2 top-0 bottom-0 flex flex-col gap-3 py-6">
            {Array(26)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 border border-gray-400 rounded-full"
                ></div>
              ))}
          </div>

          {/* Notes content */}
          <div className="ml-8 font-handwriting">
            <h3 className="text-xl mb-6 text-center">
              Philo Taylor Farnsworth (1906-1971)
            </h3>

            {/* Number box */}
            <div className="flex justify-center mb-6">
              <div className="border border-gray-400 px-3 py-1 mx-2 font-sans">
                30
              </div>
            </div>

            {/* Early Days section */}
            <div className="mb-6">
              <h4 className="text-lg underline mb-2">Early Days</h4>
              <ul className="list-none ml-4">
                <li className="mb-2">
                  - born in a log cabin without electricity
                </li>
                <li className="mb-2 flex items-center">
                  -{" "}
                  <div className="border border-gray-400 px-3 py-1 mx-2 font-sans">
                    31
                  </div>
                </li>
                <li className="flex items-center">
                  -{" "}
                  <div className="border border-gray-400 px-3 py-1 mx-2 font-sans">
                    32
                  </div>
                </li>
              </ul>
            </div>

            {/* Sequence of Key Events section */}
            <div className="mb-6">
              <h4 className="text-lg underline mb-2">Sequence of Key Events</h4>
              <div className="ml-4 border-l-2 border-gray-400 pl-4">
                <div className="mb-2">
                  <div className="border border-gray-400 px-3 py-1 inline-block mb-2 font-sans">
                    33
                  </div>
                </div>
                <div className="mb-2">
                  <div className="border border-gray-400 px-3 py-1 inline-block mb-2 font-sans">
                    34
                  </div>
                </div>
                <div className="mb-2">
                  Farnsworth successfully sent his first image.
                </div>
                <div className="mb-2">
                  <div className="border border-gray-400 px-3 py-1 inline-block mb-2 font-sans">
                    35
                  </div>
                </div>
                <div className="mb-2">
                  <div className="border border-gray-400 px-3 py-1 inline-block mb-2 font-sans">
                    36
                  </div>
                </div>
                <div>RCA took Farnsworth to court.</div>
              </div>
            </div>

            {/* Outcome section */}
            <div className="mb-6">
              <h4 className="text-lg underline mb-2">Outcome</h4>
              <p className="ml-4 flex items-center">
                - Farnsworth won the patent battle against RCA thanks to
                <div className="border border-gray-400 px-3 py-1 mx-2 font-sans">
                  37
                </div>
                .
              </p>
            </div>

            {/* Achievements and Recognition section */}
            <div>
              <h4 className="text-lg underline mb-2">
                Achievements and Recognition
              </h4>
              {Kaisetsu(showResults, "22-5-8")}
              <ul className="list-none ml-4">
                <li className="mb-2">- Farnsworth had about 300 patents.</li>
                <li className="mb-4">
                  - TIME magazine listed him as one of the century&apos;s most
                  <br />
                  <span className="ml-4">important figures.</span>
                </li>
                <li className="flex items-center">
                  -{" "}
                  <div className="border border-gray-400 px-3 py-1 mx-2 font-sans">
                    38
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Questions section */}
      <div className="mt-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>Which is the best subtitle for your presentation?</span>
            {renderSelect("30", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-1" />}
            {Kaisetsu(showResults, "22-5-9")}
          </div>
          {[
            "A Young Inventor Against a Giant Company",
            "From High School Teacher to Successful Inventor",
            "Never-Ending Passion for Generating Electricity",
            "The Future of Electronic Television",
          ].map((text, index) => (
            <div key={index} className="flex items-start ml-2 md:ml-8">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Question 2 */}
        <div
          className={cn("space-y-4 mt-5", showResults && qaFormat(qa, "5-2"))}
        >
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span className="ml-2">Choose the best two options for </span>
            {renderSelect("31", 5, answers, setAnswers)}
            <span> and </span>
            {renderSelect("32", 5, answers, setAnswers)}
            <span> to complete </span>
            <span className="underline">Early Days</span>
            <span className="ml-2">(The order does not matter)</span>
            {showResults && <Explain qa={qa} questionId="5-2" />}
            {Kaisetsu(showResults, "22-5-10")}
          </div>
          {[
            "bought a generator to provide his family with electricity",
            "built a log cabin that had electricity with the help of his father",
            "enjoyed reading books on every subject in school",
            "fixed and improved household equipment for his family",
            "got the idea for an electronic television system while working in a field",
          ].map((text, index) => (
            <div key={index} className="flex items-start ml-2 md:ml-8">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Question 3 */}
        <div
          className={cn("space-y-4 mt-5", showResults && qaFormat(qa, "5-3"))}
        >
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              <span className="ml-2">Choose </span>
              <span className="underline">four</span>
              out of the five events (1～5) in the order they happened to
              complete <span className="underline">Sequence of Key Events</span>
              .
            </span>
          </div>
          <div className="flex items-start flex-wrap gap-1 mb-4">
            {renderSelect("33", 5, answers, setAnswers)}
            <span>→</span>
            {renderSelect("34", 5, answers, setAnswers)}
            <span>→</span>
            {renderSelect("35", 5, answers, setAnswers)}
            <span>→</span>
            {renderSelect("36", 5, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-3" />}
            {Kaisetsu(showResults, "22-5-11")}
          </div>
          {[
            "Farnsworth rejected RCA's offer.",
            "Farnsworth shared his idea with his high school teacher.",
            "RCA won the first stage of the battle.",
            "The US government gave Farnsworth the patent.",
            "Zworykin was granted a patent for his television system.",
          ].map((text, index) => (
            <div key={index} className="flex items-start ml-2 md:ml-8">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Question 4 */}
        <div
          className={cn("space-y-4 mt-7", showResults && qaFormat(qa, "5-4"))}
        >
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>Choose the best option for</span>
            {renderSelect("37", 4, answers, setAnswers)}
            <span>to complete</span>
            <span className="underline ml-1">Outcome</span>.
            {showResults && <Explain qa={qa} questionId="5-4" />}
            {Kaisetsu(showResults, "22-5-12")}
          </div>
          {[
            "the acceptance of his rival's technological inferiority",
            "the financial assistance provided by Tolman",
            "the sketches his teacher had kept for many years",
            "the withdrawal of RCA from the battle",
          ].map((text, index) => (
            <div key={index} className="flex items-start ml-2 md:ml-8">
              <span className="inline-block w-6 h-6 text-center mr-4">
                {"①②③④⑤⑥"[index]}
              </span>
              {text}
            </div>
          ))}
        </div>

        {/* Question 5 */}
        <div
          className={cn("space-y-4 mt-7", showResults && qaFormat(qa, "5-5"))}
        >
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
            <span className="ml-2">Choose the best option for</span>
            {renderSelect("38", 4, answers, setAnswers)}
            <span>to complete</span>
            <span className="underline ml-1">Achievements and Recognition</span>
            .{showResults && <Explain qa={qa} questionId="5-5" />}
            {Kaisetsu(showResults, "22-5-13")}
          </div>
          {[
            "He and his wife were given an award for their work with RCA.",
            "He appeared on TV when Armstrong's first moon landing was broadcast.",
            "His invention has enabled us to watch historic events live.",
            "Many teenagers have followed their dreams after watching him on TV.",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ex22_5;
