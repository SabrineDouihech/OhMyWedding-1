var db = require("../../config/db.confing");

// const getpackagesCategoriesClothes = async function (req, res) {
//   try {
//     db.dressing
//       .findOne({
//         where: {
//           id: req.params.id,
//         },
//       })
//       .then((dress) => {
//         res.send(dress);
//       });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

const getPackagesCategories = async function (req, res) {
  try {
    const packages = await favorite.findAll({
      include: [
        food,
        dressings,
        hosts,
        invitationcards,
        luxurycars,
        musicalbands,
      ],
    });
    res.send(packages);
  } catch (error) {
    res.status(200).send(error);
  }
};

module.exports = { getPackagesCategories };
