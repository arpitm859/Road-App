var express = require('express');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Complaint = require('../models/complaint');
const User = require('../models/user')
const authenticate = require('../authenticate');
const passport = require('passport');

agency_issues = [0, 3, 4, 5, 7, 8];
government_issues = [0, 1, 2, 6, 9, 10];

var issueRouter = express.Router();

// issueRouter.use(bodyParser.json);

issueRouter.route('/')
    .get(authenticate.verifyUser, (req, res, next)=>{
        User.findById(req.user._id).then(user=>{
            if(user.gov){
                Complaint.find({}).then(complaints=>{
                    let gov_arr = [];
                    for (x in complaints){
                        // console.log(complaints[x].status == 0 || complaints[x].status == 1 || complaints[x].status == 2 || complaints[x].status == 6 || complaints[x].status == 9 || complaints[x].status == 10 );
                        if(complaints[x].status == 0 || complaints[x].status == 1 || complaints[x].status == 2 || complaints[x].status == 6 || complaints[x].status == 9 || complaints[x].status == 10 ){
                            gov_arr.push(complaints[x])
                        }
                    }
                    res.statusCode=200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(gov_arr)
                })
            }else if(user.agency){

            }else{
                res.statusCode=401;
                res.send('Unauthorized')
            }
        }).catch(err=>{
            next(err)
        })
    })

module.exports = issueRouter;