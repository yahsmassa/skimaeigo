import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";
import Image from "next/image";

const Ex25_8 = () => {
  const correctAnswerArray = [1, 1, 3, 4, 2, 4, 1];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第８問"}</h1>
          <span className="text-gray-600">(配点 {17})</span>
        </div>
        <Saiten
          points={17}
          startQuestionNumber={1}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      {/* Introduction and Steps */}
      <div className="space-y-4">
        <p>
          You are working on an essay about{" "}
          <span className="font-medium">space exploration</span>. You will
          follow the steps below:
        </p>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Step 1</span>: Read a range of
            opinions gathered from the Internet about exploring outer space.
          </p>
          <p>
            <span className="font-medium">Step 2</span>: Take a position on
            space exploration.
          </p>
          <p>
            <span className="font-medium">Step 3</span>: Create an outline of
            your essay using additional sources.
          </p>
        </div>
      </div>

      {/* Step 1 Section */}
      <div className="space-y-4">
        <p className="font-medium">▶ [Step 1] Read a range of opinions</p>

        {/* Opinion Cards */}
        <div className="space-y-4">
          {/* Apu's Opinion */}
          <div className="border border-gray-300 p-4">
            <p className="font-medium mb-2">Apu (university professor)</p>
            <p>
              The exploration of space requires a lot of research time and
              money. All this research has led to many new inventions and
              boosted humanity&apos;s scientific and technical knowledge. While
              laser eye surgery, solar cells, freeze-dried food, and wireless
              headsets are just a few examples that have come out of space
              research, perhaps the invention that has proven the most useful in
              modern life is the computer mouse. This was developed in the 1960s
              on a NASA research project.
            </p>
          </div>

          {/* Christine's Opinion */}
          <div className="border border-gray-300 p-4">
            <p className="font-medium mb-2">Christine (company CEO)</p>
            <p>
              Much space exploration relies on international cooperation, a good
              example being the International Space Station, launched in 1998.
              The main reasons for this cooperation are to share the huge costs
              involved and to improve national prestige. More recently, private
              companies have begun exploring space, though mostly for commercial
              reasons. In the future, it is possible that countries or
              corporations will try to colonize parts of the moon or Mars. While
              financial cooperation and raising prestige are welcome, improper
              commercial or military use of outer space is not.
            </p>
          </div>

          {/* Meilin's Opinion */}
          <div className="border border-gray-300 p-4">
            <p className="font-medium mb-2">Meilin (journalist)</p>
            <p>
              As the famous physicist, Stephen Hawking, once said, it is
              probably dangerous to broadcast into deep space evidence of the
              existence of humans here on Earth. If our nearest intelligent
              aliens are anything like us, then they will seek to conquer Earth
              and humanity. For me, this is the greatest threat associated with
              space exploration. The deeper into space we travel, the greater
              the likelihood Earth will be discovered by an aggressive alien
              civilization.
            </p>
          </div>

          {/* Naomi's Opinion */}
          <div className="border border-gray-300 p-4">
            <p className="font-medium mb-2">Naomi (lawyer)</p>
            <p>
              Historically, jobs working at sea were likely the least safe, with
              the highest rates of death in the workplace. In modern times,
              space is no different, if not worse. Once we are just 10,000
              meters or so above the surface of the Earth, there is little
              oxygen and the temperature is too low for human survival. Since
              the first person went into space in 1961, 19 of 652 astronauts
              have died on the job: a fatality rate of 2.9%. No other business
              or industry would tolerate such a high level of danger. Why should
              the space industry?
            </p>
          </div>

          {/* Victor's Opinion */}
          <div className="border border-gray-300 p-4">
            <p className="font-medium mb-2">Victor (financial analyst)</p>
            <p>
              Space exploration has contributed hugely to economic growth. In
              the USA, NASA provided work for nearly 340,000 people in 2021,
              mostly at above-average salaries, and it is estimated that it has
              contributed $7.7 billion in taxes to the US government. Space is
              also being explored by other countries, such as China, India,
              Japan, and Russia. In the future, further economic growth will be
              ensured by more private firms entering the space race and by the
              rise of space tourism, space mining, space colonization, and space
              militarization.
            </p>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="mt-8 space-y-8">
        {/* Question 1 */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <span>問 1</span>
            <div className="flex gap-2">
              <span>
                Which of the following best expresses Meilin&apos;s opinion?
              </span>
              <div className="border border-gray-400 px-3 py-1">38</div>
            </div>
          </div>

          <div className="space-y-2 ml-8">
            <div>① Caution is critical.</div>
            <div>② Invention is invaluable.</div>
            <div>③ Science is superior.</div>
            <div>④ Trust is treasure.</div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <span>問 2</span>
            <div className="flex gap-2">
              <span>
                Both Christine and Victor mention that space exploration
              </span>
              <div className="border border-gray-400 px-3 py-1">39</div>
              <span>.</span>
            </div>
          </div>

          <div className="space-y-4 ml-8">
            <div>
              ① has economic impacts and provides opportunities for private
              corporations to make money
            </div>
            <div>
              ② is gaining popularity and that salaries for people working in
              the industry are above average
            </div>
            <div>
              ③ is politically challenging as it requires coordination among
              countries with different policies
            </div>
            <div>
              ④ needs global cooperation, especially to operate the
              International Space Station successfully
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 Section */}
      <div className="mt-8 space-y-6">
        <p className="font-medium">▶ [Step 2] Take a position</p>

        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <span>問 3</span>
              <span className="ml-2">
                Now that you have understood the various opinions, you have
                taken a position on space exploration and written some notes
                below. Choose the best options to complete{" "}
                <span className="border border-gray-400 px-2">40</span>—
                <span className="border border-gray-400 px-2">42</span>. (You
                must have <span className="underline">all</span> of{" "}
                <span className="border border-gray-400 px-2">40</span>—
                <span className="border border-gray-400 px-2">42</span> correct
                to get points.)
              </span>
            </div>

            {/* Position Box */}
            <div className="border border-gray-300 p-4 space-y-3">
              <p className="font-medium">
                POSITION: Space exploration is not a good idea.
              </p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <div className="border border-gray-400 px-2">40</div>
                  <span>and</span>
                  <div className="border border-gray-400 px-2">41</div>
                  <span>opinions support this the most.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>An argument common to these two people is that</span>
                  <div className="border border-gray-400 px-2">42</div>
                  <span>.</span>
                </div>
              </div>
            </div>

            {/* Options for 40 and 41 */}
            <div className="space-y-2">
              <p>
                Options for{" "}
                <span className="border border-gray-400 px-2">40</span> and
                <span className="border border-gray-400 px-2 ml-1">
                  41
                </span>{" "}
                (the order does not matter):
              </p>
              <div className="ml-4 space-y-2">
                <div>① Apu&apos;</div>
                <div>② Christine&apos;</div>
                <div>③ Meilin&apos;</div>
                <div>④ Naomi&apos;</div>
                <div>⑤ Victor&apos;</div>
              </div>
            </div>

            {/* Options for 42 */}
            <div className="space-y-2">
              <p>
                Options for{" "}
                <span className="border border-gray-400 px-2">42</span>:
              </p>
              <div className="ml-4 space-y-3">
                <div>
                  ① military conflict in outer space is something we should try
                  hard to avoid
                </div>
                <div>
                  ② space exploration exposes people to a lot of danger and is
                  too risky
                </div>
                <div>
                  ③ the possibility of alien invasion is too great to be ignored
                  and must be addressed
                </div>
                <div>
                  ④ the risk of death for people in the industry is extremely
                  high compared with other jobs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 Section */}
      <div className="mt-8 space-y-6">
        <p className="font-medium">
          ▶ [Step 3] Create an outline of your essay
        </p>

        {/* Essay Outline Box */}
        <p>Essay outline</p>
        <div className="border border-gray-300 p-4 space-y-4">
          <h2 className="text-center font-medium">
            A Reconsideration of Space Exploration
          </h2>

          <div>
            <h3 className="font-medium">Introduction</h3>
            <p>
              Space exploration is without doubt on the frontline of science,
              but it should not be a priority for the following three reasons.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Body</h3>
            <div className="space-y-1">
              <p>
                REASON 1 from Step 2, based on evidence from the opinions in
                Step 1
              </p>
              <p>
                REASON 2 (
                <span className="border border-gray-400 px-2">43</span>), based
                on evidence from Source A
              </p>
              <p>
                REASON 3, based on evidence (
                <span className="border border-gray-400 px-2">44</span>) from
                Source B
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium">Conclusion</h3>
            <p>
              Upon consideration of all its aspects, we should perhaps
              prioritize other things over exploring space.
            </p>
          </div>
        </div>

        {/* Source A Box */}
        <div className="border border-gray-300 p-4 space-y-2">
          <h3 className="font-medium">Source A</h3>
          <p>
            Although you may not make a direct connection between space
            exploration and environmental problems, a connection does exist.
            First, the CO₂ emissions of spacecraft are not insignificant. It is
            estimated that one spacecraft launch emits 200-300 tons of CO₂ and
            other harmful gases into the Earth&apos;s atmosphere. More and more
            spacecraft are being sent into space, which is damaging for the
            Earth. The contribution to the greenhouse effect of these
            craft&apos;s CO₂ emissions is causing the Earth&apos;s temperature
            to rise. Second, space exploration is damaging the thermosphere (the
            space environment close to the Earth). The quantity of space debris,
            the junked parts of spacecraft or artificial satellites, is on the
            rise. NASA estimates that, in the thermosphere, there are currently
            around 23,000 pieces of space debris which are larger than a
            softball and travel at speeds of up to 28,000 km/h. This poses a
            risk to future spaceflight, and may even be a potential obstacle to
            astronomical observation.
          </p>
        </div>

        {/* Source B Box */}
        <div className="border border-gray-300 p-4 space-y-4">
          <h3 className="font-medium">Source B</h3>
          <p>
            Space exploration is getting more and more costly; in 2022 it was
            reported that the total amount of money spent by all the governments
            around the world was more than US$100 billion. The graph below
            compares this cost with the annual budgets, estimated by
            international institutions, that would be required to address some
            of the world&apos;s most important issues.
          </p>

          <Image
            src="/images/Ex25-8-1.jpg"
            alt="Bar graph comparing government investment in space exploration with potential annual budgets needed for providing clean water, supplying basic education, and relieving hunger in developing countries"
            width={800}
            height={600}
            className="w-full max-w-xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Ex25_8;
