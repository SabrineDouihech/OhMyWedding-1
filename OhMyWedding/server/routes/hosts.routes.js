var router = require('express').Router();
var hostsController = require('../controllers/hosts.controller')

router.get("/", hostsController.getHostes);
router.post("/", hostsController.postHoste)





module.exports = router;