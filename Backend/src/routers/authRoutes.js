const { Router } = require("express");
const { signup, login, updateUser } = require("../controllers/authControllers");
const auth = require("../middleware/auth");

const authRouter = Router();

authRouter.post('/signup', signup);

authRouter.post('/login', login);

authRouter.put('/update', auth, updateUser);

module.exports = authRouter;