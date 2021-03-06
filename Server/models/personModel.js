const mongoose = require('mongoose');

const { Schema } = mongoose;

const personModel = new Schema(
    {															
      	firstName: {type:String},
		lastName: {type:String},
		userName: {type:String},
		password: {type:String},
		email: {type:String},
		address: {type:String},
		phone: {type:Number},
		shift: {type:[Schema.Types.ObjectId], ref: "Shift"}
    }
)

module.exports = mongoose.model("Persons", personModel); 