const config = require('../config/default');
const express = require('express');
const bodyParser = require('body-parser');
var multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
var authenticate = require('../authenticate');
const Image = require('../models/imageUpload');

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
	.get(authenticate.verifyUser, (req, res, next) => {
		res.statusCode = 403;
		res.end('GET operation not supported on /imageUpload');
	})
	.post(
		authenticate.verifyUser,
		parser.single('imageFile'),
		async (req, res) => {
			const imageUploaded = new Image({
				image: req.file.path,
			});
			try {
				await imageUploaded.save().then((result) => {
					return res.status(200).json({
						success: 'true',
						message: 'File successfully uploaded',
					});
				});
			} catch (error) {
				return res.status(400).json({
					status: 'error',
					message: `image upload failed, check to see the ${error}`,
				});
			}
		}
	)
	.put(authenticate.verifyUser, (req, res, next) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /imageUpload');
	})
	.delete(authenticate.verifyUser, (req, res, next) => {
		res.statusCode = 403;
		res.end('DELETE operation not supported on /imageUpload');
	});

module.exports = uploadRouter;
