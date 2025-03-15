"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
const Ex24_4 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "4-1",
      qa: [
        {
          questionNumber: "24",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は③「教室の環境を計画する際に従うべきモデル」、（SINとはStimulation（刺激），Individualization（個性化），Naturalness（自然さ）の頭文字をとったもので，教室をデザインする際に参考になるフレームワークである）から，",
      ],
    },
    {
      questionId: "4-2",
      qa: [
        {
          questionNumber: "25",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は ④「掲示されるものを減らす」（さらに，壁にたくさんのものが掲示されていると，視覚的に気が散ってしまう可能性がある）から，",
      ],
    },
    {
      questionId: "4-3",
      qa: [
        {
          questionNumber: "26",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 4,
      explanation: [
        "正解は ④「ソファを壁の近くに置く」、光と温度の話しかなされていないため，",
      ],
    },
    {
      questionId: "4-4",
      qa: [
        {
          questionNumber: "27",
          answer: 0,
        },
        {
          questionNumber: "28",
          answer: 0,
        },
      ],
      rightAnswerString: "54",
      answerString: "",
      isSeparate: true,
      isCorrect: false,
      points: 3,
      explanation: [
        "[27]は⑤「～で昼寝をする」が正解。グラフの解答数が最も多い Sleeping という項目からわかる",
        "[28]は④が正解。（ソファはみんな気に入っていて，寝心地がいいので，よく寝るときに使っています！）に述べられている",
      ],
    },
    {
      questionId: "4-5",
      qa: [
        {
          questionNumber: "29",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解は③。（また，英語のクラブなのに，日本語を話すメンバーが多い）から，",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  const articleData = {
    title: "What Makes a Good Classroom?",
    author: {
      name: "Diana Bashworth",
      role: "writer at Trends in Education",
    },
    introduction:
      "As many schools work to improve their classrooms, it is important to have some ideas for making design decisions. SIN, which stands for Stimulation, Individualization, and Naturalness, is a framework that might be helpful to consider when designing classrooms.",
    framework: {
      name: "SIN",
      components: [
        {
          name: "Stimulation",
          aspects: ["color", "complexity"],
          description:
            "The first, Stimulation, has two aspects: color and complexity. This has to do with the ceiling, floor, walls, and interior furnishings.",
          guidelines: [
            "A classroom that lacks colors might be uninteresting",
            "A classroom should not be too colorful",
            "A bright color could be used on one wall, on the floor, window coverings, or furniture",
            "It can be visually distracting to have too many things displayed on walls",
            "20 to 30 percent of wall space remain free",
          ],
        },
        {
          name: "Individualization",
          aspects: ["ownership", "flexibility"],
          description:
            "The next item in the framework is Individualization, which includes two considerations: ownership and flexibility.",
          details: {
            ownership: {
              description:
                "Ownership refers to whether the classroom feels personalized",
              examples: [
                "having chairs and desks that are suitable for student sizes and ages",
                "providing storage space",
                "areas for displaying student works or projects",
              ],
            },
            flexibility: {
              description:
                "Flexibility is about having a classroom that allows for different kinds of activities",
            },
          },
        },
        {
          name: "Naturalness",
          aspects: ["light", "temperature"],
          description:
            "Naturalness relates to the quality and quantity of light, both natural and artificial, and the temperature of the classroom.",
          concerns: [
            "Too much natural light may make screens and boards difficult to see",
            "students may have difficulty reading or writing if there is a lack of light",
            "hot summer classrooms do not promote effective study",
          ],
          recommendation:
            "Schools should install systems allowing for the adjustment of both light and temperature.",
        },
      ],
    },
    conclusion:
      "While Naturalness is more familiar to us, and therefore often considered the priority, the other components are equally important. Hopefully, these ideas can guide your project to a successful end.",
  };
  const questionData = {
    questionNumber: "第4問",
    points: "(配点 16)",
    instruction:
      "Your college English club's room has several problems and you want to redesign it. Based on the following article and the results of a questionnaire given to members, you make a handout for a group discussion.",
  };
  const questionnaireData = {
    title: "Results of the Questionnaire",
    questions: {
      q1: {
        question:
          "Q1: Choose any items that match your use of the English club's room.",
        totalMembers: 38,
        // グラフはimgタグで後ほど追加
      },
      q2: {
        question:
          "Q2: What do you think about the current English club's room?",
        mainComments: "Main comments:",
        comments: [
          {
            student: "Student 1 (S 1)",
            text: "I can't see the projector screen and whiteboard well on a sunny day. Also, there's no way to control the temperature.",
          },
          {
            student: "S 2",
            text: "By the windows, the sunlight makes it hard to read. The other side of the room doesn't get enough light. Also, the books are disorganized and the walls are covered with posters. It makes me feel uncomfortable.",
          },
          {
            student: "S 3",
            text: "The chairs don't really fit me and the desks are hard to move when we work in small groups. Also, lots of members speak Japanese, even though it's an English club.",
          },
          {
            student: "S 4",
            text: "The pictures of foreign countries on the walls make me want to speak English. Everyone likes the sofas — they are so comfortable that we often use the room for sleeping!",
          },
          {
            student: "S 5",
            text: "The room is so far away, so I hardly ever go there! Aren't there other rooms available?",
          },
          {
            student: "S 6",
            text: "There's so much gray in the room. I don't like it. But it's good that there are plenty of everyday English phrases on the walls!",
          },
        ],
      },
    },
  };
  const handoutData = {
    title: "Room Improvement Project",
    sections: [
      {
        title: "SIN Framework",
        items: [
          {
            text: "What it is",
            numberBox: "24",
          },
          {
            text: "SIN = Stimulation, Individualization, Naturalness",
          },
        ],
      },
      {
        title: "Design Recommendations Based on SIN and Questionnaire Results",
        subsections: [
          {
            title: "Stimulation",
            content: {
              text: "Cover the floor with a colorful rug and",
              numberBox: "25",
            },
          },
          {
            title: "Individualization",
            content: {
              text: "Replace room furniture.",
              note: "(tables with wheels → easy to move around)",
            },
          },
          {
            title: "Naturalness",
            content: {
              numberBox: "26",
              list: [
                "Install blinds on windows.",
                "Make temperature control possible.",
                "Move projector screen away from windows.",
                "Place sofas near walls.",
                "Put floor lamp in darker corner.",
              ],
            },
          },
        ],
      },
      {
        title: "Other Issues to Discuss",
        items: [
          {
            text: "The majority of members",
            numberBoxes: ["27", "28"],
            additionalText:
              "the room as 's comment mentioned. How can we solve this?",
          },
          {
            text: "Based on both the graph and",
            numberBox: "29",
            additionalText:
              "'s comment, should we set a language rule in the room to motivate members to speak English more?",
          },
          {
            text: "S 5 doesn't like the location, but we can't change the room, so let's think about how to encourage members to visit more often.",
          },
        ],
      },
    ],
  };
  const questionsData = {
    questions: [
      {
        id: 1,
        text: "Choose the best option for",
        numberBox: "24",
        options: [
          {
            number: "1",
            text: "A guide to show which colors are appropriate to use in classrooms",
          },
          {
            number: "2",
            text: "A method to prioritize the needs of students and teachers in classrooms",
          },
          {
            number: "3",
            text: "A model to follow when planning classroom environments",
          },
          {
            number: "4",
            text: "A system to understand how classrooms influence students' performance",
          },
        ],
      },
      {
        id: 2,
        text: "Choose the best option for",
        numberBox: "25",
        options: [
          {
            number: "1",
            text: "move the screen to a better place",
          },
          {
            number: "2",
            text: "paint each wall a different color",
          },
          {
            number: "3",
            text: "put books on shelves",
          },
          {
            number: "4",
            text: "reduce displayed items",
          },
        ],
      },
      {
        id: 3,
        text: "You are checking the handout. You notice an error in the recommendations under Naturalness. Which of the following should you",
        numberBox: "26",
        emphasizedText: "remove",
        options: [
          {
            number: "1",
            text: "A",
          },
          {
            number: "2",
            text: "B",
          },
          {
            number: "3",
            text: "C",
          },
          {
            number: "4",
            text: "D",
          },
          {
            number: "5",
            text: "E",
          },
        ],
      },
      {
        id: 4,
        text: "Choose the best options for",
        numberBoxes: ["27", "28"],
        subgroups: [
          {
            numberBox: "27",
            options: [
              {
                number: "1",
                text: "borrow books from",
              },
              {
                number: "2",
                text: "can't easily get to",
              },
              {
                number: "3",
                text: "don't use Japanese in",
              },
              {
                number: "4",
                text: "feel anxious in",
              },
              {
                number: "5",
                text: "take naps in",
              },
            ],
          },
          {
            numberBox: "28",
            options: [
              {
                number: "1",
                text: "S 1",
              },
              {
                number: "2",
                text: "S 2",
              },
              {
                number: "3",
                text: "S 3",
              },
              {
                number: "4",
                text: "S 4",
              },
              {
                number: "5",
                text: "S 5",
              },
              {
                number: "6",
                text: "S 6",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        text: "Choose the best option for",
        numberBox: "29",
        options: [
          {
            number: "1",
            text: "S 1",
          },
          {
            number: "2",
            text: "S 2",
          },
          {
            number: "3",
            text: "S 3",
          },
          {
            number: "4",
            text: "S 4",
          },
          {
            number: "5",
            text: "S 5",
          },
          {
            number: "6",
            text: "S 6",
          },
        ],
      },
    ],
  };
  const NumberBox = ({ number }: { number: string }) => (
    <span className="text-center inline-block align-middle border-2 border-gray-400 w-12 h-8 mx-1">
      {number}
    </span>
  );

  interface Content {
    text?: string;
    numberBox?: string;
    note?: string;
    list?: string[];
  }

  const renderContent = (content: Content) => {
    if (content.list) {
      return (
        <div className="pl-4 space-y-1">
          {content.list.map((item: string, index: number) => (
            <p key={index}>
              {String.fromCharCode(65 + index)}. {item}
              {index === 0 && content.numberBox && (
                <NumberBox number={content.numberBox} />
              )}
            </p>
          ))}
        </div>
      );
    }

    return (
      <p className="pl-4">
        {content.text}
        {content.numberBox && <NumberBox number={content.numberBox} />}
        {content.note && <span className="text-gray-600">{content.note}</span>}
      </p>
    );
  };

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第４問"}</h1>
          <span className="text-gray-600">(配点 {16})</span>
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
      {/* What Makes a Good Classroom? */}
      <p className="mb-6">
        {questionData.instruction} {Kaisetsu(showResults, "24-4-1")}
      </p>
      <div className="p-6 border-2 border-gray-300 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-3">{articleData.title}</h2>
          <p className="italic">
            {articleData.author.name}, {articleData.author.role}
          </p>
        </div>

        <div className="space-y-4">
          <p>
            {articleData.introduction} {Kaisetsu(showResults, "24-4-2")}
          </p>

          {articleData.framework.components.map((component, idx) => (
            <div key={component.name} className="mb-4">
              <p>
                {component.description}
                {component.guidelines && (
                  <span> For example, {component.guidelines.join(". ")}</span>
                )}
                {idx === 0 && Kaisetsu(showResults, "24-4-3")}
              </p>

              {component.details && (
                <div className="mt-2">
                  {Object.entries(component.details).map(
                    ([key, value], index) => (
                      <div key={key}>
                        <p>
                          {value.description}
                          {"examples" in value &&
                            value.examples.length > 0 &&
                            `. Examples of this include ${value.examples.join(
                              ", and "
                            )}`}
                          . {index === 1 && Kaisetsu(showResults, "24-4-4")}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}

              {component.concerns && (
                <div className="mt-2">
                  <p>
                    {component.concerns.join(". ")}. {component.recommendation}
                    {Kaisetsu(showResults, "24-4-5")}
                  </p>
                </div>
              )}
            </div>
          ))}

          <p>
            {articleData.conclusion} {Kaisetsu(showResults, "24-4-6")}
          </p>
        </div>
      </div>
      {/* Results of the Questionnaire */}
      <div className="mt-8 border-2 border-gray-300 rounded-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-bold">{questionnaireData.title}</h2>
          <Image
            src="/images/Ex24-4-1.jpg"
            alt="Rabbit illustration"
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </div>

        {/* Q1 Section */}
        <div className="mb-8">
          <h3 className="font-medium mb-4">
            {questionnaireData.questions.q1.question}
          </h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <Image
              src="/images/Ex24-4-2.jpg"
              alt="Bar graph showing club room usage"
              width={800}
              height={600}
              className="w-full"
            />
          </div>
        </div>

        {/* Q2 Section */}
        <div>
          <h3 className="font-medium mb-2">
            {questionnaireData.questions.q2.question}
          </h3>
          <p className="font-medium mb-4">
            {questionnaireData.questions.q2.mainComments}
          </p>
          <div className="space-y-4">
            {questionnaireData.questions.q2.comments.map((comment, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium">{comment.student}:</span>{" "}
                <span>
                  {comment.text}{" "}
                  {index === 2 && Kaisetsu(showResults, "24-4-7")}
                  {index === 5 && Kaisetsu(showResults, "24-4-8")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Handout */}
      <h2 className="text-lg mb-6">Your discussion handout:</h2>

      <div className="border-2 border-gray-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-center mb-6">
          {handoutData.title}
        </h3>

        {handoutData.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h4 className="font-bold mb-4">■ {section.title}</h4>

            {section.items && (
              <div className="space-y-2 pl-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="whitespace-normal">
                    - {item.text}
                    {item.numberBox && <NumberBox number={item.numberBox} />}
                    {"numberBoxes" in item &&
                      item.numberBoxes?.map((num, numIndex) => (
                        <React.Fragment key={numIndex}>
                          <NumberBox number={num} />
                          {numIndex === 0 &&
                            item.text.includes("majority") &&
                            "the room as"}
                        </React.Fragment>
                      ))}
                    {"additionalText" in item && item.additionalText}
                  </div>
                ))}
              </div>
            )}

            {section.subsections && (
              <div className="space-y-4 pl-4">
                {section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    <p>- {subsection.title}:</p>
                    {renderContent(subsection.content)}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* ここから解答欄 */}
      <div className="max-w-3xl p-4 space-y-8">
        {/* <div className="max-w-3xl mx-auto p-4 space-y-8"> */}
        {questionsData.questions.map((question, index) => (
          <div
            key={index}
            className={cn(
              "mb-4",
              showResults && qaFormat(qa, "4-" + question.id)
            )}
          >
            <div className="flex flex-wrap items-baseline mb-4">
              <span className="font-medium mr-2 w-7">問{question.id}</span>
              <span>
                {question.text}
                {question.emphasizedText && (
                  <strong className="ml-1 font-medium underline">
                    {question.emphasizedText}
                  </strong>
                )}
              </span>
              {/* 24,25,26,29 は 0,1,2,5 に対応 */}
              {question.numberBox &&
                renderSelect(
                  question.numberBox || "",
                  question.numberBox === "24" || question.numberBox === "25"
                    ? 4
                    : 5,
                  answers,
                  setAnswers
                )}
              {question.numberBox && showResults && (
                <Explain qa={qa} questionId={"4-" + question.id} />
              )}
              {/* 27,28 は 3,4 に対応 */}
              {question.numberBoxes?.map((num, index) => (
                <React.Fragment key={index}>
                  {renderSelect(
                    num || "",
                    num === "28" ? 6 : 5,
                    answers,
                    setAnswers
                  )}
                  {index === 0 && <span className="mx-1">and</span>}
                </React.Fragment>
              ))}
              {question.numberBoxes && showResults && (
                <Explain qa={qa} questionId={"4-" + question.id} />
              )}
            </div>

            {question.subgroups ? (
              question.subgroups.map((subgroup, index) => (
                <div key={index} className="space-y-3 pl-6">
                  <div className="mb-2 justify-start">
                    <NumberBox number={subgroup.numberBox} />
                  </div>
                  {subgroup.options.map((option, index) => (
                    <div key={option.number} className="flex items-baseline">
                      <span className="mr-4">{"①②③④⑤⑥"[index]}</span>
                      <span className="text-gray-800">{option.text}</span>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <div className="space-y-3 pl-6">
                {question.options.map((option, index) => (
                  <div key={option.number} className="flex items-baseline">
                    <span className="mr-4">{"①②③④⑤⑥"[index]}</span>
                    <span className="text-gray-800">{option.text}</span>
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

export default Ex24_4;
