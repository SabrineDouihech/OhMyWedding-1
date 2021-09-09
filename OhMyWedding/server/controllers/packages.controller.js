var db = require("../../config/db.confing");

// const getPackagesCategories = async function (req, res) {
//   try {
//     const packlages = await favorite.findAll({

//       include: food,
//       // all the categories
//     });
//   }
// }

// const getpackagesDetails = async function (req, res) {
//   try {
//     // const { userId: UserId } = req.params;
//     const getpackagesDetails = await .findAll({
//       where: { packages },
//       include: {food}
//     });
//   }
// }

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
};
