import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData=JSON.parse(localStorage.getItem("credentials"))
    
    if(userData.email=== email && userData.password=== password  ){
        navigate('/')
        alert("logged in succesfully")
        const {Name}=userData
        const firstName= Name.substring(0, 1).toUpperCase()
        setUser(firstName)
    }
    setEmail("");
    setPassword("");
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