"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex20_4B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "20_4B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第４問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {20})</span>
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
      {/* Section B Header */}
      <div className="mb-6">
        <p className="leading-relaxed">
          <span className="font-bold mr-2">B</span>
          次のページにあるフリーマーケットの出店申請の説明を読み、次の問い(問
          1～4)の
          <span className="font-sans inline-block border border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">37</span>～
          <span className="font-sans inline-block border border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">40</span>
          に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
        </p>
      </div>

      {/* Question 1 */}
      <div className={cn("mb-8", showResults && qaFormat(qa, "4B-1"))}>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
          <span>
            Fran will sell her handmade jewelry on both days. She needs only a
            small space. How much will it cost?
          </span>
          {renderSelect("37", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="4B-1" />}
          {Kaisetsu(showResults, "20-4B-4")}
        </div>
        <div className="flex gap-8 ml-6">
          <p>① $14</p>
          <p>② $16</p>
          <p>③ $18</p>
          <p>④ $20</p>
        </div>
      </div>

      {/* Question 2 */}
      <div className={cn("mb-8", showResults && qaFormat(qa, "4B-2"))}>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
          <span>
            Pat wants to sell some big household items, including a
            refrigerator, so she needs an outdoor space. What offer can she take
            advantage of?
          </span>
          {renderSelect("38", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="4B-2" />}
          {Kaisetsu(showResults, "20-4B-5")}
        </div>
        <div className="flex flex-col gap-2 ml-6">
          <p>① Free assistance in setting up her tent</p>
          <p>② Full cash refund due to cancelation</p>
          <p>③ Selection of the location of her space</p>
          <p>④ Use of a large truck free of charge</p>
        </div>
      </div>

      {/* Question 3 */}
      <div className={cn("mb-8", showResults && qaFormat(qa, "4B-3"))}>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
          <span>
            Mark makes herbal soaps and candles. He has chosen an indoor space.
            Which of the following will he be allowed to do?
          </span>
          {renderSelect("39", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="4B-3" />}
          {Kaisetsu(showResults, "20-4B-6")}
        </div>
        <div className="flex flex-col gap-2 ml-6">
          <p>① Choose a space close to the sink to get water easily</p>
          <p>② Have a bowl of water for customers to try his soaps</p>
          <p>③ Keep his pet hamsters in a cage at his booth</p>
          <p>④ Let his customers light some sample candles</p>
        </div>
      </div>

      {/* Question 4 */}
      <div className={cn("mb-8", showResults && qaFormat(qa, "4B-4"))}>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
          <span>Which of the following is true about this flea market?</span>
          {renderSelect("40", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="4B-4" />}
          {Kaisetsu(showResults, "20-4B-7")}
        </div>
        <div className="flex flex-col gap-2 ml-6">
          <p>① People are discouraged from selling items they created.</p>
          <p>② People can throw away anything in the same trash can.</p>
          <p>③ The organizers choose applicants who apply for both days.</p>
          <p>④ The organizers provide information about schedule updates.</p>
        </div>
      </div>

      {/* Flea Market Information Section */}
      <div className="mt-8">
        <h1 className="text-xl font-bold text-center mb-6 underline">
          Greenly Fall Flea Market
        </h1>

        <div className="mb-6">
          <p className="mb-4">
            We are now accepting applications for the Fall Flea Market at
            Greenly Sports Center! Please bring your used and/or handmade goods.
            We have only a limited number of spaces and accept applications in
            order of arrival, so email your application soon. We are a
            pet-friendly market, but if you are planning to bring your pet, you
            must apply for an outdoor space. For outdoor spaces, the organizers
            will help set up tents for no extra charge. Trucks are available for
            additional fees if you need to transport your goods.
            {Kaisetsu(showResults, "20-4B-1")}
          </p>
        </div>

        {/* Schedule and Pricing Table */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-black">
            <thead>
              <tr>
                <th className="border border-black p-2"></th>
                <th className="border border-black p-2">
                  Saturday, October 3rd
                  <br />
                  (13:00 – 17:00)
                </th>
                <th className="border border-black p-2">
                  Sunday, October 4th
                  <br />
                  (10:00 – 15:00)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-2">
                  Indoor space
                  <br />
                  (2 × 2 meters)
                </td>
                <td className="border border-black p-2 text-center">$8</td>
                <td className="border border-black p-2 text-center">$10</td>
              </tr>
              <tr>
                <td className="border border-black p-2">
                  Outdoor space
                  <br />
                  (4 × 4 meters)
                </td>
                <td className="border border-black p-2 text-center">$9</td>
                <td className="border border-black p-2 text-center">$11</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional Information */}
        <div className="mb-6">
          <p className="mb-2">➢ Water is available for indoor spaces.</p>
          <p className="mb-4">
            ➢ If you apply for both Saturday and Sunday, you&apos;ll get a $2
            discount each day.
          </p>
          {Kaisetsu(showResults, "20-4B-2")}
        </div>

        {/* Keep in Mind Section */}
        <div>
          <h2 className="font-bold mb-4">Keep in Mind</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-2">
            <li>
              Location of the spaces is decided by the organizers. No requests
              or changes are possible.
            </li>
            <li>
              Any changes in opening and closing times are announced two days in
              advance.
            </li>
            <li>
              If you cancel your application, 80% of all fees will be refunded.
            </li>
            <li>
              Garbage must be separated and put into the appropriate garbage
              cans at the end of each day.
            </li>
            <li>Fires and open flames are prohibited.</li>
          </ol>
          {Kaisetsu(showResults, "20-4B-3")}
        </div>
      </div>
    </div>
  );
};

export default Ex20_4B;
