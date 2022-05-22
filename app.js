const express = require('express');
const connectDB = require('./database/connection');
var router = express.Router();
const dotenv = require('dotenv');
const cookieParser=require("cookie-parser");
const cors = require("cors");
const bodyparser = require('body-parser');
const connection = require("./database/connection");
const app = express();

//cross origin


//port configuration
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8090

//connect mongoDB
connectDB();

//parse data to body
app.use(bodyparser.json())
connection();
const a=["http://localhost:8090","http://localhost:1234"]
// // middlewares

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin : a,credentials:true}));

//assign routers
app.use("/api/v1", router);
router.use(require('./Routes/router.js'))

const studentRouter = require("./routes/students.js")
const topicRouter = require("./routes/topics.js")
const loginRouter = require("./routes/login.js")

app.use("/student",studentRouter);
app.use("/topic",topicRouter);  
app.use("/login",loginRouter); 

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/api/v1`);
})
