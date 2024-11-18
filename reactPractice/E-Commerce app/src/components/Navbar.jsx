import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {useSelector} from 'react-redux'

function Navbar() {
  const cart=useSelector(state => state.cart.products)
  return (
    <>
      <nav className="flex flex-col bg-gray-50 gap-4 py-4 shadow-md sticky top-0 justify-center z-20">
        <div className="flex items-center justify-center w-full gap-8">
            <Link to='/' className="text-2xl font-semibold">e-Shop</Link>
            <form className="flex relative items-center">
                <input className="w-[53vw] flex-1 border-2 p-2 rounded-md outline-none" type="text" placeholder="Search For Products" />
                <CiSearch className="absolute right-3 text-red-700" size={20}/>
            </form>
            <Link to='/cart' className="relative">
            <FaShoppingCart size={25}/>{cart.length>0 && <span className="absolute bottom-2 w-5 text-center h-6 left-6 bg-red-600 text-white rounded-full">{cart.length}</span>}
            </Link> 
            <button className="hidden md:block text-lg">Login | Register</button>
            <button className="block md:hidden text-lg"><FaUser /></button>
        </div>
        <div className="flex items-center justify-center gap-12 text-md font-semibold">
            <Link to='/' className="hover:text-yellow-600">Home</Link>
            <Link to='/shop' className="hover:text-yellow-600">Shop</Link>
            <Link to='/' className="hover:text-yellow-600">Contact</Link>
            <Link to='/' className="hover:text-yellow-600">About</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
