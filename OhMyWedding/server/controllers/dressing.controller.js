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

const getOneclothe = async function (req, res) {
  try {
    db.dressing.findOne({
      where: {
        id: req.params.id
      }
    }).then((dress) => {
      res.send(dress)
    })
  } catch (error) {
    res.status(400).send(error)
  }
}
const postDressing = async function (req, res) {

  try {
    const dress = await db.dressing.create({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      genre: req.body.genre,
      availabledate: req.body.availabledate,
      state: 'Not Reserved',
    });
    res.status(200).send(dress);

  } catch (error) {
    res.status(400).send(error)
  }
}
const deleteDress = async function (req, res) {
  try {
    db.dressing.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.send({ message: "deleted Dress" })
    })

  } catch (error) {
    res.status(404).send(error)
  }
}

const updateDress = async function (req, res) {
  try {
    db.dressing.update({

      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      genre: req.body.genre,
      availabledate: req.body.availabledate,
      state: 'Not Reserved',
    }, {
      where: {
        id: req.params.id
      }
    }).then((dress) => {
      res.status(200).send(dress)
    })
  } catch (error) {
    res.status(404).send(eroor)
  }
}

module.exports = { getDressing, postDressing, getOneclothe, deleteDress, updateDress };
