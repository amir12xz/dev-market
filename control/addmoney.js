const user=require('./../model/user')
const jwt=require('jsonwebtoken')

module.exports=async(req,res)=>{
        const money=Number(req.body.money)
        const idt = req.cookies.token
        const decode = jwt.verify(idt, process.env.JWT)
        const userr = await user.findOne({ username: decode.username })
        if (!userr) {
          return res.status(404).send('user not found')
        }
        userr.money+=money
        await userr.save()
        return res.redirect('/main')
}