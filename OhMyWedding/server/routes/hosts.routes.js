var router = require('express').Router();
var hostsController = require('../controllers/hosts.controller')

router.get("/", hostsController.getHostes);

router.get("/:id", hostsController.getOneHoste)

router.post("/", hostsController.postHoste)

router.delete("/:id", hostsController.deleteHoste)

router.put("/:id", hostsController.updateHost)

module.exports = router;