import { Add, KeyboardArrowDown } from "@mui/icons-material";
import React from "react";

export default function SelectionContent() {
  return (
    <div className="rounded-md p-3">
      <div className="text-main text-xl font-bold border-b border-main p-2 mb-2.5">
        Estimated Emission and Satva Trust Emission Performance Score (STEPS)
      </div>
      <div className="rounded-xl">
        <table className="rounded-xl mt-4 w-full">
          <thead>
            <tr className="text-base font-bold font-['robot'] text-primary bg-dark-green bg-opacity-20 py-3.5 gap-1 rounded-xl">
              <td className="p-3.5"> IMO# </td>
              <td align="center" className="px-2.5 p-3.5">
                Lowest Emissions
              </td>
              <td align="center" className="px-2.5 p-3.5">
                <div> Average Emissions </div>
                <div> Journey(MT CO2) </div>
              </td>
              <td align="center" className="px-2.5 p-3.5">
                <div> STEPS </div>
                <div> Out Of 100 </div>
              </td>
            </tr>
          </thead>
          <tbody className="bg-white pb-2">
            <tr className="text-primary font-['robot']">
              <td className="pb-3.5 pt-10 px-3 text-base border-b border-second">
                <div className="bg-white text-gray-500 mb-2 border border-neutral-40 rounded-md">
                  <select className="w-full py-2" value="">
                    <option value="option1">Select IMO#</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </td>
              <td className="text-sm border-b border-neutral-40"> </td>
              <td className="text-sm border-b border-neutral-40"> </td>
              <td className="text-sm border-b border-neutral-40"> </td>
            </tr>
            <tr className="text-primary font-['robot']">
              <td className="py-4.5 px-3 text-base border-b border-second">
                <div className="bg-white text-gray-500 mb-2 border border-neutral-40 rounded-md">
                  <select className="py-2 w-full">
                    <option value="option1">Select IMO#</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </td>
              <td className="text-sm border-b border-neutral-40"> </td>
              <td className="text-sm border-b border-neutral-40"> </td>
              <td className="text-sm border-b border-neutral-40"> </td>
            </tr>
            <tr className="text-primary font-['robot']">
              <td className="py-4.5 px-3 text-base border-b border-second">
                <div className="bg-white text-gray-500 mb-2 border border-neutral-40 rounded-md">
                  <select className="py-2 w-full">
                    <option value="option1">Select IMO#</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="bg-second rounded-md text-center text-white py-4 px-12 cursor-pointer">
                  <Add sx={{ fontSize: '20px' }} /> Add Ship
                </div>
              </td>
              <td className="text-sm border-b border-neutral-40"> </td>
              <td className="text-sm border-b border-neutral-40"> </td>
              <td className="text-sm border-b border-neutral-40"> </td>
            </tr>
            <tr className="text-primary font-['robot']">
              <td className="py-2 px-4 text-base border-b border-second">
                <div className="font-['robot'] text-black mb-6">
                  Charterer’s Comparison Ship
                </div>
                <div className="bg-white text-gray-500 mb-2 border border-neutral-40 rounded-md">
                  <select className="py-2 w-full">
                    <option value="option1">Select IMO#</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="text-base text-black py-4 font-['robot']">
                  Charterer's Fleet Average
                </div>
              </td>
              <td className="text-sm border-b border-neutral-40"> </td>
              <td className="text-sm border-b border-neutral-40"> </td>
              <td className="text-sm border-b border-neutral-40"> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
