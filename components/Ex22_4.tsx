"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat, cn } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex22_4 = () => {
  const correctAnswerArray = [3, 3, 2, 1, 2, 4];
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
          <h1 className="text-lg font-bold">{"第４問"}</h1>
          <span className="text-gray-600">(配点 {16})</span>
        </div>
        <Saiten
          points={16}
          startQuestionNumber={24}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      {/* Context text */}
      <p className="text-base mb-8">
        You are a new student at Robinson University in the US. You are reading
        the blogs of two students, Len and Cindy, to find out where you can buy
        things for your apartment.
      </p>

      {/* First blog post container */}
      <div className="border border-gray-300 p-4 space-y-4">
        {/* Blog header */}
        <div className="border-b border-gray-300 pb-2">
          <h2 className="text-lg font-semibold">New to Robinson University?</h2>
          <p className="text-sm text-gray-600">
            Posted by Len at 4:51 p.m. on August 4, 2021
          </p>
        </div>

        {/* Blog content */}
        <div className="space-y-4">
          <p className="text-base">
            Getting ready for college? Do you need some home appliances or
            electronics, but don&apos;t want to spend too much money?
            There&apos;s a great store close to the university called Second
            Hand. It sells used goods such as televisions, vacuum cleaners, and
            microwaves. A lot of students like to buy and sell their things at
            the store. Here are some items that are on sale now. Most of them
            are priced very reasonably, but stock is limited, so hurry!
          </p>

          {/* Sale advertisement as a single image */}
          <div className="border border-gray-300 p-4">
            <Image
              src="/images/Ex22-4-1.webp"
              alt="Second Hand Sale advertisement showing various appliances including a TV ($250), microwave ($85), vacuum cleaner ($30), rice cooker ($40), and kettle ($5)"
              className="w-full"
              width={800}
              height={400}
            />
          </div>

          <p className="text-sm">https://secondhand.web</p>

          <p className="text-base">
            Purchasing used goods is eco-friendly. Plus, by buying from Second
            Hand you&apos;ll be supporting a local business. The owner is
            actually a graduate of Robinson University!
          </p>
        </div>
      </div>

      {/* Second blog post container */}
      <div className="border border-gray-300 p-4 space-y-4">
        {/* Blog header */}
        <div className="border-b border-gray-300 pb-2">
          <h2 className="text-lg font-semibold">
            Welcome to Robinson University!
          </h2>
          <p className="text-sm text-gray-600">
            Posted by Cindy at 11:21 a.m. on August 5, 2021
          </p>
        </div>

        {/* Blog content */}
        <div className="space-y-4">
          <p className="text-base">
            Are you starting at Robinson University soon? You may be preparing
            to buy some household appliances or electronics for your new life.
          </p>

          <p className="text-base">
            You&apos;re going to be here for four years, so buy your goods new!
            In my first year, I bought all of my appliances at a shop selling
            used goods near the university because they were cheaper than
            brand-new ones. However, some of them stopped working after just one
            month, and they did not have warranties. I had to replace them
            quickly and could not shop around, so I just bought everything from
            one big chain store. I wish I had been able to compare the prices at
            two or more shops beforehand.
          </p>

          <p className="text-base">
            The website called save4unistu.com is very useful for comparing the
            prices of items from different stores before you go shopping. The
            following table compares current prices for the most popular new
            items from three big stores.
          </p>

          {/* Price comparison table as an image */}
          <div>
            <Image
              src="/images/Ex22-4-2.webp"
              alt="Price comparison table showing prices for appliances at Cut Price, Great Buy, and Value Saver stores"
              className="w-[80%] mx-auto"
              width={800}
              height={300}
            />
          </div>

          <p className="text-sm">https://save4unistu.com</p>

          <p className="text-base">
            Note that warranties are available for all items. So, if anything
            stops working, replacing it will be straightforward. Value Saver
            provides one-year warranties on all household goods for free. If the
            item is over $300, the warranty is extended by four years. Great Buy
            provides one-year warranties on all household goods, and students
            with proof of enrollment at a school get 10% off the prices listed
            on the table above. Warranties at Cut Price are not provided for
            free. You have to pay $10 per item for a five-year warranty.
          </p>

          <p className="text-base">
            Things go fast! Don&apos;t wait or you&apos;ll miss out!
          </p>
        </div>
      </div>

      {/* Questions section */}
      <div className="space-y-8 mt-8">
        {/* Question 1 */}
        <div className="flex items-start space-x-2 mb-4 flex-wrap gap-2">
          <div className="flex items-center flex-wrap space-x-2">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>Len recommends buying used goods because</span>
            {renderSelect("24", 4, 0)}.
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>it will help the university</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>most of the items are good for the environment</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                3
              </span>
              <span>they are affordable for students</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                4
              </span>
              <span>you can find what you need in a hurry</span>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="flex items-start space-x-2 mb-4 flex-wrap gap-2">
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span className="text-base">Cindy suggests buying</span>
            {renderSelect("25", 4, 1)}.
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>from a single big chain store because it saves time</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>from the website because it offers the best prices</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                3
              </span>
              <span>new items that have warranties for replacement</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                4
              </span>
              <span>
                used items because they are much cheaper than new items
              </span>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="flex items-start space-x-2 mb-4 flex-wrap gap-2">
          <span className="whitespace-nowrap mr-2">問 3</span>
          <div className="flex items-center flex-wrap space-x-2">
            <span className="text-base">
              Both Len and Cindy recommend that you
            </span>
            {renderSelect("26", 4, 2)}.
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>buy from the store near your university</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>buy your appliances as soon as you can</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                3
              </span>
              <span>choose a shop offering a student discount</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                4
              </span>
              <span>choose the items with warranties</span>
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="flex items-start space-x-2 mb-4 flex-wrap gap-2">
          <div className="flex items-center flex-wrap space-x-2">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span className="text-base">
              If you want to buy new appliances at the best possible prices, you
              should
            </span>
            {renderSelect("27", 4, 3)}.
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>access the URL in Cindy&apos;s post</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>access the URL in Len&apos;s post</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                3
              </span>
              <span>contact one big chain store</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                4
              </span>
              <span>contact shops close to the campus</span>
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className="flex items-start space-x-2 mb-4 flex-wrap gap-2">
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2">問 5</span>
            <span>You have decided to buy a microwave from</span>
            {renderSelect("28", 4, 4)}.
            <span>
              because it is the cheapest. You have also decided to buy a
              television from
            </span>
            {renderSelect("29", 4, 5)}.
            <span>because it is the cheapest with a five-year warranty.</span>
            <div className="text-base">
              (Choose one for each box from options 1~4.)
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-start space-x-4">
                <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <span>Cut Price</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <span>Great Buy</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <span>Second Hand</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  4
                </span>
                <span>Value Saver</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_4;
