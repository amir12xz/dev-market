const user=require('./../model/user')

module.exports=async(req,res)=>{
   const usernamee = req.body.username;    
const duration = req.body.duration;    
            const userr = await user.findOne({ username: usernamee})
            if (!userr) {
              return res.status(404).send('user not found')
            }
            const bantime=null
        switch(duration) {
      case '1d':
        bantime = new Date(now + 1 * 24 * 60 * 60 * 1000);  
        break;
      case '3d':
        bantime = new Date(now + 3 * 24 * 60 * 60 * 1000); 
        break;
      case '1w':
        bantime = new Date(now + 7 * 24 * 60 * 60 * 1000); 
        break;
      case '6m':
        bantime = new Date(now);
        bantime.setMonth(banUntil.getMonth() + 6); 
        break;
      case '1y':
        bantime = new Date(now);
        bantime.setFullYear(banUntil.getFullYear() + 1);  
        break;
      case 'perm':
        bantime = new Date(8640000000000000); 
        break;
      default:
        return res.status(400).send('مدت بن نامعتبر');
    }
    userr.ban=bantime
    await userr.save()
    return res.redirect('/main')
}