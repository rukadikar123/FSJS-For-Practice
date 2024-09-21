import { useState } from 'react'
import QuizList from './quizList'


function App() {
const questions=[
  {
    que:"what is react ?",
    opt:["A CSS framework ", "A js library for building user interface","A Database management system","A js framework"],
    ans:"A js library for building user interface"
  },
  {
    que:"what is 2 + 2",
    opt:['3','4','5','8'],
    ans:"4"
  }
]

const [currentIndex,setCurrentIndex]=useState(0)
const [currentAnswer,setCurrentAnswer]=useState(null)
const [score,setScore]=useState(0)

const handleClick=(option)=>{
  setCurrentAnswer(option)
  if(option ===questions[currentIndex].ans){
    setScore(score+1)
    console.log(score);
    
  }
}



const handleNextQue=()=>{
  setCurrentIndex(currentIndex+1)
  setCurrentAnswer(null)
  
}
  return (
    <>
   { currentIndex<questions.length ? 
     <QuizList  questions={questions[currentIndex].que}
     options={questions[currentIndex].opt} handleClick={handleClick} currentAnswer={currentAnswer} handleNextQue={handleNextQue}
     /> :
     <div>your score :{score}</div> }
    </>
  )
}


export default App
