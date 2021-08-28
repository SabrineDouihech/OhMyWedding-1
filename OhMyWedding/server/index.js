const express = require("express");
const db = require("../db/index");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 3000;

const userRouter = require("./routes/user.routes");
const packagesRouter = require("./routes/packages.routes");
const favouriteRouter = require("./routes/favourite.routes");
const foodRouter = require("./routes/food.routes");

const Packages = require ('../models/Packages') 
const Food = require ('../models/Food') 

db.authenticate()
  .then(() => {
    console.log("Database connected");
    return db.sync();
  })
  .then(()=>{
  //   const pack1 = Packages.create ({name:"Decoration", image: "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", price: 30000, persons:100})
  // const food1 = Food.create ({name:"cake", image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", price: 30000, foodtype: "Dinner"})
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors("*"));

app.use("/api/package", packagesRouter);
app.use("/api/user", userRouter);
app.use("/api/favorites", favouriteRouter);
app.use("/api/food", foodRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
