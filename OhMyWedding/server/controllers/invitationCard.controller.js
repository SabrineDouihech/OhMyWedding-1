var db = require("../../config/db.confing");

const getInvitionCards = async function (req, res) {
  try {
    const cards = await db.invitationcard.findAll({});
    res.status(201).send(cards);
  } catch (error) {
    res.status(200).send(error);
  }
};

const getOneCard = async function (req, res) {
  try {
    db.invitationcard.findOne({
      where: {
        id: req.params.id
      }
    }).then((card) => {
      res.status(200).send(card)
    })
  } catch (error) {

    res.status(404).send(error)
  }
}
const postInvitationcards = async function (req, res) {
  try {
    const invit = await db.invitationcard.create({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      persons: req.body.persons,
      availabledate: req.body.availabledate,
      state: 'Not Reserved',
    });
    res.status(201).send(invit);
  } catch (error) {
    res.status(404).send(error);
  }
};
const deleteCards = async function (req, res) {
  try {
    db.invitationcard.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.send("card deleted")
    })
  } catch (error) {
    res.status(404).send(error)
  }
}
const updateCard = async function (req, res) {
  try {
    db.invitationcard.update({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      persons: req.body.persons,
      availabledate: req.body.availabledate,
      state: 'Not Reserved',
    }, {
      where: {
        id: req.params.id
      }
    }).then((carde) => {
      res.status(200).send(carde)
    })
  } catch (error) {
    res.status(404).send(error)
  }
}
module.exports = { getInvitionCards, postInvitationcards, getOneCard, deleteCards, updateCard };
