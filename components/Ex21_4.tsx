"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten2 } from "@/components/Saiten2";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

export default function Ex21_4() {
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
        {
          questionNumber: "25",
          answer: 0,
        },
      ],
      rightAnswerString: "15",
      isSeparate: true,
      answerString: "",
      isCorrect: false,
      points: 4,
      explanation: [
        "正解 到着①(109) 帰り⑤(239)",
        "解説 姉妹校の生徒たちが何時に到着するのかに関しては、Natsukiからのメールに、&quot;Will they arrive at Azuma Station at 9:39 a.m. ~?&quot;「彼らは9:39 a.m.にAzuma駅に着くのですか？」とあるが、それで②(110)だと即答しないこと。その質問に対して、Emmaのメールに、&quot;In answer to your question, they’ll arrive at the station at 9:20 a.m. ~.&quot;「あなたの質問に答えると、彼らは9:20 a.m.に駅に到着する」とあるので、①(109)だと判断する。",
        "帰りの電車に関しては、Natsukiのメールには情報はなく、Emmaのメールに、&quot;our guests can still be back at the hotel by 6:30 p.m. for dinner, as the hotel is only a few minutes’ walk from Kaede Station.&quot;「彼らは夕食のためにホテルに6:30 p.m.までに戻る。ホテルはKaede駅から歩いて数分だ」という情報から、Kaede 駅に18:22に到着する239番の電車に乗ればよい。もちろん、その前の電車に乗る可能性もあるが、Hibari 駅にあるショッピングモールに到着するのが17:00で買い物時間に約１時間取りたいとも書いてあるので、238番の電車だと十分な買い物時間が確保できないので不適格である。",
      ],
    },
    {
      questionId: "4-2",
      qa: [
        {
          questionNumber: "26",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解②D(The school) – B(The Botanical garden) – A(The Aquarium) – C(The mall)",
        "解説 どの選択肢もD(The school)から始まっているので、出発は「学校」である。Natsukiのメールでは第３パラグラフにWestside水族館について言及されているが、&quot;the best time to visit will be when it is least busy.&quot;「訪れるのに最適な時間は一番混雑していない時間だ」とあり、Emmaもそれに異論は唱えていない。混雑時間帯表を見ると、15:00~16:00が最も来場者が少ない時間帯であることから、スケジュール表の15:30の欄は、A(The Aquarium)となる。また、Natsukiのメールの第５パラグラフに、「お土産をWest モールで買うのがいいと思うけど、お土産を一日中持ち歩くのは大変」とある。従って、お土産を買うWest モールには最後に寄ることになるので、17:00の欄は、C(The mall)だと判断できる。この段階で、選択肢は②に絞れる。",
      ],
    },
    {
      questionId: "4-3",
      qa: [
        {
          questionNumber: "27",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解②「学校の隣の公園」",
        "解説 Natsukiのメールには昼食については最終文で、 &quot;could you tell us what the plan is for lunch?「昼食の計画を教えてください」とあるので、Emmaのメールを確認する。すると、Emmaのメールには、 &quot;We can eat under the statue you mentioned.&quot;「あなたが言う像の下で食べる」とあるので、もう一度Natsukiのメールに戻り、言及されている&quot;statue&quot;「像」はどこにあるかを確認する。Natsukiのメールの最終パラグラフに、 &quot;the statue in Azuma Memorial Park next to our school,&quot;「学校の隣のAzuma記念公園内の像」と書かれているので、そこから判断できる。",
      ],
    },
    {
      questionId: "4-4",
      qa: [
        {
          questionNumber: "28",
          answer: 0,
        },
      ],
      rightAnswerString: "2",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解②「タクシー」",
        "解説 Natsukiのメールの第１パラグラフに、 &quot;Will they arrive at Azuma Station at 9:39 a.m. and take a taxi to the school?&quot;「彼らは9:39 a.m.にAzuma駅に着き、タクシーで学校に行くのですか？」とあるが、この質問に対してEmmaは&quot;In answer to your question, they’ll arrive at the station at 9:20 a.m. and then catch the school bus.&quot;「あなたの質問に答えると、彼らは9:20 a.m.に駅に到着し、スクールバスに乗る」とあるので、タクシーは否定されている。また、Emmaのメールには、問１でも見たように、 &quot;the hotel is only a few minutes’ walk from Kaede Station.&quot;「 ホテルはKaede 駅から歩いて数分だ」と書いてある。よって、利用する交通手段は、電車・バス・徒歩であり、タクシーは利用しない。",
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
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解④「Hibari宇宙センター」",
        "解説 どの選択肢も２人のメールの文面には登場していないので迷うかもしれない。ポイントは、Emmaのメールの第２パラグラフにある、 &quot;the purpose of this program is to improve the scientific knowledge of the students.&quot;「このプログラムの目的は生徒たちの科学的知識を向上させることだ」とあるので、「科学」に関するものを選ぶ。①「遊園地」②「美術館」③「城」はいずれも科学とは無関係である。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第４問"}</h1>
          <span className="text-gray-600">(配点 {16})</span>
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
      {/* Context text */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        Your English teacher, Emma, has asked you and your classmate, Natsuki,
        to help her plan the day&apos;s schedule for hosting students from your
        sister school. You&apos;re reading the email exchanges between Natsuki
        and Emma so that you can draft the schedule.
      </p>

      {/* Natsuki's Email */}
      <div className="border border-gray-300 p-6 rounded mb-8">
        <p className="mb-4">Hi Emma,</p>

        <p className="mb-4 leading-relaxed">
          We have some ideas and questions about the schedule for the day out
          with our 12 guests next month. As you told us, the students from both
          schools are supposed to give presentations in our assembly hall from
          10:00 a.m. So, I&apos;ve been looking at the attached timetable. Will
          they arrive at Azuma Station at 9:39 a.m. and then take a taxi to the
          school?
        </p>

        <p className="mb-4 leading-relaxed">
          We have also been discussing the afternoon activities. How about
          seeing something related to science? We have two ideas, but if you
          need a third, please let me know.
        </p>

        <p className="mb-4 leading-relaxed">
          Have you heard about the special exhibition that is on at Westside
          Aquarium next month? It&apos;s about a new food supplement made from
          sea plankton. We think it would be a good choice. Since it&apos;s
          popular, the best time to visit will be when it is least busy.
          I&apos;m attaching the graph I found on the aquarium&apos;s homepage.
          graph I found on the aquarium&apos;s homepage.
        </p>

        <p className="mb-4 leading-relaxed">
          Eastside Botanical Garden, together with our local university, has
          been developing an interesting way of producing electricity from
          plants. Luckily, the professor in charge will give a short talk about
          it on that day in the early afternoon! Why don&apos;t we go?
        </p>

        <p className="mb-4 leading-relaxed">
          Everyone will want to get some souvenirs, won&apos;t they? I think
          West Mall, next to Hibari Station, would be best, but we don&apos;t
          want to carry them around with us all day.
        </p>

        <p className="mb-4 leading-relaxed">
          Finally, every visitor to Azuma should see the town&apos;s symbol, the
          statue in Azuma Memorial Park next to our school, but we can&apos;t
          work out a good schedule. Also, could you tell us what the plan is for
          lunch?
        </p>

        <p className="mt-6">Yours,</p>
        <p>Natsuki</p>
      </div>

      {/* Emma's Reply */}
      <div className="border border-gray-300 p-6 rounded mb-8">
        <p className="mb-4">Hi Natsuki,</p>

        <p className="mb-4 leading-relaxed">
          Thank you for your email! You&apos;ve been working hard. In answer to
          your question, they&apos;ll arrive at the station at 9:20 a.m. and
          then catch the school bus.
        </p>

        <p className="mb-4 leading-relaxed">
          The two main afternoon locations, the aquarium and botanical garden,
          are good ideas because both schools place emphasis on science
          education, and the purpose of this program is to improve the
          scientific knowledge of the students. However, it would be wise to
          have a third suggestion just in case.
        </p>

        <p className="mb-4 leading-relaxed">
          Let&apos;s get souvenirs at the end of the day. We can take the bus to
          the mall arriving there at 5:00 p.m. This will allow almost an hour
          for shopping and our guests can still be back at the hotel by 6:30
          p.m. for dinner, as the hotel is only a few minutes&apos; walk from
          Kaede Station.
        </p>

        <p className="mb-4 leading-relaxed">
          About lunch, the school cafeteria will provide boxed lunches. We can
          eat under the statue you mentioned. If it rains, let&apos;s eat
          inside.
        </p>

        <p className="mb-4 leading-relaxed">
          Thank you so much for your suggestions. Could you two make a draft for
          the schedule?
        </p>

        <p className="mt-6">Best,</p>
        <p>Emma</p>
      </div>

      {/* Timetable */}
      <div className="border border-gray-300 p-6 rounded">
        <p className="font-medium text-center mb-4">Attached timetable:</p>
        <p className="text-center font-medium mb-2">Train Timetable</p>
        <p className="text-center mb-4">Kaede — Hibari — Azuma</p>

        {/* Morning Timetable */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-50">Stations</th>
                <th className="border p-2 bg-gray-50" colSpan={4}>
                  Train No.
                </th>
              </tr>
              <tr>
                <th className="border p-2"></th>
                <th className="border p-2">108</th>
                <th className="border p-2">109</th>
                <th className="border p-2">110</th>
                <th className="border p-2">111</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Kaede</td>
                <td className="border p-2 text-center">8:28</td>
                <td className="border p-2 text-center">8:43</td>
                <td className="border p-2 text-center">9:02</td>
                <td className="border p-2 text-center">9:16</td>
              </tr>
              <tr>
                <td className="border p-2">Hibari</td>
                <td className="border p-2 text-center">8:50</td>
                <td className="border p-2 text-center">9:05</td>
                <td className="border p-2 text-center">9:24</td>
                <td className="border p-2 text-center">9:38</td>
              </tr>
              <tr>
                <td className="border p-2">Azuma</td>
                <td className="border p-2 text-center">9:05</td>
                <td className="border p-2 text-center">9:20</td>
                <td className="border p-2 text-center">9:39</td>
                <td className="border p-2 text-center">9:53</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Evening Timetable */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-50">Stations</th>
                <th className="border p-2 bg-gray-50" colSpan={4}>
                  Train No.
                </th>
              </tr>
              <tr>
                <th className="border p-2"></th>
                <th className="border p-2">238</th>
                <th className="border p-2">239</th>
                <th className="border p-2">240</th>
                <th className="border p-2">241</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Azuma</td>
                <td className="border p-2 text-center">17:25</td>
                <td className="border p-2 text-center">17:45</td>
                <td className="border p-2 text-center">18:00</td>
                <td className="border p-2 text-center">18:15</td>
              </tr>
              <tr>
                <td className="border p-2">Hibari</td>
                <td className="border p-2 text-center">17:40</td>
                <td className="border p-2 text-center">18:00</td>
                <td className="border p-2 text-center">18:15</td>
                <td className="border p-2 text-center">18:30</td>
              </tr>
              <tr>
                <td className="border p-2">Kaede</td>
                <td className="border p-2 text-center">18:02</td>
                <td className="border p-2 text-center">18:22</td>
                <td className="border p-2 text-center">18:37</td>
                <td className="border p-2 text-center">18:52</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Visitor Graph */}
      <div className="mt-8">
        <p className="mb-4">Attached graph:</p>
        <Image
          src="/images/Ex21-4-1.webp"
          alt="Graph showing Number of Visitors to Westside Aquarium by time of day"
          className="mb-8 mx-auto"
          width={800}
          height={400}
        />
      </div>

      {/* Questions Section */}
      <div className="mt-8">
        <div className={cn("mb-8", showResults && qaFormat(qa, "4-1"))}>
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap mr-2">問 1</span>
            <span>
              The guests from the sister school will arrive on the number
            </span>
            {renderSelect("24", 6, answers, setAnswers)}
            <span> train and catch the number</span>
            {renderSelect("25", 6, answers, setAnswers)}
            <span> train back to their hotel.</span>
            {showResults && <Explain qa={qa} questionId="4-1" />}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>① 109</div>
            <div>② 110</div>
            <div>③ 111</div>
            <div>④ 238</div>
            <div>⑤ 239</div>
            <div>⑥ 240</div>
          </div>
        </div>

        <div className={cn("mb-8", showResults && qaFormat(qa, "4-2"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 2</span>
            <span>Which best completes the draft schedule?</span>
            {renderSelect("26", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4-2" />}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>A : The aquarium</div>
            <div>B : The botanical garden</div>
            <div>C : The mall</div>
            <div>D : The school</div>
          </div>

          <Image
            src="/images/Ex21-4-2.webp"
            alt="Draft schedule diagram showing times 9:30, 13:30, 15:30, and 17:00"
            className="mb-3 mx-auto"
            width={800}
            height={200}
          />
          <div className="ml-8">
            <p>① D→A→B→C</p>
            <p>② D→B→A→C</p>
            <p>③ D→B→C→A</p>
            <p>④ D→C→A→B</p>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4-3"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 3</span>
            <span>Unless it rains, the guests will eat lunch in the</span>
            {renderSelect("27", 4, answers, setAnswers)}
            <span>.</span>
            {showResults && <Explain qa={qa} questionId="4-3" />}
          </div>

          <div className="ml-8">
            <p>① botanical garden</p>
            <p>② park next to the school</p>
            <p>③ park next to the station</p>
            <p>④ school garden</p>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4-4"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 4</span>
            <span>
              The guests will <span className="underline">not</span> get around
            </span>
            {renderSelect("28", 4, answers, setAnswers)}
            <span> on that day.</span>
            {showResults && <Explain qa={qa} questionId="4-4" />}
          </div>

          <div className="ml-8">
            <p>① by bus</p>
            <p>② by taxi</p>
            <p>③ by train</p>
            <p>④ on foot</p>
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4-5"))}>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <span className="whitespace-nowrap mr-2">問 5</span>
            <span>
              As a third option, which would be the most suitable for your
              program?
            </span>
            {renderSelect("29", 4, answers, setAnswers)}
            {showResults && <Explain qa={qa} questionId="4-5" />}
          </div>

          <div className="ml-8">
            <p>① Hibari Amusement Park</p>
            <p>② Hibari Art Museum</p>
            <p>③ Hibari Castle</p>
            <p>④ Hibari Space Center</p>
          </div>
        </div>
      </div>
    </div>
  );
}
