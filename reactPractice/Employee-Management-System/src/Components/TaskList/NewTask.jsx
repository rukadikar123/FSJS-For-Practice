import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

function NewTask({ data }) {

  
  
  return (
    <>
      <div className="bg-blue-600 w-[30vw] flex-shrink-0 p-4 rounded-lg h-[44vh] text-white  flex flex-col  justify-between">
        <div className="flex py-2 items-center justify-between ">
          <button className="bg-red-600 px-2 py-1 rounded-md">
            {data?.category}
          </button>
          <p>{data?.taskDate}</p>
        </div>
        <div >
          <h1 className="text-2xl mt-4 text-ellipsis">{data?.title}</h1>
          <p className="text-md mt-2 h-[8vh] text-ellipsis">{data?.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-emerald-500 px-2 py-1 rounded-md ">
            Mark as Completed
          </button>
          <button className="bg-red-600 px-2 py-1 rounded-md ">
            Mark as Failed
          </button>
        </div>
      </div>
    </>
  );
}

export default NewTask;
