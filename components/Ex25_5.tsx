"use client";
import Image from "next/image";
import { Paperclip } from "lucide-react";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex25_5 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "5-1",
      qa: [
        {
          questionNumber: "18",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[18] 冒頭の設定説明部分",
        "You are an exchange student in the US. As part of your university&apos;s community volunteer program, you will help organize a special conference for local businesses. You wrote this email to the professor in charge and received a reply.",
        "（あなたはアメリカの交換留学生です。大学のコミュニティボランティアプログラムの一環として，地元のビジネス向けに特別な会議を企画するお手伝いをします。あなたは責任者である教授にこのメールを書き，返信を受け取りました）の内容と，1通目のメールの最後にある &quot;This is my first time being on a committee like this, and I am rather anxious, so I would appreciate any advice you have.&quot;（このような委員会に参加するのは初めてなので，少し不安があります。何かアドバイスをいただければ幸いです）という内容から，①「イベント運営経験の不足」が正解。",
      ],
    },
    {
      questionId: "5-2",
      qa: [
        {
          questionNumber: "19",
          answer: 0,
        },
        {
          questionNumber: "20",
          answer: 0,
        },
      ],
      rightAnswerString: "64",
      answerString: "",
      isCorrect: false,
      isSeparate: true,
      points: 4,
      explanation: [
        "[19]・[20] ライアン教授のメール本文第3段落第2文-第4文 ",
        "One presenter is a local businessperson, who will talk about changes she has made in her company. The other presenter is a local chef. She will introduce recipes using locally grown mushrooms.",
        "（1人の講演者は地元のビジネスパーソンで，自身の会社で行った変化について話します。もう1人の講演者は地元のシェフで，地元産のキノコを使ったレシピを紹介します）から，前者は選択肢⑥「伝統的なビジネスモデルの更新」，後者は選択肢④「地元の食材の利点を再発見する」にそれぞれ該当すると考えられる。また，1通目のメールの表の小見出し ",
        " Morning theme: &quot;Changing local traditions&quot;&quot;（午前のテーマ：「地域の伝統を変える」），&quot;Afternoon theme: &quot;Preserving local traditions&quot;&quot;",
        "（午後のテーマ：「地域の伝統を守る」）から，午前のPresentation 2-[19]が⑥，午後のPresentation 4-[20]が④だと判断する。",
      ],
    },
    {
      questionId: "5-3",
      qa: [
        {
          questionNumber: "21",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[21] ライアン教授のメール本文第2段落第5文-第6文 ",
        "Closing the registration seven days before the conference is too short. It doesn&apos;t give us time to prepare materials and send out information.",
        "（登録を会議の7日前に締め切るのは短すぎます。資料を準備して情報を送る時間が足りません）という内容から，①「会議の登録手続き」が正解。",
      ],
    },
    {
      questionId: "5-4",
      qa: [
        {
          questionNumber: "22",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[22] ライアン教授のメール本文第4段落第1文-第4文 ",
        "I have attached a diagram for the debate seating arrangements. You will notice that there needs to be a small desk for the moderator in the center. There should be one table on each side of the moderator, and these tables should face slightly inward. As we have two debaters on each team, use the long tables.",
        "（討論会の座席配置図を添付しました。モデレーター用の小さな机が中央に必要です。その両側にテーブルを1つずつ配置し，これらのテーブルはわずかに内側を向けてください。チームごとに2人の討論者がいるため，長いテーブルを使用してください）という内容から，③が正解。",
      ],
    },
    {
      questionId: "5-5",
      qa: [
        {
          questionNumber: "23",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "[23] 本文でまだ言及されていない（あるいは，変更や改善の余地のある内容）を判断する問題。1通目のメール後半の ",
        "The number of volunteers that can help with the conference isn&apos;t set yet. I&apos;ll send you the list as soon as possible.",
        "（会議を手伝えるボランティアの人数はまだ決まっていません。決まり次第リストをお送りします）という内容から，Cの「利用可能なボランティアの名前」を含まねばならない。また，ライアン教授のメール本文第3段落の最後の2文 ",
        "As for lunch, the cafeteria staff don&apos;t work on weekends, so we need to rethink it. Do you have any suggestions?",
        "（昼食についてですが，カフェテリアのスタッフは週末は働かないため，別の方法を考える必要があります。何か提案はありますか？）という内容から，Bの「食事を提供できる地元のレストラン」を含む。したがって，④が正解。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第５問"}</h1>
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
      {/* Introduction text */}
      <div className="mb-6 text-lg">
        <p className="mb-4">
          You are an exchange student in the US. As part of your
          university&apos;s community volunteer program, you will help organize
          a special conference for local businesses. You wrote this email to the
          professor in charge and received a reply.
        </p>
      </div>

      {/* Email content with border */}
      <div className="border border-gray-400 p-6 bg-white">
        {/* Header */}
        <div className="text-right mb-4">
          <p>October 15, 2024</p>
        </div>

        <div className="mb-6">
          <h2 className="font-bold mb-4">Event Plan</h2>

          <p className="mb-4">Dear Professor Ryan,</p>

          <p className="mb-4">
            I am very happy to be the representative for the volunteer program.
            You mentioned that this event is to promote the local economy. I
            hope to work as a civil servant in the local development division
            after graduation, so this experience is very valuable for me. The
            conference schedule you requested is below.
          </p>
        </div>

        {/* Schedule Date */}
        <p className="mb-4">Saturday, February 15, 2025</p>

        {/* Schedule Table */}
        <div className="border border-gray-300 mb-6">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 p-2 w-32">9:45 a.m.</td>
                <td className="p-2">Opening address: Professor Henry Ryan</td>
              </tr>
              <tr className="border-b border-gray-300 bg-gray-100">
                <td colSpan={2} className="p-2 text-center">
                  Morning theme: &quot;Changing local traditions&quot;
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 p-2">10:00 a.m.</td>
                <td className="p-2">
                  <div>Presentation 1: Martin Faulkner</div>
                  <div>Title: Starting an online business</div>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 p-2">11:00 a.m.</td>
                <td className="p-2">Break</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 p-2">11:15 a.m.</td>
                <td className="p-2">
                  <div>Presentation 2: Jane Brown</div>
                  <div>Title: (undecided)</div>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 p-2">12:15 p.m.</td>
                <td className="p-2">Lunch</td>
              </tr>
              <tr className="border-b border-gray-300 bg-gray-100">
                <td colSpan={2} className="p-2 text-center">
                  Afternoon theme: &quot;Preserving local traditions&quot;
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 p-2">1:00 p.m.</td>
                <td className="p-2">
                  <div>Presentation 3: Sarine Schmidt</div>
                  <div>
                    Title: Handing down craftsmanship to younger generations
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 p-2">2:00 p.m.</td>
                <td className="p-2">Break</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 p-2">2:15 p.m.</td>
                <td className="p-2">
                  <div>Presentation 4: Dianne Moran</div>
                  <div>Title: (undecided)</div>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 p-2">3:15 p.m.</td>
                <td className="p-2">Break</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 p-2">3:30 p.m.</td>
                <td className="p-2">
                  <div>Debate moderator: Tim McGregor</div>
                  <div>Title: Change vs. conservation</div>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 p-2">4:30 p.m.</td>
                <td className="p-2">
                  <div>Closing address: Mayor Lesley Baker</div>
                  <div>Title: (undecided)</div>
                </td>
              </tr>
              <tr>
                <td className="border-r border-gray-300 p-2">4:45 p.m.</td>
                <td className="p-2">End</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Confirmation Points */}
        <p className="mb-2">
          I would like you to confirm the following points:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>The conference will start at 9:45 a.m. and end at 4:45 p.m.</li>
          <li>The registration will close seven days before the event.</li>
          <li>The conference will be held in the Main Hall.</li>
          <li>Participants will park in the university parking area.</li>
        </ul>

        {/* To Be Decided List */}
        <p className="mb-2">
          Below is a list of things that still need to be decided:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Can we use the cafeteria for the lunch time reception?</li>
          <li>
            Have you received the speech titles for the mayor and the two
            remaining presenters?
          </li>
          <li>How will we arrange the tables and chairs for the debate?</li>
        </ul>

        {/* Closing Paragraphs */}
        <p className="mb-4">
          The number of volunteers that can help with the conference isn&apos;t
          set yet. I&apos;ll send you the list as soon as possible.
        </p>

        <p className="mb-4">
          This is my first time being on a committee like this, and I am rather
          anxious, so I would appreciate any advice you have.
        </p>

        <p className="mb-4">
          I&apos;m looking forward to assisting and attending the presentations.
        </p>

        <p className="mb-4">With regards,</p>

        <div>
          <p>Student group representative</p>
          <p>(University Volunteer Program)</p>
        </div>
      </div>
      {/* Professor's Reply Email */}
      <div className="border border-gray-400 p-6 bg-white">
        <div className="text-right mb-4">
          <p>October 17, 2024</p>
        </div>

        <h2 className="font-bold mb-4">Re: Event Plan</h2>

        <p className="mb-4">Dear representative and group members,</p>

        <p className="mb-4">
          Thank you for making the draft. You&apos;ve done a really good job.
        </p>

        <p className="mb-6">
          The time schedule and order of events look good to me. The Main Hall
          worked really well as a venue last time. It has a good capacity for
          this type of event. As a university staff member, I can reserve it for
          free. Closing the registration seven days before the conference is too
          short. It doesn&apos;t give us time to prepare materials and send out
          information. You also mentioned parking. The university parking lot
          will be open for the event, so participants can use it without having
          a permit.
        </p>

        <p className="mb-6">
          With regard to the information you requested, I have received the
          remaining two presentation titles. One presenter is a local
          businessperson, who will talk about changes she has made in her
          company. The other presenter is a local chef. She will introduce
          recipes using locally grown mushrooms. I will update their
          presentation details on the schedule and send it back to you. Also,
          the mayor has provided a title for his closing speech, &quot;Our town,
          our future.&quot; As for lunch, the cafeteria staff don&apos;t work on
          weekends, so we need to rethink it. Do you have any suggestions?
        </p>

        <p className="mb-6">
          I have attached a diagram for the debate seating arrangements. You
          will notice that there needs to be a small desk for the moderator in
          the center. There should be one table on each side of the moderator,
          and these tables should face slightly inward. As we have two debaters
          on each team, use the long tables. There isn&apos;t a lot of time to
          set up the stage for the debate, so you will need a few people to help
          carry the tables and chairs.
        </p>

        <p className="mb-4">Thank you for your assistance.</p>
        <p>Henry Ryan</p>

        <div className="mt-4 pt-4 border-t border-gray-300 text-gray-600 flex items-center gap-2">
          <Paperclip size={16} />
          <span>Attachment: Debate set up diagram</span>
        </div>
      </div>
      <div className="w-full max-w-4xl p-4 space-y-8">
        {/* Question 1 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-1"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 1</span>
            <span>
              Based on your email, what is your overall worry about being on the
              volunteer program?
            </span>
            {renderSelect("18", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-1" />}
          </div>
          <div className="space-y-2 pl-8">
            <div className="flex gap-2">
              <span>①</span>
              <span>A lack of event organizing experience</span>
            </div>
            <div className="flex gap-2">
              <span>②</span>
              <span>Concerns about your presentation skills</span>
            </div>
            <div className="flex gap-2">
              <span>③</span>
              <span>The possibility of future employment</span>
            </div>
            <div className="flex gap-2">
              <span>④</span>
              <span>Your ability in writing English emails</span>
            </div>
          </div>
        </div>
        {/* Question 2 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-2"))}>
          <div
            className={cn(
              "flex gap-2 items-center flex-wrap",
              showResults && qaFormat(qa, "5-2")
            )}
          >
            <span className="whitespace-nowrap">問 2</span>
            <span>
              Which of these titles best match Professor Ryan&apos;s
              descriptions for Presentation 2
            </span>
            <span>(</span>
            {renderSelect("19", 6, answers, setAnswers)}
            <span>)</span>
            <span>and Presentation 4</span>
            <span>(</span>
            {renderSelect("20", 6, answers, setAnswers)}
            <span>)</span>
            <span>based on the morning and afternoon themes?</span>
            {showResults && <Explain qa={qa} questionId="5-2" />}
          </div>
          <div className="space-y-2 pl-8">
            <div className="flex gap-2">
              <span>①</span>
              <span>Building a memorial statue of our town hero</span>
            </div>
            <div className="flex gap-2">
              <span>②</span>
              <span>Dealing with local volunteers</span>
            </div>
            <div className="flex gap-2">
              <span>③</span>
              <span>Organizing cross-cultural events</span>
            </div>
            <div className="flex gap-2">
              <span>④</span>
              <span>Rediscovering the benefits of local food</span>
            </div>
            <div className="flex gap-2">
              <span>⑤</span>
              <span>Renovating the village church</span>
            </div>
            <div className="flex gap-2">
              <span>⑥</span>
              <span>Updating a traditional business model</span>
            </div>
          </div>
        </div>
        {/* Question 3 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-3"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 3</span>
            <span>
              Referring to Professor Ryan&apos;s reply, which of the following
              needs to be reconsidered?
            </span>
            {renderSelect("21", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-3" />}
          </div>
          <div className="space-y-2 pl-8">
            <div className="flex gap-2">
              <span>①</span>
              <span>Conference registration</span>
            </div>
            <div className="flex gap-2">
              <span>②</span>
              <span>Main Hall as the venue</span>
            </div>
            <div className="flex gap-2">
              <span>③</span>
              <span>Mayor&apos;s speech title</span>
            </div>
            <div className="flex gap-2">
              <span>④</span>
              <span>Opening and closing times</span>
            </div>
          </div>
        </div>
        {/* Question 4 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-4"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 4</span>
            <span>
              Which diagram best represents Professor Ryan&apos;s seating plan
              for the debate?
            </span>
            {renderSelect("22", 6, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-4" />}
          </div>
        </div>
        {/* Question 5 */}
        <div className={cn("space-y-4", showResults && qaFormat(qa, "5-5"))}>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="whitespace-nowrap">問 5</span>
            <span>
              You will email Professor Ryan again. In your reply, which two
              pieces of information are you most likely to include?
            </span>
            {renderSelect("23", 6, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="5-5" />}
          </div>
          <div className="space-y-2 pl-8">
            <div className="space-y-2 mb-4">
              <div className="flex gap-2">
                <span>A :</span>
                <span>The cost of renting the conference venue</span>
              </div>
              <div className="flex gap-2">
                <span>B :</span>
                <span>The local restaurants that can serve food</span>
              </div>
              <div className="flex gap-2">
                <span>C :</span>
                <span>The names of the volunteers available</span>
              </div>
              <div className="flex gap-2">
                <span>D :</span>
                <span>The number of parking permits needed</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span>①</span>
                <span>A and B</span>
              </div>
              <div className="flex gap-2">
                <span>②</span>
                <span>A and C</span>
              </div>
              <div className="flex gap-2">
                <span>③</span>
                <span>A and D</span>
              </div>
              <div className="flex gap-2">
                <span>④</span>
                <span>B and C</span>
              </div>
              <div className="flex gap-2">
                <span>⑤</span>
                <span>B and D</span>
              </div>
              <div className="flex gap-2">
                <span>⑥</span>
                <span>C and D</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex25_5;
