var db = require("../../config/db.confing");

const gettheBand = async function (req, res) {
  try {
    const bands = await db.musicalband.findAll({});
    res.status(200).send(bands);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { gettheBand };
