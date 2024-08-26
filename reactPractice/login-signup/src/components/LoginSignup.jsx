import { useState } from 'react'
import email_icon from '../assets/email.png'
import user_icon from '../assets/person.png'
import password_icon from '../assets/password.png'

function LoginSignup() {
    const [action, setAction] = useState("sign Up")
   

    return (
        <>
            <div className='h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center '>
                <div className="flex flex-col gap-6 min-h-[40vh] w-[20vw] py-2 items-center m-auto bg-slate-300">
                    <div className='header text-3xl font-bold'>
                        <div className=' text-violet-900'>{action}</div>
                    </div>
                    <div className='border-[1px]  w-[20vw] h-full border-black'></div>
                    <form action="">
                    <div className="inputs flex flex-col gap-4 ">
                        {action === "login" ? <div></div> : <div className='flex p-2 bg-slate-100 gap-2 items-center '>
                            <img src={user_icon} alt="" />
                            <input name='name' className='p-1 bg-transparent outline-none' type="text" placeholder='Name' 
                               />
                        </div>}
                        <div className='flex p-2 bg-slate-100 gap-2 items-center '>
                            <img src={email_icon} alt="" />
                            <input name='email' className='p-1 bg-transparent outline-none' type="email" placeholder='Email Id' 
                               />
                        </div>
                        <div className='flex p-2 bg-slate-100 gap-2 items-center  '>
                            <img src={password_icon} alt="" />
                            <input name='password' className='p-1 bg-transparent outline-none' type="password" placeholder='Password'
                                 />
                        </div>
                    </div>
                    {action === "sign Up" ? <div></div> : <div className="forget">Lost Password ? <span className='text-blue-600 cursor-pointer'>Click here</span></div>}
                    <div className="submitContainer flex gap-8 pt-4">
                        <button type='submit' className={action === "sign Up" ? "cursor-pointer submit border-[1px] rounded-3xl text-white px-6 py-2 bg-violet-800" : "submit border-[1px] rounded-3xl cursor-pointer text-white px-6 py-2 bg-gray-500"} onClick={() => setAction("sign Up")}>Sign Up</button>
                        <button  className={action === "login" ? "cursor-pointer submit border-[1px] rounded-3xl text-white px-6 py-2 bg-violet-800" : "submit border-[1px] rounded-3xl cursor-pointer text-white px-6 py-2 bg-gray-500"} onClick={() => setAction("login")}>Login</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginSignup