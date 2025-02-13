import React from "react";
import { exPageFormat } from "@/lib/util";
const Ex20_5 = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      {/* Question Header */}
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-lg ">第5問</h2>
        <div className="flex items-center flex-wrap gap-1 ">
          次の文章を読み、下の問い(問1～5)の
          <div className="inline-flex border border-black px-4 py-1 mx-1">
            41
          </div>
          ～
          <div className="inline-flex border border-black px-4 py-1 mx-1">
            45
          </div>
          に入れるのに
        </div>
      </div>

      {/* Instructions */}
      <div className="mb-8 ml-8 ">
        最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。(配点 30)
      </div>

      {/* Reading Passage */}
      <div
        className="space-y-6 leading-relaxed  text-justify"
        style={{ lineHeight: "1.8" }}
      >
        <p>
          A couple of weeks ago, I was hiking with my dog on a mountain when
          something unexpected happened and I lost sight of him. I looked and
          looked but couldn't find him. He had been with me for so long that it
          was like I was missing part of my soul.
        </p>

        <p>
          Ever since that day, I had a strange feeling. It was beyond sadness—a
          feeling that I didn&apos;t quite understand, as if something were
          pulling me to go back to the mountain. So every chance I got, I
          grabbed my backpack to see if the mountain could offer me some sense
          of relief.
        </p>

        <p>
          One sunny morning, I stood at the foot of the mountain. Something felt
          different this day. &quot;Please forgive me,&quot; I said out loud.
          &quot;I&apos;ll find you!&quot; I took a deep breath and began my
          journey with this mysterious pull growing stronger. After making my
          way along paths I thought I knew well, I realized I was somehow in an
          unfamiliar place. I panicked a little, lost my footing, and slipped.
          From out of nowhere, an elderly man came running towards me and helped
          me up.
        </p>

        <p>
          Looking at his gentle, smiling face, I felt a sense of ease. The old
          man said he was looking for a way to the top of the mountain, so we
          decided to climb together.
        </p>

        <p>
          Soon the path began to feel familiar again. We talked about many
          things, including my dog. I told him that he was a German shepherd.
          When he was younger, he served briefly as a police dog but had to stop
          due to an injury. The man let out a laugh saying he had been a police
          officer for a short time, but he quit. He didn&apos;t say why. Later,
          he spent a long time as a bodyguard. He also had German roots. We
          laughed at these similarities.
        </p>

        <p>
          Before we knew it, we reached a large open area and took a break. I
          told the man what had happened to my dog. &quot;He had a tiny bell on
          his collar to scare away bears. We came to this very spot and saw a
          bear. It was looking back at us. I should have held my dog because,
          sensing danger, he chased after the bear. I couldn&apos;t find him
          after that. I should have been more careful.&quot;
        </p>

        <p>
          As I was telling the story, the man's expression changed. &quot;It
          wasn&apos;t your fault. Your dog just wanted to keep you safe,&quot;
          he said. &quot;I&apos;m sure Tomo would want to tell you this. Also,
          thank you for not giving up.&quot;
        </p>

        <p>
          Tomo is my dog's name. Did I tell him this? The old man's comment{" "}
          <span className="border-b border-black">rang in the air</span>.
        </p>

        <p>
          Before I could ask anything, the man proposed we hurry to get to the
          top of the mountain. I was planning to do this with my dog a few weeks
          ago. After two more hours of hiking, we reached the peak. I set down
          my backpack and we sat taking in the magnificent view. The old man
          looked at me and said, &quot;Mountains offer truly magical
          experiences.&quot;
        </p>

        <p>
          I looked around for a place to rest. I guess I was pretty tired,
          because I fell asleep right away. When I woke up, I noticed that the
          old man had disappeared. I waited, but he never returned.
        </p>

        <p>
          Suddenly, in the sunlight, something caught my eye. I walked over and
          saw a small metal tag beside my backpack. It was the same silver name
          tag that my parents originally gave to my dog.{" "}
          <span className="italic">Tomo</span> it said.
        </p>

        <p>
          It was then that I heard a familiar noise behind me. It was the
          ringing of a tiny bell. I turned around. What I saw caused so many
          emotions to rush over me.
        </p>

        <p>
          After a while on the mountaintop, I attached the name tag to my old
          friend and carefully made my way home with the mountain's gift beside
          me. My soul felt very much complete.
        </p>
      </div>

      {/* Questions Section */}
      <div className="mt-12 space-y-8 ">
        {/* Question 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span>問 1</span>
            <span>The author kept returning to the mountain because</span>
            <div className="inline-flex border border-black px-4 py-1">41</div>
            <span>.</span>
          </div>

          <div className="ml-8 space-y-2">
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ①
              </span>
              <span>she felt an urge she couldn't explain</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ②
              </span>
              <span>she planned to meet the elderly man</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ③
              </span>
              <span>she thought she could practice magic</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ④
              </span>
              <span>she wanted to find out about the bear</span>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <span>問 2</span>
            <div>
              <div>
                Which of the following happened first on the author's most
                recent trip?
              </div>
              <div className="inline-flex border border-black px-4 py-1 mt-2">
                42
              </div>
            </div>
          </div>

          <div className="ml-8 space-y-2">
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ①
              </span>
              <span>She arrived at a large open area.</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ②
              </span>
              <span>She climbed to the mountaintop.</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ③
              </span>
              <span>She saw a bear running away.</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ④
              </span>
              <span>She was assisted by an old man.</span>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span>問 3</span>
            <span>
              What similarity between the author's dog and the old man was
              talked about?
            </span>
            <div className="inline-flex border border-black px-4 py-1">43</div>
          </div>

          <div className="ml-8 space-y-2">
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ①
              </span>
              <span>They experienced workplace injuries.</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ②
              </span>
              <span>They recently lost close family friends.</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ③
              </span>
              <span>They were acquaintances of the author.</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ④
              </span>
              <span>They worked to help protect the public.</span>
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span>問 4</span>
            <span>
              Which of the following is closest to the meaning of the underlined
              phrase
            </span>
          </div>
          <div className="flex items-center gap-2 ml-8">
            <span className="border-b border-black">rang in the air</span>
            <span>as used in the text?</span>
            <div className="inline-flex border border-black px-4 py-1">44</div>
          </div>

          <div className="ml-8 space-y-2">
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ①
              </span>
              <span>brought happiness</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ②
              </span>
              <span>left an impression</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ③
              </span>
              <span>made a loud noise</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ④
              </span>
              <span>seemed offensive</span>
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className="space-y-4 mt-8">
          <div className="flex items-start gap-2">
            <span>問 5</span>
            <div>
              <div>
                How did the author's feelings change over the course of the last
                hiking
              </div>
              <div className="flex items-center gap-2">
                <span>experience?</span>
                <div className="inline-flex border border-black px-4 py-1">
                  45
                </div>
              </div>
            </div>
          </div>

          <div className="ml-8 space-y-2">
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ①
              </span>
              <span>She was depressed and then became sadder.</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ②
              </span>
              <span>She was determined and then became comforted.</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ③
              </span>
              <span>She was hopeful but then became homesick.</span>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full">
                ④
              </span>
              <span>She was miserable but then became entertained.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex20_5;
