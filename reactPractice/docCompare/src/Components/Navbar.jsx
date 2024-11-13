import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className=" sticky top-0 bg-blue-500 flex items-center justify-between py-4 md:py-8 md:px-20 px-6 shadow-md">
        <h1 className="font-bold text-lg md:text-2xl hover:text-yellow-300 cursor-pointer text-white">DocDifference</h1>
        <ul className="flex justify-between gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `md:text-lg  text-md hover:text-yellow-300 transition duration-300 ${
                isActive ? "text-white" : "text-gray-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `md:text-lg  text-md  hover:text-yellow-300 transition duration-300 ${
                isActive ? "text-white" : "text-gray-300"
              }`
            }
          >
            About
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
