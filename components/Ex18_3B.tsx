import React from "react";

const ConversationImage = () => {
  return (
    <div className="font-serif max-w-3xl mx-auto p-4 bg-white text-black">
      {/* タイトル部分 */}
      <div className="mb-6">
        <div className="flex flex-wrap items-start">
          <div className="flex items-center my-1 flex-wrap">
            <span className=" mr-2">B</span>
            <span className="mr-2">
              次の会話は，ある大学で映像制作の課題について学生たちが話し合いをしている場面の一部である。
            </span>
            <div className="border-2 border-black w-12 h-10 flex items-center justify-center mx-2">
              30
            </div>
            <span className="mx-1">～</span>
            <div className="border-2 border-black w-12 h-10 flex items-center justify-center mx-2">
              32
            </div>
            <span>
              に入れるのに最も適当なものを，それぞれ下の①～④のうちから一つずつ選べ。
            </span>
          </div>
        </div>
      </div>

      {/* 会話部分 */}
      <div className="space-y-6 text-base">
        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Jennifer:
          </div>
          <div className="flex-1 pl-4">
            Let's get started. We are supposed to create a film for a group
            project in our film-making class. As the group leader, I think the
            sooner we start, the better our movie will be. Does anyone have any
            ideas for our movie?
          </div>
        </div>

        <div className="flex">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Michael:
          </div>
          <div className="flex-1 pl-4">
            I do. I think many people watch movies to feel happier, so why don't
            we make something that can make people feel good? Last year, one
            group of students in this class made a documentary about our
            university basketball team. They filmed interviews with players and
            their training many times over a period of three months. For the
            audience, watching the documentary was a way of experiencing the
            hard work of the players, the friendships among the teammates from
            different backgrounds, the trust between the players and their
            coach, and finally the joy of their victory in the national
            tournament. Their amazing story of triumph appealed to a wide
            audience and everyone involved in the film received lots of praise.
            I would like to create a similar movie documenting people working
            hard and achieving their goals.
          </div>
        </div>

        <div className="flex items-center">
          <div className="font-bold w-24 shrink-0">Jennifer:</div>
          <div className="flex-1 pl-4 flex items-center">
            So, are you saying that
            <div className="border-2 border-black w-12 h-10 flex items-center justify-center mx-2">
              30
            </div>
            ?
          </div>
        </div>

        {/* 選択肢部分 */}
        <div className="mt-8 space-y-3 pl-12">
          {[
            "audiences enjoy watching stories of people achieving success",
            "audiences want to watch interviews of hardworking athletes",
            "documentary films can make audiences happy very easily",
            "it is important for us to spend a long time making our movie",
          ].map((text, index) => (
            <div key={index} className="flex">
              <div className="w-8 h-8 flex items-center justify-center mr-4">
                {["①", "②", "③", "④"][index]}
              </div>
              <div>{text}</div>
            </div>
          ))}
        </div>

        <div className="flex mt-6">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Michael:
          </div>
          <div className="flex-1 pl-4">Yes, that's right.</div>
        </div>

        {/* 新しく追加された会話部分 */}
        <div className="flex mt-6">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Kim:
          </div>
          <div className="flex-1 pl-4">
            Filming star players or people who are successful sounds
            interesting, but it may be difficult for ordinary people to identify
            themselves with the people in these extraordinary stories. I think
            people feel more satisfied when they watch movies that they can
            connect with. That's the reason people like love stories. People
            like to imagine: "How would I get her attention?"; "How would I ask
            him out on a date?"; or "Where would we go on our first date?"
          </div>
        </div>

        <div className="flex mt-6">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Mary:
          </div>
          <div className="flex-1 pl-4">
            I agree. People want to watch something on the screen that they can
            imagine themselves doing because it's familiar to them. And we can
            add a little suspense or excitement by asking the audience a "what
            if" question in an everyday setting. For example, what if we found a
            treasure map somewhere on campus? This could be the beginning of a
            nice, fun story, and it could make an exciting movie.
          </div>
        </div>

        <div className="flex mt-6 items-center">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Jennifer:
          </div>
          <div className="flex-1 pl-4 flex items-center">
            Kim and Mary, both of you think we should make a movie that
            <div className="border-2 border-black w-12 h-10 flex items-center justify-center mx-2">
              31
            </div>
            .
          </div>
        </div>

        {/* 新しい選択肢部分 */}
        <div className="mt-8 space-y-3 pl-12">
          {[
            "asks the audience many extraordinary questions",
            "focuses on successful people doing amazing things",
            "has situations that the average person can relate to",
            "uses the campus setting to create fun and suspense",
          ].map((text, index) => (
            <div key={index} className="flex">
              <div className="w-8 h-8 flex items-center justify-center mr-4">
                {["①", "②", "③", "④"][index]}
              </div>
              <div>{text}</div>
            </div>
          ))}
        </div>

        <div className="flex mt-6">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Mary:
          </div>
          <div className="flex-1 pl-4">Exactly.</div>
        </div>

        <div className="flex mt-6">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Takeshi:
          </div>
          <div className="flex-1 pl-4">
            But as a creative work, it should reflect the creator's unique
            vision, namely, an original way of looking at the world. A great
            movie usually reflects its director's creative vision in the story
            or in the way it is told. Remember, the audience wants to watch
            something novel, too. So, I think we need to think about what our
            original perspective could be.
          </div>
        </div>

        {/* 最後に追加された会話部分 */}
        <div className="flex mt-6">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Alisa:
          </div>
          <div className="flex-1 pl-4">
            Right. If we show something ordinary in an ordinary way, people
            might not be interested. For example, we are just college students.
            Some of us are dependent on our parents for support, whereas others
            are living by themselves for the first time. Some of us come from
            small towns, and others from big cities. Some of us may feel uneasy
            about our careers. All of these things sound very ordinary and not
            really special. So, is it possible to show our world in a unique way
            that will appeal to the audience?
          </div>
        </div>

        <div className="flex mt-6">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            John:
          </div>
          <div className="flex-1 pl-4">
            I think so. These things are not special separately, but the
            combination of all those things together can make our work unique. I
            think that's what people would like to see: a movie that they can
            associate with but that is told from a unique perspective.
          </div>
        </div>

        <div className="flex mt-6">
          <div className="font-bold w-16 text-sm md:text-base md:w-24 shrink-0">
            Jennifer:
          </div>
          <div className="flex-1 flex-row flex-wrap pl-4 items-center">
            Well, we have some different ideas about our film, but it sounds
            like everyone is saying that
            <div className="flex items-center">
              <div className="border-2 border-black w-12 h-10 flex items-center justify-center mx-2">
                32
              </div>
              is important when making our film.
            </div>
          </div>
        </div>

        {/* 新しい選択肢部分 */}
        <div className="mt-8 space-y-3 pl-12">
          {[
            "documenting people's real lives",
            "making the content highly original",
            "showing our different backgrounds",
            "thinking of audiences' preferences",
          ].map((text, index) => (
            <div key={index} className="flex">
              <div className="w-8 h-8 flex items-center justify-center mr-4">
                {["①", "②", "③", "④"][index]}
              </div>
              <div>{text}</div>
            </div>
          ))}
        </div>

        <div className="flex mt-6">
          <div className="w-16 text-sm md:text-base md:w-24 shrink-0">
            Jennifer:
          </div>
          <div className="flex-1 pl-4">
            OK. Let's discuss this in more depth.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationImage;
