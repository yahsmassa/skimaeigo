"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import Image from "next/image";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex22_3A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "22_3A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第３問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {6})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 5分 200単語強】
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
      <div className="mb-2 font-serif">
        <p>
          A You are interested in how Japanese culture is represented in other
          countries.
        </p>
        <p className="mt-2">You are reading a young UK blogger&apos;s post.</p>
        {Kaisetsu(showResults, "22-3A-0")}
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

        <div className="space-y-1 text-gray-700 font-serif leading-relaxed">
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
            {Kaisetsu(showResults, "22-3A-1")}
          </p>

          <p>
            I saw three performances. One of them was a <i>rakugo</i> comedy
            given in English. Some people were laughing, but somehow I
            didn&apos;t find it funny. It may be because I don&apos;t know much
            about Japanese culture. For me, the other two, the <i>taiko</i> and
            the <i>koto</i>, were the highlights. The <i>taiko</i> were
            powerful, and the <i>koto</i> was relaxing.
            {Kaisetsu(showResults, "22-3A-2")}
          </p>

          <p>
            I attended a workshop and a cultural experience, which were fun. In
            the workshop, I learnt how to make <i>onigiri</i>. Although the
            shape of the one I made was a little odd, it tasted good. The{" "}
            <i>nagashi-somen</i> experience was really interesting! It involved
            trying to catch cooked noodles with chopsticks as they slid down a
            bamboo water slide. It was very difficult to catch them.
            {Kaisetsu(showResults, "22-3A-3")}
          </p>

          <p>
            If you want to experience a slice of Japan, this festival is for
            you! I took a picture of the flyer. Check it out.
            {Kaisetsu(showResults, "22-3A-4")}
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

      <div className=" space-y-6">
        <div className={cn("space-y-2", showResults && qaFormat(qa, "3A-1"))}>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>{" "}
            <span>In Emily&apos;s blog, you read that she </span>
            <div className="flex flex-row gap-2">
              {renderSelect("16", 4, answers, setAnswers)}
              <span className="-ml-3 mt-1 mr-1">.</span>
              <Explain qa={qa} questionId="3A-1"  isShow={showResults} />
              {Kaisetsu(showResults, "22-3A-5")}
            </div>
          </div>
          <div className="space-y-2 ml-2 md:ml-8">
            {[
              "enjoyed Japanese traditional music",
              "learnt how to play Japanese drums",
              "made a water slide from bamboo",
              "was able to try all the yatai foods",
            ].map((text, index) => (
              <p key={index}>
                {"①②③④"[index]}{" "}
                {index === 3 ? (
                  <>
                    was able to try all the <i>yatai</i> foods
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "3A-2"))}>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>{" "}
            <span>Emily was most likely </span>
            {renderSelect("17", 4, answers, setAnswers)}
            <span className="ml-2 mr-2">
              when she was listening to the <i>rakugo</i> comedy.
            </span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="3A-2"  isShow={showResults} />
              {Kaisetsu(showResults, "22-3A-6")}
            </div>
          </div>
          <div className="space-y-2 ml-2 md:ml-8">
            {["confused", "convinced", "excited", "relaxed"].map(
              (text, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center mr-2">
                    {"①②③④⑤⑥"[index]}
                  </span>
                  <span>{text}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_3A;
