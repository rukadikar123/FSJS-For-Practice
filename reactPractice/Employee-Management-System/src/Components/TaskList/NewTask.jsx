import React from "react";

function NewTask({ data }) {
  return (
    <>
      <div className="bg-blue-600 w-[30vw] shrink-0 py-2 rounded-lg h-[40vh] text-white flex flex-col justify-between">
        <div className="flex py-2 items-center justify-between px-6">
          <button className="bg-red-600 px-2 py-1 rounded-md ">
            {data.category}
          </button>
          <p>{data.taskDate}</p>
        </div>
        <div className="flex flex-col  items-center justify-center gap-4">
          <h1 className="text-3xl pl-[50px] ">{data.title}</h1>
          <p className="text-[19px] pl-[50px] h-[12vh]">{data.description}</p>
        </div>
        <div className="flex py-1  items-center justify-between px-4">
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
