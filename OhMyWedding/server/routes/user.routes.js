var routers = require ('express').Router();
var userController = require('../controllers/user.controller');


routers.get('/api/user', userController.SelectAll)
routers.post('/api/user/signUp', userController.CreateUser)









module.exports = routers