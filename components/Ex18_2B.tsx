import React from "react";

const JapaneseExam = () => {
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
          <div className="md:col-span-1">Student:</div>
          <div className="md:col-span-10 md:ml-2">
            What are we going to do with the Australian students after they
            arrive?
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Teacher:</div>
          <div className="md:col-span-10 md:ml-2">
            The first night, we'll have a barbecue by the river so that you all
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
            quickly.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["can", "each", "get", "know", "other", "to"].map((text, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 問題2 */}
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問２</span>
          </div>
          <div className="md:col-span-1">Bridget:</div>
          <div className="md:col-span-10 md:ml-2">
            How was your basketball season last year?
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Toshi:</div>
          <div className="md:col-span-10">
            I
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
            .
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["highest", "on", "scorer", "the second", "the team", "was"].map(
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
          <div className="md:col-span-1">Evan:</div>
          <div className="md:col-span-10">
            I want to buy my first computer, but I don't know which one I should
            get.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Sam:</div>
          <div className="md:col-span-10">
            Don't worry. Electronic stores always have experts available to give
            advice
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
            using computers.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["aren't", "familiar", "those", "to", "who", "with"].map(
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

export default JapaneseExam;
