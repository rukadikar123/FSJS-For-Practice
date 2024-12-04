import React, { useState } from "react";
import coder from "../assets/Coder.png";
import { Link } from "react-scroll";

function Navbar() {


  const Navitems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <div className="h-24 py-2 fixed top-0 left-0 z-50 bg-white shadow-md w-full flex md:flex-row flex-col items-center justify-between md:px-10">
      <div className="flex  items-center gap-4 pb-3 md:pb-0 md:gap-2 ">
        <div>
          <img className="md:h-16 h-10 w-12 md:w-20 rounded-full" src={coder} alt="" />
        </div>
        <div className="md:text-lg text-sm font-medium md:pt-2">
          <div>
            Siddhart<span>h</span>
          </div>
          <p className="md:text-[17px] text-[12px]">Web Developer</p>
        </div>
      </div>

      <div className="md:text-[18px] text-sm font-medium flex gap-10">
        {Navitems.map((item) => (
          <Link to={item.text} smooth={true} duration={500} activeClass="active"  offset={-70} className="hover:scale-105 cursor-pointer" key={item.id}>{item.text}</Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
