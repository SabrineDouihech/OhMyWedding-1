var router = require("express").Router();
var musicalBandController = require("../controllers/musicalBand.controller");

router.get("/", musicalBandController.gettheBand);

module.exports = router;