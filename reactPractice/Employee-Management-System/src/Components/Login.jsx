import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

function Login({handleClick}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault()
    handleClick(email,password)
    setEmail("")
    setPassword("")
  }

  return (
    <>
      <div className="h-screen flex bg-black items-center justify-center w-full">
        <div className="border-2 rounded-md border-red-300 h-[60vh] w-[25vw] flex flex-col bg-black text-white items-start gap-20 justify-start px-6 ">
          <h1 className="font-bold text-[25px] mt-8">Log In</h1>
          <div>
            <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col">
              <input
                className="bg-transparent outline-none border-2 rounded-3xl my-3 px-4 py-2 w-[20vw] border-pink-400"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <input
                className="bg-transparent outline-none border-2 rounded-3xl my-3 px-4 py-2 w-[20vw] border-pink-400"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <button type="submit" className="bg-pink-500 rounded-2xl p-2 mt-6 font-semibold">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
