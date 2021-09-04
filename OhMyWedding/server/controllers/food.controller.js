var Food = require("../../models/Food");
var db = require("../../config/db.confing");

const getFood = async function (req, res) {
  try {
    const packages = await db.food.findAll({});
    res.status(200).send(packages);
  } catch (error) {
    res.status(400).send(error);
  }
};
// const createFood = (input) => {
//   const food = await db.food.create({
//     id: re
//   });
// }

module.exports = { getFood };
