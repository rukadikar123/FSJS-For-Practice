import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../others/TaskList";

function Employee({data}) {
  
  return (
    <>
      <Header data={data}/>
      <TaskListNumber data={data}/>
      <TaskList data={data}/>
    </>
  );
}

export default Employee;
