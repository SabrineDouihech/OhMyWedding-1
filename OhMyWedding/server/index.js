const express = require("express");
const db = require("../config/db.confing");
const bodyParser = require("body-parser");
const cors = require("cors");
// const Packages = require("../models/Packages");
// const Food = require("../models/Food");
// const Admin = require("../models/Admin");

// const upload = require("./routes/uploader");

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

const userRoutes = require("./routes/user.routes");
const packagesRouter = require("./routes/packages.routes");
// const adminRouter = require("./routes/admin.routes");
const reservationRoutes = require("./routes/reservation.routes");
const carsRoutes = require("./routes/cars.routes");
const hostsRoutes = require("./routes/hosts.routes");
const CardsRoutes = require("./routes/InvitationCard.routes");
const favouriteRouter = require("./routes/favourite.routes");
const foodRouter = require("./routes/food.routes");
const musicalBandRouter = require("./routes/mucsicalBand.routes");
const dressingRouter = require("./routes/dressing.routes");

// const categorycarRouter = require("./routes/packages.routes");

app.use("/api/package", packagesRouter);
app.use("/api/user", userRoutes);

// app.use("/api/detailscar", categorycarRouter);

// app.use("/api/admin", adminRouter);
app.use("/api/resrvation", reservationRoutes);
app.use("/api/cars", carsRoutes);
app.use("/api/hosts", hostsRoutes);
app.use("/api/invitationcards", CardsRoutes);
app.use("/api/favorites", favouriteRouter);
app.use("/api/food", foodRouter);
app.use("/api/musicalband", musicalBandRouter);
app.use("/api/dressing", dressingRouter);

const multer = require("multer");

// CREATES A LOCAL FOLDER
const upload = multer({ dest: "uploads" });

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "unsplashclone",
  api_key: "181682594916931",
  api_secret: "RJUn_vM_yWc3eLxDQ9B2mhgdCi0",
});
// app.post("/api", upload.single("picture"), async (req, res) => {
//   console.log(res.json({ picture: req.file.path }))
//   // return res.json({ picture: req.file.path });
// });

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

db.sequelize.sync({ force: false }).then(() => {
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
