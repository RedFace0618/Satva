import React from 'react';

export default function HeaderSection({title = "", icon=""}) {
  return (
    <div className='flex w-18 bg-light-green bg-opacity-10 border border-green-950 rounded-md p-3.5 w-full text-main mb-2.5'>
      <span> <img src={icon.src} alt="icon image" /> </span>
      <span className='text-2xl font-bold pt-1 pl-2'> {title} </span>
    </div>
  );
}
