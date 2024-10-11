import React, { useState, useEffect } from "react";

function LoginSignUp() {
    const [action, setAction]=useState("Signup")

    const [username, setUserName]=useState("")
    const [password, setPassword]=useState("")
    let initialUsers = [];
    try {
      initialUsers = JSON.parse(localStorage.getItem('userList')) || [];
    } catch (error) {
      console.error('Error parsing users from Local Storage:', error);
    }
    
    const [Spotifyusers, setSpotifyUsers] = useState(initialUsers);

    useEffect(() => {
      localStorage.setItem('userList', JSON.stringify(Spotifyusers))
    }, [Spotifyusers])
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!username || !password){
            alert("please fill details")
        }else {
            if(action==='login'){
                const existingUser=Spotifyusers.find((user)=> user.username===username && user.password===password)
                if(existingUser){
                    alert("login successful")
                }else{
                    alert('Invalid username or password')
                }
            }else{
                const newUser={username,password}
                setSpotifyUsers([...Spotifyusers,newUser])
                setUserName('');
                setPassword('');
            }
        }
    }

  return (
    <>
      <div className='h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center '>
        <div className="flex flex-col justify-center gap-6 min-h-[40vh] w-[20vw] items-center my-auto bg-slate-300">
        {
            action==="Signup" ? <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 py-2">
            <input type="text" placeholder="Username" value={username}
            onChange={(e)=> setUserName(e.target.value)}/>
            <input type="password" placeholder="Password" value={password}
             onChange={(e)=> setPassword(e.target.value)} />
            <p onClick={()=> setAction("login")} className="text-sm cursor-pointer">Already Have account</p>
            <button type="submit">Sign Up</button>
        </form> : <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 py-2">
            <input type="text" placeholder="Username" value={username}
            onChange={(e)=> setUserName(e.target.value)} />
            <input type="Password" placeholder="Password" value={password}
             onChange={(e)=>setPassword(e.target.value)}/>
             <p onClick={()=> setAction("Signup")} className="text-sm cursor-pointer">Dont Have Account</p>
            <button type="submit">Login</button>
        </form>
        }

        </div>
      </div>
    </>
  );
}

export default LoginSignUp;
