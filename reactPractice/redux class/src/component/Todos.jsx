import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../features/TodoSlice'

function Todos() {
    const [input, setInput]=useState("")

    const todos=useSelector((state)=>( state.todos.todos))
    const dispatch=useDispatch()

    const adding=()=>{
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <>
    <div>

        <div className="form flex justify-center p-6 gap-4 text-white" >
        <input type="text"  className='outline-none focus:ring-2 rounded-lg bg-transparent px-4 py-2'
        value={input}
        onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=> adding() } className='bg-orange-400 rounded-md px-4'>add</button>

        </div>
        {
            todos.map((todo)=>(
                <div key={todo.id} className='flex gap-28 text-white text-xl items-center justify-center mt-10'>
                <h1 key={todo.id}> {todo.text}</h1>
                <button onClick={()=> dispatch(removeTodo(todo.id))}>❌</button>
                </div>
            ))
        }  
    </div>
    </>
  )
}

export default Todos