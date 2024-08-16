import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user}=useContext(UserContext)

  if(!user) return <div>Please login</div>

  return <div>Welcome {user.Username}</div>
}

export default Profile