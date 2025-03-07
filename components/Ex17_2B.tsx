import React from "react";

const JapaneseExam2 = () => {
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
          <div className="md:col-span-1">Keita:</div>
          <div className="md:col-span-10">
            You have so many things in your room.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Cindy:</div>
          <div className="md:col-span-10">
            I know. Actually,
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
            it neat and clean.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["difficult", "find", "I", "it", "keep", "to"].map((text, index) => (
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
          <div className="md:col-span-1">Ted:</div>
          <div className="md:col-span-10">
            Professor Jones suggested that I rewrite this essay.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Jack:</div>
          <div className="md:col-span-10">
            Oh, well,
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
            , but I'm sure you'll get a higher grade on it.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["a few", "cost", "hours", "it", "may", "you"].map((text, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 問題3 */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問３</span>
          </div>
          <div className="md:col-span-1">Rita:</div>
          <div className="md:col-span-10">
            Daniel and I have to go home now.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Father:</div>
          <div className="md:col-span-10">
            Oh,
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
            usual? I thought you were going to stay for dinner.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["are", "earlier", "how come", "leaving", "than", "you"].map(
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

export default JapaneseExam2;
