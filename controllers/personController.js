const secret = require('../verifications/security');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const personController = Person => {

    const getPerson = async(req, res) => {
        const { query } = req;
        const response = await Person.find(query);

        res.json(response);
    }

    const postPerson = async(req, res) => {
        const { body } = req;
        const person = new Person(req.body);
        var response;

        const search = await Person.findOne({"userName": body.userName});

        if(search.userName != body.userName){
            person.password = await bcrypt.hash(person.password, 10);
            await person.save();
            response = {message: "Person save", person: person}
        } else {
            response = {message: "This user is already in use"}
        }
        
        res.json(response);
    }

    const putPerson = async(req, res) => {
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
                    password: await bcrypt.hash(body.password, 10),
                    email: body.email,
                    address: body.address,
                    phone: body.phone
                }
            }
        )

        res.json(person)
    }

    const deletePerson = async(req, res) => {
        const { params } = req;
        const person = await Person.findById(params.personId);
        await Person.deleteOne(person);
        res.send("Deleted person");
    }

    const postLogin = async(req, res) => {
        const { body } = req;
        var response;

        const person = await Person.findOne({
            "userName": body.userName
        })

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
            response = {message: "Verify!", token: decoded}
        }catch(e) {
            response = {error: e}
        }

        res.json(response);
    }

    return { getPerson, postPerson, deletePerson, putPerson, postLogin, getLoginValidate }
}

module.exports = personController;