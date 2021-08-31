var router = require('express').Router();
var cardsController = require('../controllers/inviCard.controller')


router.get("/cards", cardsController.getInvitionCards);


module.exports = router;