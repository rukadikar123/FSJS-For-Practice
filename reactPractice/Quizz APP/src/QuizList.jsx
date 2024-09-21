import React, { useState } from 'react'

function QuizList({questions, options ,handleClick, currentAnswer ,handleNextQue,}) {


  return (
    <> 
      <div className="container flex flex-col h-full gap-y-4 w-full py-2 mx-auto box-border items-center  justify-between bg-slate-400">
      <div className="que text-2xl">
    {questions}
      </div>
      <ul className='flex flex-col gap-4 items-center '>
        { options.map((option, index)=>(
                <li className={`bg-blue-500 hover:cursor-pointer ${currentAnswer ===option ? "bg-blue-700" :  ""} p-1 text-white`} key={index}
                onClick={()=>handleClick(option)}
                >{option}
                </li>

            ))}
        
      </ul>
      <button className={`rounded-lg bg-slate-600 text-white p-2 ${currentAnswer ? "" : "cursor-not-allowed"}`}
      disabled={!currentAnswer} onClick={()=>handleNextQue()}>Next Question</button>
      </div> 
      
    
    </>
  )
}

export default QuizList