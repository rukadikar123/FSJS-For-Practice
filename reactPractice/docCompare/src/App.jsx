import { useState } from 'react'
import UploadedDoc from './Components/UploadedDoc'
import Compare from './Components/Compare'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
      
      <Footer/>
    </>
  )
}

export default App
