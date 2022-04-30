const express = require('express');
const app = express();
const mongo = require('./mongo');
const testSchema = require('./Models/TestModel')

app.use(require('./Routes/test.js'))

// const connectToMongoDB = async () =>{
//     await mongo().then(async (mongoose) =>{
//         try{
//             console.log('Connected to mongoDB!')

//             const test = {
//                 name: "GG WP",
//                 password: "123asd"
//             }

//             await new testSchema(test).save()

//         }finally{
//             mongoose.connection.close()
//         }
//     })
// }

// connectToMongoDB()


app.listen(8090, () => {
    console.log('Server running on port 8090..');
})

//test 2222
