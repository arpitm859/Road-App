const config = require('../config/default');
var multer = require('multer');
const cloudinary = require('cloudinary').v2;
var express = require('express');
var bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
	cloud_name: config.CLOUDINARY_HOST,
	api_key: config.CLOUDINARY_API_KEY,
	api_secret: config.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: 'Complain Images',
		format: async () => 'png',
		public_id: (req, file) => file.filename,
	},
});

const parser = multer({ storage: storage });
const uploadRouter = express.Router();
uploadRouter.use(bodyParser.json());

uploadRouter
	.route('/')
	.post(
		authenticate.verifyUser,
		parser.single('imageFile'),
		async (req, res) => {
			return res
				.status(200)
				.json({
					success: 'true',
					message: 'File successfully uploaded',
					url: req.file.path,
				})
		}
	).catch((error) => {return error;});

module.exports = uploadRouter;
