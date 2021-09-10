var router = require("express").Router();
var foodController = require("../controllers/food.controller");

router.get("/foodi", foodController.getFood);

router.get("/:id", foodController.getOneFood)

router.post("/", foodController.postFood);

router.put("/:id", foodController.updateFood)

router.delete("/:id", foodController.deletefood)


module.exports = router;
