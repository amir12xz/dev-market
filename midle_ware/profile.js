const jwt = require('jsonwebtoken');
const User = require('./../model/user');

module.exports = async (req, res, next) => {
  const token = req.cookies && req.cookies.token;
  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT);
    const data = await User.findOne({ username: decoded.username });

    if (!data) {
      return next();
    }

    return res.render('profile', { data });
  } catch (err) {
    console.error('JWT error:', err.message);
    return next();
  }
};
