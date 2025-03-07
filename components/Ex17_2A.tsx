import React from "react";

const JapaneseTestQuestion = () => {
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
              <span className="mr-2">
                Today, in science class, I learned that salt water doesn't
                freeze
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                8
              </div>
              <span>0℃.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["at", "in", "on", "with"].map((option, index) => (
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
              <span className="mr-2">
                Many experts think that we need to create more job opportunities
                for
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                9
              </div>
              <span>.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["a young", "the young", "young", "younger"].map(
              (option, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 text-xl text-center mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              )
            )}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問 3</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                The leaves in my neighborhood have recently
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                10
              </div>
              <span>yellow.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["come", "developed", "led", "turned"].map((option, index) => (
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
              <span className="mr-2">I think eating at home is often</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                11
              </div>
              <span>more economical than eating at a restaurant.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["far", "high", "too", "very"].map((option, index) => (
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
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                12
              </div>
              <span>
                as the leading actor in the film, Ramesh soon became a star.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "Choosing",
              "Having been chosen",
              "Having chosen",
              "To choose",
            ].map((option, index) => (
              <div key={index} className="flex md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問 6</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Please give me</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                13
              </div>
              <span>information you get as soon as possible.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["as if", "even if", "whatever", "whenever"].map(
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
              <span className="mr-2">The typhoon suddenly became weaker,</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                14
              </div>
              <span>was good news for the village.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["it", "that", "what", "which"].map((option, index) => (
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
              <div className="font-bold mr-4">問 8</div>
              <span className="mr-2">
                He ( A ) his umbrella ( B ) in the door by accident when he
              </span>
              <span>boarded the rush hour train.</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                15
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : got　　　　B : caught",
                "A : got　　　　B : to catch",
                "A : made　　　 B : caught",
                "A : made　　　 B : to catch",
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
                ( A ) in this class is as kind ( B ) Abbie. She always helps
                people
              </span>
              <span>who are in trouble.</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                16
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : Anybody　　　　B : as",
                "A : Anybody　　　　B : than",
                "A : Nobody　　　　B : as",
                "A : Nobody　　　　B : than",
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
                Angelina ( A ) me whether I ( B ) enjoyed the festival last
              </span>
              <span>Saturday.</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                17
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : asked　　　　B : had",
                "A : asked　　　　B : have",
                "A : said to　　　　B : had",
                "A : said to　　　　B : have",
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
