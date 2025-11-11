"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

export default function Ex21_4() {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "21_4")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第４問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {16})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 10分 500単語弱】
          </span>
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
      {/* Context text */}
      <p className="text-gray-600 mb-2 leading-relaxed md:text-xl px-3">
        Your English teacher, Emma, has asked you and your classmate, Natsuki,
        to help her plan the day&apos;s schedule for hosting students from your
        sister school. You&apos;re reading the email exchanges between Natsuki
        and Emma so that you can draft the schedule.{' '}
        {Kaisetsu(showResults, "21-4-0")}
      </p>

      {/* Natsuki's Email */}
      <div className="border border-gray-300 p-6 rounded mb-8 space-y-2">
        <p className="mb-4">Hi Emma,</p>

        <p className="leading-relaxed">
          We have some ideas and questions about the schedule for the day out
          with our 12 guests next month. As you told us, the students from both
          schools are supposed to give presentations in our assembly hall from
          10:00 a.m. So, I&apos;ve been looking at the attached timetable. Will
          they arrive at Azuma Station at 9:39 a.m. and then take a taxi to the
          school?{' '}
          {Kaisetsu(showResults, "21-4-1")}
        </p>

        <p className="leading-relaxed">
          We have also been discussing the afternoon activities. How about
          seeing something related to science? We have two ideas, but if you
          need a third, please let me know.
          {' '}{Kaisetsu(showResults, "21-4-2")}
        </p>

        <p className="leading-relaxed">
          Have you heard about the special exhibition that is on at Westside
          Aquarium next month? It&apos;s about a new food supplement made from
          sea plankton. We think it would be a good choice. Since it&apos;s
          popular, the best time to visit will be when it is least busy.
          I&apos;m attaching the graph I found on the aquarium&apos;s homepage.
          {' '}{Kaisetsu(showResults, "21-4-3")}
        </p>

        <p className="leading-relaxed">
          Eastside Botanical Garden, together with our local university, has
          been developing an interesting way of producing electricity from
          plants. Luckily, the professor in charge will give a short talk about
          it on that day in the early afternoon! Why don&apos;t we go?
          {' '}{Kaisetsu(showResults, "21-4-4")}
        </p>

        <p className="leading-relaxed">
          Everyone will want to get some souvenirs, won&apos;t they? I think
          West Mall, next to Hibari Station, would be best, but we don&apos;t
          want to carry them around with us all day.
          {' '}{Kaisetsu(showResults, "21-4-5")}
        </p>

        <p className="leading-relaxed">
          Finally, every visitor to Azuma should see the town&apos;s symbol, the
          statue in Azuma Memorial Park next to our school, but we can&apos;t
          work out a good schedule. Also, could you tell us what the plan is for
          lunch?{' '}
          {Kaisetsu(showResults, "21-4-6")}
        </p>

        <p className="mt-6">Yours,</p>
        <p>Natsuki</p>
      </div>

      {/* Emma's Reply */}
      <div className="border border-gray-300 p-6 rounded mb-8 space-y-2">
        <p className="mb-4">Hi Natsuki,</p>

        <p className="leading-relaxed">
          Thank you for your email! You&apos;ve been working hard. In answer to
          your question, they&apos;ll arrive at the station at 9:20 a.m. and
          then catch the school bus.{' '}
          {Kaisetsu(showResults, "21-4-7")}
        </p>

        <p className="leading-relaxed">
          The two main afternoon locations, the aquarium and botanical garden,
          are good ideas because both schools place emphasis on science
          education, and the purpose of this program is to improve the
          scientific knowledge of the students. However, it would be wise to
          have a third suggestion just in case.
          {' '}{Kaisetsu(showResults, "21-4-8")}
        </p>

        <p className="leading-relaxed">
          Let&apos;s get souvenirs at the end of the day. We can take the bus to
          the mall arriving there at 5:00 p.m. This will allow almost an hour
          for shopping and our guests can still be back at the hotel by 6:30
          p.m. for dinner, as the hotel is only a few minutes&apos; walk from
          Kaede Station.{' '}
          {Kaisetsu(showResults, "21-4-9")}
        </p>

        <p className="leading-relaxed">
          About lunch, the school cafeteria will provide boxed lunches. We can
          eat under the statue you mentioned. If it rains, let&apos;s eat
          inside.{' '}
          {Kaisetsu(showResults, "21-4-10")}
        </p>

        <p className="leading-relaxed">
          Thank you so much for your suggestions. Could you two make a draft for
          the schedule?
          {' '}
          {Kaisetsu(showResults, "21-4-11")}
        </p>

        <p className="mt-6">Best,</p>
        <p>Emma</p>
      </div>

      {/* Timetable */}
      <div className="p-6">
        <p className="font-medium text-left mb-4">Attached timetable:</p>
        <p className="text-center font-semibold mb-2">Train Timetable</p>
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
        {/* Question 1 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4-1"))}>
          <div className="flex items-center flex-wrap gap-0">
            <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
            <span>
              The guests from the sister school will arrive on the number
            </span>
            {renderSelect("24", 6, answers, setAnswers)}
            <span> train and catch the number</span>
            {renderSelect("25", 6, answers, setAnswers)}
            <span className="mr-2"> train back to their hotel.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="4-1"  isShow={showResults} />
              {Kaisetsu(showResults, "21-4-12")}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4 font-sans">
            <div>① 109</div>
            <div>② 110</div>
            <div>③ 111</div>
            <div>④ 238</div>
            <div>⑤ 239</div>
            <div>⑥ 240</div>
          </div>
        </div>
        {/* Question 2 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4-2"))}>
          <div className="flex items-center flex-wrap mb-2">
            <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
            <span>Which best completes the draft schedule?</span>
            <div className="flex flex-row gap-2">
              {renderSelect("26", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="4-2"  isShow={showResults} />
              {Kaisetsu(showResults, "21-4-13")}
            </div>
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
          <div className="ml-2 md:ml-8 space-y-2">
            <p>① D→A→B→C</p>
            <p>② D→B→A→C</p>
            <p>③ D→B→C→A</p>
            <p>④ D→C→A→B</p>
          </div>
        </div>

        {/* Question 3 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4-3"))}>
          <div className="flex items-center flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
            <span className="-mr-2">Unless it rains, the guests will eat lunch in the</span>
            {renderSelect("27", 4, answers, setAnswers)}
            <span className="mt-1 -ml-2 mr-2">.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="4-3"  isShow={showResults} />
              {Kaisetsu(showResults, "21-4-14")}
            </div>
          </div>

          <div className="ml-2 md:ml-8 space-y-2">
            <p>① botanical garden</p>
            <p>② park next to the school</p>
            <p>③ park next to the station</p>
            <p>④ school garden</p>
          </div>
        </div>

        {/* Question 4 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4-4"))}>
          <div className="flex items-center flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
            <span>
              The guests will <span className="underline">not</span> get around
            </span>
            {renderSelect("28", 4, answers, setAnswers)}
            <span className="mr-2"> on that day.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId="4-4"  isShow={showResults} />
              {Kaisetsu(showResults, "21-4-15")}
            </div>
          </div>

          <div className="ml-2 md:ml-8 space-y-2">
            <p>① by bus</p>
            <p>② by taxi</p>
            <p>③ by train</p>
            <p>④ on foot</p>
          </div>
        </div>

        {/* Question 5 */}
        <div className={cn("mb-8", showResults && qaFormat(qa, "4-5"))}>
          <div className="flex items-center flex-wrap">
            <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
            <span>
              As a third option, which would be the most suitable for your
              program?
            </span>
            <div className="flex flex-row gap-2">
              {renderSelect("29", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="4-5"  isShow={showResults} />
              {Kaisetsu(showResults, "21-4-16")}
            </div>
          </div>

          <div className="ml-2 md:ml-8 space-y-2">
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
