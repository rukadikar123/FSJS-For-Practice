import {configureStore} from '@reduxjs/toolkit'
import  NoteReducer  from '../feature/Notes/NoteSlice'

export default configureStore({
    reducer:{
        Notes:NoteReducer
    },
})