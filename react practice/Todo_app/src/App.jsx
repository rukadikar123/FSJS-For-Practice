import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {

  const HandleEdit=()=>{

  }

  const HandleDelete=()=>{

  }

  const HandleAdd=()=>{

  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8 bg-violet-200 p-5 rounded-xl min-h-[80vh]">
        <div className="add_todo my-8">
          <h2 className='text-lg font-bold'>Add a todo</h2>
        <input type="text" className='w-1/2'/>
        <button onClick={HandleAdd} className='bg-violet-600 hover:bg-violet-900 py-1 px-5 text-white rounded-md mx-4 font-bold text-sm hover:cursor-pointer'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
            <div className="bittons">
              <button onClick={HandleEdit} className='bg-violet-600 hover:bg-violet-900 py-1 px-5 text-white rounded-md mx-1  font-bold text-sm hover:cursor-pointer'>Edit</button>
              <button onClick={HandleDelete} className='bg-violet-600 hover:bg-violet-900 py-1 px-5 text-white rounded-md mx-1  font-bold text-sm hover:cursor-pointer'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
