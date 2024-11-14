import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="flex flex-col bg-gray-50 gap-4 py-4 shadow-md sticky top-0 justify-center">
        <div className="flex items-center justify-center w-full gap-8">
            <Link to='/' className="text-2xl font-semibold">e-Shop</Link>
            <form className="flex relative items-center">
                <input className="w-[53vw] flex-1 border-2 p-2 rounded-md outline-none" type="text" placeholder="Search For Products" />
                <CiSearch className="absolute right-3 text-red-700" size={20}/>
            </form>
            <Link to='/cart'>
            <FaShoppingCart size={20}/>
            </Link>
            <button className="hidden md:block text-lg">Login | Register</button>
            <button className="block md:hidden text-lg"><FaUser /></button>
        </div>
        <div className="flex items-center justify-center gap-12 text-md font-semibold">
            <Link to='/' className="hover:text-yellow-600">Home</Link>
            <Link to='/' className="hover:text-yellow-600">Shop</Link>
            <Link to='/' className="hover:text-yellow-600">Contact</Link>
            <Link to='/' className="hover:text-yellow-600">About</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
