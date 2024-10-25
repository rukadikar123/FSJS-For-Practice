import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../others/TaskList";

function Employee({data, changeUser}) {
  console.log(data);
  
  
  return (
    <>
      <div className="bg-black">
      <Header changeUser={changeUser} data={data}/>
      <TaskListNumber data={data}/>
      <TaskList data={data}/>
      </div>
    </>
  );
}

export default Employee;
