
var db = require("../../config/db.confing");

//Methods
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
    })
    res.status(200).send(package)
  } catch (error) {
    res.send(404).send(error)
  }
}

// const addToFavorites = async function (req, res) {
//   const packagesList = {
//     name: req.body.name,
//     image: req.body.image,
//     price: req.body.price,
//     persons: req.body.persons,
//   };
//   try {
//     const packages = await Favourite.create(packagesList);
//     res.status(200).send(packages);
//   }
//   catch (error) {
//     res.status(200).send(error);
//   }
// };
const addToFavorites = async function (req, res) {
  const packagesList = {
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    persons: req.body.persons,
  };
  try {
    const packages = await Package.create(packagesList);
    res.status(200).send(packages);
  } catch (error) {
    res.status(200).send(error);
  }
};

module.exports = { getPackages, addToFavorites, postPackage };
