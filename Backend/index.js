const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config({
    path: './src/config/.env'
});

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    try{
        res.send("Hello World");
    }
    catch(err){
        console.log(err);
    }
});

app.listen(PORT, async() => {
    try{
        console.log(`Server is running in port ${PORT}`);
    }catch(err){
        console.log("error in running the server.", err);
    }
});