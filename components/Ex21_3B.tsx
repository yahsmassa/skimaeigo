"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import Image from "next/image";

const Ex21_3B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "3B-1",
      qa: [
        {
          questionNumber: "18",
          answer: 0,
        },
        {
          questionNumber: "19",
          answer: 0,
        },
        {
          questionNumber: "20",
          answer: 0,
        },
        {
          questionNumber: "21",
          answer: 0,
        },
      ],
      rightAnswerString: "4213",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解④「キャンペーンのリーダー（Katy）が市長に助けを求めた」→②「Sarahはセンターに寄付した」→①「Sarahはセンターのイベントに参加した」→③「SarahはKatyに提案した」",
        "解説・・・老朽化で改修が必要なSakura International Centreのために、Katyは市長に支援を求めたが断られたため、資金援助のキャンペーンを始めた。その話を聞いたSarahは寄付をした（a few month agoのこと）。その後、Sarahはセンターでの講演に参加したり募金活動をした（Last monthのこと）が、思うように資金が集まらなかったので、SarahはKatyに、学校の生徒に対してボランティアを募集しようというアイデアを話した。というのが、おおまかな流れである。時を表す副詞や時制（過去形と過去完了形）に注目すると良い。",
      ],
    },
    {
      questionId: "3B-2",
      qa: [
        {
          questionNumber: "22",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解②「友情を育む機会を与えてくれる」",
        "解説・・・第２パラグラフに、&quot;It provides valuable opportunities for Japanese and Foreign residents to get to know each other.&quot;「日本人と外国人がお互いを知り合えるような貴重な機会を与えてくれる」とあるので、そこから判断できる。①「外国人のための金銭的支援」や③「地域社会のためにニュースレターを発行する」や④「英国に交換留学生を送る」はどれも言及がない。",
      ],
    },
    {
      questionId: "3B-3",
      qa: [
        {
          questionNumber: "23",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解②「更なる情報を知るためにSarahに連絡する」",
        "解説・・・最終パラグラフに、&quot;Please email me today!&quot;とあるので、そこから判断できる。この場合のtodayは「今日」というよりも、「メッセージを読んだ当日に」という意味合いなので「すぐに」ということ。それくらい緊急だと分かる判断できる。④「新しい資金援助キャンペーンを始める」は「新しい」という個所が不適格である。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第３問 B"}</h1>
          <span className="text-gray-600">(配点 {9})</span>
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
      {/* Part 1: Newsletter */}
      <div>
        <div className="mb-4 text-gray-700">
          <span className="font-bold mr-2">B</span>
          Your classmate showed you the following message in your school&apos;s
          newsletter, written by an exchange student from the UK.
          {Kaisetsu(showResults, "21-3B-0")}
        </div>

        <div className="border border-gray-300 p-6">
          <h2 className="text-center font-serif text-xl mb-6">
            Volunteers Wanted!
          </h2>

          <div className="space-y-4">
            <p className="indent-7">
              Hello, everyone. I&apos;m Sarah King, an exchange student from
              London. I&apos;d like to share something important with you today.
              {Kaisetsu(showResults, "21-3B-1")}
            </p>

            <p className="indent-7">
              You may have heard of the Sakura International Centre. It provides
              valuable opportunities for Japanese and foreign residents to get
              to know each other. Popular events such as cooking classes and
              karaoke contests are held every month. However, there is a serious
              problem. The building is getting old, and requires expensive
              repairs. To help raise funds to maintain the centre, many
              volunteers are needed.
              {Kaisetsu(showResults, "21-3B-2")}
            </p>

            <p className="indent-7">
              I learnt about the problem a few months ago. While shopping in
              town, I saw some people taking part in a fund-raising campaign. I
              spoke to the leader of the campaign, Katy, who explained the
              situation. She thanked me when I donated some money. She told me
              that they had asked the town mayor for financial assistance, but
              their request had been rejected. They had no choice but to start
              fund-raising.
              {Kaisetsu(showResults, "21-3B-3")}
            </p>

            <p className="indent-7">
              Last month, I attended a lecture on art at the centre. Again, I
              saw people trying to raise money, and I decided to help. They were
              happy when I joined them in asking passers-by for donations. We
              tried hard, but there were too few of us to collect much money.
              With a tearful face, Katy told me that they wouldn&apos;t be able
              to use the building much longer. I felt the need to do something
              more. Then, the idea came to me that other students might be
              willing to help. Katy was delighted to hear this.
              {Kaisetsu(showResults, "21-3B-4")}
            </p>

            <p className="indent-7">
              Now, I&apos;m asking you to join me in the fund-raising campaign
              to help the Sakura International Centre. Please email me today! As
              an exchange student, my time in Japan is limited, but I want to
              make the most of it. By working together, we can really make a
              difference.
              {Kaisetsu(showResults, "21-3B-5")}
            </p>

            <div className="mt-6">
              <p>Class 3A</p>
              <p className="flex items-center justify-between">
                <span className="italic">Sarah King</span>
                <span className="text-gray-600">(sarahk@sakura-h.ed.jp)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Questions */}
      <div className="space-y-8 mt-7">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3B-1"))}>
          <div className="flex items-center flex-wrap gap-2">
            <div className="flex items-center flex-wrap gap-2">
              <span className="whitespace-nowrap mr-2">問 1</span>
              <p>
                Put the following events (①～④) into the order in which they
                happened.
              </p>
            </div>
            <div className="flex items-center flex-wrap gap-1 mb-4">
              {[18, 19, 20, 21].map((num, index) => (
                <React.Fragment key={num}>
                  {renderSelect(String(num), 4, answers, setAnswers)}
                  {index < 3 && <span>→</span>}
                </React.Fragment>
              ))}
              {showResults && <Explain qa={qa} questionId="3B-1" />}
            </div>
          </div>
          <div className="space-y-2 ml-4">
            <p>① Sarah attended a centre event.</p>
            <p>② Sarah donated money to the centre.</p>
            <p>③ Sarah made a suggestion to Katy.</p>
            <p>④ The campaigners asked the mayor for help.</p>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3B-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>
              From Sarah&apos;s message, you learn that the Sakura International
              Centre
            </span>
            {renderSelect("22", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="3B-2" />}
          </div>
          <div className="space-y-2 ml-4">
            <p>① gives financial aid to international residents</p>
            <p>② offers opportunities to develop friendships</p>
            <p>③ publishes newsletters for the community</p>
            <p>④ sends exchange students to the UK</p>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3B-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>
              You have decided to help with the campaign after reading
              Sarah&apos;s message. What should you do first?
            </span>
            {renderSelect("23", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="3B-3" />}
          </div>
          <div className="space-y-2 ml-4">
            <p>① Advertise the events at the centre.</p>
            <p>② Contact Sarah for further information.</p>
            <p>③ Organise volunteer activities at school.</p>
            <p>④ Start a new fund-raising campaign.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex21_3B;
