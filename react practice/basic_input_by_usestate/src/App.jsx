import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setvalue] = useState("")

  const onchange1=(e)=>{
    setvalue(e.target.value)
  }

  return (
    <>
      <h1>{value}</h1>

      <input type="text" value={value} onChange={onchange1} />
    </>
  )
}

export default App
