import { useState } from 'react'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Notes from './components/Notes'
import ViewNote from './components/ViewNote'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/notes/:id' element={<ViewNote/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
