import React from "react";

const Ex19_5 = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 ">
      {/* Question Header */}
      <div className="flex items-center gap-4 mb-6">
        <p className="text-base leading-relaxed">
          次の文章を読み、下の問い(問1～5)の
          <span className="inline-flex items-center justify-center border border-black w-12 h-8 mx-2">
            41
          </span>
          ～
          <span className="inline-flex items-center justify-center border border-black w-12 h-8 mx-2">
            45
          </span>
          に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
        </p>
      </div>

      {/* Reading Passage */}
      <div className="space-y-6 leading-relaxed">
        <p className="indent-8">
          &quot;Christine, come and help me in the garden. I want to plant all
          of the seeds today.&quot; My father was calling to me. &quot;I&apos;m
          busy,&quot; I said. My father loves his garden, but at that time I
          didn&apos;t understand why working in the dirt excited him so much.
        </p>

        <p className="indent-8">
          By the end of April, his plants had come up in neat rows, and he put
          wooden stakes marked with the name of the vegetable on each row.
          Unfortunately, in early May, my father was seriously injured in an
          accident. He was in the hospital for about two months and during that
          time he often asked me about his garden. Even after he came home, he
          had to stay in bed for a while. My mother had several business trips
          so she couldn&apos;t take care of the garden. I didn&apos;t want my
          father to worry, so without being asked, I said that I would take care
          of his garden until he recovered. I assumed that the little plants
          would continue to grow as long as they had water, and luckily it
          rained fairly often so I didn&apos;t think much about the garden.
        </p>

        <p className="indent-8">
          One Saturday morning in July, my father said to me, &quot;Christine, I
          think that the vegetables should be about ready to be picked.
          Let&apos;s have a salad today!&quot; I took a bowl and went out to the
          garden. I looked at the leaf lettuce and was upset to see that many of
          the leaves had been half eaten. There were hundreds of bugs all over
          them! I tried to get them off, but there were just too many. I looked
          at the carrots next, but they didn&apos;t look healthy. I pulled up a
          carrot, but it was tiny and looked like something had taken small
          bites from it.
        </p>

        <p className="indent-8">
          I panicked for a moment, but then thought of a good idea. I got my
          wallet, quietly went out the door, and rode my bicycle to the nearest
          store to buy some vegetables. I went back home and cut them up to make
          a salad for my father.
        </p>

        <p className="indent-8">
          When I gave it to him, he said, &quot;Oh, Christine, what a beautiful
          salad! I can&apos;t believe the carrots are this big already. The
          lettuce is so crisp and delicious. You must be taking very good care
          of my garden.&quot; My father looked happy, but I felt a little bit
          guilty.
        </p>

        <p className="indent-8">
          I went back to the kitchen and was cleaning up when my mother came
          home from her most recent business trip. She saw the bag from the
          supermarket. I was embarrassed when she looked at me. So, I confessed,
          &quot;Dad wanted a salad, but the garden was a disaster. I didn&apos;t
          want to disappoint him so I went to the store.&quot; She laughed but
          promised to make time to help me in the garden, and we worked hard for
          the next few weeks. We made a mixture of water with chopped-up fresh
          hot peppers and then sprayed it on the vegetables. I thought this was
          a great idea because the spray is not harmful to humans or animals, or
          even the bugs. They simply don&apos;t like the spicy water. The{" "}
          <u>bug-free</u> vegetables grew quickly, and finally I was able to
          pick some.
        </p>

        <p className="indent-8">
          I carefully made a salad and took it to my father. He looked at it
          with a hint of a smile. &quot;Christine, the carrots are smaller in
          this salad, but they taste better.&quot; I realized that he had known
          all along about my shopping trip. I smiled back at him.
        </p>

        <p className="indent-8">
          Now, I better understand how putting a lot of effort into caring for
          something can help you appreciate the results more, however small they
          may be. Perhaps this was one of the reasons for my father&apos;s love
          of gardening.
        </p>

        <p className="indent-8">
          In a few days he&apos;ll be back in the garden. I&apos;ll be right
          beside him helping him in any way I can.
        </p>
      </div>

      {/* Questions Section */}
      <div className="mt-8 space-y-8">
        {/* Question 1 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold">問1</span>
            <span>
              Christine originally said she would do the gardening because she
            </span>
            <span className="inline-flex items-center justify-center border border-black w-12 h-8">
              41
            </span>
            <span>.</span>
          </div>
          <div className="space-y-2 ml-8">
            <p>① knew it was important to her father</p>
            <p>② wanted to improve her gardening skills</p>
            <p>③ was asked by her father to do it</p>
            <p>④ was interested in growing vegetables</p>
          </div>
        </div>

        {/* Question 2 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold">問2</span>
            <span>Which of the following was a problem in the garden?</span>
            <span className="inline-flex items-center justify-center border border-black w-12 h-8">
              42
            </span>
          </div>
          <div className="space-y-2 ml-8">
            <p>① Animals often dug in the garden.</p>
            <p>② Insects ate the lettuce and carrots.</p>
            <p>③ The plants were given too much water.</p>
            <p>④ The vegetables were marked incorrectly.</p>
          </div>
        </div>

        {/* Question 3 */}
        <div>
          <div className="flex items-start gap-2 mb-4">
            <span className="font-bold">問3</span>
            <div className="flex-1">
              <span>
                Christine could secretly make the salad from store-bought
                vegetables because
              </span>
              <span className="inline-flex items-center justify-center border border-black w-12 h-8 mx-2">
                43
              </span>
              <span>.</span>
            </div>
          </div>
          <div className="space-y-2 ml-8">
            <p>① her father couldn&apos;t see the garden&apos;s progress</p>
            <p>② her father was in the hospital at that time</p>
            <p>③ her mother helped her to buy the vegetables</p>
            <p>④ her mother helped her to make a spray</p>
          </div>
        </div>

        {/* Question 4 */}
        <div>
          <div className="flex items-start gap-2 mb-4">
            <span className="font-bold">問4</span>
            <div className="flex-1">
              <span>
                Which of the following is closest to the meaning of the
                underlined word{" "}
              </span>
              <span className="underline">bug-free</span>
              <span>?</span>
              <span className="inline-flex items-center justify-center border border-black w-12 h-8 mx-2">
                44
              </span>
            </div>
          </div>
          <div className="space-y-2 ml-8">
            <p>① All bugs have been killed.</p>
            <p>② Bugs can do what they like.</p>
            <p>③ No bugs can be found.</p>
            <p>④ The bugs don&apos;t cost any money.</p>
          </div>
        </div>

        {/* Question 5 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold">問5</span>
            <span>
              What did Christine learn through her experience of gardening?
            </span>
            <span className="inline-flex items-center justify-center border border-black w-12 h-8">
              45
            </span>
          </div>
          <div className="space-y-2 ml-8">
            <p>① Always prepare for a rainy day.</p>
            <p>② Don&apos;t be disappointed by bugs.</p>
            <p>③ Hard work can be rewarding.</p>
            <p>④ Working alone produces results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex19_5;
