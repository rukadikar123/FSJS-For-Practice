import { useState } from 'react'


function App() {
const [Form, setForm] = useState({})
const handleclick=(e)=>{
  setForm({...Form, [e.target.name]:e.target.value})
}
  return (
    <>
      <input type="text" name='email' value={Form?.email?Form.email:""} onChange={handleclick}  />
      <input type="text" name='phone' value={Form?.phone?Form.phone:""} onChange={handleclick}/>

    </>
  )
}

export default App
