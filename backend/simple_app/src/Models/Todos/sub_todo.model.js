import mongoose from "mongoose";

const SubTodoSchema=new mongoose.Schema({

    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    CreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Todo"
    }

},{timestamps:true})

export const SubTodo=mongoose.model("SubTodo", SubTodoSchema)