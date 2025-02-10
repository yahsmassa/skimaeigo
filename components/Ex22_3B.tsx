"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";

const Ex22_3B = () => {
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
      rightAnswerString: "1432",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[18] ①→[19] ④→[20] ③→[21] ②：出来事を順番に並べ替える問題。基本的に時系列に出来事は書かれているが，本文，選択肢とも（おそらく）意図的にややわかりづらく書かれており，本文・地図・選択肢の三者を照らし合わせながら慎重に把握する必要がある。また，読み飛ばしたりすることなく，設定もきちんと把握しておくことが必要（10人の登山家と2名の運転手がマイクロバスで移動しながら3つの最高峰を24時間以内に制覇する）。 たとえば，①の the highest mountains in Scotland とは第1パラグラフ第2文の &quot;The goal is to climb the highest mountain in Scotland (Ben Nevis), in England (Scaf ell Pike), and in Wales (Snowdon) within 24 hours, including approximately 10 hours of driving between the mountains.&quot;（目標は，スコットランドの最高峰（ベン・ネヴィス），イングランドの最高峰（スカフェル・パイク），ウェールズの最高峰（スノードン）を，山と山の間を車で移動する約10時間を含む24時間以内に登頂することです）という内容から，Ben Nevis のことだとわかる。また，第1パラグラフ最終文に &quot;Our challenge would start at the foot of Ben Nevis and finish at the foot of Snowdon. &quot;（私たちの挑戦はベン・ネヴィスの麓から始まり，スノードンの麓でゴールする。）とあることから，おそらく Ben Nevis [Scotland]→ Scafell Pike [England]→ Snowdon [Wales] と南下していくのではないかと推測できる。実際，この文章全体は，次のように時系列で出来事が述べられている。",
        "第1パラグラフ 旅の概略 第2パラグラフ 第1の山（ベン・ネヴィス）への登頂 第3パラグラフ 第2の山（スカフェル・パイク）への登頂 第4パラグラフ 第3の山（スノードン）への登頂 ",
        "第2パラグラフ2文目から4文目に &quot;Thanks to our training, we reached the summit in under three hours. On the way down, however, I realised I had dropped my phone. Fortunately, I found it with the help of the team, but we lost 15 minutes.&quot;（トレーニングのおかげで，私たちは3時間弱で登頂することができました。しかし，下山途中で私は自分の携帯電話を落としたことに気づきました。幸い，チームの協力で見つけることができましたが，私たちは15分の遅れをとってしまいました）とあることから，まず，①→④と並べることができる。",
        "次に，第3パラグラフ第6文 &quot;However, because the traffic was light, we were right on schedule when we started our final climb.&quot;（しかし，交通量が少なかったおかげで，私たちが最後の登山を始めた時は予定通りでした）という内容から，スカフェル・パイクの登頂に成功した後，スノードンのあるウェールズに向かってマイクロバスで移動していることがわかる。これは，③ The group travelled by minibus to Wales.（一行はマイクロバスでウェールズに移動した）に相当する内容なので，①→④→③と続くとわかる。",
        "最後に，第4パラグラフ第5文 &quot;The rain got heavier and heavier, and two members of the team decided to return to the minibus.&quot;（雨はますます激しくなり，2人のメンバーがミニバスに戻ることに決めた）という内容から，② Some members gave up climbing Snowdon. がこれに相当するとわかるので，①→④→③→②が正解となる。",
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
        "②：スカフェル・パイクを攻略した時，予定より遅れた理由は何かを問う問題。第3パラグラフ第3文に &quot;As it got darker, though, we had to slow down.&quot;（しかし，暗くなったので，速度を落とさざるを得ませんでした）とあることから，② It was difficult to make good progress in the dark.（暗闇の中で十分に進むことが難しかった）が正解。",
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
        "②：筆者について，本文の内容に合致するものを選ぶ問題。第4パラグラフ最後の3文で &quot;Even though we weren&apos;t successful with the time challenge, we were successful with the climb challenge. We had done it. What a feeling that was!&quot;（タイムチャレンジには成功しなかったけれど，登山チャレンジには成功しました。やり遂げたのです。その時の感動といったら！）とあるので，② reached the top of all three mountains（3つの山全ての山頂に到達した）が正解。①は第4パラグラフ最終文に反する。③も，今読んだように本文にはタイムチャレンジには成功しなかったとあるので誤り。④のような記述はない。",
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
      {/* Section B indicator */}
      <div className="mb-4">
        <span className="font-bold">B</span>
        <span className="ml-4">
          You enjoy outdoor sports and have found an interesting story in a
          mountain climbing magazine.
        </span>
      </div>

      {/* Article title */}
      <h1 className="text-center text-xl font-bold my-8">
        Attempting the Three Peaks Challenge
      </h1>

      {/* Main content with map float */}
      <div className="relative">
        <div className="mb-4">
          Last September, a team of 12 of us, 10 climbers and two minibus
          drivers, participated in the Three Peaks Challenge, which is well
          known for its difficulty among climbers in Britain.
        </div>

        {/* UK Map with peaks */}
        <div className="float-right ml-4 mb-4 w-48">
          <Image
            src="/images/Ex22-3B-1.webp"
            alt="Map of UK showing Ben Nevis (1344m), Scafell Pike (977m), and Snowdon (1085m)"
            width={200}
            height={200}
            className="w-full"
          />
        </div>

        <div className="space-y-4">
          <p>
            The goal is to climb the highest mountain in Scotland (Ben Nevis),
            in England (Scafell Pike), and in Wales (Snowdon) within 24 hours,
            including approximately 10 hours of driving between the mountains.
            To prepare for this, we trained on and off for several months and
            planned the route carefully. Our challenge would start at the foot
            of Ben Nevis and finish at the foot of Snowdon.
          </p>

          <p>
            We began our first climb at six o&apos;clock on a beautiful autumn
            morning. Thanks to our training, we reached the summit in under
            three hours. On the way down, however, I realised I had dropped my
            phone. Fortunately, I found it with the help of the team, but we
            lost 15 minutes.
          </p>

          <p>
            We reached our next destination, Scafell Pike, early that evening.
            After six hours of rest in the minibus, we started our second climb
            full of energy. As it got darker, though, we had to slow down. It
            took four-and-a-half hours to complete Scafell Pike. Again, it took
            longer than planned, and time was running out. However, because the
            traffic was light, we were right on schedule when we started our
            final climb. Now we felt more confident we could complete the
            challenge within the time limit.
          </p>

          <p>
            Unfortunately, soon after we started the final climb, it began to
            rain heavily and we had to slow down again. It was slippery and very
            difficult to see ahead. At 4:30 am, we realised that we could no
            longer finish in 24 hours.
          </p>

          <p>
            Nevertheless, we were still determined to climb the final mountain.
            The rain got heavier and heavier, and two members of the team
            decided to return to the minibus. Exhausted and miserable, the rest
            of us were also ready to go back down, but then the sky cleared, and
            we saw that we were really close to the top of the mountain.
            Suddenly, we were no longer tired. Even though we weren&apos;t
            successful with the time challenge, we were successful with the
            climb challenge. We had done it. What a feeling that was!
          </p>
        </div>
      </div>

      {/* Questions section */}
      <div className="mt-8 space-y-8">
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3B-1"))}>
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="whitespace-nowrap mr-2">問 1 </span>
              <span>
                Put the following events (①～④) into the order they happened.
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1 mb-4">
              {renderSelect("18", 4, answers, setAnswers)}
              <span>→</span>
              {renderSelect("19", 4, answers, setAnswers)}
              <span>→</span>
              {renderSelect("20", 4, answers, setAnswers)}
              <span>→</span>
              {renderSelect("21", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="3B-1" />}
            </div>
          </div>
          <ol className="list-none space-y-2">
            <li>
              ① All members reached the top of the highest mountain in Scotland.
            </li>
            <li>② Some members gave up climbing Snowdon.</li>
            <li>③ The group travelled by minibus to Wales.</li>
            <li>④ The team members helped to find the writer&apos;s phone.</li>
          </ol>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "3B-2"))}>
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="whitespace-nowrap mr-2">問 2 </span>
              <span>
                What was the reason for being behind schedule when they
                completed Scafell Pike?
              </span>
              {renderSelect("22", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="3B-2" />}
            </div>
          </div>
          <ol className="list-none space-y-2">
            <li>
              ① It took longer than planned to reach the top of Ben Nevis.
            </li>
            <li>② It was difficult to make good progress in the dark.</li>
            <li>③ The climbers took a rest in order to save energy.</li>
            <li>④ The team had to wait until the conditions improved.</li>
          </ol>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "3B-3"))}>
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="whitespace-nowrap mr-2">問 3 </span>
              <span>From this story, you learnt that the writer </span>
              {renderSelect("23", 4, answers, setAnswers)}.
              {showResults && <Explain qa={qa} questionId="3B-3" />}
            </div>
          </div>
          <ol className="list-none space-y-2">
            <li>① didn&apos;t feel a sense of satisfaction</li>
            <li>② reached the top of all three mountains</li>
            <li>③ successfully completed the time challenge</li>
            <li>④ was the second driver of the minibus</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex22_3B;
