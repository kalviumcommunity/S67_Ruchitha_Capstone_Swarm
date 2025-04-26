const { Router } = require("express");
const { postQuestion } = require("../controllers/questionControllers");
const auth = require("../middleware/auth");

const questionRouter = Router();

questionRouter.post('/post-question', auth, postQuestion);

module.exports = questionRouter;