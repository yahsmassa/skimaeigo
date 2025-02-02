import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex22_3A = () => {
  const correctAnswerArray = [4, 2, 4];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第３問 A"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
        </div>
        <Saiten
          points={6}
          startQuestionNumber={1}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
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

      <div className="font-serif text-gray-700 space-y-8">
        <div>
          <p className="mb-4">
            問 1 In Emily&apos;s blog, you read that she{" "}
            <span className="border border-gray-400 px-2">16</span>.
          </p>
          <div className="space-y-2 ml-8">
            <p>① enjoyed Japanese traditional music</p>
            <p>② learnt how to play Japanese drums</p>
            <p>③ made a water slide from bamboo</p>
            <p>
              ④ was able to try all the <i>yatai</i> foods
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4">
            問 2 Emily was most likely{" "}
            <span className="border border-gray-400 px-2">17</span> when she was
            listening to the <i>rakugo</i> comedy.
          </p>
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
