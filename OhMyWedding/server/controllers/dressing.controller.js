var Dressing = require("../../models/Dressing");

const getDressing = async function (req, res) {
  try {
    const clothes = await Dressing.findAll({});
    res.status(200).send(clothes);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getDressing };