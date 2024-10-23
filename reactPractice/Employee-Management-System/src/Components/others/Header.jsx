import React, { useContext } from "react";

function Header({data}) {

  const handleClickLogout=()=>{
    localStorage.setItem("loggedInUser","")
    window.location.reload()
  };
  
 
  return (
    <>
      <div className="flex items-center justify-between px-16 py-10 ">
        <div>
          <h3 className="font-medium text-[20px]">Hello</h3>
          <h1 className="font-semibold text-[25px]">{data?.name} 👋</h1>
        </div>
        <div>
            <button onClick={handleClickLogout} className="rounded-lg font-semibold border-none bg-red-600 text-white px-4 py-2">Log Out</button>
        </div>
      </div>
    </>
  );
}

export default Header;
