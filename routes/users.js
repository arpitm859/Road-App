var express = require('express');
var router = express.Router();
var User = require('../models/user')
var authenticate = require('../authenticate');
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
  next();
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  var token = authenticate.getToken({_id: req.user._id});
  console.log(req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, token: token, status: 'You are successfully logged in!'});
});

router.post('/register', (req, res, next) => {
  User.register(new User({username: req.body.username, 
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
