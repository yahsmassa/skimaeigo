import React from "react";

const JapaneseExam3 = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 font-serif">
      {/* タイトル部分 */}
      <div className="mb-6 leading-8">
        <p className="text-base md:text-lg mb-4">
          B
          次の問い(問１～３)において、それぞれ下の①～⑥の語句を並べかえて空所を補い、最も適当な文を完成させよ。解答は
          <span className="inline-block border border-black px-2 text-sm md:text-base md:px-6 py-1 mx-2 font-bold font-sans">
            18
          </span>
          ～
          <span className="inline-block border border-black px-2 text-sm md:text-base md:px-6 py-1 mx-2 font-bold font-sans">
            23
          </span>
          に入れるものの番号のみを答えよ。
        </p>
      </div>

      {/* 問題1 */}
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問１</span>
          </div>
          <div className="md:col-span-2">Hotel clerk:</div>
          <div className="md:col-span-9">
            Good evening, Mr. and Mrs. Gomez. How can I help you?
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-2">Mrs. Gomez:</div>
          <div className="md:col-span-9">
            Well,
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border border-black px-4 py-1 mx-1 text-center font-sans">
              18
            </span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border border-black px-4 py-1 mx-1 text-center font-sans">
              19
            </span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            us how to get to the theater.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["could", "if", "tell", "we're", "wondering", "you"].map(
            (text, index) => (
              <div key={index} className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* 問題2 */}
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問２</span>
          </div>
          <div className="md:col-span-2">Student:</div>
          <div className="md:col-span-9">
            Excuse me. I'd like to know what we will be discussing in next
            week's seminar.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-2">Professor:</div>
          <div className="md:col-span-9">
            I haven't decided yet, so
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border border-black px-4 py-1 mx-1 text-center font-sans">
              20
            </span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border border-black px-4 py-1 mx-1 text-center font-sans">
              21
            </span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            email.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["by", "let", "me", "send", "the details", "you"].map(
            (text, index) => (
              <div key={index} className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* 問題3 */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問３</span>
          </div>
          <div className="md:col-span-2">Interviewer:</div>
          <div className="md:col-span-9">
            How did you change after becoming the head of such a large company?
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-2">President:</div>
          <div className="md:col-span-9">
            I
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border border-black px-4 py-1 mx-1 text-center font-sans">
              22
            </span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            <span className="inline-block border border-black px-4 py-1 mx-1 text-center font-sans">
              23
            </span>
            <span className="inline-block border-b-2 border-black w-16 mx-2"></span>
            my time more effectively.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["came to", "manage", "need", "realize", "the", "to"].map(
            (text, index) => (
              <div key={index} className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default JapaneseExam3;
