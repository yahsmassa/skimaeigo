"use client";

import React, { useState } from "react";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { Explain } from "@/components/Explain";

const RecyclingSymbol = ({ number }: { number: string }) => (
  <div className="relative w-12 h-12">
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
          fill="none"
          stroke="black"
          strokeWidth="4"
        />
        <text x="50" y="60" textAnchor="middle" fontSize="30">
          {number}
        </text>
      </svg>
    </div>
  </div>
);

const Ex22_6B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "6B-1",
      qa: [
        {
          questionNumber: "44",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "②：本文で説明されているプラスチックリサイクルマークの表すものを選ぶ問題。第1パラグラフ最終文 &quot;It only shows what type of plastic it is made from and that it might be recyclable.&quot;（それが示すのは，それがどんな種類のプラスチックから作られているかと，それがリサイクル可能であるかもしれないということだけである）から，② They provide information on the chemical make-up and recycling options of the plastic（それらはプラスチックの化学成分やリサイクルの選択肢に関する情報を提供する）が正解。",
      ],
    },
    {
      questionId: "6B-2",
      qa: [
        {
          questionNumber: "45",
          answer: 0,
        },
        {
          questionNumber: "46",
          answer: 0,
        },
      ],
      rightAnswerString: "21",
      answerString: "",
      isSeparate: true,
      isCorrect: false,
      points: 6,
      explanation: [
        "[45] ②・[46] ①：Type 2 と Type 3 のプラスチックの説明をそれぞれ1つずつ選ぶ問題。",
        "Type 2 に関しては，第3パラグラフ第3文の &quot;It is strong and can be used at temperatures as low as -40℃ and as high as 100℃&quot;（それは頑丈で，-40℃の低い温度でも100℃の高い温度でも使える）から，[45]は② and used at a wide range of temperatures（そして，非常に広い範囲の温度で使われる）が正解。",
        "Type 3 に関しては，第6パラグラフ第7文と第8文の &quot;PVC, Type 3, is thought to be one of the least recyclable plastics known. It should only be disposed of by professionals and never set fire to at home or in the garden.&quot;（タイプ3のPVCは，最もリサイクル性の低いプラスチックのひとつと考えられています。それは専門家によってしか処分すべきではなく，家庭や庭で燃やされてはいけません）から，[46]は① difficult to recycle and should not be burned in the yard（リサイクルしにくく，庭で燃やしてはいけない）が正解。",
      ],
    },
    {
      questionId: "6B-3",
      qa: [
        {
          questionNumber: "47",
          answer: 0,
        },
        {
          questionNumber: "48",
          answer: 0,
        },
      ],
      rightAnswerString: "34",
      answerString: "",
      isOrderFree: true,
      isCorrect: false,
      points: 3,
      explanation: [
        "[47]・[48] ③・④：共通の特徴を持ったプラスチックについて，本文を参考に正しいものを6つの選択肢から2つ選ぶもの。",
        "Type 1（PETE）については，第4パラグラフ第3文に &quot;Recycle-type 1 plastic is commonly known as PETE (Polyethylene Terephthalate), and is used mainly in food and beverage containers.&quot;（リサイクルタイプ1のプラスチックは一般にPETE（ポリエチレンテレフタレート）として知られ，主に食品や飲料の容器に使用されています）と書かれている。",
        "Type 2（HDPE）については，第3パラグラフ第4文に &quot;HDPE can be reused without any harm and is also suitable for beer-bottle cases, milk jugs, chairs, and toys.&quot;（DPEは何の害もなく再利用でき，ビール瓶のケース，牛乳瓶，椅子，玩具などにも適しています）と書かれている。",
        "Type 4（LDPE）については第3パラグラフ第8文に &quot;LDPE is used for squeezable bottles, and bread wrapping&quot;（LDPEはスクイーズボトルやパンの包装に使われている）と書かれている。",
        "Type 5（PP）については第3パラグラフ第12文に &quot;It is suitable for furniture, food containers, and polymer banknotes such as the Australian dollar.&quot;（それは家具や食品容器，オーストラリアドルなどのポリマー紙幣［プラスチック紙幣］に適しています）と書かれている。",
        "Type 6（PS）については第4パラグラフ第12文に &quot;It is used for disposable drinking cups, instant noodle containers, and other food packaging.&quot;（それは使い捨ての飲料用カップやインスタントラーメンの容器，その他食品包装に使用されています）と書かれている。",
        "一方，Type 3（PVC）については，第4パラグラフ第9文に &quot;Type 3 plastic is found in shower curtains, pipes, and flooring.&quot;（タイプ3のプラスチックは，シャワーカーテン，パイプ，フローリングで見られる）とある。また，TYPE 7（OTHER）については第4パラグラフ最終文に &quot;Type 7 plastics are often used in the manufacture of vehicle parts such as seats, dashboards, and bumpers. &quot;（タイプ7のプラスチックは，シート，ダッシュボード，バンパーなどの自動車部品によく使われている）とあり，どちらも飲食物には使われていないことがわかる。",
        "よって，③ Products with the symbols 1, 2, 4, 5, and 6 are suitable for food or drink containers.（1，2，4，5，6のマークの付いた製品は飲食物の容器に適している）が一つ目の正解。",
        "第3パラグラフ第10文・第11文の &quot;Polypropylene (PP), a Type 5 material, is the second-most widely produced plastic in the world.  It is light, non-stretching, and has a high resistance to impact, heat, and freezing.&quot;（ポリプロピレン（PP）はタイプ5の素材で，世界で2番目に多く生産されているプラスチックであす。軽くて伸びず，衝撃や熱，凍結に強いという特徴がある）と，第4パラグラフ第10・第11文の &quot;Type 6, Polystyrene (PS) or Styrofoam as it is often called, is hard to recycle and catches fire easily. However, it is cheap to produce and lightweight.&quot;（ポリスチレン（PS），あるいは発泡スチロールと呼ばれることも多いが，これはリサイクルしにくく，発火しやすいという。しかし，製造コストが安く，軽量である）から④ Products with Type 5 and Type 6 markings are light in weight.（タイプ5とタイプ6の印がついた製品は重さが軽い）が二つ目の正解。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第６問 B"}</h1>
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
      {/* Instructions */}
      <div className="mb-8">
        <p className="mb-4">
          <span className="font-bold">B</span> You are in a student group
          preparing a poster for a scientific presentation contest with the
          theme &quot;What we should know in order to protect the
          environment.&quot; You have been using the following passage to create
          the poster.
        </p>
      </div>

      {/* Article content */}
      <div className="border border-gray-800 p-8">
        <h1 className="text-2xl font-serif text-center mb-2">
          Recycling Plastic
        </h1>
        <h2 className="text-xl font-serif text-center mb-6">
          —What You Need to Know—
        </h2>

        <div className="space-y-6">
          <p>
            The world is full of various types of plastic. Look around, and you
            will see dozens of plastic items. Look closer and you will notice a
            recycling symbol on them. In Japan, you might have seen the first
            symbol in Figure 1 below, but the United States and Europe have a
            more detailed classification. These recycling symbols look like a
            triangle of chasing pointers, or sometimes a simple triangle with a
            number from one to seven inside. This system was started in 1988 by
            the Society of the Plastics Industry in the US, but since 2008 it
            has been administered by an international standards organization,
            ASTM (American Society for Testing and Materials) International.
            Recycling symbols provide important data about the chemical
            composition of plastic used and its recyclability. However, a
            plastic recycling symbol on an object does not always mean that the
            item can be recycled. It only shows what type of plastic it is made
            from and that it might be recyclable.
          </p>

          <div className="my-8">
            <p className="italic mb-4">Figure 1. Plastic recycling symbols</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-full md:w-[50%]">
                <Image
                  src="/images/Ex22-6B-1.webp"
                  alt="Recycling symbols 1-4"
                  width={400}
                  height={80}
                  className="h-auto max-w-full"
                />
              </div>
              <div className="w-full md:w-[39%]">
                <Image
                  src="/images/Ex22-6B-2.webp"
                  alt="Recycling symbols 5-7"
                  width={300}
                  height={80}
                  className="h-auto max-w-full"
                />
              </div>
            </div>
          </div>

          <p>
            So, what do these numbers mean? One group (numbers 2, 4, and 5) is
            considered to be safe for the human body, while the other group
            (numbers 1, 3, 6, and 7) could be problematic in certain
            circumstances. Let us look at the safer group first.
          </p>

          <p>
            High-density Polyethylene is a recycle-type 2 plastic and is
            commonly called HDPE. It is non-toxic and can be used in the human
            body for heart
          </p>

          <p>
            valves and artificial joints. It is strong and can be used at
            temperatures as low as -40°C and as high as 100°C. HDPE can be
            reused without any harm and is also suitable for beer-bottle cases,
            milk jugs, chairs, and toys. Type 2 products can be recycled several
            times. Type 4 products are made from Low-density Polyethylene
            (LDPE). They are safe to use and are flexible. LDPE is used for
            squeezable bottles, and bread wrapping. Currently, very little Type
            4 plastic is recycled. Polypropylene (PP), a Type 5 material, is the
            second-most widely produced plastic in the world. It is light,
            non-stretching, and has a high resistance to impact, heat, and
            freezing. It is suitable for furniture, food containers, and polymer
            banknotes such as the Australian dollar. Only 3% of Type 5 is
            recycled.
          </p>

          <p>
            Now let us look at the second group, Types 1, 3, 6, and 7. These are
            more challenging because of the chemicals they contain or the
            difficulty in recycling them. Recycle-type 1 plastic is commonly
            known as PETE (Polyethylene Terephthalate), and is used mainly in
            food and beverage containers. PETE containers — or PET as it is
            often written in Japan — should only be used once as they are
            difficult to clean thoroughly. Also, they should not be heated above
            70°C as this can cause some containers to soften and change shape.
            Uncontaminated PETE is easy to recycle and can be made into new
            containers, clothes, or carpets, but if PETE is contaminated with
            Polyvinyl Chloride (PVC), it can make it unrecyclable. PVC, Type 3,
            is thought to be one of the least recyclable plastics known. It
            should only be disposed of by professionals and never set fire to at
            home or in the garden. Type 3 plastic is found in shower curtains,
            pipes, and flooring. Type 6, Polystyrene (PS) or Styrofoam as it is
            often called, is hard to recycle and catches fire easily. However,
            it is cheap to produce and lightweight. It is used for disposable
            drinking cups, instant noodle containers, and other food packaging.
            Type 7 plastics (acrylics, nylons, and polycarbonates) are difficult
            to recycle. Type 7 plastics are often used in the manufacture of
            vehicle parts such as seats, dashboards, and bumpers.
          </p>

          <p>
            Currently, only about 20% of plastic is recycled, and approximately
            55% ends up in a landfill. Therefore, knowledge about different
            types of plastic could help reduce waste and contribute to an
            increased awareness of the environment.
          </p>
        </div>
      </div>
      {/* Poster Section */}
      <div className="p-6 bg-white rounded-lg shadow">
        {/* Title */}
        <div className="bg-gray-100 rounded-lg p-3 mb-4 text-center text-lg">
          Do you know the plastic recycling symbols?
        </div>

        {/* Question */}
        <div className="rounded-lg border border-gray-300 p-2 mb-4">
          What are plastic recycling symbols?
        </div>

        {/* Number box */}
        <div className="border border-gray-300 w-16 p-1 mb-4 text-center">
          44
        </div>

        {/* Table section title */}
        <div className="rounded-lg border border-gray-300 p-2 mb-4">
          Types of plastic and recycling information
        </div>

        {/* Table */}
        <div className="mb-4 overflow-hidden border border-gray-300">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left border-r">Type</th>
                <th className="p-2 text-left border-r">Symbol</th>
                <th className="p-2 text-left border-r">Description</th>
                <th className="p-2 text-left">Products</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 border-r text-center">1</td>
                <td className="p-2 border-r">
                  <RecyclingSymbol number="1" />
                  <div className="text-xs text-center">PETE (PET)</div>
                </td>
                <td className="p-2 border-r">
                  This type of plastic is common and generally easy to recycle.
                </td>
                <td className="p-2">drink bottles, food containers, etc.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 border-r text-center">2</td>
                <td className="p-2 border-r">
                  <RecyclingSymbol number="2" />
                  <div className="text-xs text-center">HDPE</div>
                </td>
                <td className="p-2 border-r">
                  This type of plastic is easily recycled
                  <span className="inline-block border border-gray-300 px-2 mx-1">
                    45
                  </span>
                  .
                </td>
                <td className="p-2">
                  heart valves, artificial joints, chairs, toys, etc.
                </td>
              </tr>
              <tr>
                <td className="p-2 border-r text-center">3</td>
                <td className="p-2 border-r">
                  <RecyclingSymbol number="3" />
                  <div className="text-xs text-center">PVC</div>
                </td>
                <td className="p-2 border-r">
                  This type of plastic is
                  <span className="inline-block border border-gray-300 px-2 mx-1">
                    46
                  </span>
                  .
                </td>
                <td className="p-2">shower curtains, pipes, flooring, etc.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom section */}
        <div className="rounded-lg border border-gray-300 p-2 mb-4">
          Plastics with common properties
        </div>

        <div className="border border-gray-300 p-4">
          <div className="border border-gray-300 w-16 p-1 mb-2 text-center">
            47
          </div>
          <div className="border border-gray-300 w-16 p-1 text-center">48</div>
        </div>
      </div>

      {/* Questions Section - Outside the poster */}
      <div className="space-y-8 p-6">
        {/* Question 1 */}
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "6B-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>
              Under the first poster heading, your group wants to introduce the
              plastic recycling symbols as explained in the passage. Which of
              the following is the most appropriate?
            </span>
            {renderSelect("44", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6B-1" />}
          </div>
          <div className="space-y-2 pl-8">
            <div>
              ① They are symbols that rank the recyclability of plastics and
              other related problems.
            </div>
            <div>
              ② They provide information on the chemical make-up and recycling
              options of the plastic.
            </div>
            <div>
              ③ They tell the user which standards organization gave them
              certificates for general use.
            </div>
            <div>
              ④ They were introduced by ASTM and developed by the Society of the
              Plastics Industry.
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "6B-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>
              You have been asked to write descriptions of Type 2 and Type 3
              plastics. Choose the best options for
            </span>
            {renderSelect("45", 4, answers, setAnswers)} and{" "}
            {renderSelect("46", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="6B-2" />}
          </div>

          {/* Type 2 Options */}
          <div className="mb-4">
            <div className="mb-2">
              Type 2{" "}
              <span className="inline-block border border-gray-300 px-2">
                45
              </span>
            </div>
            <div className="space-y-2 pl-8">
              <div>① and commonly known as a single-use plastic</div>
              <div>② and used at a wide range of temperatures</div>
              <div>③ but harmful to humans</div>
              <div>④ but unsuitable for drink containers</div>
            </div>
          </div>

          {/* Type 3 Options */}
          <div>
            <div className="mb-2">
              Type 3{" "}
              <span className="inline-block border border-gray-300 px-2">
                46
              </span>
            </div>
            <div className="space-y-2 pl-8">
              <div>
                ① difficult to recycle and should not be burned in the yard
              </div>
              <div>② flammable; however, it is soft and cheap to produce</div>
              <div>③ known to be a non-toxic product</div>
              <div>④ well known for being easily recyclable</div>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "6B-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>
              You are making statements about some plastics which share common
              properties. According to the article, which two of the following
              are appropriate? (The order does not matter.)
            </span>
            {renderSelect("47", 4, answers, setAnswers)}・
            {renderSelect("48", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="6B-3" />}
          </div>
          <div className="space-y-2 pl-8">
            <div>
              ① Boiling water (100℃) can be served in Type 1 and Type 6 plastic
              containers.
            </div>
            <div>
              ② It is easy to recycle products with Type 1, 2, and 3 logos.
            </div>
            <div>
              ③ Products with the symbols 1, 2, 4, 5, and 6 are suitable for
              food or drink containers.
            </div>
            <div>
              ④ Products with Type 5 and Type 6 markings are light in weight.
            </div>
            <div>
              ⑤ Type 4 and 5 plastics are heat resistant and are widely
              recycled.
            </div>
            <div>
              ⑥ Type 6 and 7 plastics are easy to recycle and environmentally
              friendly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_6B;
