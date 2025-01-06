import mongoose from"mongoose"

const UserSchema=new mongoose.Schema({

    UserName:{
        type:String,
        required:true
    },
    email:{
        type:true,String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

},{timestamps:true})

export const User=mongoose.model("User", UserSchema)