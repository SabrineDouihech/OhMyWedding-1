var router = require('express').Router();
var cardsController = require('../controllers/invitationCard.controller')






router.get("/", cardsController.getInvitionCards);

router.post("/", cardsController.postInvitationcards)







module.exports = router;