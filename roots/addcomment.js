const express = require('express')
const rooter = express.Router()
const check=require('./../midle_ware/ifhave')
const comment=require('./../control/addcomment')


rooter.route('/:courseid').post(check,comment)

module.exports=rooter