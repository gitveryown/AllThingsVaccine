import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import createUserRoute from "./routes/createUser.js"
// import userRoute from "./models/Users.js"

const app = express()
dotenv.config()

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to Mongodb')
  } catch (error) {
    throw error;
  }
}

mongoose.connection.on("diconnected", ()=> 
{
  console.log("mongoDB is disconnected")
})

//middlewares
app.use(express.json())


app.use("/api/auth", authRoute)
// app.use("/api/user", usersRoute)
app.use("/api/createUser", createUserRoute)

app.use((err,req,res, next)=> {
  const errorStatus = err.status || 500
  const errorMessage = err.Message || "Something went wrong"
  return res.status(errorStatus).json({
    success: false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
  })
 })

app.listen(8800, () => {
    connect()
    console.log("Connected to backend?")
})