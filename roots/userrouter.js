const express = require('express')
const router = express.Router()

router.route('/logout').get((req,res)=>{
  res.clearCookie('token')
  res.redirect('/main')
})

module.exports=router