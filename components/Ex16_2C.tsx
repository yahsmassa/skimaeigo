import React from "react";
import cn from "clsx";

const JapaneseTestThirdVersion = () => {
  return (
    <div className="font-sans p-6 max-w-3xl mx-auto">
      {/* Section C instruction */}
      <div className="mb-6 leading-8">
        <p className="mb-4">
          <span className="font-bold">C</span> 次の問い（問1～3）の会話の
          <span className="inline-block border-2 border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">
            24
          </span>{" "}
          ～
          <span className="inline-block border-2 border-black px-2 text-sm md:text-base md:px-3 py-1 mx-1">
            26
          </span>
          において，二人目の発言が最も適当な応答となるように文を作るには，それぞれ(A)と(B)をどのように選んで組み合わせればよいか，下の①～⑧のうちから一つずつ選べ。
        </p>
      </div>

      {/* Question 1 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問 1</span>
          </div>
          {[
            {
              speaker: "Maika",
              text: "How about having a campfire on the last night of summer camp?",
            },
            {
              speaker: "Naomi",
              text: (
                <>
                  It's been very dry recently, so
                  <span className="inline-block border-2 border-black px-3 py-1 mx-1">
                    24
                  </span>
                </>
              ),
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:col-span-2">{item.speaker}:</div>
              <div className="md:col-span-9">{item.text}</div>
              <div className="md:col-span-1"></div>
            </React.Fragment>
          ))}
        </div>

        {/* Options */}
        <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
          {[
            {
              options: [
                { label: "(A)", text: "I don't think" },
                { label: "(B)", text: "I suppose" },
              ],
              width: "w-[150px] md:w-40",
            },
            {
              options: [
                { label: "(A)", text: "our teachers will allow" },
                { label: "(B)", text: "our teachers won't agree" },
              ],
              width: "w-[150px] md:w-48",
            },
            {
              options: [
                { label: "(A)", text: "us lighting a fire." },
                { label: "(B)", text: "us to light a fire." },
              ],
              width: "w-[150px] md:w-48",
            },
          ].map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-row flex-wrap items-center space-y-0"
            >
              <div className="flex flex-row items-center mb-4">
                <div className={cn("border border-gray-800", section.width)}>
                  <div className={cn("flex flex-col space-y-4 pt-4")}>
                    {section.options.map((option, index) => (
                      <div
                        key={index}
                        className={`pb-4 ${
                          index === 0 ? "border-b border-gray-800" : ""
                        } px-2 h-16 md:h-12`}
                      >
                        <div className="grid grid-cols-12">
                          <span className="mr-2 col-span-3">
                            {option.label}
                          </span>
                          <span className="col-span-9">{option.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {sectionIndex < 2 && <div className="mx-3">→</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Answer choices */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {[
            "(A) → (A) → (A)",
            "(A) → (A) → (B)",
            "(A) → (B) → (A)",
            "(A) → (B) → (B)",
            "(B) → (A) → (A)",
            "(B) → (A) → (B)",
            "(B) → (B) → (A)",
            "(B) → (B) → (B)",
          ].map((choice, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-block w-6 h-6 text-center leading-6 mr-2">
                {"①②③④⑤⑥⑦⑧"[index]}
              </span>
              <span>{choice}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Question 2 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問 2</span>
          </div>
          {[
            {
              speaker: "George",
              text: "Sometimes I feel that I am not a very good musician.",
            },
            {
              speaker: "Robin",
              text: (
                <>
                  Come on!
                  <span className="inline-block border-2 border-black px-3 py-1 mx-1">
                    25
                  </span>
                </>
              ),
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:col-span-2">{item.speaker}:</div>
              <div className="md:col-span-9">{item.text}</div>
              <div className="md:col-span-1"></div>
            </React.Fragment>
          ))}
        </div>

        {/* Options */}
        <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
          {[
            {
              options: [
                { label: "(A)", text: "No one is" },
                { label: "(B)", text: "You are" },
              ],
              width: "w-[150px] md:w-48",
            },
            {
              options: [
                { label: "(A)", text: "more talented" },
                { label: "(B)", text: "the most talented" },
              ],
              width: "w-[150px] md:w-48",
            },
            {
              options: [
                { label: "(A)", text: "in all the other people." },
                { label: "(B)", text: "than you." },
              ],
              width: "w-[150px] md:w-48",
            },
          ].map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-row flex-wrap items-center space-y-0"
            >
              <div className="flex flex-row items-center mb-4">
                <div className={cn("border border-gray-800", section.width)}>
                  <div className={cn("flex flex-col space-y-4 pt-4")}>
                    {section.options.map((option, index) => (
                      <div
                        key={index}
                        className={`pb-4 ${
                          index === 0 ? "border-b border-gray-800" : ""
                        } px-2 h-16 md:h-12`}
                      >
                        <div className="grid grid-cols-12">
                          <span className="mr-2 col-span-3">
                            {option.label}
                          </span>
                          <span className="col-span-9">{option.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {sectionIndex < 2 && <div className="mx-3">→</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Answer choices */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {[
            "(A) → (A) → (A)",
            "(A) → (A) → (B)",
            "(A) → (B) → (A)",
            "(A) → (B) → (B)",
            "(B) → (A) → (A)",
            "(B) → (A) → (B)",
            "(B) → (B) → (A)",
            "(B) → (B) → (B)",
          ].map((choice, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-block w-6 h-6 text-center leading-6 mr-2">
                {"①②③④⑤⑥⑦⑧"[index]}
              </span>
              <span>{choice}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Question 3 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
          <div className="md:col-span-1">
            <span className="font-bold">問 3</span>
          </div>
          {[
            {
              speaker: "Paul",
              text: "You know, Yoko, there's really nothing more I can teach our son on the piano. He plays better than I do now.",
            },
            {
              speaker: "Yoko",
              text: (
                <>
                  Well, maybe we
                  <span className="inline-block border-2 border-black px-3 py-1 mx-1">
                    26
                  </span>
                </>
              ),
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:col-span-2">{item.speaker}:</div>
              <div className="md:col-span-9">{item.text}</div>
              <div className="md:col-span-1"></div>
            </React.Fragment>
          ))}
        </div>

        {/* Options */}
        <div className="flex flex-row flex-wrap items-center mb-6 space-y-0">
          {[
            {
              options: [
                { label: "(A)", text: "should get" },
                { label: "(B)", text: "should take" },
              ],
              width: "w-[150px] md:w-48",
            },
            {
              options: [
                { label: "(A)", text: "anyone else" },
                { label: "(B)", text: "someone else" },
              ],
              width: "w-[150px] md:w-48",
            },
            {
              options: [
                { label: "(A)", text: "teach him." },
                { label: "(B)", text: "to teach him." },
              ],
              width: "w-[150px] md:w-48",
            },
          ].map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-row flex-wrap items-center space-y-0"
            >
              <div className="flex flex-row items-center mb-4">
                <div className={cn("border border-gray-800", section.width)}>
                  <div className={cn("flex flex-col space-y-4 pt-4")}>
                    {section.options.map((option, index) => (
                      <div
                        key={index}
                        className={`pb-4 ${
                          index === 0 ? "border-b border-gray-800" : ""
                        } px-2 h-16 md:h-12`}
                      >
                        <div className="grid grid-cols-12">
                          <span className="mr-2 col-span-3">
                            {option.label}
                          </span>
                          <span className="col-span-9">{option.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {sectionIndex < 2 && <div className="mx-3">→</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Answer choices */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            "(A) → (A) → (A)",
            "(A) → (A) → (B)",
            "(A) → (B) → (A)",
            "(A) → (B) → (B)",
            "(B) → (A) → (A)",
            "(B) → (A) → (B)",
            "(B) → (B) → (A)",
            "(B) → (B) → (B)",
          ].map((choice, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-block w-6 h-6 text-center leading-6 mr-2">
                {"①②③④⑤⑥⑦⑧"[index]}
              </span>
              <span>{choice}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JapaneseTestThirdVersion;
