var express = require('express');
var bodyParser = require('body-parser');
const Complaint = require('../models/complaint');
const User = require('../models/user');
const authenticate = require('../authenticate');
const getCoord = require('../maps');

var complaintRouter = express.Router();

complaintRouter.use(bodyParser.json());

// Complaint Router for authenticate public
complaintRouter
	.route('/')
	.get(authenticate.verifyUser, (req, res, next) => {
		var id = req.user._id;
		console.log(id);
		User.findById(id).then((user) => {
			if (user.public) {
				Complaint.find({ userID: user._id }).then((result) => {
					if (result.length > 0) {
						result.found = true;
						res.statusCode = 200;
						res.setHeader('Content-Type', 'application/json');
						res.json(result);
					} else {
						result.found = false;
						res.statusCode = 200;
						res.setHeader('Content-Type', 'application/json');
						res.json([]);
					}
				});
			}
		});
	})
	.post(authenticate.verifyUser, (req, res, next) => {
		new Complaint({
			userID: req.user._id,
			title: req.body.title,
			description: req.body.description,

			complaint_address:
				req.body.complaint_street +
				' ' +
				req.body.complaint_area +
				', ' +
				req.body.complaint_city +
				', Maharashtra, ' +
				req.body.complaint_pin +
				', India',
			complaint_street: req.body.complaint_street,
			complaint_area: req.body.complaint_area,
			complaint_pin: req.body.complaint_pin,
			complaint_landmark: req.body.complaint_landmark,
			complaint_city: req.body.complaint_city,

			complainant_address:
				req.body.complainant_house_no +
				' ' +
				req.body.complainant_street +
				', ' +
				req.body.complainant_area +
				', ' +
				req.body.complainant_city +
				', Maharashtra, ' +
				req.body.complainant_pin +
				', India',
			complainant_house_no: req.body.complainant_house_no,
			complainant_street: req.body.complainant_street,
			complainant_area: req.body.complainant_area,
			complainant_pin: req.body.complainant_pin,
			complainant_landmark: req.body.complainant_landmark,
			complainant_city: req.body.complainant_city,
			complainant: req.user.firstName + ' ' + req.user.lastName,
			image: req.body.image,
		})
			.save()
			.then((complaint) => {
				getCoord(complaint.complaint_address).then((coords) => {
					complaint.lat = Number(coords[0]);
					complaint.long = Number(coords[1]);
					complaint.save().then((complaint) => {
						console.log('Complaint Registered with Coordinates');
					});
				});
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json({ success: true, status: 'Complaint Successfully registered!' });
			});
	});

complaintRouter.route('/all')
	.get(authenticate.verifyUser, (req, res, next) => {
	Complaint.find({})
		.then((complaints) => {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(complaints);
		})
		.catch((err) => {
			next(err);
		});
});

//  Send POST request to '/complaints/upvote' with authorization token in header and 'complaint_id' in body
complaintRouter
	.route('/upvote')
	.post(authenticate.verifyUser, (req, res, next) => {
		complaint_id = req.body.complaint_id;
		Complaint.findById(complaint_id)
			.then(
				(complaint) => {
					if (complaint.backer.indexOf(req.user._id) == -1) {
						complaint.backer.push(req.user._id);
						complaint.save();
						res.json(complaint);
					} else {
						const index = complaint.backer.indexOf(req.user._id);
						complaint.backer.splice(index, 1);
						complaint.save();
						res.json(complaint);
					}
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
	});

complaintRouter.route('/:id').get(authenticate.verifyUser, (req, res, next) => {
	console.log(req.user.firstName);
	var complaint_id = req.params.id;
	Complaint.findById(complaint_id)
		.then(
			(complaint) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(complaint);
			},
			(err) => next(err)
		)
		.catch((err) => next(err));
});
module.exports = complaintRouter;
