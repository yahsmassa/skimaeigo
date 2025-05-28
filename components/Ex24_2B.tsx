"use client";

import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import {
  exQuestionFormat,
  cn,
  exPageFormat,
  qaFormat,
  renderSelect,
} from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex24_2B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const question: QandA[] = qanda.find(q => q.id === "24_2B")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={cn(exPageFormat)}>
      {/* 問題番号とシチュエーション */}
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 B"}</h1>
          <span className="text-gray-600 font-sans">(配点 {10})</span>
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

      {/* 本文 */}
      <div>
        <h2 className="text-base px-5 mb-2">
          You are a college student going to study in the US and need travel insurance. You find this review of an insurance plan written by a female international student who studied in the US for six months.
          {Kaisetsu(showResults, "24-2B-0")}
        </h2>
      </div>
      <div className="bg-white rounded-lg border-2 border-black mb-8 p-6">
        <div className="space-y-4">
          <div>
            <div className="space-y-6">
              <div>
                <p>There are many things to consider before traveling abroad: pack appropriate clothes, prepare your travel expenses, and don't forget medication (if necessary). Also, you should purchase travel insurance.</p>
                {Kaisetsu(showResults, "24-2B-1")}
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <p>When I studied at Fairville University in California, I bought travel insurance from TravSafer International. I signed up online in less than 15 minutes and was immediately covered. They accept any form of payment, usually on a monthly basis. There were three plans. All plans include a one-time health check-up.</p>
                {Kaisetsu(showResults, "24-2B-2")}
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <p>The Premium Plan is $100/month. The plan provides 24-hour medical support through a smartphone app and telephone service. Immediate financial support will be authorized if you need to stay in a hospital.</p>
                {Kaisetsu(showResults, "24-2B-3")}
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <p>The Standard Plan worked best for me. It had the 24-hour telephone assistance and included a weekly email with tips for staying healthy in a foreign country. It wasn't cheap: $75/month. However, it was nice to get the optional 15% discount because I paid for six months of coverage in advance.</p>
                {Kaisetsu(showResults, "24-2B-4")}
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <p>If your budget is limited, you can choose the Economy Plan, which is $25/month. It has the 24-hour telephone support like the other plans but only covers emergency care. Also, they can arrange a taxi to a hospital at a reduced cost if considered necessary by the support center.</p>
                {Kaisetsu(showResults, "24-2B-5")}
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <p>I never got sick or hurt, so I thought it was a waste of money to get insurance. Then my friend from Brazil broke his leg while playing soccer and had to spend a few days in a hospital. He had chosen the Premium Plan and it covered everything! I realized how important insurance is—you know that you will be supported when you are in trouble.</p>
                {Kaisetsu(showResults, "24-2B-6")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 設問 */}
      <div className={cn(exQuestionFormat, "mt-6")}>
        <div className={cn("mb-4", showResults && qaFormat(qa, "2B-1"))}>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問1</span>
            <span>According to the review, which of the following is true?</span>
            {renderSelect("11", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-1" />}
            {Kaisetsu(showResults, "24-2B-7")}
          </div>
          <ol className="list-none space-y-2 ml-6">
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">①</span>
              <span>Day and night medical assistance is available with the most expensive plan</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">②</span>
              <span>The cheapest plan includes free hospitalization for any reason</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">③</span>
              <span>The mid-level plan does not include the one-time health check-up</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">④</span>
              <span>The writer's plan cost her over $100 every month</span>
            </li>
          </ol>
        </div>

        <div className={cn("mb-4", showResults && qaFormat(qa, "2B-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問2</span>
            <span>Which is not included in the cheapest option?</span>
            {renderSelect("12", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-2" />}
            {Kaisetsu(showResults, "24-2B-8")}
          </div>
          <ol className="list-none space-y-2 ml-6">
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">①</span>
              <span>Email support</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">②</span>
              <span>Emergency treatment</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">③</span>
              <span>Telephone help desk</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">④</span>
              <span>Transport assistance</span>
            </li>
          </ol>
        </div>

        <div className={cn("mb-4", showResults && qaFormat(qa, "2B-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問3</span>
            <span>Which is the best combination that describes TravSafer International?</span>
            {renderSelect("13", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-3" />}
            {Kaisetsu(showResults, "24-2B-9")}
          </div>
          <ol className="list-none space-y-2 ml-6 mb-3">
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">A:</span>
              <span>They allow monthly payments.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">B:</span>
              <span>They design scholarship plans for students.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">C:</span>
              <span>They help you remember your medication.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">D:</span>
              <span>They offer an Internet-based registration system.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">E:</span>
              <span>They require a few days to process the application form.</span>
            </li>
          </ol>
          <ol className="list-none space-y-2 ml-6">
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">①</span>
              <span>A and D</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">②</span>
              <span>A and E</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">③</span>
              <span>B and D</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">④</span>
              <span>B and E</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">⑤</span>
              <span>C and D</span>
            </li>
          </ol>
        </div>

        <div className={cn("mb-4", showResults && qaFormat(qa, "2B-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問4</span>
            <span>The writer's opinion of her chosen plan is that</span>
            {renderSelect("14", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-4" />}
            {Kaisetsu(showResults, "24-2B-10")}
          </div>
          <ol className="list-none space-y-2 ml-6">
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">①</span>
              <span>it prevented her from being health conscious</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">②</span>
              <span>she was not satisfied with the telephone assistance</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">③</span>
              <span>the option for cost reduction was attractive</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">④</span>
              <span>the treatment for her broken leg was covered</span>
            </li>
          </ol>
        </div>

        <div className={cn("mb-4", showResults && qaFormat(qa, "2B-5"))}>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問5</span>
            <span>Which of the following best describes the writer's attitude?</span>
            {renderSelect("15", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="2B-5" />}
            {Kaisetsu(showResults, "24-2B-11")}
          </div>
          <ol className="list-none space-y-2 ml-6">
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">①</span>
              <span>She believes the smartphone app is useful</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">②</span>
              <span>She considers travel preparation to be important</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">③</span>
              <span>She feels the US medical system is unique in the world</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-6 text-right">④</span>
              <span>She thinks a different hospital would have been better for her friend</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ex24_2B;
