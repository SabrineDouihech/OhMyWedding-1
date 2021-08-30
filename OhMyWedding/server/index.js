const express = require("express");
const db = require("../db/index");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 3000;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors("*"));

const userRoutes = require("./routes/user.routes");
const packagesRouter = require("./routes/packages.routes");
const favouriteRouter = require("./routes/favourite.routes");
const foodRouter = require("./routes/food.routes");
const adminRouter = require("./routes/admin.routes");
const reservationRoutes = require("./routes/reservation.routes");
const carsRoutes = require("./routes/cars.routes");
const hostsRoutes = require("./routes/hosts.routes");
const CardsRoutes = require("./routes/InvitationCard.routes");
const dressingRouter = require("./routes/dressing.routes");
const musicalbandgRouter = require("./routes/mucsicalBand.routes");

app.use("/api/package", packagesRouter);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRouter);
app.use("/api/res", reservationRoutes);
app.use("/api/cars", carsRoutes);
app.use("/api/hosts", hostsRoutes);
app.use("/api/cards", CardsRoutes);
app.use("/api/favorites", favouriteRouter);
app.use("/api/food", foodRouter);
app.use("/api/dressing", dressingRouter);
app.use("/api/musicalband", musicalbandgRouter);

// const Packages = require ('../models/Packages')
// const Food = require ('../models/Food')
//const LuxuryCars = require ('../models/LuxuryCars')

db.authenticate()
  .then(() => {
    console.log("Database connected");
    return db.sync();
  })
  .then(() => {
    // const pack1 = Packages.create ({name:"pack2", image: "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", price: 30000, persons:100})
    // const pack2 = Packages.create ({name:"pack2", image: "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", price: 30000, persons:100})
    // const food1 = Food.create ({name:"food1", image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", price: 30000, foodtype: "Dinner"})
    //const food2 = Food.create ({name:"food2", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", price: 20000, foodtype: "Dinner"})
    // const car1 = LuxuryCars.create ({name:"car1", image: "https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", price: 1000, brand: "Mercedes"})
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
