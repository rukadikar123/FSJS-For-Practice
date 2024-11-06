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
          <div className="flex items-center gap-3">
            <input type="text" placeholder="Search " className="border rounded-l-full border-gray-400 outline-none px-4 py-2 w-[30vw]"/>
            <div>
              <CiSearch size={30}/>
            </div>
          </div>
          <div>
            <FaMicrophone size={30}/>
          </div>
        </div>
        <div className="flex items-center  gap-3">
          <div>
            <MdVideoCall size={30}/>
          </div>
          <div>
            <FaRegBell size={30}/>
          </div>
          <div>
            <Avatar className="rounded-full h-20"   name="siddharth rukadikar" size={30}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
