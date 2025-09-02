const express = require('express')
const rooter = express.Router()
const controlcheck = require('./../control/isadmin')
const logincheck = require('./../midle_ware/loginvalidator')
const checkloged = require('./../midle_ware/profile') 
const registervalidator=require('./../midle_ware/registervalidator')
const checkusername=require('./../control/checkusername')
const register=require('./../control/register')
const isban=require('./../midle_ware/ifban')

rooter.route('/s')
  .get(checkloged, (req, res) => res.render('login', { error: null }))
  .post(logincheck,controlcheck,isban)

rooter.route('/rs').post(registervalidator,checkusername,register)

module.exports = rooter
// isban,