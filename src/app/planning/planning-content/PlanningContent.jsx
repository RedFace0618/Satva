import React from 'react';

export default function PlanningContent() {

  const PlanData = [
    {metric: 'Journey Time'},
    {metric: 'Journey Distance (NM)'},
    {metric: 'Estimated fuel required (MT)'},
    {metric: 'Estimated fuel cost (USD)'},
    {metric: 'EUAs Required'},
    {metric: 'EUA cost   (EUR)'},
  ]

  return (
    <div className="rounded-md p-3">
      <div className="text-main text-xl font-bold border-b border-main p-2 mb-2.5">
        Estimated Voyage Metrics
      </div>
      <table className="rounded-xl mt-4 w-full">
        <thead>
          <tr className="text-base font-bold font-['robot'] text-primary bg-dark-green bg-opacity-20 py-3.5 gap-1 rounded-xl">
            <td className="border-r border-white p-3.5"> Metric </td>
            <td align="center" className="px-2.5 p-3.5"> Lowest Emissions </td>
            <td align="center" className="px-2.5 p-3.5"> Fastest Route </td>
            <td align="center" className="px-2.5 p-3.5"> Best Weather </td>
          </tr>
        </thead>
        <tbody className="bg-white pb-2">
          {PlanData.map((PlanItem, PlanItemIndex) => {
            return (
              <tr
                className="text-primary font-['robot']"
                key={PlanItemIndex}
              >
                <td className="pb-3.5 pt-10 px-3 text-base border-b border-second"> {PlanItem.metric ?? ""} </td>
                <td className="text-sm"> {PlanItem.emission ?? ""} </td>
                <td className="text-sm"> {PlanItem.route ?? ""} </td>
                <td className="text-sm"> {PlanItem.weather ?? ""} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
