require("dotenv").config();
const db = require("../../config/db.confing.js");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  console.log("Processing func -> SignUp");
  User.create({
    username: req.body.username,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.role,
          },
        },
      })
        .then((role) => {
          user.setRoles(role).then(() => {
            res.send({ message: "User registered successfully!" });
          });
        })
        .catch((err) => {
          res.status(500).send("Error -> " + err);
        });
    })
    .catch((err) => {
      res.status(500).send("Fail! Error -> " + err);
    });
};

exports.signin = (req, res) => {
  // console.log("Sign-In");

  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.status(404).send({ message: "User Not Found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          auth: false,
          accessToken: null,
          reason: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, process.env.DB_SECRET, {
        expiresIn: 86400, // expires in 24 hours
      });

      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("Role_" + roles[i].name.toUpperCase());
        }
      });

      res.status(200).send({
        auth: true,
        accessToken: token,
        username: user.name,
        authorities: authorities,
      });
    })
    .catch((err) => {
      res.status(500).send({ reason: err.message });
    });
};

exports.userContent = (req, res) => {
  User.findOne({
    where: { id: req.userId },
    attributes: ["username", "email"],
    include: [
      {
        model: Role,
        attributes: ["id", "name"],
        through: {
          attributes: ["userId", "roleId"],
        },
      },
    ],
  })
    .then((user) => {
      res.status(200).json({
        description: ">>> User Content Page",
        user: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        description: "Can not access User Page",
        error: err,
      });
    });
};

exports.adminBoard = (req, res) => {
  User.findOne({
    where: { id: req.userId },
    attributes: ["username", "email"],
    include: [
      {
        model: Role,
        attributes: ["id", "name"],
        through: {
          attributes: ["userId", "roleId"],
        },
      },
    ],
  })
    .then((user) => {
      res.status(200).json({
        description: " >>> Admin Contents",
        user: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        description: "Can not access Admin Board",
        error: err,
      });
    });
};

exports.managementBoard = (req, res) => {
  User.findOne({
    where: { id: req.userId },
    attributes: ["username"],
    include: [
      {
        model: Role,
        attributes: ["id", "name"],
        through: {
          attributes: ["userId", "roleId"],
        },
      },
    ],
  })
    .then((user) => {
      res.status(200).json({
        description: ">>>Management Board",
        user: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        description: "Can not access Management Board",
        error: err,
      });
    });
};
