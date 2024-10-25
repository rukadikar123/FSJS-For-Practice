import React, { useContext, useState } from "react";
import Header from "../others/Header";
import { AuthContext } from "../../Context/AuthProvider";

function Admin({ data, changeUser }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // const [NewTask,setNewTask]=useState({})

  const handleSubmit = (e) => {
    e.preventDefault();

    const NewTask = {
      title,
      date,
      category,
      description,
      active: true,
      completed: false,
      failed: false,
      newTask: true,
    };

    // setNewTask({title,date,category,description,active:true, completed:false,failed:false,newTask:true})
    const employeeData = JSON.parse(localStorage.getItem("employees") || []);

   const updatedData =employeeData?.map((elem) => {
      if (assign === elem.name) {
        elem.tasks = elem.tasks || []; // ensure tasks array exists
        elem.tasks.push(NewTask);
        elem.taskCount = elem.taskCount || { newTasks: 0 }; // ensure taskCount object exists
        elem.taskCount.newTasks = elem.taskCount.newTasks + 1;
      }
      return elem
    });

    localStorage.setItem("employees", JSON.stringify(updatedData));

    setTitle("");
    setDate("");
    setAssign("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="bg-black">
      <Header changeUser={changeUser} data={data} />
      <div className="bg-gray-900 text-white h-full p-2">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex gap-[240px] w-full px-6 py-6"
        >
          <div className="left flex flex-col justify-between gap-4 w-[45%]">
            <div className="flex flex-col gap-1 ">
              <label className="text-xl">Task Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="rounded-md outline-none p-1 bg-transparent border-[1px] border-gray-300 w-full"
                placeholder="Make a UI design"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="text-xl">Date</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="rounded-md outline-none p-1 bg-transparent border-[1px] border-gray-300 w-full"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="text-xl">Assign To</label>
              <input
                value={assign}
                onChange={(e) => setAssign(e.target.value)}
                type="text"
                className="rounded-md outline-none p-1 bg-transparent border-[1px] border-gray-300 w-full"
                placeholder="Employee Name"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="text-xl">Category</label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                className="rounded-md outline-none p-1 bg-transparent border-[1px] border-gray-300 w-full"
                placeholder="design, dev, etc"
              />
            </div>
          </div>
          <div className="right w-[55%] flex flex-col gap-4">
            <div className="flex flex-col gap-1 ">
              <label className="text-xl">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="rounded-md outline-none p-2 bg-transparent border-[1px]  border-gray-300 h-[28vh] w-[35vw]"
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="bg-emerald-600 w-[35vw] py-2 rounded-md"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
