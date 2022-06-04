const express = require('express');
const connectDB = require('./database/connection');
var router = express.Router();
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyparser = require('body-parser');
const app = express();
const fileRoute = require('./routes/adminRoutes');
const path = require('path');

//port configuration
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

//connect mongoDB
connectDB();

//parse data to body
app.use(bodyparser.json())

const a = ["http://localhost:8090", "http://localhost:1234", "http://isuru-sahan.me",
    "https://p9b173fk99.execute-api.us-east-1.amazonaws.com/dev",
    "http://research-project-management.s3-website-us-east-1.amazonaws.com",
    "http://isuru-sahan.me.s3-website-us-east-1.amazonaws.com"]

//middlewares
app.use(express.json());

app.use(cookieParser());
//cross origin
app.use(cors({ origin: a }));

//assign routers
app.use("/api/v1", router);
router.use(require('./routes/router.js'))

//admin root path
app.use("/api/v1/admin/", require("./Routes/adminRoutes.js"));

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);


//yasiru----------------------------------
const studentRouter = require("./controllers/studentController/students.js")
const topicRouter = require("./controllers/studentController/topics.js")
const loginRouter = require("./controllers/studentController/login.js")
const groupRouter = require("./controllers/studentController/groups.js")
const fileRouter = require("./controllers/studentController/file.js")
const adminRouter = require("./controllers/studentController/admin.js")
const submitionRouter = require("./controllers/studentController/submition.js")
const DsubmitionRouter = require("./controllers/studentController/documentSubmition.js")
const supervisorTopicRouter = require("./controllers/studentController/panel_member_topic.js")
const supervisorFinalPpt = require("./controllers/studentController/final_presentation_feedback.js")
app.use("/student", studentRouter);
app.use("/topic", topicRouter);
app.use("/login", loginRouter);
app.use("/group", groupRouter);
app.use("/file", fileRouter);
app.use("/submition", submitionRouter);
app.use("/Dsubmition", DsubmitionRouter);
app.use("/admin", adminRouter);
app.use("/supervisorTopic", supervisorTopicRouter);
app.use("/supervisorPpt", supervisorFinalPpt);
//end------------------------------------

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/api/v1`);
})

module.exports = app