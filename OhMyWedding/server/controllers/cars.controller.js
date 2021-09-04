
var db = require("../../config/db.confing");

const getLuxuryCars = async function (req, res) {
  try {
    const lc = await db.luxurycars.findAll();
    res.status(200).send(lc);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getOneCar = async (req, res) => {
  try {
    db.luxurycars.findOne({
      where: {
        id: req.params.id
      }
    }).then((car) => {
      res.send(car)
    })
  } catch (error) {
    res.status(404).send(error);
  }
}

const postLuxuryCar = async function (req, res) {
  try {
    const lux = await db.luxurycars.create({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      brand: req.body.brand,
      availabledate: req.body.availabledate,
      state: 'Not Reserved',
    });
    res.status(200).send(lux);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteLuxuryCar = async (req, res) => {
  try {
    db.luxurycars.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.send({ message: "deleted with success" })
    })

  } catch (error) {
    res.status(404).send(error);
  }
}

const updateCar = async (req, res) => {
  try {

    db.luxurycars.update({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      brand: req.body.brand,
      availabledate: req.body.availabledate,
      state: 'Not Reserved',
    }, {
      where: {
        id: req.params.id
      }

    }).then((car) => {
      res.send({ message: "updating with success" });
    })
  } catch (error) {
    res.status(404).send(error)
  }

}


module.exports = { getLuxuryCars, postLuxuryCar, deleteLuxuryCar, getOneCar, updateCar };
