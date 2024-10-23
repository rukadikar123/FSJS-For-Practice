import React from "react";

function CompletedTast({data}) {
  return (
    <>
     <div className="bg-green-400 w-[30vw] shrink-0 py-2 rounded-lg h-[40vh] text-white flex flex-col justify-between">
        <div className="flex py-2  items-center justify-between px-6">
          <button className="bg-red-600 px-2 py-1 rounded-md ">{ data.category}</button>
          <p>{data.taskDate}</p>
        </div>
        <div className="flex flex-col py-1 items-center justify-center gap-4">
          <h1 className="text-[23px] pl-[20px]">{data.title}</h1>
          <p className="text-[19px] pl-[40px] h-[12vh]">{data.description}</p> 
        </div>
        <div className="text-center py-1">
          <button className="bg-emerald-500 px-10 py-1 rounded-md ">Completed</button>
        </div>
      </div>
    </>
  );
}

export default CompletedTast;
