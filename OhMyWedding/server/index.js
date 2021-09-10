const express = require("express");
const db = require("../config/db.confing");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// const Admin = require("../models/Admin");
const Packages = require("../models/Packages");
const Food = require("../models/Food");
// const Packages = require("../models/Packages");
// const Food = require("../models/Food");
// const Admin = require("../models/Admin");

// const upload = require("./routes/uploader");



const Role = db.role;
const app = express();

const port = 3000;
// const upload = require("./routes/uploader");

app.use(express.json({ limit: "50mb" }));
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

app.use("/api/dressing", require("./routes/dressing.routes"));
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/package", require("./routes/packages.routes"));
// app.use('/api/admin', adminRouter)
app.use("/api/reservation", require("./routes/reservation.routes"));
app.use("/api/cars", require("./routes/cars.routes"));
app.use("/api/hosts", require("./routes/hosts.routes"));
app.use("/api/invitationcards", require("./routes/InvitationCard.routes"));
app.use("/api/favorites", require("./routes/favourite.routes"));
app.use("/api/food", require("./routes/food.routes"));
app.use("/api/musicalband", require("./routes/mucsicalBand.routes"));
app.use("/api", require("./routes/confirmation.routes"))

const multer = require("multer");
// CREATES A LOCAL FOLDER
const upload = multer({ dest: "uploads" });
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "unsplashclone",
  api_key: "181682594916931",
  api_secret: "RJUn_vM_yWc3eLxDQ9B2mhgdCi0",
});
app.post("/api", upload.single("picture"), async (req, res) => {
  console.log(res.json({ picture: req.file.path }))
  return res.json({ picture: req.file.path });
});
app.post("/upload", upload.any(0), (req, res) => {
  let image = req.files[0].path;
  try {
    cloudinary.uploader.upload(image, (error, result) => {
      error && res.send({ status: false, msg: error });
      res.send({ status: true, msg: result });
    });
  } catch (err) {
    res.send({ status: false, msg: err });
  }
});

// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// });

// var mailOptions = {
//   from: "OhMyWedding <mjoiblia10@gmail.com>",
//   to: "testmajdi115@gmail.com",
//   subject: "testing my email sending",
//   text: "here your rservation",
// };

// transporter.sendMail(mailOptions, function (err, info) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Email sent" + info.response);
//   }
// });

db.sequelize.sync({ force: 0 }).then(() => {
  console.log("Database connection established with success");
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


// function initial() {
//   Role.create({
//     name: "USER"
//   });
//   Role.create({
//     name: "PM"
//   });

//   Role.create({
//     name: "ADMIN",
//   });
// }
