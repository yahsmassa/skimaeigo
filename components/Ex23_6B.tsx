"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat, cn } from "@/lib/util";
import { Answers } from "@/lib/types";
import Image from "next/image";

const Ex23_6B = () => {
  const correctAnswerArray = [4, 1, 5, 3, 4, 4];
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
          <h1 className="text-lg font-bold">{"第６問 B"}</h1>
          <span className="text-gray-600">(配点 {12})</span>
        </div>
        <Saiten
          points={12}
          startQuestionNumber={44}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>{" "}
      <div className="space-y-6">
        {/* Question Header */}
        <div className="flex gap-4">
          <p className="text-justify">
            You are in a student group preparing for an international science
            presentation contest. You are using the following passage to create
            your part of the presentation on extraordinary creatures.
          </p>
        </div>

        {/* Main Text */}
        <div className="space-y-4">
          <p className="text-justify">
            Ask someone to name the world&apos;s toughest animal, and they might
            say the Bactrian camel as it can survive in temperatures as high as
            50°C, or the Arctic fox which can survive in temperatures lower than
            −58°C. However, both answers would be wrong as it is widely believed
            that the tardigrade is the toughest creature on earth.
          </p>

          <p className="text-justify">
            Tardigrades, also known as water bears, are microscopic creatures,
            which are between 0.1 mm to 1.5 mm in length. They live almost
            everywhere, from 6,000-meter-high mountains to 4,600 meters below
            the ocean&apos;s surface. They can even be found under thick ice and
            in hot springs. Most live in water, but some tardigrades can be
            found in some of the driest places on earth. One researcher reported
            finding tardigrades living under rocks in a desert without any
            recorded rainfall for 25 years.
          </p>

          <p className="text-justify">
            All they need are a few drops or a thin layer of water to live in.
            When the water dries up, so do they. They lose all but three percent
            of their body&apos;s water and their metabolism slows down to 0.01%
            of its normal speed. The dried-out tardigrade is now in a state
            called &quot;tun,&quot; a kind of deep sleep. It will continue in
            this state until it is once again soaked in water. Then, like a
            sponge, it absorbs the water and springs back to life again as if
            nothing had happened.
          </p>

          <p className="text-justify">
            Whether the tardigrade is in tun for 1 week or 10 years does not
            really matter. The moment it is surrounded by water, it comes alive
            again. When tardigrades are in a state of tun, they are so tough
            that they can survive in temperatures as low as −272°C and as high
            as 151°C. Exactly how they achieve this is still not fully
            understood.
          </p>

          <p className="text-justify">
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
            collect them — which is a pity.
          </p>

          <p className="text-justify">
            Tardigrades are shaped like a short cucumber. They have four short
            legs on each side of their bodies. Some species have sticky pads at
            the end of each leg, while others have claws. There are 16 known
            claw variations, which help identify those species with claws. All
            tardigrades have a place for eyes, but not all species have eyes.
            Their eyes are primitive, only having five cells in total — just one
            of which is light sensitive.
          </p>

          <p className="text-justify">
            Basically, tardigrades can be divided into those that eat plant
            matter, and those that eat other creatures. Those that eat
            vegetation have a ventral mouth — a mouth located in the lower part
            of the head, like a shark. The type that eats other creatures has a
            terminal mouth, which means the mouth is at the very front of the
            head, like a tuna. The mouths of tardigrades do not have teeth. They
            do, however, have two sharp needles, called stylets, that they use
            to pierce plant cells or the bodies of smaller creatures so the
            contents can be sucked out.
          </p>

          <p className="text-justify">
            Both types of tardigrade have rather simple digestive systems. The
            mouth leads to the pharynx (throat), where digestive juices and food
            are mixed. Located above the pharynx is a salivary gland. This
            produces the juices that flow into the mouth and help with
            digestion. After the pharynx, there is a tube which transports food
            toward the gut. This tube is called the esophagus. The middle gut, a
            simple stomach/intestine type of organ, digests the food and absorbs
            the nutrients. The leftovers then eventually move through to the
            anus.
          </p>
        </div>
      </div>
      <div className="space-y-6">
        {/* Title */}
        <h2 className="text-lg mb-4">Your presentation slides:</h2>

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
      <div className="mb-8 mt-7">
        <div className="flex flex-wrap items-center mb-4">
          <span className="whitespace-nowrap mr-2">問 1</span>
          <span>
            Which of the following should you{" "}
            <span className="underline">not</span> include for
          </span>
          {renderSelect("44", 5, 0)}.<span>?</span>
        </div>
        <div className="space-y-2 ml-8">
          {[
            "eight short legs",
            "either blind or sighted",
            "plant-eating or creature-eating",
            "sixteen different types of feet",
            "two stylets rather than teeth",
          ].map((text, idx) => (
            <div key={idx} className="flex items-start">
              <div className="border border-black rounded-full w-6 h-6 flex items-center justify-center mr-4">
                {idx + 1}
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 2 */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center mb-4">
          <span className="whitespace-nowrap mr-2">問 2</span>
          <span>
            For the <span className="font-bold">Secrets to Survival</span>{" "}
            slide, select two features of the tardigrade which best help it
            survive. (The order does not matter.)
          </span>
          {renderSelect("45", 5, 1)}
          <span>・</span>
          {renderSelect("46", 5, 2)}
        </div>
        <div className="space-y-2 ml-8">
          {[
            "In dry conditions, their metabolism drops to less than one percent of normal.",
            "Tardigrades in a state of tun are able to survive in temperatures exceeding 151℃.",
            "The state of tun will cease when the water in a tardigrade&apos;s body is above 0.01%.",
            "Their shark-like mouths allow them to more easily eat other creatures.",
            "They have an ability to withstand extreme levels of radiation.",
          ].map((text, idx) => (
            <div key={idx} className="flex items-start">
              <div className="border border-black rounded-full w-6 h-6 flex items-center justify-center mr-4">
                {idx + 1}
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 3 */}
      <div>
        <div className="flex flex-wrap items-center mb-4">
          <span className="whitespace-nowrap mr-2">問 3</span>
          <span>
            Complete the missing labels on the illustration of a tardigrade for
            the <span className="font-bold">Digestive Systems</span> slide.
          </span>
          {renderSelect("47", 5, 3)}
        </div>
        <div className="space-y-2 ml-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="flex items-start">
              <div className="border border-black rounded-full w-6 h-6 flex items-center justify-center mr-4">
                {num}
              </div>
              <div className="grid grid-cols-5 gap-8">
                <div>
                  (A){" "}
                  {
                    [
                      "Esophagus",
                      "Pharynx",
                      "Salivary gland",
                      "Salivary gland",
                      "Stylets",
                    ][num - 1]
                  }
                </div>
                <div>
                  (B){" "}
                  {
                    [
                      "Pharynx",
                      "Stylets",
                      "Esophagus",
                      "Middle gut",
                      "Salivary gland",
                    ][num - 1]
                  }
                </div>
                <div>
                  (C){" "}
                  {
                    [
                      "Middle gut",
                      "Salivary gland",
                      "Middle gut",
                      "Stylets",
                      "Pharynx",
                    ][num - 1]
                  }
                </div>
                <div>
                  (D){" "}
                  {
                    [
                      "Stylets",
                      "Esophagus",
                      "Stylets",
                      "Esophagus",
                      "Middle gut",
                    ][num - 1]
                  }
                </div>
                <div>
                  (E){" "}
                  {
                    [
                      "Salivary gland",
                      "Middle gut",
                      "Pharynx",
                      "Pharynx",
                      "Esophagus",
                    ][num - 1]
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Question 4 */}
      <div className="mb-8 mt-8">
        <div className="flex flex-wrap items-center mb-4">
          <span className="whitespace-nowrap mr-2">問 4</span>
          <span>Which is the best statement for the final slide?</span>
          {renderSelect("48", 5, 4)}
        </div>
        <div className="space-y-4 ml-8">
          {[
            "For thousands of years, tardigrades have survived some of the harshest conditions on earth and in space. They will live longer than humankind.",
            "Tardigrades are from space and can live in temperatures exceeding the limits of the Arctic fox and Bactrian camel, so they are surely stronger than human beings.",
            "Tardigrades are, without a doubt, the toughest creatures on earth. They can survive on the top of mountains; at the bottom of the sea; in the waters of hot springs; and they can also thrive on the moon.",
            "Tardigrades have survived some of the harshest conditions on earth, and at least one trip into space. This remarkable creature might outlive the human species.",
          ].map((text, idx) => (
            <div key={idx} className="flex items-start">
              <div className="border border-black rounded-full w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
                {idx + 1}
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Question 5 */}
      <div className="mt-8">
        <div className="flex flex-wrap items-center mb-4">
          <span className="whitespace-nowrap mr-2">問 5</span>
          <span>
            What can be inferred about sending tardigrades into space?
          </span>
          {renderSelect("49", 5, 5)}
        </div>
        <div className="space-y-4 ml-8">
          {[
            "Finding out whether the tardigrades can survive in space was never thought to be important.",
            "Tardigrades, along with other creatures that have been on earth for millions of years, can withstand X-rays and ultraviolet radiation.",
            "The Israeli researchers did not expect so many tardigrades to survive the harsh environment of space.",
            "The reason why no one has been to see if tardigrades can survive on the moon&apos;s surface attracted the author&apos;s attention.",
          ].map((text, idx) => (
            <div key={idx} className="flex items-start">
              <div className="border border-black rounded-full w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
                {idx + 1}
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ex23_6B;
