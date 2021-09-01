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
const musicalBandRouter = require("./routes/mucsicalBand.routes");
const dressingRouter = require("./routes/dressing.routes");

app.use("/api/package", packagesRouter);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRouter);
app.use("/api/resrvation", reservationRoutes);
app.use("/api/cars", carsRoutes);
app.use("/api/hosts", hostsRoutes);
app.use("/api/invitationcards", CardsRoutes);
app.use("/api/favorites", favouriteRouter);
app.use("/api/food", foodRouter);
app.use("/api/musicalband", musicalBandRouter);
app.use("/api/dressing", dressingRouter);

const Packages = require("../models/Packages");
const Food = require("../models/Food");
const Admin = require("../models/Admin");

db.sequelize.sync().then(() => {
  console.log("Database connection established with success");
});

// db.authenticate()
//     .then(() => {
//         console.log('Database connected');
//         return db.sync({ force: true });
//     }).then(async () => {
//         //         try {
//         //             const pack1 = Packages.create ({name:"pack2", image: "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", price: 30000, persons:100})
//         //   const pack2 = Packages.create ({name:"pack2", image: "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", price: 30000, persons:100})
//         //   const food1 = Food.create ({name:"food1", image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", price: 30000, foodtype: "Dinner"})
//         //   const food2 = Food.create ({name:"food2", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", price: 20000, foodtype: "Dinner"})

//         //             console.log('dummy data created');
//         //         } catch (e) { console.error(e) }
//     })
//     .catch(err => {
//         console.log('Error:' + err)
//     });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// const pack1 = Packages.create({image:"https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",name:"Package1",price:"50000 dinars", persons:"100 person"})
//     const pack2 = Packages.create({image:"https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",name:"Package2",price:"30000 dinars", persons:"100 person"})
