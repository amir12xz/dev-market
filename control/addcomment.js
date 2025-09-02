const comment=require('./../model/comment')
const user=require('./../model/user')
const course=require('./../model/courses')
const jwt=require('jsonwebtoken')

module.exports=async(req,res)=>{
    const text=req.body.text
    const score=req.body.rating
    const courseids=req.params.courseid
        const idt = req.cookies.token
        const decode = jwt.verify(idt, process.env.JWT)
        const userr = await user.findOne({ username: decode.username })
        if (!userr) {
          return res.status(404).send('user not found')
        }
        const findcourse=await course.findOne({courseid:courseids})
   const newComment=await comment.create({
course:findcourse._id,
user:userr._id,
text:text,
rating:score
})
console.log(newComment); //new

    findcourse.comments.push(newComment._id)
    await findcourse.save()
return res.redirect('/main')
}