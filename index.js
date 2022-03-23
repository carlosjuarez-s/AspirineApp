const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require ('./routes/userRouter')(User);


mongoose.connect = ('mongodb://127.0.0.1:27017/userAPI');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', userRouter);
app.listen(8080);