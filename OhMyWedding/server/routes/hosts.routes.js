var router = require('express').Router();
var hostsController = require('../controllers/hosts.controller')






router.get("/hosts", hostsController.getHostes);











module.exports = router;