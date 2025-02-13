import React from "react";
import Image from "next/image";
const Ex17_4A = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Question Header */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-lg font-bold">第4問</h2>
        <p>次の問い（A・B）に答えよ。（配点 35）</p>
      </div>

      {/* Section A */}
      <div className="space-y-4">
        <div className="mb-6">
          <p className="mb-4">
            A
            次の文章はある説明文の一部である。この文章と図を読み、下の問い（問1～4）の
            <span className="inline-flex gap-2">
              <span className="border border-black px-4 py-1">35</span>～
              <span className="border border-black px-4 py-1">38</span>
            </span>
            に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
          </p>
        </div>

        {/* Main Text */}
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            Physical activity in your childhood, such as playing sports and
            exercising, can greatly benefit your health when you are older.
            Therefore, it is important to promote physical activity in childhood
            for one&apos;s good health. The schoolyard is one place where
            children and adolescents can be encouraged to take part in physical
            activity. Thus, knowing how schoolyards are used by students may
            give us some helpful ideas to promote their physical activity.
          </p>

          <p>
            A study was conducted at four schools in Denmark in order to
            investigate how much different types of schoolyard areas were used
            and whether students were active or passive in those areas. In the
            study, schoolyard areas were classified and defined by their primary
            characteristics. <i>Grass</i> represented playing fields and natural
            green lawn areas, often used for soccer, but without any marked
            lines or goals. <i>Multi-court</i> referred to fenced areas on
            various surfaces, like artificial grass and rubber, designed for
            tennis and other such ball games. <i>Natural</i> represented areas
            with, for example, bushes, trees, and natural stones.{" "}
            <i>Playground</i> represented areas with play equipment, such as
            swings and slides on safe surfaces like sand. <i>Solid Surface</i>{" "}
            described the areas with the hardest surfaces, like concrete. These
            areas were identified by flat open spaces, often having numerous
            markings painted for games and benches set in different places.
          </p>

          <p>
            Using GPS devices and other instruments, the researchers measured
            the lengths of time the students spent in the different schoolyard
            areas as well as the degrees of their physical activity. Figure 1
            displays the average amounts of time spent per day in each area for
            All students and those averages divided into Children (aged 12 and
            under) and Adolescents (aged 13 and over). Solid Surface was clearly
            the area in which All students spent most of their time, followed by
            Multi-court then Grass. Natural and Playground showed similar
            averages for All students, with the average for All students in
            Playground being just over two minutes.
          </p>

          {/* Graph */}
          <div className="my-8">
            <Image
              src="/images/Ex17-4A-1.webp"
              alt="Figure 1. Average times spent in each area by All students, Children, and Adolescents"
              className="w-full"
              width={1000}
              height={605}
              priority
            />

            <p className="text-center mt-2 italic">
              Figure 1. Average times spent in each area by All students,
              Children, and Adolescents.
            </p>
          </div>

          <p>
            Furthermore, the study revealed differences between the average
            amounts of time spent in schoolyards by Children and Adolescents. In
            comparison with Adolescents, Children spent more time in all
            schoolyard areas except for Natural areas. The greater amount of
            time spent by Children might be explained by the fact that,
            according to the regulations at all four schools, Children could not
            leave the schoolyard during lunch time, but Adolescents could when
            they wanted to.
          </p>

          <p>
            When looking at the degree of physical activity, researchers
            discovered differences among the schoolyard areas. Students were
            most active in Grass and Playground areas. On the other hand,
            students were quite passive in Solid Surface areas, with Adolescents
            spending only 7% of their time there being physically active.
          </p>

          <p>
            The findings of this study show the importance of investigating the
            potential of various environments and features in schoolyards. To
            promote students&apos; health, it is also beneficial to observe how
            varieties of games Children and Adolescents play affect the length
            of time spent taking part in physical activity. Let us now take a
            look at these relationships.
          </p>

          <p className="italic">
            (Henriette Bondo Andersen 他(2015) Objectively Measured Differences
            in Physical Activity in Five Types of Schoolyard Area を参考に作成)
          </p>

          {/* Questions Section */}
          <div className="mt-8 space-y-6">
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                問1 According to the passage, what is the difference between
                Multi-court and Solid Surface?
                <span className="border border-black px-4 py-1">35</span>
              </p>

              <div className="space-y-4 pl-8">
                <p>
                  ① Unlike Multi-court, Solid Surface contains artificial grass
                  for younger students to play on.
                </p>

                <p>
                  ② Unlike Multi-court, Solid Surface does not contain
                  boundaries marked for students&apos; games.
                </p>

                <p>
                  ③ Unlike Solid Surface, Multi-court has a relatively soft
                  surface made of various materials.
                </p>

                <p>
                  ④ Unlike Solid Surface, Multi-court is not surrounded by
                  anything, which makes it easy to access.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-4 mt-8">
              <p className="flex items-center gap-2">
                問2 In Figure 1, which of the following do (A), (B), (C), and
                (D) refer to?
                <span className="border border-black px-4 py-1">36</span>
              </p>

              <div className="space-y-4 pl-8">
                <p>
                  ① (A) Grass　　 (B) Multi-court　(C) Natural　　 (D)
                  Playground
                </p>
                <p>
                  ② (A) Grass　　 (B) Multi-court　(C) Playground　(D) Natural
                </p>
                <p>
                  ③ (A) Multi-court (B) Grass　　　(C) Natural　　 (D)
                  Playground
                </p>
                <p>
                  ④ (A) Multi-court (B) Grass　　　(C) Playground　(D) Natural
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-4 mt-8">
              <p className="flex items-center gap-2">
                問3 The main purpose of this passage is to
                <span className="border border-black px-4 py-1">37</span>.
              </p>

              <div className="space-y-4 pl-8">
                <p>
                  ① discuss the benefits of being physically active at school in
                  childhood
                </p>
                <p>
                  ② give advice to increase the number of physically active
                  adolescents
                </p>
                <p>
                  ③ introduce schools that encourage students to play on grassed
                  areas
                </p>
                <p>
                  ④ show that types of schoolyards affect students&apos;
                  behavior there
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div className="space-y-4 mt-8">
              <p className="flex items-center gap-2">
                問4 What topic is most likely to follow the last paragraph?
                <span className="border border-black px-4 py-1">38</span>
              </p>

              <div className="space-y-4 pl-8">
                <p>
                  ① The benefits of studying various school environments for
                  different activities
                </p>
                <p>
                  ② The connections between types of games and lengths of time
                  being active
                </p>
                <p>
                  ③ The influence of the schoolyard environment on
                  Adolescents&apos; physical activity
                </p>
                <p>
                  ④ The way schoolyard surfaces affect the time spent doing
                  physical activity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex17_4A;
