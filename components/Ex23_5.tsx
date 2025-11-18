"use client";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";
const Ex23_5 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "23_5")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="md:text-lg font-bold font-sans">{"第５問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {15})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 10分 約700語】
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
      </div>{" "}
      {/* Context */}
      <div className="mb-2">
        <p className="text-gray-700 leading-relaxed md:text-[17px] px-1 mb-2">
          Your English teacher has told everyone in your class to find an
          inspirational story and present it to a discussion group, using notes.
          You have found a story written by a high school student in the UK.
          {Kaisetsu(showResults, "23-5-0")}
        </p>
      </div>
      {/* Story Content */}
      <div className="border border-gray-800 p-8">
        {/* Title and Author */}
          <h1 className="text-xl text-center font-semibold">Lessons from Table Tennis</h1>
          <p className="text-right">Ben Carter</p>

        {/* Main Content */}
        <div className="mt-2 space-y-1 leading-relaxed text-justify">
          <p className="indent-7">
            The ball flew at lightning speed to my backhand. It was completely
            unexpected and I had no time to react. I lost the point and the
            match. Defeat... Again! This is how it was in the first few months
            when I started playing table tennis. It was frustrating, but I now
            know that the sport taught me more than simply how to be a better
            athlete.{' '}
            {Kaisetsu(showResults, "23-5-1")}
          </p>

          <p className="indent-7">
            In middle school, I loved football. I was one of the top scorers,
            but I didn&apos;t get along with my teammates. The coach often said
            that I should be more of a team player. I knew I should work on the
            problem, but communication was just not my strong point.{' '}
            {Kaisetsu(showResults, "23-5-2")}
          </p>

          <p className="indent-7">
            I had to leave the football club when my family moved to a new town.
            I wasn&apos;t upset as I had decided to stop playing football
            anyway. My new school had a table tennis club, coached by the PE
            teacher, Mr Trent, and I joined that. To be honest, I chose table
            tennis because I thought it would be easier for me to play
            individually.{' '}
            {Kaisetsu(showResults, "23-5-3")}
          </p>

          <p className="indent-7">
            At first, I lost more games than I won. I was frustrated and often
            went straight home after practice, not speaking to anyone. One day,
            however, Mr Trent said to me, &quot;You could be a good player, Ben,
            but you need to think more about your game. What do you think you
            need to do?&quot; &quot;I don&apos;t know,&quot; I replied,
            &quot;focus on the ball more?&quot; &quot;Yes,&quot; Mr Trent
            continued, &quot;but you also need to study your opponent&apos;s
            moves and adjust your play accordingly. Remember, your opponent is a
            person, not a ball.&quot; This made a deep impression on me.{' '}
            {Kaisetsu(showResults, "23-5-4")}
          </p>

          <p className="indent-7">
            I deliberately modified my style of play, paying closer attention to
            my opponent&apos;s moves. It was not easy, and took a lot of
            concentration. My efforts paid off, however, and my play improved.
            My confidence grew and I started staying behind more after practice.
            I was turning into a star player and my classmates tried to talk to
            me more than before. I thought that I was becoming popular, but our
            conversations seemed to end before they really got started. Although
            my play might have improved, my communication skills obviously
            hadn&apos;t.{' '}
            {Kaisetsu(showResults, "23-5-5")}
          </p>

          <p className="indent-7">
            My older brother Patrick was one of the few people I could
            communicate with well. One day, I tried to explain my problems with
            communication to him, but couldn&apos;t make him understand. We
            switched to talking about table tennis. &quot;What do you actually
            enjoy about it?&quot; he asked me curiously. I said I loved
            analysing my opponent&apos;s movements and making instant decisions
            about the next move. Patrick looked thoughtful. &quot;That sounds
            like the kind of skill we use when we communicate,&quot; he said.
            {' '}
            {Kaisetsu(showResults, "23-5-6")}
          </p>

          <p className="indent-7">
            At that time, I didn&apos;t understand, but soon after our
            conversation, I won a silver medal in a table tennis tournament. My
            classmates seemed really pleased. One of them, George, came running
            over. &quot;Hey, Ben!&quot; he said, &quot;Let&apos;s have a party
            to celebrate!&quot; Without thinking, I replied, &quot;I can&apos;t.
            I&apos;ve got practice.&quot; He looked a bit hurt and walked off
            without saying anything else.{' '}
            {Kaisetsu(showResults, "23-5-7")}
          </p>

          <p className="indent-7">
            Why was he upset? I thought about this incident for a long time. Why
            did he suggest a party? Should I have said something different? A
            lot of questions came to my mind, but then I realised that he was
            just being kind. If I&apos;d said, &quot;Great idea. Thank you! Let
            me talk to Mr Trent and see if I can get some time off
            practice,&quot; then maybe the outcome would have been better. At
            that moment Patrick&apos;s words made sense. Without attempting to
            grasp someone&apos;s intention, I wouldn&apos;t know how to respond.
            {' '}
            {Kaisetsu(showResults, "23-5-8")}
          </p>

          <p className="indent-7">
            I&apos;m still not the best communicator in the world, but I
            definitely feel more confident in my communication skills now than
            before. Next year, my friends and I are going to co-ordinate the
            table tennis league with other schools.{' '}
            {Kaisetsu(showResults, "23-5-9")}
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
                  <div className="border border-gray-800 inline-block mx-2 px-3 py-0.5 font-sans">
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
                  <div className="border border-gray-800 inline-block mx-2 px-3 py-0.5 font-sans">
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
                <div className="border border-gray-800 px-3 py-0.5 font-sans">
                  32
                </div>
                <span className="mx-2">→</span>
                <div className="border border-gray-800 px-3 py-0.5 font-sans">
                  33
                </div>
                <span className="mx-2">→</span>
                <div className="border border-gray-800 px-3 py-0.5 font-sans">
                  34
                </div>
                <span className="mx-2">→</span>
                <div className="border border-gray-800 px-3 py-0.5 font-sans">
                  35
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold underline mb-2">
                What Ben realised after the conversation with George
              </h3>
              <div className="flex items-center">
                <span>He should have</span>
                <div className="border border-gray-800 inline-block mx-2 px-3 py-0.5 font-sans">
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
                  <div className="border border-gray-800 inline-block px-3 py-0.5 font-sans">
                    37
                  </div>
                </li>
                <li>
                  <div className="border border-gray-800 inline-block px-3 py-0.5 font-sans">
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
          <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
          <span>Choose the best option for</span>
          {renderSelect("30", 4, answers, setAnswers)}<span className="-ml-3 mr-1">.</span>
          <div className="flex flex-row gap-2">
            <Explain qa={qa} questionId="5-1" isShow={showResults} />
            {Kaisetsu(showResults, "23-5-10")}
          </div>
        </div>

        <div className="space-y-2 ml-2 md:ml-8">
          {[
            "believed it would help him communicate",
            "hoped to become popular at school",
            "thought he could win games easily",
            "wanted to avoid playing a team sport",
          ].map((text, index) => (
            <div key={index} className="flex gap-4">
              <span>{"①②③④"[index]}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 2 */}
      <div className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "5-2"))}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
          <span>Choose the best option for</span>
          {renderSelect("31", 4, answers, setAnswers)}<span className="-ml-3 mr-1">.</span>
          <div className="flex flex-row gap-2">
            <Explain qa={qa} questionId="5-2"  isShow={showResults} />
            {Kaisetsu(showResults, "23-5-11")}
          </div>
        </div>

        <div className="space-y-2 ml-2 md:ml-8">
          {[
            "asked him what he enjoyed about communication",
            "encouraged him to be more confident",
            "helped him learn the social skills he needed",
            "told him what he should have said to his school friends",
          ].map((text, index) => (
            <div key={index} className="flex gap-4">
              <span>{"①②③④"[index]}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 3 */}
      <div className={cn("space-y-2 mt-4", showResults && qaFormat(qa, "5-3"))}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
          <span> Choose </span>
          <span className="underline font-semibold">four</span>
          <span>
            out of the five options (①～⑤) and rearrange them in the order they
            happened.
          </span>
        </div>

        <div className="flex flex-wrap items-center  ml-8 md:ml-0">
          {renderSelect("32", 5, answers, setAnswers)}
          <span>→</span>
          {renderSelect("33", 5, answers, setAnswers)}
          <span>→</span>
          {renderSelect("34", 5, answers, setAnswers)}
          <span>→</span>
          {renderSelect("35", 5, answers, setAnswers)}
        </div>
          <div className="flex flex-row gap-2">
            <Explain qa={qa} questionId="5-3"  isShow={showResults} />
            {Kaisetsu(showResults, "23-5-12")}
          </div>

        <div className="space-y-1 ml-2 md:ml-8">
          {[
            "Became a table tennis champion",
            "Discussed with his teacher how to play well",
            "Refused a party in his honour",
            "Started to study his opponents",
            "Talked to his brother about table tennis",
          ].map((text, index) => (
            <div key={index} className="flex gap-4">
              <span>{"①②③④⑤"[index]}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 4 */}
      <div className={cn("space-y-1 mt-4", showResults && qaFormat(qa, "5-4"))}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
          <span>Choose the best option for</span>
          <div className="flex flex-row gap-2">
            {renderSelect("36", 4, answers, setAnswers)}<span className="-ml-3 mr-1">.</span>
            <Explain qa={qa} questionId="5-4"  isShow={showResults} />
            {Kaisetsu(showResults, "23-5-13")}
          </div>
        </div>

        <div className="space-y-1 ml-2 md:ml-8">
          {[
            "asked his friend questions to find out more about his motivation",
            "invited Mr Trent and other classmates to the party to show appreciation",
            "tried to understand his friend's point of view to act appropriately",
            "worked hard to be a better team player for successful communication",
          ].map((text, index) => (
            <div key={index} className="flex gap-4">
              <span>{"①②③④"[index]}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 5 */}
      <div className={cn("space-y-2 mt-4", showResults && qaFormat(qa, "5-5"))}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
          <span> Choose the best two options for </span>
          {renderSelect("37", 5, answers, setAnswers)}
          <span className="-mx-2"> and </span>
          {renderSelect("38", 5, answers, setAnswers)}
          <span>. (The order does not matter.)</span>
          <div className="flex flex-row gap-2">
            <Explain qa={qa} questionId="5-5"  isShow={showResults} />
            {Kaisetsu(showResults, "23-5-14")}
          </div>
        </div>

        <div className="space-y-1 ml-2 md:ml-8">
          {[
            "Advice from people around us can help us change.",
            "Confidence is important for being a good communicator.",
            "It is important to make our intentions clear to our friends.",
            "The support that teammates provide one another is helpful.",
            "We can apply what we learn from one thing to another.",
          ].map((text, index) => (
            <div key={index} className="flex gap-4">
              <span>{"①②③④⑤"[index]}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ex23_5;
