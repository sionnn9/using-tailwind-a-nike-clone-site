import React from "react";
import { star } from "../assets/icons";

const popularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full cursor-pointer ">
      <img
        src={imgURL}
        alr={name}
        className="w-[280px] h-[280px] hover:scale-110 ease-in-out duration-150"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alr="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-900">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-1 text-2xl text-coral-red leading-normal font-semibold font-montserrat">
        {price}
      </p>
    </div>
  );
};

export default popularProductCard;
