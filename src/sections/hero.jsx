import Button from "../constants/button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1, bigShoe2 } from "../assets/images";
import { thumbnailBackground } from "../assets/images";
import ShoeCard from "../components/shoeCard";
import { useState } from "react";

const hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  flex"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-2xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10 relative">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-900 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold ">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-900">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-[#9c97c5] bg-cover bg-center ">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 hover:scale-125 ease-in-out duration-500"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-px-6 ">
          {shoes.map((shoe) => (
            <div
              key={shoe}
              className="hover:scale-110 ease-in-out duration-150 group"
            >
              <ShoeCard
                imgURl={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default hero;
