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
        "bg-slate-gray sm:w-[350px] w-[290px] sm:h-[300px] h-[300px] ease-in-out duration-500 flex justify-end items-baseline p-1 text-white "
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
        <div className={`${openHamburger}`}>
          <span
            className={
              expand
                ? `hidden`
                : ` text-white font-semibold flex justify-center items-center`
            }
          >
            {" "}
            {icons[0]}
          </span>
          <img
            src={hamburger}
            alt="hamburger"
            height={25}
            width={25}
            onClick={sidebar}
          />
        </div>
      </div>
    </header>
  );
};

export default nav;
