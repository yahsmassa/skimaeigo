import React from "react";

const Ex18_6 = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 ">
      {/* Question Header */}
      <div className="mb-6">
        <p className="text-lg mb-4">
          次の文章を読み、下の問い(A・B)に答えよ。なお、文章の左にある(1)～
          (6)はパラグラフ(段落)の番号を表している。(配点 36)
        </p>
      </div>

      {/* Reading Passage */}
      <div className="space-y-6">
        {/* Paragraph 1 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(1)</div>
          <div className="flex-grow">
            <p className="text-justify">
              History teaches us that technology and associated discoveries have
              changed how we understand the world. Many technological devices
              provide additional range and power to our natural capacities, such
              as our five senses. Among these devices, many enable us to see
              things that we cannot see with the naked eye. This change from
              invisible to visible has led to tremendous growth in our
              comprehension of the world and has strongly influenced our ways of
              thinking.
            </p>
          </div>
        </div>

        {/* Paragraph 2 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(2)</div>
          <div className="flex-grow">
            <p className="text-justify">
              In the 17th century, a scientist noticed that by holding two
              lenses together in a certain way he could make an object appear
              larger. He used this technique to construct the first simple
              telescope. Using these archaic telescopes, early scientists were
              able to describe the surface of the Moon in detail and to see that
              Jupiter had at least four such satellites. Since that time, people
              have developed various devices that expand our range of sight,
              thus revealing facts about the universe that lies beyond the
              Earth. The telescope continues to offer us new views concerning
              things beyond our immediate reach.
            </p>
          </div>
        </div>

        {/* Paragraph 3 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(3)</div>
          <div className="flex-grow">
            <p className="text-justify">
              Later, the microscope was developed using principles similar to
              the telescope. The microscope allows us to study objects we
              normally cannot see because they are too small. Looking through a
              microscope opened up an entirely new world to scientists. Before
              the invention of the microscope, they couldn&apos;t see the
              structures of human tissues or cells in plants and animals. When
              they saw these things, they became aware that some things that
              they had thought were whole and could not be divided, actually
              consisted of smaller components. These were only visible with the
              assistance of microscopes. Today, electron microscopes allow us to
              investigate even smaller items, such as molecules. These advances
              have altered our concepts regarding the composition of things in
              the world.
            </p>
          </div>
        </div>

        {/* Paragraph 4 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(4)</div>
          <div className="flex-grow">
            <p className="text-justify">
              The invention of the camera also made the invisible world visible.
              In the world, everything is changing. Some things change faster
              than we can see. The camera is a tool that gives us the power to
              freeze change at different points in time. Series of pictures have
              revealed how birds move in flight and athletes run. The camera can
              also help us see changes that are so gradual that we usually
              don&apos;t notice them. For example, by comparing photos of the
              same scene taken months or years apart, we can gain insights into
              how societies change. There are many other ways besides these in
              which the camera has changed our perceptions of the world.
            </p>
          </div>
        </div>

        {/* Paragraph 5 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(5)</div>
          <div className="flex-grow">
            <p className="text-justify">
              In the late 19th century, machines that used the newly discovered
              X-rays revolutionized the way in which we looked at things. Rather
              than seeing only the surface of an object, we gained the ability
              to look into it or through it, bringing the inner elements of many
              things into our range of view. This capability proved practical in
              the workplace, useful in laboratories and museums, and instructive
              in universities. One of the most important applications was in
              medicine. Doctors often had difficulty diagnosing illnesses or
              finding problems inside the body. X-rays allowed them to look into
              their patients, identify where there were problems, and cure them.
              This use of X-rays brought new understandings and methods for
              diagnosis and treatment.
            </p>
          </div>
        </div>

        {/* Paragraph 6 */}
        <div className="flex">
          <div className="w-12 flex-shrink-0">(6)</div>
          <div className="flex-grow">
            <p className="text-justify">
              Different technological devices have made it possible to observe
              things that we could not see with the naked eye. This has
              significantly altered our understandings of the world around us.
              Each technological advance changes us in unpredictable ways, and
              each discovery increases our knowledge about the world. Just as
              the devices mentioned above have done, new devices will continue
              to impact our lives and change our ways of thinking in the future.
            </p>
          </div>
        </div>
      </div>

      {/* Section A Questions */}
      <div className="mt-8 space-y-8">
        <div className="space-y-4">
          <p className="text-lg">
            A 次の問い(問1～5)の{" "}
            <span className="border border-black px-4 py-1 mx-1">46</span> ～{" "}
            <span className="border border-black px-4 py-1 mx-1">50</span>{" "}
            に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
          </p>

          {/* Question 1 */}
          <div className="ml-4 space-y-4">
            <div className="flex items-center">
              <span className="mr-4">問1</span>
              <p>
                Which of the following is closest to the meaning of{" "}
                <span className="underline">archaic</span> as used in paragraph
                (2)?
              </p>
              <span className="border border-black px-4 py-1 ml-2">46</span>
            </div>
            <div className="ml-8 space-y-2">
              <p>① advanced</p>
              <p>② contemporary</p>
              <p>③ ordinary</p>
              <p>④ primitive</p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="ml-4 space-y-4 mt-8">
            <div className="flex items-start">
              <span className="mr-4">問2</span>
              <p>
                According to paragraph (3), what did people learn by using
                microscopes?
              </p>
              <span className="border border-black px-4 py-1 ml-2">47</span>
            </div>
            <div className="ml-8 space-y-2">
              <p>① Cells were too small to be seen with microscopes.</p>
              <p>② Materials were made up of smaller things.</p>
              <p>③ Molecules were the smallest components.</p>
              <p>④ Sets of lenses decreased the size of items.</p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="ml-4 space-y-4 mt-8">
            <div className="flex items-start">
              <span className="mr-4">問3</span>
              <p>
                According to paragraph (4), what do cameras enable us to do?
              </p>
              <span className="border border-black px-4 py-1 ml-2">48</span>
            </div>
            <div className="ml-8 space-y-2">
              <p>① To capture moments in time accurately</p>
              <p>② To compare rapid social changes</p>
              <p>③ To make invisible things move faster</p>
              <p>④ To predict what will happen</p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="ml-4 space-y-4 mt-8">
            <div className="flex items-start">
              <span className="mr-4">問4</span>
              <p>According to paragraph (5), how are X-rays used?</p>
              <span className="border border-black px-4 py-1 ml-2">49</span>
            </div>
            <div className="ml-8 space-y-2">
              <p>① To find the locations of problems in the body</p>
              <p>② To improve visibility of objects&apos; surfaces</p>
              <p>③ To learn when paintings were created</p>
              <p>④ To test the quality of chemical compounds</p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="ml-4 space-y-4 mt-8">
            <div className="flex items-start">
              <span className="mr-4">問5</span>
              <p>What is the main idea of this passage?</p>
              <span className="border border-black px-4 py-1 ml-2">50</span>
            </div>
            <div className="ml-8 space-y-2">
              <p>
                ① Applications of two lenses can improve people&apos;s sight.
              </p>
              <p>② Development of technology affects our ways of thinking.</p>
              <p>③ People need to be aware of the dangers of technology.</p>
              <p>
                ④ Technology plays a vital role in changing our five senses.
              </p>
            </div>
          </div>
        </div>

        {/* Section B */}
        <div className="mt-12 space-y-6">
          <div className="space-y-4">
            <p className="text-lg">
              B
              次の表は、本文のパラグラフ(段落)の構成と内容をまとめたものである。
            </p>
            <p className="text-lg">
              <span className="border border-black px-4 py-1">51</span> ～{" "}
              <span className="border border-black px-4 py-1">54</span>{" "}
              に入れるのに最も適当なものを、下の①～④のうちから一つずつ選び、表を完成させよ。ただし、同じものを繰り返し選んではいけない。
            </p>
          </div>

          {/* Table */}
          <div className="w-full max-w-xl mx-auto">
            <table className="w-full border-collapse border border-black">
              <thead>
                <tr>
                  <th className="border border-black p-2 text-center">
                    Paragraph
                  </th>
                  <th className="border border-black p-2 text-center">
                    Content
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2 text-center">(1)</td>
                  <td className="border border-black p-2 text-center">
                    Introduction
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-center">(2)</td>
                  <td className="border border-black p-2 text-center">
                    <span className="border border-black px-4 py-1">51</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-center">(3)</td>
                  <td className="border border-black p-2 text-center">
                    <span className="border border-black px-4 py-1">52</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-center">(4)</td>
                  <td className="border border-black p-2 text-center">
                    <span className="border border-black px-4 py-1">53</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-center">(5)</td>
                  <td className="border border-black p-2 text-center">
                    <span className="border border-black px-4 py-1">54</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-center">(6)</td>
                  <td className="border border-black p-2 text-center">
                    Conclusion
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Options for Section B */}
          <div className="ml-8 space-y-2 mt-6">
            <p>① Examining the interiors of things</p>
            <p>② Exploring the universe of small things</p>
            <p>③ Looking at instants during a series of changes</p>
            <p>④ The use of lenses to look out into space</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex18_6;
