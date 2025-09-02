const user = require('./../model/user');

module.exports=async(req,res)=>{
    const USERNAME=req.body.username
    if(!USERNAME)
        return res.redirect('/main')
    const userr=await user.findOne({username:USERNAME})
    userr.role='admin'
    userr.save()
    return res.redirect('/main')
}