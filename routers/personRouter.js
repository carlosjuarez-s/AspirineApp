const express = require('express');
const personController = require('../controllers/personController');

const routes = Person => {
    const personRouter = express.Router();

    const controller = personController(Person);
    const { getPerson, postPerson, deletePerson, putPerson, postLogin, getLoginValidate } = controller;

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

    personRouter
        .route("/persons/login/validate")
        .get(getLoginValidate)

    return personRouter;
}

module.exports = routes;