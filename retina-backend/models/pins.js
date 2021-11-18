const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
//    profilePic: { type: String },
   postedBy: { type:String, ref: 'User' }, //first and second related
   caption: { type: String, trim: true },
   media: {type:String,required:true},
//    video: {type:String},
   rating:{type:Number, min:0, max:5},
   lat:{type:Number, required:true},
   long:{type:Number, required:true},
   location:{type:String,required:true} 
//    likes: [{ type:Array, ref: 'pins' }],
}, { timestamps: true });

module.exports = mongoose.model('pins', PinSchema)