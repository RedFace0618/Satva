export default function ReviewContent() {

  const columns = ["", "Emission ( in m.t)", "STEPS"];
  const listData = [
    {name: "SELECT SHIP"},
    {name: "Lowest Emission"},
    {name: "Fastest" },
    {name: "Best Weather"},
    {name: "Charterer’s Average"},
    {name: "Industry Average"},
  ];

  return (
    <div className="rounded-md p-3">
      <div className="text-main text-xl font-bold border-b border-main p-2 mb-2.5">
        Emissions report and Satva Trust Emission Performance Score (STEPS)
      </div>
      <table className="rounded-xl mt-4 w-full">
        <thead>
          <tr className="text-base font-bold font-['robot'] text-primary bg-dark-green bg-opacity-20 py-3.5 gap-1 rounded-xl">
            <td rowSpan={2} colSpan={1} className="border-r border-white"> </td>
            <td colSpan={2} align="center" className="border-b border-r border-white px-2.5 py-6"> Journey wise </td>
            <td colSpan={2} align="center" className="border-b border-white px-2.5 py-6"> Period wise </td>
          </tr>
          <tr className="text-base font-bold font-['robot'] text-primary bg-dark-green bg-opacity-20 py-3.5">
            <td align="center" className="px-3 py-3.5">
              <div>Average emissions</div>
              <div>/ journey (MT) </div>
            </td>
            <td align="center" className="border-r border-white"> STEPS </td>
            <td align="center"> Emissions (MT) </td>
            <td align="center"> STEPS </td>
          </tr>
        </thead>
        <tbody className="bg-white pb-2">
          {listData.map((listItem, listItemIndex) => {
            return (
              <tr
                className="text-primary font-['robot']"
                key={listItemIndex}
              >
                <td className="py-5 px-3 text-base"> {listItem.name ?? ""} </td>
                <td className="text-sm"> {listItem.jou_emission ?? ""} </td>
                <td className="text-sm"> {listItem.jou_steps ?? ""} </td>
                <td className="text-sm"> {listItem.per_emission ?? ""} </td>
                <td className="text-sm"> {listItem.per_steps ?? ""} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
