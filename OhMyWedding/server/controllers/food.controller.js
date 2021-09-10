
var db = require('../../config/db.confing');

const getFood = async (req, res) => {
  console.log('hello');
  // console.log(req.body);
  try {
    const packages = await db.food.findAll();
    res.status(200).send(packages);
  }
  catch (error) {
    res.status(400).send(error);
  }
};

const getOneFood = async function (req, res) {
  try {
    db.food.findOne({
      where: {
        id: req.params.id
      }
    }).then((foodi) => {
      res.send(foodi)
    })
  } catch (error) {

    res.status(404).send(error)
  }
}

const postFood = async function (req, res) {
  try {
    const createfoodi = await db.food.create({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      persons: req.body.persons,
      foodtype: req.body.foodtype,
      state: 'Not Reserved',
    })
    res.status(200).send(createfoodi);
  }
  catch (error) {
    res.status(400).send(error);
  }
}

const updateFood = async function (req, res) {
  try {
    db.food.update({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      persons: req.body.persons,
      foodtype: req.body.foodtype,
      state: 'Not Reserved',
    }, {
      where: {
        id: req.params.id
      }
    }).then((fod) => {
      res.status(200).send(fod)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}
const deletefood = async function (req, res) {
  try {
    db.food.destroy({
      where: {
        id: req.params.id
      }
    })
    res.send({ message: "deleted" })
  } catch (error) {
    res.status(404).send(error)
  }
}



module.exports = { getFood, postFood, getOneFood, updateFood, deletefood }
