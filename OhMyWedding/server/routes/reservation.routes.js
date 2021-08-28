var router = require('express').Router();
var ResertionController = require('../controllers/reservation.controller')






router.get("/res", ResertionController.getReservation);











module.exports = router;