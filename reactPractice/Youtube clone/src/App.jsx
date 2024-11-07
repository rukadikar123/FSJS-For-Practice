import { useEffect, useState } from 'react'
import { useAuth } from './Context_api/AuthProvider'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import PlayingVideo from './Components/PlayingVideo'
import Loading from './Components/Loading'

function App() {
  const { loading } = useAuth();

  return (
    <>
     <Navbar/>
     {loading ?<Loading/>: 
     <Routes>
     <Route path='/'  element={<Home/>}/>
     <Route path='/search/:searchQuery' element={<Search/>}/>
     <Route path='/video/:id' element={<PlayingVideo/>}/>

   </Routes>}
      
    </>
  )
}

export default App
