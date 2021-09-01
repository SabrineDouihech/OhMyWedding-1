var router = require("express").Router();
var dressingController = require("../controllers/dressing.controller");

router.get("/", dressingController.getDressing);

router.get("/:id", dressingController.getOneclothe)

router.post("/", dressingController.postDressing)

router.delete("/:id", dressingController.deleteDress)

router.put("/:id", dressingController.updateDress)

module.exports = router;