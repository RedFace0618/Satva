import { KeyboardArrowDown } from "@mui/icons-material";

export default function ReviewSidebar() {
  return (
    <div className="px-2.5 py-5 bg-light-green bg-opacity-10 rounded-md">
      <div className="text-main font-bold text-base pb-2">Find ship</div>
      <div className="text-main font-bold text-xs pb-2">Journey</div>
      <div className="bg-white text-sm font-['inter'] text-gray-500 mb-2" >
        <input type="text" className="w-full py-2" placeholder="Start Port" />
      </div>
      <div className="bg-white text-sm font-['inter'] text-gray-500 mb-12" >
      <input type="text" className="w-full py-2" placeholder="End Port" />
      </div>
      <div className="text-main font-bold text-xs mb-2">Period</div>
      <div className="bg-white text-sm font-['inter'] text-gray-500 mb-2" >
      <input type="date" className="w-full py-2" placeholder="Start Date (dd-mm-yy)" />
      </div>
      <div className="bg-white text-sm font-['inter'] text-gray-500 mb-30" >
      <input type="date" className="w-full py-2" placeholder="End Date (dd-mm-yy)" />
      </div>
      <div className="text-main font-bold text-xs mb-2">Ship IMO Number</div>
      <div className="bg-white text-sm font-['inter'] text-gray-500 mb-30" >
        <input type="text" className="w-full py-2" placeholder="Ship IMO#" />
      </div>
      <div className="mb-20 flex justify-center">
        <span className="text-center text-white text-base font-['inter'] py-3.5 px-6 bg-dark-green rounded-md cursor-pointer"> Get Emission Report </span>
      </div>
    </div>
  );
}
