const express = require('express');
const errorHandler = require('./middleware/errorHandle');
const connectDb = require('./config/DBconnection');
const dotenv = require('dotenv').config();

connectDb()
const app = express();

const port = process.env.PORT || 5000;


app.use(express.json())
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`This server is running on https\\:localhost:${port}`)
});
