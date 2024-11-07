import React from "react";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import Avatar from "react-avatar";
import { FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center   h-10 px-4 mt-6">
        <div className="flex items-center gap-6">
          <div>
            <IoIosMenu className="text-[#6c6b6b]" size={40}/>
          </div>
          <div className=" flex items-center gap-1">
            <FaYoutube className="text-red-500" size={35}/>
            <span className="text-xl pb-1 font-bold">YouTube</span>
          </div>
        </div>
        <div className="flex items-center gap-3"> 
          <div className="flex items-center">
            <input type="text" placeholder="Search " className="border rounded-l-full border-gray-400 outline-none px-4 py-2 w-[35vw]"/>
            <div className="border px-4 py-[6px] rounded-r-full bg-gray-100 hover:bg-gray-200 cursor-pointer border-gray-400">
              <CiSearch size={28}/>
            </div>
          </div>
          <div className="ml-2 rounded-full p-[9px] bg-gray-100 hover:bg-gray-200">
            <FaMicrophone size={20}/>
          </div>
        </div>
        <div className="flex items-center gap-8 ">
          <div >
            <MdVideoCall className="cursor-pointer hover:bg-gray-200 rounded-full p-2 box-content"  size={25}/>
          </div>
          <div>
            <FaRegBell className="cursor-pointer hover:bg-gray-200 rounded-full p-2 box-content" size={25}/>
          </div>
          <div>
            <Avatar className="h-20 cursor-pointer hover:bg-gray-200 rounded-full "   name="siddharth rukadikar" size={35}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
