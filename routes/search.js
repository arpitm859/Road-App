const { response } = require('express');
var express = require('express');
const Complaint = require('../models/complaint');
const User = require('../models/user');

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


module.exports = searchRouter;
// http://locahost:5000/search/nerul