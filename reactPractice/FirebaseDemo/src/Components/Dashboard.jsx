import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {app} from '../Firebase'
import {getAuth,onAuthStateChanged,signOut} from 'firebase/auth'
import { useEffect } from "react";

function Dashboard() {
  const navigate=useNavigate()

  const SignOut=()=>{
    const auth=getAuth(app)
    signOut(auth).then((res)=>{
      navigate('/login')
      
    })

  }

  useEffect(() => {
    const auth=getAuth(app)
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
        console.log('yes login');
        
      }
      else{
        console.log('not login');
        
      }
    })
    return ()=> unsubscribe();
  }, [])
  
  return (
    <>
      <div className="flex gap-3 h-full">
        <div className="w-[20%] flex flex-col gap-6 text-white h-[100vh] bg-blue-500">
          <Link to='/dashboard/addStudent'>Add Student</Link>
          <Link to='/dashboard/studentList'>Student List</Link>
          <Link to='/dashboard/addFaculty'>Add Faculty</Link>
          <Link to='/dashboard/facultyList'>Faculty List</Link>
          <button className="bg-green-400 py-1" onClick={SignOut}>Logout</button>
        </div>
        <div className="w-[70%] h-[100vh]">
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
