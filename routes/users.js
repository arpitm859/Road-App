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
  User.register(new User({username: req.body.phone, 
          email: req.body.email,
          public: req.body.public,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          agency: req.body.agency,
          gov: req.body.gov
  }), 
    req.body.password, (err, user) => {
        if(err) {
            err.statusCode = 500
            res.setHeader('Content-Type', 'application/json');;
            res.json({err: err});
        }   
        else {
            passport.authenticate('local')(req, res, () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Registration Successful!'
              });
          });
        }
    });
});

module.exports = router;
