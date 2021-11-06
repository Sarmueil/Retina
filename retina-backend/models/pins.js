const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
//    profilePic: { type: String },
   postedBy: { type:String, ref: 'User' }, //first and second related
   content: { type: String, trim: true },
   image: {type:String},
   video: {type:String},
   rating:{type:Number, min:0, max:5},
   lat:{type:Number, required:true},
   long:{type:Number, required:true}, 
//    likes: [{ type:Array, ref: 'pins' }],
}, { timestamps: true });

module.exports = mongoose.model('pins', PinSchema)