import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../LocalStorage/Localstorage'

export const AuthContext=createContext()

function AuthProvider({children}) {

   
  
  useEffect(() => {
    setLocalStorage()
  }, [])
  

    const [userData, setUserData]=useState({})

    useEffect(() => {
      const {admin, employees}=getLocalStorage()
    
    setUserData({admin,employees})
    
    }, [])
    
    
    
  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider