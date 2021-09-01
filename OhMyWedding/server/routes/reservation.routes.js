var router = require('express').Router();
var ResertionController = require('../controllers/reservation.controller')






router.get("/", ResertionController.getReservation);
router.post("/", ResertionController.postReservation);











module.exports = router;