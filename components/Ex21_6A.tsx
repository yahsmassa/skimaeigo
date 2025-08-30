"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex21_6A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "21_6A")?.qanda || [];
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
      {/* Original Article Section */}
      <div>
        <div className="mb-6 md:text-xl">
          <span className="font-bold">A</span>
          <span className="ml-4">
            You are working on a class project about safety in sports and found
            the following article. You are reading it and making a poster to
            present your findings to your classmates.
            {Kaisetsu(showResults, "21-6A-0")}
          </span>
        </div>

        <div className="border border-gray-300 p-6">
          <h1 className="text-center text-xl mb-6 font-bold">
            Making Ice Hockey Safer
          </h1>

          <div className="space-y-4">
            <p className="indent-7">
              Ice hockey is a team sport enjoyed by a wide variety of people
              around the world. The object of the sport is to move a hard rubber
              disk called a &quot;puck&quot; into the other team&apos;s net with
              a hockey stick. Two teams with six players on each team engage in
              this fast-paced sport on a hard and slippery ice rink. Players may
              reach a speed of 30 kilometers per hour sending the puck into the
              air. At this pace, both the players and the puck can be a cause of
              serious danger.
              {Kaisetsu(showResults, "21-6A-1")}
            </p>

            <p className="indent-7">
              The speed of the sport and the slippery surface of the ice rink
              make it easy for players to fall down or bump into each other
              resulting in a variety of injuries. In an attempt to protect
              players, equipment such as helmets, gloves, and pads for the
              shoulders, elbows, and legs, has been introduced over the years.
              Despite these efforts, ice hockey has a high rate of concussions.
              {Kaisetsu(showResults, "21-6A-2")}
            </p>

            <p className="indent-7">
              A concussion is an injury to the brain that affects the way it
              functions; it is caused by either direct or indirect impact to the
              head, face, neck, or elsewhere and can sometimes cause temporary
              loss of consciousness. In less serious cases, for a short time,
              players may be unable to walk straight or see clearly, or they may
              experience ringing in the ears. Some believe they just have a
              slight headache and do not realize they have injured their brains.
              {Kaisetsu(showResults, "21-6A-3")}
            </p>
            <p className="indent-7">
              In addition to not realizing the seriousness of the injury,
              players tend to worry about what their coach will think. In the
              past, coaches preferred tough players who played in spite of the
              pain. In other words, while it would seem logical for an injured
              player to stop playing after getting hurt, many did not. Recently,
              however, it has been found that concussions can have serious
              effects that last a lifetime. People with a history of concussion
              may have trouble concentrating or sleeping. Moreover, they may
              suffer from psychological problems such as depression and mood
              changes. In some cases, players may develop smell and taste
              disorders.
              {Kaisetsu(showResults, "21-6A-4")}
            </p>
            <p className="indent-7">
              The National Hockey League (NHL), consisting of teams in Canada
              and the United States, has been making stricter rules and
              guidelines to deal with concussions. For example, in 2001, the NHL
              introduced the wearing of visors—pieces of clear plastic attached
              to the helmet that protect the face. At first, it was optional and
              many players chose not to wear them. Since 2013, however, it has
              been required. In addition, in 2004, the NHL began to give more
              severe penalties, such as suspensions and fines, to players who
              hit another player in the head deliberately.
              {Kaisetsu(showResults, "21-6A-5")}
            </p>

            <p className="indent-7">
              The NHL also introduced a concussion spotters system in 2015. In
              this system, NHL officials with access to live streaming and video
              watch for visible indications of concussion during each game. At
              first, two concussion spotters, who had no medical training,
              monitored the game in the arena. The following year, one to four
              concussion spotters with medical training were added. They
              monitored each game from the League's head office in New York. If
              a spotter thinks that a player has suffered a concussion, the
              player is removed from the game and is taken to a "quiet room" for
              an examination by a medical doctor. The player is not allowed to
              return to the game until the doctor gives permission.
              {Kaisetsu(showResults, "21-6A-6")}
            </p>

            <p className="indent-7">
              The NHL has made much progress in making ice hockey a safer sport.
              As more is learned about the causes and effects of concussions,
              the NHL will surely take further measures to ensure player safety.
              Better safety might lead to an increase in the number of ice
              hockey players and fans.
              {Kaisetsu(showResults, "21-6A-7")}
            </p>
          </div>
        </div>
      </div>

      {/* Summary Diagram Section */}
      <div className="border border-gray-300 p-6">
        <h1 className="text-center text-xl mb-6 font-bold italic">
          Making Ice Hockey Safer
        </h1>

        {/* What is ice hockey? section */}
        <div className="border border-gray-300 p-4 mb-6 relative">
          <h2 className="text-lg mb-3">What is ice hockey?</h2>
          <ul className="list-disc pl-6 mb-3">
            <li>
              Players score by putting a &quot;puck&quot; in the other
              team&apos;s net
            </li>
            <li>Six players on each team</li>
            <li>Sport played on ice at a high speed</li>
          </ul>
          {Kaisetsu(showResults, "21-6A-8")}
          <Image
            src="/images/Ex21-6A-1.webp"
            alt="Hockey player silhouette"
            className="absolute top-4 right-4 w-28"
            width={100}
            height={100}
          />
        </div>

        {/* Main Problem section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">
            Main Problem: A High Rate of Concussions
          </h2>

          <div className="border border-gray-300 p-4 mb-4">
            <h3 className="mb-2">Definition of a concussion</h3>
            <p className="mb-2">
              An injury to the brain that affects the way it functions
            </p>
            {Kaisetsu(showResults, "21-6A-9")}
          </div>
        </div>

        {/* Effects section */}
        <div className="border border-gray-300 p-4 mb-6">
          <h2 className="text-center text-lg mb-4">Effects</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Short-term</h3>
              <ul className="list-disc pl-6">
                <li>Loss of consciousness</li>
                <li>Difficulty walking straight</li>
                <li className="items-center">
                  <span className="border border-gray-700 px-2 mx-2 font-sans">
                    39
                  </span>
                </li>
                <li>Ringing in the ears</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Long-term</h3>
              <ul className="list-disc pl-6">
                <li>Problems with concentration</li>
                <li className="items-center">
                  <span className="border border-gray-700 px-2 mx-2 font-sans">
                    40
                  </span>
                </li>
                <li>Psychological problems</li>
                <li>Smell and taste disorders</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solutions section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">Solutions</h2>
          <div className="border border-gray-300 p-4">
            <h3 className="mb-2">National Hockey League (NHL)</h3>
            <ul className="list-disc pl-6">
              <li>Requires helmets with visors</li>
              <li>Gives severe penalties to dangerous players</li>
              <li className="items-center">
                Has introduced concussion spotters to
                <span className="border border-gray-700 px-2 mx-2 font-sans">
                  41
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Summary section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Summary</h2>
          <p>
            Ice hockey players have a high risk of suffering from concussions.
            Therefore, the NHL has{" "}
            <span className="border border-gray-700 px-2 mx-1 font-sans">
              42
            </span>
            .
          </p>
        </div>
      </div>

      {/* Multiple Choice Questions Section */}
      <div className="space-y-8 mt-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>Choose the best option for</span>
            {renderSelect("39", 4, answers, setAnswers)}
            <span>on your poster.</span>
            {showResults && <Explain qa={qa} questionId="6A-1" />}
            {Kaisetsu(showResults, "21-6A-10")}
          </div>
          <div className="space-y-2 pl-2 md:pl-8">
            {[
              "Aggressive behavior",
              "Difficulty thinking",
              "Personality changes",
              "Unclear vision",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>Choose the best option for</span>
            {renderSelect("40", 4, answers, setAnswers)}
            <span>on your poster.</span>
            {showResults && <Explain qa={qa} questionId="6A-2" />}
            {Kaisetsu(showResults, "21-6A-11")}
          </div>
          <div className="space-y-2 pl-2 md:pl-8">
            {[
              "Loss of eyesight",
              "Memory problems",
              "Sleep disorders",
              "Unsteady walking",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span>Choose the best option for</span>
            {renderSelect("41", 4, answers, setAnswers)}
            <span>on your poster.</span>
            {showResults && <Explain qa={qa} questionId="6A-3" />}
            {Kaisetsu(showResults, "21-6A-12")}
          </div>
          <div className="space-y-2 pl-2 md:pl-8">
            {[
              "Allow players to return to the game",
              "Examine players who have a concussion",
              "Fine players who cause concussions",
              "Identify players showing signs of a concussion",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  {"①②③④⑤⑥"[index]}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "6A-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>Choose the best option for</span>
            {renderSelect("42", 4, answers, setAnswers)}
            <span>on your poster.</span>
            {showResults && <Explain qa={qa} questionId="6A-4" />}
            {Kaisetsu(showResults, "21-6A-13")}
          </div>
          <div className="space-y-2 pl-2 md:pl-8">
            {[
              "been expecting the players to become tougher",
              "been implementing new rules and guidelines",
              "given medical training to coaches",
              "made wearing of visors optional",
            ].map((text, index) => (
              <div key={index} className="flex items-start">
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

export default Ex21_6A;
