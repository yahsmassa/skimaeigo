"use client";
import Image from "next/image";
import { Paperclip } from "lucide-react";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";
import { Kaisetsu } from "@/components/Kaisetsu";
const Ex21_5 = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "5-1",
      qa: [
        {
          questionNumber: "30",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解③「馬のように振る舞う雄牛のAstonを紹介しよう」",
        "解説 全体を読み概要が理解できていれば選ぶことは容易。雄牛のAstonがメインである。また、第３パラグラフの中盤（2ページ目の上から2行目）に、&quot;He responded to Sabine’s voice just like a horse.&quot;「彼はSabineの声にまるで馬のように応える」 とあるので、そこからも判断できる。",
      ],
    },
    {
      questionId: "5-2",
      qa: [
        {
          questionNumber: "31",
          answer: 0,
        },
      ],
      rightAnswerString: "4",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解④ ＊Main figures（主な登場人物・動物）・・・Aston, Sabine, the pony ＊Minor figures（脇の登場人物・動物）・・・Aston’s mother, the farmer",
        "解説 Main figuresの意味（「主な登場人物・動物」）とMinor figuresの意味（「脇の登場人物・動物」）が分からなかった受験生もいたと思うが、選択肢から「MainとMinorに分類する」という出題意図を読み取れると良い。これも全体のストーリー、特に登場人物および動物を識別して理解できていれば問題ないだろう。ちなみに、309はAstonと同じ雄牛であり、the ponyの名前はLeonである。 ",
      ],
    },
    {
      questionId: "5-3",
      qa: [
        {
          questionNumber: "32",
          answer: 0,
        },
        {
          questionNumber: "33",
          answer: 0,
        },
        {
          questionNumber: "34",
          answer: 0,
        },
        {
          questionNumber: "35",
          answer: 0,
        },
      ],
      rightAnswerString: "4351",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解④「Sabineが近くの農場に働きに行く」－③「Sabineは309とその母牛を買う」－⑤「Sabineは309を散歩に連れ出す」－①「Astonはジャンプを覚える」",
        "解説 第１パラグラフに、&quot;she spent hours watching cows on a nearby milk farm.&quot;「彼女(Sabine)は近所の農場で何時間も牛を見て過ごした」と書かれている。また、第２パラグラフに、&quot;The farmer agreed, and she bought them.&quot;「農夫は合意し、彼女(Sabine)はその親子（309とその母牛）を買った」とあり、その直後の文に、&quot;Sabine then started taking 309 for walks to town.&quot;「その後、Sabineは309を街への散歩に連れ出し始めた」と書かれている。そして、第３パラグラフ中盤以降に、&quot;it took him just 18 months to learn how to leap over one-meter-high horse jumps ~.&quot;「Astonが１メートルの高さのホースジャンプを超えるのにたった18カ月しかからなかった」と書かれている。",
      ],
    },
    {
      questionId: "5-4",
      qa: [
        {
          questionNumber: "36",
          answer: 0,
        },
        {
          questionNumber: "37",
          answer: 0,
        },
      ],
      rightAnswerString: "13",
      isOrderFree: true,
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解①「自ら自分のミスを修正する」③「背中に人を乗せたままジャンプする」",
        "解説 どちらも第３パラグラフに書かれている。①「自ら自分のミスを修正する」は、&quot;He also noticed his faults and correct them without any help from Sabine.&quot;という個所に一致している。③「背中に人を乗せたままジャンプする」は、&quot;~ to leap over one-meter-high horse jumps with Sabine on his back.という個所に一致している。それ以外の選択肢は、②「ポニーと並んでジャンプする」、④「馬よりも早く技を覚える」、⑤「写真のためにポーズを取る」であり、いずれも記述はない。",
      ],
    },
    {
      questionId: "5-5",
      qa: [
        {
          questionNumber: "38",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 3,
      explanation: [
        "正解①「ファンが増えている」",
        "解説 第６パラグラフに、&quot;now, Aston is a major attraction with a growing number of online followers.&quot;「今や、Astonは大きな注目を集め、オンライン上のフォロワーがますます増えている」とある。「online followersイコールfans」と読み取れば、この箇所と一致しているのが分かると思う。それ以外の選択肢は、②「Sabineを金持ちにした」、③「有名になり人々をもう怖がらせない」、④「馬用のトレーラーで一年多くの夜を過ごす」であり、いずれも記述はない。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);

  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold font-sans">{"第５問"}</h1>
          <span className="text-gray-600 font-sans">(配点 {15})</span>
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
      {/* Instructions paragraph */}
      <p className="text-base leading-relaxed mb-2">
        Using an international news report, you are going to take part in an
        English oral presentation contest. Read the following news story from
        France in preparation for your talk.
        {Kaisetsu(showResults, "21-5-0")}
      </p>

      {/* Main content box */}
      <div className="border border-gray-300 p-6 space-y-4">
        <p className="text-base leading-relaxed indent-7">
          Five years ago, Mrs. Sabine Rouas lost her horse. She had spent 20
          years with the horse before he died of old age. At that time, she felt
          that she could never own another horse. Out of loneliness, she spent
          hours watching cows on a nearby milk farm. Then, one day, she asked
          the farmer if she could help look after them.
          {Kaisetsu(showResults, "21-5-1")}
        </p>

        <p className="text-base leading-relaxed indent-7">
          The farmer agreed, and Sabine started work. She quickly developed a
          friendship with one of the cows. As the cow was pregnant, she spent
          more time with it than with the others. After the cow&apos;s baby was
          born, the baby started following Sabine around. Unfortunately, the
          farmer wasn&apos;t interested in keeping a bull—a male cow—on a milk
          farm. The farmer planned to sell the baby bull, which he called
          Three-oh-nine (309), to a meat market. Sabine decided she wasn&apos;t
          (309), to a meat market. Sabine decided she wasn&apos;t going to let
          that happen, so she asked the farmer if she could buy him and his
          mother. The farmer agreed, and she bought them. Sabine then started
          taking 309 for walks to town. About nine months later, when at last
          she had permission to move the animals, they moved to Sabine&apos;s
          farm. for walks to town. About nine months later, when at last she had
          permission to move the animals, they moved to Sabine&apos;s farm.
          {Kaisetsu(showResults, "21-5-2")}
        </p>

        <p className="text-base leading-relaxed indent-7">
          Soon after, Sabine was offered a pony. At first, she wasn&apos;t sure
          if she wanted to have him, but the memory of her horse was no longer
          painful, so she accepted the pony and named him Leon. She then decided
          to return to her old hobby and started training him for show jumping.
          Three-oh-nine, who she had renamed Aston, spent most of his time with
          Leon, and the two became really close friends. However, Sabine had not
          expected Aston to pay close attention to her training routine with
          Leon, nor had she expected Aston to pick up some tricks. The young
          bull quickly mastered walking, galloping, stopping, going backwards,
          and turning around on command. He responded to Sabine&apos;s voice
          just like a horse. And despite weighing 1,300 kg, it took him just 18
          months to learn how to leap over one-meter-high horse jumps with
          Sabine on his back. Aston might never have learned those things
          without having watched Leon. Moreover, Aston understood distance and
          could adjust his steps before a jump. He also noticed his faults and
          corrected them without any help from Sabine. That&apos;s something
          only the very best Olympic-standard horses can do.
          {Kaisetsu(showResults, "21-5-3")}
        </p>

        <p className="text-base leading-relaxed indent-7">
          Now Sabine and Aston go to weekend fairs and horse shows around Europe
          to show off his skills. Sabine says, &quot;We get a good reaction.
          Mostly, people are really surprised, and at first, they can be a bit
          scared because he&apos;s big—much bigger than a horse. Most people
          don&apos;t like to get too close to bulls with horns. But once they
          see his real nature, and see him performing, they often say, &apos;Oh
          he&apos;s really quite beautiful.&apos;&quot;
          {Kaisetsu(showResults, "21-5-4")}
        </p>

        <p className="text-base leading-relaxed indent-7">
          &quot;Look!&quot; And Sabine shows a photo of Aston on her smartphone.
          She then continues, &quot;When Aston was very young, I used to take
          him out for walks on a lead, like a dog, so that he would get used to
          humans. Maybe that&apos;s why he doesn&apos;t mind people. Because he
          is so calm, children, in particular, really like watching him and
          getting a chance to be close to him.&quot;
          {Kaisetsu(showResults, "21-5-5")}
        </p>

        <p className="text-base leading-relaxed indent-7">
          Over the last few years, news of the massive show-jumping bull has
          spread rapidly; now, Aston is a major attraction with a growing number
          of online followers. Aston and Sabine sometimes need to travel 200 or
          300 kilometers away from home, which means they have to stay
          overnight. Aston has to sleep in a horse box, which isn&apos;t really
          big enough for him.
          {Kaisetsu(showResults, "21-5-6")}
        </p>

        <p className="text-base leading-relaxed indent-7">
          &quot;He doesn&apos;t like it. I have to sleep with him in the
          box,&quot; says Sabine. &quot;But you know, when he wakes up and
          changes position, he is very careful not to crush me. He really is
          very gentle. He sometimes gets lonely, and he doesn&apos;t like being
          away from Leon for too long; but other than that, he&apos;s very
          happy.&quot;
          {Kaisetsu(showResults, "21-5-7")}
        </p>
      </div>
      <div className="mt-8">
        <Image
          src="/images/Ex21-5-1.webp"
          alt="Graph showing Number of Visitors to Westside Aquarium by time of day"
          className="mb-8 mx-auto"
          width={800}
          height={400}
        />
      </div>
      {/* 問セクション */}
      {/* Question 1 */}
      <div className={cn("space-y-4", showResults && qaFormat(qa, "5-1"))}>
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span className="whitespace-nowrap mr-2 font-sans">問 1</span>
          <span>Which is the best title for your presentation?</span>
          {renderSelect("30", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="5-1" />}
        </div>

        <div className="space-y-2 pl-2 md:pl-8">
          <div className="flex gap-4">
            <span>①</span>
            <span>Animal-lover Saves the Life of a Pony</span>
          </div>
          <div className="flex gap-4">
            <span>②</span>
            <span>Aston&apos;s Summer Show-jumping Tour</span>
          </div>
          <div className="flex gap-4">
            <span>③</span>
            <span>Meet Aston, the Bull who Behaves Like a Horse</span>
          </div>
          <div className="flex gap-4">
            <span>④</span>
            <span>The Relationship Between a Farmer and a Cow</span>
          </div>
        </div>
      </div>

      {/* Question 2 */}
      <div className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "5-2"))}>
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span className="whitespace-nowrap mr-2 font-sans">問 2</span>
          <span>
            Which is the best combination for the{" "}
            <span className="italic font-bold">Who&apos;s Who?</span> slide?
          </span>
          {renderSelect("31", 4, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="5-2" />}
        </div>

        <div className="grid grid-cols-2 gap-8 pl-0 md:pl-8 text-xs md:text-base">
          <div>
            <div className="underline mb-2 ml-5">Main figures</div>
            <div className="space-y-2 w-[200px] md:w-auto">
              <div className="flex gap-2 md:gap-4">
                <span>①</span>
                <span>309, Aston, the farmer</span>
              </div>
              <div className="flex gap-2 md:gap-4">
                <span>②</span>
                <span>Aston, Aston&apos;s mother, Sabine</span>
              </div>
              <div className="flex gap-2 md:gap-4">
                <span>③</span>
                <span>Aston, Leon, the farmer</span>
              </div>
              <div className="flex gap-2 md:gap-4">
                <span>④</span>
                <span>Aston, Sabine, the pony</span>
              </div>
            </div>
          </div>

          <div>
            <div className="underline mb-2">Minor figures</div>
            <div className="space-y-2 w-[200px] md:w-auto">
              <div>Sabine, the pony</div>
              <div>309, the farmer</div>
              <div>Aston&apos;s mother, Sabine</div>
              <div>Aston&apos;s mother, the farmer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Question 3 */}
      <div className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "5-3"))}>
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span className="whitespace-nowrap mr-2 font-sans">問 3</span>
          <span>
            Choose the four events in the order they happened to complete the
          </span>
          <span className="italic font-bold">Pre-fame Storyline</span> slide.
          {renderSelect("32", 5, answers, setAnswers)}
          {renderSelect("33", 5, answers, setAnswers)}
          {renderSelect("34", 5, answers, setAnswers)}
          {renderSelect("35", 5, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="5-3" />}
        </div>

        <div className="space-y-2 pl-2 md:pl-8">
          <div className="flex gap-4">
            <span>①</span>
            <span>Aston learns to jump.</span>
          </div>
          <div className="flex gap-4">
            <span>②</span>
            <span>
              Sabine and Aston travel hundreds of kilometers together.
            </span>
          </div>
          <div className="flex gap-4">
            <span>③</span>
            <span>Sabine buys 309 and his mother.</span>
          </div>
          <div className="flex gap-4">
            <span>④</span>
            <span>Sabine goes to work on her neighbor&apos;s farm.</span>
          </div>
          <div className="flex gap-4">
            <span>⑤</span>
            <span>Sabine takes 309 for walks.</span>
          </div>
        </div>
      </div>
      {/* Question 4 */}
      <div className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "5-4"))}>
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span className="whitespace-nowrap mr-2 font-sans">問 4</span>
          <span>
            Choose the two best items for the &nbsp;
            <span className="italic font-bold">
              Aston&apos;s Abilities
            </span>{" "}
            &nbsp;slide. (The order does not matter.)
          </span>
          {renderSelect("36", 5, answers, setAnswers)}
          {renderSelect("37", 5, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="5-4" />}
        </div>

        <div className="space-y-2 pl-2 md:pl-8">
          <div className="flex gap-4">
            <span>①</span>
            <span>correct his mistakes by himself</span>
          </div>
          <div className="flex gap-4">
            <span>②</span>
            <span>jump side-by-side with the pony</span>
          </div>
          <div className="flex gap-4">
            <span>③</span>
            <span>jump with a rider on his back</span>
          </div>
          <div className="flex gap-4">
            <span>④</span>
            <span>pick up tricks faster than a horse</span>
          </div>
          <div className="flex gap-4">
            <span>⑤</span>
            <span>pose for photographs</span>
          </div>
        </div>
      </div>

      {/* Question 5 */}
      <div className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "5-5"))}>
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span className="whitespace-nowrap mr-2 font-sans">問 5</span>
          <span>
            Complete the &nbsp;
            <span className="italic font-bold">Aston Now</span> &nbsp;slide with
            the most appropriate item.
          </span>
          {renderSelect("38", 5, answers, setAnswers)}
          {showResults && <Explain qa={qa} questionId="5-5" />}
        </div>

        <div className="space-y-2 pl-2 md:pl-8">
          <div className="flex gap-4">
            <span>①</span>
            <span>has an increasing number of fans</span>
          </div>
          <div className="flex gap-4">
            <span>②</span>
            <span>has made Sabine very wealthy</span>
          </div>
          <div className="flex gap-4">
            <span>③</span>
            <span>is so famous that he no longer frightens people</span>
          </div>
          <div className="flex gap-4">
            <span>④</span>
            <span>spends most nights of the year in a horse trailer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex21_5;
