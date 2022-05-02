const express = require('express');
const connectDB = require('./database/connection');
var router = express.Router();
const dotenv = require('dotenv');
const cors = require("cors");
const bodyparser = require('body-parser');

const app = express();

//cross origin
app.use(cors())

//port configuration
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//connect mongoDB
connectDB()

//parse data to body
app.use(bodyparser.json())

//assign routers
app.use("/api/v1", router);
router.use(require('./Routes/router.js'))


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/api/v1`);
})
