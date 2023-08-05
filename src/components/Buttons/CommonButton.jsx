import React from 'react';

const CommonButton = ({bGroup,getSelectedData}) =>
    <button onClick={()=>getSelectedData(bGroup)} className="group relative h-12 w-24 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white font-bold"
    >{bGroup}</span>
  </button>



export default CommonButton;