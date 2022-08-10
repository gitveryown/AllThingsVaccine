import mongoose from "mongoose"

//regex expression for password containing 
let pwRestrict = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
let emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

const createUserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
 },
    email: {
        emailValidation,
        required:true
    },
    password:{
        type:pwRestrict,
        required:true
    }
})

export default  mongoose.model("createUser", createUserSchema)