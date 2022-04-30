const mongoose = require("mongoose");
const mongoPath = 'mongodb+srv://newUser:OPj7mMdNqHYyemXt@cluster0.hlpkw.mongodb.net/rpmt?retryWrites=true&w=majority';

module.exports = async() =>{
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return mongoose
}