"use client";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex25_6 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "6-1",
      qa: [
        {
          questionNumber: "24",
          answer: 0,
        },
        {
          questionNumber: "25",
          answer: 0,
        },
        {
          questionNumber: "26",
          answer: 0,
        },
        {
          questionNumber: "27",
          answer: 0,
        },
      ],
      rightAnswerString: "5421",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "① 彼は再びヒーローになる。→第1段落第1文-第2文 &quot;Everyone knows me as Bluebird, the world-famous superhero. Before, I was only a superhero in name, but now, I deserve my title.&quot;（誰もが私のことを世界的に有名なスーパーヒーロー，ブルーバードとして知っています。以前は名前だけのスーパーヒーローでしたが，今ではその称号にふさわしい存在です）と，最終段落 &quot;After reading the note, I understood who Melody was. Since then, working together, Melody and I have made the perfect team.&quot;（メモを読んで，メロディが誰なのか理解しました。それ以来，メロディと私は一緒に働き，完璧なチームを作り上げています）に該当する。",
        "② 彼はパフォーマーである。→第3段落第1文-第2文 &quot;One day, we were filming The Lives of Heroes, a reality show about our everyday good deeds. The reality, however, was that we were actors; we pretended that we were helping the world.&quot;（ある日，私たちは日常の善行を描くリアリティ番組「ザ・ライブズ・オブ・ヒーローズ」の撮影をしていました。しかし現実は，私たちは俳優であり，世界を助けるふりをしていただけでした）に該当する。",
        "③ 彼はプロの作家である。→本文に書かれていない。",
        "④ 彼はスーパー・パークレンジャーである。→第8段落第1文-第3文 &quot;I decided to put my powers to use by rescuing hikers. I could fly and see for miles; I could locate or aid a troubled hiker faster than any park ranger. I became known as the Amazing Park Ranger Boy. &quot;（私は自分の能力を活用してハイカーを救助することを決意しました。私は空を飛び，数マイル先を見ることができ，どんなレンジャーよりも早く困っているハイカーを見つけて助けることができました。その実績から「素晴らしい公園レンジャーボーイ」として知られるようになりました。その後，チームヒーローにスカウトされ，「ブルーバード」という名前を与えられ，より大きなことを成し遂げるよう期待されました）に該当する。",
        "⑤ 彼は普通の少年である。→第7段落第1文-第3文 &quot;I grew up in Allegany State Park in New York State. My parents were both park rangers; they patrolled the park and helped hikers in trouble. When I was 12, I discovered my superpowers.&quot;（私はニューヨーク州のアレガニー州立公園で育ちました。私の両親はどちらもレンジャーで，公園を巡回し，困っているハイカーを助けていました。12歳のとき，私は自分の超能力に気付きました）から，12歳までは普通の少年だったと判断する。 ・本文では，冒頭で「誰もが私のことを世界的に有名なスーパーヒーロー，ブルーバードとして知っています。以前は名前だけのスーパーヒーローでしたが，今ではその称号にふさわしい存在です」と述べ，過去と現在を対比していることがわかる。本文の内容を時系列に整理すると次のようになる。",
      ],
    },
    {
      questionId: "6-2",
      qa: [
        {
          questionNumber: "28",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[28] メロディーの能力については，第5段落第3文 &quot;She could teleport to any place on earth in less than a second, so her unexpected appearances were always full of surprise.&quot;（彼女は1秒以内に地球上のどこにでもテレポートできる能力を持っており，その予期せぬ登場はいつも驚きをもたらしました）がFの「瞬時に異なる場所に移動する」に該当し，同段落第4文 &quot;She said, &quot;Whiskers thinks that you can&apos;t be trusted. I&apos;ll try to convince him.&quot;（女はこう言いました。「ウィスカーズは君が信用できないと思っているわ。私が説得してみる。」）がCの「動物や人々の心を読む」に該当する。また，続く第5文&quot;Melody, who could recreate any sound, produced a cat&apos;s meow and Whiskers appeared.&quot;（メロディはどんな音でも再現できる能力を持っており，猫の鳴き声を出しました。するとウィスカーズが現れました）がBの「音を完全に模倣する」に該当し，第6段落第3文 &quot;Suddenly, a voice popped into my head, &quot;You do look foolish trying to be a celebrity.&quot;（突然，頭の中に声が響きました。「セレブを気取っていると本当に愚かに見えるよ。」）がEの「テレパシーで人々と話す」に該当する。したがって，④が正解。",
      ],
    },
    {
      questionId: "6-3",
      qa: [
        {
          questionNumber: "29",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[29] 第7段落第10文-第12文 &quot;I learned my parents had been told to send her to a special facility for extraordinary children, because her powers could help humanity. &quot;Someday, when the time is right, you&apos;ll meet her. I know now that we should never have let her go. We won&apos;t let that happen to you,&quot; said my mother.&quot;（両親は，姉が人類を助けるためにその能力を活用できる特別な施設に送られるべきだと言われたのだと教えてくれました。「いつか適切な時期が来たら，彼女に会えるわ。私たちは彼女を手放すべきではなかったと今では思っている。あなたのことは絶対にそうしないわ。」と母は言いました）の内容から，③「あなたを私たちと一緒にいさせる」が正解。",
      ],
    },
    {
      questionId: "6-4",
      qa: [
        {
          questionNumber: "30",
          answer: 0,
        },
        {
          questionNumber: "31",
          answer: 0,
        },
      ],
      isOrderFree: true,
      rightAnswerString: "34",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[30]・[31] 本文で言及されていない内容を選ぶ。したがって，③「メロディが超能力に気づいた経緯」と，④「メロディがチームヒーローに加わった理由」が正解となる。なお，⑤の「ブルーバードとメロディの関係」については，直接言及してはいないものの，第7段落で述べられていた「超能力を持つ姉がいること」という内容と，最終段落のメモの内容（「家族経営を始めましょう。「REAL HEROES」の共同創設者として私と一緒に」）から，メロディがブルーバードの姉であることが推測できるため，誤りである。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第６問"}</h1>
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
      {/* Introduction text */}
      <p className="mb-4">
        Your friend, Harry, wants to be a professional writer. He has written a
        story about two new heroes for a writing contest. You read it and then
        give him feedback.
      </p>

      {/* Story content in a bordered box */}
      <div className="border border-gray-300 p-8">
        <div className="mb-8">
          <p className="text-center mb-2 text-lg font-medium">
            Bluebird & Melody: Real Heroes
          </p>
          <p className="text-center text-base">By Harry Okazaki</p>
        </div>

        <div className="space-y-4">
          <p className="indent-8">
            Everyone knows me as Bluebird, the world-famous superhero. Before, I
            was only a superhero in name, but now, I deserve my title. Let me
            tell you my story.
          </p>

          <p className="indent-8">
            I served as one of six members of the incredibly popular superhero
            group, Team Hero. Our slogan was &quot;Heroes for Humanity!&quot;
            Rather than serving humanity, though, we starred in silly television
            shows. Being so caught up in my own fame, I was unaware that I was a
            fake superhero.
          </p>

          <p className="text-center">♦♦♦♦♦</p>

          <p className="indent-8">
            One day, we were filming{" "}
            <span className="italic">The Lives of Heroes</span>, a reality show
            about our everyday good deeds. The reality, however, was that we
            were actors; we pretended that we were helping the world. In one
            episode, I was supposed to rescue a cat that had wandered into a
            street drain. I was flying through the air, when I heard a girl
            crying. In an instant, I flew down to her. In tears, she told me
            that her cat, Whiskers, had gotten into the drain. The truth was, a
            member of the television crew was standing in the underground drain
            with the cat.
          </p>

          <p className="indent-8">
            &quot;Have no fear! I&apos;ll save Whiskers!&quot; I said, as I
            threw open the cover of the drain and went underground. To my
            surprise, the crew member told me that she had lost Whiskers and
            asked me to find the cat. I walked around calling for Whiskers but
            he did not come.
          </p>

          <p className="indent-8">
            Suddenly, the newest Team Hero member, Melody, appeared out of
            nowhere. Melody was mysterious; she wore a mask around her eyes and
            her real identity was unknown. She could teleport to any place on
            earth in less than a second, so her unexpected appearances were
            always a surprise. She said, &quot;Whiskers thinks that you
            can&apos;t be trusted. I&apos;ll try to convince him to come
            out.&quot; Melody, who could recreate any sound, produced a
            cat&apos;s meow and Whiskers appeared.
          </p>

          <p className="indent-8">
            After picking up the cat, I returned to the street and was cheered
            by onlookers. When I was posing for a photo with Whiskers and the
            girl, I was thinking about how foolish I looked. Suddenly, a voice
            popped into my head, &quot;
            <span className="italic">
              You do look foolish trying to be a celebrity.
            </span>
            &quot; I realized it was Melody, who had already vanished.
          </p>

          <p className="text-center">♦♦♦♦♦</p>

          <p className="indent-8">
            I grew up in Allegany State Park in New York State. My parents were
            both park rangers; they patrolled the park and helped hikers in
            trouble. When I was 12, I discovered my superpowers. I was climbing
            a tree when a branch broke. Instead of falling, I floated. When I
            told my parents, my mother only said, &quot;So, you are the flyer in
            the family.&quot; She then said something shocking, &quot;You have
            an older sister with superpowers.&quot; I learned my parents had
            been told to send her to a special facility for extraordinary
            children, because her powers could help humanity. &quot;Someday,
            when the time is right, you&apos;ll meet her. I know now that we
            should never have let her go. We won&apos;t let that happen to
            you,&quot; said my mother.
          </p>

          <p className="indent-8">
            I decided to put my powers to use by rescuing hikers. I could fly
            and see for miles; I could locate or aid a troubled hiker faster
            than any park ranger. I became known as the Amazing Park Ranger Boy.
            Because of my achievements, Team Hero eventually recruited me. Upon
            joining, I was given the name Bluebird and told that I would be
            doing bigger and better things.
          </p>

          <p className="text-center">♦♦♦♦♦</p>

          <p className="indent-8">
            After the Whiskers incident, I flew back home. My phone buzzed with
            a notification. It said, &quot;Melody has decided to leave Team
            Hero.&quot; In my home office, I heard someone moving around. When I
            opened the door, I briefly saw a person&apos;s shape before it
            disappeared. On my desk was a note:
          </p>

          <div className="mx-16 my-4 p-4 border border-gray-300">
            <p className="font-medium">Bluebird,</p>
            <p className="italic">
              Let&apos;s start a family business. Join me
            </p>
            <p className="italic">as a co-founder of REAL HEROES.</p>
          </div>

          <p className="indent-8">
            After reading the note, I understood who Melody was. Since then,
            working together, Melody and I have made our parents proud.
          </p>
        </div>
      </div>

      {/* Email feedback section */}
      <div className="mt-8 space-y-4">
        <p className="font-medium">Your email feedback to Harry</p>
        <div className="border border-gray-300 p-6">
          <div className="space-y-4">
            <p>Hey Harry,</p>

            <p>
              I loved your story! I really liked how Bluebird passes through
              various stages in his personal growth (see below).
            </p>

            <div className="flex items-center gap-2 my-4">
              <div className="border border-gray-400 px-3 py-1">24</div>
              <span>→</span>
              <div className="border border-gray-400 px-3 py-1">25</div>
              <span>→</span>
              <div className="border border-gray-400 px-3 py-1">26</div>
              <span>→</span>
              <div className="border border-gray-400 px-3 py-1">27</div>
            </div>

            <p>
              I found Melody really fascinating with her unique superpowers.
              <br />
              She can{" "}
              <span className="border border-gray-400 px-3 py-1 inline-block">
                28
              </span>
              .
            </p>

            <p>
              Also, I was moved when Bluebird&apos;s mother said, &quot;We
              won&apos;t let that happen to you.&quot; She meant, &quot;We are
              going to{" "}
              <span className="border border-gray-400 px-3 py-1 inline-block">
                29
              </span>
              .&quot;
            </p>

            <p>
              On the other hand, I think you can still make the story a little
              better by adding a few details. You could write about{" "}
              <span className="border border-gray-400 px-3 py-1 inline-block">
                30
              </span>{" "}
              and
              <span className="border border-gray-400 px-3 py-1 inline-block ml-1">
                31
              </span>
              , which are not mentioned or suggested. These details would give
              your characters depth and make your story more interesting.
            </p>

            <p>Good luck!</p>
          </div>
        </div>
      </div>

      {/* Questions section */}
      <div className="mt-8 space-y-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-1"))}>
          <div className="flex gap-2 items-center flex-wrap justify-between">
            <div className="flex gap-2 items-center">
              <span className="whitespace-nowrap">問 1</span>
              <div>
                Choose <span className="underline">four</span> out of the five
                descriptions (①〜⑤) and put them in the order they occurred.
                &nbsp; &nbsp;
                {showResults && <Explain qa={qa} questionId="6-1" />}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 my-4 ml-8 flex-wrap">
            {renderSelect("24", 5, answers, setAnswers)}
            <span>→</span>
            {renderSelect("25", 5, answers, setAnswers)}
            <span>→</span>
            {renderSelect("26", 5, answers, setAnswers)}
            <span>→</span>
            {renderSelect("27", 5, answers, setAnswers)}
          </div>

          <div className="space-y-2 ml-8">
            <div>① He is a hero again.</div>
            <div>② He is a performer.</div>
            <div>③ He is a professional writer.</div>
            <div>④ He is a super park ranger.</div>
            <div>⑤ He is an ordinary boy.</div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-2"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 2</span>
            <div>
              Choose the correct combination of Melody&apos;s superpowers.
            </div>
            {renderSelect("28", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="6-2" />}
          </div>

          <div className="space-y-2 ml-8">
            <div>A : fly at very high altitudes</div>
            <div>B : imitate sounds perfectly</div>
            <div>C : read the minds of animals and people</div>
            <div>D : see extremely long distances</div>
            <div>E : speak to people using telepathy</div>
            <div>F : transport herself to different places instantly</div>
          </div>

          <div className="space-y-2 ml-8 mt-4">
            <div>① A, B, D, and F</div>
            <div>② A, C, D, and E</div>
            <div>③ B, C, D, and E</div>
            <div>④ B, C, E, and F</div>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-3"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 3</span>
            <span>Choose the best option for </span>
            {renderSelect("29", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="6-3" />}
          </div>

          <div className="space-y-2 ml-8">
            <div>① control your powers</div>
            <div>② hire you as a superhero</div>
            <div>③ keep you together with us</div>
            <div>④ make sure you don&apos;t commit crimes</div>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6-4"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 4</span>
            <span>Choose the best options for </span>
            {renderSelect("30", 5, answers, setAnswers)}
            <span>and</span>
            {renderSelect("31", 5, answers, setAnswers)}
            <span>. (The order does not matter.)</span>
            {showResults && <Explain qa={qa} questionId="6-4" />}
          </div>

          <div className="space-y-2 ml-8">
            <div>① Bluebird&apos;s childhood experiences</div>
            <div>② Bluebird&apos;s view on the reality show</div>
            <div>③ how Melody learned she had superpowers</div>
            <div>④ the reason why Melody joined Team Hero</div>
            <div>⑤ the relationship between Bluebird and Melody</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex25_6;
