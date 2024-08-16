
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useRef, useState } from "react"
const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()

    const [Form, setForm] = useState({ site: "", Username: "", Password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("/icons/eye-slash-regular.svg")) {
            ref.current.src = "/icons/eye.svg"
            passwordRef.current.type = "password"

        } else {
            ref.current.src = "/icons/eye-slash-regular.svg"
        }

    }

    const savePassword = () => {

        setpasswordArray([...passwordArray, { ...Form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...Form, id: uuidv4() }]))
        console.log([...passwordArray, Form]);
        setForm({ site: "", Username: "", Password: "" })
        toast('🦄 Password Saved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: "Bounce"
        });
    }

    const deletePassword = (id) => {


        let c = confirm("do you really want to delete this password");
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }
        toast('🦄 Password deleted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: "Bounce"
        });
        // console.log([...passwordArray, Form]);
    }


    const editPassword = (id) => {

        setForm(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        // localStorage.setItem("passwords", JSON.stringify([...passwordArray, Form]))
        // console.log([...passwordArray, Form]);
    }

    const handlechange = (e) => {
        setForm({ ...Form, [e.target.name]: e.target.value })
    }


    const copyText = (text) => {
        toast('🦄 Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: "Bounce"
        });
        navigator.clipboard.writeText(text)
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-green-300 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

            <div className="container  mx-auto h-[100vh] p-10 max-w-5xl">
                <h1 className='text-3xl text-center font-bold'><span className="text-green-600">&lt;/</span>
                    Pass
                    <span className="text-green-600">OP/&gt;</span></h1>
                <p className='text-lg text-center font-semibold'>Your own Password Manager</p>

                <div className='text-black items-center flex flex-col gap-8  p-4'>
                    <input value={Form.site} onChange={handlechange} className='rounded-full w-full px-4 py-1 text-black border border-green-700' placeholder="Enter Website URL" type="text" name='site' />
                    <div className="flex w-full justify-between gap-8 ">
                        <input value={Form.Username} onChange={handlechange} className='rounded-full w-full px-4 py-1 text-black border border-green-700' placeholder="Enter Username" type="text" name='Username' />
                        <div className="relative">
                            <input ref={passwordRef} value={Form.Password} onChange={handlechange} className='rounded-full w-full px-4 py-1 text-black border border-green-700' placeholder="Enter Password" type="password" name='Password' />
                            <span className="absolute right-2 top-2 cursor-pointer" onClick={showPassword}><img ref={ref} width={18} src="/icons/eye.svg" alt="eye" /></span>
                        </div>
                    </div>
                    <div>
                        <button onClick={savePassword} className="flex justify-center border border-green-700 items-center gap-2 bg-green-400 rounded-full hover:bg-green-500 px-6 py-2"><lord-icon
                            src="https://cdn.lordicon.com/hqymfzvj.json"
                            trigger="hover">
                        </lord-icon>
                            Save Password</button>
                    </div>
                    <div className="passwords h-full w-full">
                        <h1 className="text-center py-2 font-bold text-xl ">Your Passwords</h1>
                        {passwordArray.length === 0 && <div>No passwords to show</div>}
                        {passwordArray.length != 0 &&
                            <table className="table-auto h-full w-full overflow-hidden rounded-lg">
                                <thead className="bg-green-600  text-white">
                                    <tr>
                                        <th className="py-2">Site</th>
                                        <th className="py-2">Username</th>
                                        <th className="py-2">Password</th>
                                        <th className="py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-green-100">
                                    {passwordArray.map((item, index) => {
                                        return <tr key={index}>
                                            <td className=" text-sm text-center  w-1/2 py-1 border border-white"><div className="flex cursor-pointer items-center justify-center gap-4">
                                                <a href={item.site} target="_blank">{item.site}</a>
                                                <img onClick={() => { copyText(item.site) }} src="./icons/copy.svg" alt="copy" />
                                            </div>
                                            </td>
                                            <td className=" text-sm py-1 border border-white"><div className="flex justify-center cursor-pointer items-center gap-4 ">
                                                <span>{item.Username}</span>
                                                <img onClick={() => { copyText(item.Username) }} src="./icons/copy.svg" alt="copy" />
                                            </div>
                                            </td>
                                            <td className="text-sm border  border-white"><div className="flex justify-center cursor-pointer items-center gap-4">
                                                <span>{item.Password}</span>
                                                <img onClick={() => { copyText(item.Password) }} src="./icons/copy.svg" alt="copy" />
                                            </div>
                                            </td>
                                            <td className="text-sm border  border-white"><div className="flex justify-center items-center gap-2">
                                                <span onClick={() => { editPassword(item.id) }} ><img className=' cursor-pointer' src="./icons/edit.svg" alt="edit" /></span>
                                                <span onClick={() => { deletePassword(item.id) }} ><img className=' cursor-pointer' src="./icons/delete.svg" alt="delete" /></span>
                                            </div>
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager