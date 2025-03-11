"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
const TheContest = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "3-1",
      qa: [
        {
          questionNumber: "8",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[8] メンバーについては，第2段落第2文でキーボード奏者がユキ，第3文でベーシストがケイと紹介されていることから，この二人は筆者ではないとわかる。さらに，同段落第8文-第9文 ",
        "Tomo, you&apos;re too worried. Everything will be OK,&quot; Ren, our drummer, said as she smiled at me and waved goodbye. &quot;I hope so,&quot; I thought to myself.",
        "（「トモ，心配しすぎだよ。きっと大丈夫だよ」と，ドラム担当のレンが微笑みながら私に言い，手を振って帰っていきました。「そうだといいけど」と，私は心の中で思いました）というやりとりから，筆者がトモであるとわかる。したがって，③が正解。",
      ],
    },
    {
      questionId: "3-2",
      qa: [
        {
          questionNumber: "9",
          answer: 0,
        },
        {
          questionNumber: "10",
          answer: 0,
        },
        {
          questionNumber: "11",
          answer: 0,
        },
        {
          questionNumber: "12",
          answer: 0,
        },
      ],
      rightAnswerString: "5431",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[9]・[10]・[11]・[12] 各選択肢の該当箇所は以下の通り。なお，バンドリーダーについては，第2段落第7文 &quot;As band leader, I felt additional pressure about the contest.&quot;（バンドリーダーとして，私はコンテストに関するプレッシャーを特に感じていました）から，本文の筆者がリーダーであることがわかる。",
        "① バンドが態度を改めた。→最終段落第4文 &quot;From that day on, our focus shifted and the band took a step forward on its musical journey.&quot;（その日から，私たちは意識を変え，バンドとして音楽の旅路を一歩進めることができました）",
        "② バンドがもっと頻繁に練習することを決めた。→練習の頻度を増やす話は本文に書かれていない。",
        "③ バンドリーダーが問題を特定した。→第3段落最終文 &quot;&quot;I&apos;ve got it!&quot; I thought excitedly.&quot;（「わかった！」と興奮しながら思いました）",
        "④ バンドリーダーがバンドについて心配していた。→第2段落第5文 &quot;I was worried that my band Cat&apos;s Curry wouldn’t be ready.&quot;（私のバンド「キャッツカレー」が準備できていないのではないかと心配だったのです）",
        "⑤ バンドがコンテストに登録した。→第2段落第4文 &quot;However, the Ultimate Music Contest was only a few weeks away and I was kind of regretting that we had entered it.&quot;（しかし，アルティメット・ミュージック・コンテストまであと数週間しかなく，私たちが参加を決めたことを少し後悔していました）",
        "これを時系列で並べると，[9] ⑤→[10] ④→[11] ③→[12] ①となる。",
      ],
    },
    {
      questionId: "3-3",
      qa: [
        {
          questionNumber: "13",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[13] 最終段落最終文 &quot;Although Cat&apos;s Curry did not win the contest, we all felt it was the best performance of our lives.",
        "（そして，「キャッツカレー」はコンテストで優勝しませんでしたが，私たちはこれが人生最高の演奏だったと感じました）から，④「満足した」が正解。①は「ひどい，恐ろしい」，②は「困惑した」，③は「独立した，自立心のある」の意味。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第３問"}</h1>
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
      <p className="mb-8 text-gray-800">
        You are an exchange student at a UK high school, and your teacher asked
        you to find an interesting story. You found this story to share in class
        next week.
        {Kaisetsu(showResults, "25-3-1")}
      </p>

      <div className="border border-gray-300 p-8 mb-8">
        <h1 className="text-center text-xl mb-6">THE CONTEST</h1>

        <p className="mb-4">
          &quot;One more time, with feeling!&quot; I encouraged my band.
        </p>

        <p className="mb-4">
          We are capable musicians. In fact, our keyboardist, Yuki, is a
          classically-trained pianist who regularly performs in front of
          audiences. Kei, our bassist, has a huge number of followers because of
          the popular videos she uploads. However, the Ultimate Music Contest
          was only a few weeks away and I was kind of regretting that we had
          entered it. I was worried that my band <i>Cat&apos;s Curry</i>{" "}
          wouldn&apos;t be ready. Something felt wrong, but I couldn&apos;t
          figure it out. We continued to practise until our rehearsal time was
          up. As band leader, I felt additional pressure about the contest.
          &quot;Tomo, you&apos;re too worried. Everything will be OK,&quot; Ren,
          our drummer, said as she smiled at me and waved goodbye. &quot;I hope
          so,&quot; I thought to myself.
          {Kaisetsu(showResults, "25-3-2")}
        </p>

        <p className="mb-4">
          Back at home, I watched the video I had taken of our rehearsal. As I
          listened to <i>Sayonara, and Thanks for Everything</i>, I thought my
          ears were playing tricks on me. I carefully listened a few more times.
          Although it was hard to notice, we were slightly out of rhythm.
          &quot;How could that be?&quot; I wondered. As I continued to listen, I
          paid extra attention to each instrument. &quot;I&apos;ve got it!&quot;
          I thought excitedly.
          {Kaisetsu(showResults, "25-3-3")}
        </p>

        <p className="mb-4">
          At the next practice, I played back the recording and waited for
          everyone&apos;s reaction.
          <br />
          &quot;I&apos;ve been practising every day!&quot;
          <br />
          &quot;These songs aren&apos;t even difficult...&quot;
          <br />
          &quot;What&apos;s the matter?&quot;
          {Kaisetsu(showResults, "25-3-4")}
        </p>

        <p className="mb-4">
          They didn&apos;t understand the problem, so I explained my discovery,
          &quot;Each of us is showing off. We&apos;re playing for ourselves, not
          for the band!&quot; From that day on, our focus shifted and the band
          took a step forward on its musical journey. Like the saying goes,
          &quot;The whole is greater than the sum of the parts.&quot; Although{" "}
          <i>Cat&apos;s Curry</i> did not win the contest, we all felt it was
          the best performance of our lives.
          {Kaisetsu(showResults, "25-3-5")}
        </p>
      </div>

      <div className="space-y-8">
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>Which person is telling the story? </span>
            {renderSelect("8", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="3-1" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① Kei</p>
            <p>② Ren</p>
            <p>③ Tomo</p>
            <p>④ Yuki</p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "3-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>
              Choose <span className="underline">four</span> out of the five
              options (①～⑤) and put them in the order they happened.
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap mb-4">
            {renderSelect("9", 5, answers, setAnswers)}
            <span className="mx-2">→</span>
            {renderSelect("10", 5, answers, setAnswers)}
            <span className="mx-2">→</span>
            {renderSelect("11", 5, answers, setAnswers)}
            <span className="mx-2">→</span>
            {renderSelect("12", 5, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="3-2" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① The band changed its attitude.</p>
            <p>② The band decided to practise more often.</p>
            <p>③ The band leader identified the problem.</p>
            <p>④ The band leader was concerned about the band.</p>
            <p>⑤ The band registered for a contest.</p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "3-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>
              How did the band most likely feel after the competition?{" "}
            </span>
            {renderSelect("13", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="3-3" />}
          </div>
          <div className="pl-8 space-y-2">
            <p>① Awful</p>
            <p>② Embarrassed</p>
            <p>③ Independent</p>
            <p>④ Satisfied</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheContest;
