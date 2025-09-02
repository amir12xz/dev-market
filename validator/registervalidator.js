const Validator = require('fastest-validator');
const v = new Validator();

const schema = {
name:{
    type:'string'
},
lastname:{
    type:'string'
},
username:{
    type:'string'
},
password:{
    type:"string"
}
};

module.exports = v.compile(schema); 
