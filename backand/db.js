const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://adminUser:Admin123@ranjithcluster.jkhq5.mongodb.net/CollabaraShare";

const connectToMongo = () =>{
    mongoose.connect(process.env.mongoURI || mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
