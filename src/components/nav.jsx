import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const nav = () => {
  const [openHamburger, setOpenHamburger] = useState("hidden max-lg:block ");
  const [icons, setIcons] = useState([
    "Home",
    "About Us",
    "Products",
    "contact Us",
  ]);

  const [expand, setExpand] = useState(true);
  const sidebar = () => {
    setExpand(!expand);
    if (expand) {
      setOpenHamburger(
        "bg-[#d44b44] sm:w-[200px] w-[180px] sm:h-[210px] h-[190px] ease-in-out duration-500 flex  justify-end items-baseline p-1 text-white "
      );
      setIcons(["Home", "About Us", "Products", "contact Us"]);
    } else {
      setOpenHamburger("hidden max-lg:block  ease-out duration-700");
      setIcons[("", "", "", "")];
    }
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center duration-700 max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="hover:scale-110 ease-in-out duration-100  "
          />
        </a>

        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:font-bold "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-end items-end   -translate-y-8">
        <div className={`${openHamburger} `}>
          <div
            className={
              expand
                ? `hidden`
                : ` text-white font-semibold flex-col justify-start w-full  items-center`
            }
          >
            <ul className="list-none p-0">
              {icons.map((icon) => (
                <ul
                  key={icon}
                  className=" sm:pt-5 pt-4 px-4  flex justify-between text-lg  hover:text-black font-semibold"
                >
                  {icon}
                </ul>
              ))}
            </ul>
          </div>
          <div className="h-8 w-8    relative flex justify-end items-baseline">
            <img
              src={hamburger}
              alt="hamburger"
              height={25}
              width={25}
              onClick={sidebar}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default nav;
