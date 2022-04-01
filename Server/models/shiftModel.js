const mongoose = require('mongoose');
const { Schema } = mongoose;

const shiftModel = Schema(
    {
        doctor: {type:String},
        date: {type:String},
        taken: {type:Boolean},
        hour: {type:String}
    }
)

module.exports = mongoose.model("Shift", shiftModel);