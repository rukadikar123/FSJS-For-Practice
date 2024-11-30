import React, { useState } from "react";

function ChangeAddress({setAddress, setIsModalOpen}) {
    const [newAddress,setNewAddress]=useState("")
    const OnClose=()=>{
        setAddress(newAddress)    // setting new address
        setIsModalOpen(false)
    }
  return (
    <>
      <div className="flex flex-col gap-4 p-2">
        <input onChange={(e)=>setNewAddress(e.target.value)} type="text"  placeholder="Enter New Address " className="p-2 rounded-md border-2"/>
        <div className="flex gap-4  justify-end">
          <button className="bg-slate-500 rounded-md px-3 py-1 text-white" onClick={()=>setIsModalOpen(false)}>Cancel</button>
          <button className="bg-blue-500 rounded-md px-3 py-1 text-white" onClick={OnClose}>Save address</button>
        </div>
      </div>
    </>
  );
}

export default ChangeAddress;
