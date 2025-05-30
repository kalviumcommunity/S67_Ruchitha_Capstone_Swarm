const jwt = require("jsonwebtoken");
const User = require("../models/User");
require('dotenv').config();

const auth = async (req, res, next) => {
  try {
    if (!process.env.SECRET) {
        return res.status(401).json({ message: "SECRET is missing" });
    }

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    if (!token) {
      return res.status(401).json({ message: "token is missing" });
    }

    const decoded = jwt.verify(token, process.env.SECRET);
    console.log("Token verified");
    
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    req.userId = user._id;
    next();
  } catch (err) {
    console.log("error in auth middleware", err);
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = auth;