import React from "react";

const JapaneseTestQuestion = () => {
  return (
    <div className="p-6 font-sans">
      <div className="mb-8">
        <h2 className="md:text-xl font-bold mb-6">
          第2問 次の問い（A～C）に答えよ。（配点 47）
        </h2>

        <div className="mb-6">
          <div className="flex flex-wrap md:items-center mb-4 leading-8">
            <span className="font-bold mr-4">A</span>
            <span className="mr-2">次の問い（問1～10）の</span>
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
            <span>については、（ A ）と（ B ）</span>
            <span>に入れるのに最も適当な組合せを選べ。</span>
          </div>

          <div className="mb-6 ml-6"></div>
        </div>

        <div className="space-y-7">
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問1</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Due to the rain, our performance</span>
              <span className="mr-2">in the game was</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                8
              </div>
              <span>from perfect.</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["apart", "different", "far", "free"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問2</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Emergency doors can be found at</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                9
              </div>
            </div>
            <span>ends of this hallway.</span>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["both", "each", "either", "neither"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問3</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                My plans for studying abroad depend on
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                10
              </div>
              <span>I can get a scholarship.</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["that", "what", "whether", "which"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問4</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Noriko can speak Swahili and</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                11
              </div>
              <span>can Marco.</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["also", "as", "so", "that"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問5</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                To say you will go jogging every day is
              </span>
              <span>one thing, but to do it is</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                12
              </div>
              <span>.</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["another", "one another", "the other", "the others"].map(
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
            <div className="font-bold mr-4">問6</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Our boss is a hard worker, but can be
              </span>
              <span className="mr-2">difficult to get</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                13
              </div>
              <span>.</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["along with", "around to", "away with", "down to"].map(
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
            <div className="font-bold mr-4">問7</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">When Ayano came to my house,</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                14
              </div>
              <span>happened that nobody was at home.</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4  md:ml-8">
            {["it", "something", "there", "what"].map((option, index) => (
              <div key={index} className="flex md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center mb-2">
              <div className="font-bold mr-4">問8</div>
              <span className="mr-2">We'll be able to get home on time as</span>
              <span className="mr-2">（ A ） as the roads are （ B ）.</span>
              <div className="ml-8 mb-2">
                <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1">
                  15
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : far　　　　B : blocked",
                "A : far　　　　B : clear",
                "A : long　　　　B : blocked",
                "A : long　　　　B : clear",
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
              <span className="font-bold mr-4">問9</span>
              <span>
                I know you said you weren't going to the sports festival, but it
                is an important event,
              </span>
              <span>so please （ A ） it a （ B ） thought.</span>
              <div className="inline-block border border-black w-12 h-8 text-center py-1 mx-2">
                16
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : give　　　　B : first",
                "A : give　　　　B : second",
                "A : take　　　　B : first",
                "A : take　　　　B : second",
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
            <div className="flex items-center flex-wrap mb-2">
              <span className="font-bold mr-4">問10</span>
              <span>I didn't recognize （ A ） of the guests （ B ）</span>
              <span>the two sitting in the back row.</span>
              <div className="inline-block border border-black w-12 h-8 text-center py-1 mx-2">
                17
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : any　　　　B : except for",
                "A : any　　　　B : rather than",
                "A : either　　　B : except for",
                "A : either　　　B : rather than",
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

export default JapaneseTestQuestion;
