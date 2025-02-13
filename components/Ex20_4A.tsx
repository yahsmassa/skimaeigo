import React from "react";
import Image from "next/image";
const Ex20_4A = () => {
  return (
    <div className="p-8 ">
      <div className="mb-6">
        <span className="text-xl">第4問</span>
        <span className="ml-4">次の問い(A・B)に答えよ。(配点 40)</span>
      </div>

      <div className="mb-6">
        <div className="mb-4">
          <span className="mr-2">A</span>
          次の文章はある説明文の一部である。この文章を読み、下の問い(問1～4)の
          <div className="flex items-center my-2">
            <div className="border border-black px-4 py-1 mx-2">33</div>～
            <div className="border border-black px-4 py-1 mx-2">36</div>
            に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
          </div>
        </div>

        <div className="space-y-4 leading-relaxed">
          <p>
            Sports coaches and players are interested in how training programs
            can be designed to enhance performance. The order of practice
            potentially facilitates learning outcomes without increasing the
            amount of practice. A study was conducted to examine how different
            training schedules influence throwing performance.
          </p>

          <p>
            In this study, elementary school students threw a tennis ball at a
            target laid on the floor. They threw the ball from three throwing
            locations at distances of 3, 4, and 5 meters from the target. The
            target consisted of the center (20 cm wide) and nine larger outer
            rings. They served as zones to indicate the accuracy of the throws.
            If the ball landed in the center of the target, 100 points were
            given. If the ball landed in one of the outer zones, 90, 80, 70, 60,
            50, 40, 30, 20, or 10 points were recorded accordingly. If the ball
            landed outside of the target, no points were given. If the ball
            landed on a line separating two zones, the higher score was awarded.
          </p>

          <p>
            The students were assigned to one of three practice groups: Blocked,
            Random, or Combined. All students were instructed to use an overarm
            throwing motion to try to hit the center of the target with the
            ball. On the first day of this study, they each completed a total of
            81 practice throws. Students in the Blocked group threw 27 times
            from one of the three throwing locations, followed by 27 throws from
            the next location, and ended practice with 27 throws from the final
            location. In the Random group, each student threw the ball 81 times
            in the order of throwing locations that the researchers had
            specified. No more than two consecutive throws were allowed from the
            same location for this group. In the Combined group, the students
            started with a blocked schedule and gradually shifted to a random
            schedule. On the next day, all students completed a performance test
            of 12 throws.
          </p>
          <p>
            Results showed that during the practice of 81 throws, the Blocked
            group performed worse than the other two groups. Performance test
            scores were also analyzed. The Combined group showed the best
            performance among the three groups, followed by the Random group and
            then by the Blocked group. It is still uncertain if similar results
            can be obtained for adults in training programs for other throwing
            actions, such as those seen in bowling, baseball, and basketball.
            This will be addressed in the following section.
          </p>

          <p className="mt-4 text-sm mb-8">
            (Esmaeel Saemi 他(2012){" "}
            <em>
              Practicing Along the Contextual Interference Continuum: A
              Comparison of Three Practice Schedules in an Elementary Physical
              Education Setting
            </em>{" "}
            の一部を参考に作成)
          </p>
        </div>
      </div>

      {/* Question Section */}
      <div className="mt-8">
        <div className="flex items-baseline mb-4">
          <span className="mr-4">問1</span>
          <span>
            What is the total score achieved by the five throws in this figure?
          </span>
        </div>

        <div className="border border-black inline-block px-6 py-1 mb-8">
          33
        </div>

        <div className="flex">
          {/* Left side - Multiple choice options */}
          <div className="flex flex-col space-y-2 mr-12">
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center mr-4">
                ①
              </span>
              <span>200</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center mr-4">
                ②
              </span>
              <span>210</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center mr-4">
                ③
              </span>
              <span>220</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center mr-4">
                ④
              </span>
              <span>230</span>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <Image
            src="/images/Ex20-4A-1.webp"
            alt="Target illustration"
            className="w-96 h-auto object-contain"
            width={800}
            height={400}
          />
        </div>
      </div>

      {/* Question 2 */}
      <div className="mt-12">
        <div className="flex items-baseline mb-4">
          <span className="mr-4">問2</span>
          <span>
            Which of the following statements is true about the experiment?
          </span>
          <div className="border border-black px-6 py-1 ml-4">34</div>
        </div>

        <div className="space-y-6">
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ①
            </span>
            <span>
              Eighty-one throws were made from the same initial throwing
              location in the Blocked group.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ②
            </span>
            <span>
              The distance from the target remained unchanged during the entire
              experiment for the Combined group.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ③
            </span>
            <span>
              The set of throws from the same location involved various ways of
              throwing for the Combined group.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ④
            </span>
            <span>
              Throwing three or more times in a row from the same location was
              against the rules for the Random group.
            </span>
          </div>
        </div>
      </div>

      {/* Question 3 */}
      <div className="mt-12">
        <div className="flex items-baseline mb-4">
          <span className="mr-4">問3</span>
          <span>
            Which of the following statements is true about the results?
          </span>
          <div className="border border-black px-6 py-1 ml-4">35</div>
        </div>

        <div className="space-y-6">
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ①
            </span>
            <span>
              The Blocked group had the best score both during practice and on
              the performance test.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ②
            </span>
            <span>
              The Blocked group showed the worst score among the three groups on
              the performance test.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ③
            </span>
            <span>
              The Combined group showed lower accuracy than the Random group on
              the performance test.
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ④
            </span>
            <span>
              The Random group had the lowest accuracy both during practice and
              on the performance test.
            </span>
          </div>
        </div>
      </div>

      {/* Question 4 */}
      <div className="mt-12 mb-8">
        <div className="flex items-baseline mb-4">
          <span className="mr-4">問4</span>
          <span>What will most likely be discussed next in this report?</span>
          <div className="border border-black px-6 py-1 ml-4">36</div>
        </div>

        <div className="space-y-6">
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ①
            </span>
            <span>Mental imagery training of underhand throws</span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ②
            </span>
            <span>Observation of younger students' movements</span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ③
            </span>
            <span>Overarm throws with eyes closed</span>
          </div>
          <div className="flex items-baseline">
            <span className="w-6 h-6 flex items-center justify-center mr-4">
              ④
            </span>
            <span>Various kinds of throwing motions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex20_4A;
