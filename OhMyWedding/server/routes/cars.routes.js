var router = require('express').Router();
var carsController = require('../controllers/cars.controller')






router.get("/", carsController.getLuxuryCars);

router.get("/:id", carsController.getOneCar);

// router.put("/", carsController.cloudImg)

router.post("/", carsController.postLuxuryCar);

router.delete("/:id", carsController.deleteLuxuryCar);

router.put("/:id", carsController.updateCar)











module.exports = router;