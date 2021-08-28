var Packages = require("../../models/Packages");

//Methods

const getPackages = async function (req, res) {
  try {
    const packages = await Packages.findAll({});
    res.status(200).send(packages);
  } catch (error) {
    res.status(200).send(error);
  }
};

// const createAPackage = async function (req, res) {
//   const packagesList = {
//     name: req.body.name,
//     image: req.body.image,
//     price: req.body.price,
//     persons: req.body.persons,
//   };
//   try {
//     const packages = await Packages.create(packagesList);
//     res.status(200).send(packages);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

module.exports = { getPackages };
