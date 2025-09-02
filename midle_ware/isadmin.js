const userr=require('./../model/user')
const jwt=require('jsonwebtoken')
module.exports=async(req,res,next)=>{
        if (req.cookies && req.cookies.token) {
            const idt=req.cookies.token
            const decode=jwt.verify(idt,process.env.JWT)
            const user=await userr.findOne({username:decode.username})
            if (!user) 
            return res.redirect('/loginscrn')
        if(user.role=='admin')
            return next()
        return res.redirect('/main')
        }
}