var router = require("express").Router();
var cardsController = require("../controllers/invitationCard.controller");

router.get("/", cardsController.getInvitionCards);

router.get("/:id", cardsController.getOneCard)

router.post("/", cardsController.postInvitationcards);

router.delete("/:id", cardsController.deleteCards)

router.put("/:id", cardsController.updateCard)
module.exports = router;
