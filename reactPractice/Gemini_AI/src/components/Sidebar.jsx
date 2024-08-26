
import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Context } from '../Context/Context'

function Sidebar() {
    const [extended, setExtended] = useState(false)
    const { onSent, prevPrompt, setRecentPrompt,recentPrompt,newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }


    return (
        <>
            <div className='md:max-h-[100vh]  max-h-full relative bg-slate-300 '>
                <div className='upper flex flex-col p-4 gap-6'>
                    <div onClick={() => setExtended(!extended)} className=' cursor-pointer'>
                        <img className='h-8' src={assets.menu_icon} alt="menu" />
                    </div>
                    {!extended ? <div className='flex items-center rounded-2xl w-32 p-2 gap-2 border-2 bg-slate-400 cursor-pointer'>
                        <img className='h-8' src={assets.plus_icon} alt="" />
                        <p onClick={()=>newChat()} className='text-sm text-slate-700'>New chat</p>
                    </div> : null}
                    {!extended ? <div>
                        <p className='text-sm font-semibold'>Recent</p>
                        {prevPrompt.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} key={index} className='flex items-start gap-2 cursor-pointer text-sm'><img className='h-8' src={assets.message_icon} alt="" />
                                    <p>{item}</p></div>
                            )
                        })}
                    </div> : null}

                </div>
                <div className="lower absolute bottom-4 flex flex-col p-4">
                    {!extended ? <div className='flex items-center pt-2 gap-2 '>
                        <img className='h-6' src={assets.question_icon} alt="" />
                        <p className='text-sm text-slate-700'>Help</p>
                    </div> : null}
                    {!extended ? <div className='flex items-center pt-2 gap-2 '>
                        <img className='h-6' src={assets.history_icon} alt="" />
                        <p className='text-sm text-slate-700'>Activity</p>
                    </div> : null}
                    {!extended ? <div className='flex items-center pt-2 gap-2 '>
                        <img className='h-6' src={assets.setting_icon} alt="" />
                        <p className='text-sm text-slate-700'>Settings</p>
                    </div> : null}
                </div>
            </div>
        </>
    )
}

export default Sidebar