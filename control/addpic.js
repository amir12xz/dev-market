const user = require('./../model/user');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const idt = req.cookies.token;
  const decode = jwt.verify(idt, process.env.JWT);
  const userr = await user.findOne({ username: decode.username });
  if (!userr) {
    return res.status(404).send('user not found');
  }
 
  if (req.file) {
    userr.picture = req.file.filename;  
    await userr.save();
  }

  res.redirect('/main'); 
};
