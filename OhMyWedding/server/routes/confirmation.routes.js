var router = require('express').Router();
var confirmationController = require('../controllers/confirmation.controller')



router.get('/', confirmationController.getConfirmation)
router.post('/', confirmationController.postConfirmation)

module.exports = router;