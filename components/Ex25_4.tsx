import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex25_4 = () => {
  const correctAnswerArray = [1, 3, 1, 3];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第４問"}</h1>
          <span className="text-gray-600">(配点 {12})</span>
        </div>
        <Saiten
          points={12}
          startQuestionNumber={1}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      <div className="mb-8 text-gray-800">
        In English class, you are writing an essay on a topic related to
        lifestyle in modern society. This is your most recent draft. You are now
        working on improvements based on comments from your teacher.
      </div>

      <div className="border border-gray-300">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-2/3 p-6 text-center font-medium text-lg border-b border-r border-gray-300">
                Try a Slow Life
              </th>
              <th className="w-1/3 p-6 text-center font-medium text-lg border-b border-gray-300">
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-2/3 p-6 align-top border-r border-gray-300">
                <div className="space-y-4">
                  <p>
                    In modern society, people are always busy and this fast pace
                    of living can be stressful. The movement toward a slow life
                    has shown us that you don&apos;t have to be busy all the
                    time. Instead, you can slow down and notice things that are
                    truly meaningful to you. By taking your time and being
                    completely focused on these things, you can improve the
                    quality of your work and life. This essay will describe some
                    ways to do this.
                  </p>

                  <p>
                    One key point of the slow life is to own fewer belongings.
                    This makes it easier to concentrate on everyday activities.
                    <sup>(1)</sup>^ Many people today tend to buy more than they
                    can consume. Do you <i>really</i> need five pairs of the
                    latest sneakers? Slow-lifers would recommend reducing
                    possessions and buying only necessary items.
                  </p>

                  <p>
                    Another recommendation is to think about your communication
                    style and manner in your public and private life. Sadly, one
                    study has found that around 90% of people check smartphones
                    during face-to-face conversations, which may appear impolite
                    and affect relationships negatively.<sup>(2)</sup>^
                  </p>

                  <p>
                    The final aspect of slow living is to take 10 to 15 minutes
                    to reflect on your day. Try to recollect people and events
                    that were significant. By mentally highlighting them, you
                    can find fulfillment in daily tasks.
                  </p>

                  <p>
                    In summary, through a slow life,{" "}
                    <u>
                      <sup>(3)</sup>you can relax
                    </u>
                    . Even small changes can improve your life. Avoid having
                    non- essential items, spend quality time with people around
                    you, and{" "}
                    <u>
                      <sup>(4)</sup>remember what you talked about with your
                      friends
                    </u>
                    . By doing these things, you will have a chance to live a
                    better and more rewarding life.
                  </p>
                </div>
              </td>
              <td className="w-1/3 p-6 align-top">
                <div className="space-y-4 italic text-gray-600">
                  <p>(1) Add an appropriate connecting word.</p>

                  <p>
                    (2) Add a concluding sentence to improve this paragraph.
                  </p>

                  <p>
                    (3) The underlined part isn&apos;t your main argument.
                    Rewrite it.
                  </p>

                  <p>
                    (4) The underlined part doesn&apos;t describe your essay
                    content well. Change it.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border-t border-gray-300 p-6">
                <div className="font-medium mb-2">Overall Comments:</div>
                <div className="italic">
                  You have really improved your essay. Keep working on it.
                  I&apos;m going to follow your suggestions to slow down and
                  hopefully improve the quality of my life.☺
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-right mt-4 text-gray-600"></div>
      <div className="space-y-8">
        <div>
          <p className="mb-4">
            問 1 Based on Comment (1), which is the best word to add?{" "}
            <span className="border border-gray-300 px-3 py-1">14</span>
          </p>
          <div className="pl-8 space-y-2">
            <p>① However</p>
            <p>② Moreover</p>
            <p>③ Otherwise</p>
            <p>④ Therefore</p>
          </div>
        </div>

        <div>
          <p className="mb-4">
            問 2 Based on Comment (2), which is the best sentence to add?{" "}
            <span className="border border-gray-300 px-3 py-1">15</span>
          </p>
          <div className="pl-8 space-y-2">
            <p>① Limit the time you spend having conversations with people.</p>
            <p>② Send messages with your phone just once or twice a day.</p>
            <p>
              ③ Try to focus your attention on the person you are talking with.
            </p>
            <p>④ Use your phone to find real friends through social media.</p>
          </div>
        </div>

        <div>
          <p className="mb-4">
            問 3 Based on Comment (3), which is the best phrase to replace the
            underlined part?{" "}
            <span className="border border-gray-300 px-3 py-1">16</span>
          </p>
          <div className="pl-8 space-y-2">
            <p>① you can be satisfied at work and in your personal life</p>
            <p>② you can complete tasks in a short period of time</p>
            <p>③ you can decrease stress by sharing work with others</p>
            <p>④ you can focus on the outcome rather than the process</p>
          </div>
        </div>

        <div>
          <p className="mb-4">
            問 4 Based on Comment (4), which is the best phrase to replace the
            underlined part?{" "}
            <span className="border border-gray-300 px-3 py-1">17</span>
          </p>
          <div className="pl-8 space-y-2">
            <p>① plan your daily activities as soon as you wake up</p>
            <p>② recall the bad things that happened in your life</p>
            <p>③ think back to the memorable parts of your day</p>
            <p>④ throw away unwanted items before sleeping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex25_4;
