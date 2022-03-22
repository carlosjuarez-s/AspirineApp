const personController = Person => {

    const getPerson = async(req, res) => {
        const { query } = req;
        const response = await Person.find(query);

        res.json(response);
    }

    const postPerson = async(req, res) => {
        const person = new Person(req.body);

        await person.save();

        res.send("Person save");
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
                    password: body.password,
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

    return { getPerson, postPerson, deletePerson, putPerson }
}

module.exports = personController;