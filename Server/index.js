//Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const cors = require('cors');

//Models
const Person = require('./models/personModel');
const Doctor = require('./models/doctorModel')
const Shift = require('./models/shiftModel');

const app = express();

//Routers
const personRouter = require ('./routers/personRouter')(Person);
const doctorRouter = require('./routers/doctorRouter')(Doctor);
const shiftRouter = require('./routers/shiftRouter')(Shift);


//Database
const DB = 'aspirineApp'; //Pedriño, si usas otra DB en tu local, cambiala de aqui
mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`)

//Token
/*
app.all('/api/*', jwt({
    secret: 'aspirineApp',
    algorithms: ['HS256'],
}).unless({
    path: ['/api/persons/login', '/api/persons/login/validate', {url:'/api/persons', methods: 'POST'}]
}))*/



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8080);
app.use('/api', personRouter, doctorRouter, shiftRouter);
