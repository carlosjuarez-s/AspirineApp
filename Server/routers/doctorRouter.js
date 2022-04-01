const express = require('express');
const doctorController = require('../controllers/doctorController');

const routes = (Doctor) => {

	const doctorRouter = express.Router();

	const { getDoctor, postDoctor, getDoctorById, putDoctorById, deleteDoctorById  } = doctorController(Doctor);

	doctorRouter.route('/doctor')
		.get(getDoctor)
		.post(postDoctor);

	doctorRouter.route('/doctor/:doctorId')
		.get(getDoctorById)
		.put(putDoctorById)
		.delete(deleteDoctorById);

	return doctorRouter;

};

module.exports = routes;