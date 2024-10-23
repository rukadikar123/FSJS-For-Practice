import React from "react";

function TaskListNumber({data}) {
  console.log(data);
  
  return (
    <>
      <div className="flex gap-4 my-1 mx-3">
        <div className="bg-blue-600 text-white py-8 rounded-xl px-10 w-[25%]">
          <h1 className="font-bold text-[25px]">{data?.taskCount?.newTasks}</h1>
          <p className="font-semibold text-[20px] mt-4">New Task</p>
        </div>
        <div className="bg-green-400 text-white py-8 rounded-xl px-10 w-[25%]">
          <h1 className="font-bold text-[25px]">{data?.taskCount?.completed}</h1>
          <p className="font-semibold text-[20px] mt-4">Completed Task</p>
        </div>
        <div className="bg-yellow-500 text-white py-8 rounded-xl px-10 w-[25%]">
          <h1 className="font-bold text-[25px]">{data?.taskCount?.active}</h1>  
          <p className="font-semibold text-[20px] mt-4">Active Task</p>
        </div>
        <div className="bg-red-400 text-white py-8 rounded-xl px-10 w-[25%]">
          <h1 className="font-bold text-[25px]">{data?.taskCount?.failed}</h1>
          <p className="font-semibold text-[20px] mt-4">Failed Task</p>
        </div>
      </div>
    </>
  );
}

export default TaskListNumber;
