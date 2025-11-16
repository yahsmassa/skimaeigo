"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  cn,
  exPageFormat,
  exQuestionFormat,
} from "@/lib/util";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex24_3A: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  // 変数は展開済みのため削除

  const question: QandA[] = qanda.find(q => q.id === "24_3A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      {/* 問題番号とシチュエーション */}
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="md:text-lg font-bold font-sans">{"第３問 A"}</h1>
          <span className="text-gray-600 font-sans">(配点 {6})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 5分 約250語】
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
      <div className="mb-5 px-3">
        <p className="text-base indent-5">
          Susan, your English ALT&apos;s sister, visited your class last month. Now back in the UK, she wrote on her blog about an event she took part in.
          {' '}{Kaisetsu(showResults, "24-3A-1")}
        </p>
      </div>

      <Card>
        <CardContent className="text-justify">
          <div className="">
            <div className="w-full md:w-[280px] md:float-right md:ml-6 md:mb-2">
              <div className="mt-3 border-2 border-gray-900 p-2">
                <h2 className="font-bold mb-4">Sakura City Photo Rally Rules</h2>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span>Each group can only use the </span>
                      <span className="font-semibold">camera</span>
                      <span > and </span>
                      <span className="font-semibold">paper map</span>
                      <span>, both provided by us</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span>Take as many photos of </span>
                      <span className="font-semibold">25 checkpoints</span>
                      <span>(designated sightseeing spots) as possible</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span className="font-semibold">3-hour</span>
                      <span> time limit</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span>Photos must include </span>
                      <span className="font-semibold">all 3 team members</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span>All members must move </span>
                      <span className="font-semibold">together</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span className="font-semibold">No</span>
                      <span> mobile phones</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <span className="font-semibold">No</span>
                      <span> transport</span>
                    </span>
                  </li>
                </ul>
                {Kaisetsu(showResults, "24-3A-5")}
              </div>
            </div>
            <p className="mb-4">
              Hi!
            </p>
            <p className="">
              I participated in a photo rally for foreign tourists with my friends: See the rules on the right. As photo rally beginners, we decided to aim for only five of the checkpoints. In three minutes, we arrived at our first target, the city museum. In quick succession, we made the second, third, and fourth targets. Things were going smoothly!
              But, on the way to the last target, the statue of a famous samurai from the city, we got lost. Time was running out and my feet were hurting from walking for over two hours. We stopped a man with a pet monkey for help, but neither our Japanese nor his English were good enough. After he'd explained the way using gestures, we realised we wouldn't have enough time to get there and would have to give up.
              We took a photo with him and said goodbye. When we got back to Sakura City Hall, we were surprised to hear that the winning team had completed 19 checkpoints. One of our photos was selected to be on the event website (click <span className="underline">here</span>). It reminds me of the man's warmth and kindness: our own "gold medal."
                {' '}{Kaisetsu(showResults, "24-3A-4")}
            </p>
            <div className="hidden md:block clear-both"></div>
          </div>
        </CardContent>
      </Card>
      {/* Questions */}
      <div className={cn(exQuestionFormat, "mt-6")}>
        {/* 問1 */}
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "3A-1")
          )}
        >
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問1</span>
            <span className="text-left">You click the link in the blog. Which picture appears?</span>
            <div className="flex flex-row gap-2">
              {renderSelect("16", 4, answers, setAnswers)}
              <Explain qa={qa} questionId={"3A-1"} isShow={showResults} />
              {Kaisetsu(showResults, "24-3A-6")}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              ①
              <Image src={"/images/Ex24-3A-1.jpg"} alt={"image1"} width={300} height={200} className="w-[300px] h-auto rounded" />
            </div>
            <div className="flex flex-col items-center">
              ②
              <Image src={"/images/Ex24-3A-2.jpg"} alt={"image2"} width={300} height={200} className="w-[300px] h-auto rounded" />
            </div>
            <div className="flex flex-col items-center">
              ③
              <Image src={"/images/Ex24-3A-3.jpg"} alt={"image3"} width={300} height={200} className="w-[300px] h-auto rounded" />
            </div>
            <div className="flex flex-col items-center">
              ④
              <Image src={"/images/Ex24-3A-4.jpg"} alt={"image4"} width={300} height={200} className="w-[300px] h-auto rounded" />
            </div>
          </div>
        </div>

        {/* 問2 */}
        <div
          className={cn(
            "mb-4",
            showResults && qaFormat(qa, "3A-2")
          )}
        >
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問2</span>
            <span className="text-left">You are asked to comment on Susan&apos;s blog. Which would be an appropriate comment to her?</span>
            <div className="flex flex-row gap-2">
              {renderSelect("17", 4, answers, setAnswers)}
              <Explain qa={qa} questionId={"3A-2"} isShow={showResults} />
              {Kaisetsu(showResults, "24-3A-7")}
            </div>
          </div>
          <ol className="list-none space-y-2 ml-6">
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">①</span>
              <span>I want to see a picture of you wearing the gold medal!</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">②</span>
              <span>You did your best. Come back to Japan and try again!</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">③</span>
              <span>You reached 19 checkpoints in three hours? Really? Wow!!</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">④</span>
              <span>Your photo is great! Did you upgrade your phone?</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex24_3A;
