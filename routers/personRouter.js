const express = require('express');
const personController = require('../controllers/personController');

const routes = Person => {
    const personRouter = express.Router();

    const controller = personController(Person);
    const { getPerson, postPerson, deletePerson, putPerson, postLogin } = controller;

    personRouter
        .route("/persons")
        .get(getPerson)
        .post(postPerson)

    personRouter
        .route("/persons/:personId")
        .put(putPerson)
        .delete(deletePerson)    

    personRouter
        .route("/persons/login")
        .post(postLogin)

    return personRouter;
}

module.exports = routes;