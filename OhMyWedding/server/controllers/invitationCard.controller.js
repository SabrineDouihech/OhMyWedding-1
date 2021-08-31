var InvitionCards = require("../../models/InvitationCard");
var db = require("../../config/db.confing");

const getInvitionCards = async function (req, res) {
  try {
    const cards = await db.invitationcard.findAll({});
    res.status(201).send(cards);
  } catch (error) {
    res.status(200).send(error);
  }
};

const postInvitationcards = async function (req, res) {
  try {
    const invit = await db.invitationcard.create({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      persons: req.body.persons,
      availabledate: req.body.availabledate,
      state: req.body.state,
    });
    res.status(201).send(invit);
  } catch (error) {
    res.status(200).send(error);
  }
};
module.exports = { getInvitionCards, postInvitationcards };
