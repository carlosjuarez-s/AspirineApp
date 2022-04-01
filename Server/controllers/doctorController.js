const { response } = require("express");

const doctorController = (Doctor) => {

	const getDoctor = async (req, res) => {
		const { query } = req;
		const response = await Doctor.find();
		res.json(response);
	}
	const postDoctor = async (req, res) => {
		const doctor = new Doctor (req.body);
		await doctor.save();
		res.json(doctor)
	}
	const getDoctorById = async (req,res) => {
		const { params } = req;
		const response = await Doctor.findById(params.doctorId);
		res.json(response);
	}
	const putDoctorById = async (req, res) => {
		const { body } = req;
		const response = await Doctor.updateOne({
			id: req.params.doctorId
		},{
			$set: {
				firstName: body.firstName,
				lastName: body.lastName,
				userName: body.userName,
				password: body.password,
				email: body.email,
				phone: body.phone,
			}
		})
		res.json(response);
	}
	const deleteDoctorById = async(req, res) =>{
		const id = req.params.doctorId;
		await Doctor.findByIdAndDelete(id);
		res.status(202).json('user has been delete successfuly');
	}


	return { getDoctor, postDoctor, getDoctorById, putDoctorById, deleteDoctorById }

}

module.exports = doctorController;