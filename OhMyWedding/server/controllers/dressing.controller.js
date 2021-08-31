var Dressing = require("../../models/Dressing");

const getDressing = async function (req, res) {
  try {
    const clothes = await Dressing.findAll({});
    res.status(200).send(clothes);
  } catch (error) {
    res.status(400).send(error);
  }
};

const postDressing = async function (req, res) {

  try {
    const dress = await Dressing.create({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      genre: req.body.genre,
      availabledate: req.body.availabledate,
      state: req.body.state
    });
    res.status(200).send(dress);

  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = { getDressing, postDressing };