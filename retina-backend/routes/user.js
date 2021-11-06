const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const users = require('../models/user');

//signing up

router.post('/signup', async(req, res)=>{
    try{
         //generate password 
     const salt = await bcrypt.genSalt(10);
     const hashedpassword = await bcrypt.hash(req.body.password, salt)
//    create user
const newUser = new users ({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email:req.body.email,
    password: hashedpassword,
    profilePic: req.body.profilePic,
    Pins: req.body.Pins
})
// save user and send response
const reguser = await newUser.save()
res.status(200).json(reguser)

    }catch(err){
        res.status(500).json(err)
    }

})

//login in
router.post('/login', async(req, res)=>{
   try{
       const user = await users.findOne({username: req.body.username })
       //to  to check if the user existe
       !user && res.status(400).json("Wrong username or Password");
       //to validatr password 
       const vaildPassword = await bcrypt.compare(req.body.password, user.password);
       !vaildPassword && res.status(400).json("Wrong username or Password");
     //send response
    //  res.status(200).json({_id:user._id, username:user.username})
    res.status(200).json("Sucessfully logged in!")
   }catch(err){
       res.status(500).json(err)
   }
});

module.exports= router

