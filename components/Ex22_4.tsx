"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";
const Ex22_4 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "22_4")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第４問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {16})</span>
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
      {/* Context text */}
      <p className="text-base mb-2 md:text-xl">
        You are a new student at Robinson University in the US. You are reading
        the blogs of two students, Len and Cindy, to find out where you can buy
        things for your apartment.
        {Kaisetsu(showResults, "22-4-0")}
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
        <div className="space-y-1">
          <p className="text-base indent-7">
            Getting ready for college? Do you need some home appliances or
            electronics, but don&apos;t want to spend too much money?
            There&apos;s a great store close to the university called Second
            Hand. It sells used goods such as televisions, vacuum cleaners, and
            microwaves. A lot of students like to buy and sell their things at
            the store. Here are some items that are on sale now. Most of them
            are priced very reasonably, but stock is limited, so hurry!
            {Kaisetsu(showResults, "22-4-1")}
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

          <p className="text-base indent-7">
            Purchasing used goods is eco-friendly. Plus, by buying from Second
            Hand you&apos;ll be supporting a local business. The owner is
            actually a graduate of Robinson University!
            {Kaisetsu(showResults, "22-4-2")}
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
        <div className="space-y-1">
          <p className="text-base indent-7">
            Are you starting at Robinson University soon? You may be preparing
            to buy some household appliances or electronics for your new life.
            {Kaisetsu(showResults, "22-4-3")}
          </p>

          <p className="text-base indent-7">
            You&apos;re going to be here for four years, so buy your goods new!
            In my first year, I bought all of my appliances at a shop selling
            used goods near the university because they were cheaper than
            brand-new ones. However, some of them stopped working after just one
            month, and they did not have warranties. I had to replace them
            quickly and could not shop around, so I just bought everything from
            one big chain store. I wish I had been able to compare the prices at
            two or more shops beforehand.
            {Kaisetsu(showResults, "22-4-4")}
          </p>

          <p className="text-base indent-7">
            The website called save4unistu.com is very useful for comparing the
            prices of items from different stores before you go shopping. The
            following table compares current prices for the most popular new
            items from three big stores.
            {Kaisetsu(showResults, "22-4-5")}
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

          <p className="text-base indent-7">
            Note that warranties are available for all items. So, if anything
            stops working, replacing it will be straightforward. Value Saver
            provides one-year warranties on all household goods for free. If the
            item is over $300, the warranty is extended by four years. Great Buy
            provides one-year warranties on all household goods, and students
            with proof of enrollment at a school get 10% off the prices listed
            on the table above. Warranties at Cut Price are not provided for
            free. You have to pay $10 per item for a five-year warranty.
            {Kaisetsu(showResults, "22-4-6")}
          </p>

          <p className="text-base">
            Things go fast! Don&apos;t wait or you&apos;ll miss out!
            {Kaisetsu(showResults, "22-4-7")}
          </p>
        </div>
      </div>

      {/* Questions section */}
      <div className="space-y-8 mt-8">
        {/* Question 1 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "4-1"))}>
          <div className="flex items-center flex-wrap space-x-2">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>Len recommends buying used goods because</span>
            <div className="flex flex-row gap-2">
              {renderSelect("24", 4, answers, setAnswers)}
              <span className="-ml-3 mt-1 mr-1">.</span>
              <Explain qa={qa} questionId="4-1"  isShow={showResults} />
              {Kaisetsu(showResults, "22-4-8")}
            </div>
          </div>
          {[
            "it will help the university",
            "most of the items are good for the environment",
            "they are affordable for students",
            "you can find what you need in a hurry",
          ].map((text, index) => (
            <div key={index} className="flex items-start ml-2 md:ml-8">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "4-2"))}>
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span className="text-base">Cindy suggests buying</span>
            <div className="flex flex-row gap-2">
              {renderSelect("25", 4, answers, setAnswers)}
              <span className="-ml-3 mt-1 mr-1">.</span>
              <Explain qa={qa} questionId="4-2"  isShow={showResults} />
              {Kaisetsu(showResults, "22-4-9")}
            </div>
          </div>
          {[
            "from a single big chain store because it saves time",
            "from the website because it offers the best prices",
            "new items that have warranties for replacement",
            "used items because they are much cheaper than new items",
          ].map((text, index) => (
            <div key={index} className="flex items-start ml-2 md:ml-8">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "4-3"))}>
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span className="text-base">
              Both Len and Cindy recommend that you
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("26", 4, answers, setAnswers)}
              <span className="-ml-3 mt-1 mr-1">.</span>
              <Explain qa={qa} questionId="4-3"  isShow={showResults} />
              {Kaisetsu(showResults, "22-4-10")}
            </div>
          </div>
          {[
            "buy from the store near your university",
            "buy your appliances as soon as you can",
            "choose a shop offering a student discount",
            "choose the items with warranties",
          ].map((text, index) => (
            <div key={index} className="flex items-start ml-2 md:ml-8">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "4-4"))}>
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span className="text-base">
              If you want to buy new appliances at the best possible prices, you
              should
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("27", 4, answers, setAnswers)}
              <span className="-ml-3 mt-1 mr-1">.</span>
              <Explain qa={qa} questionId="4-4"  isShow={showResults} />
              {Kaisetsu(showResults, "22-4-11")}
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {[
              "access the URL in Cindy's post",
              "access the URL in Len's post",
              "contact one big chain store",
              "contact shops close to the campus",
            ].map((text, index) => (
              <div key={index} className="flex items-start ml-2 md:ml-8">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-2", showResults && qaFormat(qa, "4-5"))}>
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
            <span>You have decided to buy a microwave from</span>
            {renderSelect("28", 4, answers, setAnswers)}.
            <span>
              because it is the cheapest. You have also decided to buy a
              television from
            </span>
            {renderSelect("29", 4, answers, setAnswers)}.
            <span>because it is the cheapest with a five-year warranty.</span>
            <div className="text-base">
              (Choose one for each box from options 1~4.)
            </div>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="4-5"  isShow={showResults} />
              {Kaisetsu(showResults, "22-4-12")}
            </div>
          </div>
          {["Cut Price", "Great Buy", "Second Hand", "Value Saver"].map(
            (text, index) => (
              <div key={index} className="flex items-start ml-2 md:ml-8">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Ex22_4;
