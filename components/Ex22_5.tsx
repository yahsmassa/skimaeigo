import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";

const Ex22_5 = () => {
  const correctAnswerArray = [4, 2, 4];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第５問"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
        </div>
        <Saiten
          points={6}
          startQuestionNumber={1}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      {/* Introduction text */}
      <p className="mb-6 text-lg">
        In your English class, you will give a presentation about a great
        inventor. You found the following article and prepared notes for your
        presentation.
      </p>

      {/* Main article container */}
      <div className="border border-gray-300 p-6">
        {/* First paragraph - full width */}
        <p className="mb-4">
          Who invented television? It is not an easy question to answer. In the
          early years of the 20th century, there was something called a
          mechanical television system, but it was not a success. Inventors were
          also competing to develop an electronic television system, which later
          became the basis of what we have today. In the US, there was a battle
          over the patent for the electronic television system, which attracted
          people&apos;s attention because it was between a young man and a giant
          corporation. This patent would give the inventor the official right to
          be the only person to develop, use, or sell the system.
        </p>

        {/* Text and image wrapped section */}
        <div className="relative">
          {/* Image floating right */}
          <div className="float-right ml-4 mb-2">
            <figure className="w-48 text-center">
              <Image
                src="/images/Ex22-5-1.webp"
                alt="Farnsworth in 1939"
                width={180}
                height={220}
                className="mb-2 border border-gray-300"
              />
              <figcaption className="text-sm">Farnsworth in 1939</figcaption>
            </figure>
          </div>

          {/* Text that wraps around the image */}
          <p className="mb-4">
            Philo Taylor Farnsworth was born in a log cabin in Utah in 1906. His
            family did not have electricity until he was 12 years old, and he
            was excited to find a generator—a machine that produces
            electricity—when they moved into a new home. He was very interested
            in mechanical and electrical technology, reading any information he
            could find on the subject. He would often repair the old generator
            and even changed his mother&apos;s hand-powered washing machine into
            an electricity-powered one.
          </p>

          <p className="mb-4">
            One day, while working in his father&apos;s potato field, he looked
            behind him and saw all the straight parallel rows of soil that he
            had made. Suddenly, it occurred to him that it might be possible to
            create an electronic image on a screen using parallel lines, just
            like the rows in the field. In 1922, during the spring semester of
            his first year at high school, he presented this idea to his
            chemistry teacher, Justin Tolman, and asked for advice about his
            concept of an electronic television system. With sketches and
            diagrams on blackboards, he showed the teacher how it might be
            accomplished, and Tolman encouraged him to develop his ideas.
          </p>

          <p className="mb-4">
            On September 7, 1927, Farnsworth succeeded in sending his first
            electronic image. In the following years, he further improved the
            system so that it could successfully broadcast live images. The US
            government gave him a patent for this system in 1930.
          </p>

          {/* Rest of the paragraphs */}
          <div className="clear-both">
            <p className="mb-4">
              However, Farnsworth was not the only one working on such a system.
              A giant company, RCA (Radio Corporation of America), also saw a
              bright future for television and did not want to miss the
              opportunity. They recruited Vladimir Zworykin, who had already
              worked on an electronic television system and had earned a patent
              as early as 1923. Yet, in 1931, they offered Farnsworth a large
              sum of money to sell them his patent as his system was superior to
              that of Zworykin&apos;s. He refused this offer, which started a
              patent war between Farnsworth and RCA.
            </p>

            <p className="mb-4">
              The company took legal action against Farnsworth, claiming that
              Zworykin&apos;s 1923 patent had priority even though he had never
              made a working version of his system. Farnsworth lost the first
              two rounds of the court case. However, in the final round, the
              teacher who had copied Farnsworth&apos;s blackboard drawings gave
              evidence that Farnsworth did have the idea of an electronic
              television system at least a year before Zworykin&apos;s patent
              was issued. In 1934, a judge approved Farnsworth&apos;s patent
              claim on the strength of handwritten notes made by his old high
              school teacher, Tolman.
            </p>

            <p className="mb-4">
              Farnsworth died in 1971 at the age of 64. He held about 300 US and
              foreign patents, mostly in radio and television, and in 1999, TIME
              magazine included Farnsworth in Time 100: The Most Important
              People of the Century. In an interview after his death,
              Farnsworth&apos;s wife Pem recalled Neil Armstrong&apos;s moon
              landing being broadcast. Watching the television with her,
              Farnsworth had said, &quot;Pem, this has made it all
              worthwhile.&quot; His story will always be tied to his teenage
              dream of sending moving pictures through the air and those
              blackboard drawings at his high school.
            </p>
          </div>
        </div>
      </div>
      {/* Presentation notes section */}
      <div>
        <h2 className="mb-4 text-lg">Your presentation notes:</h2>
        <div className="border border-gray-300 p-6 relative">
          {/* Left circles */}
          <div className="absolute left-2 top-0 bottom-0 flex flex-col gap-3 py-6">
            {Array(26)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 border border-gray-400 rounded-full"
                ></div>
              ))}
          </div>

          {/* Notes content */}
          <div className="ml-8 font-handwriting">
            <h3 className="text-xl mb-6 text-center">
              Philo Taylor Farnsworth (1906-1971)
            </h3>

            {/* Number box */}
            <div className="flex justify-center mb-6">
              <div className="border border-gray-400 px-3 py-1 mx-2">30</div>
            </div>

            {/* Early Days section */}
            <div className="mb-6">
              <h4 className="text-lg underline mb-2">Early Days</h4>
              <ul className="list-none ml-4">
                <li className="mb-2">
                  - born in a log cabin without electricity
                </li>
                <li className="mb-2 flex items-center">
                  -{" "}
                  <div className="border border-gray-400 px-3 py-1 mx-2">
                    31
                  </div>
                </li>
                <li className="flex items-center">
                  -{" "}
                  <div className="border border-gray-400 px-3 py-1 mx-2">
                    32
                  </div>
                </li>
              </ul>
            </div>

            {/* Sequence of Key Events section */}
            <div className="mb-6">
              <h4 className="text-lg underline mb-2">Sequence of Key Events</h4>
              <div className="ml-4 border-l-2 border-gray-400 pl-4">
                <div className="mb-2">
                  <div className="border border-gray-400 px-3 py-1 inline-block mb-2">
                    33
                  </div>
                </div>
                <div className="mb-2">
                  <div className="border border-gray-400 px-3 py-1 inline-block mb-2">
                    34
                  </div>
                </div>
                <div className="mb-2">
                  Farnsworth successfully sent his first image.
                </div>
                <div className="mb-2">
                  <div className="border border-gray-400 px-3 py-1 inline-block mb-2">
                    35
                  </div>
                </div>
                <div className="mb-2">
                  <div className="border border-gray-400 px-3 py-1 inline-block mb-2">
                    36
                  </div>
                </div>
                <div>RCA took Farnsworth to court.</div>
              </div>
            </div>

            {/* Outcome section */}
            <div className="mb-6">
              <h4 className="text-lg underline mb-2">Outcome</h4>
              <p className="ml-4 flex items-center">
                - Farnsworth won the patent battle against RCA thanks to
                <div className="border border-gray-400 px-3 py-1 mx-2">37</div>.
              </p>
            </div>

            {/* Achievements and Recognition section */}
            <div>
              <h4 className="text-lg underline mb-2">
                Achievements and Recognition
              </h4>
              <ul className="list-none ml-4">
                <li className="mb-2">- Farnsworth had about 300 patents.</li>
                <li className="mb-4">
                  - TIME magazine listed him as one of the century&apos;s most
                  <br />
                  <span className="ml-4">important figures.</span>
                </li>
                <li className="flex items-center">
                  -{" "}
                  <div className="border border-gray-400 px-3 py-1 mx-2">
                    38
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Questions section */}
      <div className="mt-8 font-serif">
        {/* Question 1 */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-serif">問 1</span>
            <span>Which is the best subtitle for your presentation?</span>
            <div className="border border-gray-400 px-3 py-1">30</div>
          </div>
          <div className="ml-8 space-y-2">
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                1
              </span>
              A Young Inventor Against a Giant Company
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                2
              </span>
              From High School Teacher to Successful Inventor
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                3
              </span>
              Never-Ending Passion for Generating Electricity
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                4
              </span>
              The Future of Electronic Television
            </p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <div className="mb-4">
            <span className="font-serif">問 2</span>
            <span className="ml-2">Choose the best two options for </span>
            <div className="inline-block border border-gray-400 px-3 py-1 mx-2">
              31
            </div>
            <span> and </span>
            <div className="inline-block border border-gray-400 px-3 py-1 mx-2">
              32
            </div>
            <span> to complete </span>
            <span className="underline">Early Days</span>.
            <span className="ml-2">(The order does not matter.)</span>
          </div>
          <div className="ml-8 space-y-2">
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                1
              </span>
              bought a generator to provide his family with electricity
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                2
              </span>
              built a log cabin that had electricity with the help of his father
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                3
              </span>
              enjoyed reading books on every subject in school
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                4
              </span>
              fixed and improved household equipment for his family
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                5
              </span>
              got the idea for an electronic television system while working in
              a field
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div>
          <div className="mb-4">
            <span className="font-serif">問 3</span>
            <span className="ml-2">Choose </span>
            <span className="underline">four</span>
            <span> out of the five events (</span>
            <span>1</span>
            <span>～</span>
            <span>5</span>
            <span>) in the order they happened to complete </span>
            <span className="underline">Sequence of Key Events</span>.
          </div>
          <div className="flex items-center gap-2 mb-4 ml-8">
            <div className="border border-gray-400 px-3 py-1">33</div>
            <span>→</span>
            <div className="border border-gray-400 px-3 py-1">34</div>
            <span>→</span>
            <div className="border border-gray-400 px-3 py-1">35</div>
            <span>→</span>
            <div className="border border-gray-400 px-3 py-1">36</div>
          </div>
          <div className="ml-8 space-y-2">
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                1
              </span>
              Farnsworth rejected RCA&apos;s offer.
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                2
              </span>
              Farnsworth shared his idea with his high school teacher.
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                3
              </span>
              RCA won the first stage of the battle.
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                4
              </span>
              The US government gave Farnsworth the patent.
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                5
              </span>
              Zworykin was granted a patent for his television system.
            </p>
          </div>
        </div>

        {/* Question 4 */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-serif">問 4</span>
            <span>Choose the best option for</span>
            <div className="border border-gray-400 px-3 py-1">37</div>
            <span>to complete</span>
            <span className="underline ml-1">Outcome</span>.
          </div>
          <div className="ml-8 space-y-2">
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                1
              </span>
              the acceptance of his rival&apos;s technological inferiority
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                2
              </span>
              the financial assistance provided by Tolman
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                3
              </span>
              the sketches his teacher had kept for many years
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                4
              </span>
              the withdrawal of RCA from the battle
            </p>
          </div>
        </div>

        {/* Question 5 */}
        <div>
          <div className="mb-4">
            <span className="font-serif">問 5</span>
            <span className="ml-2">Choose the best option for</span>
            <div className="inline-block border border-gray-400 px-3 py-1 mx-2">
              38
            </div>
            <span>to complete</span>
            <span className="underline ml-1">Achievements and Recognition</span>
            .
          </div>
          <div className="ml-8 space-y-2">
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                1
              </span>
              He and his wife were given an award for their work with RCA.
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                2
              </span>
              He appeared on TV when Armstrong&apos;s first moon landing was
              broadcast.
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                3
              </span>
              His invention has enabled us to watch historic events live.
            </p>
            <p>
              <span className="inline-block w-6 h-6 border border-gray-400 rounded-full text-center mr-4">
                4
              </span>
              Many teenagers have followed their dreams after watching him on
              TV.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex22_5;
