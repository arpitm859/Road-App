const { response } = require('express');
var express = require('express');
const Complaint = require('../models/complaint');
const User = require('../models/user');
const authenticate = require('../authenticate');

var searchRouter = express.Router();

searchRouter.route('/:query')
    .get(async (req, res, next) => {
        try {
            let results = await Complaint.aggregate([
                {
                    '$search': {
                        'autocomplete': {
                            "query": `${req.params.query}`,
                            "path": "title",
                            "fuzzy": { "maxEdits": 2 }
                        }
                    }
                }
            ]);
            let searchResults = [];
            for(x in results){
                if(!results[x].resolved){
                    searchResults.push(results[x]);
                }
            }
            console.log(searchResults);
            res.send(searchResults);
        } catch (err) {
            console.log(err.message);
            res.status(500).send({ message: err.message })
        }
    })

searchRouter.route('/')
.get((req, res, next) => {
	Complaint.find({})
		.then((complaints) => {
            let searchResults=[];
            for(x in complaints){
                if(!complaints[x].resolved){
                    searchResults.push(complaints[x]);
                }
            }
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(searchResults);
		})
		.catch((err) => {
			next(err);
		});
});

module.exports = searchRouter;
// http://locahost:5000/search/nerul