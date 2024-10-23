import React, { useContext } from "react";
import NewTask from "../TaskList/NewTask";
import CompletedTast from "../TaskList/CompletedTast";
import AcceptTask from "../TaskList/AcceptTask";
import FailedTask from "../TaskList/FailedTask";

function TaskList({data}) {
console.log(data);

  
  return (
    <div>
      <div className="flex items-center  w-full h-[50vh] flex-nowrap overflow-auto box-border shrink-0 px-3 mt-10  gap-4">
        {data?.tasks?.map((elem,idx)=>{
          if(elem.NewTask){
            return <NewTask  key={idx} data={elem} />
          }
          if(elem.active ){
            return <AcceptTask key={idx} data={elem}/>
          }
          if(elem.completed){
            return  <CompletedTast key={idx} data={elem} />
          }
          if(elem.failed){
            return   <FailedTask key={idx} data={elem}/>
          }
        })}
      </div>
    </div>
  );
}

export default TaskList;
 

       
        
       