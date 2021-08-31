var router = require('express').Router();
var carsController = require('../controllers/cars.controller')






router.get("/", carsController.getLuxuryCars);

router.post("/", carsController.postLuxuryCar);











module.exports = router;