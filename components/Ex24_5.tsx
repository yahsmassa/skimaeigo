"use client";

import { Answers } from "@/lib/types";
import { cn, exPageFormat } from "@/lib/util";
import React, { useState } from "react";
import { Saiten } from "./Saiten";
import Image from "next/image";

const Ex24_5 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});

  const questionsData = {
    questions: [
      {
        id: 1,
        text: "Choose four out of the five events (⓪-⑤) and rearrange them in the order they happened.",
        boxes: ["30", "31", "32", "33"],
        options: [
          {
            number: "1",
            text: "Kasumi becomes vice-president of her company.",
          },
          { number: "2", text: "Kasumi gets in touch with Takuya." },
          { number: "3", text: "Maki gets her university degree." },
          { number: "4", text: "Maki starts working in her family business." },
          {
            number: "5",
            text: "Takuya is inspired to start his own business.",
          },
        ],
      },
      {
        id: 2,
        text: "Choose the best option for",
        numberBox: "34",
        options: [
          { number: "1", text: "early 30s" },
          { number: "2", text: "late 30s" },
          { number: "3", text: "early 40s" },
          { number: "4", text: "late 40s" },
        ],
      },
      {
        id: 3,
        text: "Choose the best options for",
        numberBoxes: ["35", "36"],
        options: [
          { number: "1", text: "made the product known to people" },
          { number: "2", text: "proposed a successful business idea" },
          { number: "3", text: "purchased equipment for the business" },
          { number: "4", text: "suggested moving to a bigger city" },
          { number: "5", text: "taught the necessary skills for success" },
        ],
      },
      {
        id: 4,
        text: "Choose the best option for",
        numberBox: "37",
        options: [
          { number: "1", text: "do not want to discuss their success" },
          { number: "2", text: "have not spoken in a long time" },
          { number: "3", text: "regret not appreciating their friend more" },
          { number: "4", text: "think Maki was envious of their achievements" },
        ],
      },
      {
        id: 5,
        text: "Choose the best option for",
        numberBox: "38",
        options: [
          { number: "1", text: "like to try different things" },
          { number: "2", text: "recognize her own talent" },
          { number: "3", text: "understand the ability she lacks" },
          { number: "4", text: "want to pursue her dreams" },
        ],
      },
    ],
  };
  const handleChange = (questionNumber: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`question${questionNumber}`]: value,
    }));
  };

  const correctAnswerArray = [4, 5, 1, 2, 2, 1, 2, 3, 2];

  const isCorrect = (questionNumber: string, index: number) => {
    return (
      answers[`question${questionNumber}`] === String(correctAnswerArray[index])
    );
  };

  const renderSelect = (number: string, count: number, index: number) => (
    <div className="mx-2 flex flex-row items-center whitespace-nowrap">
      <div
        className={cn(
          "font-medium mb-0.5 mr-2",
          showResults &&
            (isCorrect(number, index) ? "text-green-500" : "text-red-500")
        )}
      >
        [{number}]
      </div>
      <select
        value={answers[`question${number}`] || ""}
        onChange={(e) => handleChange(number, e.target.value)}
        className="w-20 h-8 border border-gray-300 rounded-md text-center text-sm"
      >
        <option value="">選択</option>
        {Array.from({ length: count }, (_, index) => (
          <option key={index + 1} value={String(index + 1)}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第５問"}</h1>
          <span className="text-gray-600">(配点 {15})</span>
        </div>
        <Saiten
          points={15}
          startQuestionNumber={30}
          correctAnswerArray={correctAnswerArray}
          answers={answers}
          setAnswers={setAnswers}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>
      {/* Introduction text - double spaced */}
      <div className="mb-8 leading-loose">
        <p>
          You are in an English discussion group, and it is your turn to
          introduce a story.
        </p>
        <p>
          You have found a story in an English language magazine in Japan. You
          are preparing notes for your presentation.
        </p>
      </div>

      {/* Story container */}
      <div className="border border-gray-300 p-2 sm:p-8">
        {/* Story title */}
        <h1 className="text-center text-xl mb-6">Maki&apos;s Kitchen</h1>

        {/* First paragraph */}
        <div className="mb-6 leading-relaxed">
          <p className="mb-4">
            <span className="italic">&quot;Irasshai-mase,&quot;</span> said Maki
            as two customers entered her restaurant, Maki&apos;s Kitchen. Maki
            had joined her family business at the age of 19 when her father
            became ill. After he recovered, Maki decided to continue.
            Eventually, Maki&apos;s parents retired and she became the owner.
            Maki had many regular customers who came not only for the delicious
            food, but also to sit at the counter and talk to her. Although her
            business was doing very well, Maki occasionally daydreamed about
            doing something different.
          </p>
          <p className="mb-4">
            &quot;Can we sit at the counter?&quot; she heard. It was her old
            friends, Takuya and Kasumi. A phone call a few weeks earlier from
            Kasumi to Takuya had given them the idea to visit Maki and surprise
            her.
          </p>
        </div>

        {/* Diamond separator */}
        <div className="flex justify-center my-6">
          <div className="text-black">♦♦♦♦♦</div>
        </div>

        {/* Phone conversation section */}
        <div className="mb-6 leading-relaxed">
          <p className="mb-4">
            Takuya&apos;s phone vibrated, and he saw a familiar name, Kasumi.
          </p>
          <p className="mb-2">&quot;Kasumi!&quot;</p>
          <p className="mb-2">
            &quot;Hi Takuya, I saw you in the newspaper. Congratulations!&quot;
          </p>
          <p className="mb-2">
            &quot;Thanks. Hey, you weren&apos;t at our 20th high school reunion
            last month.&quot;
          </p>
          <p className="mb-4">
            &quot;No, I couldn&apos;t make it. I can&apos;t believe it&apos;s
            been 20 years since we graduated. Actually, I was calling to ask if
            you&apos;ve seen Maki recently.&quot;
          </p>
        </div>

        {/* Diamond separator */}
        <div className="flex justify-center my-6">
          <div className="text-black">♦♦♦♦♦</div>
        </div>

        {/* Final paragraph */}
        <div className="leading-relaxed">
          <p>
            Takuya&apos;s family had moved to Kawanaka Town shortly before he
            started high school. He joined the drama club, where he met Maki and
            Kasumi. The three became inseparable. After graduation, Takuya left
            Kawanaka to become an actor, while Maki and Kasumi remained. Maki
            had decided she wanted to study at university and enrolled in a
            preparatory school. Kasumi, on the other hand, started her career.
            Takuya tried out for various acting roles but was constantly
            rejected; eventually, he quit.
          </p>
        </div>
        <p className="my-4">
          Exactly one year after graduation, Takuya returned to Kawanaka with
          his dreams destroyed. He called Maki, who offered her sympathy. He was
          surprised to learn that Maki had abandoned her plan to attend
          university because she had to manage her family&apos;s restaurant. Her
          first day of work had been the day he called. For some reason, Takuya
          could not resist giving Maki some advice.
        </p>

        <p className="mb-4">
          &quot;Maki, I&apos;ve always thought your family&apos;s restaurant
          should change the coffee it serves. I think people in Kawanaka want a
          bolder flavor. I&apos;d be happy to recommend a different brand,&quot;
          he said.
        </p>

        <p className="mb-4">
          &quot;Takuya, you really know your coffee. Hey, I was walking by Café
          Kawanaka and saw a help-wanted sign. You should apply!&quot; Maki
          replied.
        </p>

        <p className="mb-4">
          Takuya was hired by Café Kawanaka and became fascinated by the science
          of coffee making. On the one-year anniversary of his employment,
          Takuya was talking to Maki at her restaurant.
        </p>

        <div className="mb-4">
          <p className="mb-2">
            &quot;Maki,&quot; he said, &quot;do you know what my dream is?&quot;
          </p>
          <p className="mb-2">
            &quot;It must have something to do with coffee.&quot;
          </p>
          <p className="mb-2">
            &quot;That&apos;s right! It&apos;s to have my own coffee
            business.&quot;
          </p>
          <p className="mb-4">
            &quot;I can&apos;t imagine a better person for it. What are you
            waiting for?&quot;
          </p>
        </div>

        <p className="mb-4">
          Maki&apos;s encouragement inspired Takuya. He quit his job, purchased
          a coffee bean roaster, and began roasting beans. Maki had a sign in
          her restaurant saying, &quot;We proudly serve Takuya&apos;s
          Coffee,&quot; and this publicity helped the coffee gain popularity in
          Kawanaka. Takuya started making good money selling his beans.
          Eventually, he opened his own café and became a successful business
          owner.
        </p>

        {/* Diamond separator */}
        <div className="flex justify-center my-6">
          <div className="text-black">♦♦♦♦♦</div>
        </div>

        <p className="mb-4">
          Kasumi was reading the newspaper when she saw the headline:{" "}
          <span className="italic">
            TAKUYA&apos;S CAFÉ ATTRACTING TOURISTS TO KAWANAKA TOWN
          </span>
          . &quot;Who would have thought that Takuya would be so
          successful?&quot; Kasumi thought to herself as she reflected on her
          past.
        </p>

        <p className="mb-4">
          In the high school drama club, Kasumi&apos;s duty was to put make-up
          on the actors. No one could do it better than her. Maki noticed this
          and saw that a cosmetics company called Beautella was advertising for
          salespeople. She encouraged Kasumi to apply, and, after graduation,
          she became an employee of Beautella.
        </p>

        <p className="mb-4">
          The work was tough; Kasumi went door to door selling cosmetics. On bad
          days, she would call Maki, who would lift her spirits. One day, Maki
          had an idea. &quot;Doesn&apos;t Beautella do make-up workshops? I
          think you are more suited for that. You can show people how to use the
          make-up. They&apos;ll love the way they look and buy lots of
          cosmetics!&quot;
        </p>

        <p className="mb-4">
          Kasumi&apos;s company agreed to let her do workshops, and they were a
          hit! Kasumi&apos;s sales were so good that eight months out of high
          school, she had been promoted, moving to the big city of Ishijima.
          Since then, she had steadily climbed her way up the company ladder
          until she had been named vice-president of Beautella this year.
        </p>

        <p className="mb-4">
          &quot;I wouldn&apos;t be vice-president now without Maki,&quot; she
          thought, &quot;she helped me when I was struggling, but I was too
          absorbed with my work in Ishijima to give her support when she had to
          quit her preparatory school.&quot; Glancing back to the article, she
          decided to call Takuya.
        </p>

        {/* Diamond separator */}
        <div className="flex justify-center my-6">
          <div className="text-black">♦♦♦♦♦</div>
        </div>

        <p className="mb-4">
          &quot;Maki wasn&apos;t at the reunion. I haven&apos;t seen her in
          ages,&quot; said Takuya.
        </p>

        <p className="mb-4">
          &quot;Same here. It&apos;s a pity. Where would we be without
          her?&quot; asked Kasumi.
        </p>

        <p className="mb-4">
          The conversation became silent, as they wordlessly communicated their
          guilt. Then, Kasumi had an idea.
        </p>

        {/* Diamond separator */}
        <div className="flex justify-center my-6">
          <div className="text-black">♦♦♦♦♦</div>
        </div>

        <div className="mb-4">
          <p className="mb-2">
            The three friends were talking and laughing when Maki asked,
            &quot;By the way, I&apos;m really happy to see you two, but what
            brings you here?&quot;
          </p>
          <p className="mb-2">&quot;Payback,&quot; said Takuya.</p>
          <p className="mb-2">
            &quot;Have I done something wrong?&quot; asked Maki.
          </p>
          <p className="mb-4">
            &quot;No. The opposite. You understand people incredibly well. You
            can identify others&apos; strengths and show them how to make use of
            them. We&apos;re proof of this. You made us aware of our
            gifts,&quot; said Takuya.
          </p>
          <p className="mb-2">
            &quot;The irony is that you couldn&apos;t do the same for
            yourself,&quot; added Kasumi.
          </p>
          <p className="mb-2">
            &quot;I think Ishijima University would be ideal for you. It offers
            a degree program in counseling that&apos;s designed for people with
            jobs,&quot; said Takuya.
          </p>
          <p className="mb-4">
            &quot;You&apos;d have to go there a few times a month, but you could
            stay with me. Also, Takuya can help you find staff for your
            restaurant,&quot; said Kasumi.
          </p>
        </div>

        <p className="mb-4">
          Maki closed her eyes and imagined Kawanaka having both
          &quot;Maki&apos;s Kitchen&quot; and &quot;Maki&apos;s
          Counseling.&quot; She liked that idea.
        </p>
      </div>
      {/* 画像部分 */}
      <div className="flex justify-center my-4">
        <Image
          src="/images/Ex24-5-1.jpg"
          alt="Ex24-5-1"
          width={800}
          height={600}
          className="w-full"
        />
      </div>
      {/* 回答部分 */}
      <div className="w-full px-4 mx-auto p-4">
        {questionsData.questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-8">
            <div className="flex flex-wrap items-baseline mb-4">
              <span className="font-medium mr-2">問{question.id}</span>
              <span>{question.text}</span>
              {/* 30,31,32,33 は 0,1,2,3 に対応 */}
              {question.boxes && (
                <div className="flex flex-wrap items-center justify-start mb-4 max-w-[1000px] overflow-x-auto">
                  {question.boxes.map((box, index) => (
                    <React.Fragment key={index}>
                      {renderSelect(box, 6, index)}
                      {index < question.boxes.length - 1 && (
                        <span className="mx-1">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
              {/* // 34,37,38 */}
              {question.numberBox &&
                question.numberBox === "34" &&
                renderSelect("34", 4, 4)}
              {question.numberBox &&
                question.numberBox === "37" &&
                renderSelect("37", 4, 7)}
              {question.numberBox &&
                question.numberBox === "38" &&
                renderSelect("38", 4, 8)}
              {question.numberBoxes?.map((num, index) => (
                // 35,36 は 5,6 に対応
                <React.Fragment key={index}>
                  {renderSelect(num, 5, 5 + index)}
                  {index === 0 && <span className="mx-1">and</span>}
                </React.Fragment>
              ))}
              <span>.</span>
            </div>

            <div className="space-y-2 pl-6">
              {question.options.map((option, index) => (
                <div key={option.number} className="flex items-baseline">
                  <span className="mr-4">{"①②③④⑤⑥"[index]} </span>
                  <span className="text-gray-800">{option.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ex24_5;
