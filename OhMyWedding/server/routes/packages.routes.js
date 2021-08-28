var router = require("express").Router();
var packagesController = require("../controllers/packages.controller");

router.get("/", packagesController.getPackages);
// router.post("/addtofavorites", packagesController.addToFavorites);

module.exports = router;
