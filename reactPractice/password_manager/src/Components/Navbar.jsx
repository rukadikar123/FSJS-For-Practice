
const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white flex justify-between items-center mx-auto p-4 max-w-5xl text-md h-20'>
        <div className="logo text-xl font-bold">
        <span className="text-green-600">&lt;/</span>
            Pass
            <span className="text-green-600">OP/&gt;</span>
            </div>
        <ul>
            <li className='flex gap-6'>
                <a className='hover:font-bold' href="#">Home</a>
                <a className='hover:font-bold' href="/about">about</a>
                <a className='hover:font-bold' href="/contact">contact us</a>
                
            </li>
        </ul> 
        <button className="text-white bg-green-700 rounded-full py-2 px-4 flex items-center gap-3 font-bold">
          <img className="invert w-8" src="./icons/github-brands-solid.svg" alt="github logo" />
          Github
        </button>
    </nav>
  )
}

export default Navbar   