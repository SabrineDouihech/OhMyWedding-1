var db = require("../../config/db.confing");
var db = require("../../config/db.confing");
var db = require("../../config/db.confing");

// const getpackagesCategoriesCar = async (req, res) => {
//   try {
//     db.luxurycars
//       .findOne({
//         where: {
//           name: "Vintage",
//         },
//       })
//       .then((car) => {
//         res.send(car);
//       });
//   } catch (error) {
//     res.status(404).send(error);
//   }
// };

const getpackagesCategoriesClothes = async function (req, res) {
  try {
    db.dressing
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((dress) => {
        res.send(dress);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPackages = async function (req, res) {
  try {
    const packages = await db.packages.findAll();
    res.status(200).send(packages);
  } catch (error) {
    res.status(200).send(error);
  }
};

const postPackage = async function (req, res) {
  try {
    const package = await db.packages.create({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      availabledate: req.body.availabledate,
      persons: req.body.persons,
    });
    res.status(200).send(package);
  } catch (error) {
    res.send(404).send(error);
  }
};

module.exports = {
  getPackages,
  postPackage,

  getpackagesCategoriesClothes,
};
