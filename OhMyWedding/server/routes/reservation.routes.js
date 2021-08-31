var router = require('express').Router();
var ResertionController = require('../controllers/reservation.controller')






router.get("/", ResertionController.getReservation);











module.exports = router;