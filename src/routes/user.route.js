const express = require('express');
const router = express.Router();
const User = require("../models/user.model");

router.post("/User" , (req, res)=>{
    try{
        const newUser ={
            username:req.body.username,
            firstName: req.body.firstName,
            email: req.body.email
        };
        const user = new User(newUser);
        user.save()

    return res.status(201).json({
        success: true,
        user
    })
    }catch (error){
        throw new Error(`Error Creating a User ${error.message}`);
    }

});

module.exports = router;