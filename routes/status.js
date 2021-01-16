var express = require('express');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Complaint = require('../models/complaint');
const User = require('../models/user')
const authenticate = require('../authenticate');
const passport = require('passport');

var statusRouter = express.Router();
// statusRouter.use(bodyParser);

statusRouter.route('/:id')
    .get((req, res, next)=>{
        Complaint.findById(req.params.id).then(complaint=>{
            res.statusCode=200;
            res.setHeader('Content-Type', 'application/json')
            res.json(complaint.status);
        }).catch(err=>{
            next(err);
        })
    })

module.exports = statusRouter;