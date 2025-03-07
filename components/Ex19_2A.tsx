import React from "react";

const ExamQuestion = () => {
  return (
    <div className="p-6 font-sans">
      <div className="mb-8">
        <h2 className="md:text-xl font-bold mb-6">
          第2問 次の問い(A～C)に答えよ。(配点 47)
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
            <span>については、（ A ）と（ B ）に</span>
            <span>入れるのに最も適当な組合せを選べ。</span>
          </div>
        </div>

        <div className="space-y-7">
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問1</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Casey was getting worried because the bus going to the airport
                was clearly
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                8
              </div>
              <span>schedule.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["after", "behind", "late", "slow"].map((option, index) => (
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
              <span className="mr-2">
                If you are in a hurry, you should call Double Quick Taxi because
                they usually come in
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                9
              </div>
              <span>time.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["any", "few", "no", "some"].map((option, index) => (
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
              <span className="mr-2">After</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                10
              </div>
              <span>dropping the expensive glass</span>
              <span>vase, James decided not to</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["almost", "at most", "most", "mostly"].map((option, index) => (
              <div key={index} className="flex md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問4</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                We should make the changes to the document quickly as we are
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                11
              </div>
              <span>out of time.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["going", "running", "spending", "wasting"].map(
              (option, index) => (
                <div key={index} className="flex flex-warp md:items-center">
                  <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              )
            )}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問5</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">It was impossible to</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                12
              </div>
              <span>everyone's</span>
              <span>demands about the new project.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["carry", "complete", "hold", "meet"].map((option, index) => (
              <div key={index} className="flex flex-warp md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問6</div>
            <div className="flex flex-wrap items-center">
              <span className="">Write a list of everything you need</span>
              <span className="">for the camping trip.</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                13
              </div>
              <span>, you</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["As a result", "In addition", "Otherwise", "Therefore"].map(
              (option, index) => (
                <div key={index} className="flex flex-warp md:items-center">
                  <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
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
              <span className="mr-2">Text messaging has become a common</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                14
              </div>
              <span>of communication</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["mean", "meaning", "means", "meant"].map((option, index) => (
              <div key={index} className="flex flex-warp md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center mb-2">
              <div className="font-bold mr-4">問8</div>
              <span>I was （ A ） when I watched the completely</span>
              <span>（ B ） ending of the movie.</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                15
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 md:ml-8">
              {[
                "A : shocked　　B : surprised",
                "A : shocked　　B : surprising",
                "A : shocking　　B : surprised",
                "A : shocking　　B : surprising",
              ].map((option, index) => (
                <div key={index} className="flex flex-warp md:items-center">
                  <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                    {"①②③④"[index]}
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問9</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                （ A ） is no （ B ） the increase in
              </span>
              <span className="mr-2">traffic on this highway</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                16
              </div>
              <span>during</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "A : It　　B : avoid",
              "A : It　　B : avoiding",
              "A : There　　B : avoid",
              "A : There　　B : avoiding",
            ].map((option, index) => (
              <div key={index} className="flex flex-warp md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問10</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                The police officer asked the witness （ A ）
              </span>
              <span className="mr-2">the situation as （ B ） as</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                17
              </div>
              <span>possible.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "A : describing　　B : accurate",
              "A : describing　　B : accurately",
              "A : to describe　　B : accurate",
              "A : to describe　　B : accurately",
            ].map((option, index) => (
              <div key={index} className="flex flex-warp md:items-center">
                <div className="w-6 h-6 text-xl text-center mr-1 md:mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamQuestion;
