var router = require("express").Router();
var cardsController = require("../controllers/InvitationCard.controller");

router.get("/cards", cardsController.getInvitionCards);

module.exports = router;
