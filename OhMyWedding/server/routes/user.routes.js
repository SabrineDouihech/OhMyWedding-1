const verifySignUp = require("./verifySignUp");
const authJwt = require("./verifyJwToken");
var router = require("express").Router();
const controller = require("../controllers/user.controller.js");

router.post(
  "/auth/signup",
  [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted],
  controller.signup
);

router.post("/auth/signin", controller.signin);

router.get("/test/user", [authJwt.verifyToken], controller.userContent);

router.get(
  "/test/pm",
  [authJwt.verifyToken, authJwt.isPmOrAdmin],
  controller.managementBoard
);

router.get(
  "/test/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.adminBoard
);

module.exports = router;
