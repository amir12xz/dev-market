const express = require('express')
const router = express.Router()
const showcourse = require('./../control/cart')

router.route('/course/show').get(showcourse)

module.exports = router
