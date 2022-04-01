const express = require('express');
const personController = require('../controllers/personController');

const validator = require('express-joi-validation').createValidator();
const personValidations = require('../validations/personValidations');

const routes = Person => {
    const personRouter = express.Router();

    const controller = personController(Person);
    const { getPerson, postPerson, deletePerson, putPerson, postLogin, getLoginValidate, patchShift, getShifts, getPersonById } = controller;

    personRouter
        .route("/persons")
        .get(getPerson)
        .post(validator.body(personValidations), postPerson)

    personRouter
        .route("/persons/:personId")
        .put(putPerson)
        .delete(deletePerson)    
        .get(getPersonById)

    personRouter
        .route("/persons/login")
        .post(postLogin)

    personRouter
        .route("/persons/login/validate")
        .get(getLoginValidate)

    personRouter
        .route("/persons/shift/:personId")
        .patch(patchShift)
        .get(getShifts)

    return personRouter;
}

module.exports = routes;