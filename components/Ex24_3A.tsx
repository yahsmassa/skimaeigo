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
import { Saiten2 } from "@/components/Saiten2";
import { qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

export interface HeaderText {
  title: string;
  description: string;
}

export interface BlogContentItem {
  type: "greeting" | "paragraph";
  content: string;
  link?: string;
  endContent?: string;
}

interface RuleItem {
  text: string;
  emphasis: string;
  afterEmphasis: string;
}

interface Rules {
  title: string;
  items: RuleItem[];
}

const Ex24_3A: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const headerText: HeaderText = {
    title: "A",
    description:
      "Susan, your English ALT's sister, visited your class last month. Now back in the UK, she wrote on her blog about an event she took part in.",
  };

  const blogContent: BlogContentItem[] = [
    { type: "greeting", content: "Hi!" },
    {
      type: "paragraph",
      content:
        "I participated in a photo rally for foreign tourists with my friends: See the rules on the right. As photo rally beginners, we decided to aim for only five of the checkpoints. In three minutes, we arrived at our first target, the city museum. In quick succession, we made the second, third, and fourth targets. Things were going smoothly!",
    },
    {
      type: "paragraph",
      content:
        "But, on the way to the last target, the statue of a famous samurai from the city, we got lost. Time was running out and my feet were hurting from walking for over two hours. We stopped a man with a pet monkey for help, but neither our Japanese nor his English were good enough. After he'd explained the way using gestures, we realised we wouldn't have enough time to get there and would have to give up.",
    },
    {
      type: "paragraph",
      content:
        "We took a photo with him and said goodbye. When we got back to Sakura City Hall, we were surprised to hear that the winning team had completed 19 checkpoints. One of our photos was selected to be on the event website (click ",
      link: "here",
      endContent:
        '). It reminds me of the man\'s warmth and kindness: our own "gold medal."',
    },
  ];

  const rules: Rules = {
    title: "Sakura City Photo Rally Rules",
    items: [
      {
        text: "Each group can only use the",
        emphasis: "camera and paper map",
        afterEmphasis: ", both provided by us",
      },
      {
        text: "Take as many photos of",
        emphasis: "25 checkpoints",
        afterEmphasis: "(designated sightseeing spots) as possible",
      },
      {
        text: "",
        emphasis: "3-hour",
        afterEmphasis: "time limit",
      },
      {
        text: "Photos must include",
        emphasis: "all 3 team members",
        afterEmphasis: "",
      },
      {
        text: "All members must move",
        emphasis: "together",
        afterEmphasis: "",
      },
      {
        text: "",
        emphasis: "No",
        afterEmphasis: "mobile phones",
      },
      {
        text: "",
        emphasis: "No",
        afterEmphasis: "transport",
      },
    ],
  };

  const Ex24_3A = (item: BlogContentItem, index: number): JSX.Element => {
    if (item.type === "greeting") {
      return (
        <p key={index} className="mb-4">
          {item.content}
        </p>
      );
    }

    if (item.link) {
      return (
        <p key={index} className="mb-4">
          {item.content}
          <span className="underline">{item.link}</span>
          {item.endContent}
        </p>
      );
    }

    return (
      <p key={index} className="mb-4">
        {item.content}
      </p>
    );
  };

  const renderRuleItem = (rule: RuleItem, index: number): JSX.Element => (
    <li key={index} className="flex items-start">
      <span className="mr-2">•</span>
      <span>
        {rule.text && <span>{rule.text} </span>}
        <span className="font-medium">{rule.emphasis}</span>
        {rule.afterEmphasis && <span>{rule.afterEmphasis}</span>}
      </span>
    </li>
  );
  const questions = [
    {
      number: "1",
      prompt: "You click the link in the blog. Which picture appears?",
      options: [
        "/images/Ex24-3A-1.jpg",
        "/images/Ex24-3A-2.jpg",
        "/images/Ex24-3A-3.jpg",
        "/images/Ex24-3A-4.jpg",
      ],
      answer: 1,
    },
    {
      number: "2",
      prompt:
        "You are asked to comment on Susan's blog. Which would be an appropriate comment to her?",
      options: [
        "I want to see a picture of you wearing the gold medal!",
        "You did your best. Come back to Japan and try again!",
        "You reached 19 checkpoints in three hours? Really? Wow!!",
        "Your photo is great! Did you upgrade your phone?",
      ],
      answer: 1,
    },
  ];
  const question: QandA[] = [
    {
      questionId: "3A-1",
      qa: [
        {
          questionNumber: "16",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[16] 本文第6文～第11文 「But, on the way to the last target, the statue of a famous samurai from the city, we got lost. Time was running out and my feet were hurting from walking for over two hours. We stopped a man with a pet monkey for help, but neither our Japanese nor his English were good enough. After he&apos;d explained the way using gestures, we realised we wouldn&apos;t have enough time to get there and would have to give up. We took a photo with him and said goodbye. When we got back to Sakura City Hall, we were surprised to hear that the winning team had completed 19 checkpoints.」 ",
        "（しかし，最後の目標である有名な侍の像に向かう途中で私たちは道に迷った。時間切れになりつつあり，2時間以上歩いたので私の足は痛くなった。ペットの猿を連れた男性を呼び止めて助けを求めたが，私たちの日本語も彼の英語も十分上手ではなかった。彼が身振り手振りを交えて道を説明してくれた後，私たちは，そこにたどり着くには時間が足りず，あきらめるしかないと悟った。私たちは彼と写真を撮って別れた。私たちがサクラ市役所に到着した時，勝利したチームは19のチェックポイントを回ったと聞いて私たちは驚いた）という内容と， ",
        "本文最終文の 「It reminds me of the man&apos;s warmth and kindness: our own &quot;gold medal.&quot;」（それが私に思い出させてくれるのは，その男性の暖かさと優しさだ。",
        "それが私たち自身の「金メダル」だ）という内容から，その写真には猿を連れた男性が写っており，かつ，市役所に着いたのは男性と別れた後であることから，②が正解だとわかる。",
      ],
    },
    {
      questionId: "3A-2",
      qa: [
        {
          questionNumber: "17",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[17] （※推測問題）本文第11文から，自分のチームは勝利していないことがわかるため，①の「金メダルをつけている写真を見たい」は誤り。同じく第11文から，19チーム回ったのは自分たちではなく別のチームのことだとわかるので，",
        "③「3時間で19のチェックポイントに着いたの？」も誤り。④を選んだ受験生もいたかもしれないが，ルールの下から二つ目に &quot;No mobile phones&quot;（携帯電話は無し）とあるので，④の「あなたの写真は素晴らしい！電話をアップグレードしたの？」も誤りである。 ",
        "よって，消去法で②「あなたはベストを尽くしたよ。日本に戻ってもう一度挑戦して！」が正解となる。なお，筆者が日本にいないことについては，冒頭の説明文 ",
        "Susan, your English ALT's sister, visited your class last month. Now back in the UK, she wrote on her blog about an event she took part in.",
        "（あなたの英語のALTの妹であるスーザンは先月あなたのクラスを訪れた。今はイギリスに戻ったが，彼女はブログに自分が参加したイベントについて書いた）とあることが根拠となる。このように，設問の前書きの部分にもヒントが書かれていることがあるので，注意すること。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      {/* 問題番号とシチュエーション */}
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第３問 A"}</h1>
          <span className="text-gray-600">(配点 {6})</span>
        </div>
        <Saiten2
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>
      <div className="mb-4">
        <p className="text-base">
          {headerText.title} {headerText.description}
        </p>
      </div>

      <Card>
        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            {blogContent.map((item, index) => Ex24_3A(item, index))}
          </div>

          <div className="w-full md:w-72">
            <div className="border border-gray-200 p-4 rounded">
              <h2 className="font-bold mb-4">{rules.title}</h2>
              <ul className="space-y-3">
                {rules.items.map((rule, index) => renderRuleItem(rule, index))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Questions */}
      <div className={cn(exQuestionFormat, "mt-6")}>
        {questions.map((question, index) => (
          <div
            key={index}
            className={cn(
              "mb-4",
              showResults && qaFormat(qa, "3A-" + (index + 1))
            )}
          >
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <span className="whitespace-nowrap mr-2">
                問{question.number}
              </span>
              <span className="text-left">{question.prompt}</span>
              {renderSelect(String(index + 16), 4, answers, setAnswers)}
              {showResults && (
                <Explain qa={qa} questionId={"3A-" + String(index + 1)} />
              )}
            </div>
            {index === 1 ? (
              <ol className="list-none space-y-2 ml-6">
                {question.options.map((option, optIndex) => (
                  <li key={optIndex} className="flex items-start space-x-2">
                    <span className="w-6 text-right">{"①②③④"[optIndex]}</span>
                    <span>{option}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex flex-col items-center">
                    {"①②③④"[optIndex]}
                    <Image
                      src={option}
                      alt={"image" + (optIndex + 1)}
                      width={300}
                      height={200}
                      className="w-[300px] h-auto rounded"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ex24_3A;
