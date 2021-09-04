var Dressing = require("../../models/Dressing");
var db = require("../../config/db.confing");

const getDressing = async function (req, res) {
  try {
    const clothes = await db.dressing.findAll({});
    res.status(200).send(clothes);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getDressing };
