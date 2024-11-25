import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import AddStudents from './Components/AddStudents'
import StudentLists from './Components/StudentLists'
import Updatestudents from './Components/Updatestudents'
import AddFaculty from './Components/AddFaculty'
import FacultyList from './Components/FacultyList'

const myRouter=createBrowserRouter([
   {
    path:'', 
    Component:Dashboard,
    children:[
      {path:'', Component:StudentLists},
      {path:'addStudent', Component:AddStudents},
      {path:'studentList', Component:StudentLists},
      {path:'updatestudent' , Component:Updatestudents},
      {path:'addFaculty' , Component:AddFaculty},
      {path:'facultyList' , Component:FacultyList}
    ]
   }
])

function App() {

  return (
    <>
    <RouterProvider router={myRouter} />
    </>
  )
}

export default App
