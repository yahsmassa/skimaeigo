"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
import { qanda } from "@/lib/qanda";

const Ex24_5 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = qanda.find(q => q.id === "24_5")?.qanda || [];
  const [qa, setQA] = useState<QandA[]>(question);

  // questionsData は展開のため削除

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第５問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {15})</span>
          <span className="text-gray-600 font-sans">
          【目標時間 12分 1000単語弱】
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
      {/* Introduction text - double spaced */}
      <div className="mb-2  text-justify px-3">
        <p>
          You are in an English discussion group, and it is your turn to
          introduce a story.
          You have found a story in an English language magazine in Japan. You
          are preparing notes for your presentation.{" "}
          {Kaisetsu(showResults, "24-5-1")}
        </p>
      </div>

      {/* Story container */}
      <div className="border-2 border-black p-2 sm:p-8 text-justify">
        {/* Story title */}
        <h1 className="text-center text-xl mb-2 font-semibold">Maki&apos;s Kitchen</h1>

        {/* First paragraph */}
        <div className="mb-2">
          <p className="indent-7">
            <span className="italic">&quot;Irasshai-mase,&quot;</span> said Maki
            as two customers entered her restaurant, Maki&apos;s Kitchen. Maki
            had joined her family business at the age of 19 when her father
            became ill. After he recovered, Maki decided to continue.
            Eventually, Maki&apos;s parents retired and she became the owner.
            Maki had many regular customers who came not only for the delicious
            food, but also to sit at the counter and talk to her. Although her
            business was doing very well, Maki occasionally daydreamed about
            doing something different.
            {Kaisetsu(showResults, "24-5-2")}
          </p>
          <p className="indent-7">
            &quot;Can we sit at the counter?&quot; she heard. It was her old
            friends, Takuya and Kasumi. A phone call a few weeks earlier from
            Kasumi to Takuya had given them the idea to visit Maki and surprise
            her.{' '}
            {Kaisetsu(showResults, "24-5-3")}
          </p>
        </div>

        {/* Diamond separator */}
        <div className="flex justify-center my-2">
          <div className="text-black md:text-2xl">♦♦♦♦♦</div>
        </div>

        {/* Phone conversation section */}
        <div className="mb-2 ">
        <p className="mb-2 indent-7">
            Takuya&apos;s phone vibrated, and he saw a familiar name, Kasumi.
          </p>
          <p className="mb-2 indent-7">&quot;Kasumi!&quot;</p>
          <p className="mb-2 indent-7">
            &quot;Hi Takuya, I saw you in the newspaper. Congratulations!&quot;
          </p>
          <p className="mb-2 indent-7">
            &quot;Thanks. Hey, you weren&apos;t at our 20th high school reunion
            last month.&quot;
          </p>
          <p className="mb-0 indent-7">
            &quot;No, I couldn&apos;t make it. I can&apos;t believe it&apos;s
            been 20 years since we graduated. Actually, I was calling to ask if
            you&apos;ve seen Maki recently.&quot;
            {Kaisetsu(showResults, "24-5-4")}
          </p>
        </div>

        {/* Diamond separator */}
        <div className="flex justify-center my-2">
          <div className="text-black md:text-2xl">♦♦♦♦♦</div>
        </div>

        {/* Final paragraph */}
        <div className="">
          <p className="mb-0 indent-7">
            Takuya&apos;s family had moved to Kawanaka Town shortly before he
            started high school. He joined the drama club, where he met Maki and
            Kasumi. The three became inseparable. After graduation, Takuya left
            Kawanaka to become an actor, while Maki and Kasumi remained. Maki
            had decided she wanted to study at university and enrolled in a
            preparatory school. Kasumi, on the other hand, started her career.
            Takuya tried out for various acting roles but was constantly
            rejected; eventually, he quit.{' '}
            {Kaisetsu(showResults, "24-5-5")}
          </p>
        </div>
        <p className="mb-0 indent-7">
          Exactly one year after graduation, Takuya returned to Kawanaka with
          his dreams destroyed. He called Maki, who offered her sympathy. He was
          surprised to learn that Maki had abandoned her plan to attend
          university because she had to manage her family&apos;s restaurant. Her
          first day of work had been the day he called. For some reason, Takuya
          could not resist giving Maki some advice.{' '}
          {Kaisetsu(showResults, "24-5-6")}
        </p>

        <p className="mb-0 indent-7">
          &quot;Maki, I&apos;ve always thought your family&apos;s restaurant
          should change the coffee it serves. I think people in Kawanaka want a
          bolder flavor. I&apos;d be happy to recommend a different brand,&quot;
          he said.{' '}
          {Kaisetsu(showResults, "24-5-7")}
        </p>

        <p className="mb-0 indent-7">
          &quot;Takuya, you really know your coffee. Hey, I was walking by Café
          Kawanaka and saw a help-wanted sign. You should apply!&quot; Maki
          replied.{' '}
          {Kaisetsu(showResults, "24-5-8")}
        </p>

        <p className="mb-0 indent-7">
          Takuya was hired by Café Kawanaka and became fascinated by the science
          of coffee making. On the one-year anniversary of his employment,
          Takuya was talking to Maki at her restaurant.{' '}
          {Kaisetsu(showResults, "24-5-9")}
        </p>

        <div className="mb-0">
          <p className="mb-2 indent-7">
            &quot;Maki,&quot; he said, &quot;do you know what my dream is?&quot;
          </p>
          <p className="mb-2 indent-7">
            &quot;It must have something to do with coffee.&quot;
          </p>
          <p className="mb-2 indent-7">
            &quot;That&apos;s right! It&apos;s to have my own coffee
            business.&quot;
          </p>
          <p className="mb-0 indent-7">
            &quot;I can&apos;t imagine a better person for it. What are you
            waiting for?&quot; {' '}
            {Kaisetsu(showResults, "24-5-10")}
          </p>
        </div>

        <p className="mb-0 indent-7">
          Maki&apos;s encouragement inspired Takuya. He quit his job, purchased
          a coffee bean roaster, and began roasting beans. Maki had a sign in
          her restaurant saying, &quot;We proudly serve Takuya&apos;s
          Coffee,&quot; and this publicity helped the coffee gain popularity in
          Kawanaka. Takuya started making good money selling his beans.
          Eventually, he opened his own café and became a successful business
          owner.{' '}
          {Kaisetsu(showResults, "24-5-11")}
        </p>

        {/* Diamond separator */}
        <div className="flex justify-center my-2">
          <div className="text-black md:text-2xl">♦♦♦♦♦</div>
        </div>

        <p className="mb-0 indent-7">
          Kasumi was reading the newspaper when she saw the headline:{" "}
          <span className="italic">
            TAKUYA&apos;S CAFÉ ATTRACTING TOURISTS TO KAWANAKA TOWN
          </span>
          . &quot;Who would have thought that Takuya would be so
          successful?&quot; Kasumi thought to herself as she reflected on her
          past.{' '}
          {Kaisetsu(showResults, "24-5-12")}
        </p>

        <p className="mb-0 indent-7">
          In the high school drama club, Kasumi&apos;s duty was to put make-up
          on the actors. No one could do it better than her. Maki noticed this
          and saw that a cosmetics company called Beautella was advertising for
          salespeople. She encouraged Kasumi to apply, and, after graduation,
          she became an employee of Beautella.{' '}
          {Kaisetsu(showResults, "24-5-13")}
        </p>

        <p className="mb-0 indent-7">
          The work was tough; Kasumi went door to door selling cosmetics. On bad
          days, she would call Maki, who would lift her spirits. One day, Maki
          had an idea. &quot;Doesn&apos;t Beautella do make-up workshops? I
          think you are more suited for that. You can show people how to use the
          make-up. They&apos;ll love the way they look and buy lots of
          cosmetics!&quot; {' '}
          {Kaisetsu(showResults, "24-5-14")}
        </p>

        <p className="mb-0 indent-7">
          Kasumi&apos;s company agreed to let her do workshops, and they were a
          hit! Kasumi&apos;s sales were so good that eight months out of high
          school, she had been promoted, moving to the big city of Ishijima.
          Since then, she had steadily climbed her way up the company ladder
          until she had been named vice-president of Beautella this year.
          {' '}
          {Kaisetsu(showResults, "24-5-15")}
        </p>

        <p className="mb-0 indent-7">
          &quot;I wouldn&apos;t be vice-president now without Maki,&quot; she
          thought, &quot;she helped me when I was struggling, but I was too
          absorbed with my work in Ishijima to give her support when she had to
          quit her preparatory school.&quot; Glancing back to the article, she
          decided to call Takuya.{' '}
          {Kaisetsu(showResults, "24-5-16")}
        </p>

        {/* Diamond separator */}
        <div className="flex justify-center my-2">
          <div className="text-black md:text-2xl">♦♦♦♦♦</div>
        </div>

        <p className="mb-4 indent-7">
          &quot;Maki wasn&apos;t at the reunion. I haven&apos;t seen her in
          ages,&quot; said Takuya.
        </p>

        <p className="mb-4 indent-7">
          &quot;Same here. It&apos;s a pity. Where would we be without
          her?&quot; asked Kasumi.
        </p>

        <p className="mb-0 indent-7">
          The conversation became silent, as they wordlessly communicated their
          guilt. Then, Kasumi had an idea.{' '}
          {Kaisetsu(showResults, "24-5-17")}
        </p>

        {/* Diamond separator */}
        <div className="flex justify-center my-2">
          <div className="text-black md:text-2xl">♦♦♦♦♦</div>
        </div>

        <div className="mb-0">
          <p className="mb-2 indent-7">
            The three friends were talking and laughing when Maki asked,
            &quot;By the way, I&apos;m really happy to see you two, but what
            brings you here?&quot;
          </p>
          <p className="mb-2 indent-7">&quot;Payback,&quot; said Takuya.</p>
          <p className="mb-2 indent-7">
            &quot;Have I done something wrong?&quot; asked Maki.
          </p>
          <p className="mb-0 indent-7">
            &quot;No. The opposite. You understand people incredibly well. You
            can identify others&apos; strengths and show them how to make use of
            them. We&apos;re proof of this. You made us aware of our
            gifts,&quot; said Takuya.{' '}
            {Kaisetsu(showResults, "24-5-18")}
          </p>
          <p className="mb-2 indent-7">
            &quot;The irony is that you couldn&apos;t do the same for
            yourself,&quot; added Kasumi.
          </p>
          <p className="mb-2 indent-7">
            &quot;I think Ishijima University would be ideal for you. It offers
            a degree program in counseling that&apos;s designed for people with
            jobs,&quot; said Takuya.
          </p>
          <p className="mb-0 indent-7">
            &quot;You&apos;d have to go there a few times a month, but you could
            stay with me. Also, Takuya can help you find staff for your
            restaurant,&quot; said Kasumi.{' '}
            {Kaisetsu(showResults, "24-5-19")}
          </p>
        </div>

        <p className="mb-0 indent-7">
          Maki closed her eyes and imagined Kawanaka having both
          &quot;Maki&apos;s Kitchen&quot; and &quot;Maki&apos;s
          Counseling.&quot; She liked that idea.{' '}
          {Kaisetsu(showResults, "24-5-20")}
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
      <div className="w-full px-0 sm:px-4 mx-auto p-4 md:p-0">
        {/* 問1 */}
        <div
          className={cn(
            "mb-8",
            showResults && qaFormat(qa, "5-1")
          )}
        >
          <div className="flex flex-wrap items-baseline mb-4">
            <span className="font-medium mr-2 font-sans">
              問1
            </span>
            <span>Choose four out of the five events (⓪-⑤) and rearrange them in the order they happened.</span>
            <div className="flex flex-wrap items-center justify-start mb-4 max-w-[1000px] overflow-x-auto">
              {renderSelect("30", 5, answers, setAnswers)}
              <span className="mx-0">→</span>
              {renderSelect("31", 5, answers, setAnswers)}
              <span className="mx-0">→</span>
              {renderSelect("32", 5, answers, setAnswers)}
              <span className="mx-0">→</span>
              {renderSelect("33", 5, answers, setAnswers)}
            </div>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"5-1"} isShow={showResults} />
              {Kaisetsu(showResults, "24-5-21")}
            </div>
          </div>
          <div className="space-y-2 pl-6">
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[0]} </span>
              <span className="text-gray-800">Kasumi becomes vice-president of her company.</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[1]} </span>
              <span className="text-gray-800">Kasumi gets in touch with Takuya.</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[2]} </span>
              <span className="text-gray-800">Maki gets her university degree.</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[3]} </span>
              <span className="text-gray-800">Maki starts working in her family business.</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[4]} </span>
              <span className="text-gray-800">Takuya is inspired to start his own business.</span>
            </div>
          </div>
        </div>

        {/* 問2 */}
        <div
          className={cn(
            "mb-8",
            showResults && qaFormat(qa, "5-2")
          )}
        >
          <div className="flex flex-wrap items-baseline mb-4">
            <span className="font-medium mr-2 font-sans">
              問2
            </span>
            <span>Choose the best option for</span>
            {renderSelect("34", 4, answers, setAnswers)}
              <span className="-ml-1 mr-2">.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"5-2"} isShow={showResults} />
              {Kaisetsu(showResults, "24-5-22")}
            </div>
          </div>
          <div className="space-y-2 pl-6">
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[0]} </span>
              <span className="text-gray-800">early 30s</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[1]} </span>
              <span className="text-gray-800">late 30s</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[2]} </span>
              <span className="text-gray-800">early 40s</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[3]} </span>
              <span className="text-gray-800">late 40s</span>
            </div>
          </div>
        </div>

        {/* 問3 */}
        <div
          className={cn(
            "mb-8",
            showResults && qaFormat(qa, "5-3")
          )}
        >
          <div className="flex flex-wrap items-baseline mb-4">
            <span className="font-medium mr-2 font-sans">
              問3
            </span>
            <span>Choose the best options for</span>
            {renderSelect("35", 5, answers, setAnswers)}
            <span className="mx-1">and</span>
            {renderSelect("36", 5, answers, setAnswers)}
            <span className="-ml-1 mr-2">.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"5-3"} isShow={showResults} />
              {Kaisetsu(showResults, "24-5-23")}
            </div>
          </div>
          <div className="space-y-2 pl-6">
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[0]} </span>
              <span className="text-gray-800">made the product known to people</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[1]} </span>
              <span className="text-gray-800">proposed a successful business idea</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[2]} </span>
              <span className="text-gray-800">purchased equipment for the business</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[3]} </span>
              <span className="text-gray-800">suggested moving to a bigger city</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[4]} </span>
              <span className="text-gray-800">taught the necessary skills for success</span>
            </div>
          </div>
        </div>

        {/* 問4 */}
        <div
          className={cn(
            "mb-8",
            showResults && qaFormat(qa, "5-4")
          )}
        >
          <div className="flex flex-wrap items-baseline mb-4">
            <span className="font-medium mr-2 font-sans">
              問4
            </span>
            <span>Choose the best option for</span>
            {renderSelect("37", 4, answers, setAnswers)}
            <span className="-ml-1 mr-2">.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"5-4"} isShow={showResults} />
              {Kaisetsu(showResults, "24-5-24")}
            </div>
          </div>
          <div className="space-y-2 pl-6">
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[0]} </span>
              <span className="text-gray-800">do not want to discuss their success</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[1]} </span>
              <span className="text-gray-800">have not spoken in a long time</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[2]} </span>
              <span className="text-gray-800">regret not appreciating their friend more</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[3]} </span>
              <span className="text-gray-800">think Maki was envious of their achievements</span>
            </div>
          </div>
        </div>

        {/* 問5 */}
        <div
          className={cn(
            "mb-8",
            showResults && qaFormat(qa, "5-5")
          )}
        >
          <div className="flex flex-wrap items-baseline mb-4">
            <span className="font-medium mr-2 font-sans">
              問5
            </span>
            <span>Choose the best option for</span>
            {renderSelect("38", 4, answers, setAnswers)}
            <span className="-ml-1 mr-2">.</span>
            <div className="flex flex-row gap-2">
              <Explain qa={qa} questionId={"5-5"} isShow={showResults} />
              {Kaisetsu(showResults, "24-5-25")}
            </div>
          </div>
          <div className="space-y-2 pl-6">
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[0]} </span>
              <span className="text-gray-800">like to try different things</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[1]} </span>
              <span className="text-gray-800">recognize her own talent</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[2]} </span>
              <span className="text-gray-800">understand the ability she lacks</span>
            </div>
            <div className="flex items-baseline">
              <span className="mr-4">{"①②③④⑤⑥"[3]} </span>
              <span className="text-gray-800">want to pursue her dreams</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex24_5;
