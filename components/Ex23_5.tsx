"use client";
import React, { useState } from "react";
import { Saiten2 } from "@/components/Saiten2";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex23_5 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "5-1",
      qa: [
        {
          questionNumber: "30",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "④：第3段落最終文 &quot;To be honest, ... to play individually.&quot;（正直に言って，私が卓球を選んだのはその方が個人でするのに簡単だろうと思ったからです）という内容から，④「チームスポーツをするのを避けたかったから」が正解。",
      ],
    },
    {
      questionId: "5-2",
      qa: [
        {
          questionNumber: "31",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "③：第6段落で兄のパトリックと対話した筆者は第7段落以降で友人とのコミュニケーションの取り方について考えを改めるようになった。よって，③「彼が必要とする社交スキルを学ぶ手助けをした」が正解。",
      ],
    },
    {
      questionId: "5-3",
      qa: [
        {
          questionNumber: "32",
          answer: 0,
        },
        {
          questionNumber: "33",
          answer: 0,
        },
        {
          questionNumber: "34",
          answer: 0,
        },
        {
          questionNumber: "35",
          answer: 0,
        },
      ],
      rightAnswerString: "2453",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "②→④→⑤→③：第4段落3文目（One day, however ...）～最終文（This made ...）で教師と話し合う場面が書かれているので，[32]は②「より上手に卓球をする方法について教師と話し合った」が正解。第5段落1文目（I deliberately ... opponent's moves）で「敵の動きにより綿密に注意を払った」と書かれているので，[33]は④「敵を研究し始めた」が正解。 ",
        "第6段落3文目（We switched ...）で「卓球について話すことに切り替えた」と書かれているので，[34]は⑤「兄に卓球について話した」が正解。第7段落4文目（&quot;Hey, Ben! ...）でジョージから祝賀パーティーを開こうと誘われたことに対して5文目（Without thinking, ...）で「考えることなく『できない』と返答した」と書かれているので，[35]は③「彼を称えるパーティーを拒否した」が正解。 ",
      ],
    },
    {
      questionId: "5-4",
      qa: [
        {
          questionNumber: "36",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "③：第8段落6文目 &quot;If I'd said, ... have been better.&quot;（もし私が「素晴らしい考えだ。ありがとう！トレント先生と話をして練習を少し休めるかどうか確かめさせてよ」と言っていたとしたら，ひょっとしたら結果はもっとよくなっていたであろうに）という内容から，③「友人の観点を適切に理解しようとする（べきであった）」が正解。 ",
      ],
    },
    {
      questionId: "5-5",
      qa: [
        {
          questionNumber: "37",
          answer: 0,
        },
        {
          questionNumber: "38",
          answer: 0,
        },
      ],
      rightAnswerString: "15",
      isOrderFree: true,
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "①・⑤：本文の情報をもとに推測する問題。第4段落では教師から，第6段落では兄からのアドバイスを受けて，筆者はそれぞれに応じて自分の行動を変えているので，①「私たちの周囲の人々からのアドバイスが私たちが変わる手助けになる」が正解。 ",
        "また，第6段落最終文で兄のパトリックが「それは私たちがコミュニケーションを行う時に使うスキルと同じように聞こえる」と述べたことを受け，第8段落で筆者は卓球の技能がコミュニケーションにも応用できることに気が付き，第9段落1文目では自分のコミュニケーション能力に自信を持てるようになったと述べている。このことから，⑤「私たちは一つのことから学んだことを別のことに応用できる」が正解。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第５問"}</h1>
          <span className="text-gray-600">(配点 {15})</span>
        </div>
        <Saiten2
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>{" "}
      {/* Context */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          Your English teacher has told everyone in your class to find an
          inspirational story and present it to a discussion group, using notes.
          You have found a story written by a high school student in the UK.
        </p>
      </div>
      {/* Story Content */}
      <div className="border border-gray-800 p-8">
        {/* Title and Author */}
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-xl">Lessons from Table Tennis</h1>
          <p>Ben Carter</p>
        </div>

        {/* Main Content */}
        <div className="space-y-6 leading-relaxed">
          <p>
            The ball flew at lightning speed to my backhand. It was completely
            unexpected and I had no time to react. I lost the point and the
            match. Defeat... Again! This is how it was in the first few months
            when I started playing table tennis. It was frustrating, but I now
            know that the sport taught me more than simply how to be a better
            athlete.
          </p>

          <p>
            In middle school, I loved football. I was one of the top scorers,
            but I didn&apos;t get along with my teammates. The coach often said
            that I should be more of a team player. I knew I should work on the
            problem, but communication was just not my strong point.
          </p>

          <p>
            I had to leave the football club when my family moved to a new town.
            I wasn&apos;t upset as I had decided to stop playing football
            anyway. My new school had a table tennis club, coached by the PE
            teacher, Mr Trent, and I joined that. To be honest, I chose table
            tennis because I thought it would be easier for me to play
            individually.
          </p>

          <p>
            At first, I lost more games than I won. I was frustrated and often
            went straight home after practice, not speaking to anyone. One day,
            however, Mr Trent said to me, &quot;You could be a good player, Ben,
            but you need to think more about your game. What do you think you
            need to do?&quot; &quot;I don&apos;t know,&quot; I replied,
            &quot;focus on the ball more?&quot; &quot;Yes,&quot; Mr Trent
            continued, &quot;but you also need to study your opponent&apos;s
            moves and adjust your play accordingly. Remember, your opponent is a
            person, not a ball.&quot; This made a deep impression on me.
          </p>

          <p>
            I deliberately modified my style of play, paying closer attention to
            my opponent&apos;s moves. It was not easy, and took a lot of
            concentration. My efforts paid off, however, and my play improved.
            My confidence grew and I started staying behind more after practice.
            I was turning into a star player and my classmates tried to talk to
            me more than before. I thought that I was becoming popular, but our
            conversations seemed to end before they really got started. Although
            my play might have improved, my communication skills obviously
            hadn&apos;t.
          </p>

          <p>
            My older brother Patrick was one of the few people I could
            communicate with well. One day, I tried to explain my problems with
            communication to him, but couldn&apos;t make him understand. We
            switched to talking about table tennis. &quot;What do you actually
            enjoy about it?&quot; he asked me curiously. I said I loved
            analysing my opponent&apos;s movements and making instant decisions
            about the next move. Patrick looked thoughtful. &quot;That sounds
            like the kind of skill we use when we communicate,&quot; he said.
          </p>

          <p>
            At that time, I didn&apos;t understand, but soon after our
            conversation, I won a silver medal in a table tennis tournament. My
            classmates seemed really pleased. One of them, George, came running
            over. &quot;Hey, Ben!&quot; he said, &quot;Let&apos;s have a party
            to celebrate!&quot; Without thinking, I replied, &quot;I can&apos;t.
            I&apos;ve got practice.&quot; He looked a bit hurt and walked off
            without saying anything else.
          </p>

          <p>
            Why was he upset? I thought about this incident for a long time. Why
            did he suggest a party? Should I have said something different? A
            lot of questions came to my mind, but then I realised that he was
            just being kind. If I&apos;d said, &quot;Great idea. Thank you! Let
            me talk to Mr Trent and see if I can get some time off
            practice,&quot; then maybe the outcome would have been better. At
            that moment Patrick&apos;s words made sense. Without attempting to
            grasp someone&apos;s intention, I wouldn&apos;t know how to respond.
          </p>

          <p>
            I&apos;m still not the best communicator in the world, but I
            definitely feel more confident in my communication skills now than
            before. Next year, my friends and I are going to co-ordinate the
            table tennis league with other schools.
          </p>
        </div>
      </div>
      {/* Notes Section */}
      <div className="mt-8">
        <p className="mb-4">Your notes:</p>
        <div className="border border-gray-800 p-6">
          <div className="space-y-6 font-handwriting">
            <h2 className="text-center text-xl italic mb-6">
              Lessons from Table Tennis
            </h2>

            <div>
              <h3 className="font-bold underline mb-2">
                About the author (Ben Carter)
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Played football at middle school.</li>
                <li>
                  Started playing table tennis at his new school because he
                  <div className="border border-gray-800 inline-block mx-2 px-3 py-0.5">
                    30
                  </div>
                  .
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold underline mb-2">
                Other important people
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Mr Trent: Ben&apos;s table tennis coach, who helped him
                  improve his play.
                </li>
                <li>
                  Patrick: Ben&apos;s brother, who
                  <div className="border border-gray-800 inline-block mx-2 px-3 py-0.5">
                    31
                  </div>
                  .
                </li>
                <li>
                  George: Ben&apos;s classmate, who wanted to celebrate his
                  victory.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold underline mb-2">
                Influential events in Ben&apos;s journey to becoming a better
                communicator
              </h3>
              <div className="flex items-center flex-wrap">
                <span>Began playing table tennis</span>
                <span className="mx-2">→</span>
                <div className="border border-gray-800 px-3 py-0.5">32</div>
                <span className="mx-2">→</span>
                <div className="border border-gray-800 px-3 py-0.5">33</div>
                <span className="mx-2">→</span>
                <div className="border border-gray-800 px-3 py-0.5">34</div>
                <span className="mx-2">→</span>
                <div className="border border-gray-800 px-3 py-0.5">35</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold underline mb-2">
                What Ben realised after the conversation with George
              </h3>
              <div className="flex items-center">
                <span>He should have</span>
                <div className="border border-gray-800 inline-block mx-2 px-3 py-0.5">
                  36
                </div>
                <span>.</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold underline mb-2">
                What we can learn from this story
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <div className="border border-gray-800 inline-block px-3 py-0.5">
                    37
                  </div>
                </li>
                <li>
                  <div className="border border-gray-800 inline-block px-3 py-0.5">
                    38
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "5-1"))}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="whitespace-nowrap mr-2">問 1</span>
          <span>Choose the best option for</span>
          {renderSelect("30", 4, answers, setAnswers)}.
          {showResults && <Explain qa={qa} questionId="5-1" />}
        </div>

        <div className="space-y-3 ml-8">
          <div className="flex gap-4">
            <span>①</span>
            <span>believed it would help him communicate</span>
          </div>
          <div className="flex gap-4">
            <span>②</span>
            <span>hoped to become popular at school</span>
          </div>
          <div className="flex gap-4">
            <span>③</span>
            <span>thought he could win games easily</span>
          </div>
          <div className="flex gap-4">
            <span>④</span>
            <span>wanted to avoid playing a team sport</span>
          </div>
        </div>
      </div>
      {/* Question 2 */}
      <div className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "5-2"))}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="whitespace-nowrap mr-2">問 2</span>
          <span>Choose the best option for</span>
          {renderSelect("31", 4, answers, setAnswers)}.
          {showResults && <Explain qa={qa} questionId="5-2" />}
        </div>

        <div className="space-y-3 ml-8">
          <div className="flex gap-4">
            <span>①</span>
            <span>asked him what he enjoyed about communication</span>
          </div>
          <div className="flex gap-4">
            <span>②</span>
            <span>encouraged him to be more confident</span>
          </div>
          <div className="flex gap-4">
            <span>③</span>
            <span>helped him learn the social skills he needed</span>
          </div>
          <div className="flex gap-4">
            <span>④</span>
            <span>told him what he should have said to his school friends</span>
          </div>
        </div>
      </div>
      {/* Question 3 */}
      <div className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "5-3"))}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="whitespace-nowrap mr-2">問 3</span>
          <span> Choose </span>
          <span className="underline">four</span>
          <span>
            out of the five options (①～⑤) and rearrange them in the order they
            happened.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 ml-8">
          {renderSelect("32", 5, answers, setAnswers)}
          <span>→</span>
          {renderSelect("33", 5, answers, setAnswers)}
          <span>→</span>
          {renderSelect("34", 5, answers, setAnswers)}
          <span>→</span>
          {renderSelect("35", 5, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="5-3" />}
        </div>

        <div className="space-y-3 ml-8">
          <div className="flex gap-4">
            <span>①</span>
            <span>Became a table tennis champion</span>
          </div>
          <div className="flex gap-4">
            <span>②</span>
            <span>Discussed with his teacher how to play well</span>
          </div>
          <div className="flex gap-4">
            <span>③</span>
            <span>Refused a party in his honour</span>
          </div>
          <div className="flex gap-4">
            <span>④</span>
            <span>Started to study his opponents</span>
          </div>
          <div className="flex gap-4">
            <span>⑤</span>
            <span>Talked to his brother about table tennis</span>
          </div>
        </div>
      </div>
      {/* Question 4 */}
      <div className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "5-4"))}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="whitespace-nowrap mr-2">問 4</span>
          <span>Choose the best option for</span>
          {renderSelect("36", 4, answers, setAnswers)}.
          {showResults && <Explain qa={qa} questionId="5-4" />}
        </div>

        <div className="space-y-3 ml-8">
          <div className="flex gap-4">
            <span>①</span>
            <span>
              asked his friend questions to find out more about his motivation
            </span>
          </div>
          <div className="flex gap-4">
            <span>②</span>
            <span>
              invited Mr Trent and other classmates to the party to show
              appreciation
            </span>
          </div>
          <div className="flex gap-4">
            <span>③</span>
            <span>
              tried to understand his friend&apos;s point of view to act
              appropriately
            </span>
          </div>
          <div className="flex gap-4">
            <span>④</span>
            <span>
              worked hard to be a better team player for successful
              communication
            </span>
          </div>
        </div>
      </div>
      {/* Question 5 */}
      <div className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "5-5"))}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="whitespace-nowrap mr-2">問 5</span>
          <span> Choose the best two options for </span>
          {renderSelect("37", 5, answers, setAnswers)}
          <span> and </span>
          {renderSelect("38", 5, answers, setAnswers)}
          <span>. (The order does not matter.)</span>
          {showResults && <Explain qa={qa} questionId="5-5" />}
        </div>

        <div className="space-y-3 ml-8">
          <div className="flex gap-4">
            <span>①</span>
            <span>Advice from people around us can help us change.</span>
          </div>
          <div className="flex gap-4">
            <span>②</span>
            <span>Confidence is important for being a good communicator.</span>
          </div>
          <div className="flex gap-4">
            <span>③</span>
            <span>
              It is important to make our intentions clear to our friends.
            </span>
          </div>
          <div className="flex gap-4">
            <span>④</span>
            <span>
              The support that teammates provide one another is helpful.
            </span>
          </div>
          <div className="flex gap-4">
            <span>⑤</span>
            <span>We can apply what we learn from one thing to another.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex23_5;
