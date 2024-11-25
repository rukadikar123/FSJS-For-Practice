import React, { useState } from 'react'
import {collection,addDoc, getFirestore} from 'firebase/firestore'
import { app } from '../Firebase'

function AddFaculty() {
    const [name,setName]=useState('')
    const [phone,setPhone]=useState()

    const submitHandler= async(e)=>{
        e.preventDefault()
        console.log(name,phone);
        const db=getFirestore(app)
        const docRef=await addDoc(collection(db,'faculty'),{
            facultyName:name,
            PhoneNumber:phone
        })
        console.log(docRef,docRef.id);
        
    }
  return (
    <div>
        <h1>AddFaculty</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Full Name'  onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='Phone Number'  onChange={(e)=>setPhone(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddFaculty