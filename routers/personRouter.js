const express = require('express');
const personController = require('../controllers/personController');

const routes = Person => {
    const personRouter = express.Router();

    const controller = personController(Person);
    const { getPerson, postPerson, deletePerson, putPerson } = controller;

    personRouter
        .route("/persons")
        .get(getPerson)
        .post(postPerson)

    personRouter
        .route("/persons/:personId")
        .put(putPerson)
        .delete(deletePerson)    

    return personRouter;
}

module.exports = routes;