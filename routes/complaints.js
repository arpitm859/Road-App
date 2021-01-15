var express = require('express');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Complaint = require('../models/complaint');


var complaintRouter = express.Router();

