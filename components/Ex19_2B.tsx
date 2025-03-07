import React from "react";

const EnglishTestQuestions = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 font-serif">
      <div className="mb-6 leading-8">
        <p className="text-base md:text-lg mb-4">
          B
          次の問い（問１～３）において、それぞれ下の①～⑥の語句を並べかえて空所を補い、最も適当な文を完成させよ。解答は
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

      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問１</span>
          </div>
          <div className="md:col-span-1">Yukio:</div>
          <div className="md:col-span-10">
            Did you hear that a new entrance ID system will be introduced next
            month?
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Lucas:</div>
          <div className="md:col-span-10">
            Really? Do we need it? I
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
            to replace the current system.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["cost", "how", "it", "much", "will", "wonder"].map(
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

      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問２</span>
          </div>
          <div className="md:col-span-1">David:</div>
          <div className="md:col-span-10">
            What's the plan for your trip to England?
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Saki:</div>
          <div className="md:col-span-10">
            I'll spend the first few days in London and then be in Cambridge
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
          {["for", "my", "of", "rest", "stay", "the"].map((text, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xl mr-3">
                {"①②③④⑤⑥"[index]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問３</span>
          </div>
          <div className="md:col-span-1">Junko:</div>
          <div className="md:col-span-10">
            The party we went to last night was very noisy. My throat is still
            sore from speaking loudly the whole time.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">Ronald:</div>
          <div className="md:col-span-10">
            Yeah. It can sometimes
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
            in such a crowded place.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 ml-2 md:ml-8 mt-6">
          {["be", "difficult", "heard", "make", "to", "yourself"].map(
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

export default EnglishTestQuestions;
