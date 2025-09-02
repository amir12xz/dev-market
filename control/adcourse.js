const course=require('./../model/courses')

module.exports=async(req,res)=>{
    const titlee=req.body.title
    const teacherr=req.body.teacher
    const courseidd=req.body.courseid
    const filenamee=req.file.filename
    const pricee=Number(req.body.price)
    const descriptions=req.body.description
    const check=await course.findOne({courseid:courseidd})
    if(!check){
await course.create({
    title:titlee,
    teacher:teacherr,
    courseid:courseidd,
    background: filenamee,
    price:pricee,
    description:descriptions
})
return res.redirect('/main')
    }
  return  res.send('course exist')
}