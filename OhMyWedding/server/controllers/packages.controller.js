const { type } = require("os");
const { Op } = require("sequelize");
var db = require("../../config/db.confing");
const {
  food,
  musicalband,
  host,
  dressing,
  luxurycars,
  invitationcard,
  packages,
} = require("../../config/db.confing");

// const getPackagesCategories = async function (req, res) {
//   try {
//     const packlages = await favorite.findAll({

//       include: food,
//       // all the categories
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
      FoodId: req.body.foodId,
      DressingId: req.body.dressingId,
      HostId: req.body.hostId,
      InvitationCardId: req.body.invId,
      LuxuryCarId: req.body.carId,
      usicalBandId: req.body.bandId,
      state: "Not Reserved",
    });
    res.status(200).send(package);
  } catch (error) {
    res.send(404).send(error);
  }
};
const deletePackage = async (req, res) => {
  try {
    db.packages
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(() => {
        res.send({ message: "deleted with success" });
      });
  } catch (error) {
    res.status(404).send(error);
  }
};

const searchCategory = async function (req, res) {
  try {
    const { q: query, category } = req.query;
    const model = {
      food,
      band: musicalband,
      host,
      clothes: dressing,
      cars: luxurycars,
      invitationcard,
    }[category];
    if (!model) {
      return res.status(404).send({ msg: "category does not exist" });
    }
    const result = await model.findAll({
      where: {
        name: {
          [Op.substring]: query,
        },
      },
    });
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
    res.status(404).send({ msg: "category does not exist" });
  }
};

const updatePackageWithCategory = async (req, res) => {
  try {
    const { type, categoryId } = req.body;
    const { id: packageId } = req.params;

    const package = await packages.findOne({ where: { id: packageId } });
    if (!package) throw new Error("Package Not Found");

    const assossiationField = {
      food: "FoodId",
      host: "HostId",
      dressing: "DressingId",
      invitationCard: "InvitationCardId",
      luxuryCar: "LuxuryCarId",
      musicalBand: "MusicalBandId",
    }[type.toLowerCase()];
    package[assossiationField] = categoryId;
    await package.save();
    res.send(package);
  } catch (e) {
    res.status(400).send(e.message || e);
  }
};

module.exports = {
  getPackages,
  postPackage,
  searchCategory,
  updatePackageWithCategory,
  deletePackage,
};
