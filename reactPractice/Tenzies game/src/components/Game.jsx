import React, { useEffect, useState } from 'react'

function Game() {
  const [dice , setDice]=useState(()=> Array(10).fill(0).map(()=> Math.floor(Math.random() * 6) + 1))
  const [freeze, setFreeze ]=useState(()=> Array(10).fill(false))

  const rolling=()=>{
    setDice(dice)
   if(! freeze.every(Boolean)){
    setDice(dice.map((die,i)=> freeze[i]? die : Math.floor(Math.random() * 6) + 1 ))
   }
   
  }
  


const toggleFreze = (index) => {
  setFreeze(freeze.map((freeze, i) => (i === index ? !freeze : freeze)));
};
  
  
  
  return (
    <>
    <div className="container ">
    <div className="numbers bg-gray-200 h-[70vh]  flex-wrap flex items-center justify-center  gap-10 text-7xl w-[40vw] my-10 p-4 ml-[440px]">
    
      { (new Set(dice).size===1) ? <p className='text-center p-[30px] text-6xl text-blue-900'>You won</p> :  dice.map((elem , index)=>(
        <div  onClick={()=> toggleFreze(index)} className={`border-[1px] p-4 cursor-pointer border-black ${freeze[index] ? "bg-blue-300": ""}`} key={index}>{elem}</div>
      )) }
     
    
    </div>
    <button  onClick={rolling} className='bg-blue-400 py-2 px-6 text-xl rounded-lg ml-[700px] mt-[40px] '>Roll</button>
    </div>
    </>
  )
}

export default Game