const multer = require("multer");
const { profilePic } = require("../utils/cloudinary");

const uploadProfilePic = multer({
    storage: profilePic,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);  // Accept
        } else {
            cb(new Error("Only JPG, JPEG, and PNG files are allowed."), false);  // Reject
        }
    }
});

module.exports = uploadProfilePic;