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
            if(user.gov || user.agency){
                if(user.gov&&user.agency){
                    let arr = [];
                    Complaint.find({}).then(complaints=>{
                        for (x in complaints){
                            if(complaints[x].status < 11){
                                arr.push(complaints[x])
                            }
                        }
                        res.statusCode=200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(arr)
                    })
                }
                else if(user.gov){
                    console.log('Inside government');
                    Complaint.find({}).then(complaints=>{
                        let arr = [];
                        for (x in complaints){
                            if(complaints[x].status == 0 || complaints[x].status == 1 || complaints[x].status == 2 || complaints[x].status == 6 || complaints[x].status == 9 || complaints[x].status == 10 ){
                                arr.push(complaints[x]);
                            }
                        }
                        res.statusCode=200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(arr)
                    })
                }
                else if(user.agency){
                    console.log('Inside agency');
                    Complaint.find({}).then(complaints=>{
                        let arr = [];
                        for (x in complaints){
                            if(complaints[x].status == 0 || complaints[x].status == 3 || complaints[x].status == 4 || complaints[x].status == 5 || complaints[x].status == 7 || complaints[x].status == 8 ){
                                arr.push(complaints[x]);
                            }
                        }
                        res.statusCode=200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(arr)
                    })
                }
            }
            else{
                res.statusCode=401;
                res.send('Unauthorized')
            }
        }).catch(err=>{
            next(err)
        })
    })

issueRouter.route('/resolve')
    .post(authenticate.verifyUser, (req, res, next)=>{
        issue_id = req.body.issue_id;
        Complaint.findById(issue_id).then(issue=>{
            issue.status = issue.status + 1;
            if(issue.status >= 11) {
                issue.resolved = true;
            }
            issue.save().then(issue=>{
                res.json(issue)
            })
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    })

module.exports = issueRouter;