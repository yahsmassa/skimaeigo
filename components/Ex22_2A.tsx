"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Saiten } from "@/components/Saiten";
import { Saiten2 } from "@/components/Saiten2";
import { cn, exPageFormat, qaFormat, renderSelect } from "@/lib/util";
import { Answers, QandA } from "@/lib/types";
import { Explain } from "@/components/Explain";

const Ex22_2A = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const question: QandA[] = [
    {
      questionId: "2A-1",
      qa: [
        {
          questionNumber: "6",
          answer: 0,
        },
      ],
      rightAnswerString: "5",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "⑤：図書館で行える2つのことについて正しい組み合わせを選ぶ問題。見出しのすぐ下にある Library Cards: Your student ID card is also your library card and photocopy card.（図書館カード：学生証は，図書館カードやコピーカードにもなります。）という記述から D の use your ID to make photocopies（コピーをするのに学生証を使う）が，また，Using Computers の項目にある &quot;Students may bring their own laptop computers and tablets into the library, but may use them only in the Study Area on the second floor.&quot;（学生は自分のノートパソコンやタブレット端末の持ち込みはできますが，3階のスタディエリアでのみ使用することができます。）という記述から，E の use your laptop in the Study Area が正しいとわかるので，⑤ D and E が正解。",
      ],
    },
    {
      questionId: "2A-2",
      qa: [
        {
          questionNumber: "7",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "③：今自分が図書館の正面玄関にいて，オリエンテーションに行きたい場合，どの階に行く必要があるかを問う問題。「図書館の正面玄関」が何階にあるのかと，オリエンテーションが何階で行われているかを把握する必要がある。前者は Using Computers の項目に &quot;Computers with Internet connections are in the Computer Workstations by the main entrance on the first floor.&quot;（インターネットに接続できるコンピューターは2階正面玄関脇のコンピューター・ワークステーションに設置されています。）とあることから the first floor（2階）だとわかる。後者は Library Orientations の項目に &quot;On Tuesdays at 10 am, 20-minute library orientations are held in the Reading Room on the third floor. &quot;（毎週火曜日午前10時から，4階閲覧室で20分間の図書館オリエンテーションを開催しています。）とあるので4階に行けばいいとわかる。よって，③ go up two floors（2階分上がる）が正解。",
      ],
    },
    {
      questionId: "2A-3",
      qa: [
        {
          questionNumber: "8",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "①：図書館の正面玄関のそばにあるのは何かを問う問題。問2で用いた&quot;Computers with Internet connections are in the Computer Workstations by the main entrance on the first floor.&quot;（インターネットに接続できるコンピューターは2階正面玄関脇のコンピューター・ワークステーションに設置されています。）という情報から，① The Computer Workstations are が正解。",
      ],
    },
    {
      questionId: "2A-4",
      qa: [
        {
          questionNumber: "9",
          answer: 0,
        },
      ],
      rightAnswerString: "3",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "③：「8月2日に3冊の本を借り，8月10日に返却したとしたら，どうなるか」を問う問題。本の貸し出しと返却については Borrowing Books の項目に &quot;You can borrow a maximum of eight books at one time for seven days. To check books out, go to the Information Desk, which is on the first floor. If books are not returned by the due date, you will not be allowed to borrow library books again for three days from the day the books are returned.&quot;（一度に7日間，最大8冊まで借りることができます。貸出手続きは2階のインフォメーションデスクに行ってください。本が返却期限までに返却されない場合，返却された日から3日間，再び図書館の本を借りることができなくなります。）と書かれている。8月2日に借りたなら返却期限は9日なので，10日に返却した場合，その日から3日間，図書館の本を借りることができない。よって，③ not borrow any more books before 13 August（8月13日までこれ以上本を借りられない）が正解。",
      ],
    },
    {
      questionId: "2A-5",
      qa: [
        {
          questionNumber: "10",
          answer: 0,
        },
      ],
      rightAnswerString: "1",
      answerString: "",
      isCorrect: false,
      points: 2,
      explanation: [
        "①：以前の学生が述べた一つの「事実」はどれかを選ぶ問題。Comments from Past Students の項目を参照して該当するものを探す。① headphones or earphones are necessary when watching videos（ビデオを見る際はヘッドフォンかイヤフォンが必要である）は &quot;When watching videos, you need to use your own earphones or headphones.&quot; と書かれているが，これはこの学生の主観的な判断ではないため，「事実」であると言える。よって，①が正解となる。② the library is open until 9 pm（図書館は夜9時まで開いている）は見出しのところに &quot;Open from 8 am to 9 pm&quot; とあるので「事実」と言えるが，過去の学生が述べているわけではないので誤り。③ the library orientation handouts are wonderful（図書館のオリエンテーションの資料は素晴らしい）は &quot;The library orientation was really good. The materials were great, too!&quot; と書かれてはいるが，これはこの学生の主観的な「意見（opinion）」であって，客観的な「事実」ではないので誤り。④ the Study Area is often empty（学習エリアはたびたび人がいない）は，&quot;The Study Area can get really crowded.&quot; と矛盾するので誤り。",
      ],
    },
  ];
  const [qa, setQA] = useState<QandA[]>(question);
  return (
    <div className={exPageFormat}>
      <div className="mb-4 sticky top-0 bg-white z-10 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <h1 className="text-lg font-bold">{"第２問 A"}</h1>
          <span className="text-gray-600">(配点 {10})</span>
        </div>
        <Saiten2
          qa={qa}
          setQA={setQA}
          showResults={showResults}
          setShowResults={setShowResults}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>
      {/* Context Header */}
      <div className="mb-4">
        <p className="text-base">
          A You are on a <span className="italic">Future Leader</span> summer
          programme, which is taking place on a university campus in the UK. You
          are reading the information about the library so that you can do your
          coursework.
        </p>
      </div>

      {/* Main Content Box */}
      <div className="border-2 border-black p-6">
        {/* Library Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">
            Abermouth University Library
          </h1>
          <p className="text-lg mb-1">Open from 8 am to 9 pm</p>
          <p className="text-lg">2022 Handout</p>
        </div>

        {/* Library Card Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Library Card:</h2>
          <p className="mb-4">
            Your student ID card is also your library card and photocopy card.
            It is in your welcome pack.
          </p>
          <div className="border-b-2 border-gray-300 w-full mb-4"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Borrowing Books Section */}
            <div>
              <h2 className="text-lg font-bold mb-2">Borrowing Books</h2>
              <p className="text-base">
                You can borrow a maximum of eight books at one time for seven
                days. To check books out, go to the Information Desk, which is
                on the first floor. If books are not returned by the due date,
                you will not be allowed to borrow library books again for three
                days from the day the books are returned.
              </p>
            </div>

            {/* Using Computers Section */}
            <div>
              <h2 className="text-lg font-bold mb-2">Using Computers</h2>
              <p className="text-base">
                Computers with Internet connections are in the Computer
                Workstations by the main entrance on the first floor. Students
                may bring their own laptop computers and tablets into the
                library, but may use them only in the Study Area on the second
                floor. Students are asked to work quietly, and also not to
                reserve seats for friends.
              </p>
            </div>

            {/* Library Orientations Section */}
            <div>
              <h2 className="text-lg font-bold mb-2">Library Orientations</h2>
              <p className="text-base">
                On Tuesdays at 10 am, 20-minute library orientations are held in
                the Reading Room on the third floor. Talk to the Information
                Desk staff for details.
              </p>
            </div>
          </div>

          {/* Right Column - Comments */}
          <div>
            <h2 className="text-lg font-bold mb-2">
              Comments from Past Students
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  The library orientation was really good. The materials were
                  great, too!
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  The Study Area can get really crowded. Get there as early as
                  possible to get a seat!
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  The Wi-Fi inside the library is quite slow, but the one at the
                  coffee shop next door is good. By the way, you cannot bring
                  any drinks into the library.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  The staff at the Information Desk answered all my questions.
                  Go there if you need any help!
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>
                  On the ground floor there are some TVs for watching the
                  library&apos;s videos. When watching videos, you need to use
                  your own earphones or headphones. Next to the TVs there are
                  photocopiers.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz Questions */}
      <div
        className={cn("mt-8 space-y-8", showResults && qaFormat(qa, "2A-1"))}
      >
        {/* Question 1 */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center">
            <span className="whitespace-nowrap mr-2">問 1</span>
            {renderSelect("6", 5, answers, setAnswers)}.
            {showResults && <Explain qa={qa} questionId="2A-1" />}
          </div>
        </div>

        <div className="space-y-2 mb-4 ml-4">
          <p>A : bring in coffee from the coffee shop</p>
          <p>B : save seats for others in the Study Area</p>
          <p>C : use the photocopiers on the second floor</p>
          <p>D : use your ID to make photocopies</p>
          <p>E : use your laptop in the Study Area</p>
        </div>

        <div className="ml-4 space-y-2">
          <p>① A and B</p>
          <p>② A and C</p>
          <p>③ B and E</p>
          <p>④ C and D</p>
          <p>⑤ D and E</p>
        </div>
      </div>

      {/* Question 2 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-2"))}
      >
        <div className="flex flex-wrap items-center">
          <span className="whitespace-nowrap mr-2">問 2</span>
          <span>
            You are at the main entrance of the library and want to go to the
            orientation. You need to
          </span>
          {renderSelect("7", 4, answers, setAnswers)}.
          {showResults && <Explain qa={qa} questionId="2A-2" />}
        </div>

        <div className="ml-4 space-y-2">
          <p>① go down one floor</p>
          <p>② go up one floor</p>
          <p>③ go up two floors</p>
          <p>④ stay on the same floor</p>
        </div>
      </div>

      {/* Question 3 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-3"))}
      >
        <div className="flex flex-wrap items-center">
          <span className="whitespace-nowrap mr-2">問 3</span>
          {renderSelect("8", 4, answers, setAnswers)}.
          <span>near the main entrance to the library.</span>
          {showResults && <Explain qa={qa} questionId="2A-3" />}
        </div>

        <div className="ml-4 space-y-2">
          <p>① The Computer Workstations are</p>
          <p>② The Reading Room is</p>
          <p>③ The Study Area is</p>
          <p>④ The TVs are</p>
        </div>
      </div>
      {/* Question 4 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-4"))}
      >
        <div className="flex flex-wrap items-center">
          <span className="whitespace-nowrap mr-2">問 4</span>
          <span>
            If you borrowed three books on 2 August and returned them on 10
            August, you could
          </span>
          {renderSelect("9", 4, answers, setAnswers)}.
          {showResults && <Explain qa={qa} questionId="2A-4" />}
        </div>

        <div className="ml-4 space-y-2">
          <p>① borrow eight more books on 10 August</p>
          <p>② borrow seven more books on 10 August</p>
          <p>③ not borrow any more books before 13 August</p>
          <p>④ not borrow any more books before 17 August</p>
        </div>
      </div>

      {/* Question 5 */}
      <div
        className={cn("space-y-4 mt-4", showResults && qaFormat(qa, "2A-5"))}
      >
        <div className="flex flex-wrap items-center">
          <span className="whitespace-nowrap mr-2">問 5</span>
          <span>
            One <span className="underline">fact</span> stated by a previous
            student is that
          </span>
          {renderSelect("10", 4, answers, setAnswers)}.
          {showResults && <Explain qa={qa} questionId="2A-5" />}
        </div>

        <div className="ml-4 space-y-2">
          <p>① headphones or earphones are necessary when watching videos</p>
          <p>② the library is open until 9 pm</p>
          <p>③ the library orientation handouts are wonderful</p>
          <p>④ the Study Area is often empty</p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Ex22_2A;
