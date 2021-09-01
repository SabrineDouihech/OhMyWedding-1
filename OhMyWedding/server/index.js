const express = require("express");
const db = require("../config/db.confing");
const bodyParser = require("body-parser");
const cors = require("cors");

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
const adminRouter = require("./routes/admin.routes");
const reservationRoutes = require("./routes/reservation.routes");
const carsRoutes = require("./routes/cars.routes");
const hostsRoutes = require("./routes/hosts.routes");
const CardsRoutes = require("./routes/InvitationCard.routes");
const favouriteRouter = require("./routes/favourite.routes");
const foodRouter = require("./routes/food.routes");

app.use("/api/package", packagesRouter);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRouter);
app.use("/api/resrvation", reservationRoutes);
app.use("/api/cars", carsRoutes);
app.use("/api/hosts", hostsRoutes);
app.use("/api/invitationcards", CardsRoutes);
app.use("/api/favorites", favouriteRouter);
app.use("/api/food", foodRouter);

const Packages = require("../models/Packages");
const Food = require("../models/Food");
const Admin = require("../models/Admin");

db.sequelize.sync().then(() => {
  console.log("Database connection established with success");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
