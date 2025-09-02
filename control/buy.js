const user=require('./../model/user')
const jwt=require('jsonwebtoken')
const course=require('./../model/courses')

module.exports=async(req,res,next)=>{
const courseids=req.params.courseid
        const idt = req.cookies.token
        const decode = jwt.verify(idt, process.env.JWT)
        const userr = await user.findOne({ username: decode.username })
        if (!userr) {
          return res.status(404).send('user not found')
        }
        const findcourse=await course.findOne({courseid:courseids})
        if(userr.money<findcourse.price){
           return res.send('lack of money')
        }
        userr.money-=findcourse.price
        userr.course.push(findcourse._id)
        await userr.save()
        return res.redirect('/main')
        
}