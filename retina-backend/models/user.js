const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   firstname:{ type:String, required:true, trim:true, min:3, max:20 },
   lastname:{ type:String, required:true, trim:true, min:3, max:20 },
   username:{ type:String, required:true, trim:true, min:3, max:20, unique:true },
   email:{ type:String, required:true, trim:true, max:50, unique:true },
   password: { type: String, required: true },
   profilePic: { type: String ,default: ""},
   Pins: [{ type:Array, }],
}, { timestamps: true });

module.exports = mongoose.model('user', UserSchema)