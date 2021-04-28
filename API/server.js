var log = 0;

const express = require('express')
var app = express();
const port = 9000;

var userRouter = require('./Routes/users');


// CORS =============
const cors = require('cors');
app.use(cors());


// Mongoose ==========
const mongoose = require("mongoose");
var uri = "mongodb+srv://root_user:Password4MongoDBConnection@cluster0.wxg4d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log(`Log-${++log} : Database connection successful`);
});


// Dummy users
var data = [
  { name: 'tobi', email: 'tobi@learnboost.com', role: "User" },
  { name: 'loki', email: 'loki@learnboost.com', role: "User" },
  { name: 'jane', email: 'jane@learnboost.com', role: "User" }
];


// Routes ---------------------------------------------------------------------------
app.use('/users', userRouter);


app.listen(port, () => {
  console.log(`Log-${++log} : App Running at http://localhost:${port}`)
})