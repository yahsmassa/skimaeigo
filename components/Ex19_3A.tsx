import React from "react";

const ExamQuestion = () => {
  return (
    <div className="font-sans p-6 max-w-3xl mx-auto bg-white text-gray-800">
      {/* Question Number */}
      <div className="flex flex-wrap items-center mb-4">
        <h2 className="md:text-xl font-bold mr-4">第3問</h2>
        <p className="text-base">次の問い（A・B）に答えよ。（配点 33）</p>
      </div>

      {/* Part A Instructions */}
      <div className="ml-4 mb-6 mt-8">
        <div className="flex items-start">
          <span className="font-bold text-base md:text-lg mr-4">A</span>
          <div className="text-base leading-6 md:leading-8">
            <p>
              次の問い（問1～3）のパラグラフ（段落）には、まとまりをよくするために取り
              除いた方がよい文が一つある。取り除く文として最も適当なものを、それぞれ下
              線部①～④のうちから一つずつ選べ。
            </p>
          </div>
        </div>
      </div>

      {/* Question 1 */}
      <div className="ml-8 mb-8">
        <div className="flex items-center mb-4">
          <span className="font-bold mr-4">問 1</span>
          <div className="border border-gray-800 px-4 py-1 inline-block">
            <span className="text-center">27</span>
          </div>
        </div>

        {/* Paragraph with underlined options */}
        <div className="text-base leading-6 md:leading-8">
          <p className="mb-2">
            <span className="ml-8">
              When flying across the United States, you may see giant arrows
              made of concrete on the ground. Although nowadays these arrows are
              basically places of curiosity, in the past, pilots absolutely
              needed them when flying from one side of the country to the other.
            </span>
            <span className="ml-2 mr-1">①</span>
            <span className="underline decoration-2">
              The arrows were seen as being so successful that some people even
              suggested floating arrows on the Atlantic Ocean.
            </span>
            <span className="ml-2 mr-1">②</span>
            <span className="underline">
              Pilots used the arrows as guides on the flights between New York
              and San Francisco.
            </span>
            <span className="ml-2 mr-1">③</span>
            <span className="underline decoration-2">
              Every 16 kilometers, pilots would pass a 21-meter-long arrow that
              was painted bright yellow.
            </span>
            <span className="ml-2 mr-1">④</span>
            <span className="underline decoration-2">
              A rotating light in the middle and one light at each end made the
              arrow visible at night.
            </span>
            <span className="ml-2 ">
              Since the 1940s, other navigation methods have been introduced and
              the arrows are generally not used today. Pilots flying through
              mountainous areas in Montana, however, do still rely on some of
              them.
            </span>
          </p>
        </div>
      </div>

      {/* Question 2 */}
      <div className="ml-8 mb-8">
        <div className="flex items-center mb-4">
          <span className="font-bold mr-4">問 2</span>
          <div className="border border-gray-800 px-4 py-1 inline-block">
            <span className="text-center">28</span>
          </div>
        </div>

        {/* Paragraph with underlined options */}
        <div className="text-base leading-6 md:leading-8">
          <p className="mb-2">
            <span className="ml-8">
              Living in the city and living in the country require different
              skills. This is true for humans, of course, but also for birds. In
              one study, scientists took 53 birds from urban and rural areas of
              Barbados, one of the Caribbean islands, conducted a variety of
              tests, released them back into their natural surroundings, and
              reported their findings.
            </span>
            <span className="ml-2 mr-1">①</span>
            <span className="underline decoration-2">
              The birds from urban areas were better at problem-solving tasks
              than the ones from rural environments.
            </span>
            <span className="ml-2 mr-1">②</span>
            <span className="underline decoration-2">
              The researchers prepared several experiments to check the
              differences between the groups of birds.
            </span>
            <span className="ml-2 mr-1">③</span>
            <span className="underline decoration-2">
              The urban birds had more capacity to resist disease than the rural
              ones.
            </span>
            <span className="ml-2 mr-1">④</span>
            <span className="underline decoration-2">
              The researchers had expected that in comparison to the rural
              birds, the urban birds would be smarter but weaker.
            </span>
            <span className="ml-2">
              Being both smart and strong was thought to be unlikely. However,
              it seems that urban birds have it all.
            </span>
          </p>
        </div>
      </div>

      {/* Question 3 */}
      <div className="ml-8 mb-8">
        <div className="flex items-center mb-4">
          <span className="font-bold mr-4">問 3</span>
          <div className="border border-gray-800 px-4 py-1 inline-block">
            <span className="text-center">29</span>
          </div>
        </div>

        {/* Paragraph with underlined options */}
        <div className="text-base leading-6 md:leading-8">
          <p className="mb-2">
            <span className="ml-8">
              Formal dinners in England during the Tudor era (1485-1603) were
              called feasts. They were magnificent, and everything was done
              carefully in order to show one's wealth and place in society.
            </span>
            <span className="ml-2 mr-1">①</span>
            <span className="underline decoration-2">
              Whatever happened at the feasts reflected social class, even the
              order in which people walked into the room.
            </span>
            <span className="ml-2 mr-1">②</span>
            <span className="underline decoration-2">
              There was a top table and the highest ranking guest would sit on
              the right of the king or the queen.
            </span>
            <span className="ml-2 mr-1">③</span>
            <span className="underline decoration-2">
              Gold and silver dishes were also laid out to emphasize how rich
              the family was.
            </span>
            <span className="ml-2 mr-1">④</span>
            <span className="underline decoration-2">
              The way feasts were held during the Tudor era has been richly
              presented in various films.
            </span>
            <span className="ml-2">
              The guests were not allowed to start eating before the ruler and
              had to stop eating once he or she had finished. When you could and
              couldn't eat followed strict and complicated rules, like all
              aspects of the feast.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamQuestion;
