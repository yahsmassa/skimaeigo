"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";

const Ex22_3A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "3A-1",
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
        "①：Emily のブログから読み取れたことを選ぶ問題。第2パラグラフの最終2文 &quot;For me, the other two, the taiko and the koto, were the highlights. The taiko were powerful, and the koto was relaxing.&quot;（私にとって，その他の2つ，つまり，太鼓と琴がハイライトでした。太鼓は迫力があり，琴はゆったりとした気分になれました）という内容と，該当するイラストの見出しにある &quot;Traditional Performances&quot; という表現から，① enjoyed Japanese traditional music（伝統的な日本の音楽を楽しんだ）が正解となる。②のように太鼓の演奏の仕方を学んだことや，③のように素麺流し用の竹製の滑り台を作ったとは書かれていない。また，第1パラグラフ後半で屋台の話は書かれているが，緑茶アイス，タコ焼き，焼き鳥のうち彼女が食べたのは緑茶アイスとたこ焼きだけなので，④の「全ての屋台の食べ物を試せた」も誤り。",
      ],
    },
    {
      questionId: "3A-2",
      qa: [
        {
          questionNumber: "17",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "①：Emily が落語を聞いた時，どのように感じたかを推測する問題。設問に most likely と書かれていることから，本文にそのものずばりの表現が書かれていない可能性を予測して問題を解く必要がある。第2パラグラフ2文目と3文目の &quot;One of them was a rakugo comedy given in English. Some people were laughing, but somehow I didn&apos;t find it funny. It may be because I don&apos;t know much about Japanese culture.&quot;（その中の一つに英語で行われた落語がありました。笑っている人もいましたが，私はどういうわけか面白いと思えませんでした。それは私が日本の文化をあまり知らないからかもしれません）という内容から，① confused（戸惑った，困惑した）が正解となる。② convinced（納得した），③ excited（興奮した），④ relaxed（くつろいだ）はいずれも当てはまらない。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第３問 A"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
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
      <div className="mb-6 font-serif">
        <p>
          A You are interested in how Japanese culture is represented in other
          countries.
        </p>
        <p className="mt-2">You are reading a young UK blogger&apos;s post.</p>
      </div>

      <div className="border border-gray-400 p-6 bg-white mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="/images/Ex22-3A-1.webp"
            alt="Rose icon"
            className="rounded-full"
            width={40}
            height={40}
          />
          <div>
            <h2 className="text-lg font-serif">Emily Sampson</h2>
            <p className="text-gray-600">Monday, 5 July, 8:00 pm</p>
          </div>
        </div>

        <div className="space-y-4 text-gray-700 font-serif leading-relaxed">
          <p>
            On the first two Sundays in July every year, there is an
            intercultural event in Winsfield called &quot;A Slice of
            Japan&quot;. I had a chance to go there yesterday. It is definitely
            worth visiting! There were many authentic food stands called{" "}
            <i>yatai</i>, hands-on activities, and some great performances. The{" "}
            <i>yatai</i>
            served green-tea ice cream, <i>takoyaki</i>, and <i>yakitori</i>. I
            tried green-tea ice cream and <i>takoyaki</i>. The <i>takoyaki</i>{" "}
            was especially delicious. You should try some!
          </p>

          <p>
            I saw three performances. One of them was a <i>rakugo</i> comedy
            given in English. Some people were laughing, but somehow I
            didn&apos;t find it funny. It may be because I don&apos;t know much
            about Japanese culture. For me, the other two, the <i>taiko</i> and
            the <i>koto</i>, were the highlights. The <i>taiko</i> were
            powerful, and the <i>koto</i> was relaxing.
          </p>

          <p>
            I attended a workshop and a cultural experience, which were fun. In
            the workshop, I learnt how to make <i>onigiri</i>. Although the
            shape of the one I made was a little odd, it tasted good. The{" "}
            <i>nagashi-somen</i> experience was really interesting! It involved
            trying to catch cooked noodles with chopsticks as they slid down a
            bamboo water slide. It was very difficult to catch them.
          </p>

          <p>
            If you want to experience a slice of Japan, this festival is for
            you! I took a picture of the flyer. Check it out.
          </p>
        </div>
      </div>

      <Image
        src="/images/Ex22-3A-2.webp"
        alt="A Slice of Japan Festival Flyer"
        className="mb-6 w-full"
        width={600}
        height={400}
      />

      <div className=" space-y-8">
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3A-1"))}>
          <div className="flex flex-wrap items-center mb-4">
            <span className="whitespace-nowrap mr-2">問 1</span>{" "}
            <span>In Emily&apos;s blog, you read that she </span>
            {renderSelect("16", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="3A-1" />}
          </div>
          <div className="space-y-2 ml-8">
            <p>① enjoyed Japanese traditional music</p>
            <p>② learnt how to play Japanese drums</p>
            <p>③ made a water slide from bamboo</p>
            <p>
              ④ was able to try all the <i>yatai</i> foods
            </p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "3A-2"))}>
          <div className="flex flex-wrap items-center mb-4">
            <span className="whitespace-nowrap mr-2">問 2</span>{" "}
            <span>Emily was most likely </span>
            {renderSelect("17", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="3A-2" />}
            <span className="ml-2">
              when she was listening to the <i>rakugo</i> comedy.
            </span>
          </div>
          <div className="space-y-2 ml-8">
            <p>① confused</p>
            <p>② convinced</p>
            <p>③ excited</p>
            <p>④ relaxed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_3A;
