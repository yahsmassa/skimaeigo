"use client";
import Image from "next/image";
import { Paperclip } from "lucide-react";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
const Ex17_5 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "5-1",
      qa: [
        {
          questionNumber: "42",
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
      questionId: "5-2",
      qa: [
        {
          questionNumber: "43",
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
      questionId: "5-3",
      qa: [
        {
          questionNumber: "44",
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
      questionId: "5-4",
      qa: [
        {
          questionNumber: "45",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      isOrderFree: true,
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は①", ""],
    },
    {
      questionId: "5-5",
      qa: [
        {
          questionNumber: "46",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 6,
      explanation: ["正解は②", ""],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2 font-sans">
          <h1 className="text-lg font-bold">{"第５問"}</h1>
          <span className="text-gray-600">(配点 {30})</span>
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
      <div className="mb-8 font-sans">
        <p className="text-base leading-relaxed">
          次の物語を読み、下の問い(問1～5)の
          <span className="inline-block mx-2 border border-black px-4">42</span>
          ～
          <span className="inline-block mx-2 border border-black px-4">46</span>
          に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
        </p>
      </div>

      {/* Story Content */}
      <div className="space-y-6 leading-relaxed">
        <p className="mb-6 indent-7">Ahhhhhhhhhh!</p>

        <p className="mb-4 indent-7">
          With a big yawn I woke up. What a fresh morning! I felt very sharp,
          much sharper than usual. I was able to hear the singing of birds more
          clearly than ever before. I noticed the smell of coffee coming up from
          downstairs. I stretched out my arms in front of myself and raised my
          back; it felt so good. I sat up straight, licked my hand, and started
          to clean my face with it....
          {Kaisetsu(showResults, "17-5-1")}
          Huh?... Something was strange. Why was I licking my hand with my
          tongue? Why was my body covered with fur? I tried to say something,
          but the sound that came out of my mouth was... &quot;Meow.&quot;
          {Kaisetsu(showResults, "17-5-2")}
        </p>

        <p className="mb-4 indent-7">
          It was certainly my bedroom that I was in. It was certainly my bed
          that I was sitting on. Everything was as usual except that... I seemed
          to have changed into a different creature. I was so surprised that I
          couldn&apos;t move. I couldn&apos;t do anything. I wondered — would I
          have to spend the rest of my life as an animal? I began to feel
          afraid.... But after a few moments those feelings passed. So, with a
          wave of my tail, I started to explore my surroundings. A cat&apos;s
          mind is said to be changeable like that.
          {Kaisetsu(showResults, "17-5-3")}
        </p>

        <p className="mb-4 indent-7">
          As I went down the stairs, the smell of coffee grew stronger and I
          could tell what was for breakfast. Maybe the senses of a cat are
          sharper than those of a human. When I got to the dining room, what I
          saw almost stopped my heart. It was <em>me</em>! The human <em>I</em>{" "}
          was sitting at the dining table! I couldn&apos;t take my eyes off{" "}
          <em>myself</em>.{Kaisetsu(showResults, "17-5-4")}
        </p>

        <p className="mb-4 indent-7">
          The human <em>I</em> was absorbed in a smartphone, maybe writing
          responses to friends&apos; messages or playing an online game. Bending{" "}
          <em>my</em> head down toward the phone, <em>I</em> was sitting with
          rounded shoulders and a curved back. <em>I</em> looked very
          uncomfortable.
          {Kaisetsu(showResults, "17-5-5")}
        </p>

        <p className="mb-4 indent-7">
          <em>I</em> sometimes took a little bite of toast, but it appeared that{" "}
          <em>I</em> was not noticing any taste in <em>my</em> mouth. Actually,
          the taste of toast in my memory was vague. I couldn&apos;t remember
          what else had been served for breakfast recently, either. The human{" "}
          <em>I</em> was just mindlessly putting in <em>my</em> mouth anything
          that was on the plate while handling the phone. <em>I</em> was so
          focused on the text messages or games that <em>I</em> took little
          interest in what was happening around
          <em>me</em>. In fact, <em>my</em> face had no expression on it at all.
          {Kaisetsu(showResults, "17-5-6")}
        </p>

        <p className="mb-4 indent-7">
          &quot;Yuji, you never study these days. Are you ready for your final
          exams? You&apos;re making me a little bit worried,&quot; said Mom.
          {Kaisetsu(showResults, "17-5-7")}
        </p>

        <p className="mb-4 indent-7">
          &quot;Mmm,&quot; said <em>I</em>. A sign of frustration briefly
          appeared on <em>my</em> face, but it disappeared in an instant.{" "}
          <em>My</em> face was again as expressionless as it had been before.
          {Kaisetsu(showResults, "17-5-8")}
        </p>

        <p className="mb-4 indent-7">
          <span className="underline">
            &quot;I don&apos;t like this guy,&quot;
          </span>{" "}
          I thought. But this guy was me. I couldn&apos;t deny it. For the first
          time, I realized how I really looked to other people.
          {Kaisetsu(showResults, "17-5-9")}
        </p>

        <p className="mb-4 indent-7">
          Then, as <em>I</em> started to leave the table, our eyes met.
          &quot;Wow! Mom, look! There&apos;s a cat in the dining room!&quot;
          {Kaisetsu(showResults, "17-5-10")}
        </p>

        <p className="mb-4 indent-7">
          I didn&apos;t know why, but I was running. I felt I had to escape.
          Running up the stairs, I found the window in my room was open. I
          jumped! I had a strange feeling. The world suddenly seemed to have
          shifted. I felt my body falling down and....
          {Kaisetsu(showResults, "17-5-11")}
        </p>

        <p className="mb-4 indent-7">Bump!</p>

        <p className="mb-4 indent-7">
          I was awake, lying on the floor of my room. I slowly sat up and looked
          around. Everything looked like it usually did. I looked at my hands. I
          was relieved to see they were no longer covered with fur. I stood up
          and, with a yawn, extended my arms above my head to stretch my back.
          Without thinking, as was my usual habit in the morning, I started to
          walk to my desk where my smartphone had completed charging and... I
          stopped.
          {Kaisetsu(showResults, "17-5-12")}
        </p>

        <p className="mb-4 indent-7">
          After pausing for a moment, I turned around and went downstairs for
          breakfast.
          {Kaisetsu(showResults, "17-5-13")}
        </p>
      </div>

      {/* Questions Section */}
      <div className="mt-12 space-y-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>
              When Yuji realized that he had turned into a cat, he first felt
            </span>
            {renderSelect("42", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-1" />}
            {Kaisetsu(showResults, "17-5-14")}
          </div>

          <div className="ml-8 space-y-2">
            <div>① astonished</div>
            <div>② embarrassed</div>
            <div>③ excited</div>
            <div>④ satisfied</div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              When Yuji&apos;s mother spoke to him, he was annoyed because
            </span>
            {renderSelect("43", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-2" />}
            {Kaisetsu(showResults, "17-5-15")}
          </div>

          <div className="ml-8 space-y-2">
            <div>① he wanted to please her</div>
            <div>② her words disturbed him</div>
            <div>③ his mouth was full of food</div>
            <div>④ she interrupted his studies</div>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>
              The cat thought,{" "}
              <span className="underline">"I don&apos;t like this guy,"</span>{" "}
              because Yuji
            </span>
            {renderSelect("44", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-3" />}
            {Kaisetsu(showResults, "17-5-16")}
          </div>

          <div className="ml-8 space-y-2">
            <div>
              ① could not recall the taste of food he had eaten at breakfast
            </div>
            <div>② tried to hide his efforts to study for the final exams</div>
            <div>
              ③ was making fun of his mother&apos;s concern for his future
            </div>
            <div>④ was not showing respect for people or things around him</div>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>
              At the end of the story, Yuji did not pick up his smartphone
              because he
            </span>
            {renderSelect("45", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-4" />}
            {Kaisetsu(showResults, "17-5-17")}
          </div>

          <div className="ml-8 space-y-2">
            <div>① decided it was time to improve his attitude</div>
            <div>② realized that it was not yet fully charged</div>
            <div>③ wanted to stick to his old priorities</div>
            <div>④ was afraid of being scolded by his mother</div>
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-5"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
            <span>What is the theme of this story?</span>
            {renderSelect("46", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-5" />}
            {Kaisetsu(showResults, "17-5-18")}
          </div>

          <div className="ml-8 space-y-2">
            <div>① Cats have much better senses than humans.</div>
            <div>② Observing yourself can lead to self-change.</div>
            <div>③ People using smartphones look strange.</div>
            <div>④ Unbelievable things can happen in dreams.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex17_5;
