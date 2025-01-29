import { exPageFormat } from "@/lib/util";
import React, { useState } from "react";
import { Saiten2 } from "./Saiten2";
import { Answers } from "@/lib/types";

const Ex24_6A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  return (
    <div className={exPageFormat}>
      <div className="mb-6">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">&quot;第６問 A&quot;</h1>
          <span className="text-gray-600">(配点 {10})</span>
        </div>
        <Saiten2
          points={10}
          startQuestionNumber={39}
          correctAnswerArray={[6, 2, 1, 3, 1]}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      <div className="mb-6">
        <h1 className="text-lg font-semibold">
          A. Your English teacher has assigned this article to you. You need to
          prepare notes to give a short talk.
        </h1>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-center">Perceptions of Time</h2>

        <div className="space-y-4">
          <p className="leading-relaxed">
            When you hear the word &quot;time,&quot; it is probably hours,
            minutes, and seconds that immediately come to mind. In the late 19th
            century, however, philosopher Henri Bergson described how people
            usually do not experience time as it is measured by clocks (clock
            time). Humans do not have a known biological mechanism to measure
            clock time, so they use mental processes instead. This is called{" "}
            <span className="font-semibold">psychological time</span>, which
            everyone perceives differently.
          </p>

          <p className="leading-relaxed">
            If you were asked how long it had taken to finish your homework, you
            probably would not know exactly. You would think back and make an
            estimate. In a 1975 experiment, participants were shown either
            simple or complex shapes for a fixed amount of time and asked to
            memorize them. Afterwards, they were asked how long they had looked
            at the shapes. To answer, they used a mental process called{" "}
            <span className="font-semibold">retrospective timing</span>, which
            is estimating time based on the information retrieved from memory.
            Participants who were shown the complex shapes felt the time was
            longer, while the people who saw the simple shapes experienced the
            opposite.
          </p>

          <p className="leading-relaxed">
            Another process to measure psychological time is called{" "}
            <span className="font-semibold">prospective timing</span>. It is
            used when you are actively keeping track of time while doing
            something. Instead of using the amount of information recalled, the
            level of attention given to time while doing the activity is used.
            In several studies, the participants performed tasks while
            estimating the time needed to complete them. Time seemed shorter for
            the people doing more challenging mental activities which required
            them to place more focus on the task than on time.
          </p>
          <p className="leading-relaxed">
            Time felt longer for the participants who did simpler tasks and the
            longest for those who were waiting or doing nothing.
          </p>

          <p className="leading-relaxed">
            Your emotional state can influence your awareness of time, too. For
            example, you can be enjoying a concert so much that you forget about
            time. Afterwards, you are shocked that hours have passed by in what
            seemed to be the blink of an eye. To explain this, we often say,
            &quot;Time flies when you&apos;re having fun.&quot; The opposite
            occurs when you are bored. Instead of being focused on an activity,
            you notice the time. It seems to go very slowly as you cannot wait
            for your boredom to end. Fear also affects our perception of time.
            In a 2006 study, more than 60 people experienced skydiving for the
            first time. Participants with high levels of unpleasant emotions
            perceived the time spent skydiving to be much longer than it was in
            reality.
          </p>

          <p className="leading-relaxed">
            Psychological time also seems to move differently during life
            stages. Children constantly encounter new information and have new
            experiences, which makes each day memorable and seem longer when
            recalled. Also, time creeps by for them as they anticipate upcoming
            events such as birthdays and trips. For most adults, unknown
            information is rarely encountered and new experiences become less
            frequent, so less mental focus is required and each day becomes less
            memorable. However, this is not always the case. Daily routines are
            shaken up when drastic changes occur, such as changing jobs or
            relocating to a new city. In such cases, the passage of time for
            those people is similar to that for children. But generally
            speaking, time seems to accelerate as we mature.
          </p>

          <p className="leading-relaxed">
            Knowledge of psychological time can be helpful in our daily lives,
            as it may help us deal with boredom. Because time passes slowly when
            we are not mentally focused and thinking about time, changing to a
            more engaging activity, such as reading a book, will help ease our
            boredom and speed up the time. The next occasion that you hear
            &quotTime flies when you&apos;re having fun,&quot you will be
            reminded of this.
          </p>
        </div>
      </div>
      {/* Notes Section */}
      <div>
        <p className="mb-4">Your notes:</p>
        <div className="border border-gray-800 p-6">
          <h3 className="text-center italic mb-6">Perceptions of Time</h3>

          <div className="space-y-6">
            <div>
              <p className="italic">Outline by paragraph</p>
              <ol className="ml-4 space-y-1">
                <li className="flex items-start">
                  <span>1.</span>
                  <div className="ml-1 border border-gray-800 px-2 w-12 text-center">
                    39
                  </div>
                </li>
                <li className="flex items-start">
                  <span>2.</span>
                  <span className="ml-1">Retrospective timing</span>
                </li>
                <li className="flex items-start">
                  <span>3.</span>
                  <span className="ml-1">Prospective timing</span>
                </li>
                <li className="flex items-start">
                  <span>4.</span>
                  <div className="ml-1 border border-gray-800 px-2 w-12 text-center">
                    40
                  </div>
                </li>
                <li className="flex items-start ml-4">
                  <span>→</span>
                  <span className="ml-1">Skydiving</span>
                </li>
                <li className="flex items-start">
                  <span>5.</span>
                  <span className="ml-1">Effects of age</span>
                </li>
                <li className="flex items-start ml-4">
                  <span>→</span>
                  <span className="ml-1">
                    Time speeds up as we mature, but a
                  </span>
                  <div className="ml-1 border border-gray-800 px-2 w-12 text-center">
                    41
                  </div>
                </li>
                <li className="flex items-start">
                  <span>6.</span>
                  <span className="ml-1">Practical tips</span>
                </li>
              </ol>
            </div>

            <div>
              <p className="italic">
                My original examples to help the audience
              </p>
              <div className="ml-4 space-y-2">
                <div>
                  <p className="flex items-start">
                    <span>A.</span>
                    <span className="ml-1">Retrospective timing</span>
                  </p>
                  <p className="flex items-start ml-8">
                    <span>Example:</span>
                    <div className="ml-1 border border-gray-800 px-2 w-12 text-center">
                      42
                    </div>
                  </p>
                </div>
                <div>
                  <p className="flex items-start">
                    <span>B.</span>
                    <span className="ml-1">Prospective timing</span>
                  </p>
                  <p className="flex items-start ml-8">
                    <span>Example:</span>
                    <div className="ml-1 border border-gray-800 px-2 w-12 text-center">
                      43
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 回答 */}
      <div className="space-y-8 mt-8">
        <div>
          <p className="mb-4">
            問 1 Choose the best options for &quot;
            <span className="border border-gray-800 px-2">39</span>&quot; and
            &quot;
            <span className="border border-gray-800 px-2">40</span>&quot;.
          </p>
          <ol className="list-none space-y-2">
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                1
              </span>
              <span>Biological mechanisms</span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                2
              </span>
              <span>Effects of our feelings</span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                3
              </span>
              <span>Kinds of memory</span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                4
              </span>
              <span>Life stages</span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                5
              </span>
              <span>Ongoing research</span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                6
              </span>
              <span>Types of time</span>
            </li>
          </ol>
        </div>

        <div>
          <p className="mb-4">
            問 2 Choose the best option for{" "}
            <span className="border border-gray-800 px-2">41</span>.
          </p>
          <ol className="list-none space-y-2">
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                1
              </span>
              <span>
                major lifestyle change at any age will likely make time slow
                down
              </span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                2
              </span>
              <span>
                major lifestyle change regardless of age will likely make time
                speed up
              </span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                3
              </span>
              <span>
                minor lifestyle change for adults will likely make time slow
                down
              </span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                4
              </span>
              <span>
                minor lifestyle change for children will likely make time speed
                up
              </span>
            </li>
          </ol>
        </div>

        <div>
          <p className="mb-4">
            問 3 Choose the best option for{" "}
            <span className="border border-gray-800 px-2">42</span>.
          </p>
          <ol className="list-none space-y-2">
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                1
              </span>
              <span>anticipating a message from a classmate</span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                2
              </span>
              <span>memorizing your mother&apos;s cellphone number</span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                3
              </span>
              <span>reflecting on how many hours you worked today</span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                4
              </span>
              <span>remembering that you have a meeting tomorrow</span>
            </li>
          </ol>
        </div>

        <div>
          <p className="mb-4">
            問 4 Choose the best option for{" "}
            <span className="border border-gray-800 px-2">43</span>.
          </p>
          <ol className="list-none space-y-2">
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                1
              </span>
              <span>guessing how long you&apos;ve been jogging so far</span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                2
              </span>
              <span>making a schedule for the basketball team summer camp</span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                3
              </span>
              <span>running into your tennis coach at the railway station</span>
            </li>
            <li className="flex items-start">
              <span className="border border-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                4
              </span>
              <span>
                thinking about your last family vacation to a hot spring
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex24_6A;
