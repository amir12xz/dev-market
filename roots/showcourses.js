const express = require('express')
const router = express.Router()
const getcourse=require('./../control/getcourse')

router.route('/:courseid').get(getcourse)

module.exports=router