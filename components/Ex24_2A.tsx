"use client";

import React, { useState } from "react";
import { cn, exPageFormat, exQuestionFormat } from "@/lib/util";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex24_2A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "24_2A")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  const questionData = {
    id: "2024-2A",
    title: "第2問 (配点 20)",
    situation:
      "You are an exchange student at a high school in the UK and find this flyer.",
    passage: {
      title: "Invitation to the Strategy Game Club",
      content: [
        "Have you ever wanted to learn strategy games like chess, shogi, or go? They are actually more than just games. You can learn skills such as thinking logically and deeply without distractions. Plus, these games are really fun!",
        "This club is open to all students of our school. Regardless of skill level, you are welcome to join.",
        "We play strategy games together and...",
        "● learn basic moves from demonstrations by club members",
        "● play online against club friends",
        "● share tips on our club webpage",
        "● learn the history and etiquette of each game",
        "● analyse games using computer software",
        "● participate in local and national tournaments",
        "Regular meetings: Wednesday afternoons in Room 301, Student Centre",
        "Member Comments:",
        "- My mind is clearer, calmer, and more focused in class.",
        "- It's cool to learn how some games have certain similarities.",
        "- At tournaments, I like discussing strategies with other participants.",
        "- Members share Internet videos that explain practical strategies for chess.",
        "- It's nice to have friends who give good advice about go.",
        "- I was a complete beginner when I joined, and I had no problem!",
      ],
    },
    questions: [
      {
        number: "1",
        prompt: "According to the flyer, which is true about the club?",
        options: [
          "Absolute beginners are welcome",
          "Members edit computer programs",
          "Professional players give formal demonstrations",
          "Students from other schools can join",
        ],
        answer: 1,
      },
      {
        number: "2",
        prompt: "Which of the following is not mentioned as a club activity?",
        options: [
          "Having games with non-club members",
          "Playing matches against computers",
          "Sharing game-playing ideas on the Internet",
          "Studying the backgrounds of strategy games",
        ],
        answer: 1,
      },
      {
        number: "3",
        prompt: "One opinion stated by a member is that",
        options: [
          "comparing different games is interesting",
          "many videos about go are useful",
          "members learn tips at competitions",
          "regular meetings are held off campus",
        ],
        answer: 1,
      },
      {
        number: "4",
        prompt: "The club invitation and a member's comment both mention that",
        options: [
          "new members must demonstrate experience",
          "online support is necessary to be a good player",
          "shogi is a logical and stimulating game",
          "strategy games help improve one's concentration",
        ],
        answer: 1,
      },
      {
        number: "5",
        prompt: "This club is most likely suitable for students who want to",
        options: [
          "create their own computer strategy games",
          "improve their skill level of playing strategy games",
          "learn proper British etiquette through playing strategy games",
          "spend weekends playing strategy games in the club room",
        ],
        answer: 1,
      },
    ],
  };

  return (
    <div className={exPageFormat}>
      {/* 問題番号とシチュエーション */}
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第２問 A"}</h1>
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

      {/* フライヤー */}
      <h3 className="text-gray-700 mb-2">{questionData.situation}</h3>
      <div className="bg-white rounded-lg shadow-lg mb-8 p-6">
        <div className="flex items-center justify-between mb-4">
          <Image
            src="/images/Ex24-2A-1.jpg"
            alt="Strategy Game Club Logo"
            width={48}
            height={48}
            className="w-12 h-12 rounded"
          />
          <h3 className="text-xl font-bold underline text-center flex-grow">
            {questionData.passage.title}
          </h3>
          <Image
            src="/images/Ex24-2A-2.jpg"
            alt="Strategy Game Club Logo"
            width={48}
            height={48}
            className="w-12 h-12 rounded"
          />
        </div>

        <div className="space-y-4">
          {questionData.passage.content.map((paragraph, index) => (
            <div key={index}>
              {index > 2 ? (
                <div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <ul className="space-y-2 ">
                      {paragraph.split("\n").map((item, i) => (
                        <li
                          key={i}
                          className={cn(
                            "flex items-start",
                            index === 10 && "text-xl font-bold underline"
                          )}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index === 8 && Kaisetsu(showResults, "24-2A-2")}
                  {index === 16 && Kaisetsu(showResults, "24-2A-3")}
                </div>
              ) : (
                <p>
                  {paragraph}
                  {index === 0 && Kaisetsu(showResults, "24-2A-1")}
                  {index === 2 && Kaisetsu(showResults, "24-2A-1B")}
                </p>
              )}
            </div>
          ))}
          <Image
            src="/images/Ex24-2A-3.jpg"
            alt="shogi plate"
            width={160}
            height={160}
            className="w-40 h-40 rounded"
          />
        </div>
      </div>

      {/* 設問 */}
      {/* Questions */}
      <div className={cn(exQuestionFormat, "mt-6")}>
        {questionData.questions.map((question, index) => (
          <div
            key={index}
            className={cn(
              "mb-4",
              showResults && qaFormat(qa, "2A-" + (index + 1))
            )}
          >
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <span className="whitespace-nowrap mr-2 font-sans">
                問{question.number}
              </span>
              <span>{question.prompt}</span>
              {renderSelect(String(index + 6), 4, answers, setAnswers)}
              {showResults && (
                <Explain qa={qa} questionId={"2A-" + String(index + 1)} />
              )}
              {Kaisetsu(showResults, "24-2A-" + String(index + 4))}
            </div>
            <ol className="list-none space-y-2 ml-6">
              {question.options.map((option, optIndex) => (
                <li key={optIndex} className="flex items-start space-x-2">
                  <span className="w-6 ">{"①②③④"[optIndex]}</span>
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

export default Ex24_2A;
