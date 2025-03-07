import React from "react";

const JapaneseTestAlternate = () => {
  return (
    <div className="p-6 font-sans">
      <div className="mb-8">
        <h2 className="md:text-xl font-bold mb-6">
          第2問 次の問い(A～C)に答えよ。(配点 44)
        </h2>

        <div className="mb-6">
          <div className="flex flex-wrap md:items-center mb-4 leading-8">
            <span className="font-bold mr-4">A</span>
            <span className="mr-2">次の問い(問1～10)の</span>
            <span className="flex flex-row items-center">
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mr-1 text-sm md:text-base">
                8
              </div>
              <span className="mx-1">～</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base">
                17
              </div>
            </span>
            <span className="ml-2">
              に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。ただし、
            </span>
            <div>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base mx-2">
                15
              </div>
              <span className="mx-1">～</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 text-sm md:text-base mx-2">
                17
              </div>
            </div>
            <span>については、( A )と( B )</span>
            <span>に入れるのに最も適当な組合せを選べ。</span>
          </div>

          <div className="mb-6 ml-6"></div>
        </div>

        <div className="space-y-7">
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問 1</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">The train</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                8
              </div>
              <span>
                when I reached the platform, so I didn't have to wait in the
                cold.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 md:ml-8">
            {[
              "had already arrived",
              "has already arrived",
              "previously arrived",
              "previously arrives",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問 2</div>
            <div className="flex flex-wrap items-center">
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                9
              </div>
              <span>
                Tokyo has a relatively small land area, it has a huge
                population.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["Although", "But", "Despite", "However"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問 3</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Children</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                10
              </div>
              <span>
                by bilingual parents may naturally learn two languages.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-4 md:ml-8">
            {[
              "bringing up",
              "brought up",
              "have brought up",
              "were brought up",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問 4</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                My sister was not a serious high school student, and
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                11
              </div>
              <span>.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-4 md:ml-8">
            {[
              "either I was",
              "either was I",
              "neither I was",
              "neither was I",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問 5</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Before the movie begins, please</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                12
              </div>
              <span>your mobile phone is switched off.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["keep", "make sure", "never fail", "remind"].map(
              (option, index) => (
                <div key={index} className="flex md:items-center">
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              )
            )}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問 6</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                We have made good progress, so we are already
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                13
              </div>
              <span>schedule.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["ahead of", "apart from", "far from", "out of"].map(
              (option, index) => (
                <div key={index} className="flex md:items-center">
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              )
            )}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問 7</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Thanks to their</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                14
              </div>
              <span>comments after my presentation, I felt very relieved.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["friendly", "nicely", "properly", "warmly"].map(
              (option, index) => (
                <div key={index} className="flex md:items-center">
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              )
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center mb-2">
              <div className="font-bold mr-4">問 8</div>
              <span className="mr-2">
                ( A ) you've completed this required class, you ( B ) be able to
                graduate.
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                15
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : If　　　　　　B : won't",
                "A : Unless　　　 B : would",
                "A : Until　　　　B : won't",
                "A : While　　　　B : would",
              ].map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index >= 2 ? "md:mt-4" : ""}`}
                >
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center mb-2">
              <div className="font-bold mr-4">問 9</div>
              <span className="mr-2">
                Wood ( A ) be used as the main fuel, but nowadays fossil fuels (
                B ) widely.
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                16
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : used to　　　　B : are used",
                "A : used to　　　　B : have been used",
                "A : was used to　　B : are used",
                "A : was used to　　B : have been used",
              ].map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index >= 2 ? "md:mt-4" : ""}`}
                >
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center mb-2">
              <div className="font-bold mr-4">問10</div>
              <span className="mr-2">
                ( A ) so considerate ( B ) him to come and see his grandmother
                in the hospital every day.
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                17
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : He is　　　　B : for",
                "A : He is　　　　B : of",
                "A : It is　　　　B : for",
                "A : It is　　　　B : of",
              ].map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index >= 2 ? "md:mt-4" : ""}`}
                >
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapaneseTestAlternate;
