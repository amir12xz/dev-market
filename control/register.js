const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./../model/user')

module.exports=async(req,res)=>{
    const {name,lastname,username,password}=req.body
const hashed=await bcrypt.hash(password,10)
const newuser=await User.create({
    name,lastname,username,
    password:hashed
})
    const token = jwt.sign(
      { username:username},
      process.env.JWT,  
      { expiresIn: '1d' }
    );
    res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
   return res.redirect('/main');
}