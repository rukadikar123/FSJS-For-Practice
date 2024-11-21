import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux'
import { setSearchTerm } from "../redux/ProductSlice";

function Navbar({user, setUser}) {
  const [search,setSearch]=useState("")
  const cart=useSelector(state => state.cart.products)

  const dispatch=useDispatch()

  const handleSearch=(e)=>{
    e.preventDefault()
    if(search){
      dispatch(setSearchTerm(search))
    navigate('/filtered-data')
    }
  }

  const handleLogOut=()=>{
    setUser("")
    navigate('/')
    alert("logged out succesfully")
  }

  const navigate=useNavigate()
  return (
    <>
      <nav className="flex flex-col bg-gray-50 gap-4 py-4 shadow-md sticky top-0 justify-center z-20">
        <div className="flex items-center justify-center w-full md:gap-8 gap-4">
            <Link  to='/' className="text-2xl font-semibold">e-Shop</Link>
            <form onSubmit={handleSearch} className="flex relative items-center">
                <input className="md:w-[53vw] w-[51vw] flex-1 border-2 p-2 rounded-md outline-none" type="text" placeholder="Search For Products"  value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button type="submit" className="cursor-pointer absolute right-3"><CiSearch className=" text-red-700" size={20}/></button>
            </form>
            <Link to='/cart' className="relative">
            <FaShoppingCart size={25}/>{cart.length>0 && <span className="absolute bottom-4 left-5 md:bottom-2 md:w-5 text-center h-5 w-5 md:h-6 md:left-6 bg-red-600 text-white rounded-full">{cart.length}</span>}
            </Link> 
            <button className="hidden md:block text-lg" onClick={()=> navigate('/login')}>Login | Register</button>
            {user && <div><span className="text-lg rounded-full px-3 py-1 inline-block bg-red-500 ">{user}</span> <button className="ml-4 bg-red-600 px-4 py-1 text-white rounded-md cursor-pointer" onClick={handleLogOut}>Log Out</button></div> }
            <button className="block md:hidden text-lg"><FaUser /></button>
        </div>
        <div className="flex items-center justify-center gap-12 text-md font-semibold">
            <Link to='/' className="hover:text-yellow-600">Home</Link>
            <Link to='/shop' className="hover:text-yellow-600">Shop</Link>
            <Link to='/contact' className="hover:text-yellow-600">Contact</Link>
            <Link to='/about' className="hover:text-yellow-600">About</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
