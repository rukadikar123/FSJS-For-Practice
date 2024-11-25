import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex gap-3 h-full">
        <div className="w-[20%] flex flex-col gap-6 text-white h-[100vh] bg-blue-500">
          <Link to='/addStudent'>Add Student</Link>
          <Link to='/studentList'>Student List</Link>
          <Link to='/addFaculty'>Add Faculty</Link>
          <Link to='/facultyList'>Faculty List</Link>
        </div>
        <div className="w-[70%] h-[100vh]">
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
