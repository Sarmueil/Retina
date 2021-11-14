const express = require('express')
const router = express.Router()
const pins = require('../models/pins')



//creating pins
router.post('/', async (req, res)=>{
    const newPin = new pins(req.body);
    try{
        const savedPin = await newPin.save();
         console.log(savedPin)
        res.status(200).json(savedPin)
    }catch(err){   
      res.status(500).json(err)
    }
})

//get all pins 

router.get('/', async(req, res)=>{
    try{
       const Pins = await pins.find()
       res.status(200).json(Pins)
       console.log(Pins)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router