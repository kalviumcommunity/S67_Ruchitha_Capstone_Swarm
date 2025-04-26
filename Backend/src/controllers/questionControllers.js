const Question = require("../models/Question");
const User = require("../models/User");

const postQuestion = async (req, res) => {
    try{
        const {userId} = req.params;
        const { title, description, tags } = req.body;

        if(!userId || !title || !description || !tags){
            return res.status(400).json({ message: "All fields are required" });
        }
        
        const existingUser = await User.findById({userId});
        if(!existingUser){
            return res.status(404).json({ message: "User not found" });
        }

        const question = await Question.create({ 
            title, 
            description, 
            tags: tags.split(',').map(tag => tag.trim())
        });

        console.log(question);
        res.status(201).json({ message: "Question posted successfully", question });
    }
    catch(err){
        console.log("error in posting a question", err);
        res.status(500).json({ message: "Internal server error", err});
    }
};



module.exports = { postQuestion };