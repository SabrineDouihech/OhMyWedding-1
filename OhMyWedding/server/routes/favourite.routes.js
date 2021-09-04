var router = require("express").Router();
var favouriteController = require("../controllers/favourite.controller");

router.get("/:userId", favouriteController.getFavorites);
router.post("/", favouriteController.addToFavorites);
router.delete("/", favouriteController.deleteFavorites);

module.exports = router;
