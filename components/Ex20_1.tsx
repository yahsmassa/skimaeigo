import React from "react";

const JapaneseTestQuestion = () => {
  // 日本語の番号文字
  const japaneseNumbers = ["①", "②", "③", "④"];

  // 問題の選択肢データを配列として定義
  const questionData = {
    sectionA: [
      {
        questionNumber: 1,
        options: [
          "<u>s</u>carce",
          "<u>s</u>cenery",
          "<u>s</u>cratch",
          "<u>s</u>cream",
        ],
      },
      {
        questionNumber: 2,
        options: [
          "ar<u>i</u>se",
          "des<u>i</u>re",
          "lo<u>o</u>se",
          "res<u>e</u>mble",
        ],
      },
      {
        questionNumber: 3,
        options: [
          "acc<u>u</u>se",
          "c<u>u</u>be",
          "cuc<u>u</u>mber",
          "c<u>u</u>ltivate",
        ],
      },
    ],
    sectionB: [
      {
        questionNumber: 4,
        options: ["allergy", "objective", "physical", "strategy"],
      },
      {
        questionNumber: 5,
        options: ["alcohol", "behavior", "consider", "magnetic"],
      },
      {
        questionNumber: 6,
        options: ["canal", "instance", "island", "workshop"],
      },
      {
        questionNumber: 7,
        options: ["administer", "beneficial", "competitor", "democracy"],
      },
    ],
  };

  // 選択肢を表示するコンポーネント
  const QuestionOptions = ({ options }: { options: string[] }) => (
    <div className="grid grid-cols-4 gap-4 pl-2 md:pl-8">
      {options.map((word, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="mb-2">{japaneseNumbers[index]}</span>
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
  }: {
    questionNumber: number;
    options: string[];
    index: number;
  }) => (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <span className="font-bold mr-4">問 {index + 1}</span>
        <div className="border border-black px-6 py-1 w-16 text-center">
          {questionNumber}
        </div>
      </div>
      <QuestionOptions options={options} />
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
          />
        ))}
      </div>
    </div>
  );
};

export default JapaneseTestQuestion;
