
const mongo = require('mongoose');

const userSchema = new mongo.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user' },
  comment: [{ type: String }],
  course:[{
    type:mongo.Types.ObjectId,
    ref:'course'
  }],
  money:{
    type:Number,
    default:0
  },
  picture:{
    type:String
  },
  ban:{
    type:Number,
    default:0
  }
});

module.exports = mongo.model('members', userSchema);
