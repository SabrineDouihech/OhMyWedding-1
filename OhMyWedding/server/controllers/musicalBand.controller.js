
var db = require("../../config/db.confing");

const gettheBand = async function (req, res) {
  try {
    const bands = await db.musicalband.findAll({});
    res.status(200).send(bands);
  } catch (error) {
    res.status(404).send(error);
  }
};

const getOneBand = async function (req, res) {
  try {
    db.musicalband.findOne({
      where: {
        id: req.params.id
      }
    }).then((band) => {
      res.status(200).send(band)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}

const updateband = async function (req, res) {
  try {
    db.musicalband.update({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      bandtype: req.body.bandtype,
      availabledate: req.body.availabledate,
      state: req.body.state
    }, {
      where: {
        id: req.params.id
      }
    }).then((bandi) => {
      res.status(200).send(bandi)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}



const postbands = async function (req, res) {
  try {
    const bandes = await db.musicalband.create({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      bandtype: req.body.bandtype,
      availabledate: req.body.availabledate,
      state: 'Not Reserved',
    })
    res.send(200).send(bandes)
  } catch (error) {

    res.status(404).send(error);
  }
}

const deleteband = async function (req, res) {
  try {
    db.musicalband.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.status(200).send("done deleting by by")
    })
  } catch (error) {
    res.status(404).send(error)
  }
}




module.exports = { gettheBand, postbands, getOneBand, updateband, deleteband };