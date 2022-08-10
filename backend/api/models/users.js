import mongoose from "mongoose";

let pwRestrict = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
let emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

const userSchema = new mongoose.Schema ({
    email: {
        type: emailValidation,
        required: true
    } ,

    password: {
        type: pwRestrict,
        required: true
    }


})