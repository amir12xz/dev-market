const userr=require('./../model/user')
const courses=require('./../model/courses')
const jwt=require('jsonwebtoken')

module.exports=async(req,res,next)=>{
    const courseids=req.params.courseid
            if (req.cookies && req.cookies.token) {
                const idt=req.cookies.token
                const decode=jwt.verify(idt,process.env.JWT)
                const user=await userr.findOne({username:decode.username})
                if (!user) 
                return res.redirect('/loginscrn')
                const Course=await courses.findOne({courseid:courseids})
                console.log(Course); //new
                
//if(user.course.toString() === Course._id.toString()) {
    console.log(Course._id);
    return next()
//}
            return res.redirect('/main')
        }
    }