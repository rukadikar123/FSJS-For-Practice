import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between px-[100px] mt-10 ">
        <h1 className="font-bold text-[20px]">DocDifference</h1>
        <ul className="flex justify-between gap-20">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
