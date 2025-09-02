const Validator = require('fastest-validator');
const v = new Validator();

const schema = {
  username: { type: "string", min: 3, max: 50 },
  password: { type: "string", min: 6, max: 128 }
};

module.exports = v.compile(schema); 
