const mongoose = require('mongoose');
//const { schema } = require('./personModel');

const { Schema } = mongoose;

const doctorModel = new Schema(
	{
		firstName: {type:String},
		lastName: {type:String},
		userName: {type:String},
		password: {type:String},
		email: {type:String},
		phone: {type:Number}
	}
)

module.exports = mongoose.model('doctor', doctorModel); 