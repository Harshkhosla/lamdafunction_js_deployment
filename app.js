const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./apis/user');
const connectDB = require('./dbConnection');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.status(200).json({message:"hello world"})
})
app.use('/api/users', userRoutes);

// Connect to Database
connectDB();

module.exports = app;