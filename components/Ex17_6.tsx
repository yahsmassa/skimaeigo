"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";

const Ex17_6 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "6-1",
      qa: [
        {
          questionNumber: "47",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は④、翻訳参照", ""],
    },
    {
      questionId: "6-2",
      qa: [
        {
          questionNumber: "48",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は②、翻訳参照", ""],
    },
    {
      questionId: "6-3",
      qa: [
        {
          questionNumber: "49",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isOrderFree: true,
      isCorrect: false,
      points: 6,
      explanation: ["正解は④、翻訳参照", ""],
    },
    {
      questionId: "6-4",
      qa: [
        {
          questionNumber: "50",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は④、翻訳参照", ""],
    },
    {
      questionId: "6-5",
      qa: [
        {
          questionNumber: "51",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は①、翻訳参照", ""],
    },
    {
      questionId: "6-6",
      qa: [
        {
          questionNumber: "52",
          answer: 0,
        },
        {
          questionNumber: "53",
          answer: 0,
        },
        {
          questionNumber: "54",
          answer: 0,
        },
        {
          questionNumber: "55",
          answer: 0,
        },
      ],
      rightAnswerString: "4231",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は[52]④、[53]②、[54]③、[55]①、翻訳参照", ""],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2 font-sans">
          <h1 className="text-lg font-bold">{"第６問"}</h1>
          <span className="text-gray-600">(配点 {36})</span>
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
      {/* Question Header */}
      <div className="mb-6 font-sans">
        <p className="text-lg mb-4">
          次の文章を読み、下の問い(A・B)に答えよ。なお、文章の左にある(1)～
          (6)はパラグラフ(段落)の番号を表している。(配点 36)
        </p>
      </div>

      {/* Reading Passage */}
      <div className="space-y-6">
        {/* Paragraph 1 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(1)</div>
          <div className="flex-grow">
            <p className="text-justify indent-7">
              For most people, their friendships are a valuable and important
              part of who they are. Psychologists have pointed out that
              well-established friendships lead us to a better understanding of
              ourselves. They have also noted that we might face conflicts not
              only with acquaintances but even with our good friends, which
              could result in ends to some of our friendships. Fortunately, even
              when such conflicts occur, it is possible to find ways to maintain
              or save the friendships.
              {Kaisetsu(showResults, "17-6-1")}
            </p>
          </div>
        </div>

        {/* Paragraph 2 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(2)</div>
          <div className="flex-grow">
            <p className="text-justify indent-7">
              One way to help save a friendship in trouble is to keep in touch.
              When we think a friend has done something that hurt our feelings,
              our first response may be to cut off contact. However, it may be
              better to <span className="underline">swallow our pride</span> and
              avoid doing that. For example, Mary watched her friend
              Susan&apos;s children every week until Susan finished night school
              and graduated. But after that, Mary did not hear from Susan for
              several months. So, she felt that Susan had been just using her.
              She decided not to talk to her any more. In the end, however, Mary
              forced herself to ignore her own feelings and told Susan about her
              disappointment. Susan immediately apologized and told her that she
              had been just trying to catch up with things after completing her
              studies. Susan would never have known there was a problem if Mary
              had not mentioned it. Not cutting off contact, even when we may be
              angry, is very important for maintaining good relationships.
              {Kaisetsu(showResults, "17-6-2")}
            </p>
          </div>
        </div>

        {/* Paragraph 3 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(3)</div>
          <div className="flex-grow">
            <p className="text-justify indent-7">
              Another way to help a friendship is to see things from our
              friend&apos;s point of view. For example, Mark was very upset at
              his good friend, Kate, because she had not visited him in the
              hospital. Later, he learned from Kate&apos;s friend that she had
              been afraid of hospitals ever since she had been hospitalized as a
              little girl for a serious illness. Mark then understood why Kate
              hadn&apos;t come and, instead of being angry, he felt sympathy for
              her.
              {Kaisetsu(showResults, "17-6-3")}
            </p>
          </div>
        </div>

        {/* Paragraph 4 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(4)</div>
          <div className="flex-grow">
            <p className="text-justify indent-7">
              An important part of dealing with friendships is to recognize and
              accept that they can change as our needs and lifestyles evolve.
              For example, we may have a good friend in high school, but once we
              graduate, move to a different city for work or study, or get
              married, we may see that friend less frequently and our feelings
              may change. In other words, sometimes a close friendship may alter
              in nature. We should keep in mind that we may still be friends but
              not in the same way as before.
              {Kaisetsu(showResults, "17-6-4")}
            </p>
          </div>
        </div>

        {/* Paragraph 5 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(5)</div>
          <div className="flex-grow">
            <p className="text-justify indent-7">
              How do people keep friendships for a long time? In one study,
              researchers interviewed many people who had been friends for a
              long time in order to find out the secret. They found that those
              people kept small misunderstandings from growing into large
              disputes which might cause their friendships to end. By taking
              their friends&apos; viewpoints and not being afraid to express
              their honest feelings, those who were interviewed were able to
              keep something minor from growing into a major argument.
              {Kaisetsu(showResults, "17-6-5")}
            </p>
          </div>
        </div>

        {/* Paragraph 6 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(6)</div>
          <div className="flex-grow">
            <p className="text-justify indent-7">
              We all know that friendships are precious, but we also understand
              that friendships are not always stable. The challenge in
              maintaining friendships is keeping the connections strong during
              the ups and downs that happen in all relationships. When things
              are going well, we enjoy our friendships. If things go bad, we
              should remember the points above. Sometimes we can get the
              relationship back on track, but at other times we should accept
              and appreciate that relationships can change. However, regardless
              of the states of our friendships, they will continue to be an
              important part of our lives.
              {Kaisetsu(showResults, "17-6-6")}
            </p>
          </div>
        </div>
      </div>

      {/* Section A Questions */}
      <div className="mt-8 space-y-8">
        <div className="space-y-4">
          <p className="text-lg font-sans">
            A 次の問い(問1～5)の{" "}
            <span className="border border-black px-4 py-1 mx-1">47</span> ～{" "}
            <span className="border border-black px-4 py-1 mx-1">51</span>{" "}
            に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
          </p>

          {/* Question 1 */}
          <div className={cn("space-y-4", showResults && qaFormat(qa, "6-1"))}>
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="mr-2 whitespace-nowrap font-sans">問1</span>
              <p>
                According to paragraph (1), what do psychologists say about
                friendships?
              </p>
              {renderSelect("47", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="6-1" />}
              {Kaisetsu(showResults, "17-6-7")}
            </div>
            <div className="ml-8 space-y-2">
              <p>① They are frequently compared to one&apos;s possessions.</p>
              <p>② They are impossible to fix when they become unstable.</p>
              <p>
                ③ They can lead us to have conflicts with our acquaintances.
              </p>
              <p>④ They help us know about ourselves but can have problems.</p>
            </div>
          </div>

          {/* Question 2 */}
          <div className={cn("space-y-4", showResults && qaFormat(qa, "6-2"))}>
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="mr-2 whitespace-nowrap font-sans">問2</span>
              <p>
                Which of the following is closest to the meaning of{" "}
                <span className="underline">swallow our pride</span> in
                paragraph (2)?
              </p>
              {renderSelect("48", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="6-2" />}
              {Kaisetsu(showResults, "17-6-8")}
            </div>
            <div className="ml-8 space-y-2">
              <p>① Give our thanks to someone</p>
              <p>② Hold back our feelings</p>
              <p>③ Realize that problems happen</p>
              <p>④ Stop seeing someone</p>
            </div>
          </div>

          {/* Question 3 */}
          <div className={cn("space-y-4", showResults && qaFormat(qa, "6-3"))}>
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="mr-2 whitespace-nowrap font-sans">問3</span>
              <p>
                According to paragraph (5), research found it is important to
              </p>
              {renderSelect("49", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="6-3" />}
              {Kaisetsu(showResults, "17-6-9")}
            </div>
            <div className="ml-8 space-y-2">
              <p>① hesitate to express one&apos;s true feelings</p>
              <p>② ignore misunderstandings and disputes</p>
              <p>③ put up with problems whenever one can</p>
              <p>④ solve problems while they are small</p>
            </div>
          </div>

          {/* Question 4 */}
          <div className={cn("space-y-4", showResults && qaFormat(qa, "6-4"))}>
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="mr-2 whitespace-nowrap font-sans">問4</span>
              <p>
                According to paragraph (6), what is difficult about maintaining
                friendships?
              </p>
              {renderSelect("50", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="6-4" />}
              {Kaisetsu(showResults, "17-6-10")}
            </div>
            <div className="ml-8 space-y-2">
              <p>① Finding new and interesting friends</p>
              <p>② Knowing when to change relationships</p>
              <p>③ Seeing if friends have problems</p>
              <p>④ Staying close during bad times</p>
            </div>
          </div>

          {/* Question 5 */}
          <div className={cn("space-y-4", showResults && qaFormat(qa, "6-5"))}>
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="mr-2 whitespace-nowrap font-sans">問5</span>
              <p>What would be the best title for this passage?</p>
              {renderSelect("51", 4, answers, setAnswers)}
              {showResults && <Explain qa={qa} questionId="6-5" />}
              {Kaisetsu(showResults, "17-6-11")}
            </div>
            <div className="ml-8 space-y-2">
              <p>① Advice for Friendships That Will Last</p>
              <p>② Defending Yourself and Your Friends</p>
              <p>③ Strength as the Key to Friendships</p>
              <p>④ The Changing Nature of Friendships</p>
            </div>
          </div>
        </div>

        {/* Section B */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-6"))}>
          <div className="mb-6 font-sans">
            <p className="flex items-center flex-wrap">
              <span className="font-bold mr-4">B</span>
              次の表は、本文のパラグラフ(段落)の構成と内容をまとめたものである。
            </p>

            <p className="leading-relaxed">
              <span className="border border-black px-2 py-1">52</span> ～{" "}
              <span className="border border-black px-2 py-1">55</span>{" "}
              に入れるのに最も適当なものを、下の①～④のうちから一つずつ選び、表を完成させよ。ただし、同じものを繰り返し選んではいけない。
              <span className="flex flex-wrap gap-2 mt-1">
                {renderSelect("52", 4, answers, setAnswers)}
                {renderSelect("53", 4, answers, setAnswers)}
                {renderSelect("54", 4, answers, setAnswers)}
                {renderSelect("55", 4, answers, setAnswers)}
                {showResults && <Explain qa={qa} questionId="6-6" />}
                {Kaisetsu(showResults, "17-6-12")}
              </span>
            </p>
          </div>

          {/* Table */}
          <div className="w-full max-w-xl mx-auto">
            <table className="w-full border-collapse border border-black">
              <thead>
                <tr>
                  <th className="border border-black p-3 text-center w-1/3">
                    Paragraph
                  </th>
                  <th className="border border-black p-3 text-center w-2/3">
                    Content
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-3 text-center">(1)</td>
                  <td className="border border-black p-3 text-center">
                    The realization that friendships are important
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-3 text-center">(2)</td>
                  <td className="border border-black p-3 text-center">
                    <span className="font-sans border border-black px-4 py-1">52</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-3 text-center">(3)</td>
                  <td className="border border-black p-3 text-center">
                    <span className="font-sans border border-black px-4 py-1">53</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-3 text-center">(4)</td>
                  <td className="border border-black p-3 text-center">
                    <span className="font-sans border border-black px-4 py-1">54</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-3 text-center">(5)</td>
                  <td className="border border-black p-3 text-center">
                    <span className="font-sans border border-black px-4 py-1">55</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-3 text-center">(6)</td>
                  <td className="border border-black p-3 text-center">
                    What is important to keep in mind
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Options for Section B */}
          <div className="ml-8 space-y-2 mt-6">
            <p>
              ① A report about the results of a study on long-term friendships
            </p>
            <p>
              ② The importance of looking at a situation from our friend&apos;s
              perspective
            </p>
            <p>
              ③ The significance of understanding that friendships undergo
              transformations
            </p>
            <p>
              ④ The value of staying in contact and interacting with your
              friends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex17_6;
