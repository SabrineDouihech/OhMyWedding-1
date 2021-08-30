var LuxuryCars = require("../../models/LuxuryCars");

const getLuxuryCars = async function (req, res) {
  try {
    const cars = await LuxuryCars.findAll({});
    res.status(201).send(cars);
  } catch (error) {
    res.status(200).send(error);
  }
};
module.exports = { getLuxuryCars };
