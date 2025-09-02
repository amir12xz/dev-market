const user = require('./../model/user');

module.exports = async (req, res, next) => {
  const id = req.body.username;
  const check = await user.findOne({ username: id });
  if (!check) {
    return next();
  }
  return res.redirect('/register');
};
