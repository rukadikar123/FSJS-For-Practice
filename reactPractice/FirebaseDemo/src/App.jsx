import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import AddStudents from './Components/AddStudents'
import StudentLists from './Components/StudentLists'
import Updatestudents from './Components/Updatestudents'
import AddFaculty from './Components/AddFaculty'
import FacultyList from './Components/FacultyList'
import SignUp from './Components/SignUp'
import Login from './Components/Login'

const myRouter=createBrowserRouter([
   {
    path:'dashboard', 
    Component:Dashboard, 
    children:[
      {path:'', Component:StudentLists},
      {path:'addStudent', Component:AddStudents},
      {path:'studentList', Component:StudentLists},
      {path:'updatestudent' , Component:Updatestudents},
      {path:'addFaculty' , Component:AddFaculty},
      {path:'facultyList' , Component:FacultyList}
    ]
   },
   {path:'signup', Component:SignUp},
   {path:'login', Component:Login}
])

function App() {

  return (
    <>
    <RouterProvider router={myRouter} />
    </>
  )
}

export default App
