
var db = require("../../config/db.confing");

const gettheBand = async function (req, res) {
  try {
    const bands = await db.musicalband.findAll({});
    res.status(200).send(bands);
  } catch (error) {
    res.status(404).send(error);
  }
};




const postbands = async function (req, res) {
  try {
    const bandes = await db.musicalband.create({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      bandtype: req.body.bandtype,
      availabledate: req.body.availabledate,
      state: req.body.state
    })
    res.send(200).send(bandes)
  } catch (error) {

    res.status(404).send(error);
  }
}

module.exports = { gettheBand, postbands };