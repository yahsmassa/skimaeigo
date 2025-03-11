"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
const Ex25_4 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "4-1",
      qa: [
        {
          questionNumber: "14",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[14] (1)の前後の文",
        "One key point of the slow life is to own fewer belongings. This makes it easier to concentrate on everyday activities. (1) Many people today tend to buy more than they can consume.",
        "（スローライフの重要なポイントの1つは，持ち物を少なくすることです。これにより，日常の活動に集中しやすくなります。(1) 今日，多くの人が必要以上に物を買いすぎる傾向があります。）の内容から，「持ち物を少なくすべき」という内容と，「物を買いすぎる」という内容が対立的であると判断する。したがって，①「しかしながら」が正解。",
      ],
    },
    {
      questionId: "4-2",
      qa: [
        {
          questionNumber: "15",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[15] (2)を含む段落 ",
        "Another recommendation is to think about your communication style and manner in your public and private life. Sadly, one study has found that around 90% of people check smartphones during face-to-face conversations, which may appear impolite and affect relationships negatively.",
        "（もう1つの提案は，公的生活や私生活における自分のコミュニケーションのスタイルや態度について考えることです。残念ながら，ある調査によると，人々の約90%が対面での会話中にスマートフォンを確認しており，これは失礼に見える可能性があり，人間関係に悪影響を及ぼすことがあります。）の内容から，対面状況での人間関係を重視すべきという主張がなされていることがわかる。したがって，③「話している相手に注意を集中するようにする」が正解。",
      ],
    },
    {
      questionId: "4-3",
      qa: [
        {
          questionNumber: "16",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[16] 最終段落冒頭に &quot;In summary&quot;（要約すると）と書かれていることから，下線部(3)が本文のどの内容をまとめて言い換えているかを考える。第2段落以降の言い換えは最終段落の第3文以降に書かれているため，この第1文・第2文は第1段落の言い換えである可能性が高い。よって，第1段落第3文-第4文 ",
        "Instead, you can slow down and notice things that are truly meaningful to you. By taking your time and being completely focused on these things, you can improve the quality of your work and life.",
        "（代わりに，立ち止まって自分にとって本当に意味のあることに気づくことができます。時間をかけ，それらに完全に集中することで，仕事や生活の質を向上させることができます）という内容を言い換えたものにする。したがって，①「仕事と私生活の両方で満足感を得ることができる」が正解。",
      ],
    },
    {
      questionId: "4-4",
      qa: [
        {
          questionNumber: "17",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[17] 下線部(4)は第4段落",
        "The final aspect of slow living is to take 10 to 15 minutes to reflect on your day. Try to recollect people and events that were significant. By mentally highlighting them, you can find fulfillment in daily tasks.",
        "（スローライフの最後の要素は，1日の振り返りに10〜15分をかけることです。その日特に重要だった人や出来事を思い出してみてください。それらを心の中で強調することで，日々のタスクに充実感を見出すことができます）の言い換えであると考えられる。したがって，③「その日の思い出深い出来事を振り返る」が正解。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第４問"}</h1>
          <span className="text-gray-600">(配点 {12})</span>
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
      <div className="mb-8 text-gray-800">
        In English class, you are writing an essay on a topic related to
        lifestyle in modern society. This is your most recent draft. You are now
        working on improvements based on comments from your teacher.
        {Kaisetsu(showResults, "25-4-1")}
      </div>

      <div className="border border-gray-300">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-2/3 p-6 text-center font-medium text-lg border-b border-r border-gray-300">
                Try a Slow Life
              </th>
              <th className="w-1/3 p-6 text-center font-medium text-lg border-b border-gray-300">
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-2/3 p-6 align-top border-r border-gray-300">
                <div className="space-y-4">
                  <p>
                    In modern society, people are always busy and this fast pace
                    of living can be stressful. The movement toward a slow life
                    has shown us that you don&apos;t have to be busy all the
                    time. Instead, you can slow down and notice things that are
                    truly meaningful to you. By taking your time and being
                    completely focused on these things, you can improve the
                    quality of your work and life. This essay will describe some
                    ways to do this.
                    {Kaisetsu(showResults, "25-4-2")}
                  </p>

                  <p>
                    One key point of the slow life is to own fewer belongings.
                    This makes it easier to concentrate on everyday activities.
                    <sup>(1)</sup>^ Many people today tend to buy more than they
                    can consume. Do you <i>really</i> need five pairs of the
                    latest sneakers? Slow-lifers would recommend reducing
                    possessions and buying only necessary items.
                    {Kaisetsu(showResults, "25-4-3")}
                  </p>

                  <p>
                    Another recommendation is to think about your communication
                    style and manner in your public and private life. Sadly, one
                    study has found that around 90% of people check smartphones
                    during face-to-face conversations, which may appear impolite
                    and affect relationships negatively.<sup>(2)</sup>^
                    {Kaisetsu(showResults, "25-4-4")}
                  </p>

                  <p>
                    The final aspect of slow living is to take 10 to 15 minutes
                    to reflect on your day. Try to recollect people and events
                    that were significant. By mentally highlighting them, you
                    can find fulfillment in daily tasks.
                    {Kaisetsu(showResults, "25-4-5")}
                  </p>

                  <p>
                    In summary, through a slow life,{" "}
                    <u>
                      <sup>(3)</sup>you can relax
                    </u>
                    . Even small changes can improve your life. Avoid having
                    non- essential items, spend quality time with people around
                    you, and{" "}
                    <u>
                      <sup>(4)</sup>remember what you talked about with your
                      friends
                    </u>
                    . By doing these things, you will have a chance to live a
                    better and more rewarding life.
                    {Kaisetsu(showResults, "25-4-6")}
                  </p>
                </div>
              </td>
              <td className="w-1/3 p-6 align-top">
                <div className="space-y-4 italic text-gray-600">
                  <p>(1) Add an appropriate connecting word.</p>

                  <p>
                    (2) Add a concluding sentence to improve this paragraph.
                  </p>

                  <p>
                    (3) The underlined part isn&apos;t your main argument.
                    Rewrite it.
                  </p>

                  <p>
                    (4) The underlined part doesn&apos;t describe your essay
                    content well. Change it.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border-t border-gray-300 p-6">
                <div className="font-medium mb-2">Overall Comments:</div>
                <div className="italic">
                  You have really improved your essay. Keep working on it.
                  I&apos;m going to follow your suggestions to slow down and
                  hopefully improve the quality of my life.☺
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-4 mt-4">
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span className="flex gap-1">
              Based on Comment (1), which is the best word to add?{" "}
            </span>
            {renderSelect("14", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4-1" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① However</p>
            <p>② Moreover</p>
            <p>③ Otherwise</p>
            <p>④ Therefore</p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span className="flex gap-1">
              Based on Comment (2), which is the best sentence to add?{" "}
            </span>
            {renderSelect("15", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4-2" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① Limit the time you spend having conversations with people.</p>
            <p>② Send messages with your phone just once or twice a day.</p>
            <p>
              ③ Try to focus your attention on the person you are talking with.
            </p>
            <p>④ Use your phone to find real friends through social media.</p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span className="flex gap-1">
              Based on Comment (3), which is the best phrase to replace the
              underlined part?{" "}
            </span>
            {renderSelect("16", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4-3" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① you can be satisfied at work and in your personal life</p>
            <p>② you can complete tasks in a short period of time</p>
            <p>③ you can decrease stress by sharing work with others</p>
            <p>④ you can focus on the outcome rather than the process</p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span className="flex gap-1">
              Based on Comment (4), which is the best phrase to replace the
              underlined part?{" "}
            </span>
            {renderSelect("17", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4-4" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① plan your daily activities as soon as you wake up</p>
            <p>② recall the bad things that happened in your life</p>
            <p>③ think back to the memorable parts of your day</p>
            <p>④ throw away unwanted items before sleeping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex25_4;
