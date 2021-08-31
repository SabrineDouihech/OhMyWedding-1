var routers = require("express").Router();
var userController = require("../controllers/user.controller");

routers.get("/", userController.SelectAll);
routers.post("/signUp", userController.CreateUser);
routers.post("/logIn", userController.UserLogin);

module.exports = routers;
