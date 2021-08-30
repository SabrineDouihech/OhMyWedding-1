var router = require("express").Router();
var cardsController = require("../controllers/invitationCard.controller");

router.get("/", cardsController.getInvitionCards);

module.exports = router;
