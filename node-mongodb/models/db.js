const mongoose = require('mongoose');
require("dotenv").config();

async function dbConnect() {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
    })
    .then(
        () => console.log("Successfully connected to MongoDB Atlas")
    )
    .catch(err => {
        console.log("Unable to connect to MongoDB ", err);
    })
   
}

module.exports = dbConnect;