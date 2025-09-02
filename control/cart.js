const User = require('./../model/user')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    const idt = req.cookies.token
    const decode = jwt.verify(idt, process.env.JWT)
    const userr = await User.findOne({ username: decode.username })
    if (!userr) {
      return res.status(404).send('user not found')
    }
    const courses = userr.courses
    return res.render('showcourse', { courses })
}
