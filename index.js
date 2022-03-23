//Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Models
const Person = require('./models/personModel');

const app = express();

//Routers
const personRouter = require ('./routers/personRouter')(Person);


//Database
const DB = 'aspirineApp'; //Pedriño, si usas otra DB en tu local, cambiala de aqui

mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(8080);
app.use('/api', personRouter);
