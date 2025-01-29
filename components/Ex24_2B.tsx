"use client";

import React, { useState } from "react";
import { Answers } from "@/lib/types";
import { QuestionSelect } from "@/components/QuestionSelect";
import { Saiten2 } from "./Saiten2";
import { exPageFormat, exQuestionFormat, cn, exPageHeader } from "@/lib/util";

const Ex24_2B = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const questionData = {
    id: "2024-2B",
    title: "2024-2B",
    situation:
      "You are a college student going to study in the US and need travel insurance. You find this review of an insurance plan written by a female international student who studied in the US for six months.",
    passage: {
      title: "TravSafer International Insurance Review",
      content: [
        "There are many things to consider before traveling abroad: pack appropriate clothes, prepare your travel expenses, and don't forget medication (if necessary). Also, you should purchase travel insurance.",
        "When I studied at Fairville University in California, I bought travel insurance from TravSafer International. I signed up online in less than 15 minutes and was immediately covered. They accept any form of payment, usually on a monthly basis. There were three plans. All plans include a one-time health check-up.",
        "The Premium Plan is $100/month. The plan provides 24-hour medical support through a smartphone app and telephone service. Immediate financial support will be authorized if you need to stay in a hospital.",
        "The Standard Plan worked best for me. It had the 24-hour telephone assistance and included a weekly email with tips for staying healthy in a foreign country. It wasn't cheap: $75/month. However, it was nice to get the optional 15% discount because I paid for six months of coverage in advance.",
        "If your budget is limited, you can choose the Economy Plan, which is $25/month. It has the 24-hour telephone support like the other plans but only covers emergency care. Also, they can arrange a taxi to a hospital at a reduced cost if considered necessary by the support center.",
        "I never got sick or hurt, so I thought it was a waste of money to get insurance. Then my friend from Brazil broke his leg while playing soccer and had to spend a few days in a hospital. He had chosen the Premium Plan and it covered everything! I realized how important insurance is—you know that you will be supported when you are in trouble.",
      ],
    },
    questions: [
      {
        number: "1",
        prompt: "According to the review, which of the following is true?",
        options: [
          "Day and night medical assistance is available with the most expensive plan",
          "The cheapest plan includes free hospitalization for any reason",
          "The mid-level plan does not include the one-time health check-up",
          "The writer's plan cost her over $100 every month",
        ],
        answer: 1,
      },
      {
        number: "2",
        prompt: "Which is not included in the cheapest option?",
        options: [
          "Email support",
          "Emergency treatment",
          "Telephone help desk",
          "Transport assistance",
        ],
        answer: 1,
      },
      {
        number: "3",
        prompt:
          "Which is the best combination that describes TravSafer International?",
        options: ["A and D", "A and E", "B and D", "B and E", "C and D"],
        answer: 1,
      },
      {
        number: "4",
        prompt: "The writer's opinion of her chosen plan is that",
        options: [
          "it prevented her from being health conscious",
          "she was not satisfied with the telephone assistance",
          "the option for cost reduction was attractive",
          "the treatment for her broken leg was covered",
        ],
        answer: 1,
      },
      {
        number: "5",
        prompt: "Which of the following best describes the writer's attitude?",
        options: [
          "She believes the smartphone app is useful",
          "She considers travel preparation to be important",
          "She feels the US medical system is unique in the world",
          "She thinks a different hospital would have been better for her friend",
        ],
        answer: 1,
      },
    ],
  };

  const correctAnswerArray = [1, 1, 1, 3, 2];

  return (
    <div className={cn(exPageFormat)}>
      {/* 問題番号とシチュエーション */}
      <div className={exPageHeader}>
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第２問 B"}</h1>
          <span className="text-gray-600">(配点 {10})</span>
        </div>
        <Saiten2
          points={10}
          startQuestionNumber={11}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>

      {/* 本文 */}
      <div>
        <h2 className="text-base px-5">{questionData.situation}</h2>.
      </div>
      <div className="bg-white rounded-lg border-2 border-black mb-8 p-6">
        <div className="space-y-4">
          {questionData.passage.content.map((paragraph, index) => (
            <div key={index}>
              <div className="space-y-6">
                {paragraph.split("\n").map((plan, i) => (
                  <div key={i}>
                    <p>{plan}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 設問 */}
      <div className={cn(exQuestionFormat, "mt-6")}>
        {questionData.questions.map((question, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <p>問{question.number}</p>
              <p>{question.prompt}</p>
              <QuestionSelect
                index={index}
                questionNumber={index + 11}
                correctAnswerArray={correctAnswerArray}
                limit={question.options.length}
                answers={answers}
                setAnswers={setAnswers}
                showResults={showResults}
              />
            </div>
            <ol className="list-none space-y-2 ml-6">
              {question.options.map((option, optIndex) => (
                <li key={optIndex} className="flex items-start space-x-2">
                  <span className="w-6 text-right">{"①②③④"[optIndex]}</span>
                  <span>{option}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ex24_2B;
