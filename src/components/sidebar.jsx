import React from "react";
import { hamburger } from "../assets/icons";
import { useState } from "react";

const sidebar = () => {
  const [openHamburger, setOpenHamburger] = useState("hidden max-lg:block");
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
        "bg-slate-gray w-screen h-screen flex justify-end items-baseline "
      );
      setIcons(["Home", "About Us", "Products", "contact Us"]);
    } else {
      setOpenHamburger("hidden max-lg:block");
      setIcons[("", "", "", "")];
    }
  };

  return (
    <div className="flex justify-end items-end -translate-y-8">
      <div className={`${openHamburger}`}>
        <img
          src={hamburger}
          alt="hamburger"
          height={25}
          width={25}
          onClick={sidebar}
        />
      </div>
    </div>
  );
};

export default sidebar;
