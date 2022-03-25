const mongoose = require('mongoose');
//const { schema } = require('./personModel');

const { Schema } = mongoose;

const doctorModel = new Schema(
	{
		firstName: {type:String},
		lastName: {type:String},
		email: {type:String},
		phone: {type:Number},
		adressOffice: {type:String},
		specialty: {type:String}
	}
)

module.exports = mongoose.model('doctor', doctorModel); 