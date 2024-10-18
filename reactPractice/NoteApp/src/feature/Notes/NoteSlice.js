import { createSlice } from "@reduxjs/toolkit";

import {toast} from 'react-hot-toast' 



export const NoteSlice=createSlice({
    name:'Notes',
    initialState:{
        Notes: localStorage.getItem("notes")? JSON.parse(localStorage.getItem("notes")) : []
    },
    reducers:{
        addNote:(state,action)=>{
            const Note=action.payload
            state.Notes.push(Note)
            localStorage.setItem("notes", JSON.stringify(state.Notes))

            toast.success('Note Created Successfully.')
        },
        updateNote:(state,action)=>{
            const Note=action.payload
            const index=state.Notes.findIndex((item)=>item.id === Note.id)

            if(index >=0){
                state.Notes[index]=Note

                localStorage.setItem("notes", JSON.stringify(state.Notes))
                toast.success('Note Updated Successfully.')
            }
        },
        removeNote:(state, action)=>{
            const noteId=action.payload
            let index=state.Notes.findIndex((item)=> item.id===noteId)

            if(index>=0){
                state.Notes.splice(index,1)
                localStorage.setItem("notes", JSON.stringify(state.Notes))
                toast.success('Note Deleted Successfully.')
            }
        },
        ResetNotes:(state)=>{
            state.Notes=[]
        }
    }
})

export const {addNote, removeNote , updateNote, ResetNotes} =NoteSlice.actions

export default NoteSlice.reducer