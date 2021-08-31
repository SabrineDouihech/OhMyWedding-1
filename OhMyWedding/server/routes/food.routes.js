var router = require("express").Router();
var foodController = require("../controllers/food.controller");

router.get("/", foodController.getFood);

module.exports = router;
