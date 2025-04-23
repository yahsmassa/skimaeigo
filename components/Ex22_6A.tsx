"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex22_6A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "22_6A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第６問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {12})</span>
        </div>
        <Saiten
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>
      {/* Question Header */}
      <div className="mb-8">
        <span className="font-bold">A</span>
        <span className="ml-4">
          Your study group is learning about &quot;how time of day affects
          people.&quot; You have found an article you want to share. Complete
          the summary notes for your next meeting.
          {Kaisetsu(showResults, "22-6A-0")}
        </span>
      </div>

      {/* Article Content */}
      <div className="border border-gray-300 p-8">
        <h1 className="text-xl font-bold text-center mb-8">
          When Does the Day Begin for You?
        </h1>

        <div className="space-y-6">
          <p className="text-justify indent-7">
            When asked &quot;Are you a morning person?&quot; some reply
            &quot;No, I&apos;m a night owl.&quot; Such people can concentrate
            and create at night. At the other end of the clock, a well-known
            proverb claims: &quot;The early bird catches the worm,&quot; which
            means that waking early is the way to get food, win prizes, and
            reach goals. The lark is a morning singer, so early birds, the
            opposite of <em>owls</em>, are <em>larks</em>. Creatures active
            during the day are &quot;diurnal&quot; and those emerging at night
            are &quot;nocturnal.&quot;
            {Kaisetsu(showResults, "22-6A-1")}
          </p>

          <p className="text-justify indent-7">
            Yet another proverb states: &quot;Early to bed, early to rise makes
            a man healthy, wealthy, and wise.&quot; <em>Larks</em> may jump out
            of bed and welcome the morning with a big breakfast, while{" "}
            <em>owls</em> hit the snooze button, getting ready at the last
            minute, usually without breakfast. They may have fewer meals, but
            they eat late in the day. Not exercising after meals can cause
            weight gain. Perhaps <em>larks</em> are healthier. <em>Owls</em>{" "}
            must work or learn on the <em>lark</em> schedule. Most schooling
            occurs before 4:00 p.m., so young <em>larks</em> may perform certain
            tasks better. Business deals made early in the day may make some{" "}
            <em>larks</em> wealthier.
            {Kaisetsu(showResults, "22-6A-2")}
          </p>

          <p className="text-justify indent-7">
            What makes one person a <em>lark</em> and another an <em>owl</em>?
            One theory suggests preference for day or night has to do with time
            of birth. In 2010, Cleveland State University researchers found
            evidence that not only does a person&apos;s internal clock start at
            the moment of birth, but that those born at night might have
            lifelong challenges performing during daytime hours. Usually, their
            world experience begins with darkness. Since traditional study time
            and office work happen in daylight, we assume that day begins in the
            morning. People asleep are not first in line, and might miss
            chances.
            {Kaisetsu(showResults, "22-6A-3")}
          </p>

          <p className="text-justify indent-7">
            Does everyone follow the system of beginning days in the morning?
            The Jewish people, an approximately 6,000-year-old religious group,
            believe a day is measured from sundown until the following
            sundown—from eve to eve. Christians continue this tradition with
            Christmas Eve. The Chinese use their system of 12 animals not only
            to mark years, but to separate each two-hour period of the day. The
            hour of the rat, the first period, is from 11:00 p.m. to 1:00 a.m.
            Chinese culture also begins the day at night. In other words,
            ancient customs support how <em>owls</em> view time.
            {Kaisetsu(showResults, "22-6A-4")}
          </p>

          <p className="text-justify indent-7">
            Research indicates <em>owls</em> are smarter and more creative. So,
            perhaps <em>larks</em> are not always wiser! That is to say,{" "}
            <em>larks</em> win &quot;healthy&quot; and sometimes
            &quot;wealthy,&quot; but they may lose &quot;wise.&quot; In an early
            report, Richard D. Roberts and Patrick C. Kyllonen state that{" "}
            <em>owls</em> tend to be more intelligent. A later, comprehensive
            study by Franzis Preckel, for which Roberts was one of the
            co-authors, came to the same conclusion. It is not all good news for{" "}
            <em>owls</em>, though. Not only can schoolwork be a challenge, but
            they may miss daytime career opportunities and are more likely to
            enjoy the bad habits of &quot;nightlife,&quot; playing at night
            while <em>larks</em> sleep. Nightlife tends to be expensive. A
            University of Barcelona study suggests <em>larks</em> are precise,
            seek perfection, and feel little stress. <em>Owls</em> seek new
            adventures and exciting leisure activities, yet they often have
            trouble relaxing.
            {Kaisetsu(showResults, "22-6A-5")}
          </p>

          <p className="text-justify indent-7">
            Can people change? While the results are not all in, studies of
            young adults seem to say no, we are hard-wired. So, as young people
            grow and acquire more freedom, they end up returning to their{" "}
            <em>lark</em> or <em>owl</em> nature. However, concerns arise that
            this categorization may not fit everyone. In addition to time of
            birth possibly being an indication, a report published in{" "}
            <em>Nature Communications</em> suggests that DNA may also affect our
            habits concerning time. Other works focus on changes occurring in
            some people due to aging or illness. New research in this area
            appears all the time. A study of university students in Russia
            suggests that there are six types, so <em>owls</em> and{" "}
            <em>larks</em> may not be the only birds around!
            {Kaisetsu(showResults, "22-6A-6")}
          </p>
        </div>
      </div>
      <h2 className="text-lg mt-7 mb-4">Your summary notes:</h2>

      <div className="border border-gray-800 p-4">
        <div className="flex">
          {/* Checkbox column */}
          <div className="flex flex-col space-y-2 mr-4">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 border border-gray-400 rounded-full"
              />
            ))}
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-xl mb-6 text-center">
              When Does the Day Begin for You?
            </h1>

            <section className="mb-6">
              <h2 className="font-bold mb-2">Vocabulary</h2>
              <div className="ml-4">
                <p>
                  Definition of{" "}
                  <span className="italic underline">diurnal</span>:{" "}
                  <span className="inline-block border border-gray-800 px-2 font-sans">
                    39
                  </span>
                </p>
                <p>↔ opposite: nocturnal</p>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="font-bold mb-2">The Main Points</h2>
              <ul className="ml-4 space-y-2">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    Not all of us fit easily into the common daytime schedule,
                    but we are forced to follow it, especially when we are
                    children.
                    {Kaisetsu(showResults, "22-6A-7")}
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    Some studies indicate that the most active time for each of
                    us is part of our nature.
                    {Kaisetsu(showResults, "22-6A-8")}
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    Basically,{" "}
                    <span className="inline-block border border-gray-800 px-2 font-sans">
                      40
                    </span>
                    .
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    Perspectives keep changing with new research.
                    {Kaisetsu(showResults, "22-6A-9")}
                  </p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold mb-2">Interesting Details</h2>
              <ul className="ml-4 space-y-2">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    The Jewish and Christian religions, as well as Chinese time
                    division, are referred to in the article in order to{" "}
                    <span className="inline-block border border-gray-800 px-2 font-sans">
                      41
                    </span>
                    .{Kaisetsu(showResults, "22-6A-10")}
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    Some studies show that{" "}
                    <span className="inline-block border border-gray-800 px-2 font-sans">
                      42
                    </span>{" "}
                    may set a person&apos;s internal clock and may be the
                    explanation for differences in intelligence and{" "}
                    <span className="inline-block border border-gray-800 px-2 font-sans ">
                      43
                    </span>
                    .{Kaisetsu(showResults, "22-6A-11")}
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div className={cn("mt-5 mb-8", showResults && qaFormat(qa, "6A-1"))}>
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
          <span>Choose the best option for</span>{" "}
          {renderSelect("39", 4, answers, setAnswers)}.
          {showResults && <Explain qa={qa} questionId="6A-1" />}
          {Kaisetsu(showResults, "22-6A-12")}
        </div>
        {[
          "achieves goals quickly",
          "likes keeping pet birds",
          "lively in the daytime",
          "skillful in finding food",
        ].map((text, index) => (
          <div key={index} className="flex items-start ml-2 md:ml-8">
            <span className="w-6 h-6 flex items-center justify-center mr-2">
              {"①②③④⑤⑥"[index]}
            </span>
            <span>{text}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-8">
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>Choose the best option for</span>{" "}
            {renderSelect("40", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="6A-2" />}
            {Kaisetsu(showResults, "22-6A-13")}
          </div>
          <div>
            {[
              "a more flexible time and performance schedule will be developed in the future",
              "enjoying social activities in the morning becomes more important as we age",
              "it might be hard for us to change what time of day we perform best",
              "",
            ].map((text, index) => (
              <div key={index} className="flex items-start ml-2 md:ml-8">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④"[index]}
                </span>
                <span>
                  {index === 3 ? (
                    <>
                      living on the <span className="italic">owl</span> schedule
                      will eventually lead to social and financial benefits
                    </>
                  ) : (
                    text
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>Choose the best option for</span>{" "}
            {renderSelect("41", 4, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="6A-3" />}
            {Kaisetsu(showResults, "22-6A-14")}
          </div>
          <div>
            {[
              "explain that certain societies have long believed that a day begins at night",
              "indicate that nocturnal people were more religious in the past",
              "say that people have long thought they miss chances due to morning laziness",
              "support the idea that owls must go to work or school on the lark schedule",
            ].map((text, index) => (
              <div key={index} className="flex items-start ml-2 md:ml-8">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>Choose the best options for</span>{" "}
            {renderSelect("42", 6, answers, setAnswers)} and{" "}
            {renderSelect("43", 6, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="6A-4" />}
            {Kaisetsu(showResults, "22-6A-15")}
          </div>
          <div>
            {[
              "amount of sleep",
              "appearance",
              "behavior",
              "cultural background",
              "religious beliefs",
              "time of birth",
            ].map((text, index) => (
              <div key={index} className="flex items-start ml-2 md:ml-8">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_6A;
