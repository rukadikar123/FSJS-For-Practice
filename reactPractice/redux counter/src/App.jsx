import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByValue } from './feature/counterSlice'

function App() {
  const [input ,setInput]=useState(null)
  const count=useSelector((state)=> state.counter.value)

  const dispatch=useDispatch()

  return (
    <>
      <div className='flex flex-col p-6 gap-10 items-center mx-[350px] my-[200px] justify-center h-full bg-slate-300'> 
        <div className='flex gap-10 '>
        <input value={input} onChange={(e)=> setInput(e.target.value)}
         type="number" placeholder='Enter a number ' className='outline-none p-2 rounded-md' />
        <button onClick={()=> (dispatch(incrementByValue(+input) ), setInput(''))} className='bg-blue-700 text-white p-2 rounded-md'>Increment by value</button>
        </div>
       <div className='flex items-center gap-10 '>
       <button onClick={()=>dispatch(increment())} className='bg-blue-700 text-white p-2 rounded-md '>Increment by 1</button>
       <p>{count}</p>
       <button onClick={()=> dispatch(decrement())} className='bg-blue-700 text-white p-2 rounded-md'>Decrement by 1</button>
       </div>
      </div>
    </>
  )
}

export default App
