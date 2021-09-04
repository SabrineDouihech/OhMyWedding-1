var db = require("../../config/db.confing");

const getHostes = async function (req, res) {
  try {
    const hosts = await db.host.findAll();
    res.status(201).send(hosts);
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
module.exports = { getHostes };
