var Food = require("../../models/Food");
var db = require('../../config/db.confing');



const getFood = async function (req, res) {
  try {
    const food = await db.food.findAll({});
    res.status(200).send(food);
  }
  catch (error) {
    res.status(400).send(error);
  }
};

const postFood = async function (req, res) {
  try {
    const createfoodi = await db.food.create({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      persons: req.body.persons,
      foodtype: req.body.foodtype,
      state: req.body.state
    })
    res.status(200).send(createfoodi);
  }
  catch (error) {
    res.status(400).send(error);
  }
}





module.exports = { getFood, postFood };