const express = require('express')
const rooter = express.Router()
const checkadmin=require('./../midle_ware/isadmin')
const changerole=require('./../control/changerole')
const ban=require('./../control/ban')
const unban=require('./../control/unban')
const courseupload=require('./../config/upcoursepic')
const addcourse = require('./../control/adcourse')
const delcourse=require('./../control/delcourse')

rooter.route('/change-role').get(checkadmin,(req,res)=>{
    res.render('changerole')
}).post(changerole)

rooter.route('/deletem').get(checkadmin,(req,res)=>{
res.render('ban')
}).post(ban)

rooter.route('/unban').get(checkadmin,(req,res)=>{
res.render('uoban')
}).post(unban)

rooter.route('/delete-course').get(checkadmin,(req,res)=>{
res.render('delcourse')
}).post(delcourse)

rooter.route('/add-course').get(checkadmin,(req,res)=>{
    res.render('adcourse')
}).post(courseupload.single('background'),addcourse)

module.exports=rooter