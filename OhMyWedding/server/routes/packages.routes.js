var router = require ('express').Router();
var packagesController = require('../controllers/packages.controller')


//Path
console.log(packagesController);
// router.post("/", packagesController.createAPackage);
router.get("/api/getpackages", packagesController.getPackages);






module.exports = router;