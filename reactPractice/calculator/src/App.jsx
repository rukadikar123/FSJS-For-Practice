import { useState } from 'react'


function App() {

  const [input,setInput]=useState("")

  const handleAnswer=()=>{
    try {
      setInput(eval(input))
    } catch (error) {
      setInput("Error")
    }
    
  }

    const HandleOldValue=()=>{
      setInput(input.slice(0,input.length-1))
    }

  return (
    <>
      <div className="container flex flex-col w-[20vw] gap-1 text-white  box-border ml-[600px] mt-36">
      <input readOnly value={input} type="text" className='py-8 text-black relative outline-none text-right text-2xl px-2'/>
      <div className="grid grid-cols-4 grid-rows-5 gap-4">
        <button onClick={()=>setInput("")} className='p-4 bg-red-600'>C</button>
        <button onClick={HandleOldValue} className='p-4 bg-red-600'>Back</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='/' className='active:bg-blue-300 p-4'>/</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
        name='*' className='active:bg-blue-300 p-4'>*</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='7' className='active:bg-blue-300 p-4'>7</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='8' className='active:bg-blue-300 p-4'>8</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='9' className='active:bg-blue-300 p-4'>9</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='-' className='active:bg-blue-300 p-4'>-</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='4' className='active:bg-blue-300 p-4'>4</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='5' className='active:bg-blue-300 p-4'>5</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='6' className='active:bg-blue-300 p-4'>6</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='+' className='active:bg-blue-300 row-span-2 p-4'>+</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='3' className='active:bg-blue-300 p-4'>3</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='2' className='active:bg-blue-300 p-4'>2</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='1' className='active:bg-blue-300 p-4'>1</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='0' className='active:bg-blue-300 p-4'>0</button>
        <button onClick={(e)=>setInput(input.concat(e.target.name))}
         name='00' className='active:bg-blue-300 p-4'>00</button>
        <button onClick={handleAnswer}
          className='bg-yellow-700 p-4'>=</button>
      </div>
      </div>  
    </>
  )
}

export default App
