"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const TheContest = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "25_3")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第３問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {9})</span>
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
      <p className="mb-8 text-gray-800">
        You are an exchange student at a UK high school, and your teacher asked
        you to find an interesting story. You found this story to share in class
        next week.
        {Kaisetsu(showResults, "25-3-1")}
      </p>

      <div className="border border-gray-300 p-8 mb-8">
        <h1 className="text-center text-xl mb-6">THE CONTEST</h1>

        <p className="mb-4">
          &quot;One more time, with feeling!&quot; I encouraged my band.
        </p>

        <p className="mb-4">
          We are capable musicians. In fact, our keyboardist, Yuki, is a
          classically-trained pianist who regularly performs in front of
          audiences. Kei, our bassist, has a huge number of followers because of
          the popular videos she uploads. However, the Ultimate Music Contest
          was only a few weeks away and I was kind of regretting that we had
          entered it. I was worried that my band <i>Cat&apos;s Curry</i>{" "}
          wouldn&apos;t be ready. Something felt wrong, but I couldn&apos;t
          figure it out. We continued to practise until our rehearsal time was
          up. As band leader, I felt additional pressure about the contest.
          &quot;Tomo, you&apos;re too worried. Everything will be OK,&quot; Ren,
          our drummer, said as she smiled at me and waved goodbye. &quot;I hope
          so,&quot; I thought to myself.
          {Kaisetsu(showResults, "25-3-2")}
        </p>

        <p className="mb-4">
          Back at home, I watched the video I had taken of our rehearsal. As I
          listened to <i>Sayonara, and Thanks for Everything</i>, I thought my
          ears were playing tricks on me. I carefully listened a few more times.
          Although it was hard to notice, we were slightly out of rhythm.
          &quot;How could that be?&quot; I wondered. As I continued to listen, I
          paid extra attention to each instrument. &quot;I&apos;ve got it!&quot;
          I thought excitedly.
          {Kaisetsu(showResults, "25-3-3")}
        </p>

        <p className="mb-4">
          At the next practice, I played back the recording and waited for
          everyone&apos;s reaction.
          <br />
          &quot;I&apos;ve been practising every day!&quot;
          <br />
          &quot;These songs aren&apos;t even difficult...&quot;
          <br />
          &quot;What&apos;s the matter?&quot;
          {Kaisetsu(showResults, "25-3-4")}
        </p>

        <p className="mb-4">
          They didn&apos;t understand the problem, so I explained my discovery,
          &quot;Each of us is showing off. We&apos;re playing for ourselves, not
          for the band!&quot; From that day on, our focus shifted and the band
          took a step forward on its musical journey. Like the saying goes,
          &quot;The whole is greater than the sum of the parts.&quot; Although{" "}
          <i>Cat&apos;s Curry</i> did not win the contest, we all felt it was
          the best performance of our lives.
          {Kaisetsu(showResults, "25-3-5")}
        </p>
      </div>

      <div className="space-y-8">
        <div className={cn("space-y-4", showResults && qaFormat(qa, "3-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>Which person is telling the story? </span>
            {renderSelect("8", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="3-1" />}
            {Kaisetsu(showResults, "25-3-6")}
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            <p>① Kei</p>
            <p>② Ren</p>
            <p>③ Tomo</p>
            <p>④ Yuki</p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "3-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>
              Choose <span className="underline">four</span> out of the five
              options (①～⑤) and put them in the order they happened.
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap mb-4">
            {renderSelect("9", 5, answers, setAnswers)}
            <span className="mx-2">→</span>
            {renderSelect("10", 5, answers, setAnswers)}
            <span className="mx-2">→</span>
            {renderSelect("11", 5, answers, setAnswers)}
            <span className="mx-2">→</span>
            {renderSelect("12", 5, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="3-2" />}
            {Kaisetsu(showResults, "25-3-7")}
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            <p>① The band changed its attitude.</p>
            <p>② The band decided to practise more often.</p>
            <p>③ The band leader identified the problem.</p>
            <p>④ The band leader was concerned about the band.</p>
            <p>⑤ The band registered for a contest.</p>
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "3-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span className="mr-2">
              How did the band most likely feel after
            </span>
            <span className="mr-2">the competition? </span>
            {renderSelect("13", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="3-3" />}
            {Kaisetsu(showResults, "25-3-8")}
          </div>
          <div className="pl-2 md:pl-8 space-y-2">
            <p>① Awful</p>
            <p>② Embarrassed</p>
            <p>③ Independent</p>
            <p>④ Satisfied</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheContest;
