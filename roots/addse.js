const express = require('express')
const rooter = express.Router()
const add=require('./../control/addse')
const viduploader=require('./../config/uploadvid')
const isadmin=require('./../midle_ware/isadmin')

rooter.route('/se').get(isadmin,(req,res)=>{
    res.render('addse')
}).post(viduploader.single('video'),add)

module.exports=rooter