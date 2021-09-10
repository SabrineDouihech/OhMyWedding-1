var router = require("express").Router();
var packagesController = require("../controllers/packages.controller");
// var carsDetailsController = require("../controllers/packages.controller")
const { isAdmin, verifyToken } = require("./verifyJwToken")

// router.get("/:id", carsDetailsController.getpackagesCategoriesCar);
router.get("/", packagesController.getPackages);
router.post("/", packagesController.postPackage);
router.put("/:id", verifyToken, packagesController.updatePackageWithCategory);
router.get("/search", packagesController.searchCategory);
// router.post("/addtofavorites", packagesController.addToFavorites);

module.exports = router;
