const mongoose = require("mongoose");
const mongoPath = 'mongodb+srv://newUser:OPj7mMdNqHYyemXt@cluster0.hlpkw.mongodb.net/rpmt?retryWrites=true&w=majority';

const connectDB = async() =>{
    await mongoose.connect(mongoPath)
    return mongoose
}

module.exports = connectDB