const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Shift = require('../models/shiftModel');

const personController = Person => {

    const getPerson = async(req, res) => {
        const { query } = req;
        const response = await Person.find(query);

        res.json(response);
    }

    const getPersonById = async(req, res) => {
        const { params } = req;
        const person = await Person.findById(params.personId);

        res.status(200).json(person);
    }

    const postPerson = async(req, res) => {
        const { body } = req;
        const person = new Person(req.body);
        var response;

        const search = await Person.findOne({"userName": body.userName});

        if(search != null){
            if(search.userName != body.userName){
                person.password = await bcrypt.hash(person.password, 10);
                await person.save();
                response = {message: "Person save", person: person}
            } else {
                response = {message: "This user is already in use"};
                res.status(400).send(response.message);
            }
        } else{
            person.password = await bcrypt.hash(person.password, 10);
            await person.save();
            response = {message: "Person save", person: person}
            res.status(200).send(response)
        }
        
        
    }

    const putPerson = async(req, res) => {
        try{
            const { body } = req;
        const person = await Person.updateOne(
            {
                _id: req.params.personId
            },
            {
                $set: {
                    firstName: body.firstName,
                    lastName: body.lastName,
                    userName: body.userName,
                    password: body.password,
                    email: body.email,
                    address: body.address,
                    phone: body.phone
                }
            }
        )

        res.json(person)
        } catch(e) {
            console.log(e);
        }
        
    }

    const deletePerson = async(req, res) => {
        const { params } = req;
        const person = await Person.findById(params.personId);
        console.log(person);
        await Person.deleteOne(person);
        res.send("Deleted person");
    }

    const postLogin = async(req, res) => {
        const { body } = req;
        var response;

        const person = await Person.findOne({
            "userName": body.userName
        })

        
        if(person == null){
            res.status(400).send("Invalid Credentials");
        }

        if(await bcrypt.compare(body.password, person.password)){
            const token = generatedToken(person);
            response = {messagge: "Login!", token: token}
        } else {
            response = {messagge: "Invalid Credentials"}
        }

        res.json(response);
    } 

    const generatedToken = Person => {
        const payLod = {
            _id: Person._id,
            firstName: Person.firstName,
            lastName: Person.lastName
        }
    
        return jwt.sign(payLod, "aspirineApp");
    }

    const getLoginValidate = async(req, res) => {
        const { headers } = req;
        const token = headers.token;
        var response;

        try {
            var decoded = jwt.verify(token, "aspirineApp");
            response = {message: "Verify!", token: decoded, verify: true}
            res.status(200).send(response);
        }catch(e) {
            response = {error: e}
            res.status(400).send(response);
        }
    }

    const getShifts = async(req, res) => {
        const { params } = req;

        Person
            .findById(params.personId)
            .populate('shift')
            .exec(function(err, person) {
                if(!person) res.status(404).send({message: "Person no exist"})
                if(err) res.json(err);
                if(person.shift.length == 0) res.status(200).send("Shift not found");
                else return res.json({message: "Shift found", shift: person.shift});
            })
    }

    const patchShift = async(req, res) => {
        const { body, params } = req;
        var response;
        const idShift = mongoose.Types.ObjectId(body.shift); 

        const shift = await Shift.findById(idShift);
        const person = await Person.findById(params.personId)

        console.log(shift.taken);

        if(shift.taken){
            response = {message: "Shift Taken"}
        } else {
            await Person.updateOne(
                {
                    _id: params.personId
                },
                {
                    $set: {
                        shift: idShift
                    }
                }
            )
            console.log(person);
            shift.patient = {
                firstName: person.firstName,
                lastName: person.lastName,
            };
            shift.taken = true;
            console.log(shift);
            await shift.save();
            response = {message: "Assigned shift", shift: shift};
        }

        res.json(response)
    }

    return { getPerson, postPerson, deletePerson, putPerson, postLogin, getLoginValidate, patchShift, getShifts, getPersonById}
}

module.exports = personController;