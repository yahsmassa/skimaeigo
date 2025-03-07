import React from "react";
import cn from "clsx";

const JapaneseTestQuestion = () => {
  // 日本語の番号文字
  const japaneseNumbers = ["①", "②", "③", "④"];

  // 問題の選択肢データを配列として定義
  const questionData = {
    sectionA: [
      {
        questionNumber: 1,
        options: [
          "app<u>ear</u>",
          "f<u>ear</u>",
          "g<u>ear</u>",
          "sw<u>ear</u>",
        ],
      },
      {
        questionNumber: 2,
        options: [
          "att<u>a</u>ch",
          "<u>ch</u>annel",
          "<u>ch</u>orus",
          "mer<u>ch</u>ant",
        ],
      },
      {
        questionNumber: 3,
        options: [
          "a<u>ss</u>ert",
          "a<u>ss</u>ociation",
          "impre<u>ss</u>",
          "po<u>ss</u>ess",
        ],
      },
    ],
    sectionB: [
      {
        questionNumber: 4,
        options: ["marine", "rapid", "severe", "unique"],
        isLargeWords: false,
      },
      {
        questionNumber: 5,
        options: ["enormous", "evidence", "satellite", "typical"],
        isLargeWords: false,
      },
      {
        questionNumber: 6,
        options: ["assembly", "correspond", "distinguish", "expensive"],
        isLargeWords: false,
      },
      {
        questionNumber: 7,
        options: ["definitely", "democratic", "independence", "resolution"],
        isLargeWords: true,
      },
    ],
  };

  // 選択肢を表示するコンポーネント
  const QuestionOptions = ({
    options,
    isLargeWords = false,
  }: {
    options: string[];
    isLargeWords?: boolean;
  }) => (
    <div
      className={cn(
        "grid pl-2 md:pl-8",
        isLargeWords
          ? "md:ml-8 grid-cols-2 gap-x-16 gap-y-6"
          : "grid-cols-4 gap-4"
      )}
    >
      {options.map((word, index) => (
        <div
          key={index}
          className={cn(
            "flex",
            isLargeWords ? "items-center" : "flex-col items-center"
          )}
        >
          <span className={isLargeWords ? "mr-4" : "mb-2"}>
            {japaneseNumbers[index]}
          </span>
          <span dangerouslySetInnerHTML={{ __html: word }} />
        </div>
      ))}
    </div>
  );

  // 問題を表示するコンポーネント
  const Question = ({
    questionNumber,
    options,
    index,
    isLargeWords = false,
  }: {
    questionNumber: number;
    options: string[];
    index: number;
    isLargeWords?: boolean;
  }) => (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <span className="font-bold mr-4">問 {index + 1}</span>
        <div className="border border-black px-6 py-1 w-16 text-center">
          {questionNumber}
        </div>
      </div>
      <QuestionOptions options={options} isLargeWords={isLargeWords} />
    </div>
  );

  return (
    <div className="p-6 font-sans">
      {/* Question Header */}
      <div className="mb-6 md:text-lg font-bold flex md:items-center">
        <span className="w-12">第1問</span>
        <span className="ml-4">次の問い(A・B)に答えよ。(配点 14)</span>
      </div>

      {/* Section A */}
      <div className="mb-8">
        <div className="mb-6 flex items-start">
          <span className="font-bold text-lg mr-4">A</span>
          <div>
            <p className="mb-4">
              次の問い(問1～3)において、下線部の発音がほかの三つと
              <span className="font-bold">異なるもの</span>を、そ
              れぞれ下の①～④のうちから一つずつ選べ。
            </p>
          </div>
        </div>

        {questionData.sectionA.map((question, index) => (
          <Question
            key={question.questionNumber}
            questionNumber={question.questionNumber}
            options={question.options}
            index={index}
          />
        ))}
      </div>

      {/* Section B */}
      <div className="mb-8">
        <div className="mb-6 flex items-start">
          <span className="font-bold text-lg mr-4">B</span>
          <div>
            <p className="mb-4">
              次の問い(問1～4)において、第一アクセント(第一強勢)の位置がほかの三つ
              と<span className="font-bold">異なるもの</span>
              を、それぞれ下の①～④のうちから一つずつ選べ。
            </p>
          </div>
        </div>

        {questionData.sectionB.map((question, index) => (
          <Question
            key={question.questionNumber}
            questionNumber={question.questionNumber}
            options={question.options}
            index={index}
            isLargeWords={question.isLargeWords}
          />
        ))}
      </div>
    </div>
  );
};

export default JapaneseTestQuestion;
