import React from "react";

const Ex19_4B = () => {
  return (
    <div className="p-8  text-black">
      <div className="mb-24">
        {/* Quiz Questions */}
        <div className="mb-6">
          <p className="mb-4">
            <span className="font-bold mr-2">B</span>
            次のページの、ある地域の城に関する案内を読み、次の問い(問1～4)の
            <span className="mx-2 border border-black px-2">37</span>～
            <span className="border border-black px-2">40</span>
            に入れるのに最も適当なものを、それぞれ下の①～④のうちから一つずつ選べ。
          </p>
        </div>

        {/* Version 1 */}
        <div className="mb-6">
          <p className="mb-2">
            <span className="font-bold mr-2">問1</span>
            What is a common characteristic of all four castles?
            <span className="ml-2 border border-black px-2">37</span>
          </p>
          <ol className="list-none pl-8">
            <li>① Amount of damage</li>
            <li>② Displays of pictures and weapons</li>
            <li>③ Histories of more than 500 years</li>
            <li>④ Purposes of construction</li>
          </ol>
        </div>

        {/* Version 2 */}
        <div className="mb-6">
          <p className="mb-2">
            <span className="font-bold mr-2">問2</span>
            Three guitar club members from Grandlefolk University want to give a
          </p>
          <p className="ml-8 mb-2">
            concert one afternoon in April. Which castle are they most likely to
            choose?
            <span className="ml-2 border border-black px-2">38</span>
          </p>
          <ol className="list-none pl-8">
            <li>① Crestvale Castle</li>
            <li>② Holmsted Castle</li>
            <li>③ King&apos;s Castle</li>
            <li>④ Rosebush Castle</li>
          </ol>
        </div>

        {/* Version 3 */}
        <div className="mb-6">
          <p className="mb-2">
            <span className="font-bold mr-2">問3</span>
            Teachers at one school want to take their students to Grandlefolk
            one
          </p>
          <p className="ml-8 mb-2">
            Saturday in May. The purpose is to expand the students&apos;
            knowledge of the
          </p>
          <p className="ml-8 mb-2">
            area&apos;s history by visiting castles and listening to
            explanations from the castle
          </p>
          <p className="ml-8 mb-2">
            staff. Which two castles are the teachers most likely to select?
            <span className="ml-2 border border-black px-2">39</span>
          </p>
          <ol className="list-none pl-8">
            <li>① Crestvale Castle and Holmsted Castle</li>
            <li>② Crestvale Castle and King&apos;s Castle</li>
            <li>③ Rosebush Castle and Holmsted Castle</li>
            <li>④ Rosebush Castle and King&apos;s Castle</li>
          </ol>
        </div>

        {/* Version 4 */}
        <div className="mb-6">
          <p className="mb-2">
            <span className="font-bold mr-2">問4</span>A mother, father, and
            their two children, ages 4 and 8, will visit one of the
          </p>
          <p className="ml-8 mb-2">
            castles in Grandlefolk for one day in September and want to see fine
            arts.
          </p>
          <p className="ml-8 mb-2">
            How much will it cost?
            <span className="ml-2 border border-black px-2">40</span>
          </p>
          <ol className="list-none pl-8">
            <li>① €14</li>
            <li>② €17</li>
            <li>③ €20</li>
            <li>④ €25</li>
          </ol>
        </div>
      </div>

      {/* Castle Information Section */}
      <div>
        <h2 className="text-center text-xl mb-8">Castles in Grandlefolk</h2>

        {/* Crestvale Castle */}
        <div className="mb-8">
          <h3 className="font-bold mb-2 border-b border-black inline-block">
            Crestvale Castle
          </h3>
          <p className="mb-4">
            This ruined 13th-century castle, built to defend the northern border
            of Grandlefolk, is currently being studied by researchers. During
            the open season, except on Sundays, guides explain what the research
            is revealing about local history.
          </p>
        </div>

        {/* Holmsted Castle */}
        <div className="mb-8">
          <h3 className="font-bold mb-2 border-b border-black inline-block">
            Holmsted Castle
          </h3>
          <p className="mb-4">
            Holmsted Castle, built in the 12th century to protect the southern
            border area, fell into ruin in the 16th century. At the entrance,
            signboards explain its history. This castle&apos;s open spaces are
            suitable for performances.
          </p>
        </div>

        {/* King's Castle */}
        <div className="mb-8">
          <h3 className="font-bold mb-2 border-b border-black inline-block">
            King&apos;s Castle
          </h3>
          <p className="mb-4">
            Dating back to the 11th century, King&apos;s Castle is one of the
            grandest in the country. Its large collection of paintings and
            furniture provide a look at the area&apos;s past. Guides are
            available every day.
          </p>
        </div>

        {/* Rosebush Castle */}
        <div className="mb-8">
          <h3 className="font-bold mb-2 border-b border-black inline-block">
            Rosebush Castle
          </h3>
          <p className="mb-4">
            Though called a castle, this perfectly preserved 15th-century
            building was constructed purely as a family home. From Mondays to
            Fridays, guides tell the story of the family&apos;s history and
            explain their collection of modern sculptures. Some of its rooms are
            available for public events.
          </p>
        </div>

        {/* Admission Table */}
        <table className="w-full border-collapse border border-gray-800 mt-8">
          <thead>
            <tr>
              <th className="border border-gray-800 p-2"></th>
              <th
                className="border border-gray-800 p-2 text-center"
                colSpan={2}
              >
                Opening Times
              </th>
              <th
                className="border border-gray-800 p-2 text-center"
                colSpan={2}
              >
                Daily Admission
              </th>
            </tr>
            <tr>
              <th className="border border-gray-800 p-2"></th>
              <th className="border border-gray-800 p-2">Months</th>
              <th className="border border-gray-800 p-2">Hours</th>
              <th className="border border-gray-800 p-2">Adults</th>
              <th className="border border-gray-800 p-2">
                Children
                <br />
                (5-16 years old)*
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-800 p-2">Crestvale Castle</td>
              <td className="border border-gray-800 p-2">April - October</td>
              <td className="border border-gray-800 p-2 text-center">
                10:00 - 16:00
              </td>
              <td className="border border-gray-800 p-2 text-center">€3</td>
              <td className="border border-gray-800 p-2 text-center">€1</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-2">Holmsted Castle</td>
              <td className="border border-gray-800 p-2">April - September</td>
              <td className="border border-gray-800 p-2 text-center">
                10:00 - 17:00
              </td>
              <td className="border border-gray-800 p-2 text-center">€5</td>
              <td className="border border-gray-800 p-2 text-center">€2</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-2">King&apos;s Castle</td>
              <td className="border border-gray-800 p-2">April - November</td>
              <td className="border border-gray-800 p-2 text-center">
                10:00 - 18:00
              </td>
              <td className="border border-gray-800 p-2 text-center">€7</td>
              <td className="border border-gray-800 p-2 text-center">€3</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-2">Rosebush Castle</td>
              <td className="border border-gray-800 p-2">April - July</td>
              <td className="border border-gray-800 p-2 text-center">
                9:00 - 12:00
              </td>
              <td className="border border-gray-800 p-2 text-center">€10</td>
              <td className="border border-gray-800 p-2 text-center">€5</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-sm">
          *Children under 5 years old are admitted free of charge.
        </p>
      </div>
    </div>
  );
};

export default Ex19_4B;
