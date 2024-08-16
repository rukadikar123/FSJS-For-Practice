import React from 'react'
import { useState , useContext } from 'react'
import UserContext from '../context/userContext'

function login() {
    const [Username,setUsername]=useState('')
    const [Password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)

    const HandleSubmit=(e)=>{
        e.preventDeafault
        setUser({Username,Password})

    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        placeholder='Username'
        value={Username}
        onChange={(e)=> setUsername(e.target.value)}  
        />
        {" "}
        <input type="text"
        placeholder='Password' 
        value={Password}
        onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={HandleSubmit}>submit</button>
    </div>
  )
}


export default login