"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";
const Ex22_2A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "22_2A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {10})</span>
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
      {/* Context Header */}
      <div className="mb-4">
        <p className="text-base">
          A You are on a <span className="italic">Future Leader</span> summer
          programme, which is taking place on a university campus in the UK. You
          are reading the information about the library so that you can do your
          coursework.
          {Kaisetsu(showResults, "22-2A-0")}
        </p>
      </div>

      {/* Main Content Box */}
      <div className="border-2 border-black p-6">
        {/* Library Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">
            Abermouth University Library
          </h1>
          <p className="text-lg mb-1">Open from 8 am to 9 pm</p>
          <p className="text-lg">2022 Handout</p>
        </div>

        {/* Library Card Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Library Card:</h2>
          <p className="mb-4">
            Your student ID card is also your library card and photocopy card.
            It is in your welcome pack.
          </p>
          <div className="border-b-2 border-gray-300 w-full mb-4"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Borrowing Books Section */}
            <div>
              <h2 className="text-lg font-bold mb-2">Borrowing Books</h2>
              <p className="text-base">
                You can borrow a maximum of eight books at one time for seven
                days. To check books out, go to the Information Desk, which is
                on the first floor. If books are not returned by the due date,
                you will not be allowed to borrow library books again for three
                days from the day the books are returned.
                {Kaisetsu(showResults, "22-2A-1")}
              </p>
            </div>

            {/* Using Computers Section */}
            <div>
              <h2 className="text-lg font-bold mb-2">Using Computers</h2>
              <p className="text-base">
                Computers with Internet connections are in the Computer
                Workstations by the main entrance on the first floor. Students
                may bring their own laptop computers and tablets into the
                library, but may use them only in the Study Area on the second
                floor. Students are asked to work quietly, and also not to
                reserve seats for friends.
                {Kaisetsu(showResults, "22-2A-2")}
              </p>
            </div>

            {/* Library Orientations Section */}
            <div>
              <h2 className="text-lg font-bold mb-2">Library Orientations</h2>
              <p className="text-base">
                On Tuesdays at 10 am, 20-minute library orientations are held in
                the Reading Room on the third floor. Talk to the Information
                Desk staff for details.
                {Kaisetsu(showResults, "22-2A-3")}
              </p>
            </div>
          </div>

          {/* Right Column - Comments */}
          <div>
            <h2 className="text-lg font-bold mb-2">
              Comments from Past Students
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  The library orientation was really good. The materials were
                  great, too!
                  {Kaisetsu(showResults, "22-2A-4")}
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  The Study Area can get really crowded. Get there as early as
                  possible to get a seat!
                  {Kaisetsu(showResults, "22-2A-5")}
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  The Wi-Fi inside the library is quite slow, but the one at the
                  coffee shop next door is good. By the way, you cannot bring
                  any drinks into the library.
                  {Kaisetsu(showResults, "22-2A-6")}
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  The staff at the Information Desk answered all my questions.
                  Go there if you need any help!
                  {Kaisetsu(showResults, "22-2A-7")}
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  On the ground floor there are some TVs for watching the
                  library&apos;s videos. When watching videos, you need to use
                  your own earphones or headphones. Next to the TVs there are
                  photocopiers.
                  {Kaisetsu(showResults, "22-2A-8")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz Questions */}
      <div
        className={cn("mt-8 space-y-8", showResults && qaFormat(qa, "2A-1"))}
      >
        {/* Question 1 */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            {renderSelect("6", 5, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="2A-1" />}
            <span className="mr-2"></span>
            {Kaisetsu(showResults, "22-2A-9")}
          </div>
        </div>

        <div className="space-y-2 mb-4 ml-4">
          <p>A : bring in coffee from the coffee shop</p>
          <p>B : save seats for others in the Study Area</p>
          <p>C : use the photocopiers on the second floor</p>
          <p>D : use your ID to make photocopies</p>
          <p>E : use your laptop in the Study Area</p>
        </div>

        <div className="ml-4 space-y-2">
          <p>① A and B</p>
          <p>② A and C</p>
          <p>③ B and E</p>
          <p>④ C and D</p>
          <p>⑤ D and E</p>
        </div>
      </div>

      {/* Question 2 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-2"))}
      >
        <div className="flex flex-wrap items-center">
          <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
          <span>
            You are at the main entrance of the library and want to go to the
            orientation. You need to
          </span>
          {renderSelect("7", 4, answers, setAnswers)}.
          {showResults && <Explain qa={qa} questionId="2A-2" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "22-2A-10")}
        </div>

        <div className="ml-4 space-y-2">
          <p>① go down one floor</p>
          <p>② go up one floor</p>
          <p>③ go up two floors</p>
          <p>④ stay on the same floor</p>
        </div>
      </div>

      {/* Question 3 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-3"))}
      >
        <div className="flex flex-wrap items-center">
          <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
          {renderSelect("8", 4, answers, setAnswers)}
          <span>near the main entrance to the library.</span>
          {showResults && <Explain qa={qa} questionId="2A-3" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "22-2A-11")}
        </div>

        <div className="ml-4 space-y-2">
          <p>① The Computer Workstations are</p>
          <p>② The Reading Room is</p>
          <p>③ The Study Area is</p>
          <p>④ The TVs are</p>
        </div>
      </div>
      {/* Question 4 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-4"))}
      >
        <div className="flex flex-wrap items-center">
          <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
          <span>
            If you borrowed three books on 2 August and returned them on 10
            August, you could
          </span>
          {renderSelect("9", 4, answers, setAnswers)}.
          {showResults && <Explain qa={qa} questionId="2A-4" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "22-2A-12")}
        </div>

        <div className="ml-4 space-y-2">
          {[
            "borrow eight more books on 10 August",
            "borrow seven more books on 10 August",
            "not borrow any more books before 13 August",
            "not borrow any more books before 17 August"
          ].map((text, idx) => (
            <div key={idx} className="flex">
              <span className="w-6 h-6 flex items-center mr-1">
                {"①②③④"[idx]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Question 5 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-5"))}
      >
        <div className="flex flex-wrap items-center">
          <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
          <span>
            One <span className="underline">fact</span> stated by a previous
            student is that
          </span>
          {renderSelect("10", 4, answers, setAnswers)}.
          {showResults && <Explain qa={qa} questionId="2A-5" />}
          <span className="mr-2"></span>
          {Kaisetsu(showResults, "22-2A-13")}
        </div>

        <div className="ml-4 space-y-2">
          {["headphones or earphones are necessary when watching videos",
          "the library is open until 9 pm",
          "the library orientation handouts are wonderful",
          "the Study Area is often empty"
          ].map((text, idx) => (
            <div key={idx} className="flex ">
              <span className="w-6 h-6  mr-1">
                {"①②③④"[idx]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Ex22_2A;
