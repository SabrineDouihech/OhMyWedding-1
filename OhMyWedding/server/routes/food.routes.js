var router = require("express").Router();
var foodController = require("../controllers/food.controller");

router.get("/", foodController.getFood);
router.post("/", foodController.postFood)

module.exports = router;
