import React from "react";

function Header() {
  return (
    <>
      <div className="bg-black font-sans  text-white flex w-full justify-between items-center py-6 px-10 ">
        <p className="font-bold">Spotify</p>
        <nav className="flex justify-between items-center gap-[200px]">
          <div className="flex gap-6 items-center">
            <p className="font-bold">Home</p>
            <input style={{backgroundColor:'#1f1f1f'}} className="px-6 py-2 w-[17vw] text-center rounded-xl" type="text" placeholder="What do you want to play?" />
            <button style={{backgroundColor:'#1f1f1f'}} className="px-4 py-2 font-semibold rounded-2xl" >Search</button>
          </div>
          <div className="flex gap-14 items-center pr-[10px]">
            <button className="bg-white font-semibold rounded-3xl text-black text-[15px] px-3 py-1 text-center">Explore Premium</button>
            <button className="font-semibold">Install App</button>
            <button style={{backgroundColor:'#7d4b32'}} className="font-semibold text-black rounded-full ring-[6px] ring-[#1f1f1f] px-4 py-2">S</button>   
          </div>
        </nav>
      </div>
     
    </>
  );
}

export default Header;
