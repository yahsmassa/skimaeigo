"use client";
import Image from "next/image";
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

type Activity = {
  title: string;
  description: string;
};

type EventDetails = {
  schoolName: string;
  eventName: string;
  date: string;
  time: string;
  entranceFee: string;
  description: string;
};

type SubQuestion = {
  number: string;
  prompt: string;
  options: string[];
  answer: number;
};

type Scenario = {
  context: string;
  eventDetails: EventDetails;
  activities: Activity[];
  additionalInfo: string;
};

export type QuestionData = {
  questionNumber: string;
  points: number;
  scenario: Scenario;
  subQuestions: SubQuestion[];
};

export default function Ex24_1A() {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "1A-1",
      qa: [
        {
          questionNumber: "1",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "[1] 本文第1段落第2文の &quot;TELS students don&apos;t need to pay the entrance fee.&quot;（TELSの生徒は入場料金をし貼らす必要はない）から，④「TELSの生徒である証拠を示す」が正解。",
      ],
    },
    {
      questionId: "1A-2",
      qa: [
        {
          questionNumber: "2",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "[2] イベント解説の2つ目の●の最後の文 &quot;Learn how people from these cultures use facial expressions and their hands to communicate.&quot;（こうした文化の人々がどのようにして表情や手を用いて意思を伝えるかを学ぶ）から，①「様々な文化のジェスチャーについて学ぶ」が正解。 ",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  const questionData: QuestionData = {
    questionNumber: "第1問",
    points: 10,
    scenario: {
      context:
        "You are studying English at a language school in the US. The school is planning an event. You want to attend, so you are reading the flyer.",
      eventDetails: {
        schoolName: "The Thorpe English Language School",
        eventName: "International Night",
        date: "Friday, May 24",
        time: "5 p.m.-8 p.m.",
        entranceFee: "$5",
        description:
          "The Thorpe English Language School (TELS) is organizing an international exchange event. TELS students don't need to pay the entrance fee. Please present your student ID at the reception desk in the Student Lobby.",
      },
      activities: [
        {
          title: "Enjoy foods from various parts of the world",
          description:
            "Have you ever tasted hummus from the Middle East? How about tacos from Mexico? Couscous from North Africa? Try them all!",
        },
        {
          title: "Experience different languages and new ways to communicate",
          description:
            "Write basic expressions such as 'hello' and 'thank you' in Arabic, Italian, Japanese, and Spanish. Learn how people from these cultures use facial expressions and their hands to communicate.",
        },
        {
          title: "Watch dance performances",
          description:
            "From 7 p.m. watch flamenco, hula, and samba dance shows on the stage! After each dance, performers will teach some basic steps. Please join in.",
        },
      ],
      additionalInfo:
        "Lots of pictures, flags, maps, textiles, crafts, and games will be displayed in the hall. If you have some pictures or items from your home country which can be displayed at the event, let a school staff member know by May 17!",
    },
    subQuestions: [
      {
        number: "問 1",
        prompt: "To join the event free of charge, you must ",
        options: [
          "bring pictures from your home country",
          "consult a staff member about the display",
          "fill out a form in the Student Lobby",
          "show proof that you are a TELS student",
        ],
        answer: 4,
      },
      {
        number: "問 2",
        prompt: "At the event, you can ",
        options: [
          "learn about gestures in various cultures",
          "participate in a dance competition",
          "read short stories in foreign languages",
          "try cooking international dishes",
        ],
        answer: 4,
      },
    ],
  };

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第１問 A"}</h1>
          <span className="text-gray-600">(配点 {4})</span>
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

      <div className="">
        <p className="mb-4">{questionData.scenario?.context}</p>

        <div className="border p-4 mb-4">
          <h2 className="text-center text-lg font-bold mb-2">
            {questionData.scenario?.eventDetails?.schoolName}
          </h2>
          <h3 className="text-center text-base font-bold mb-4">
            {questionData.scenario?.eventDetails?.eventName}
          </h3>
          <p className="text-center mb-2">
            {questionData.scenario?.eventDetails?.date},{" "}
            {questionData.scenario?.eventDetails?.time}
          </p>
          <p className="text-center mb-4">
            Entrance Fee: {questionData.scenario?.eventDetails?.entranceFee}
          </p>

          <p className="mb-4">
            {questionData.scenario?.eventDetails?.description}
          </p>

          {questionData.scenario?.activities.map((activity, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold mb-2">• {activity.title}</h4>
              <p className="ml-4">{activity.description}</p>
            </div>
          ))}

          <p className="mt-4">{questionData.scenario?.additionalInfo}</p>
        </div>
      </div>

      <div className={exQuestionFormat}>
        {questionData.subQuestions.map((question, index) => (
          <div
            key={index}
            className={cn(
              "mb-4",
              showResults && qaFormat(qa, "1A-" + (index + 1))
            )}
          >
            <div className="flex items-center flex-wrap  gap-2 mb-2">
              <span className="whitespace-nowrap mr-2">{question.number}</span>
              <span>{question.prompt}</span>
              {renderSelect(
                question.number.replace("問 ", ""),
                4,
                answers,
                setAnswers
              )}
              {showResults && (
                <Explain qa={qa} questionId={"1A-" + String(index + 1)} />
              )}
            </div>
            <ol className="list-none space-y-2 ml-6">
              {question.options.map((option: string, optIndex: number) => (
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
}
