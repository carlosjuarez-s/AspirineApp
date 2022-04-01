const shiftController = require('../controllers/shiftController');
const Shift = require('../models/shiftModel');
const express = require('express');

const routes = () => {
    const shiftRouter = express.Router();

    const controller = shiftController(Shift);
    const { getShift, postShift } = controller;
    
    shiftRouter
        .route("/shift")
        .get(getShift)
        .post(postShift)

    return shiftRouter;
}

module.exports = routes;