import express from "express"
import createUser from "../models/CreateUser.js"

const router =  express.Router()

//CREATE
router.post("/",  async (req,res)=> {
    const newUser = new createUser(req.body)
     try {
      const savedUser = await newUser.save()
      res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json()
    }

})

//UPDATE
router.put("/:id",  async (req,res)=> {
    try {
      const updateUser = await createUser.findByIdAndUpdate(req.params.id, 
        {$set: req.body},
         {new: true})
      res.status(200).json(updateUser)
    } catch (err) {
        res.status(409).json(err)
    }

})

//DELETE
router.delete("/:id",  async (req,res)=> {
    try {
 await createUser.findByIdAndDelete(req.params.id)
      res.status(200).json("User has been deleted.")
    } catch (err) {
        res.status(404).json(err)
    }

})

//GET
router.get("/:id",  async (req,res)=> {
    try {
      const User = await createUser.findById(req.params.id)
      res.status(200).json(User)
    } catch (err) {
        res.status(500).json(err)
    }

})

//GET ALL
router.get("/",  async (req,res, next)=> {
    
    try {
      const Users = await CreateUser.find()
      res.status(200).json(Users)
    } catch (err) {
        next(err)
    }
})


export default router