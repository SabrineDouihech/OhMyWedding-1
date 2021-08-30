var router = require("express").Router();
var hostsController = require("../controllers/hosts.controller");

router.get("/", hostsController.getHostes);

module.exports = router;
