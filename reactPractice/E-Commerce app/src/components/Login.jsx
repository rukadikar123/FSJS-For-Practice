import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";

function Login({setUser}) {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
 
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth=getAuth(app)           // Get the Firebase authentication instance
    signInWithEmailAndPassword(auth,email,password)  // Attempt to sign in with email and password
    .then((res)=>{
      console.log(res.user.email);
      setUser(res.user.email)    // Update the user state with the signed-in user's email
      navigate('/')
      
    })
    .catch(err=> console.log(err)  // Handle sign-in errors
    )
  };
  return (
    <>
      <div className="h-full flex  items-center justify-center mt-10 w-full">
        <div className="border-2 rounded-md border-red-300 h-full md:mx-0 mx-6 py-6 w-full md:w-[25vw] flex flex-col bg-slate-700 text-white items-start gap-6 justify-start px-6 ">
          <h1 className="font-bold  text-[25px] mt-2">Log In</h1>
          <div>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
              <input
                className="bg-transparent  outline-none border-2 rounded-3xl my-3 px-4 py-2 w-full md:w-[20vw] border-pink-400"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="bg-transparent outline-none border-2 rounded-3xl my-3 px-4 py-2 w-full md:w-[20vw] border-pink-400"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-pink-500 rounded-2xl p-2 mt-6 font-semibold"
              >
                Log in
              </button>
              <p className="text-center mt-8">Dont have an account? <span onClick={()=>navigate("/register")} className="cursor-pointer">SignUp</span></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
