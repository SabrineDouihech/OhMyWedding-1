const { Op } = require("sequelize");
var db = require("../../config/db.confing");
const { food, musicalband, host, dressing, luxurycars, invitationcard, packages } = require("../../config/db.confing");

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

const searchCategory = async function (req, res) {
  try {
    const { q: query, category } = req.query;
    const model = { food, band: musicalband, host, clothes: dressing, cars: luxurycars, invitationcard }[category]
    if (!model) {
      return res.status(404).send({ msg: "category does not exist" });
    }
    const result = await model.findAll({
      where: {
        name: {
          [Op.substring]: query
        }
      }
    })
    res.status(200).send(result);
  } catch (e) {
    console.log(e)
    res.status(404).send({ msg: "category does not exist" });
  }
}

const updatePackageWithCategory = async (req, res) => {
  try {
    // const { } = req.body
    const package = await packages.findOne({ where: { id: 1 } });
    console.log(Object.keys(package))
    await package.setFoods({ id: 12 });
    res.send(package);
  }
  catch (e) {
    console.log(e)
  }
}

module.exports = {
  getPackages,
  postPackage,
  searchCategory,
  updatePackageWithCategory
  // getpackagesCategoriesClothes,
};
