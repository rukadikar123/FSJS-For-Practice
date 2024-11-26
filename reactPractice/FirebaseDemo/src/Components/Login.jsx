import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { app } from '../Firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
    
    const submitHandler = (e) => {
      e.preventDefault();
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth,email,password)
      .then((userData)=>{
        console.log(userData.user);
        navigate('/dashboard')
      })
      .catch((err)=>{
        console.log(err);
        
      })
    };
    return (
      <div>
        <h1 className="mb-10">Login</h1>
  
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default Login