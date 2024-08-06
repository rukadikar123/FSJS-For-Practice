import { useState } from "react"


function App() {
const [color,setColor]=useState("olive")

  return (
    <>
    <div className="w-full h-screen "
    style={{backgroundColor:color}}> 
      <div className="fixed bottom-10 bg-white  px-2 ml-80 justify-center flex flex-wrap">
      <button className="px-8 py-2 mx-3 my-3 rounded-lg"
      style={{backgroundColor:"red"}}
      onClick={()=> setColor("red")}>red</button>
      <button className="px-8 py-2 mx-3 my-3 rounded-lg"
      style={{backgroundColor:"green"}}
      onClick={()=> setColor("green")}>green</button>
      <button className="px-8 py-2 mx-3 my-3 rounded-lg"
      style={{backgroundColor:"yellow"}}
      onClick={()=> setColor("yellow")}>yellow</button>
      <button className="px-8 py-2 mx-3 my-3 rounded-lg"
      style={{backgroundColor:"blue"}}
      onClick={()=> setColor("blue")}>blue</button>
      <button className="px-8 py-2 mx-3 my-3 rounded-lg"
      style={{backgroundColor:"pink"}}
      onClick={()=> setColor("pink")}>pink</button>
      </div>
    </div>
    </>
  )
}

export default App
