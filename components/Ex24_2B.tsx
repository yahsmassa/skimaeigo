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
  const question: QandA[] = [
    {
      questionId: "2B-1",
      qa: [
        {
          questionNumber: "11",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "①「最も高いプランでは24時間の医療アシスタンスが利用できる」が正解。",
        "（このプランは24時間のスマホのアプリと電話サービスを通して医療サポートを提供している）から，→24-hour を day and night と言い換えていることに注意。",
      ],
    },
    {
      questionId: "2B-2",
      qa: [
        {
          questionNumber: "12",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "①「メールによるサポート」が正解。 一番安いプランについては，第5段落に書かれているが，メールでのサポートについては挙げられていない，",
      ],
    },
    {
      questionId: "2B-3",
      qa: [
        {
          questionNumber: "13",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "①が正解。",
        "（どのような支払方法にも対応しており，通常は月単位で支払う）から， Aの「月払いを認めている」が正しい。",
        "また，第2段落第2文の （私は15分もかからずにオンラインで登録し，すぐにカバーされた）から，Dの「インターネットでの登録システムを提供している」も正しい。",
      ],
    },
    {
      questionId: "2B-4",
      qa: [
        {
          questionNumber: "14",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "③「コスト削減のオプションは魅力的だった」が正解。（しかし，6か月分の保険料を前払いしたため，オプションで15％の割引を受けられたのはよかった）から，",
      ],
    },
    {
      questionId: "2B-5",
      qa: [
        {
          questionNumber: "15",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "②「彼女は旅行の準備が大切だと思っている」が正解。",
        "第1段落では旅の準備について述べており，最終文で （また，旅行保険を購入すべきだ）と述べている。",
        "さらに，最終段落では友人がけがをしたけれど保険のおかげですべてカバーできたというエピソードを述べたうえで，最終文で （保険がいかに重要かに気づいた。困ったときにサポートしてくれるとわかっているのだから）と述べている",
      ],
    },
  ];
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
          {questionData.situation}
          {Kaisetsu(showResults, "24-2B-0")}
        </h2>
      </div>
      <div className="bg-white rounded-lg border-2 border-black mb-8 p-6">
        <div className="space-y-4">
          {questionData.passage.content.map((paragraph, index) => (
            <div key={index}>
              <div className="space-y-6">
                {paragraph.split("\n").map((plan, i) => (
                  <div key={i}>
                    <p>{plan}</p>
                    {Kaisetsu(showResults, "24-2B-" + (index + 1))}
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
          <div
            key={index}
            className={cn(
              "mb-4",
              showResults && qaFormat(qa, "2B-" + (index + 1))
            )}
          >
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <span className="whitespace-nowrap mr-2 font-sans">
                問{question.number}
              </span>
              <span>{question.prompt}</span>
              {renderSelect(String(index + 11), 4, answers, setAnswers)}
              {showResults && (
                <Explain qa={qa} questionId={"2B-" + String(index + 1)} />
              )}
            </div>
            <ol className="list-none space-y-2 ml-6">
              {question.options.map((option, optIndex) => (
                <li key={optIndex} className="flex items-start space-x-2">
                  <span className="w-6 text-right">{"①②③④⑤"[optIndex]}</span>
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
