var express = require('express');
const Complaint = require('../models/complaint');
const User = require('../models/user');

var searchRouter = express.Router();

searchRouter.route('/:query')
    .get((req, res, next) => {
        console.log('search');
        var regex = new RegExp(req.params.query, 'i');
        Complaint.find(
            { $text: { $search: regex } },
            { score: { $meta: "textScore" } }
        ).sort( { score: { $meta: "textScore" } } ).then((complaint) => {
            console.log(complaint);
            res.send("Shit")
        })
    })


module.exports = searchRouter;
// http://locahost:5000/search/nerul