var express = require('express');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Complaint = require('../models/complaint');
const User = require('../models/user')
const authenticate = require('../authenticate');
const passport = require('passport');


var complaintRouter = express.Router();

complaintRouter.use(bodyParser.json());

complaintRouter.route('/')
    .get(authenticate.verifyUser ,(req, res, next) => {
        var id = req.user._id;
        User.findById(id).then(user => {
            if(user.public){
                Complaint.find({userID:user._id}).then(result => {
                    console.log(result)
                })
            }
        })
        
    })
    .post(authenticate.verifyUser, (req, res, next)=>{
        var id = req.user._id
        new Complaint({
            userID: req.user._id,
            title: req.body.title,
            description: req.body.description,

            complaint_address: req.body.complaint_street+" "+req.body.complaint_area+", "+req.body.complaint_city+", Maharashtra, "+req.body.complaint_pin+", India",
            complaint_street: req.body.complaint_street,
            complaint_area: req.body.complaint_area,
            complaint_pin: req.body.complaint_pin,
            complaint_landmark: req.body.complaint_landmark,
            complaint_city: req.body.complaint_city,
            
            complainant_address: req.body.complainant_house_no+" "+req.body.complainant_street+", "+req.body.complainant_area+", "+req.body.complainant_city+", Maharashtra, "+req.body.complainant_pin+", India",
            complainant_house_no: req.body.complainant_house_no,
            complainant_street: req.body.complainant_street,
            complainant_area: req.body.complainant_area,
            complainant_pin: req.body.complainant_pin,
            complainant_landmark: req.body.complainant_landmark,
            complainant_city: req.body.complainant_city

        }).save().then((complaint)=>{
            res.statusCode=200;
            res.setHeader('Content-Type', 'application/json');
            res.json(complaint);
        })
    })

module.exports = complaintRouter;