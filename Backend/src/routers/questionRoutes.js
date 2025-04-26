const { Router } = require("express");
const { postQuestion, getQuestions, getQuestion } = require("../controllers/questionControllers");
const auth = require("../middleware/auth");

const questionRouter = Router();

questionRouter.post('/', auth, postQuestion);

questionRouter.get('/', getQuestions);

questionRouter.get('/:id', getQuestion);

module.exports = questionRouter;