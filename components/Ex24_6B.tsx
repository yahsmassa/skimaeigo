"use client";

import { exPageFormat } from "@/lib/util";
import React, { useState } from "react";
import { Saiten2 } from "./Saiten2";
import { Answers } from "@/lib/types";
import Image from "next/image";

const Ex24_6B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const handleChange = (questionNumber: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`question${questionNumber}`]: value,
    }));
  };

  const renderSelect = (number: string, count: number) => (
    <div className="mx-2 flex flex-row items-center whitespace-nowrap">
      <div className="font-medium mb-0.5 mr-2">[{number}]</div>
      <select
        value={answers[`question${number}`] || ""}
        onChange={(e) => handleChange(number, e.target.value)}
        className="w-20 h-8 border border-gray-300 rounded-md text-center text-sm"
      >
        <option value="">-</option>
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
      <div className="mb-6">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第６問 B"}</h1>
          <span className="text-gray-600">(配点 {12})</span>
        </div>
        <Saiten2
          points={12}
          startQuestionNumber={44}
          correctAnswerArray={[4, 4, 2, 3, 3, 5]}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      <div className="mb-4">
        You are preparing a presentation for your science club, using the
        following passage from a science website.
      </div>

      <div className="text-center font-bold mb-4">
        Chili Peppers: The Spice of Life
      </div>

      <div className="space-y-4">
        <p>
          Tiny pieces of red spice in chili chicken add a nice touch of color,
          but biting into even a small piece can make a person&apos;s mouth burn
          as if it were on fire. While some people love this, others want to
          avoid the painful sensation. At the same time, though, they can eat
          sashimi with wasabi. This might lead one to wonder what spiciness
          actually is and to ask where the difference between chili and wasabi
          comes from.
        </p>

        <p>
          Unlike sweetness, saltiness, and sourness, spiciness is not a taste.
          In fact, we do not actually taste heat, or spiciness, when we eat
          spicy foods. The bite we feel from eating chili peppers and wasabi is
          derived from different types of compounds. Chili peppers get their
          heat from a heavier, oil-like element called capsaicin. Capsaicin
          leaves a lingering, fire-like sensation in our mouths because it
          triggers a receptor called TRPV1. TRPV1 induces stress and tells us
          when something is burning our mouths. Interestingly, there is a wide
          range of heat across the different varieties of chili peppers, and the
          level depends on the amount of capsaicin they contain. This is
          measured using the Scoville Scale, which is also called Scoville Heat
          Units (SHU). SHUs range from the sweet and mild shishito pepper at
          50-200 SHUs to the Carolina Reaper pepper, which can reach up to 2.2
          million.
        </p>

        <p>
          Wasabi is considered a root, not a pepper, and does not contain
          capsaicin. Thus, wasabi is not ranked on the Scoville Scale. However,
          people have compared the level of spice in it to chilis with around
          1,000 SHUs, which is on the lower end of the scale. The reason some
          people cannot tolerate chili spice but can eat foods flavored with
          wasabi is that the spice compounds in it are low in density. The
          compounds in wasabi vaporize easily, delivering a blast of spiciness
          to our nose when we eat it.
        </p>

        <p>
          Consuming chili peppers can have positive effects on our health, and
          much research has been conducted into the benefits of capsaicin. When
          capsaicin activates the TRPV1 receptor in a person&apos;s body, it is
          similar to what happens when they experience stress or pain from an
          injury. Strangely, capsaicin can also make pain go away. Scientists
          found that TRPV1 ceases to be turned on after long-term exposure to
          chili peppers, temporarily easing painful sensations. Thus, skin
          creams containing capsaicin might be useful for people who experience
          muscle aches.
        </p>

        <p>
          Another benefit of eating chili peppers is that they accelerate the
          metabolism. A group of researchers analyzed 90 studies on capsaicin
          and body weight and found that people had a reduced appetite when they
          ate spicy foods. This is because spicy foods increase the heart rate,
          send more energy to the muscles, and convert fat into energy.
          Recently, scientists at the University of Wyoming have created a
          weight-loss drug with capsaicin as a main ingredient.
        </p>

        <p>
          It is also believed that chili peppers are connected with food safety,
          which might lead to a healthier life. When food is left outside of a
          refrigerated environment, microorganisms multiply on it, which may
          cause sickness if eaten. Studies have shown that capsaicin and other
          chemicals found in chili peppers have antibacterial properties that
          can slow down or even stop microorganism growth. As a result, food
          lasts longer and there are fewer food-borne illnesses. This may
          explain why people in hot climates have a tendency to use more chili
          peppers, and therefore, be more tolerant of spicier foods due to
          repeated exposure. Also, in the past, before there were refrigerators,
          they were less likely to have food poisoning than people in cooler
          climates.
        </p>

        <p>
          Chili peppers seem to have health benefits, but can they also be bad
          for our health? Peppers that are high on the Scoville Scale can cause
          physical discomfort when eaten in large quantities. People who have
          eaten several of the world&apos;s hottest chilis in a short time have
          reported experiencing upset stomachs, diarrhea, numb hands, and
          symptoms similar to a heart attack. Ghost peppers, which contain one
          million SHUs, can even burn a person&apos;s skin if they are touched.
        </p>

        <p>
          Luckily the discomfort some people feel after eating spicy foods tends
          to go away soon—usually within a few hours. Despite some negative side
          effects, spicy foods remain popular around the world and add a
          flavorful touch to the table. Remember, it is safe to consume spicy
          foods, but you might want to be careful about the amount of peppers
          you put in your dishes.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div className="font-bold mb-4">Presentation slides:</div>

        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-1.jpg"
              alt="Chili Peppers: The Spice of Life"
              width={500}
              height={300}
              className="w-full"
            />
          </div>

          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-2.jpg"
              alt="Characteristics comparison between chili peppers and wasabi"
              width={500}
              height={300}
              className="w-full"
            />
          </div>

          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-3.jpg"
              alt="Positive Effects of Capsaicin"
              width={500}
              height={300}
              className="w-full"
            />
          </div>

          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-4.jpg"
              alt="Negative Effects of eating too many chili peppers"
              width={500}
              height={300}
              className="w-full"
            />
          </div>

          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-5.jpg"
              alt="Spice Tolerance"
              width={500}
              height={300}
              className="w-full"
            />
          </div>

          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex24-6B-6.jpg"
              alt="Closing Remark"
              width={500}
              height={300}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-8 ">
          <div className="flex items-start gap-2">
            <span className="font-sans">問 1</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span>
                  What is the first characteristic of wasabi on Slide 2?
                </span>
                {renderSelect("44", 4)}
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    1
                  </span>
                  <span>burning taste</span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    2
                  </span>
                  <span>fire-like sensation</span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    3
                  </span>
                  <span>lasting feeling</span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    4
                  </span>
                  <span>light compounds</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="font-sans">問 2</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span>
                  Which is an <u>error</u> you found on Slide 3?
                </span>
                {renderSelect("45", 5)}
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    1
                  </span>
                  <span>A</span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    2
                  </span>
                  <span>B</span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    3
                  </span>
                  <span>C</span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    4
                  </span>
                  <span>D</span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    5
                  </span>
                  <span>E</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="font-sans">問 3</span>
            <div className="flex-1">
              <div>
                Choose two options for Slide 4. (The order does not matter.)
              </div>
              <div className="flex items-center gap-2 mt-2">
                {renderSelect("46", 5)}
                <span>・</span>
                {renderSelect("47", 5)}
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    1
                  </span>
                  <span>you might activate harmful bacteria.</span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    2
                  </span>
                  <span>you might experience stomach pain.</span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    3
                  </span>
                  <span>you might lose feeling in your hands.</span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    4
                  </span>
                  <span>your fingers might feel like they are on fire.</span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    5
                  </span>
                  <span>your nose might start hurting.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-sans">問 4</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span>
                  What can be inferred about tolerance for spices for Slide 5?
                </span>
                {renderSelect("48", 4)}
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    1
                  </span>
                  <span>
                    People with a high tolerance to chili peppers pay attention
                    to the spices used in their food.
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    2
                  </span>
                  <span>
                    People with a high tolerance to wasabi are scared of chili
                    peppers&apos; negative effects.
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    3
                  </span>
                  <span>
                    People with a low tolerance to chili peppers can get used to
                    their heat.
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    4
                  </span>
                  <span>
                    People with a low tolerance to wasabi cannot endure high SHU
                    levels.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="font-sans">問 5</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span>Choose the most appropriate remark for Slide 6.</span>
                {renderSelect("49", 5)}
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    1
                  </span>
                  <span>
                    Don&apos;t be afraid. Eating spicy foods will boost your
                    confidence.
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    2
                  </span>
                  <span>
                    Next time you eat chili chicken, remember its punch only
                    stays for a second.
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    3
                  </span>
                  <span>
                    Personality plays a big role in our spice preference, so
                    don&apos;t worry.
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    4
                  </span>
                  <span>
                    Unfortunately, there are no cures for a low wasabi
                    tolerance.
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center border border-black rounded-full">
                    5
                  </span>
                  <span>
                    When someone offers you some spicy food, remember it has
                    some benefits.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex24_6B;
