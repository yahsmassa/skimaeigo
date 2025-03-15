"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex22_4 = () => {
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
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "③：Len の第1パラグラフ第7文前半の &quot;Most of them are priced very reasonably&quot;（品物の大半は手ごろな価格である）という内容から，③ they are affordable for students が正解。② most of the items are good for the environment（その品物のほとんどは環境に良い）と迷う問題だが，Len の第2パラグラフ第1文では &quot;Purchasing used goods is eco-friendly&quot;（中古品を買うことは環境に優しい）と書かれており，品物そのものが環境に良いと言っているわけではないので誤りと考えられる。",
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
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "③：Cindy が勧める購入方法を選ぶ問題。Cindy の第2パラグラフ第1文 &quot;You&apos;re going to be here for four years, so buy your goods new!&quot;（個々に4年間いるのですから，品物は新品で買いましょう！）という内容と，同じパラグラフの第3文・第4文 &quot;However, some of them stopped working after just one month, and they did not have warranties. I had to replace them quickly and could not shop around, so I just bought everything from one big chain store.&quot;（［中古品を買ったら］しかし，中にはたった1ヶ月経っただけで動かなくなったものもあり，保証書もありませんでした。私は急いで買い替えなければならず，ありこち買い物をして回ることもできなかったので，ある一つの大手チェーン店ですべて買い揃えたのです）という内容から，③ new items that have warranties for replacement（交換用の保証書のついた新品）が正解。② from the website because it offers the best prices（最善の価格を提供してくれるから，このウェブサイトから）と迷う問題だが，Cindy が紹介しているウェブサイトでは複数の販売サイトの価格を「比較」しているだけで，そのサイトから直接購入するわけではないので誤りである。",
      ],
    },
    {
      questionId: "4-3",
      qa: [
        {
          questionNumber: "26",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 4,
      explanation: [
        "②：Len と Cindy の両方が勧めているのは何かを問う問題。Len の第1パラグラフの最後にある &quot;but stock is limited, so hurry!&quot;（でも，在庫は限られているので，急いで！）という内容と，Cindy の最終文にある &quot;Things go fast! Don&apos;t wait or you&apos;ll miss out!&quot;（品物はすぐになくなります！ 待っていてはいけません。さもないと買えなくなりますよ！）という内容から，② buy your appliances as soon as you can（電化製品をできるだけ早く買う）が正解。",
      ],
    },
    {
      questionId: "4-4",
      qa: [
        {
          questionNumber: "27",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "①：新品の電化製品をできるだけ最善の価格で買いたい場合，どうすればいいかを問う問題。新品の購入については Cindy の紹介した save4unistu.com というサイトを使うことで価格を比較できるので，①が正解。",
      ],
    },
    {
      questionId: "4-5",
      qa: [
        {
          questionNumber: "28",
          answer: 0,
        },
        {
          questionNumber: "29",
          answer: 0,
        },
      ],
      rightAnswerString: "24",
      answerString: "",
      isSeparate: true,
      isCorrect: false,
      points: 4,
      explanation: [
        "[28] ②・[29] ④：[28]では電子レンジを最も安く買う方法が，[29]では5年保証のついたテレビを最も安く買う方法が，それぞれ求められている。",
        "電子レンジについては，Len の紹介した中古品店では $85 だが，Cindy の第4パラグラフ第5文によれば，&quot;Great Buy provides one-year warranties on all household goods, and students with proof of enrollment at a school get 10% off the prices listed on the table above.&quot;（Great Buy は，すべての家庭用品に1年間の保証を提供し，学校の在籍証明がある学生は，上の表にある価格から10％の割引が適用されます）とあるため，$90 の 10% 割引で $81 となる。よって，② Great Buy が正解。",
        "5年保証のついたテレビについては，Cindy の第4パラグラフ第3文・第4文 &quot;Value Saver provides one-year warranties on all household goods for free. If the item is over $300, the warranty is extended by four years.&quot;（Value Saver は，すべての家庭用製品に1年間の保証を無償で提供します。300ドル以上の品物であれば，保証期間は4年延長されます）から，Value Saver のテレビは $305 で5年保証となる。Great Buy は先に述べたように1年保証はあるが，5年保証については言及されていない。Cut Price については，同じパラグラフの最終2文で &quot;Warranties at Cut Price are not provided for free. You have to pay $10 per item for a five-year warranty.&quot;（Cut Price の保証は無料ではありません。5年保証は品物1点につき10ドルを支払う必要があります）とあるため，$300＋$10＝$310 となり，Value Saver より高くなる。よって，④ Value Saver が正解。",
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
        <Saiten
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>
      {/* Context text */}
      <p className="text-base mb-8">
        You are a new student at Robinson University in the US. You are reading
        the blogs of two students, Len and Cindy, to find out where you can buy
        things for your apartment.
        {Kaisetsu(showResults, "22-4-0")}
      </p>

      {/* First blog post container */}
      <div className="border border-gray-300 p-4 space-y-4">
        {/* Blog header */}
        <div className="border-b border-gray-300 pb-2">
          <h2 className="text-lg font-semibold">New to Robinson University?</h2>
          <p className="text-sm text-gray-600">
            Posted by Len at 4:51 p.m. on August 4, 2021
          </p>
        </div>

        {/* Blog content */}
        <div className="space-y-4">
          <p className="text-base">
            Getting ready for college? Do you need some home appliances or
            electronics, but don&apos;t want to spend too much money?
            There&apos;s a great store close to the university called Second
            Hand. It sells used goods such as televisions, vacuum cleaners, and
            microwaves. A lot of students like to buy and sell their things at
            the store. Here are some items that are on sale now. Most of them
            are priced very reasonably, but stock is limited, so hurry!
            {Kaisetsu(showResults, "22-4-1")}
          </p>

          {/* Sale advertisement as a single image */}
          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex22-4-1.webp"
              alt="Second Hand Sale advertisement showing various appliances including a TV ($250), microwave ($85), vacuum cleaner ($30), rice cooker ($40), and kettle ($5)"
              className="w-full"
              width={800}
              height={400}
            />
          </div>

          <p className="text-sm">https://secondhand.web</p>

          <p className="text-base">
            Purchasing used goods is eco-friendly. Plus, by buying from Second
            Hand you&apos;ll be supporting a local business. The owner is
            actually a graduate of Robinson University!
            {Kaisetsu(showResults, "22-4-2")}
          </p>
        </div>
      </div>

      {/* Second blog post container */}
      <div className="border border-gray-300 p-4 space-y-4">
        {/* Blog header */}
        <div className="border-b border-gray-300 pb-2">
          <h2 className="text-lg font-semibold">
            Welcome to Robinson University!
          </h2>
          <p className="text-sm text-gray-600">
            Posted by Cindy at 11:21 a.m. on August 5, 2021
          </p>
        </div>

        {/* Blog content */}
        <div className="space-y-4">
          <p className="text-base">
            Are you starting at Robinson University soon? You may be preparing
            to buy some household appliances or electronics for your new life.
            {Kaisetsu(showResults, "22-4-3")}
          </p>

          <p className="text-base">
            You&apos;re going to be here for four years, so buy your goods new!
            In my first year, I bought all of my appliances at a shop selling
            used goods near the university because they were cheaper than
            brand-new ones. However, some of them stopped working after just one
            month, and they did not have warranties. I had to replace them
            quickly and could not shop around, so I just bought everything from
            one big chain store. I wish I had been able to compare the prices at
            two or more shops beforehand.
            {Kaisetsu(showResults, "22-4-4")}
          </p>

          <p className="text-base">
            The website called save4unistu.com is very useful for comparing the
            prices of items from different stores before you go shopping. The
            following table compares current prices for the most popular new
            items from three big stores.
            {Kaisetsu(showResults, "22-4-5")}
          </p>

          {/* Price comparison table as an image */}
          <div>
            <Image
              src="/images/Ex22-4-2.webp"
              alt="Price comparison table showing prices for appliances at Cut Price, Great Buy, and Value Saver stores"
              className="w-[80%] mx-auto"
              width={800}
              height={300}
            />
          </div>

          <p className="text-sm">https://save4unistu.com</p>

          <p className="text-base">
            Note that warranties are available for all items. So, if anything
            stops working, replacing it will be straightforward. Value Saver
            provides one-year warranties on all household goods for free. If the
            item is over $300, the warranty is extended by four years. Great Buy
            provides one-year warranties on all household goods, and students
            with proof of enrollment at a school get 10% off the prices listed
            on the table above. Warranties at Cut Price are not provided for
            free. You have to pay $10 per item for a five-year warranty.
            {Kaisetsu(showResults, "22-4-6")}
          </p>

          <p className="text-base">
            Things go fast! Don&apos;t wait or you&apos;ll miss out!
            {Kaisetsu(showResults, "22-4-7")}
          </p>
        </div>
      </div>

      {/* Questions section */}
      <div className="space-y-8 mt-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-1"))}>
          <div className="flex items-center flex-wrap space-x-2">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>Len recommends buying used goods because</span>
            {renderSelect("24", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="4-1" />}
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>it will help the university</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>most of the items are good for the environment</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                3
              </span>
              <span>they are affordable for students</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                4
              </span>
              <span>you can find what you need in a hurry</span>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-2"))}>
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span className="text-base">Cindy suggests buying</span>
            {renderSelect("25", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="4-2" />}
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>from a single big chain store because it saves time</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>from the website because it offers the best prices</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                3
              </span>
              <span>new items that have warranties for replacement</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                4
              </span>
              <span>
                used items because they are much cheaper than new items
              </span>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-3"))}>
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span className="text-base">
              Both Len and Cindy recommend that you
            </span>
            {renderSelect("26", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="4-3" />}
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>buy from the store near your university</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>buy your appliances as soon as you can</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                3
              </span>
              <span>choose a shop offering a student discount</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                4
              </span>
              <span>choose the items with warranties</span>
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-4"))}>
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span className="text-base">
              If you want to buy new appliances at the best possible prices, you
              should
            </span>
            {renderSelect("27", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="4-4" />}
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>access the URL in Cindy&apos;s post</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>access the URL in Len&apos;s post</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                3
              </span>
              <span>contact one big chain store</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                4
              </span>
              <span>contact shops close to the campus</span>
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "4-5"))}>
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 5</span>
            <span>You have decided to buy a microwave from</span>
            {renderSelect("28", 4, answers, setAnswers)}.
            <span>
              because it is the cheapest. You have also decided to buy a
              television from
            </span>
            {renderSelect("29", 4, answers, setAnswers)}.
            <span>because it is the cheapest with a five-year warranty.</span>
            <div className="text-base">
              (Choose one for each box from options 1~4.)
            </div>
            {showResults && <Explain qa={qa} questionId="4-5" />}
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>Cut Price</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>Great Buy</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                3
              </span>
              <span>Second Hand</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                4
              </span>
              <span>Value Saver</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Ex22_4;
