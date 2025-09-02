const course=require('./../model/courses')

module.exports=async(req,res)=>{
    const courseids=req.body.courseid
const coursed=await course.findOneAndDelete({courseid:courseids})
if(!coursed)
   return res.send('course not found')
return res.redirect('/main')

}