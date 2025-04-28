const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const profilePic = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'capstone/profilePic',
        allowedFormats: ['jpg', 'png', 'jpeg'],
    }
});


module.exports = { cloudinary, profilePic };