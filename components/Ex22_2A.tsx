"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat, cn } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex22_2A = () => {
  const correctAnswerArray = [5, 3, 1, 3, 1];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const handleChange = (questionNumber: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [`question${questionNumber}`]: value,
    }));
  };

  const isCorrect = (questionNumber: string, index: number) => {
    return answers[`question${questionNumber}`] === correctAnswerArray[index];
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
        onChange={(e) => handleChange(number, Number(e.target.value))}
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
          <h1 className="text-lg font-bold">{"第２問 A"}</h1>
          <span className="text-gray-600">(配点 {10})</span>
        </div>
        <Saiten
          points={10}
          startQuestionNumber={6}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      {/* Context Header */}
      <div className="mb-4">
        <p className="text-base">
          A You are on a <span className="italic">Future Leader</span> summer
          programme, which is taking place on a university campus in the UK. You
          are reading the information about the library so that you can do your
          coursework.
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
              </p>
            </div>

            {/* Library Orientations Section */}
            <div>
              <h2 className="text-lg font-bold mb-2">Library Orientations</h2>
              <p className="text-base">
                On Tuesdays at 10 am, 20-minute library orientations are held in
                the Reading Room on the third floor. Talk to the Information
                Desk staff for details.
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
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  The Study Area can get really crowded. Get there as early as
                  possible to get a seat!
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  The Wi-Fi inside the library is quite slow, but the one at the
                  coffee shop next door is good. By the way, you cannot bring
                  any drinks into the library.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  The staff at the Information Desk answered all my questions.
                  Go there if you need any help!
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  On the ground floor there are some TVs for watching the
                  library&apos;s videos. When watching videos, you need to use
                  your own earphones or headphones. Next to the TVs there are
                  photocopiers.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz Questions */}
      <div className="mt-8 space-y-8">
        {/* Question 1 */}
        <div>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2">問 1</span>
            {renderSelect("6", 5, 0)}
            <span>are two things you can do at the library.</span>
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
        <div>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>
              You are at the main entrance of the library and want to go to the
              orientation. You need to
            </span>
            {renderSelect("7", 4, 1)}.
          </div>

          <div className="ml-4 space-y-2">
            <p>① go down one floor</p>
            <p>② go up one floor</p>
            <p>③ go up two floors</p>
            <p>④ stay on the same floor</p>
          </div>
        </div>

        {/* Question 3 */}
        <div>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2">問 3</span>
            {renderSelect("8", 4, 2)}
            <span>near the main entrance to the library.</span>
          </div>

          <div className="ml-4 space-y-2">
            <p>① The Computer Workstations are</p>
            <p>② The Reading Room is</p>
            <p>③ The Study Area is</p>
            <p>④ The TVs are</p>
          </div>
        </div>
        {/* Question 4 */}
        <div>
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span>
              If you borrowed three books on 2 August and returned them on 10
              August, you could
            </span>
            {renderSelect("9", 4, 3)}.
          </div>

          <div className="ml-4 space-y-2">
            <p>① borrow eight more books on 10 August</p>
            <p>② borrow seven more books on 10 August</p>
            <p>③ not borrow any more books before 13 August</p>
            <p>④ not borrow any more books before 17 August</p>
          </div>
        </div>

        {/* Question 5 */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2">問 5</span>
            <span>
              One <span className="underline">fact</span> stated by a previous
              student is that
            </span>
            {renderSelect("10", 4, 4)}.
          </div>

          <div className="ml-4 space-y-2">
            <p>① headphones or earphones are necessary when watching videos</p>
            <p>② the library is open until 9 pm</p>
            <p>③ the library orientation handouts are wonderful</p>
            <p>④ the Study Area is often empty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_2A;
