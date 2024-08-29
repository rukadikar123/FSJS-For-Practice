import React, { useState } from 'react'

function Hero({arr}) {
    const[currentIndex, setCurrentIndex]=useState(0)
    
    const restart=()=>{
        setCurrentIndex(0)
    }
    const prev=()=>{
        if(currentIndex>0){
            setCurrentIndex((prev)=> prev-1)
        }
    }
    const Next=()=>{
        if(currentIndex< arr.length -1){
            setCurrentIndex((prev)=>prev+1)
        }
    }

  return (
    <>
    <div className="flex justify-center gap-8 ">
        <button onClick={restart} className='bg-green-600 px-6 py-2 text-zinc-100 border-2 border-black/40'>Restart</button>
        <button onClick={prev} className='bg-green-600 px-6 py-2 text-zinc-100 border-2 border-black/40'>Previous</button>
        <button onClick={Next} className='bg-green-600 px-6 py-2 text-zinc-100 border-2 border-black/40'>Next</button>
    </div>
    <div className="flex flex-col gap-10 box-border justify-center items-center my-20 border-[1px] py-2 min-h-[40vh] border-black/40 w-[30vw] mx-auto bg-gray-400">
        <div className="name text-3xl text-blue-800">
        Name: {arr[currentIndex].name}
        </div>
        <div className="age text-3xl text-blue-800">
       Age: {arr[currentIndex].age}
        </div>
    </div>
    </>
  )
}

export default Hero