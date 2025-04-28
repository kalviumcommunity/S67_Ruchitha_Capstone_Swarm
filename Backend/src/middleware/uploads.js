const multer = require("multer");
const { profilePic } = require("../utils/cloudinary");

const uploadProfilePic = multer({
    storage: profilePic,
    limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = uploadProfilePic;