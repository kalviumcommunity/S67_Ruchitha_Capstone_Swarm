const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const signup = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        if(!username || !email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if(user){
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();

        const token = jwt.sign(
            { id: newUser._id },
            process.env.SECRET,
            { expiresIn: '1d' }
        );

        console.log({
            _id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email});

        res.status(201).json({ message: "User created successfully",
            success: true,
            token, 
            user: {
                _id: savedUser._id,
                username: savedUser.username,
                email: savedUser.email 
            }
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" }, err);
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.SECRET,
            { expiresIn: '1d' }
        );

        return res.status(200).json({
            success: true,
            token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            },
        });

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: "Internal Server Error", err});
    }
};

const updateUser = async (req, res) => {
    try{
        const userId = req.userId;
        const { username, email } = req.body;
        if(!username || !email){
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }

        user.username = username;
        user.email = email;
        const updatedUser = await user.save();

        res.status(200).json({ message: "User updated successfully", 
            success: true,
            user: {
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email
            }});
    }
    catch(err){
        console.log("error in updating user", err);
        res.status(500).json({ message: "Internal server error"});
    }
};

module.exports = { signup, login, updateUser };