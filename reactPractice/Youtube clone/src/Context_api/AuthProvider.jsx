import React, { useContext, useState, useEffect } from 'react'
import { createContext } from 'react'
import {fetchData} from '../utils/Rapid_API'

const AuthContext=createContext()

function AuthProvider({children}) {
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])
    const [value,setValue]=useState("new songs ")

    useEffect(() => {
        fetchAllData(value)
        
        
    }, [value])
    
    const fetchAllData=(query)=>{
        setLoading(true)
        fetchData(`search/?q=${query}`).then(({contents})=>{
            setData(contents)
          
            
            setLoading(false)
        })
    }

  return (
    <AuthContext.Provider value={{loading,value,setValue,data}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const  useAuth=()=>useContext(AuthContext)