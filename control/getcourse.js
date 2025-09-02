const courses=require('./../model/courses')
const comment=require('./../model/comment')
const sessions=require('./../model/sessions')

module.exports=async(req,res)=>{
    const courseids=req.params.courseid
    const selectedcourse=await courses.findOne({courseid:courseids})
    const comments = await comment.find({ course: selectedcourse._id })
  .populate('user', '-password -role -money -ban -__v');

    const sessionss = await sessions.find({ course: selectedcourse._id });
return res.render('courseinfo', {
  course: selectedcourse,
  sessions: sessionss,
  comments: comments
});

}