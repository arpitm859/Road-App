const { response } = require('express');
var express = require('express');
const Complaint = require('../models/complaint');
const User = require('../models/user');

var searchRouter = express.Router();

searchRouter.route('/:query')
    .get(async (req, res, next) => {
        try {
            let result = await Complaint.aggregate([
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
            console.log(result);
            res.send(result);
        } catch (err) {
            console.log(err.message);
            res.status(500).send({ message: err.message })
        }
    })


module.exports = searchRouter;
// http://locahost:5000/search/nerul