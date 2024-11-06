import React from 'react'
import Navbar from './Navbar'
import Sidebar from './SideBar'
import Video from './Video'
function Home() {
  return (
    <>
     <div className='mt-8 h-[86vh]  flex w-full gap-20 justify-start'>
     <Sidebar/>
     <Video/>
     </div>
     
    </>
  )
}

export default Home