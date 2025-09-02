const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'course', required: true }, 
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'members', required: true }, 
  text: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 } 
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema)
