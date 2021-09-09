var router = require("express").Router();
var favouriteController = require("../controllers/favourite.controller");
const { verifyToken } = require("./verifyJwToken");

router.get("/", verifyToken, favouriteController.getFavorites);
router.post("/", verifyToken, favouriteController.addToFavorites);
router.delete("/:id", verifyToken, favouriteController.deleteFavorites);

module.exports = router;
