const mongoose = require('mongoose');
const { Schema } = mongoose;

const shiftModel = Schema(
    {
        doctor: {type:Object, ref:"Doctor", require},
        patient: {type:Object, ref:"Patient", default: null},
        date: {type:Date, default: Date.now()},
        taken: {type:Boolean}
    }
)

module.exports = mongoose.model("Shift", shiftModel);