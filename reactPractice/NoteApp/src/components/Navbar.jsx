import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   <>
   <div className='flex items-center justify-center gap-10 p-2'>
   <NavLink to='/'>Home</NavLink>
   <NavLink to='/notes'>Notes</NavLink>
   </div>
   </>
  )
}

export default Navbar