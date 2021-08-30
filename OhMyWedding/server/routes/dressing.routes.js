var router = require("express").Router();
var dressingController = require("../controllers/dressing.controller");

router.get("/", dressingController.getDressing);

module.exports = router;