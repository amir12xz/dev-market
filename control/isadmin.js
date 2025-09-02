const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/user')

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).render('login', { error: 'invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).render('login', { error: 'invalid credentials' });
    }

    const token = jwt.sign(
      { username: user.username },
      process.env.JWT,  
      { expiresIn: '1d' }
    );

    res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

    if (user.role === 'admin') {
     // return res.redirect('/admin_main'); //will create soon
    }

    return res.redirect('/main');

  } catch (err) {
    console.error(err);
    return res.status(500).render('login', { error: 'server error' });
  }
};
