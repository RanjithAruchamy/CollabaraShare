const mongoose = require('mongoose');
const mongoURI = "To BE ADDED";

const connectToMongo = () =>{
    mongoose.connect(process.env.mongoURI || mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
