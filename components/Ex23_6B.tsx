"use client";

import React, { useState } from "react";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex23_6B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "23_6B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第６問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {12})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 10分 700単語強】
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
      <div className="space-y-1">
        {/* Question Header */}
        <div className="flex gap-4 mb-2">
          <p className="text-justify indent-7 md:text-[17px] mb-2">
            You are in a student group preparing for an international science
            presentation contest. You are using the following passage to create
            your part of the presentation on extraordinary creatures.{' '}
            {Kaisetsu(showResults, "23-6B-0")}
          </p>
        </div>

        {/* Main Text */}
        <div className="space-y-1">
          <p className="text-justify indent-7">
            Ask someone to name the world&apos;s toughest animal, and they might
            say the Bactrian camel as it can survive in temperatures as high as
            50°C, or the Arctic fox which can survive in temperatures lower than
            −58°C. However, both answers would be wrong as it is widely believed
            that the tardigrade is the toughest creature on earth.{' '}
            {Kaisetsu(showResults, "23-6B-1")}
          </p>

          <p className="text-justify indent-7">
            Tardigrades, also known as water bears, are microscopic creatures,
            which are between 0.1 mm to 1.5 mm in length. They live almost
            everywhere, from 6,000-meter-high mountains to 4,600 meters below
            the ocean&apos;s surface. They can even be found under thick ice and
            in hot springs. Most live in water, but some tardigrades can be
            found in some of the driest places on earth. One researcher reported
            finding tardigrades living under rocks in a desert without any
            recorded rainfall for 25 years.{' '}
            {Kaisetsu(showResults, "23-6B-2")}
          </p>

          <p className="text-justify indent-7">
            All they need are a few drops or a thin layer of water to live in.
            When the water dries up, so do they. They lose all but three percent
            of their body&apos;s water and their metabolism slows down to 0.01%
            of its normal speed. The dried-out tardigrade is now in a state
            called &quot;tun,&quot; a kind of deep sleep. It will continue in
            this state until it is once again soaked in water. Then, like a
            sponge, it absorbs the water and springs back to life again as if
            nothing had happened.{' '}
            {Kaisetsu(showResults, "23-6B-3")}
          </p>

          <p className="text-justify indent-7">
            Whether the tardigrade is in tun for 1 week or 10 years does not
            really matter. The moment it is surrounded by water, it comes alive
            again. When tardigrades are in a state of tun, they are so tough
            that they can survive in temperatures as low as −272°C and as high
            as 151°C. Exactly how they achieve this is still not fully
            understood.{' '}
            {Kaisetsu(showResults, "23-6B-4")}
          </p>

          <p className="text-justify indent-7">
            Perhaps even more amazing than their ability to survive on earth —
            they have been on earth for some 540 million years — is their
            ability to survive in space. In 2007, a team of European researchers
            sent a number of living tardigrades into space on the outside of a
            rocket for 10 days. On their return to earth, the researchers were
            surprised to see that 68% were still alive. This means that for 10
            days most were able to survive X-rays and ultraviolet radiation
            1,000 times more intense than here on earth. Later, in 2019, an
            Israeli spacecraft crashed onto the moon and thousands of
            tardigrades in a state of tun were spilled onto its surface. Whether
            these are still alive or not is unknown as no one has gone to
            collect them — which is a pity.{' '}
            {Kaisetsu(showResults, "23-6B-5")}
          </p>

          <p className="text-justify indent-7">
            Tardigrades are shaped like a short cucumber. They have four short
            legs on each side of their bodies. Some species have sticky pads at
            the end of each leg, while others have claws. There are 16 known
            claw variations, which help identify those species with claws. All
            tardigrades have a place for eyes, but not all species have eyes.
            Their eyes are primitive, only having five cells in total — just one
            of which is light sensitive.{' '}
            {Kaisetsu(showResults, "23-6B-6")}
          </p>

          <p className="text-justify indent-7">
            Basically, tardigrades can be divided into those that eat plant
            matter, and those that eat other creatures. Those that eat
            vegetation have a ventral mouth — a mouth located in the lower part
            of the head, like a shark. The type that eats other creatures has a
            terminal mouth, which means the mouth is at the very front of the
            head, like a tuna. The mouths of tardigrades do not have teeth. They
            do, however, have two sharp needles, called stylets, that they use
            to pierce plant cells or the bodies of smaller creatures so the
            contents can be sucked out.{' '}
            {Kaisetsu(showResults, "23-6B-7")}
          </p>

          <p className="text-justify indent-7">
            Both types of tardigrade have rather simple digestive systems. The
            mouth leads to the pharynx (throat), where digestive juices and food
            are mixed. Located above the pharynx is a salivary gland. This
            produces the juices that flow into the mouth and help with
            digestion. After the pharynx, there is a tube which transports food
            toward the gut. This tube is called the esophagus. The middle gut, a
            simple stomach/intestine type of organ, digests the food and absorbs
            the nutrients. The leftovers then eventually move through to the
            anus.{' '}
            {Kaisetsu(showResults, "23-6B-8")}
          </p>
        </div>
      </div>
      <div className="space-y-6">
        {/* Title */}
        <h2 className="text-lg my-4">Your presentation slides:</h2>

        {/* Slides Image */}
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <Image
            src="/images/Ex23-6B-1.webp"
            alt="Presentation slides showing Tardigrades: Earth's Ultimate Survivors, including sections on Basic Information, Habitats, Secrets to Survival, Digestive Systems, and Final Statement"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </div>
      {/* Question 1 */}
      <div className={cn("mb-8 mt-8 ", showResults && qaFormat(qa, "6B-1"))}>
        <div className="flex flex-wrap items-center mb-2">
          <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
          <span>
            Which of the following should you{" "}
            <span className="underline font-semibold">not</span> include for
          </span>
          <div className="flex flex-row gap-2">
          {renderSelect("44", 5, answers, setAnswers)}<span className="-ml-1 mr-2 text-lg">?</span>
            <Explain qa={qa} questionId="6B-1"  isShow={showResults} />
            {Kaisetsu(showResults, "23-6B-9")}
          </div>
        </div>
        <div className="space-y-2 ml-2 md:ml-8">
          {[
            "eight short legs",
            "either blind or sighted",
            "plant-eating or creature-eating",
            "sixteen different types of feet",
            "two stylets rather than teeth",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 2 */}
      <div className={cn("mb-8 mt-8 ", showResults && qaFormat(qa, "6B-2"))}>
        <div className="flex flex-wrap items-center mb-4">
          <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
          <span>
            For the <span className="font-bold">Secrets to Survival</span>{" "}
            slide, select two features of the tardigrade which best help it
            survive. (The order does not matter.)
          </span>
          {renderSelect("45", 5, answers, setAnswers)}
          <span className="-mx-2">・</span>
          {renderSelect("46", 5, answers, setAnswers)}
          <div className="flex flex-row gap-2">
            <Explain qa={qa} questionId="6B-2"  isShow={showResults} />
            {Kaisetsu(showResults, "23-6B-10")}
          </div>
        </div>
        <div className="space-y-2 ml-2 md:ml-8">
          {[
            "In dry conditions, their metabolism drops to less than one percent of normal.",
            "Tardigrades in a state of tun are able to survive in temperatures exceeding 151℃.",
            "The state of tun will cease when the water in a tardigrade's body is above 0.01%.",
            "Their shark-like mouths allow them to more easily eat other creatures.",
            "They have an ability to withstand extreme levels of radiation.",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span className="font-sans">{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 3 */}
      <div className={cn("mb-8 mt-8 ", showResults && qaFormat(qa, "6B-3"))}>
        <div className="flex flex-wrap items-center mb-4">
          <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
          <span>
            Complete the missing labels on the illustration of a tardigrade for
            the{' '}
          </span>
          <span>
            <span className="font-bold">Digestive Systems</span> slide.
          </span>
          <div className="flex flex-row gap-2">
            {renderSelect("47", 5, answers, setAnswers)}
            <Explain qa={qa} questionId="6B-3"  isShow={showResults} />
            {Kaisetsu(showResults, "23-6B-11")}
          </div>
        </div>
        <div className="space-y-2 ml-2 md:ml-8">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div key={num} className="flex  items-start">
              <div className="w-6 h-6 flex items-center justify-center mr-4">
                {"①②③④⑤"[index]}
              </div>
              <div className="flex flex-wrap items-start">
                {[
                  [
                    "Esophagus",
                    "Pharynx",
                    "Middle gut",
                    "Stylets",
                    "Salivary gland",
                  ],
                  [
                    "Pharynx",
                    "Stylets",
                    "Salivary gland",
                    "Esophagus",
                    "Middle gut",
                  ],
                  [
                    "Salivary gland",
                    "Esophagus",
                    "Middle gut",
                    "Stylets",
                    "Pharynx",
                  ],
                  [
                    "Salivary gland",
                    "Middle gut",
                    "Stylets",
                    "Esophagus",
                    "Pharynx",
                  ],
                  [
                    "Stylets",
                    "Salivary gland",
                    "Pharynx",
                    "Middle gut",
                    "Esophagus",
                  ],
                ][num - 1].map((text, index) => (
                  <div key={index} className="flex flex-wrap items-start">
                    <span className="mr-2">({"ABCDE"[index]})</span>
                    <span className="mr-2 w-[105px]">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Question 4 */}
      <div className={cn("mb-8 mt-8 ", showResults && qaFormat(qa, "6B-4"))}>
        <div className="flex flex-wrap items-center mb-4">
          <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
          <span>Which is the best statement for the final slide?</span>
          <div className="flex flex-row gap-2">
            {renderSelect("48", 5, answers, setAnswers)}
            <Explain qa={qa} questionId="6B-4"  isShow={showResults} />
            {Kaisetsu(showResults, "23-6B-12")}
          </div>
        </div>
        <div className="space-y-2 ml-2 md:ml-8">
          {[
            "For thousands of years, tardigrades have survived some of the harshest conditions on earth and in space. They will live longer than humankind.",
            "Tardigrades are from space and can live in temperatures exceeding the limits of the Arctic fox and Bactrian camel, so they are surely stronger than human beings.",
            "Tardigrades are, without a doubt, the toughest creatures on earth. They can survive on the top of mountains; at the bottom of the sea; in the waters of hot springs; and they can also thrive on the moon.",
            "Tardigrades have survived some of the harshest conditions on earth, and at least one trip into space. This remarkable creature might outlive the human species.",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 5 */}
      <div className={cn("mb-8 mt-8 ", showResults && qaFormat(qa, "6B-5"))}>
        <div className="flex flex-wrap items-center mb-4">
          <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
          <span>
            What can be inferred about sending tardigrades into space?
          </span>
          <div className="flex flex-row gap-2">
            {renderSelect("49", 4, answers, setAnswers)}
            <Explain qa={qa} questionId="6B-5"  isShow={showResults} />
            {Kaisetsu(showResults, "23-6B-13")}
          </div>
        </div>
        <div className="space-y-2 ml-2 md:ml-8">
          {[
            "Finding out whether the tardigrades can survive in space was never thought to be important.",
            "Tardigrades, along with other creatures that have been on earth for millions of years, can withstand X-rays and ultraviolet radiation.",
            "The Israeli researchers did not expect so many tardigrades to survive the harsh environment of space.",
            "The reason why no one has been to see if tardigrades can survive on the moon's surface attracted the author's attention.",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ex23_6B;
