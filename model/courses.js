const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },    
  teacher: { type: String, required: true },   
  rating: { type: Number, default: 0 },         
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'sessions' }], 
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }], 
  background: { type: String },
  courseid:{type:String,required:true},
  price:{type:Number,required:true},
  description:{type:String,required:true}          
}, { timestamps: true })

module.exports = mongoose.model('course', courseSchema)
