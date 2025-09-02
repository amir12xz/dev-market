const loginValidator = require('../validator/registervalidator');

module.exports = (req, res, next) => {
  const data = {
name:req.body.name,
lastname:req.body.lastname,
username:req.body.username,
password:req.body.password
  };

  const result = loginValidator(data);
  if (result !== true) {
    return res.status(400).send('<p>invalid inputs</p>');
  }

  next();
};