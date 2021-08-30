var MusicalBand = require("../../models/MusicalBand");

const gettheBand = async function (req, res) {
  try {
    const bands = await MusicalBand.findAll({});
    res.status(200).send(bands);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { gettheBand };