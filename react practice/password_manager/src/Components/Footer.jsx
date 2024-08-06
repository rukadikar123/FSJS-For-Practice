
const Footer = () => {
    return (
        <>
            <div className="bg-slate-600 mt-20 flex flex-col text-white items-center w-full p-2 fixed bottom-0">
            <h1 className='text-xl bg-slate-600 font-bold'><span className="text-green-600">&lt;/</span>
                Pass
                <span className="text-green-600">OP/&gt;</span></h1>
            <div className="flex items-center gap-2 text-lg ">Created with <span><img className=" w-8" src="./icons/heart-solid.svg" alt="heart logo" /></span>By Siddharth Rukadikar</div>
            </div>
        </>
    )
}

export default Footer