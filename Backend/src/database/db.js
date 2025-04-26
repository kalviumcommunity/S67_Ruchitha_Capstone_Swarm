const { connect } = require("mongoose");

const connectDB = async() => {
    try{
        await connect(process.env.MONGO_URI);

        console.log("connected to database");
    }
    catch(err) {
        console.log("error in connecting to database", err);
        process.exit(1);
    }
}

module.exports = connectDB;