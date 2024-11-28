import React from "react";

const serviceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] bg-[#8581a3] shadow-3xl px-10 py-16 group hover:scale-110 ease-in-out duration-200">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full group-hover:scale-125 ease-in-out duration-150">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-4 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-800">
        {subtext}
      </p>
    </div>
  );
};

export default serviceCard;
