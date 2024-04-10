import React from 'react';

export default function SelectionSideBar() {
  return (
    <div className="px-2.5 py-5 bg-light-green bg-opacity-10 rounded-md">
      <div className="text-main font-bold text-base mb-9">Voyage Parameters</div>
      <div className='mb-9'>
        <div className="text-main font-bold text-sm mb-1">Timeline *</div>
        <div className="bg-white text-sm font-['inter'] text-second mb-2 rounded-md">
          <input type="date" className='w-full py-2' name="StartDate" placeholder='Start Date (dd-mm-yy)' />
        </div>
        <div className="bg-white text-sm font-['inter'] text-second rounded-md">
          <input type="date" className='w-full py-2' name="EndDate" placeholder='End Date (dd-mm-yy)'  />
        </div>
        <div className="text-main text-xs mb-9">Period:</div>
      </div>
      <div className='mb-12'>
        <div className="text-main font-bold text-xs mb-1 rounded-md">Journey (optional)</div>
        <div className="bg-white text-sm font-['inter'] text-second pb-1 mb-2 rounded-md">
          <input type="text" className='w-full py-2' name="StartPort" placeholder='Start Port' />
        </div>
        <div className="bg-white text-sm font-['inter'] text-second mb-6 rounded-md">
          <input type="text" className='w-full py-2' name='EndPort' placeholder='EndPort' />
        </div>
        <div className="text-main font-bold text-xs mb-1 rounded-md">Indicative Distance</div>
      </div>
      <div className="mb-48 flex justify-center">
        <span className="text-center text-white text-base font-['inter'] py-3.5 px-12 mb-32 bg-dark-green rounded-md cursor-pointer"> Compare Ships</span>
      </div>
    </div>
  );
}
