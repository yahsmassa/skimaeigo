"use client";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import Image from "next/image";
import { qanda } from "@/lib/qanda";

const Ex25_8 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "25_8")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第８問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {17})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 12分 約700単語】
          </span>

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
      {/* Introduction and Steps */}
      <div className="space-y-4 mb-4">
        <p>
          You are working on an essay about{" "}
          <span className="font-semibold">space exploration</span>. You will
          follow the steps below:
        </p>
        <div className="space-y-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-2">
            <div className="flex items-start">
              <span className="font-semibold md:w-16 shrink-0">Step 1:</span>
              <span>
                Read a range of opinions gathered from the Internet about
                exploring outer space.
              </span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold w-16 shrink-0">Step 2:</span>
              <span>Take a position on space exploration.</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold w-16 shrink-0">Step 3:</span>
              <span>Create an outline of your essay using additional sources.</span>
            </div>
          </div>
          <p className="">{Kaisetsu(showResults, "25-8-0")}</p>
        </div>
      </div>

      {/* Step 1 Section */}
      <div className="space-y-2 text-justify">
        <p className="font-semibold">▶ [Step 1] Read a range of opinions</p>

          {/* Opinion Cards */}
         <div className="space-y-0">
          {/* Apu's Opinion */}
           <div className="border-[1.5px]  border-black border-b-0 p-4">
            <p className="font-semibold mb-2">Apu (university professor)</p>
            <p>
              The exploration of space requires a lot of research time and
              money. All this research has led to many new inventions and
              boosted humanity&apos;s scientific and technical knowledge. While
              laser eye surgery, solar cells, freeze-dried food, and wireless
              headsets are just a few examples that have come out of space
              research, perhaps the invention that has proven the most useful in
              modern life is the computer mouse. This was developed in the 1960s
              on a NASA research project.
            {' '}{Kaisetsu(showResults, "25-8-1")}
            </p>
          </div>

          {/* Christine's Opinion */}
          <div className="border-[1.5px] border-b-0 border-black p-4">
            <p className="font-semibold mb-2">Christine (company CEO)</p>
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
            {' '}{Kaisetsu(showResults, "25-8-2")}
            </p>
          </div>

          {/* Meilin's Opinion */}
          <div className="border-[1.5px] border-b-0 border-black p-4">
            <p className="font-semibold mb-2">Meilin (journalist)</p>
            <p>
              As the famous physicist, Stephen Hawking, once said, it is
              probably dangerous to broadcast into deep space evidence of the
              existence of humans here on Earth. If our nearest intelligent
              aliens are anything like us, then they will seek to conquer Earth
              and humanity. For me, this is the greatest threat associated with
              space exploration. The deeper into space we travel, the greater
              the likelihood Earth will be discovered by an aggressive alien
              civilization.
            {' '}{Kaisetsu(showResults, "25-8-3")}
            </p>
          </div>

          {/* Naomi's Opinion */}
          <div className="border-[1.5px] border-b-0 border-black p-4">
            <p className="font-semibold mb-2">Naomi (lawyer)</p>
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
            {' '}{Kaisetsu(showResults, "25-8-4")}
            </p>
          </div>

          {/* Victor's Opinion */}
          <div className="border-[1.5px]  border-black p-4">
            <p className="font-semibold mb-2">Victor (financial analyst)</p>
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
            {' '}{Kaisetsu(showResults, "25-8-5")}
            </p>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className={cn("space-y-4 mt-6", showResults && qaFormat(qa, "8-1"))}>
        {/* Question 1 */}
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap font-sans">問 1</span>
            <span className="-mr-2">
              Which of the following best expresses Meilin&apos;s opinion?
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("38", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="8-1" isShow={showResults} />
              {Kaisetsu(showResults, "25-8-11")}
            </div>
          </div>

          <div className="space-y-2 ml-2 md:ml-8">
            {[
              "Caution is critical.",
              "Invention is invaluable.",
              "Science is superior.",
              "Trust is treasure.",
            ].map((text, index) => (
              <div key={index} className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center">
                  {"①②③④"[index]}
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Question 2 */}
      <div className={cn("space-y-4 mt-6", showResults && qaFormat(qa, "8-2"))}>
        <div className="space-y-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap font-sans">問 2</span>
            <span className="-mr-2">
              Both Christine and Victor mention that space exploration
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("39", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="8-2" isShow={showResults} />
              {Kaisetsu(showResults, "25-8-12")}
            </div>
            <span className="-ml-1 mr-1">.</span>
          </div>

          <div className="space-y-4 ml-2 md:ml-8">
            {/* <div> */}
              {[
                "has economic impacts and provides opportunities for private corporations to make money",
                "is gaining popularity and that salaries for people working in the industry are above average",
                "is politically challenging as it requires coordination among countries with different policies",
                "needs global cooperation, especially to operate the International Space Station successfully",
              ].map((text, index) => (
                <div key={index} className="flex gap-2">
                  <span className="inline-block w-6 h-6 text-center">
                    {"①②③④"[index]}
                  </span>
                  <p>{text}</p>
                </div>
              ))}
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* Step 2 Section */}
      <div className="mt-8 space-y-6">
        <p className="font-medium">▶ [Step 2] Take a position</p>

        <div className="space-y-6">
          <div className={cn("space-y-4", showResults && qaFormat(qa, "8-3"))}>
            <div>
              <span className="font-sans">問 3</span>
              <span className="ml-2">
                Now that you have understood the various opinions, you have
                taken a position on space exploration and written some notes
                below. Choose the best options to complete{" "}
                <span className="border border-gray-400 px-2 font-sans">
                  40
                </span>
                —
                <span className="border border-gray-400 px-2 font-sans">
                  42
                </span>
                . (You must have <span className="underline">all</span> of{" "}
                <span className="border border-gray-400 px-2 font-sans">
                  40
                </span>
                —
                <span className="border border-gray-400 px-2 font-sans">
                  42
                </span>{" "}
                correct to get points.)
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
                  <div className="border border-gray-400 px-2 font-sans">
                    40
                  </div>
                  <span>and</span>
                  <div className="border border-gray-400 px-2 font-sans">
                    41
                  </div>
                  <span>opinions support this the most.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>An argument common to these two people is that</span>
                  <div className="border border-gray-400 px-2 font-sans">
                    42
                  </div>
                  <span>.</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              {Kaisetsu(showResults, "25-8-13")}
              <Explain qa={qa} questionId="8-3" isShow={showResults} />
            </div>

            {/* Options for 40 and 41 */}
            <div className="space-y-2">
              <p className="flex items-center gap-2 flex-wrap">
                Options for {renderSelect("40", 5, answers, setAnswers)} and
                {renderSelect("41", 5, answers, setAnswers)} (the order does not
                matter):
              </p>

              <div className="ml-2 md:ml-4 space-y-2">
                {[
                  "Apu's",
                  "Christine's",
                  "Meilin's",
                  "Naomi's",
                  "Victor's",
                ].map((text, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="inline-block w-6 h-6 text-center">
                      {"①②③④⑤"[index]}
                    </span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Options for 42 */}
            <div className="space-y-2">
              <p className="flex items-center gap-2 flex-wrap">
                Options for {renderSelect("42", 4, answers, setAnswers)}<span className="-ml-1 mr-1">.</span>
                {Kaisetsu(showResults, "25-8-14")}
              </p>
              <div className="ml-2 md:ml-4 space-y-3">
                {[
                  "military conflict in outer space is something we should try hard to avoid",
                  "space exploration exposes people to a lot of danger and is too risky",
                  "the possibility of alien invasion is too great to be ignored and must be addressed",
                  "the risk of death for people in the industry is extremely high compared with other jobs",
                ].map((text, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="inline-block w-6 h-6 text-center">
                      {"①②③④"[index]}
                    </span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 Section */}
      <p className="mt-8 font-semibold">
        ▶ [Step 3] Create an outline of your essay
      </p>
      <p className="my-2">Essay outline</p>

      {/* Essay Outline Box */}
      <div className="mt-2 space-y-5">
        <div className="border-[1.5px] border-black p-4 space-y-4">
          <h2 className="text-center font-semibold">
            A Reconsideration of Space Exploration
          </h2>

          <div>
            <h3 className="font-semibold">Introduction</h3>
            <p>
              Space exploration is without doubt on the frontline of science,
              but it should not be a priority for the following three reasons.
              {Kaisetsu(showResults, "25-8-8")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Body</h3>
            <div className="space-y-1">
              <p>
                REASON 1 from Step 2, based on evidence from the opinions in
                Step 1
              </p>
              <p>
                REASON 2 (
                <span className="border border-gray-400 px-2 font-sans">
                  43
                </span>
                ), based on evidence from Source A
              </p>
              <p>
                REASON 3, based on evidence (
                <span className="border border-gray-400 px-2 font-sans">
                  44
                </span>
                ) from Source B{Kaisetsu(showResults, "25-8-9")}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Conclusion</h3>
            <p>
              Upon consideration of all its aspects, we should perhaps
              prioritize other things over exploring space.
              {Kaisetsu(showResults, "25-8-10")}
            </p>
          </div>
        </div>

        {/* Source A Box */}
        <div className="border-[1.5px] border-black p-4 space-y-4 text-justify">
          <h3 className="font-semibold">Source A</h3>
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
            {' '}{Kaisetsu(showResults, "25-8-6")}
          </p>
        </div>

        {/* Source B Box */}
        <div className="border-[1.5px] border-black p-4 space-y-4 text-justify">
          <h3 className="font-semibold">Source B</h3>
          <p>
            Space exploration is getting more and more costly; in 2022 it was
            reported that the total amount of money spent by all the governments
            around the world was more than US$100 billion. The graph below
            compares this cost with the annual budgets, estimated by
            international institutions, that would be required to address some
            of the world&apos;s most important issues.
            {' '}{Kaisetsu(showResults, "25-8-7")}
          </p>
          <Image
            src="/images/Ex25-8-1.webp"
            alt="Bar graph comparing government investment in space exploration with potential annual budgets needed for providing clean water, supplying basic education, and relieving hunger in developing countries"
            width={800}
            height={600}
            className="w-full max-w-xl mx-auto"
          />
        </div>
      </div>
      <div className="text-base space-y-8 p-6">
        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "8-4"))}>
          <div className="flex items-start gap-2 flex-wrap">
            <span className="whitespace-nowrap font-sans">問 4</span>
            <span>
              Based on Source A, which of the following is the most appropriate
              for REASON 2?
            </span>
            {renderSelect("43", 4, answers, setAnswers)}
            <Explain qa={qa} questionId="8-4" isShow={showResults} />
            {Kaisetsu(showResults, "25-8-15")}
          </div>

          <div className="space-y-4 ml-2 md:ml-6">
            {[
              "CO₂ emissions produced by spacecraft are huge and are damaging outer space.",
              "It is difficult to update spacecraft with new engines that emit fewer harmful gases.",
              "Space debris poses risks to humans due to potential collision with airplanes.",
              "Space exploration is polluting the environment of both the Earth and the thermosphere.",
            ].map((text, index) => (
              <div key={index} className="flex gap-2">
                <span className="inline-block w-6 h-6  text-center">
                  {"①②③④"[index]}
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "8-5"))}>
          <div className="flex items-start gap-2">
            <div className="whitespace-nowrap font-sans">問 5</div>
            <div className="flex-1">
              <div >
                For REASON <span className="font-sans">3</span>, you have decided to write{" "}
                <i>
                  The cost of space exploration is high and the money could be
                  used instead to solve major world problems
                </i>
                .
              </div>
              <div className="flex flex-wrap items-center">
                Based on Source B, which option best supports this statement?
                <div className="flex flex-row gap-2">
                  {renderSelect("44", 4, answers, setAnswers)}
                  <Explain qa={qa} questionId="8-5" isShow={showResults} />
                  {Kaisetsu(showResults, "25-8-16")}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 ml-2 md:ml-6">
            {[
              "The amount of money that governments around the world spend on space exploration could not only reduce hunger but also make primary education available in developing countries.",
              "The data show that it costs less to ensure clean water for people in developing countries than for governments around the world to explore space.",
              "With less than half the money that governments spend on space exploration, it would be possible to address the problem of educational inequality in the developing world.",
              "With the money currently invested in space exploration, we could provide sufficient food, basic education, and enough clean water in developing countries.",
            ].map((text, index) => (
              <div key={index} className="flex gap-2">
                <span className="inline-block w-6 h-6 text-center">
                  {"①②③④"[index]}
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex25_8;
