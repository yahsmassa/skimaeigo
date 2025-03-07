import React from "react";

const EnglishTest = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 font-serif">
      {/* タイトル部分 */}
      <div className="mb-6 leading-8">
        <p className=" text-base md:text-lg mb-4">
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
          <div className="md:col-span-1">Tony:</div>
          <div className="md:col-span-10">
            Those decorations in the hall look great, don't they? I'm glad we
            finished on time.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Mei:</div>
          <div className="md:col-span-10">
            Yes, thank you so much. Without your help, the preparations
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
            all the guests arrive this afternoon.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["been", "by", "completed", "have", "the time", "would not"].map(
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
          <div className="md:col-span-1">Ichiro:</div>
          <div className="md:col-span-10">
            Mr. Smith has two daughters in school now, right?
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1 -ml-3">Natasha:</div>
          <div className="md:col-span-9">
            Actually, he has three, the
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
            London. I don't think you've met her yet.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["in", "is studying", "music", "of", "whom", "youngest"].map(
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
          <div className="md:col-span-1">Peter:</div>
          <div className="md:col-span-10">
            It might rain this weekend, so I wonder if we should still have the
            class barbecue in the park.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Hikaru:</div>
          <div className="md:col-span-10">
            Yeah, we have to decide now whether to hold it
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
            until some day next week. We should have thought about the chance of
            rain.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["as", "it", "off", "or", "planned", "put"].map((text, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnglishTest;
