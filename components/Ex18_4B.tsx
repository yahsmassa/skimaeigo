import React from "react";
import Image from "next/image";
const Ex18_4B = () => {
  return (
    <div className="p-6 max-w-3xl">
      {/* Section B Header */}
      <div className="mb-6 flex items-center">
        <span className="font-bold mr-2">B</span>
        <p className="text-sm">
          次のページの料理教室に関する広告を読み、次の問い(問1～4)の
          <span className="mx-1 border border-black px-2">37</span>～
          <span className="mx-1 border border-black px-2">40</span>
          に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つず
          つ選べ。
        </p>
      </div>

      {/* Question 1 */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="font-bold mr-2 whitespace-nowrap">問 1</span>
          <span>
            What inspired Ralph Bearison to start Papa Bear Cooking School?
          </span>
          <span className="mx-2 border border-black px-2">37</span>
        </div>
        <ol className="list-none pl-4">
          <li className="mb-1">
            ① He knew his family and friends were jealous of his cooking skills.
          </li>
          <li className="mb-1">
            ② He knew that fathers were not interested enough in cooking.
          </li>
          <li className="mb-1">
            ③ He wanted to give fathers opportunities to become professional
            cooks.
          </li>
          <li className="mb-1">
            ④ He wanted to teach fathers to cook quick, delicious, and healthy
            meals.
          </li>
        </ol>
      </div>

      {/* Question 2 */}
      <div className="mb-6">
        <div className="mb-2">
          <span className="font-bold mr-2 whitespace-nowrap">問 2</span>
          <span>
            Tony is going to participate in the French Course and use the
            discount coupon provided. He will also buy an apron-and-towel set
            from the school. How much will he pay in total?
          </span>
          <span className="mx-2 border border-black px-2">38</span>
        </div>
        <div className="flex gap-8 pl-4">
          <span>① $270</span>
          <span>② $275</span>
          <span>③ $285</span>
          <span>④ $300</span>
        </div>
      </div>

      {/* Question 3 */}
      <div className="mb-6">
        <div className="mb-2">
          <span className="font-bold mr-2 whitespace-nowrap">問 3</span>
          <span>
            Ed hopes to expand the variety of food he can cook for his family.
            He has no free time on weekends or mornings. Which cooking course
            would he most likely take?
          </span>
          <span className="mx-2 border border-black px-2">39</span>
        </div>
        <ol className="list-none pl-4">
          <li className="mb-1">① Chinese</li>
          <li className="mb-1">② Italian</li>
          <li className="mb-1">③ Japanese</li>
          <li className="mb-1">④ Sunday Family Breakfast</li>
        </ol>
      </div>

      {/* Question 4 */}
      <div className="mb-6">
        <div className="mb-2">
          <span className="font-bold mr-2 whitespace-nowrap">問 4</span>
          <span>The advertisement suggests that</span>
          <span className="mx-2 border border-black px-2">40</span>
          <span>.</span>
        </div>
        <ol className="list-none pl-4">
          <li className="mb-1">
            ① 12-year-old children can participate in the Sunday course at no
            cost
          </li>
          <li className="mb-1">
            ② Cooking Courses for Fathers will last longer than three months
          </li>
          <li className="mb-1">
            ③ Papa Bear Cooking School requires students to bring ingredients to
            classes
          </li>
          <li className="mb-1">
            ④ students at Papa Bear Cooking School can eat the food they cook
          </li>
        </ol>
      </div>

      {/* Advertisement Content */}
      <div className="mt-8 border-t pt-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1"></div>
          <div className="text-center flex-1">
            <h1 className="text-base font-bold mb-2">
              Papa Bear Cooking School:
            </h1>
            <h2 className="text-base font-bold">Cooking Courses for Fathers</h2>
          </div>
          <div className="flex-1 flex justify-end">
            <Image
              src="/images/Ex18-4B-1.webp"
              alt="Frying pan illustration"
              className="w-[120px]"
              width={120}
              height={120}
              priority
            />
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-4">
            Papa Bear Cooking School was established in 1992 by Ralph Bearison.
            He recognized that many fathers liked to cook but often didn&apos;t
            have enough time to prepare meals. He hoped to share his interest in
            cooking meals in a short time that would taste good and be good for
            their families. At Papa Bear Cooking School, you can learn to create
            a variety of meals under the guidance of professional cooks, making
            you the envy of your family and friends. The following cooking
            courses start in the first week of May.
          </p>

          <table className="w-full border-collapse border mb-4">
            <thead>
              <tr>
                <th className="border p-2">Cooking Course</th>
                <th className="border p-2">Day</th>
                <th className="border p-2">Time</th>
                <th className="border p-2">Course Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Italian</td>
                <td className="border p-2">Tuesday</td>
                <td className="border p-2 text-center">10:00 – 12:00</td>
                <td className="border p-2 text-center">$150</td>
              </tr>
              <tr>
                <td className="border p-2">French</td>
                <td className="border p-2">Wednesday</td>
                <td className="border p-2 text-center">9:00 – 12:00</td>
                <td className="border p-2 text-center">$250</td>
              </tr>
              <tr>
                <td className="border p-2">Japanese</td>
                <td className="border p-2">Thursday</td>
                <td className="border p-2 text-center">15:00 – 18:00</td>
                <td className="border p-2 text-center">$250</td>
              </tr>
              <tr>
                <td className="border p-2">Chinese</td>
                <td className="border p-2">Saturday</td>
                <td className="border p-2 text-center">17:00 – 19:00</td>
                <td className="border p-2 text-center">$200</td>
              </tr>
              <tr>
                <td className="border p-2">Sunday Family Breakfast*</td>
                <td className="border p-2">Sunday</td>
                <td className="border p-2 text-center">8:00 – 10:00</td>
                <td className="border p-2 text-center">$150</td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm mb-4">
            *Children aged 10 to 15 are welcome to join their fathers in the
            Sunday Family Breakfast Course for $100 per child.
          </p>
        </div>

        <div className="flex justify-between items-start mb-6">
          <div>
            <ul className="list-none mb-4">
              <li className="mb-2">➢ All courses are 10 weeks long.</li>
              <li className="mb-2">➢ Fees include all ingredients.</li>
              <li className="mb-2">
                ➢ Cooking knives, silverware, such as forks and spoons, and
                plates will be provided by the school.
              </li>
            </ul>
          </div>
          <Image
            src="/images/Ex18-4B-2.webp"
            alt="Plate and utensils illustration"
            className="w-[110px]"
            width={110}
            height={110}
            priority
          />
        </div>

        <div className="mb-6">
          <h3 className="font-bold mb-2">What to Bring</h3>
          <ul className="list-none">
            <li className="mb-2">
              ➢ An apron and towels (You can rent an apron-and-towel set for $6
              per week or purchase a new set at our store for $50.)
            </li>
            <li className="mb-2">➢ An empty stomach!</li>
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <p>
            Check out our Papa Bear Cooking School website for details of our
            facilities and other cooking courses.
          </p>
          <Image
            src="/images/Ex18-4B-3.webp"
            alt="Papa Bear Cooking School discount coupon"
            className="w-[110px]"
            width={110}
            height={110}
            priority
          />

          {/* <div className="border-2 border-dashed p-4 text-center">
            <div className="mb-2">✂</div>
            <div className="font-bold">10% Off</div>
            <div className="font-bold">Course Fee</div>
            <div className="font-bold">Papa Bear</div>
            <div className="font-bold">Cooking School</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Ex18_4B;
