import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}
export const todoslice=createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            };

            state.todos.push(todo)
        },
        
        removeTodo:(state,action)=>{
           state.todos= state.todos.filter((todo)=> todo.id !==action.payload)
        },
        removeAll:(state)=>{
            state.todos=[]
        }
    }

})

export const {addTodo, removeTodo, removeAll}=todoslice.actions;

export default todoslice.reducer;