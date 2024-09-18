import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/myapps' element={<Navigate replace to="/learn"/>} />
      <Route path='Learn' element={<Learn/>} >
      <Route path='Courses' element={<Courses/>}>
      <Route path=':courseid' element={<CourseId/>}/>
      </Route>
      <Route path='bundles' element={<Bundles/>}/>
      </Route>
    </Routes>
  </Router>,
)


function Home() {
  return (
    <div className='text-white'>
      <h1>Home Route</h1>
    </div>
  );
}

function Courses() {
  return (
    <div className='text-white'>
      <h1>Corses list</h1>
      <h4>course cards</h4>
      <Outlet/>
    </div>
  );
}

function Bundles() {
  return (
    <div className='text-white'>
      <h1>Bundles list </h1>
      <h4>Bundle cards</h4>
    </div>
  );
}

function Learn() {
  return (
    <div className='text-white'>
      <h1>Learn</h1>
      <h4>All Courses are listed here</h4>
      <Link to="/learn/courses">Coures</Link> |
      <Link to="/learn/bundles">bundle</Link>
      <Outlet/>
    </div>
  );
}

function CourseId() {
  const {courseid}=useParams()
  return (
    <div className='text-white'>
      <h1>URL Params is : {courseid}</h1>
    </div>
  );
}