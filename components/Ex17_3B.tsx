import React from "react";

const JapaneseExamQuestions = () => {
  return (
    <div className="font-serif p-6 max-w-4xl mx-auto">
      {/* Section B Instructions */}
      <div className="mb-6">
        <p className="md:text-lg mb-4">
          <span className="font-bold mr-2">B</span>
          次の問い（問１～３）のパラグラフ（段落）には、まとまりをよくするために取り
          除いた方がよい文が一つある。取り除く文として最も適当なものを、それぞれ下
          線部①～④のうちから一つずつ選べ。
        </p>
      </div>

      {/* Question 1 */}
      <div className="mb-10">
        <div className="flex items-center mb-3">
          <p className="font-bold mr-4">問１</p>
          <div className="border-2 border-black px-4 py-1">
            <p className="text-center">29</p>
          </div>
        </div>

        <div className="leading-6 md:leading-8">
          <p className="mb-3">
            <span className="ml-7">
              Wearing proper shoes can reduce problems with your feet. Here are
              some important points to think about in order to choose the right
              shoes.
            </span>
            <span className="font-bold ml-2 mr-1">①</span>
            <span className="underline decoration-2">
              Make sure the insole, the inner bottom part of the shoe, is made
              of material which absorbs the impact on your foot when walking.
            </span>{" "}
            <span className="font-bold ml-2 mr-1">②</span>
            <span className="underline decoration-2">
              The upper part of the shoe should be made of breathable material
              such as leather or cloth.
            </span>{" "}
            <span className="font-bold ml-2 mr-1">③</span>
            <span className="underline decoration-2">
              Some brand-name leather shoes are famous because of their
              fashionable designs.
            </span>
            <span className="font-bold ml-2 mr-1">④</span>
            <span className="underline decoration-2">
              When you try on shoes, pay attention not only to their length but
              also to their depth and width.
            </span>{" "}
            Wearing the right shoes lets you enjoy walking with fewer problems.
          </p>
          <p className="mb-3"></p>
        </div>
      </div>

      {/* Question 2 */}
      <div className="mb-10">
        <div className="flex items-center mb-3">
          <p className="font-bold mr-4">問２</p>
          <div className="border-2 border-black px-4 py-1">
            <p className="text-center">30</p>
          </div>
        </div>

        <div className="leading-6 md:leading-8">
          <p className="mb-3">
            <span className="ml-7">
              In Japan, there are several ways of transporting goods. Each
              method has its own advantages and disadvantages.{" "}
            </span>
            <span className="font-bold ml-2 mr-1">①</span>
            <span className="underline decoration-2">
              Transportation by air, though it can be expensive, is suitable for
              carrying goods which require speedy delivery.
            </span>
            <span className="font-bold ml-2 mr-1">②</span>
            <span className="underline decoration-2">
              Buses can carry many passengers, and they are convenient for daily
              life.
            </span>{" "}
            <span className="font-bold ml-2 mr-1">③</span>
            <span className="underline decoration-2">
              Ships, on the other hand, can carry large quantities at low cost,
              but it takes much time for them to reach their destinations.
            </span>{" "}
            Trains can stop only at stations, but their arrival times can easily
            be estimated. <span className="font-bold ml-2 mr-1">④</span>
            <span className="underline decoration-2">
              Although trucks cannot carry much compared with trains, they are
              useful for carrying things from door to door.
            </span>
            Such merits and demerits of each method of transportation should be
            taken into consideration, so the best way can be chosen, depending
            on the needs.
          </p>
        </div>
      </div>

      {/* Question 3 */}
      <div className="mb-10">
        <div className="flex items-center mb-3">
          <p className="font-bold mr-4">問３</p>
          <div className="border-2 border-black px-4 py-1">
            <p className="text-center">31</p>
          </div>
        </div>

        <div className="leading-6 md:leading-8">
          <p className="mb-3">
            <span className="ml-7">
              If you forget something you once learned, go back to the place
              where you originally learned it. Experimental studies support this
              idea. For instance, two groups of divers went into the sea.{" "}
            </span>
            <span className="font-bold ml-2 mr-1">①</span>
            <span className="underline decoration-2">
              After listening to a list of words underwater, they came back on
              land and wrote down as many words as they could remember.
            </span>
            <span className="font-bold ml-2 mr-1">②</span>
            <span className="underline decoration-2">
              A day later, one group sat on land, while the other went back into
              the sea.
            </span>{" "}
            <span className="font-bold ml-2 mr-1">③</span>
            <span className="underline decoration-2">
              Researchers carefully chose the list of words, and the divers
              selected the diving site.
            </span>{" "}
            <span className="font-bold ml-2 mr-1">④</span>
            <span className="underline decoration-2">
              Each group was asked to recall and write the words they had
              learned the day before.
            </span>{" "}
            It turned out that the divers in the sea recalled words better than
            the divers on land. Thus, a person's ability to remember seems to be
            better if learning and recalling are done in the same environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JapaneseExamQuestions;
