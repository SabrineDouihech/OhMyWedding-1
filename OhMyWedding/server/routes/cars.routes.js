var router = require("express").Router();
var carsController = require("../controllers/cars.controller");

router.get("/", carsController.getLuxuryCars);

module.exports = router;
