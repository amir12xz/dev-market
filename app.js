const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');    
const loginRouter = require('./roots/login');
const cartroater=require('./roots/showcart')
const adminrouter=require('./roots/adminroat')
//const userrouter=require('./roots/userrouter')
const check=require('./midle_ware/loadprofile')
const moneyrouter=require('./roots/moneyrout')
const pic=require('./control/addpic')
const upload=require('./config/uploadpic')
const app = express();
const courses=require('./model/courses')
const courseshow=require('./roots/showcourses')
const addcomment=require('./roots/addcomment')
const buyrooter=require('./roots/buy')
const addse=require('./roots/addse')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());  

app.get('/main',async (req, res) => {
   const data=await courses.find({})
  res.render('main',{data});  
});

app.get('/loginscr',check,async(req,res)=>{
   
    res.render('login')
})

app.get('/register',(req,res)=>{
  res.render('register')
})

app.use('/login', loginRouter)
app.use('/register',loginRouter)
app.use('/api',cartroater)
app.use('/admin',adminrouter)
app.use('/wallet',moneyrouter)
app.use('/show',courseshow)
app.use('/add-comment',addcomment)  
app.use('/buy',buyrooter)
app.use('/add',addse)

app.get('/logout', (req, res) => {
  res.clearCookie('token')
  res.redirect('/main')
})
app.post('/profile/picture', upload.single('picture'), pic);

app.use((req,res)=>{
    res.render('404')
})
module.exports = app;
