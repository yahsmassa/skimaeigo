"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";
const Ex25_6 = () => {
  const correctAnswerArray = [5, 4, 2, 1, 4, 3, 3, 4];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const handleChange = (questionNumber: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`question${questionNumber}`]: value,
    }));
  };

  const isCorrect = (questionNumber: string, index: number) => {
    return (
      answers[`question${questionNumber}`] === String(correctAnswerArray[index])
    );
  };

  const renderSelect = (number: string, count: number, index: number) => (
    <div className="mx-2 flex flex-row items-center whitespace-nowrap">
      <div
        className={cn(
          "font-medium mb-0.5 mr-2",
          showResults &&
            (isCorrect(number, index) ? "text-green-500" : "text-red-500")
        )}
      >
        [{number}]
      </div>
      <select
        value={answers[`question${number}`] || ""}
        onChange={(e) => handleChange(number, e.target.value)}
        className="w-20 h-8 border border-gray-300 rounded-md text-center text-sm"
      >
        <option value="">選択</option>
        {Array.from({ length: count }, (_, index) => (
          <option key={index + 1} value={String(index + 1)}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第６問"}</h1>
          <span className="text-gray-600">(配点 {12})</span>
        </div>
        <Saiten
          points={12}
          startQuestionNumber={24}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
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
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 1</span>
            <div>
              Choose <span className="underline">four</span> out of the five
              descriptions (①〜⑤) and put them in the order they occurred.
            </div>
          </div>

          <div className="flex items-center gap-2 my-4 ml-8 flex-wrap">
            {renderSelect("24", 4, 0)}
            <span>→</span>
            {renderSelect("25", 4, 1)}
            <span>→</span>
            {renderSelect("26", 4, 2)}
            <span>→</span>
            {renderSelect("27", 4, 3)}
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
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 2</span>
            <div>
              Choose the correct combination of Melody&apos;s superpowers.
            </div>
            {renderSelect("28", 4, 4)}
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
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 3</span>
            <span>Choose the best option for </span>
            {renderSelect("29", 4, 5)}.
          </div>

          <div className="space-y-2 ml-8">
            <div>① control your powers</div>
            <div>② hire you as a superhero</div>
            <div>③ keep you together with us</div>
            <div>④ make sure you don&apos;t commit crimes</div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 4</span>
            <span>Choose the best options for </span>
            {renderSelect("30", 4, 6)}
            <span>and</span>
            {renderSelect("31", 4, 7)}
            <span>. (The order does not matter.)</span>
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
