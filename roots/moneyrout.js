const express = require('express');
const router = express.Router();
const addmoney = require('./../control/addmoney');

router.route('/add')
  .get((req, res) => {
    res.render('money');
  })
  .post(addmoney);

module.exports = router;
