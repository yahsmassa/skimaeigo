"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";
import Image from "next/image";

const Ex25_7 = () => {
  const correctAnswerArray = [1, 4, 1, 4, 1, 4];
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
          <h1 className="text-lg font-bold">{"第７問"}</h1>
          <span className="text-gray-600">(配点 {16})</span>
        </div>
        <Saiten
          points={16}
          startQuestionNumber={32}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      {/* Introduction text */}
      <p className="mb-6">
        You are preparing a presentation for a science project on animal habits.
        You found some interesting information in the article below and are now
        making your outline.
      </p>

      {/* Article content */}
      <div className="border border-gray-300 p-8">
        <h2 className="text-center font-medium text-lg mb-6">
          Animal Sleep Patterns
        </h2>

        <div className="space-y-4">
          <p className="indent-8">
            If you ever spend all day at home, you might notice that your pet
            cat sleeps a lot during the day and is quite active in the evening
            and early morning. Humans, on the other hand, are awake during most
            of the daylight hours and then sleep for a long time at night.
          </p>

          <p className="indent-8">
            Sleep is essential for animals&apos; physical and mental health, and
            for their bodies to function efficiently. For animals with brains
            and central nervous systems, sleep is generally defined as an
            altered state of consciousness characterized by specific body
            positions, closed eyes, a general decrease in physical activity, and
            slower response rates. Sleep also gives the brain and body a chance
            to rest, and the body becomes energized. Most creatures experience
            states of sleep, but the types and patterns differ from species to
            species.
          </p>

          <p className="indent-8">
            Different sleep patterns over a 24-hour cycle have been identified
            in various types of animals. Three common patterns are called{" "}
            <span className="italic">monophasic</span>,
            <span className="italic">biphasic</span>, and{" "}
            <span className="italic">polyphasic</span>. Monophasic sleep,
            experienced by humans and many larger animals, happens when one is
            awake and active for many hours, and then one sleeps for an extended
            period. Some birds, insects, and mammals utilize a kind of biphasic
            sleep, where the animal has two waking and sleeping times, with one
            sleep being long and the other like a nap. Dogs and cats are
            polyphasic, meaning they have four to six sleeping and waking
            periods throughout the day.
          </p>

          <p className="indent-8">
            There are variations in sleep patterns depending on the
            animal&apos;s size, physical needs, and diet. Smaller animals such
            as squirrels or mice tend to use up their energy by moving quickly
            and frequently. This results in the need to sleep more often but for
            shorter periods of time. Lions are carnivorous animals and have
            longer sleeping times because their food sources satisfy their
            energy for longer periods. Large herbivores like wild horses, on the
            other hand, sleep less than meat-eating animals because their
            plant-based diet has relatively few calories, resulting in the need
            to spend most of their time searching for food.
          </p>

          <p className="indent-8">
            Safety is another variable in sleep patterns. Animals that can
            create safe spaces tend to enjoy longer periods of sleep, but those
            that might need to stay alert sleep less. Apes sleep on platforms,
            high above the jungle floor, which keep them away from attackers.
            Some smaller animals such as rabbits create shelters by digging into
            the ground where it is difficult for predators to find them. As a
            result, they feel safer and sleep longer. In contrast, elephants
            often travel long distances and may feel exposed to danger from
            hunters or other animals, contributing to their short sleeping
            times.
          </p>

          <p className="indent-8">
            The animal sleep patterns discussed so far tend to be typical. A
            pattern that may be less easily noticed in our daily lives is called{" "}
            <span className="italic">unihemispheric</span> sleep. In this type
            of sleep, some animals traveling in a group keep one eye open. While
            one side of the animal&apos;s brain sleeps, the other side stays
            awake and alert to its surroundings. In this way, the animal can
            experience the reviving effects of sleep while also watching out for
            threats. This unihemispheric sleep occurs in some bird species when
            they are flying long distances in groups. Birds flying at the outer
            edge of the group use this type of sleep to help protect the other
            members that sleep with both eyes closed.
          </p>

          <p className="indent-8">
            Besides the types of sleep explained above, there are patterns that
            can be considered to be sleep-like activities.{" "}
            <span className="italic">Hibernation</span>, which can be observed
            in black bears, is a long, inactive period when food is scarce or
            the weather is severe. During this time, the animal&apos;s body
            temperature drops, its heart rate and breathing slow down, and it
            may appear dead. Creatures such as jellyfish that have no central
            nervous system also experience times of extreme relaxation where
            they remain in a less responsive state.
          </p>

          <p className="indent-8">
            &quot;Have no fear! I&apos;ll save Whiskers!&quot; I said, as I
            threw open the cover of the drain and went underground. To my
            surprise, the crew member told me that she had lost Whiskers and
            asked me to find the cat. I walked around calling for Whiskers but
            he did not come.
          </p>

          <p className="indent-8">
            As shown above, sleep plays an important role in the lives of
            animals and it is much more complex than simply closing the eyes.
          </p>
        </div>
      </div>

      {/* Presentation Outline */}
      <div className="mt-8 space-y-4">
        <p className="font-medium">Your presentation outline</p>

        <div className="border border-gray-300 p-8">
          <h2 className="text-center text-xl italic mb-8">How Animals Sleep</h2>

          <div className="space-y-6">
            <div>
              <div className="flex gap-2 items-center mb-2">
                <h3 className="text-lg italic">Importance of Sleep</h3>
                <div className="border border-gray-400 px-3 py-1">32</div>
              </div>
              <div className="space-y-2 ml-4">
                <p>A. To alter body temperature</p>
                <p>B. To maintain overall health</p>
                <p>C. To refresh the animal&apos;s body</p>
                <p>D. To reset the brain neurons</p>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-start">
                <h3 className="text-lg italic">
                  Biphasic Sleep Pattern (in each 24-hour cycle)
                </h3>
                <div className="border border-gray-400 px-3 py-1">33</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg italic mb-2">
                Some Conditions Affecting Sleep Patterns
              </h3>
              <div className="space-y-2 ml-4">
                <div className="flex gap-2 items-center">
                  <span>- Animals</span>
                  <div className="border border-gray-400 px-3 py-1">34</div>
                  <span>.</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span>- Animals</span>
                  <div className="border border-gray-400 px-3 py-1">35</div>
                  <span>.</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg italic mb-2">Unihemispheric Sleep</h3>
              <div className="space-y-2 ml-4">
                <div className="flex gap-2 items-center">
                  <span>- Some birds</span>
                  <div className="border border-gray-400 px-3 py-1">36</div>
                  <span>.</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <div className="border border-gray-400 px-3 py-1">37</div>
              </div>
              <div className="space-y-2 ml-4">
                <p>- Black bear hibernation</p>
                <p>- Jellyfish relaxation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Questions section */}
      <div className="mt-8 space-y-8">
        {/* Question 1 */}
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 1</span>
            <span>
              Under the heading, &quot;Importance of Sleep,&quot; you spotted an
              error in your presentation outline. Which of the following should
              you <span className="underline">remove</span>?
            </span>
            {renderSelect("32", 4, 0)}
          </div>
          <div className="space-y-2 ml-8">
            <div>① A</div>
            <div>② B</div>
            <div>③ C</div>
            <div>④ D</div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 2</span>
            <span>
              You want to use a figure for the biphasic sleep pattern mentioned
              in the article. Choose the best option for{" "}
            </span>
            {renderSelect("33", 4, 1)}.
          </div>
          <div className="ml-8">
            <Image
              src="/images/Ex25-7-1.jpg"
              alt="Sleep pattern diagrams showing four circular charts labeled 1-4, each divided into awake and asleep sections"
              width={800}
              height={600}
              className="w-full max-w-2xl"
            />
          </div>
        </div>

        {/* Question 3 */}
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 3</span>
            <span>Choose the best options for </span>
            {renderSelect("34", 4, 2)}
            <span>and </span>
            {renderSelect("35", 4, 3)}. (The order does not matter.)
          </div>
          <div className="space-y-2 ml-8">
            <div>① which burn up energy rapidly tend to sleep more often</div>
            <div>② which continually search for food need longer sleep</div>
            <div>③ whose diet has fewer calories can sleep more easily</div>
            <div>
              ④ whose food keeps their stomachs full usually sleep longer
            </div>
            <div>
              ⑤ whose homes are difficult to get to typically sleep less
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 4</span>
            <span>Choose the best option for </span>
            {renderSelect("36", 4, 4)}.
          </div>
          <div className="space-y-2 ml-8">
            <div>
              ① can be partially asleep and partially awake while in flight
            </div>
            <div>
              ② can have half of their brain sleep, leading to increased heart
              rate
            </div>
            <div>
              ③ can keep both eyes open constantly to watch out for enemies
            </div>
            <div>④ can protect the outside members from inside the group</div>
          </div>
        </div>

        {/* Question 5 */}
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 5</span>
            <span>Choose the best heading for </span>
            {renderSelect("37", 4, 5)}.
          </div>
          <div className="space-y-2 ml-8">
            <div>① Common Patterns of Sleep</div>
            <div>② Natural Sleep Methods</div>
            <div>③ Reasons for Sleep</div>
            <div>④ States Similar to Sleep</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex25_7;
