const user=require('./../model/user')

module.exports=async(req,res)=>{
    const usernamee=req.body.username
    const userr = await user.findOne({ username:usernamee });
    if(!userr)
        return res.send('user not found')
    userr.ban=0
    await userr.save()
    return res.redirect('/main')
}