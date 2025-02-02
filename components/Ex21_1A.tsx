import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex21_1A = () => {
  const correctAnswerArray = [4, 2, 4];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第１問 A"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
        </div>
        <Saiten
          points={6}
          startQuestionNumber={1}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      {/* Letter A and description */}
      <div className="mb-6">
        <p className="mb-4">
          <span className="font-bold">A</span> Your dormitory roommate Julie has
          sent a text message to your mobile phone with a request.
        </p>
      </div>

      {/* Phone container */}
      <div className=" rounded-3xl p-4 shadow-lg bg-gray-700">
        <div className="bg-white rounded-2xl p-4 space-y-4">
          {/* First message from Julie */}
          <div className="max-w-[90%]">
            <div className="bg-gray-100 rounded-2xl p-4">
              <p className="font-bold mb-2">Help!!!</p>
              <p className="mb-2">
                Last night I saved my history homework on a USB memory stick. I
                was going to print it in the university library this afternoon,
                but I forgot to bring the USB with me. I need to give a copy to
                my teacher by 4 p.m. today. Can you bring my USB to the library?
                I think it&apos;s on top of my history book on my desk. I
                don&apos;t need the book, just the USB.♡
              </p>
            </div>
          </div>

          {/* Response message */}
          <div className="max-w-[90%] ml-auto">
            <div className="bg-gray-100 rounded-2xl p-4">
              <p>
                Sorry Julie, I couldn&apos;t find it. The history book was
                there, but there was no USB memory stick. I looked for it
                everywhere, even under your desk. Are you sure you don&apos;t
                have it with you? I&apos;ll bring your laptop computer with me,
                just in case.
              </p>
            </div>
          </div>

          {/* Final message from Julie */}
          <div className="max-w-[90%]">
            <div className="bg-gray-100 rounded-2xl p-4">
              <p className="mb-2">
                You were right! I did have it. It was at the bottom of my bag.
                What a relief!
              </p>
              <p>Thanks anyway. ☺</p>
            </div>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="mt-8 space-y-8">
        {/* Question 1 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold">問 1</span>
            <span>What was Julie&apos;s request?</span>
            <div className="border border-black px-2">1</div>
          </div>
          <div className="space-y-2 pl-4">
            <p>① To bring her USB memory stick</p>
            <p>② To hand in her history homework</p>
            <p>③ To lend her a USB memory stick</p>
            <p>④ To print out her history homework</p>
          </div>
        </div>

        {/* Question 2 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold">問 2</span>
            <span>How will you reply to Julie&apos;s second text message?</span>
            <div className="border border-black px-2">2</div>
          </div>
          <div className="space-y-2 pl-4">
            <p>① Don&apos;t worry. You&apos;ll find it.</p>
            <p>② I&apos;m really glad to hear that.</p>
            <p>③ Look in your bag again.</p>
            <p>④ You must be disappointed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex21_1A;
