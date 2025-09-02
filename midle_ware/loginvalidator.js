const loginValidator = require('../validator/loginvalidator');

module.exports = (req, res, next) => {
  const data = {
    username: req.body.username,
    password: req.body.password
  };

  const result = loginValidator(data);
  if (result !== true) {
    console.log(result)
    console.log(data);
    
    return res.status(400).send('<p>invalid inputs</p>');
  }

 return next();
};
