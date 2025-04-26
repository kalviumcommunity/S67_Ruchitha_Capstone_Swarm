const express = require('express');
const cors = require('cors');
const connectDB = require('./src/database/db');
const authRouter = require('./src/routers/authRoutes');
const questionRouter = require('./src/routers/questionRoutes');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.get('/', (req, res) => {
    try{
        res.send("Hello World");
    }
    catch(err){
        console.log(err);
    }
});

app.use('/auth', authRouter);
app.use('/questions', questionRouter);

app.listen(PORT, async() => {
    try{
        await connectDB(MONGO_URI);
        console.log(`Server is running in port ${PORT}`);
    }catch(err){
        console.log("error in running the server.", err);
    }
});