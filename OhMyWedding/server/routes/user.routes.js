var routers = require ('express').Router();
var userController = require('../controllers/user.controller');


routers.get('/', userController.SelectAll)
routers.post('/signUp', userController.CreateUser)





module.exports = routers