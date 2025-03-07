import React from "react";

const JapaneseTestQuestion = () => {
  return (
    <div className="p-6 font-serif max-w-3xl mx-auto">
      <div className="mb-6">
        <span className="text-xl font-bold font-sans">第3問</span>
        <span className="ml-4">次の問い(A～C)に答えよ。(配点　41)</span>
      </div>

      <div className="mb-8 ml-6">
        <div className="mb-4 flex items-start">
          <span className="font-bold mr-4">A</span>
          <div>
            <p className="mb-2">
              次の問い(問1・問2)の会話の
              <span className="inline-flex items-center mx-2">
                <div className="font-sans border-2 border-black w-10 h-8 flex justify-center items-center">
                  27
                </div>
              </span>
              ・
              <span className="inline-flex items-center mx-2">
                <div className="font-sans border-2 border-black w-10 h-8 flex justify-center items-center">
                  28
                </div>
              </span>
              に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
            </p>
          </div>
        </div>

        <div className="">
          {/* 問１ */}
          <div>
            {[
              {
                speaker: "Student",
                text: "Do you have time later today to check the draft of my speech?",
                questionNumber: "問１",
              },
              {
                speaker: "Teacher",
                text: "No, I'm afraid I don't have time today. I have several appointments this afternoon.",
              },
              {
                speaker: "Student",
                text: (
                  <div className="flex items-center -mt-1 md:mt-0">
                    <div>I see. Well . . . </div>
                    <div className="ml-2 border-2 border-black w-10 h-8 flex justify-center items-center">
                      27
                    </div>
                  </div>
                ),
              },
              {
                speaker: "Teacher",
                text: "Yes. And please send it to me by email so I can read it before you come.",
              },
            ].map((dialogue, index) => (
              <div key={index} className="md:flex items-start my-3">
                <div className="font-sans text-sm md:text-base w-[40px] md:w-[50px] font-bold">
                  {dialogue.questionNumber}
                </div>
                <div className="font-sans text-sm md:text-base w-[80px] font-bold">
                  {dialogue.speaker}:
                </div>
                <div>{dialogue.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-0 mb-6 md:ml-6">
            {[
              "Are you sure you can skip the appointments?",
              "Could I come to your office after school tomorrow?",
              "Shall I make an appointment with you for today?",
              "Would you kindly give me the draft to look at?",
            ].map((text, index) => (
              <div key={index} className="mb-1 flex">
                <div className="w-6 h-6 flex justify-center items-center mr-2">
                  {["①", "②", "③", "④"][index]}
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          {/* 問２ */}
          <div className="mb-6">
            {[
              {
                speaker: "Ken",
                text: "How about going to Memorial Park this weekend?",
                questionNumber: "問2",
              },
              {
                speaker: "Ethan",
                text: "How far is it from here?",
              },
              {
                speaker: "Ken",
                text: "Well, it takes about two hours by express train.",
              },
              {
                speaker: "Ethan",
                text: "Oh, that's a bit far. How much is it to get there?",
              },
              {
                speaker: "Ken",
                text: "About 6,000 yen. But I've heard it's really beautiful.",
              },
              {
                speaker: "Ethan",
                text: (
                  <div className="flex items-center">
                    <span>I know, but </span>
                    <div className="mx-2 border-2 border-black w-10 h-8 flex justify-center items-center">
                      28
                    </div>
                    <span>. Let's find somewhere else to go.</span>
                  </div>
                ),
              },
            ].map((dialogue, index) => (
              <div key={index} className="md:flex items-start mb-2">
                <div className="font-sans text-sm md:text-base w-[40px] md:w-[50px] font-bold">
                  {dialogue.questionNumber}
                </div>
                <div className="text-sm md:text-base w-[60px] font-bold">
                  {dialogue.speaker}:
                </div>
                <div className="">{dialogue.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-0 mb-6 md:ml-6">
            {[
              "I don't feel like going out",
              "it helps us to get there",
              "that's much too expensive",
              "we can't miss this chance",
            ].map((text, index) => (
              <div key={index} className="mb-1 flex">
                <div className="w-6 h-6 flex justify-center items-center mr-2">
                  {["①", "②", "③", "④"][index]}
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapaneseTestQuestion;
