import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className=" sticky top-0 bg-blue-500 flex items-center justify-between py-8 px-20 shadow-md">
        <h1 className="font-bold text-2xl hover:text-yellow-300 cursor-pointer text-white">DocDifference</h1>
        <ul className="flex justify-between gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg  hover:text-yellow-300 transition duration-300 ${
                isActive ? "text-white" : "text-gray-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg  hover:text-yellow-300 transition duration-300 ${
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
