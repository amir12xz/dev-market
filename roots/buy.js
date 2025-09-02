const express = require('express')
const rooter = express.Router()
const buy=require('./../control/buy')
const islogin=require('./../midle_ware/islogin')

rooter.route('/:courseid').post(islogin,buy)

module.exports=rooter