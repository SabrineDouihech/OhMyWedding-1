var router = require("express").Router();
var DetailsController = require("../controllers/details.controller");

router.get("/", DetailsController.getPackagesCategories);

module.exports = router;
