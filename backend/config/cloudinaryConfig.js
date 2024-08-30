// config/cloudinaryConfig.js
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
dotenv.config();

// Configure Cloudinary using your credentials
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

module.exports = cloudinary;
