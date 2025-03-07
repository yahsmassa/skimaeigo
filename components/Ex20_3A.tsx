import React from "react";

const TestQuestion = () => {
  return (
    <div className="font-sans p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 className="md:text-2xl font-bold mb-4">
          第3問 次の問い(A・B)に答えよ。(配点 33)
        </h2>

        <div className="ml-4 mb-6 leading-6 md:leading-8">
          <p className="md:font-bold mb-4">
            A
            次の問い(問1～3)のパラグラフ(段落)には、まとまりをよくするために取り除いた方がよい文が一つある。取り除く文として最も適当なものを、それぞれ下線部①～④のうちから一つずつ選べ。
          </p>

          <div className="mt-8">
            <div className="flex items-center mb-2">
              <span className="font-bold mr-2">問1</span>
              <div className="border border-black w-12 h-10 flex items-center justify-center">
                <span className="font-bold">27</span>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <p className="leading-6 md:leading-8">
                <span className="ml-8">
                  In the early history of the NBA, the biggest professional
                  basketball league in North America, the games were often low
                  scoring and, as a result, not always exciting.{" "}
                </span>
                <span className="ml-2 mr-1">①</span>
                <span className="underline decoration-2">
                  A prime example was a game between the Lakers and the Pistons
                  in 1950.
                </span>{" "}
                The result of the game was a 19-18 win for the Pistons. These
                games frustrated fans of the day, and this became a major
                motivation to introduce a new rule to increase scoring: a
                24-second limit for each shot.
                <span className="ml-2 mr-1">②</span>
                <span className="underline decoration-2">
                  The pressure of the time limit caused players to miss their
                  shots more often.
                </span>
                <span className="ml-2 mr-1">③</span>
                <span className="underline decoration-2">
                  After much discussion, the rule was first used in an official
                  game on October 30, 1954.
                </span>
                <span className="ml-2 mr-1">④</span>
                <span className="underline decoration-2">
                  Ever since, individual teams have often scored over 100 points
                  in a game.
                </span>{" "}
                This simple change made the game more exciting and saved the
                league.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center mb-2">
              <span className="font-bold mr-2">問2</span>
              <div className="border border-black w-12 h-10 flex items-center justify-center">
                <span className="font-bold">28</span>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <p className="leading-6 md:leading-8">
                <span className="ml-8">
                  You might have been told, "Sit up straight or you'll get a
                  backache." But is it true? People have long assumed that
                  posture has played some role in back pain. Surprisingly, the
                  evidence from research linking posture and backache may be
                  weak.{" "}
                </span>
                <span className="ml-2 mr-1">①</span>
                <span className="underline decoration-2">
                  Our back is naturally curved—from the side it is S-shaped.
                </span>
                <span className="ml-2 mr-1">②</span>
                <span className="underline decoration-2">
                  ②Individuals have their own unique bone sizes that determine
                  their body shapes.
                </span>{" "}
                <span className="ml-2 mr-1">③</span>
                <span className="underline decoration-2">
                  It has been thought that good posture meant straightening out
                  some of the curves.
                </span>{" "}
                <span className="ml-2 mr-1">④</span>
                <span className="underline decoration-2 mr-2">
                  According to a study examining doctors' opinions, it was found
                  that there was no single agreed-upon standard of proper
                  posture.
                </span>
                One researcher even says that often changing your posture,
                especially when sitting, is more important for preventing back
                pain. The main source of back pain may be stress and lack of
                sleep, not the way someone is sitting.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center mb-2">
              <span className="font-bold mr-2">問3</span>
              <div className="border border-black w-12 h-10 flex items-center justify-center">
                <span className="font-bold">29</span>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <p className="leading-6 md:leading-8">
                <span className="ml-8">
                  One of the most important features in the development of
                  civilization was the preservation of food. Preserving pork
                  legs as ham is one such example. Today, many countries in the
                  world produce ham, but when and where did it begin?{" "}
                </span>
                <span className="ml-2 mr-1">①</span>
                <span className="underline decoration-2">
                  Many credit the Chinese with being the first people to record
                  salting raw pork, while others have cited the Gauls, ancient
                  people who lived in western parts of Europe.
                </span>{" "}
                <span className="ml-2 mr-1">②</span>
                <span className="underline decoration-2">
                  Another common seasoning is pepper, which works just as well
                  in the preservation of food.
                </span>{" "}
                <span className="ml-2 mr-1">③</span>
                <span className="underline decoration-2">
                  It seems almost certain that it was a well-established
                  practice by the Roman period.
                </span>{" "}
                <span className="ml-2 mr-1">④</span>
                <span className="underline decoration-2 mr-2">
                  A famous politician in ancient Rome wrote extensively about
                  the "salting of hams" as early as 160 B.C.
                </span>{" "}
                Regardless of the origin, preserved foods like ham helped human
                culture to evolve and are deeply rooted in history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestQuestion;
