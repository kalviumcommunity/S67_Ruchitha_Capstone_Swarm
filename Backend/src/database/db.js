const { connect } = require("mongoose");

const connectDB = async(url) => {
    try{
        await connect(url);
        console.log("connected to database");
    }
    catch(err) {
        console.log("error in connecting to database", err);
        process.exit(1);
    }
}

module.exports = connectDB;