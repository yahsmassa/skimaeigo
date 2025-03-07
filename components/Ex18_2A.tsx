import React from "react";

const JapaneseExamQuestion = () => {
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
        </div>

        <div className="space-y-7">
          {/* 問1 */}
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問1</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Jeff didn't accept the job offer because of the
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                8
              </div>
              <span>salary.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["cheap", "inexpensive", "low", "weak"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問2 */}
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問2</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Brenda went</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                9
              </div>
              <span>to get something to drink.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "at downstairs",
              "downstairs",
              "the downstairs",
              "to downstairs",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問3 */}
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問3</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                After I injured my elbow, I had to quit
              </span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                10
              </div>
              <span>for my school's badminton team.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["playing", "to be playing", "to have played", "to play"].map(
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

          {/* 問4 */}
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問4</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">It's</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                11
              </div>
              <span>my understanding</span>
              <span>why he decided to buy such an old car.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["against", "behind", "beneath", "beyond"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問5 */}
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問5</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Nicole</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                12
              </div>
              <span>novels for about seven years</span>
              <span>when she won the national</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "had been writing",
              "has been writing",
              "has written",
              "is writing",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問6 */}
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問6</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">Our boss was sick at home, so we did</span>
              <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                13
              </div>
              <span>we thought was needed to finish the project.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["how", "that", "what", "which"].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問7 */}
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問7</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                  14
                </div>
                I didn't notice it, but there was a huge spider in the bathroom.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {["At first", "Beginning", "Besides", "Firstly"].map(
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

          {/* 問8 */}
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問8</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Rafael（ A ）a pair of swallows（ B ）a nest
              </span>
              <span className="mr-2">in the tree in front of the house.</span>
              <span className="mr-2">
                <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                  15
                </div>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "Ａ：looked Ｂ：making",
              "Ａ：looked Ｂ：to make",
              "Ａ：saw　Ｂ：making",
              "Ａ：saw　Ｂ：to make",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問9 */}
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問9</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                It（ A ）be long（ B ）the plum blossoms come out. They may even
                bloom
              </span>
              <span className="mr-2">this coming weekend.</span>
              <span className="mr-2">
                <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                  16
                </div>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "Ａ：should Ｂ：before",
              "Ａ：should Ｂ：enough",
              "Ａ：shouldn’t Ｂ：before",
              "Ａ：shouldn’t Ｂ：enough",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 text-xl text-center mr-2">
                  {"①②③④"[index]}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>

          {/* 問10 */}
          <div className="flex flex-wrap items-center">
            <div className="font-bold mr-4">問10</div>
            <div className="flex flex-wrap items-center">
              <span className="mr-2">
                Melissa said she（ A ）rather go snowboarding next weekend
              </span>
              <span className="mr-2">（ B ）go ice-skating.</span>
              <span className="mr-2">
                <div className="inline-block border border-black w-8 md:w-12 md:h-8 text-center py-1 mx-2">
                  17
                </div>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 md:ml-8">
            {[
              "Ａ：could Ｂ：than",
              "Ａ：could Ｂ：to",
              "Ａ：would Ｂ：than",
              "Ａ：would Ｂ：to",
            ].map((option, index) => (
              <div key={index} className="flex items-center">
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
  );
};

export default JapaneseExamQuestion;
