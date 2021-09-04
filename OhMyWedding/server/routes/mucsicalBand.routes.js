var router = require("express").Router();
var musicalBandController = require("../controllers/musicalBand.controller");

router.get("/", musicalBandController.gettheBand);

router.get("/:id", musicalBandController.getOneBand)

router.post("/", musicalBandController.postbands);

router.put("/:id", musicalBandController.updateband)

router.delete("/:id", musicalBandController.deleteband)

module.exports = router;
