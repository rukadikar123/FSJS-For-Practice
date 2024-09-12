import { createContext, useContext } from "react";


export const TodoContext=createContext({
     Todos:[
        {
            id:1,
            todo:"msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    UpdateTodo:(id ,todo)=>{},
    deletetodo:(id)=>{},
    toggleComplete:(id)=>{}


})
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider