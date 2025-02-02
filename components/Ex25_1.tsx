import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { exPageFormat } from "@/lib/util";
import { Answers } from "@/lib/types";
import Image from "next/image";

export default function Ex25_1() {
  const correctAnswerArray = [4, 2, 4];
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第１問"}</h1>
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
      <h1 className="text-center text-2xl mb-2">Beginners!</h1>
      <h2 className="text-center text-xl mb-4">
        Decorate Your Freshwater Aquarium
      </h2>

      <p className="text-center mb-6 italic">
        Start your wonderful hobby of keeping fish by following these three easy
        steps!
      </p>

      <div className="space-y-6">
        {/* Section 1 */}
        <div>
          <h3 className="text-lg font-bold mb-3">
            1. Consider what kind of fish you want
          </h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="mb-4">
                Some fish need open spaces for swimming, while others want
                places to hide. Also, some fish need sand to cover themselves
                in. For other non-hiding fish, small stones can be used.
              </p>
            </div>
            {/* Fish and bottom material illustration will be added as img */}
            <div className="w-32">
              <Image
                src="/images/Ex25-1-1.jpg"
                alt="Fish and bottom material illustration"
                width={128}
                height={128}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-lg font-bold mb-3">2. Select decorations</h3>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex-1">
              <p className="mb-4">
                Natural and artificial decorations are necessary to keep fish in
                good health and should cover 50-70% of the area. Fish from
                fast-moving or deep water need solid objects such as small rocks
                and logs. Those from slow-moving or shallow water prefer soft
                objects like plants. Avoid any plastic or rubber items not
                intended for aquariums. Clean all decorations carefully to make
                sure there is nothing harmful on them.
              </p>
            </div>
            <div className="w-[70%] md:w-48 mx-auto">
              <Image
                src="/images/Ex25-1-2.jpg"
                alt="Natural and artificial decorations"
                width={192}
                height={192}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-lg font-bold mb-3">3. Position decorations</h3>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex-1">
              <p className="mb-4">
                Fish need room to move. Leave space around the edges of the
                tank. Place tall decorations and plants at the back, and put
                short ones at the front.
              </p>
            </div>
            {/* Tank decoration position illustration will be added as img */}
            <div className="w-[70%] md:w-48 mx-auto">
              <Image
                src="/images/Ex25-1-3.jpg"
                alt="Tank decoration positions"
                width={192}
                height={192}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="mt-8 space-y-6">
          {/* Question 1 */}
          <div>
            <div className="flex gap-2 mb-4">
              <span className="font-bold">問 1</span>
              <p>
                The customers most likely to benefit from this pamphlet are{" "}
                <span className="inline-block w-8 h-6 border border-black text-center">
                  1
                </span>
                .
              </p>
            </div>
            <div className="pl-8 space-y-2">
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                  1
                </span>
                <p>aquarium lovers who are looking for discount prices</p>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                  2
                </span>
                <p>experienced fish lovers who need specialized advice</p>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                  3
                </span>
                <p>
                  fish fans who want different methods of feeding their fish
                </p>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                  4
                </span>
                <p>newcomers who need to be informed about their aquarium</p>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <div className="mb-4">
              <span className="font-bold">問 2</span>
              <span className="ml-2">
                When arranging decorations to keep your fish in good health, it
                is a good idea to
                <span className="inline-block w-8 h-6 border border-black text-center mx-1">
                  2
                </span>
                .
              </span>
            </div>
            <div className="pl-8 space-y-2">
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                  1
                </span>
                <p>avoid using solid and soft objects</p>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                  2
                </span>
                <p>provide the right amount of open space</p>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                  3
                </span>
                <p>reuse your old toothbrush as a decoration</p>
              </div>
              <div className="flex gap-2">
                <span className="inline-block w-6 h-6 border border-black rounded-full text-center">
                  4
                </span>
                <p>wash decorations briefly and roughly</p>
              </div>
            </div>
            {/* Question 3 */}
            <div className="mt-4">
              <div className="mb-4">
                <span className="font-bold">問 3</span>
                <span className="ml-2">
                  According to the pamphlet, which picture best shows how to
                  decorate for fish from slow-moving water?
                  <span className="inline-block w-8 h-6 border border-black text-center mx-1">
                    3
                  </span>
                </span>
              </div>
              {/* Four aquarium illustrations */}
              <div className="w-full mx-auto md:w-full">
                <Image
                  src="/images/Ex25-1-4.jpg"
                  alt="Four aquarium decoration examples"
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
