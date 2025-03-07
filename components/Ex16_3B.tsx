import React from "react";

const JapaneseTestComponent = () => {
  return (
    <div className="font-serif p-6 max-w-3xl mx-auto">
      <div className="mb-8">
        <p className="md:text-lg mb-4">
          <span className="font-bold">B</span>
          　次の問い（問１～３）のパラグラフ（段落）には，まとまりをよくするために
          <span className="font-bold">取り除いた方がよい</span>
          文が一つある。取り除く文として最も適当なものを，それぞれ下線部①～④のうちから一つずつ選べ。
        </p>
      </div>

      <div className="mb-10">
        <div className="flex items-center mb-2">
          <span className="font-bold mr-4">問１</span>
          <div className="border-2 border-black px-4 py-1">
            <span className="font-bold">29</span>
          </div>
        </div>

        <div className="text-base leading-6 md:leading-8 space-y-2">
          <p>
            <span className="ml-7">
              Students in Japan are now engaging more in practical activities
              and less in memorization of facts in class. Students are learning
              scientific principles through actual experience.
            </span>
            <span className="font-bold ml-2 mr-1">①</span>
            <span className="underline decoration-2">
              They do well in science in comparison with other students around
              the world.
            </span>
            <span className="font-bold ml-2 mr-1">②</span>
            <span className="underline decoration-2">
              They build electric motors using everyday goods, such as wire,
              magnets, and paper clips.
            </span>
            <span className="font-bold ml-2 mr-1">③</span>
            <span className="underline decoration-2">
              They make ice cream by hand with salt and ice.
            </span>
            <span className="font-bold ml-2 mr-1">④</span>
            <span className="underline decoration-2 mr-2">
              Students say that they like the new studying style because it is
              practical as well as enjoyable and educational.
            </span>
            <span className="">
              It is hoped that this new method will encourage students to become
              more interested in science.
            </span>
          </p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center mb-2">
          <span className="font-bold mr-4">問２</span>
          <div className="border-2 border-black px-4 py-1">
            <span className="font-bold">30</span>
          </div>
        </div>

        <div className="text-base leading-6 md:leading-8 space-y-2">
          <p>
            <span className="ml-7">
              Trial and error, an approach used in science, is often found in
              daily life. It can be observed when people do not feel well. They
              may already have a list of treatments they have used before. They
              can also consult a medical book or check the Internet for new
              treatments. They may decide to use any one of the treatments.
            </span>
            <span className="font-bold ml-2 mr-1">①</span>
            <span className="underline decoration-2">
              If the treatment does not improve the condition, they try another
              one.
            </span>
            <span className="font-bold ml-2 mr-1">②</span>
            <span className="underline decoration-2">
              They are concerned about how scientific the treatment is.
            </span>
            <span className="font-bold ml-2 mr-1">③</span>
            <span className="underline decoration-2">
              This is an example of how this approach is adopted in everyday
              life.
            </span>
            <span className="font-bold ml-2 mr-1">④</span>
            <span className="underline decoration-2">
              When an idea fails, they consider the alternatives.
            </span>
            <span className="">
              In this way, approaches used in science and daily life have some
              points in common.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JapaneseTestComponent;
