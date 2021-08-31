var routers = require("express").Router();
var adminController = require("../controllers/admin.controller");

routers.post("/", adminController.AdminLogin);

module.exports = routers;
