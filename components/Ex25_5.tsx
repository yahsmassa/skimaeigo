"use client";
import Image from "next/image";
import { Paperclip } from "lucide-react";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex25_5 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "25_5")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={cn(exPageFormat, "font-times md:text-[17px]")}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第５問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {16})</span>
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
      <div className="mb-2 text-lg">
        <p className="mb-4">
          You are an exchange student in the US. As part of your
          university&apos;s community volunteer program, you will help organize
          a special conference for local businesses. You wrote this email to the
          professor in charge and received a reply.
          {Kaisetsu(showResults, "25-5-1")}
        </p>
      </div>

      {/* Email content with border */}
      <div className="border border-gray-400 p-6 bg-white">
        {/* Header */}
        <div className="text-right mb-4">
          <p>October 15, 2024</p>
        </div>

        <div className="mb-2">
          <h2 className="font-bold mb-4">Event Plan</h2>

          <p className="mb-4">Dear Professor Ryan,</p>

          <p className="mb-4">
            I am very happy to be the representative for the volunteer program.
            You mentioned that this event is to promote the local economy. I
            hope to work as a civil servant in the local development division
            after graduation, so this experience is very valuable for me. The
            conference schedule you requested is below.
            {Kaisetsu(showResults, "25-5-2")}
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
        <p className="mb-1">
          I would like you to confirm the following points:
          {Kaisetsu(showResults, "25-5-6")}
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>The conference will start at 9:45 a.m. and end at 4:45 p.m.</li>
          <li>The registration will close seven days before the event.</li>
          <li>The conference will be held in the Main Hall.</li>
          <li>Participants will park in the university parking area.</li>
        </ul>

        {/* To Be Decided List */}
        <p className="mb-1">
          Below is a list of things that still need to be decided:
          {Kaisetsu(showResults, "25-5-7")}
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
        <p className="mb-1">
          The number of volunteers that can help with the conference isn&apos;t
          set yet. I&apos;ll send you the list as soon as possible.
          {Kaisetsu(showResults, "25-5-8")}
        </p>

        <p className="mb-1">
          This is my first time being on a committee like this, and I am rather
          anxious, so I would appreciate any advice you have.
          {Kaisetsu(showResults, "25-5-9")}
        </p>

        <p className="mb-1">
          I&apos;m looking forward to assisting and attending the presentations.
          {Kaisetsu(showResults, "25-5-10")}
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

        <p className="mb-2">
          The time schedule and order of events look good to me. The Main Hall
          worked really well as a venue last time. It has a good capacity for
          this type of event. As a university staff member, I can reserve it for
          free. Closing the registration seven days before the conference is too
          short. It doesn&apos;t give us time to prepare materials and send out
          information. You also mentioned parking. The university parking lot
          will be open for the event, so participants can use it without having
          a permit.
          {Kaisetsu(showResults, "25-5-3")}
        </p>
        <p className="mb-2">
          With regard to the information you requested, I have received the
          remaining two presentation titles. One presenter is a local
          businessperson, who will talk about changes she has made in her
          company. The other presenter is a local chef. She will introduce
          recipes using locally grown mushrooms. I will update their
          presentation details on the schedule and send it back to you. Also,
          the mayor has provided a title for his closing speech, &quot;Our town,
          our future.&quot; As for lunch, the cafeteria staff don&apos;t work on
          weekends, so we need to rethink it. Do you have any suggestions?
          {Kaisetsu(showResults, "25-5-4")}
        </p>

        <p className="mb-2">
          I have attached a diagram for the debate seating arrangements. You
          will notice that there needs to be a small desk for the moderator in
          the center. There should be one table on each side of the moderator,
          and these tables should face slightly inward. As we have two debaters
          on each team, use the long tables. There isn&apos;t a lot of time to
          set up the stage for the debate, so you will need a few people to help
          carry the tables and chairs.
          {Kaisetsu(showResults, "25-5-5")}
        </p>

        <p className="mb-1">Thank you for your assistance.</p>
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
            <span className="whitespace-nowrap font-sans">問 1</span>
            <span>
              Based on your email, what is your overall worry about being on the
              volunteer program?
            </span>
            <div className="flex flex-row items-center gap-2">
              {renderSelect("18", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="5-1"  isShow={showResults} />
              {Kaisetsu(showResults, "25-5-11")}
            </div>
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
            <span className="whitespace-nowrap font-sans">問 2</span>
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
            <Explain qa={qa} questionId="5-2"  isShow={showResults} />
            {Kaisetsu(showResults, "25-5-12")}
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
            <span className="whitespace-nowrap font-sans">問 3</span>
            <span>
              Referring to Professor Ryan&apos;s reply, which of the following
              needs to be reconsidered?
            </span>
            <div className="flex flex-row items-center gap-2">
              {renderSelect("21", 4, answers, setAnswers)}
              <Explain qa={qa} questionId="5-3"  isShow={showResults} />
              {Kaisetsu(showResults, "25-5-13")}
            </div>
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
            <span className="whitespace-nowrap font-sans">問 4</span>
            <span>
              Which diagram best represents Professor Ryan&apos;s seating plan
              for the debate?
            </span>
            <div className="flex flex-row items-center gap-2">
              {renderSelect("22", 6, answers, setAnswers)}
              <Explain qa={qa} questionId="5-4"  isShow={showResults} />
              {Kaisetsu(showResults, "25-5-14")}
            </div>
          </div>
          <div className="ml-3">
            <Image
              src="/images/Ex25-5-1.jpg"
              alt=""
              width={800}
              height={600}
              className="w-full max-w-2xl"
            />
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
            <Explain qa={qa} questionId="5-5"  isShow={showResults} />
            {Kaisetsu(showResults, "25-5-15")}
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
