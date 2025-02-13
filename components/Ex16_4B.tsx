import React from "react";
import Image from "next/image";
const Ex16_4B = () => {
  return (
    <div className="p-8 max-w-3xl">
      {/* Original test questions section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="font-bold mr-2">B</span>
          <p className="text-sm">
            次のページの美術館に関するウェブサイトを読み、次の問い(問1～3)の
            <span className="inline-flex items-center mx-1">
              <div className="border border-black px-2 mx-1">39</div>～
              <div className="border border-black px-2 mx-1">41</div>
            </span>
            に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
          </p>
        </div>

        <div className="space-y-8">
          {/* Question 1 */}
          <div>
            <div className="flex items-start mb-4">
              <span className="font-bold mr-2 whitespace-nowrap">問1</span>
              <div>
                Kazuko, a 19-year-old shop assistant, wants to participate in a
                museum activity but is only free on weekday evenings. Which
                activity will she most likely choose?
                <span className="inline-block border border-black px-2 ml-2">
                  39
                </span>
              </div>
            </div>
            <div className="pl-8 space-y-2">
              <div>① Comprehensive tour</div>
              <div>② Drawing class</div>
              <div>③ Photography workshop</div>
              <div>④ Short tour</div>
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <div className="flex items-start mb-4">
              <span className="font-bold mr-2 whitespace-nowrap">問2</span>
              <div>
                A retired couple and their 6-year-old grandchild wish to
                participate together in a weekday afternoon activity. Which
                activity will they most likely choose and how much will they pay
                in total?
                <span className="inline-block border border-black px-2 ml-2">
                  40
                </span>
              </div>
            </div>
            <div className="pl-8 space-y-2">
              <div>① Comprehensive tour, $20</div>
              <div>② Comprehensive tour, $40</div>
              <div>③ Short tour, $20</div>
              <div>④ Short tour, $28</div>
            </div>
          </div>

          {/* Question 3 */}
          <div>
            <div className="flex items-start mb-4">
              <span className="font-bold mr-2 whitespace-nowrap">問3</span>
              <div>
                Which of the following is true according to the website?
                <span className="inline-block border border-black px-2 ml-2">
                  41
                </span>
              </div>
            </div>
            <div className="pl-8 space-y-2">
              <div>
                ① Advance booking is not necessary for &quot;Art Talks.&quot;
              </div>
              <div>② Comprehensive tours are held every day.</div>
              <div>
                ③ The admission fee is not included in the fees of tours.
              </div>
              <div>④ There are lectures given by amateur artists.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Museum Website Content */}
      <div className="mt-12">
        {/* Header with logo and title */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-[20%]">
            <Image
              src="/images/Ex16-4B-1.webp"
              className="w-full h-auto"
              alt="Museum logo"
              width={296}
              height={166}
            />
          </div>
          <h1 className="text-2xl font-bold w-[60%] text-center">
            Octagon Museum of Art
          </h1>
          <div className="w-[20%] flex justify-end">
            <Image
              src="/images/Ex16-4B-2.webp"
              alt="Number Icon"
              className="w-full h-auto max-w-[130px]"
              width={242}
              height={86}
            />
          </div>
        </div>

        {/* Introduction text */}
        <div className="mb-6 relative">
          <p className="mb-4 pr-[120px]">
            Octagon Museum of Art (OMA) offers exhibitions and programs
            featuring contemporary art such as paintings, sculptures, and
            photographs. Established in 1972 by the Octagon Foundation, it has a
            vast collection with many permanent exhibits, and also offers
            special exhibits, lectures by professional artists and critics,
            classes for school children, and tours guided by specialists.
          </p>
          <Image
            src="/images/Ex16-4B-3.webp"
            className="absolute right-0 top-0 w-[120px]"
            alt="Palette illustration"
            width={184}
            height={140}
          />
        </div>

        {/* Admission Fee */}
        <div className="mb-4">
          <p className="font-bold">
            Admission Fee:{" "}
            <span className="font-normal">
              $5/person (Children 6 and under — free)
            </span>
          </p>
        </div>

        {/* Program Fees Table */}
        <div className="mb-6">
          <h2 className="font-bold mb-2">Program Fees:</h2>
          <table className="w-full border-collapse border border-black">
            <tbody>
              <tr>
                <td rowSpan={3} className="border border-black p-2">
                  <div className="font-bold">Short tour</div>
                  <div>(90 minutes)</div>
                </td>
                <td className="border border-black p-2">Adult (18+)</td>
                <td className="border border-black p-2 text-center">$10</td>
                <td rowSpan={3} className="border border-black p-2">
                  Twice daily
                  <br />9 am & 2 pm
                </td>
              </tr>
              <tr>
                <td className="border border-black p-2">Student (7-17)</td>
                <td className="border border-black p-2 text-center">$8</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Child (6 and under)</td>
                <td className="border border-black p-2 text-center">free</td>
              </tr>
              {/* Comprehensive tour */}
              <tr>
                <td rowSpan={3} className="border border-black p-2">
                  <div className="font-bold">Comprehensive tour</div>
                  <div>(3 hours)</div>
                </td>
                <td className="border border-black p-2">Adult (18+)</td>
                <td className="border border-black p-2 text-center">$20</td>
                <td rowSpan={3} className="border border-black p-2">
                  Tuesday & Saturday
                  <br />
                  10 am
                </td>
              </tr>
              <tr>
                <td className="border border-black p-2">Student (7-17)</td>
                <td className="border border-black p-2 text-center">$15</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Child (6 and under)</td>
                <td className="border border-black p-2 text-center">free</td>
              </tr>
              {/* Drawing class */}
              <tr>
                <td rowSpan={3} className="border border-black p-2">
                  <div className="font-bold">Drawing class</div>
                  <div>(90 minutes)</div>
                </td>
                <td className="border border-black p-2">Adult (18+)</td>
                <td className="border border-black p-2 text-center">$15</td>
                <td className="border border-black p-2">Monday, 7 pm</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Student (7-17)</td>
                <td className="border border-black p-2 text-center">$8</td>
                <td className="border border-black p-2">Wednesday, 4 pm</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Child (6 and under)</td>
                <td className="border border-black p-2 text-center">free</td>
                <td className="border border-black p-2">Wednesday, 10 am</td>
              </tr>
              {/* Photography workshop */}
              <tr>
                <td rowSpan={2} className="border border-black p-2">
                  <div className="font-bold">Photography workshop</div>
                  <div>(2 hours)</div>
                </td>
                <td className="border border-black p-2">Adult (18+)</td>
                <td className="border border-black p-2 text-center">$17</td>
                <td className="border border-black p-2">Sunday, 7 pm</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Student (7-17)</td>
                <td className="border border-black p-2 text-center">$12</td>
                <td className="border border-black p-2">Sunday, 10 am</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div>
          <h2 className="font-bold mb-2">Notes:</h2>
          <ul className="space-y-2">
            <li>
              - The fees for tours, classes, and workshops include the admission
              fee.
            </li>
            <li>
              - Sign up{" "}
              <span className="border border-black px-2 bg-gray-200">here</span>{" "}
              at least a week in advance for tours, classes, and workshops.
            </li>
            <li>
              - We also offer &quot;Art Talks,&quot; where invited guest
              speakers talk to adult audiences in OMA Hall every other Saturday.
              No reservation or additional fee is required. For this
              month&apos;s schedule, click{" "}
              <span className="border border-black px-2 bg-gray-200">here</span>
              .
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ex16_4B;
