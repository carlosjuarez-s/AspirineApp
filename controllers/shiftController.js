const Doctor = require('../models/doctorModel');
const mongoose = require('mongoose');

const shiftController = (Shift) => {
    const getShift = async(req, res) => {
        const { query } = req;
        const response = await Shift.find( query );

        res.json(response);
    }

    const postShift = async(req, res) => {
        const { body } = req;

        body.doctor = mongoose.Types.ObjectId(body.doctor);
        const doctor = await Doctor.findById(body.doctor._id);

        if(!doctor){
            res.status(404).send({message: "Doctor not found"});
        } else {
            body.doctor = mongoose.Types.ObjectId(body.doctor);
            const shift = new Shift(body);
            shift.doctor = doctor;
            await shift.save();
            res.json({message: "shift created", shift: shift});
        }
        
    }


    return { getShift, postShift }; 
}

module.exports = shiftController;