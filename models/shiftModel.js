const mongoose = require('mongoose');
const doctorModel = require('./doctorModel');
const personModel = require('./personModel');
const { Schema } = mongoose;

const shiftModel = Schema(
    {
        doctor: {type:Object},
        patient: {type:Object},
        schedule: {type:String},
        date: {type:Date}
    }
)

module.exports = mongoose.model("Shift", shiftModel);