import React from "react";

const JapaneseExamQuestion = () => {
  return (
    <div className="font-sans p-6 max-w-3xl mx-auto bg-white">
      {/* Question Header */}
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-bold mr-2">第3問</h2>
        <p className="text-base md:text-lg">
          次の問い(A～C)に答えよ。（配点 41）
        </p>
      </div>

      {/* Section A */}
      <div className="mb-8">
        <p className="flex  mb-4">
          <span className="font-bold text-lg mr-2">A</span>
          <span className="text-base">
            次の問い(問1・問2)の会話の
            <span className="inline-flex items-center mx-1">
              <div className="border border-black w-10 h-8 flex items-center justify-center mx-1">
                27
              </div>
              ・
              <div className="border border-black w-10 h-8 flex items-center justify-center mx-1">
                28
              </div>
            </span>
            に入れるのに最も適当なものを，それぞれ下の①～④のうちから一つずつ選べ。
          </span>
        </p>

        {/* Question 1 */}
        <div className="mb-6 pl-6">
          <p className="font-bold mb-2">問 1</p>
          <div className="space-y-2 mb-4">
            <p>
              <span className="font-bold mr-2">&nbsp;Sue:</span>You know,
              Peter's birthday is coming soon. Is everything going well for the
              surprise party?
            </p>
            <p>
              <span className="font-bold mr-2">Polly:</span>Yes. I've already
              bought and wrapped his present. Here, look.
            </p>
            <p className="flex items-center">
              <span className="font-bold mr-2">&nbsp;Sue:</span>
              <div className="border border-black w-10 h-8 flex items-center justify-center mx-2">
                27
              </div>
              <span>He might walk in at any moment.</span>
            </p>
            <p>
              <span className="font-bold mr-2">Polly:</span>OK. I'll put it away
              until the party.
            </p>
          </div>

          <div className="pl-8 space-y-2 mb-6">
            <p>① He doesn't like the color of the wrapping.</p>
            <p>② I don't have the slightest idea what to buy.</p>
            <p>③ Show him what you bought when he comes.</p>
            <p>④ You should hide it so that he won't see it.</p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="pl-6">
          <p className="font-bold mb-2">問 2</p>
          <div className="space-y-2 mb-4">
            <p>
              <span className="font-bold mr-2">Diego:</span>Did you do the
              English homework? It was difficult, wasn't it?
            </p>
            <p>
              <span className="font-bold mr-2">&nbsp;Fred:</span>Oh! I totally
              forgot about it.
            </p>
            <p>
              <span className="font-bold mr-2">Diego:</span>You can do it during
              lunch time.
            </p>
            <p className="flex items-center">
              <span className="font-bold mr-2">&nbsp;Fred:</span>
              <span>There's little point in even trying.</span>
              <div className="border border-black w-10 h-8 flex items-center justify-center mx-2">
                28
              </div>
            </p>
            <p>
              <span className="font-bold mr-2">Diego:</span>Don't give up. You
              need to pass English, right?
            </p>
          </div>

          <div className="pl-8 space-y-2">
            <p>① I'm sure I can make it.</p>
            <p>② It'd be a waste of time.</p>
            <p>③ Let me see what you can do.</p>
            <p>④ You don't want to miss it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapaneseExamQuestion;
