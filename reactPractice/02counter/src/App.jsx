import { useState } from "react"

function App() {
// let counter=5
let [counter, setCounter]= useState(5)
// const addValue=()=>{
// //    if(counter<20){
// //     counter=counter+1
// //    }
// //    setCounter(counter)
// setCounter((prev)=>prev+1)
// }
const decreaseValue=()=>{
  if(counter>0){
    setCounter(counter=>counter-1)
  }
  
}
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={()=>setCounter(prev=>prev+1)}
      >Add value</button>
      <br /> 
      <button
      onClick={decreaseValue}
      >decrease value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
