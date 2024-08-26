
import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Context } from '../Context/Context'

function Main() {

    const { onSent, input, setInput, resultData, setResultData, showResult, setShowResult,recentPrompt } = useContext(Context)

    return (
        <>
            <div className="md:max-h-full   md:w-[100vw] w-[50vw] ">
                <div className='flex  w-full p-4 items-start justify-between'>
                    <p className='text-lg font-semibold text-slate-700'>Gemini</p>
                    <img className='h-10 rounded-2xl ' src={assets.user_icon} alt="" />
                </div>
                {!showResult ? <div className="flex flex-col gap-24 md:items-start items-center">
                    <div className=' text-5xl mx-20 md:mx-[240px] mt-8 font-semibold pt-4 '>
                        <p className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text'>Hello, Dev.</p>
                        <p className='text-slate-400 pt-4' >How can i help you today?</p>
                    </div>
                    <div className="cards flex md:flex-row flex-col items-center gap-10 mx-20  md:mx-60">
                        <div className="card bg-slate-200 p-4 relative h-44 ">
                            <p>Suggest beautiful place to see on an upcoming road trip</p>
                            <img className='h-6 absolute bottom-2 right-4' src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card bg-slate-200 p-4 relative h-44">
                            <p>Briefly summarize this concept:Urban planning</p>
                            <img className='h-6 absolute bottom-2 right-4' src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card bg-slate-200 p-4 relative h-44">
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img className='h-6 absolute bottom-2 right-4' src={assets.message_icon} alt="" />
                        </div>
                        <div className="card bg-slate-200 p-4 relative h-44">
                            <p>Improve the readability of the following code</p>
                            <img className='h-6 absolute bottom-2 right-4' src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </div> : <div className='mx-40 mt-6 h-[65vh] overflow-y-scroll'>
                <div><img className='h-10 pb-2' src={assets.user_icon} alt="" />
                </div>
                <p>{recentPrompt}</p>
                <img className='h-8' src={assets.gemini_icon} alt="" />
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                </div>}
                <div>
                    <div className='flex p-1 mx-2  md:mx-60 mt-28 border rounded-2xl bg-slate-300 items-center gap-2 '>
                        <input className='w-full outline-none p-2 text-lg bg-slate-300' type="text" placeholder='Enter a prompt here'
                            value={input} onChange={(e) => setInput(e.target.value)} />
                        <img className='h-6' src={assets.gallery_icon} alt="" />
                        <img className='h-6' src={assets.mic_icon} alt="" />
                        <img onClick={() => onSent()} className='h-6 cursor-pointer' src={assets.send_icon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main 