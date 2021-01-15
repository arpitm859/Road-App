var express = require('express');
var router = express.Router();
var User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
  next();
});

router.post('/login', (req, res, next) => {
  res.send('Login Page');
});

router.post('/register', (req, res, next) => {
  res.send('Register Page');
})

module.exports = router;
