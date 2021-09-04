const express = require("express");
const db = require("../config/db.confing");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const Role = db.role;
const app = express();

const port = 3000;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors("*"));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use("/api/package", require("./routes/packages.routes"));
app.use("/api", require("./routes/user.routes"));
app.use("/api/test/user", require("./routes/user.routes"));
app.use("/api/test/admin", require("./routes/user.routes"));
app.use("/api/test/pm", require("./routes/user.routes"));
app.use("/", require("./routes/reservation.routes"));
app.use("/", require("./routes/cars.routes"));
app.use("/", require("./routes/hosts.routes"));
app.use("/", require("./routes/InvitionCards.routes"));
app.use("/api/favorites", require("./routes/favourite.routes"));
app.use("/api/food", require("./routes/food.routes"));
const Packages = require("../models/Packages");
const Food = require("../models/Food");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

var mailOptions = {
  from: "OhMyWedding <mjoiblia10@gmail.com>",
  to: "testmajdi115@gmail.com",
  subject: "testing my email sending",
  text: "here your rservation",
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent" + info.response);
  }
});

db.sequelize.sync({ force: true }).then(() => {
  console.log("Database connection established with success");
  initial();
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

function initial() {
  Role.create({
    id: 1,
    name: "USER",
  });
  Role.create({
    id: 2,
    name: "PM",
  });

  Role.create({
    id: 3,
    name: "ADMIN",
  });
}
