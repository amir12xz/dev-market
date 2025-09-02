const mongoose = require('mongoose')

const lessonSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'course', required: true },  
  title: { type: String, required: true },     
  videoUrl: { type: String, required: true },  
  isFree: { type: Boolean, default: false }    
}, { timestamps: true })

module.exports = mongoose.model('sessions', lessonSchema)
