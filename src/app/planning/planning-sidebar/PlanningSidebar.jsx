import { KeyboardArrowDown } from '@mui/icons-material';
import React from 'react';

export default function PlanningSidebar() {
  return (
    <div className="px-2.5 py-5 bg-light-green bg-opacity-10 rounded-md">
      <div className="text-main font-bold text-xs pb-1">Ship IMO Number*</div>
      <div className="bg-white text-sm font-['inter'] text-second mb-11 rounded-md">
        <input type="text" className='w-full py-2' placeholder='Ship IMO#' />
      </div>
      <div className="text-main font-bold text-xs pb-1">Start Date*</div>
      <div className="bg-white text-sm font-['inter'] text-second mb-15 rounded-md">
        <input type="text" className='w-full py-2' placeholder='Start Date (dd-mm-yy)' />
      </div>
      <div className="text-main font-bold text-xs mb-1">Journey*</div>
      <div className="bg-white text-sm font-['inter'] text-second pb-1 mb-2 rounded-md">
        <input type="text" className='w-full py-2' placeholder='Start Port' />
      </div>
      <div className="bg-white text-sm font-['inter'] text-second mb-5 rounded-md">
        <input type="text" className='w-full py-2' placeholder='End Port' />
      </div>
      <div className="text-main font-bold text-xs mb-1 rounded-md">Bunker Fuel Cost (USD)*</div>
      <div className="bg-white text-sm font-['inter'] text-second mb-3">
        <input type="text" className='w-full py-2' placeholder='Bunker Fuel Cost' />
      </div>
      <div className="text-main font-bold text-xs mb-1 rounded-md">EUA Cost (EUR)*</div>
      <div className="bg-white text-sm font-['inter'] text-second mb-12">
        <input type="text" className='w-full py-2' placeholder='EUA Cost' />
      </div>
      <div className="mb-8 flex justify-center">
        <span className="text-center text-white text-base font-['inter'] py-3.5 px-12 mb-32 bg-dark-green rounded-md cursor-pointer"> Get Estimate </span>
      </div>
    </div>
  );
}
