var router = require("express").Router();
var packagesController = require("../controllers/packages.controller");
// var carsDetailsController = require("../controllers/packages.controller");

// router.get("/:id", carsDetailsController.getpackagesCategoriesCar);
router.get("/", packagesController.getPackages);
router.post("/", packagesController.postPackage);
router.get("/search", packagesController.searchCategory);
// router.post("/addtofavorites", packagesController.addToFavorites);

module.exports = router;
