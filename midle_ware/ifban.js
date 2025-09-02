const user = require('./../model/user')
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        const idt = req.cookies.token
        console.log(idt)
        if (!idt) {
            return res.status(401).send('Token not provided') 
        }

        const decode = jwt.verify(idt, process.env.JWT)
        const userr = await user.findOne({ username: decode.username })

        if (!userr) {
            return res.status(404).send('User not found')
        }

        if (userr.ban >= Date.now()) {
            return res.render('404')
        }

        next()
    } catch (err) {
        console.error(err.message)
        return res.status(403).send('Invalid token')
    }
}
