const user = require('./../model/user');
const course=require('./../model/courses')
const se=require('./../model/sessions')
const jwt = require('jsonwebtoken');

module.exports=async(req,res)=>{
      const idt = req.cookies.token;
      const courseids=req.body.courseid
      const decode = jwt.verify(idt, process.env.JWT);
      const userr = await user.findOne({ username: decode.username });
      if (!userr) {
        return res.status(404).send('user not found');
      }
    const findcourse=await course.findOne({courseid:courseids})
    if(!findcourse)
        return res.send('course not found')
    const newse=await se.create({
        title:req.body.sessionName,
        isFree:req.body.isFree,
        videoUrl: req.file.filename
    })
    if (!findcourse.lessons)
        findcourse.lessons = [];
findcourse.lessons.push(newse._id);

    await findcourse.save()
    return res.redirect('/main')
}