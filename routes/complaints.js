var express = require('express');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Complaint = require('../models/complaint');
const User = require('../models/user')
const authenticate = require('../authenticate');


var complaintRouter = express.Router();

complaintRouter.use(bodyParser.json());

complaintRouter.route('/')
    .get(authenticate.verifyUser ,(req, res, next) => {
        console.log(req);
    })
    .post((req, res, next)=>{

    })

module.exports = complaintRouter;