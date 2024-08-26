import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/main'

function App() {

  return (
    <>
      <div  className='flex  gap-2'>
      <Sidebar />
      <Main/>
      </div>
    </>
  )
}

export default App
