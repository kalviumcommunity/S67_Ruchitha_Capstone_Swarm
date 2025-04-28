
const mongoose = require("mongoose");
const Question = require("../models/Question");

const postQuestion = async (req, res) => {
    try{
        const userId = req.userId;
        const { title, description, tags } = req.body;

        if(!title || !description || !tags){
            return res.status(400).json({ message: "All fields are required" });
        }

        const question = await Question.create({ 
            title, 
            description, 
            tags: tags.split(',').map(tag => tag.trim().toLowerCase()),
            createdBy: userId
        });

        console.lerror(question);
        res.status(201).json({ message: "Question posted successfully", question });
    }
    catch(err){
        console.error("error in posting a question", err);
        res.status(500).json({ message: "Internal Server Error"});
    }
};

const getQuestions = async (req, res) => {
    try{
        const questions = await Question.find().populate('createdBy', 'username profileImage');

        res.status(200).json({ message: "Questions fetched successfully", questions });
    }
    catch(err){
        console.error("error in getting questions", err);
        res.status(500).json({ message: "Internal Server Error"});
    }
};

const getQuestion = async (req, res) => {
    try{
        const questionId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(questionId)) {
            return res.status(400).json({ message: "Invalid question ID" });
        }

        const question = await Question.findById(questionId).populate('createdBy', 'username profileImage');
        if(!question){
            return res.status(404).json({ message: "Question not found" });
        }
        
        res.status(200).json({ message: "Question fetched successfully", question });
    }
    catch(err){
        console.error("error in getting question", err);
        res.status(500).json({ message: "Internal Server Error"});
    }
};


module.exports = { postQuestion, getQuestions, getQuestion };
