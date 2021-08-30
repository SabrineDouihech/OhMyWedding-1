var InvitionCards = require("../../models/InvitationCard");

const getInvitionCards = async function (req, res) {
  try {
    const cards = await InvitionCards.findAll({});
    res.status(201).send(cards);
  } catch (error) {
    res.status(200).send(error);
  }
};
module.exports = { getInvitionCards };
