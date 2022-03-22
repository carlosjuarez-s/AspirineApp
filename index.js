const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Person = require('./models/personModel');
const personRouter = require('./routers/personRouter')(Person);
const bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/aspirineApp')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', personRouter);
app.listen(8080);

